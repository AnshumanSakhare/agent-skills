<div align="center">

<h1>🤝&nbsp;&nbsp;Claude → Codex Handoff</h1>

<p><b>Package a whole conversation into a zip another agent can pick up cold.</b></p>

<a href="https://github.com/AnshumanSakhare/agent-skills#quickstart"><img src="https://img.shields.io/badge/install-npx%20one--liner-000000?style=for-the-badge&logo=npm&logoColor=white" alt="install"></a>&nbsp;<img src="https://img.shields.io/badge/category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">&nbsp;<img src="https://img.shields.io/badge/type-playbook-2D3436?style=for-the-badge" alt="core">&nbsp;<a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>

</div>

---

> Exports the current session's work as a portable handoff for Codex, Cursor, Cline, Gemini CLI, Windsurf or a teammate who wasn't in the chat: AGENTS.md for build and convention info, HANDOFF.md for goal, decisions, status and blockers, plus copies of every file created or referenced — zipped and ready to drop in.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add claude-to-codex-handoff-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

## What it does

- Writes AGENTS.md with build, test and convention info
- Writes HANDOFF.md with goal, decisions and *why*, status, blockers, next steps
- Copies every file created or referenced during the session
- Zips it into something you drop into a new working directory
- Structured for agents, not a conversational recap

## Try it

Once installed, just talk to your agent in plain language:

> *"Hand this off to Codex."*

> *"Package everything up so I can continue this in Cursor."*

> *"Export this session for a teammate who wasn't here."*

## What you get back

- ✅ &nbsp;**AGENTS.md**
- ✅ &nbsp;**HANDOFF.md**
- ✅ &nbsp;**Zipped context bundle**

## Inside this skill

```text
claude-to-codex-handoff-skill/
├── SKILL.md
└── assets/
    └── HANDOFF_template.md
```

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`handoff` &middot; `context` &middot; `codex` &middot; `interop`

---

<div align="center">

<sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>.</sub>

<a href="../../README.md">Browse the full catalog</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>

</div>
