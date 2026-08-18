<div align="center">

<h1>🗣️&nbsp;&nbsp;Talking Avatar</h1>

<p><b>A realtime voice app with a photo-real character whose mouth actually follows the audio.</b></p>

<a href="https://github.com/AnshumanSakhare/agent-skills#quickstart"><img src="https://img.shields.io/badge/install-npx%20one--liner-000000?style=for-the-badge&logo=npm&logoColor=white" alt="install"></a>&nbsp;<img src="https://img.shields.io/badge/category-Build%20%26%20Ship-6C5CE7?style=for-the-badge" alt="Build & Ship">&nbsp;<img src="https://img.shields.io/badge/type-scripts%20%2B%20references-2D3436?style=for-the-badge" alt="advanced">&nbsp;<a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>

</div>

---

> Builds a lightweight realtime voice-chat app around a fixed character portrait, from either a supplied photograph or a text description. Generates a canonical portrait plus mouth sprites, drives lip sync off the real remote audio stream, and wires it into OpenAI Realtime with BYOK key intake.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add talking-avatar-skill
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

<div align="center">

<sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>.</sub>

<a href="../../README.md">Browse the full catalog</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>

</div>
