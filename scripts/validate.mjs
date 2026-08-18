#!/usr/bin/env node
/**
 * Validates the skill registry.
 *
 *   node scripts/validate.mjs
 *
 * Checks, for every skill:
 *   - the folder follows the <name>-skill convention
 *   - SKILL.md exists and has valid YAML-ish frontmatter
 *   - frontmatter `name` matches the folder name (required by Claude Code / Codex)
 *   - `description` exists and is a usable length
 *   - the skill is present in skills.json with all required metadata
 *   - relative links inside SKILL.md and README.md actually resolve
 *   - no orphan entries in skills.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS_DIR = path.join(ROOT, 'skills');

const errors = [];
const warnings = [];
const err = (id, msg) => errors.push(`${id}: ${msg}`);
const warn = (id, msg) => warnings.push(`${id}: ${msg}`);

const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'skills.json'), 'utf8')
);
const categoryIds = new Set(manifest.categories.map((c) => c.id));
const manifestById = new Map(manifest.skills.map((s) => [s.id, s]));

const REQUIRED_META = [
  'id',
  'name',
  'category',
  'icon',
  'tagline',
  'summary',
  'what',
  'prompts',
  'outputs',
  'tags',
];

function parseFrontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return null;
  const out = {};
  let key = null;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
    if (kv) {
      key = kv[1];
      out[key] = kv[2].trim();
    } else if (key && line.trim()) {
      out[key] = `${out[key]} ${line.trim()}`.trim();
    }
  }
  // strip YAML block-scalar markers (`>` / `|`) used by some skills
  for (const k of Object.keys(out)) out[k] = out[k].replace(/^[>|]-?\s*/, '');
  return out;
}

function checkLinks(id, file) {
  const dir = path.dirname(file);
  const text = fs.readFileSync(file, 'utf8');
  const rx = /\[[^\]]*\]\(([^)\s]+)\)/g;
  let m;
  while ((m = rx.exec(text))) {
    const target = m[1];
    if (/^(https?:|mailto:|#|<)/.test(target)) continue;
    // ignore documentation placeholders like [Title](URL) or [name](PATH)
    if (/^[A-Z_]+$/.test(target)) continue;
    const clean = target.split('#')[0];
    if (!clean) continue;
    if (!fs.existsSync(path.resolve(dir, clean))) {
      err(id, `broken relative link in ${path.basename(file)} -> ${target}`);
    }
  }
}

const folders = fs
  .readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

for (const id of folders) {
  const dir = path.join(SKILLS_DIR, id);

  if (!id.endsWith('-skill')) {
    err(id, 'folder name must follow the <name>-skill convention');
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
    err(id, 'folder name must be lowercase kebab-case');
  }

  const skillFile = path.join(dir, 'SKILL.md');
  if (!fs.existsSync(skillFile)) {
    err(id, 'missing SKILL.md');
    continue;
  }

  const fm = parseFrontmatter(fs.readFileSync(skillFile, 'utf8'));
  if (!fm) {
    err(id, 'SKILL.md has no YAML frontmatter');
  } else {
    if (fm.name !== id) {
      err(id, `frontmatter name "${fm.name}" must equal the folder name "${id}"`);
    }
    if (!fm.description) {
      err(id, 'frontmatter is missing a description');
    } else if (fm.description.length < 40) {
      warn(id, 'description is very short — agents trigger on this text');
    } else if (fm.description.length > 1024) {
      warn(id, 'description is over 1024 chars, some clients truncate it');
    }
  }

  const meta = manifestById.get(id);
  if (!meta) {
    err(id, 'not listed in skills.json');
  } else {
    for (const key of REQUIRED_META) {
      if (
        meta[key] === undefined ||
        (Array.isArray(meta[key]) && meta[key].length === 0) ||
        meta[key] === ''
      ) {
        err(id, `skills.json entry is missing "${key}"`);
      }
    }
    if (meta.category && !categoryIds.has(meta.category)) {
      err(id, `unknown category "${meta.category}"`);
    }
    if (meta.example && !fs.existsSync(path.join(dir, meta.example))) {
      err(id, `example file not found: ${meta.example}`);
    }
  }

  const readme = path.join(dir, 'README.md');
  if (!fs.existsSync(readme)) {
    err(id, 'missing README.md — run `npm run docs`');
  } else {
    checkLinks(id, readme);
  }
  checkLinks(id, skillFile);
}

for (const id of manifestById.keys()) {
  if (!folders.includes(id)) err(id, 'listed in skills.json but has no folder');
}

const rootReadme = path.join(ROOT, 'README.md');
if (fs.existsSync(rootReadme)) checkLinks('README.md', rootReadme);

/* ------------------------------------------------------------------ report */

const G = '[32m';
const R = '[31m';
const Y = '[33m';
const D = '[90m';
const X = '[39m';

console.log('');
console.log(`  Validating ${folders.length} skills...`);
console.log('');

for (const w of warnings) console.log(`  ${Y}!${X} ${w}`);
for (const e of errors) console.log(`  ${R}x${X} ${e}`);

if (!errors.length) {
  console.log(
    `  ${G}All ${folders.length} skills valid.${X}` +
      (warnings.length ? ` ${D}(${warnings.length} warnings)${X}` : '')
  );
  console.log('');
  process.exit(0);
}

console.log('');
console.log(`  ${R}${errors.length} error(s).${X}`);
console.log('');
process.exit(1);
