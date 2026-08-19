<h1 align="center">🤝 Claude → Codex Handoff</h1>

<p align="center"><strong>Package a whole conversation into a zip another agent can pick up cold.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">
  <img src="https://img.shields.io/badge/Type-playbook-2D3436?style=for-the-badge" alt="core">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Exports the current session's work as a portable handoff for Codex, Cursor, Cline, Gemini CLI, Windsurf or a teammate who wasn't in the chat: AGENTS.md for build and convention info, HANDOFF.md for goal, decisions, status and blockers, plus copies of every file created or referenced — zipped and ready to drop in.

## Install

```bash
npx skills add https://github.com/buildfastwithai/agent-skills/tree/main/skills/workflow-skills/claude-to-codex-handoff-skill
```

<sub>Installs into every agent that reads the <code>SKILL.md</code> format. Add <code>--global</code> to install for all projects, or run <code>npx skills add</code> with no argument to pick interactively.</sub>

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

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a>
</p>
