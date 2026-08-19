<h1 align="center">🕵️ Agent Output Critic</h1>

<p align="center"><strong>A second agent whose only job is to find what the first one got wrong.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">
  <img src="https://img.shields.io/badge/Type-playbook-2D3436?style=for-the-badge" alt="core">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Critically reviews another agent's output for hallucinations, security issues, logical flaws and formatting problems — a QA and safety pass before anything gets delivered.

## Install

```bash
npx skills add https://github.com/buildfastwithai/agent-skills/tree/main/skills/workflow-skills/agent-output-critic-skill
```

<sub>Installs into every agent that reads the <code>SKILL.md</code> format. Add <code>--global</code> to install for all projects, or run <code>npx skills add</code> with no argument to pick interactively.</sub>

## What it does

- Hunts fabricated facts, APIs and citations
- Flags security issues introduced by generated code
- Checks logical consistency against the original request
- Catches formatting and contract violations
- Delivers a verdict, not a vague vibe

## Try it

Once installed, just talk to your agent in plain language:

> *"Review this agent output before I ship it."*

> *"Check this generated code for hallucinated APIs and security issues."*

> *"QA this response against the original spec."*

## What you get back

- ✅ &nbsp;**Structured critique**
- ✅ &nbsp;**Severity-ranked issues**
- ✅ &nbsp;**Ship / don't-ship verdict**

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`qa` &middot; `review` &middot; `hallucination` &middot; `safety`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a>
</p>
