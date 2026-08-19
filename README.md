<p align="center">
  <strong>Drop-in <code>SKILL.md</code> capabilities for your coding agent.<br>Six categories, one <code>npx</code> command, zero config.</strong>
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
  <a href="#use-it-in-any-agent"><b>Any agent</b></a> &nbsp;·&nbsp;
  <a href="#faq"><b>FAQ</b></a>
</p>

---

Most "agent skills" you find online are one paragraph of advice in a markdown file. Some of these are more than that.

**Ten of them are more than a single file** — reference docs the agent reads before it acts, and in six cases executable scripts it actually runs. Three ship worked example output you can open in a browser right now. Point Claude Code at `launch-audit-skill` and you get a real launch-readiness report with a verdict, not a bulleted opinion. Point it at `html-game-generator-skill` and you get a finished game in one HTML file, with menus and sound and save support.

**The other twenty-two are tight, opinionated playbooks** — one focused `SKILL.md` that gives the agent a real point of view on one job, from neo-brutalist art direction to Mongoose index strategy. Small on disk, and the ones you'll reach for daily.

Every skill carries a badge saying which kind it is, so you always know what you're installing. All of them work in whatever agent you already use, and all of them install in about four seconds.

<br>

## Quickstart

Every skill installs with the open [`skills`](https://github.com/vercel-labs/skills) CLI — one command, nothing to clone:

```bash
npx skills add https://github.com/buildfastwithai/agent-skills/tree/main/skills/startup-skills/launch-audit-skill
```

Swap the trailing path for any skill in [the catalog](#the-catalog) below. Or take the whole registry at once and pick interactively:

```bash
npx skills add buildfastwithai/agent-skills
```

Then restart your agent and just talk to it:

> *"Audit https://myproduct.com before launch."*

No config file. No API key. No account.

<br>

## The catalog


### 🚀 App Builders <sub><sup>6 skills · <code>app-builder-skills/</code></sup></sub>

*Point an agent at an idea and get a working, art-directed product back — not a scaffold.*

| Skill | What it does |
|:--|:--|
| **[🛬 Landing Page Generator](skills/app-builder-skills/landing-page-generator-skill)** | High-converting landing pages as production HTML — with the conversion audit built in. |
| **[🛒 Crazy Ecommerce Builder](skills/app-builder-skills/crazy-ecommerce-builder-skill)** | Anti-template storefronts with generated product photography and a real creative thesis. |
| **[🕹️ HTML Game Generator](skills/app-builder-skills/html-game-generator-skill)** | One self-contained .html file. Menus, art, sound, particles, save support. Double-click and play. |
| **[📸 React Screenshot Recreator](skills/app-builder-skills/react-screenshot-recreator-skill)** | Paste a screenshot. Get React + TypeScript + Tailwind that a designer can't tell apart. |
| **[✨ Premium UI Revamp](skills/app-builder-skills/premium-ui-revamp-skill)** | Turns vibe-coded and visibly-AI-generated interfaces into something that looks intentional. |
| **[🗣️ Talking Avatar](skills/app-builder-skills/talking-avatar-skill)** | A realtime voice app with a photo-real character whose mouth actually follows the audio. |

### 🎨 Design Systems <sub><sup>8 skills · <code>ui-skills/</code></sup></sub>

*Opinionated art direction. Each one is a full aesthetic your agent can actually hold on to.*

| Skill | What it does |
|:--|:--|
| **[🏛️ Boutique Frontend Designer](skills/ui-skills/boutique-frontend-designer-skill)** | The anti-slop default. Agency-grade interfaces instead of unmodified shadcn. |
| **[🧩 Tailwind Component Factory](skills/ui-skills/tailwind-component-factory-skill)** | Accessible, headless-friendly Tailwind primitives with the ARIA already correct. |
| **[📣 Bold SaaS Marketing UI](skills/ui-skills/bold-saas-marketing-ui-skill)** | Landing pages that convert without looking like every other Y Combinator homepage. |
| **[📰 Editorial Web Layout](skills/ui-skills/editorial-web-layout-skill)** | Magazine typography, asymmetric columns, print rhythm. Content-first and confident. |
| **[🪟 Glass UI System](skills/ui-skills/glass-ui-system-skill)** | Glassmorphism with actual depth hierarchy — not a blur filter on everything. |
| **[🕴️ Minimal Luxury UI](skills/ui-skills/minimal-luxury-ui-skill)** | Restraint as a design decision. Premium type, sparse composition, precise spacing. |
| **[🧱 Neo-Brutalism Web](skills/ui-skills/neo-brutalism-web-skill)** | Hard edges, stark contrast, raw type, deliberate friction. Loud on purpose. |
| **[📺 Retro Futurist Web](skills/ui-skills/retro-futurist-web-skill)** | CRT scanlines, mono palettes, synth-era type — with 2026 usability underneath. |

### 📈 Startup & Growth <sub><sup>3 skills · <code>startup-skills/</code></sup></sub>

*Evidence-backed GTM work: who buys, whether you're ready, and how the money adds up.*

| Skill | What it does |
|:--|:--|
| **[🔍 LaunchAudit](skills/startup-skills/launch-audit-skill)** | Give it a URL. Get a verdict: ready to launch, fix these first, or not yet. |
| **[🎯 Customer Finder](skills/startup-skills/customer-finder-skill)** | A shortlist of plausible first customers, each one linked to the public signal that found them. |
| **[📊 Startup Blueprint](skills/startup-skills/startup-blueprint-skill)** | Business plan, pricing architecture, a real Excel financial model, and a 90-day roadmap. |

### 🧱 Backend & Data <sub><sup>4 skills · <code>backend-skills/</code></sup></sub>

*Auth, schemas, route handlers and MCP servers that survive contact with production.*

| Skill | What it does |
|:--|:--|
| **[🔌 MCP Server Builder](skills/backend-skills/mcp-server-builder-skill)** | Design and ship Model Context Protocol servers that don't leak your database. |
| **[🔐 MERN Auth Best Practices](skills/backend-skills/mern-auth-best-practices-skill)** | JWT and Auth.js flows with refresh rotation and cookie strategy that actually holds. |
| **[🗄️ Mongoose Schema Architect](skills/backend-skills/mongoose-schema-architect-skill)** | Schemas designed backwards from your actual query patterns. |
| **[⚡ Next.js Route Handler](skills/backend-skills/nextjs-route-handler-skill)** | Edge-compatible App Router endpoints, Zod-validated and safe by default. |

### 📝 Docs & Research <sub><sup>3 skills · <code>docs-skills/</code></sup></sub>

*Turn scattered sources and half-finished repos into something a stranger can read.*

| Skill | What it does |
|:--|:--|
| **[📖 README Architect](skills/docs-skills/readme-architect-skill)** | Production-quality READMEs with badges, setup, usage and contribution guidance. |
| **[🔬 Research Synthesizer](skills/docs-skills/research-synthesizer-skill)** | Many sources in, one cited Markdown report out — with confidence notes. |
| **[🎞️ Deck Outline Generator](skills/docs-skills/deck-outline-generator-skill)** | Slide outlines with a narrative spine — plus per-slide image prompts. |

### 🛠️ Agent Workflow <sub><sup>8 skills · <code>workflow-skills/</code></sup></sub>

*Meta-skills that make every other agent run tighter — critique, handoff, commits, test strength.*

| Skill | What it does |
|:--|:--|
| **[🚢 Ship It](skills/workflow-skills/ship-it-skill)** | Turns any repo into a public-facing open-source project ready for a launch tweet. |
| **[🤝 Claude → Codex Handoff](skills/workflow-skills/claude-to-codex-handoff-skill)** | Package a whole conversation into a zip another agent can pick up cold. |
| **[🧪 Test Strength](skills/workflow-skills/test-strength-skill)** | Coverage lies. Mutation testing tells you whether your tests would notice a bug. |
| **[🕵️ Agent Output Critic](skills/workflow-skills/agent-output-critic-skill)** | A second agent whose only job is to find what the first one got wrong. |
| **[📌 Git Conventional Commits](skills/workflow-skills/git-conventional-commits-skill)** | Commits that explain why, and PR descriptions with a real test plan. |
| **[🧠 Prompt Optimizer (CoT)](skills/workflow-skills/prompt-optimizer-cot-skill)** | Rewrites vague tasks into prompts that reason properly. |
| **[✅ Tool Use Validator](skills/workflow-skills/tool-use-validator-skill)** | Validate function-calling payloads against the schema before they execute. |
| **[🐧 Linux Kernel Troubleshooter](skills/workflow-skills/linux-kernel-troubleshooter-skill)** | Boot failures, kernel panics and vanished network adapters — with the BIOS steps. |

<br>

## Use it in any agent

These are plain [Agent Skills](https://code.claude.com/docs/en/skills) folders — a `SKILL.md` plus whatever it needs. Anything that reads that format can use them: Claude Code, Claude Desktop, Codex, Cursor, opencode.

The `skills` CLI detects what you have installed and puts the folder in the right place. If you'd rather not use it, copy the folder by hand — `git clone` this repo and drop `skills/<category>/<name>-skill` into your agent's skills directory. That's the whole install.

Using **Cowork**? Skills are account-level rather than on disk — install locally first, then upload the skill folder in the Cowork UI.

<br>

## What's actually in a skill

A skill is a folder your agent reads *on demand*. It stays out of the context window until the description matches what you asked for, then the agent pulls in exactly the parts it needs.

```text
launch-audit-skill/
├── SKILL.md              ← the entry point: when to trigger, how to work
├── README.md             ← human-facing docs
├── references/           ← deep context the agent reads before acting
│   ├── evaluation-framework.md
│   └── report-schema.md
├── scripts/              ← real code the agent executes
│   └── generate_report.mjs
├── templates/            ← output scaffolding
├── agents/               ← an openai.yaml for Codex
└── examples/             ← a finished report you can open right now
```

`SKILL.md` opens with frontmatter that decides when the skill fires:

```yaml
---
name: launch-audit-skill
description: Audit a startup, SaaS, app, developer tool, landing page, or
  product before launch from a live URL, localhost page, repository,
  screenshots, or supplied copy. Use when the user needs to test whether a
  public experience is launch-ready, produce a Ready to launch / Launch after
  critical fixes / Not ready yet verdict, or create a standalone HTML report.
---
```

That `description` is the trigger. It's the only part always in context, which is why every skill here spends real effort on it.

The format is Anthropic's [Agent Skills](https://code.claude.com/docs/en/skills) spec — the same one Claude Code, Codex, Cursor and opencode all read. Write once, run everywhere.

<br>

## Repo structure

```text
agent-skills/
├── README.md             this file — the catalog
└── skills/               32 skills, grouped by category
    ├── app-builder-skills/   6   finished, runnable products
    ├── ui-skills/            8   design systems and art direction
    ├── startup-skills/       3   GTM, launch readiness, financials
    ├── backend-skills/       4   APIs, schemas, auth
    ├── docs-skills/          3   READMEs and research synthesis
    └── workflow-skills/      8   agent tooling and process
```

That's the whole repo. No build step, no manifest, no installer to maintain — each skill folder is self-describing, and the `skills` CLI reads them directly off GitHub.

<br>

## Contributing

New skills are welcome — especially ones that *do* something rather than describe something.

The bar: a real `SKILL.md` whose `description` earns its trigger, and at least one worked example.

```bash
git clone https://github.com/buildfastwithai/agent-skills
cd agent-skills
mkdir -p skills/<category>/my-thing-skill   # note the -skill suffix
# write SKILL.md, add a row to the catalog table, open a PR
```

<br>

## FAQ

<details>
<summary><b>Do I need to install npm packages or an API key?</b></summary>
<br>
No. <code>npx skills</code> just copies folders into your agent's skills directory. Nothing phones home, nothing needs a key, nothing runs in the background.
</details>

<details>
<summary><b>Will these work outside Claude Code?</b></summary>
<br>
Yes. They follow the open Agent Skills <code>SKILL.md</code> format, which Codex, Cursor and opencode also read. A few skills bundle an <code>agents/openai.yaml</code> for Codex specifically. For anything else, copy the folder in by hand.
</details>

<details>
<summary><b>How does the agent know when to use a skill?</b></summary>
<br>
Off the <code>description</code> in the frontmatter — that one line is the only part loaded into context up front. You can also name a skill directly: <i>"use landing-page-generator-skill for this."</i>
</details>

<details>
<summary><b>How do I update?</b></summary>
<br>
Run the same <code>add</code> command again — it overwrites in place, so re-running is how you upgrade.
</details>

<details>
<summary><b>Can I install more than one at a time?</b></summary>
<br>
Yes — <code>npx skills add buildfastwithai/agent-skills</code> pulls the whole registry and lets you pick from a list.
</details>

<details>
<summary><b>Where do the outputs go?</b></summary>
<br>
Into your working directory, usually an <code>outputs/</code> folder, with clickable local links. Skills that generate reports also emit the structured JSON behind them so you can re-render or edit.
</details>

<br>

## License

MIT. Use them, fork them, ship things with them.

<details>
<summary>Full MIT license text</summary>
<br>

```text
MIT License

Copyright (c) 2026 Build Fast with AI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

<br>

---

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
    &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills/issues/new">Request a skill</a>
  </sub>
</p>
