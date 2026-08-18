#!/usr/bin/env node
/**
 * agent-skills — install agent skills into Claude Code, Codex, Cursor and friends.
 *
 *   npx github:buildfastwithai/agent-skills
 *   npx github:buildfastwithai/agent-skills add launchaudit-skill
 *   npx github:buildfastwithai/agent-skills add --all --client claude
 *
 * Zero dependencies. Node >= 18.
 */

'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const readline = require('node:readline');

const ROOT = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'skills');
const MANIFEST = path.join(ROOT, 'skills.json');
const REPO = 'buildfastwithai/agent-skills';

/* ------------------------------------------------------------------ colour */

const ESC = '[';
const useColor =
  process.stdout.isTTY && !process.env.NO_COLOR && process.env.TERM !== 'dumb';
const wrap = (open, close) => (s) =>
  useColor ? `${ESC}${open}m${s}${ESC}${close}m` : String(s);

const c = {
  bold: wrap(1, 22),
  dim: wrap(2, 22),
  red: wrap(31, 39),
  green: wrap(32, 39),
  yellow: wrap(33, 39),
  cyan: wrap(36, 39),
  grey: wrap(90, 39),
};

const log = (...a) => console.log(...a);

/* ------------------------------------------------------------------ banner */

const ART = [
  '   ___                    __     _____ __   _ ____    ',
  '  / _ | ___ ____ ___  ___/ /_   / ___// /__(_) / /____',
  ' / __ |/ _ `/ -_) _ \\/ __/ __/ _\\ \\  /  \'_/ / / / __/',
  '/_/ |_|\\_, /\\__/_//_/\\__/\\__/ /___/ /_/\\_\\_/_/_/\\__/ ',
  '      /___/                                           ',
];

function banner() {
  log('');
  log(c.cyan(ART.join('\n')));
  log(
    '  ' +
      c.dim('32 production-grade Agent Skills for Claude Code, Cowork, Codex & Cursor')
  );
  log(
    '  ' +
      c.dim(`by Build Fast with AI  ·  github.com/${REPO}`)
  );
  log('');
}

/* ---------------------------------------------------------------- manifest */

let _manifest = null;
function manifest() {
  if (_manifest) return _manifest;
  if (!fs.existsSync(MANIFEST)) {
    fail(
      `Could not find skills.json at ${MANIFEST}.\n` +
        `    Run this from a checkout of ${REPO}, or use:\n` +
        `      npx github:${REPO}`
    );
  }
  _manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  return _manifest;
}

const allSkills = () => manifest().skills;
const categories = () => manifest().categories;
const findSkill = (id) => {
  const wanted = String(id).toLowerCase();
  return (
    allSkills().find((s) => s.id.toLowerCase() === wanted) ||
    // be forgiving: accept the name without the -skill suffix
    allSkills().find((s) => s.id.toLowerCase() === `${wanted}-skill`) ||
    null
  );
};

/* ----------------------------------------------------------------- targets */

const home = os.homedir();

const TARGETS = [
  {
    id: 'claude',
    label: 'Claude Code',
    hint: '~/.claude/skills',
    dir: () => path.join(home, '.claude', 'skills'),
    marker: () => path.join(home, '.claude'),
  },
  {
    id: 'codex',
    label: 'OpenAI Codex',
    hint: '~/.codex/skills',
    dir: () =>
      path.join(process.env.CODEX_HOME || path.join(home, '.codex'), 'skills'),
    marker: () => process.env.CODEX_HOME || path.join(home, '.codex'),
  },
  {
    id: 'cursor',
    label: 'Cursor',
    hint: '~/.cursor/skills',
    dir: () => path.join(home, '.cursor', 'skills'),
    marker: () => path.join(home, '.cursor'),
  },
  {
    id: 'opencode',
    label: 'opencode',
    hint: '~/.config/opencode/skills',
    dir: () => path.join(home, '.config', 'opencode', 'skills'),
    marker: () => path.join(home, '.config', 'opencode'),
  },
  {
    id: 'project',
    label: 'This project',
    hint: './.claude/skills',
    dir: () => path.join(process.cwd(), '.claude', 'skills'),
    marker: () => path.join(process.cwd(), '.claude'),
  },
];

const targetById = (id) => TARGETS.find((t) => t.id === id);
const detectedTargets = () =>
  TARGETS.filter((t) => {
    try {
      return fs.existsSync(t.marker());
    } catch {
      return false;
    }
  });

function expandHome(p) {
  if (!p) return p;
  if (p === '~') return home;
  if (p.startsWith('~/') || p.startsWith('~\\')) return path.join(home, p.slice(2));
  return p;
}

function resolveTargets(opts) {
  if (opts.dir) {
    return [
      {
        id: 'custom',
        label: 'Custom directory',
        hint: opts.dir,
        dir: () => path.resolve(expandHome(opts.dir)),
      },
    ];
  }
  if (opts.client) {
    if (opts.client === 'all') return TARGETS.filter((t) => t.id !== 'project');
    return String(opts.client)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((id) => {
        const t = targetById(id);
        if (!t) {
          fail(
            `Unknown client "${id}".\n` +
              `    Known clients: ${TARGETS.map((x) => x.id).join(', ')}\n` +
              `    Anything else? Use --dir <path>.`
          );
        }
        return t;
      });
  }
  const found = detectedTargets().filter((t) => t.id !== 'project');
  return found.length ? found : [targetById('claude')];
}

/* ------------------------------------------------------------------- fs io */

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else if (entry.isSymbolicLink()) fs.symlinkSync(fs.readlinkSync(from), to);
    else if (entry.isFile()) fs.copyFileSync(from, to);
  }
}

function installOne(skill, targetDir) {
  const src = path.join(SKILLS_DIR, skill.id);
  if (!fs.existsSync(src)) throw new Error(`missing source at ${src}`);
  const dest = path.join(targetDir, skill.id);
  const existed = fs.existsSync(dest);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.rmSync(dest, { recursive: true, force: true });
  copyDir(src, dest);
  return { dest, updated: existed };
}

/* ---------------------------------------------------------------- commands */

function cmdList(opts) {
  if (opts.json) {
    log(JSON.stringify({ skills: allSkills() }, null, 2));
    return;
  }
  banner();
  for (const cat of categories()) {
    const items = allSkills().filter((s) => s.category === cat.id);
    if (!items.length) continue;
    log(
      `  ${cat.icon}  ${c.bold(cat.name.toUpperCase())} ${c.grey(`(${items.length})`)}`
    );
    log(`     ${c.grey(cat.blurb)}`);
    log('');
    const width = Math.max(...items.map((s) => s.id.length));
    for (const s of items) {
      log(`     ${c.green(s.id.padEnd(width))}  ${c.dim('·')}  ${s.tagline}`);
    }
    log('');
  }
  log(`  ${c.bold('Install one:')}  ${c.cyan(`npx github:${REPO} add <skill>`)}`);
  log(`  ${c.bold('Install all:')}  ${c.cyan(`npx github:${REPO} add --all`)}`);
  log('');
}

function selectSkills(ids, opts) {
  if (opts.all) return allSkills();
  if (opts.category) {
    const wanted = String(opts.category)
      .split(',')
      .map((s) => s.trim());
    for (const w of wanted) {
      if (!categories().some((x) => x.id === w)) {
        fail(
          `Unknown category "${w}".\n` +
            `    Known categories: ${categories().map((x) => x.id).join(', ')}`
        );
      }
    }
    return allSkills().filter((s) => wanted.includes(s.category));
  }
  if (!ids.length) return [];
  return ids.map((id) => {
    const s = findSkill(id);
    if (s) return s;
    const stem = String(id).toLowerCase().split('-')[0];
    const near = allSkills()
      .map((x) => x.id)
      .filter((x) => stem.length > 2 && x.includes(stem))
      .slice(0, 3);
    fail(
      `No skill called "${id}".` +
        (near.length ? `\n    Did you mean: ${near.join(', ')}?` : '') +
        `\n    Run \`npx github:${REPO} list\` to see all ${allSkills().length}.`
    );
  });
}

function cmdAdd(ids, opts) {
  banner();
  const skills = selectSkills(ids, opts);
  if (!skills.length) {
    fail('Nothing to install. Pass skill names, --all, or --category <id>.');
  }

  const targets = resolveTargets(opts);
  const results = [];

  for (const target of targets) {
    const dir = target.dir();
    log(`  ${c.bold(target.label)} ${c.grey('-> ' + dir)}`);
    for (const s of skills) {
      try {
        const { updated } = installOne(s, dir);
        log(`    ${c.green('+')} ${s.id}${updated ? c.grey('  (updated)') : ''}`);
        results.push({ ok: true });
      } catch (err) {
        log(`    ${c.red('x')} ${s.id} ${c.grey('- ' + err.message)}`);
        results.push({ ok: false });
      }
    }
    log('');
  }

  const bad = results.filter((r) => !r.ok).length;
  log(
    `  ${c.green(c.bold(`Installed ${skills.length} skill${skills.length === 1 ? '' : 's'}`))}` +
      ` into ${targets.length} location${targets.length === 1 ? '' : 's'}.` +
      (bad ? c.red(`  ${bad} failed.`) : '')
  );
  log('');
  log(`  ${c.dim('Restart your agent, then try:')}`);
  for (const s of skills.slice(0, 3)) {
    log(`    ${c.cyan(`"${(s.prompts && s.prompts[0]) || `Use ${s.id}`}"`)}`);
  }
  log('');
  if (bad) process.exitCode = 1;
}

function cmdRemove(ids, opts) {
  banner();
  const skills = selectSkills(ids, opts);
  if (!skills.length) fail('Nothing to remove. Pass skill names or --all.');
  const targets = resolveTargets(opts);
  let removed = 0;
  for (const target of targets) {
    const dir = target.dir();
    log(`  ${c.bold(target.label)} ${c.grey('-> ' + dir)}`);
    for (const s of skills) {
      const dest = path.join(dir, s.id);
      if (fs.existsSync(dest)) {
        fs.rmSync(dest, { recursive: true, force: true });
        log(`    ${c.yellow('-')} ${s.id}`);
        removed++;
      }
    }
    log('');
  }
  log(`  Removed ${removed} installed skill${removed === 1 ? '' : 's'}.`);
  log('');
}

function cmdDoctor(opts) {
  banner();
  log(`  ${c.bold('Node')}      ${process.version}`);
  log(`  ${c.bold('Registry')}  ${allSkills().length} skills available`);
  log('');
  log(`  ${c.bold('Agent directories')}`);
  for (const t of TARGETS) {
    const dir = t.dir();
    const exists = fs.existsSync(dir);
    let installed = [];
    if (exists) {
      installed = fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && findSkill(d.name))
        .map((d) => d.name);
    }
    const mark = exists ? c.green('*') : c.grey('-');
    log(
      `    ${mark} ${t.label.padEnd(14)} ${c.grey(dir)}` +
        (exists
          ? c.cyan(`  (${installed.length} installed from this registry)`)
          : c.grey('  not found'))
    );
    if (opts.verbose && installed.length) {
      for (const i of installed) log(`        ${c.dim('. ' + i)}`);
    }
  }
  log('');
  if (!detectedTargets().length) {
    log(
      `  ${c.yellow('No agent directories detected.')} Use ${c.cyan('--dir <path>')} to install anywhere.`
    );
    log('');
  }
}

/* -------------------------------------------------------- interactive mode */

function renderList(rows, cursor, offset, rowsVisible) {
  const out = [];
  out.push(
    c.grey('  up/down move   space select   a all   enter install   q quit')
  );
  const slice = rows.slice(offset, offset + rowsVisible);
  slice.forEach((row, i) => {
    const idx = offset + i;
    if (row.header) {
      out.push('');
      out.push(`  ${c.bold(row.label)}`);
      return;
    }
    const active = idx === cursor;
    const box = row.selected ? c.green('[x]') : c.grey('[ ]');
    const name = row.skill.id.padEnd(34);
    const tail = c.grey(row.skill.tagline.slice(0, 58));
    out.push(
      active
        ? `${c.cyan('>')} ${box} ${c.bold(name)} ${tail}`
        : `  ${box} ${name} ${tail}`
    );
  });
  return out.join('\n') + '\n';
}

function multiSelect(rows) {
  return new Promise((resolve) => {
    let cursor = rows.findIndex((r) => !r.header);
    let offset = 0;
    const rowsVisible = Math.max(12, (process.stdout.rows || 30) - 8);
    let lastLines = 0;

    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();

    const draw = () => {
      if (lastLines) {
        readline.moveCursor(process.stdout, 0, -lastLines);
        readline.clearScreenDown(process.stdout);
      }
      const frame = renderList(rows, cursor, offset, rowsVisible);
      process.stdout.write(frame);
      lastLines = frame.split('\n').length - 1;
    };

    const move = (dir) => {
      let next = cursor;
      do {
        next += dir;
        if (next < 0 || next >= rows.length) return;
      } while (rows[next].header);
      cursor = next;
      if (cursor < offset) offset = Math.max(0, cursor - 2);
      if (cursor >= offset + rowsVisible) offset = cursor - rowsVisible + 3;
    };

    const finish = (result) => {
      process.stdin.setRawMode(false);
      process.stdin.pause();
      process.stdin.removeListener('keypress', onKey);
      resolve(result);
    };

    const onKey = (_str, key) => {
      if (!key) return;
      if (key.name === 'up' || key.name === 'k') move(-1);
      else if (key.name === 'down' || key.name === 'j') move(1);
      else if (key.name === 'space') rows[cursor].selected = !rows[cursor].selected;
      else if (key.name === 'a') {
        const anyOff = rows.some((r) => !r.header && !r.selected);
        rows.forEach((r) => {
          if (!r.header) r.selected = anyOff;
        });
      } else if (key.name === 'return') {
        return finish(
          rows.filter((r) => !r.header && r.selected).map((r) => r.skill)
        );
      } else if (key.name === 'q' || (key.ctrl && key.name === 'c')) {
        return finish([]);
      } else return;
      draw();
    };

    process.stdin.on('keypress', onKey);
    draw();
  });
}

function singleSelect(question, options) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    log(`\n  ${c.bold(question)}`);
    options.forEach((o, i) => log(`    ${c.cyan(String(i + 1))}. ${o.label}`));
    rl.question(`  ${c.grey('choice >')} `, (answer) => {
      rl.close();
      const i = parseInt(String(answer).trim(), 10) - 1;
      resolve(options[i] ? options[i].value : options[0].value);
    });
  });
}

async function cmdInteractive() {
  if (!process.stdin.isTTY) return cmdList({});
  banner();

  const rows = [];
  for (const cat of categories()) {
    const items = allSkills().filter((s) => s.category === cat.id);
    if (!items.length) continue;
    rows.push({ header: true, label: `${cat.icon}  ${cat.name.toUpperCase()}` });
    for (const s of items) rows.push({ skill: s, selected: false });
  }

  const picked = await multiSelect(rows);
  if (!picked.length) {
    log(c.grey('\n  Nothing selected. Bye.\n'));
    return;
  }

  const detected = detectedTargets();
  let client;
  if (detected.length === 1) {
    client = detected[0].id;
    log(c.grey(`\n  Detected ${detected[0].label}.`));
  } else {
    const options = (detected.length ? detected : TARGETS).map((t) => ({
      value: t.id,
      label: `${t.label} ${c.grey(t.hint)}`,
    }));
    client = await singleSelect('Install where?', options);
  }
  cmdAdd(
    picked.map((s) => s.id),
    { client }
  );
}

/* ------------------------------------------------------------------- usage */

function usage() {
  banner();
  log(`  ${c.bold('USAGE')}`);
  log(`    npx github:${REPO} ${c.grey('[command] [skills...] [options]')}`);
  log('');
  log(`  ${c.bold('COMMANDS')}`);
  log(`    ${c.green('(none)')}                interactive picker`);
  log(`    ${c.green('list')}                  show the full catalog`);
  log(`    ${c.green('add <skill...>')}        install one or more skills`);
  log(`    ${c.green('remove <skill...>')}     uninstall skills`);
  log(`    ${c.green('doctor')}                show detected agents and what is installed`);
  log('');
  log(`  ${c.bold('OPTIONS')}`);
  log(`    ${c.cyan('--all')}                 every skill in the registry`);
  log(
    `    ${c.cyan('--category <id>')}       ${categories()
      .map((x) => x.id)
      .join(' | ')}`
  );
  log(`    ${c.cyan('--client <id>')}         ${TARGETS.map((t) => t.id).join(' | ')} | all`);
  log(`    ${c.cyan('--dir <path>')}          install into any directory`);
  log(`    ${c.cyan('--json')}                machine-readable output (with list)`);
  log(`    ${c.cyan('--verbose')}             more detail (with doctor)`);
  log('');
  log(`  ${c.bold('EXAMPLES')}`);
  log(`    ${c.grey('npx github:' + REPO)}`);
  log(`    ${c.grey('npx github:' + REPO + ' add launchaudit-skill')}`);
  log(`    ${c.grey('npx github:' + REPO + ' add --category design --client cursor')}`);
  log(`    ${c.grey('npx github:' + REPO + ' add --all --client claude')}`);
  log('');
}

function fail(msg) {
  log('');
  log(`  ${c.red('x')} ${msg}`);
  log('');
  process.exit(1);
}

/* -------------------------------------------------------------------- main */

function parseArgs(argv) {
  const opts = {};
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--all') opts.all = true;
    else if (a === '--force' || a === '-f') opts.force = true;
    else if (a === '--json') opts.json = true;
    else if (a === '--verbose' || a === '-v') opts.verbose = true;
    else if (a === '--help' || a === '-h') opts.help = true;
    else if (a === '--client' || a === '-c') opts.client = argv[++i];
    else if (a === '--category') opts.category = argv[++i];
    else if (a === '--dir' || a === '-d') opts.dir = argv[++i];
    else if (a.startsWith('--client=')) opts.client = a.slice('--client='.length);
    else if (a.startsWith('--category=')) opts.category = a.slice('--category='.length);
    else if (a.startsWith('--dir=')) opts.dir = a.slice('--dir='.length);
    else if (a.startsWith('-')) fail(`Unknown option: ${a}`);
    else positional.push(a);
  }
  return { opts, positional };
}

async function main() {
  const { opts, positional } = parseArgs(process.argv.slice(2));
  const [cmd, ...rest] = positional;

  if (opts.help) return usage();

  switch (cmd) {
    case undefined:
      if (opts.all || opts.category) return cmdAdd([], opts);
      return cmdInteractive();
    case 'list':
    case 'ls':
      return cmdList(opts);
    case 'add':
    case 'install':
    case 'i':
      return cmdAdd(rest, opts);
    case 'remove':
    case 'rm':
    case 'uninstall':
      return cmdRemove(rest, opts);
    case 'doctor':
      return cmdDoctor(opts);
    case 'help':
      return usage();
    default:
      // allow `npx github:owner/repo launchaudit-skill` as a shortcut for `add`
      if (findSkill(cmd)) return cmdAdd(positional, opts);
      fail(`Unknown command "${cmd}". Run with --help.`);
  }
}

main().catch((err) => {
  fail(err && err.stack ? err.stack : String(err));
});
