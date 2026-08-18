#!/usr/bin/env node
/**
 * Generates every per-skill README.md from skills.json, plus the catalog
 * section of the root README (between the CATALOG markers).
 *
 *   node scripts/generate-docs.mjs           write the files
 *   node scripts/generate-docs.mjs --check   fail if anything is stale (CI)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS_DIR = path.join(ROOT, 'skills');
const CHECK = process.argv.includes('--check');

const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'skills.json'), 'utf8')
);
const REPO = manifest.repo;
const REPO_URL = `https://github.com/${REPO}`;
const ORG_SITE = 'https://www.buildfastwithai.com/';
// Skill READMEs live at skills/<id>/README.md, so the banner is two levels up.
const BANNER = '../../assets/banner.jpg';
const catById = Object.fromEntries(manifest.categories.map((c) => [c.id, c]));

const CATEGORY_COLOR = {
  build: '6C5CE7',
  design: 'E84393',
  growth: '00B894',
  backend: '0984E3',
  docs: 'E17055',
  workflow: '636E72',
};

const enc = (s) =>
  encodeURIComponent(String(s)).replace(/-/g, '--').replace(/_/g, '__');

/* ----------------------------------------------------------------- helpers */

function fileTree(dir, prefix = '', depth = 0) {
  if (depth > 1) return [];
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.name !== 'README.md' && !e.name.startsWith('.'))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? 1 : -1;
      return a.name.localeCompare(b.name);
    });

  const lines = [];
  entries.forEach((e, i) => {
    const last = i === entries.length - 1;
    const branch = last ? '└── ' : '├── ';
    if (e.isDirectory()) {
      const children = fs
        .readdirSync(path.join(dir, e.name), { withFileTypes: true })
        .filter((x) => !x.name.startsWith('.'));
      lines.push(`${prefix}${branch}${e.name}/`);
      if (depth < 1) {
        const sub = fileTree(
          path.join(dir, e.name),
          prefix + (last ? '    ' : '│   '),
          depth + 1
        );
        // keep trees readable: collapse very large folders
        if (children.length > 6) {
          lines.push(
            `${prefix}${last ? '    ' : '│   '}└── ${children.length} files`
          );
        } else {
          lines.push(...sub);
        }
      }
    } else {
      lines.push(`${prefix}${branch}${e.name}`);
    }
  });
  return lines;
}

function badge(label, message, color, extra = '') {
  return `https://img.shields.io/badge/${enc(label)}-${enc(message)}-${color}?style=for-the-badge${extra}`;
}

/* ------------------------------------------------------- per-skill README */

function skillReadme(s) {
  const cat = catById[s.category];
  const color = CATEGORY_COLOR[s.category] || '333333';
  const dir = path.join(SKILLS_DIR, s.id);
  const install = `npx github:${REPO} add ${s.id}`;
  const tree = fileTree(dir);
  const hasExample = Boolean(s.example);

  const L = [];
  L.push('<p align="center">');
  L.push(`  <a href="${ORG_SITE}">`);
  L.push(
    `    <img src="${BANNER}" width="100%" alt="Agent Skills by Build Fast with AI">`
  );
  L.push('  </a>');
  L.push('</p>');
  L.push('');
  L.push(`<h1 align="center">${s.icon} ${s.name}</h1>`);
  L.push('');
  L.push(`<p align="center"><strong>${s.tagline}</strong></p>`);
  L.push('');
  L.push('<p align="center">');
  L.push(
    `  <img src="${badge('Format', 'SKILL.md', '000000')}" alt="SKILL.md">` +
      `\n  <img src="${badge('Category', cat.name, color)}" alt="${cat.name}">` +
      `\n  <img src="${badge('Type', s.level === 'advanced' ? 'scripts + references' : 'playbook', '2D3436')}" alt="${s.level}">` +
      `\n  <a href="${REPO_URL}"><img src="${badge('Registry', 'agent--skills', '181717', '&logo=github&logoColor=white')}" alt="agent-skills"></a>`
  );
  L.push('</p>');
  L.push('');
  L.push('---');
  L.push('');
  L.push(`> ${s.summary}`);
  L.push('');
  L.push('## Install');
  L.push('');
  L.push('```bash');
  L.push(install);
  L.push('```');
  L.push('');
  L.push(
    `<sub>Installs into every agent directory found on your machine. Target one explicitly with ` +
      '`--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, ' +
      'or drop it anywhere with `--dir <path>`.</sub>'
  );
  L.push('');
  L.push('## What it does');
  L.push('');
  for (const w of s.what) L.push(`- ${w}`);
  L.push('');
  L.push('## Try it');
  L.push('');
  L.push('Once installed, just talk to your agent in plain language:');
  L.push('');
  for (const p of s.prompts) {
    L.push(`> *"${p}"*`);
    L.push('');
  }
  L.push('## What you get back');
  L.push('');
  for (const o of s.outputs) L.push(`- ✅ &nbsp;**${o}**`);
  L.push('');
  if (hasExample) {
    L.push('## Example output');
    L.push('');
    L.push(
      `A full report generated by this skill lives at [\`${s.example}\`](${s.example}).`
    );
    L.push('');
  }
  if (tree.length > 1) {
    L.push('## Inside this skill');
    L.push('');
    L.push('```text');
    L.push(`${s.id}/`);
    L.push(...tree);
    L.push('```');
    L.push('');
  }
  L.push('## Works with');
  L.push('');
  L.push(
    'Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; ' +
      'anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.'
  );
  L.push('');
  L.push('## Tags');
  L.push('');
  L.push(s.tags.map((t) => `\`${t}\``).join(' &middot; '));
  L.push('');
  L.push('---');
  L.push('');
  L.push('<p align="center">');
  L.push(
    `  <sub>One of <b>${manifest.skills.length} skills</b> in <a href="${REPO_URL}">agent-skills</a>, by <a href="${ORG_SITE}">Build Fast with AI</a>.</sub>`
  );
  L.push('</p>');
  L.push('');
  L.push('<p align="center">');
  L.push(
    `  <a href="../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; ` +
      `<a href="${REPO_URL}">⭐ Star the repo</a> &nbsp;·&nbsp; ` +
      `<a href="${REPO_URL}/blob/main/CONTRIBUTING.md">Add your own skill</a>`
  );
  L.push('</p>');
  L.push('');
  return L.join('\n');
}

/* ------------------------------------------------------------ root catalog */

function rootCatalog() {
  const L = [];
  for (const cat of manifest.categories) {
    const items = manifest.skills.filter((s) => s.category === cat.id);
    if (!items.length) continue;
    L.push(
      `### ${cat.icon} ${cat.name} <sub><sup>${items.length} skills</sup></sub>`
    );
    L.push('');
    L.push(`*${cat.blurb}*`);
    L.push('');
    L.push('| Skill | What it does | Install |');
    L.push('|:--|:--|:--|');
    for (const s of items) {
      L.push(
        `| **[${s.icon} ${s.name}](skills/${s.id})** | ${s.tagline} | \`add ${s.id}\` |`
      );
    }
    L.push('');
    L.push(
      `<sub>Install the whole category: \`npx github:${REPO} add --category ${cat.id}\`</sub>`
    );
    L.push('');
  }
  return L.join('\n');
}

/* -------------------------------------------------------------------- write */

const stale = [];

function writeFile(file, content) {
  const rel = path.relative(ROOT, file);
  const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  if (current === content) return;
  if (CHECK) {
    stale.push(rel);
    return;
  }
  fs.writeFileSync(file, content);
  console.log(`  ${current === null ? 'create' : 'update'}  ${rel}`);
}

console.log('');
for (const s of manifest.skills) {
  writeFile(path.join(SKILLS_DIR, s.id, 'README.md'), skillReadme(s));
}

const rootReadmePath = path.join(ROOT, 'README.md');
if (fs.existsSync(rootReadmePath)) {
  const src = fs.readFileSync(rootReadmePath, 'utf8');
  const START = '<!-- CATALOG:START -->';
  const END = '<!-- CATALOG:END -->';
  if (src.includes(START) && src.includes(END)) {
    const before = src.slice(0, src.indexOf(START) + START.length);
    const after = src.slice(src.indexOf(END));
    writeFile(rootReadmePath, `${before}\n\n${rootCatalog()}\n${after}`);
  } else {
    console.log('  skip    README.md (no CATALOG markers)');
  }
}

if (CHECK && stale.length) {
  console.log('');
  console.log('  Docs are out of date. Run `npm run docs` and commit:');
  for (const f of stale) console.log(`    - ${f}`);
  console.log('');
  process.exit(1);
}

console.log('');
console.log(`  Docs generated for ${manifest.skills.length} skills.`);
console.log('');
