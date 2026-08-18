<p align="center">
  <a href="https://www.buildfastwithai.com/">
    <img src="https://raw.githubusercontent.com/buildfastwithai/gen-ai-experiments/main/assets/Banner2.png" width="780px" alt="BuildFastWithAI: Master Generative AI">
  </a>
</p>

<h1 align="center">📸 React Screenshot Recreator</h1>

<p align="center"><strong>Paste a screenshot. Get React + TypeScript + Tailwind that a designer can't tell apart.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Build%20%26%20Ship-6C5CE7?style=for-the-badge" alt="Build & Ship">
  <img src="https://img.shields.io/badge/Type-scripts%20%2B%20references-2D3436?style=for-the-badge" alt="advanced">
  <a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> The default path for image-to-UI work. Give it a screenshot, mockup or Figma export and it returns production-quality React with near-pixel-perfect fidelity — then runs a visual audit pass against the original instead of declaring victory.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add react-screenshot-recreator-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

## What it does

- Reads spacing, type scale, colour and radii off the image into Tailwind tokens
- Produces typed, componentised React — not one giant JSX blob
- Recreates effects: gradients, shadows, blur, glass, noise
- Runs a structured visual audit comparing its render to the source image
- Handles responsive behaviour the screenshot only implies
- Also restyles an existing component to match a reference image

## Try it

Once installed, just talk to your agent in plain language:

> *"Build this. [screenshot]"*

> *"Turn this Figma export into React + Tailwind."*

> *"Clone this pricing table exactly, then make it responsive."*

## What you get back

- ✅ &nbsp;**React + TypeScript + Tailwind components**
- ✅ &nbsp;**Visual audit against the original**
- ✅ &nbsp;**Responsive behaviour**

## Inside this skill

```text
react-screenshot-recreator-skill/
├── SKILL.md
└── references/
    ├── effects.md
    ├── patterns.md
    ├── tailwind-mapping.md
    └── visual-audit.md
```

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`react` &middot; `tailwind` &middot; `typescript` &middot; `design-to-code`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;·&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>
</p>
