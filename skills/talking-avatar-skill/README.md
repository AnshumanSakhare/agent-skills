<p align="center">
  <a href="https://www.buildfastwithai.com/">
    <img src="https://raw.githubusercontent.com/buildfastwithai/gen-ai-experiments/main/assets/Banner2.png" width="780px" alt="BuildFastWithAI: Master Generative AI">
  </a>
</p>

<h1 align="center">🗣️ Talking Avatar</h1>

<p align="center"><strong>A realtime voice app with a photo-real character whose mouth actually follows the audio.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Build%20%26%20Ship-6C5CE7?style=for-the-badge" alt="Build & Ship">
  <img src="https://img.shields.io/badge/Type-scripts%20%2B%20references-2D3436?style=for-the-badge" alt="advanced">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Builds a lightweight realtime voice-chat app around a fixed character portrait, from either a supplied photograph or a text description. Generates a canonical portrait plus mouth sprites, drives lip sync off the real remote audio stream, and wires it into OpenAI Realtime with BYOK key intake.

## Install

```bash
npx github:buildfastwithai/agent-skills add talking-avatar-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

## What it does

- Accepts a photo or a written character description
- Generates an identity-consistent portrait plus a small mouth-pose sprite set
- Drives lip sync from actual remote audio amplitude, not a timer
- Scaffolds a Vite or Next.js app with a documented app contract
- Handles bring-your-own-key intake safely
- Ships with tests and a deployment path

## Try it

Once installed, just talk to your agent in plain language:

> *"Make a talking avatar app from this photo. [image]"*

> *"Build a voice companion with a grizzled 1940s detective character."*

> *"Add lip-synced avatar output to my existing OpenAI Realtime app."*

## What you get back

- ✅ &nbsp;**Deployable Vite/Next.js realtime app**
- ✅ &nbsp;**Generated portrait + mouth sprites**
- ✅ &nbsp;**Test suite**

## Inside this skill

```text
talking-avatar-skill/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── assets/
│   └── starter/
├── references/
│   ├── app-contract.md
│   ├── image-pipeline.md
│   └── realtime-lipsync.md
└── scripts/
    ├── scaffold_app.py
    └── validate_avatar_assets.py
```

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`realtime` &middot; `voice` &middot; `avatar` &middot; `openai` &middot; `lip-sync`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>
</p>
