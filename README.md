<!--
  Banner is the shared Build Fast with AI brand asset, referenced from gen-ai-experiments.
  To vendor it locally instead: copy Banner2.png into assets/ and change the src to "assets/Banner2.png".
-->
<p align="center">
  <a href="https://www.buildfastwithai.com/">
    <img src="https://raw.githubusercontent.com/buildfastwithai/gen-ai-experiments/main/assets/Banner2.png" width="900px" alt="BuildFastWithAI: Master Generative AI">
  </a>
</p>

<h1 align="center">🧩 Agent Skills</h1>

<p align="center">
  <strong>32 production-grade, installable Agent Skills for Claude Code, Cowork, Codex and Cursor — one <code>npx</code> command away.</strong>
</p>

<p align="center">
  <a href="https://www.linkedin.com/company/build-fast-with-ai">
    <img src="https://img.shields.io/badge/-Follow%20on%20LinkedIn-0077B5?logo=linkedin&style=flat-square" alt="LinkedIn">
  </a>
  <a href="https://twitter.com/BuildFastWithAI">
    <img src="https://img.shields.io/twitter/follow/BuildFastWithAI?style=social" alt="Twitter">
  </a>
  <a href="https://github.com/buildfastwithai/agent-skills/stargazers">
    <img src="https://img.shields.io/github/stars/buildfastwithai/agent-skills?style=social" alt="Star this repo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Anthropic_Claude-D97757?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude">
  <img src="https://img.shields.io/badge/Cowork-6E56CF?style=for-the-badge" alt="Cowork">
  <img src="https://img.shields.io/badge/Codex-412991?style=for-the-badge&logo=openai&logoColor=white" alt="Codex">
  <img src="https://img.shields.io/badge/Cursor-000000?style=for-the-badge&logo=cursor&logoColor=white" alt="Cursor">
  <img src="https://img.shields.io/badge/npx-install%20in%204s-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npx install">
  <img src="https://img.shields.io/badge/License-MIT-0984E3?style=for-the-badge" alt="MIT">
</p>

<p align="center">
  <a href="#quickstart"><b>Quickstart</b></a> &nbsp;·&nbsp;
  <a href="#the-catalog"><b>The catalog</b></a> &nbsp;·&nbsp;
  <a href="#install-anywhere"><b>Install anywhere</b></a> &nbsp;·&nbsp;
  <a href="#cli-reference"><b>CLI</b></a> &nbsp;·&nbsp;
  <a href="CONTRIBUTING.md"><b>Contributing</b></a>
</p>

---

Most "agent skills" you find online are one paragraph of advice in a markdown file. Some of these are more than that.

**Ten of them are complete working systems** — reference docs the agent reads before it acts, executable scripts it runs, templates it fills, and worked example output you can open in a browser right now. Point Claude Code at `launchaudit-skill` and you get a real launch-readiness report with a verdict, not a bulleted opinion. Point it at `html-game-generator-skill` and you get a finished game in one HTML file, with menus and sound and save support.

**The other twenty-two are tight, opinionated playbooks** — one focused `SKILL.md` that gives the agent a real point of view on one job, from neo-brutalist art direction to Mongoose index strategy. Small on disk, and the ones you'll reach for daily.

Every skill carries a badge saying which kind it is, so you always know what you're installing. All of them work in whatever agent you already use, and all of them install in about four seconds.

<br>

## Quickstart

**Pick skills interactively** — arrow keys, space to select, enter to install:

```bash
npx github:buildfastwithai/agent-skills
```

**Or grab exactly what you want:**

```bash
# one skill
npx github:buildfastwithai/agent-skills add launchaudit-skill

# a whole category
npx github:buildfastwithai/agent-skills add --category design

# everything, into Claude Code
npx github:buildfastwithai/agent-skills add --all --client claude
```

Then restart your agent and just talk to it:

> *"Audit https://myproduct.com before launch."*

No config file. No API key. No account. The installer auto-detects Claude Code, Codex, Cursor and opencode on your machine and installs into all of them.

<br>

## The catalog

<!-- CATALOG:START -->

### 🚀 Build & Ship <sub><sup>6 skills</sup></sub>

*Point an agent at an idea and get a working, art-directed product back — not a scaffold.*

| Skill | What it does | Install |
|:--|:--|:--|
| **[🛬 Landing Page Generator](skills/landing-page-generator-skill)** | High-converting landing pages as production HTML — with the conversion audit built in. | `add landing-page-generator-skill` |
| **[🛒 Crazy Ecommerce Builder](skills/crazy-ecommerce-builder-skill)** | Anti-template storefronts with generated product photography and a real creative thesis. | `add crazy-ecommerce-builder-skill` |
| **[🕹️ HTML Game Generator](skills/html-game-generator-skill)** | One self-contained .html file. Menus, art, sound, particles, save support. Double-click and play. | `add html-game-generator-skill` |
| **[📸 React Screenshot Recreator](skills/react-screenshot-recreator-skill)** | Paste a screenshot. Get React + TypeScript + Tailwind that a designer can't tell apart. | `add react-screenshot-recreator-skill` |
| **[✨ Premium UI Revamp](skills/premium-ui-revamp-skill)** | Turns vibe-coded and visibly-AI-generated interfaces into something that looks intentional. | `add premium-ui-revamp-skill` |
| **[🗣️ Talking Avatar](skills/talking-avatar-skill)** | A realtime voice app with a photo-real character whose mouth actually follows the audio. | `add talking-avatar-skill` |

<sub>Install the whole category: `npx github:buildfastwithai/agent-skills add --category build`</sub>

### 🎨 Design Systems <sub><sup>8 skills</sup></sub>

*Opinionated art direction. Each one is a full aesthetic your agent can actually hold on to.*

| Skill | What it does | Install |
|:--|:--|:--|
| **[🏛️ Boutique Frontend Designer](skills/boutique-frontend-designer-skill)** | The anti-slop default. Agency-grade interfaces instead of unmodified shadcn. | `add boutique-frontend-designer-skill` |
| **[🧩 Tailwind Component Factory](skills/tailwind-component-factory-skill)** | Accessible, headless-friendly Tailwind primitives with the ARIA already correct. | `add tailwind-component-factory-skill` |
| **[📣 Bold SaaS Marketing UI](skills/bold-saas-marketing-ui-skill)** | Landing pages that convert without looking like every other Y Combinator homepage. | `add bold-saas-marketing-ui-skill` |
| **[📰 Editorial Web Layout](skills/editorial-web-layout-skill)** | Magazine typography, asymmetric columns, print rhythm. Content-first and confident. | `add editorial-web-layout-skill` |
| **[🪟 Glass UI System](skills/glass-ui-system-skill)** | Glassmorphism with actual depth hierarchy — not a blur filter on everything. | `add glass-ui-system-skill` |
| **[🕴️ Minimal Luxury UI](skills/minimal-luxury-ui-skill)** | Restraint as a design decision. Premium type, sparse composition, precise spacing. | `add minimal-luxury-ui-skill` |
| **[🧱 Neo-Brutalism Web](skills/neo-brutalism-web-skill)** | Hard edges, stark contrast, raw type, deliberate friction. Loud on purpose. | `add neo-brutalism-web-skill` |
| **[📺 Retro Futurist Web](skills/retro-futurist-web-skill)** | CRT scanlines, mono palettes, synth-era type — with 2026 usability underneath. | `add retro-futurist-web-skill` |

<sub>Install the whole category: `npx github:buildfastwithai/agent-skills add --category design`</sub>

### 📈 Startup & Growth <sub><sup>3 skills</sup></sub>

*Evidence-backed GTM work: who buys, whether you're ready, and how the money adds up.*

| Skill | What it does | Install |
|:--|:--|:--|
| **[🔍 LaunchAudit](skills/launchaudit-skill)** | Give it a URL. Get a verdict: ready to launch, fix these first, or not yet. | `add launchaudit-skill` |
| **[🎯 Customer Finder](skills/customer-finder-skill)** | A shortlist of plausible first customers, each one linked to the public signal that found them. | `add customer-finder-skill` |
| **[📊 Startup Blueprint](skills/startup-blueprint-skill)** | Business plan, pricing architecture, a real Excel financial model, and a 90-day roadmap. | `add startup-blueprint-skill` |

<sub>Install the whole category: `npx github:buildfastwithai/agent-skills add --category growth`</sub>

### 🧱 Backend & Data <sub><sup>4 skills</sup></sub>

*Auth, schemas, route handlers and MCP servers that survive contact with production.*

| Skill | What it does | Install |
|:--|:--|:--|
| **[🔌 MCP Server Builder](skills/mcp-server-builder-skill)** | Design and ship Model Context Protocol servers that don't leak your database. | `add mcp-server-builder-skill` |
| **[🔐 MERN Auth Best Practices](skills/mern-auth-best-practices-skill)** | JWT and Auth.js flows with refresh rotation and cookie strategy that actually holds. | `add mern-auth-best-practices-skill` |
| **[🗄️ Mongoose Schema Architect](skills/mongoose-schema-architect-skill)** | Schemas designed backwards from your actual query patterns. | `add mongoose-schema-architect-skill` |
| **[⚡ Next.js Route Handler](skills/nextjs-route-handler-skill)** | Edge-compatible App Router endpoints, Zod-validated and safe by default. | `add nextjs-route-handler-skill` |

<sub>Install the whole category: `npx github:buildfastwithai/agent-skills add --category backend`</sub>

### 📝 Docs & Research <sub><sup>3 skills</sup></sub>

*Turn scattered sources and half-finished repos into something a stranger can read.*

| Skill | What it does | Install |
|:--|:--|:--|
| **[📖 README Architect](skills/readme-architect-skill)** | Production-quality READMEs with badges, setup, usage and contribution guidance. | `add readme-architect-skill` |
| **[🔬 Research Synthesizer](skills/research-synthesizer-skill)** | Many sources in, one cited Markdown report out — with confidence notes. | `add research-synthesizer-skill` |
| **[🎞️ Deck Outline Generator](skills/deck-outline-generator-skill)** | Slide outlines with a narrative spine — plus per-slide image prompts. | `add deck-outline-generator-skill` |

<sub>Install the whole category: `npx github:buildfastwithai/agent-skills add --category docs`</sub>

### 🛠️ Agent Workflow <sub><sup>8 skills</sup></sub>

*Meta-skills that make every other agent run tighter — critique, handoff, commits, test strength.*

| Skill | What it does | Install |
|:--|:--|:--|
| **[🚢 Ship It](skills/ship-it-skill)** | Turns any repo into a public-facing open-source project ready for a launch tweet. | `add ship-it-skill` |
| **[🤝 Claude → Codex Handoff](skills/claude-to-codex-handoff-skill)** | Package a whole conversation into a zip another agent can pick up cold. | `add claude-to-codex-handoff-skill` |
| **[🧪 Test Strength](skills/test-strength-skill)** | Coverage lies. Mutation testing tells you whether your tests would notice a bug. | `add test-strength-skill` |
| **[🕵️ Agent Output Critic](skills/agent-output-critic-skill)** | A second agent whose only job is to find what the first one got wrong. | `add agent-output-critic-skill` |
| **[📌 Git Conventional Commits](skills/git-conventional-commits-skill)** | Commits that explain why, and PR descriptions with a real test plan. | `add git-conventional-commits-skill` |
| **[🧠 Prompt Optimizer (CoT)](skills/prompt-optimizer-cot-skill)** | Rewrites vague tasks into prompts that reason properly. | `add prompt-optimizer-cot-skill` |
| **[✅ Tool Use Validator](skills/tool-use-validator-skill)** | Validate function-calling payloads against the schema before they execute. | `add tool-use-validator-skill` |
| **[🐧 Linux Kernel Troubleshooter](skills/linux-kernel-troubleshooter-skill)** | Boot failures, kernel panics and vanished network adapters — with the BIOS steps. | `add linux-kernel-troubleshooter-skill` |

<sub>Install the whole category: `npx github:buildfastwithai/agent-skills add --category workflow`</sub>

<!-- CATALOG:END -->

<br>

## Install anywhere

The installer finds every agent directory on your machine and installs into all of them. Want to be specific?

| Agent | Flag | Installs to |
|:--|:--|:--|
| **Claude Code** / Claude Desktop | `--client claude` | `~/.claude/skills` |
| **OpenAI Codex** | `--client codex` | `~/.codex/skills` |
| **Cursor** | `--client cursor` | `~/.cursor/skills` |
| **opencode** | `--client opencode` | `~/.config/opencode/skills` |
| **This project only** | `--client project` | `./.claude/skills` |
| **Anything else** | `--dir <path>` | wherever you point it |

Multiple at once works too: `--client claude,cursor`. Or hit all of them with `--client all`.

Using **Cowork**? Skills there are account-level rather than on disk — install into `claude` to get the folder, then upload the skill folder from `~/.claude/skills/<name>-skill` in the Cowork UI.

Prefer to do it by hand? Every skill is a plain folder — `git clone` this repo and copy `skills/<name>-skill` into your agent's skills directory. That's the whole install.

<br>

## CLI reference

```bash
npx github:buildfastwithai/agent-skills [command] [skills...] [options]
```

| Command | What it does |
|:--|:--|
| *(none)* | Interactive picker |
| `list` | Print the full catalog |
| `add <skill...>` | Install one or more skills |
| `remove <skill...>` | Uninstall them again |
| `doctor` | Show which agents were detected and what's installed |

| Option | What it does |
|:--|:--|
| `--all` | Every skill in the registry |
| `--category <id>` | `build` · `design` · `growth` · `backend` · `docs` · `workflow` |
| `--client <id>` | `claude` · `codex` · `cursor` · `opencode` · `project` · `all` |
| `--dir <path>` | Install into any directory |
| `--json` | Machine-readable catalog (with `list`) |
| `--verbose` | More detail (with `doctor`) |

The `-skill` suffix is optional on the command line — `add launchaudit` and `add launchaudit-skill` both work.

<br>

## What's actually in a skill

A skill is a folder your agent reads *on demand*. It stays out of the context window until the description matches what you asked for, then the agent pulls in exactly the parts it needs.

```text
launchaudit-skill/
├── SKILL.md              ← the entry point: when to trigger, how to work
├── README.md             ← human-facing docs (this is generated)
├── references/           ← deep context the agent reads before acting
│   ├── evaluation-framework.md
│   └── report-schema.md
├── scripts/              ← real code the agent executes
│   └── generate_report.mjs
├── templates/            ← output scaffolding
└── examples/             ← a finished report you can open right now
```

`SKILL.md` opens with frontmatter that decides when the skill fires:

```yaml
---
name: launchaudit-skill
description: Audits a startup from its URL and decides whether it is ready to
  launch. Use when the user asks for a launch readiness check, a pre-launch
  review, a conversion audit, or whether their site is ready to ship.
---
```

That `description` is the trigger. It's the only part always in context, which is why every skill here spends real effort on it.

The format is Anthropic's [Agent Skills](https://code.claude.com/docs/en/skills) spec — the same one Claude Code, Codex, Cursor and opencode all read. Write once, run everywhere.

<br>

## Repo structure

```text
agent-skills/
├── skills/               32 skills, one folder each, all <name>-skill
├── bin/agent-skills.js   the zero-dependency installer
├── scripts/
│   ├── validate.mjs      CI: frontmatter, naming, links, manifest
│   └── generate-docs.mjs CI: regenerates every README from skills.json
└── skills.json           the registry — single source of truth
```

Every README in this repo is generated from `skills.json`. Change the manifest, run `npm run docs`, and the catalog table plus all 32 skill READMEs update together. CI fails if they drift.

```bash
npm run validate   # naming convention, frontmatter, broken links, orphans
npm run docs       # regenerate all READMEs
npm run check      # both, in --check mode (what CI runs)
```

<br>

## Contributing

New skills are very welcome — especially ones that *do* something rather than describe something.

The bar: a real `SKILL.md` with a trigger description that earns its place, at least one worked example, and it has to pass `npm run validate`. Full details in **[CONTRIBUTING.md](CONTRIBUTING.md)**.

```bash
git clone https://github.com/buildfastwithai/agent-skills
cd agent-skills
mkdir -p skills/my-thing-skill        # note the -skill suffix
# write SKILL.md, add an entry to skills.json
npm run docs && npm run validate
```

<br>

## FAQ

<details>
<summary><b>Do I need to install npm packages or an API key?</b></summary>
<br>
No. The installer is a single zero-dependency Node file that copies folders. Nothing phones home, nothing needs a key, nothing runs in the background.
</details>

<details>
<summary><b>Will these work outside Claude Code?</b></summary>
<br>
Yes. They follow the open Agent Skills <code>SKILL.md</code> format, which Codex, Cursor and opencode also read. A few skills bundle an <code>agents/openai.yaml</code> for Codex specifically. For anything else that reads a skills directory, use <code>--dir</code>.
</details>

<details>
<summary><b>How does the agent know when to use a skill?</b></summary>
<br>
Off the <code>description</code> in the frontmatter — that one line is the only part loaded into context up front. You can also name a skill directly: <i>"use landing-page-generator-skill for this."</i>
</details>

<details>
<summary><b>How do I update?</b></summary>
<br>
Run the same <code>add</code> command again. Installs overwrite in place, so re-running is how you upgrade.
</details>

<details>
<summary><b>Can I install just one category?</b></summary>
<br>
<code>npx github:buildfastwithai/agent-skills add --category growth</code> — and the same for <code>build</code>, <code>design</code>, <code>backend</code>, <code>docs</code> and <code>workflow</code>.
</details>

<details>
<summary><b>Where do the outputs go?</b></summary>
<br>
Into your working directory, usually an <code>outputs/</code> folder, with clickable local links. Skills that generate reports also emit the structured JSON behind them so you can re-render or edit.
</details>

<br>

## License

[MIT](LICENSE). Use them, fork them, ship things with them.

<br>

---

<p align="center">
  <a href="https://www.buildfastwithai.com/">
    <img src="https://raw.githubusercontent.com/buildfastwithai/gen-ai-experiments/main/assets/Banner2.png" width="700px" alt="BuildFastWithAI: Master Generative AI">
  </a>
</p>

<h3 align="center">If one of these saved you an afternoon, a star helps other people find them.</h3>

<p align="center">
  <a href="https://github.com/buildfastwithai/agent-skills/stargazers">
    <img src="https://img.shields.io/github/stars/buildfastwithai/agent-skills?style=for-the-badge&logo=github&logoColor=white&color=D97757&labelColor=000000&label=star%20agent-skills" alt="Star agent-skills">
  </a>
</p>

<p align="center">
  <a href="https://www.linkedin.com/company/build-fast-with-ai">
    <img src="https://img.shields.io/badge/-Follow%20on%20LinkedIn-0077B5?logo=linkedin&style=flat-square" alt="LinkedIn">
  </a>
  <a href="https://twitter.com/BuildFastWithAI">
    <img src="https://img.shields.io/twitter/follow/BuildFastWithAI?style=social" alt="Twitter">
  </a>
</p>

<p align="center">
  <sub>
    Built by <a href="https://www.buildfastwithai.com/"><b>Build Fast with AI</b></a>
    &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/gen-ai-experiments">Gen-AI-Experiments</a>
    &nbsp;·&nbsp; <a href="CONTRIBUTING.md">Contribute a skill</a>
    &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills/issues/new?template=new-skill.yml">Request one</a>
  </sub>
</p>
