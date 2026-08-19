<h1 align="center">🛬 Landing Page Generator</h1>

<p align="center"><strong>High-converting landing pages as production HTML — with the conversion audit built in.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-App%20Builders-6C5CE7?style=for-the-badge" alt="Build & Ship">
  <img src="https://img.shields.io/badge/Type-scripts%20%2B%20references-2D3436?style=for-the-badge" alt="advanced">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Generates complete, production-ready landing pages with real design themes, proven copy frameworks (PAS, AIDA, BAB), a deliberate CTA architecture, and SEO meta. Then it audits its own output: conversion checklist, CTA analysis and a page-speed estimate ship alongside the page.

## Install

```bash
npx skills add https://github.com/buildfastwithai/agent-skills/tree/main/skills/app-builder-skills/landing-page-generator-skill
```

<sub>Installs into every agent that reads the <code>SKILL.md</code> format. Add <code>--global</code> to install for all projects, or run <code>npx skills add</code> with no argument to pick interactively.</sub>

## What it does

- Writes the page copy against a chosen framework instead of filling in lorem sections
- Applies a real design theme with consistent spacing, type scale and colour
- Builds a deliberate CTA ladder — primary, secondary, and in-content
- Emits SEO meta, OG tags and semantic structure by default
- Runs a conversion checklist, CTA analyser and speed estimate on the result
- Also works in reverse: point it at an existing page for an audit and rewrite

## Try it

Once installed, just talk to your agent in plain language:

> *"Build a landing page for my AI note-taking app. Waitlist signup is the conversion event."*

> *"Audit https://example.com and rewrite the hero and CTA for a free-trial conversion."*

> *"Generate a launch page for a developer tool, minimal theme, PAS copy framework."*

## What you get back

- ✅ &nbsp;**Single-file production HTML page**
- ✅ &nbsp;**Conversion audit report**
- ✅ &nbsp;**CTA + page-speed analysis**

## Inside this skill

```text
landing-page-generator-skill/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── assets/
│   └── template.html
├── references/
│   ├── copy-frameworks.md
│   ├── design-styles.md
│   ├── optimization.md
│   └── section-library.md
└── scripts/
    ├── conversion_checklist.py
    ├── cta_analyzer.py
    └── page_speed_estimator.py
```

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`landing-page` &middot; `conversion` &middot; `copywriting` &middot; `seo` &middot; `html`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a>
</p>
