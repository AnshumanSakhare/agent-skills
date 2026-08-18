#!/usr/bin/env node
/**
 * Moves the whole project to a different GitHub owner in one command.
 *
 *   node scripts/set-repo.mjs buildfastwithai/agent-skills
 *   npm run set-repo -- buildfastwithai/agent-skills
 *
 * Rewrites the slug in skills.json (the source of truth the CLI reads), in
 * package.json, and in every hand-written markdown file, then regenerates the
 * docs so all 32 skill READMEs and the root catalog carry the new npx command.
 *
 * Does NOT touch the git remote — change that yourself with:
 *   git remote set-url origin https://github.com/<owner>/<repo>.git
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv[2];

if (!target || !/^[\w.-]+\/[\w.-]+$/.test(target)) {
  console.error('\n  Usage: node scripts/set-repo.mjs <owner>/<repo>\n');
  console.error('  Example: node scripts/set-repo.mjs buildfastwithai/agent-skills\n');
  process.exit(1);
}

const manifestPath = path.join(ROOT, 'skills.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const current = manifest.repo;

if (current === target) {
  console.log(`\n  Already set to ${target}. Nothing to do.\n`);
  process.exit(0);
}

// Hand-written files that mention the slug in prose. Generated skill READMEs
// are rebuilt from skills.json at the end, so they are deliberately excluded.
const FILES = [
  'README.md',
  'CONTRIBUTING.md',
  '.github/ISSUE_TEMPLATE/bug.yml',
  '.github/PULL_REQUEST_TEMPLATE.md',
];

console.log('');
console.log(`  ${current}  ->  ${target}`);
console.log('');

manifest.repo = target;
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log('  update  skills.json');

for (const rel of FILES) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = before.split(current).join(target);
  if (before === after) continue;
  fs.writeFileSync(file, after);
  console.log(`  update  ${rel}`);
}

// package.json is edited structurally, never by string replace: the npm scope
// is lowercase-only and deliberately does not follow the GitHub owner.
const pkgPath = path.join(ROOT, 'package.json');
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  pkg.homepage = `https://github.com/${target}#readme`;
  pkg.bugs = { url: `https://github.com/${target}/issues` };
  pkg.repository = { type: 'git', url: `git+https://github.com/${target}.git` };
  fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
  console.log('  update  package.json');
}

console.log('');
execFileSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-docs.mjs')], {
  stdio: 'inherit',
});

console.log(`  Done. Now point git at it:`);
console.log(`    git remote set-url origin https://github.com/${target}.git`);
console.log('');
