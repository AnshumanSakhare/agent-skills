<div align="center">

<h1>🛬&nbsp;&nbsp;Landing Page Generator</h1>

<p><b>High-converting landing pages as production HTML — with the conversion audit built in.</b></p>

<a href="https://github.com/AnshumanSakhare/agent-skills#quickstart"><img src="https://img.shields.io/badge/install-npx%20one--liner-000000?style=for-the-badge&logo=npm&logoColor=white" alt="install"></a>&nbsp;<img src="https://img.shields.io/badge/category-Build%20%26%20Ship-6C5CE7?style=for-the-badge" alt="Build & Ship">&nbsp;<img src="https://img.shields.io/badge/type-scripts%20%2B%20references-2D3436?style=for-the-badge" alt="advanced">&nbsp;<a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>

</div>

---

> Generates complete, production-ready landing pages with real design themes, proven copy frameworks (PAS, AIDA, BAB), a deliberate CTA architecture, and SEO meta. Then it audits its own output: conversion checklist, CTA analysis and a page-speed estimate ship alongside the page.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add landing-page-generator-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

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

<div align="center">

<sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>.</sub>

<a href="../../README.md">Browse the full catalog</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>

</div>
