<h1 align="center">✨ Premium UI Revamp</h1>

<p align="center"><strong>Turns vibe-coded and visibly-AI-generated interfaces into something that looks intentional.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-App%20Builders-6C5CE7?style=for-the-badge" alt="Build & Ship">
  <img src="https://img.shields.io/badge/Type-scripts%20%2B%20references-2D3436?style=for-the-badge" alt="advanced">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Audits an existing interface and revamps it into a credible product — in your existing stack, preserving behaviour. It derives the design from the product's own context rather than reskinning it, implements the changes, and verifies the rendered result instead of stopping at recommendations.

## Install

```bash
npx skills add https://github.com/buildfastwithai/agent-skills/tree/main/skills/app-builder-skills/premium-ui-revamp-skill
```

<sub>Installs into every agent that reads the <code>SKILL.md</code> format. Add <code>--global</code> to install for all projects, or run <code>npx skills add</code> with no argument to pick interactively.</sub>

## What it does

- Diagnoses what specifically reads as generic, dated or template-like
- Establishes real art direction, hierarchy, type scale and spacing rhythm
- Fixes interaction states, responsiveness and accessibility along the way
- Works inside HTML/CSS/JS, React, Vue, Svelte or Next.js — no rewrite required
- Preserves existing behaviour and data flow
- Verifies the rendered output against a quality rubric

## Try it

Once installed, just talk to your agent in plain language:

> *"This dashboard looks AI-generated. Make it look like a real product."*

> *"Revamp my Next.js marketing site's visual design without changing behaviour."*

> *"Audit the UI in ./src and give me a prioritised polish pass, then implement it."*

## What you get back

- ✅ &nbsp;**Implemented UI changes in your stack**
- ✅ &nbsp;**Design audit with rationale**
- ✅ &nbsp;**Quality-rubric verification**

## Inside this skill

```text
premium-ui-revamp-skill/
├── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    ├── premium-patterns.md
    └── quality-rubric.md
```

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`ui` &middot; `redesign` &middot; `refactor` &middot; `accessibility`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a>
</p>
