<div align="center">

<h1>🕵️&nbsp;&nbsp;Agent Output Critic</h1>

<p><b>A second agent whose only job is to find what the first one got wrong.</b></p>

<a href="https://github.com/AnshumanSakhare/agent-skills#quickstart"><img src="https://img.shields.io/badge/install-npx%20one--liner-000000?style=for-the-badge&logo=npm&logoColor=white" alt="install"></a>&nbsp;<img src="https://img.shields.io/badge/category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">&nbsp;<img src="https://img.shields.io/badge/type-playbook-2D3436?style=for-the-badge" alt="core">&nbsp;<a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>

</div>

---

> Critically reviews another agent's output for hallucinations, security issues, logical flaws and formatting problems — a QA and safety pass before anything gets delivered.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add agent-output-critic-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

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

<div align="center">

<sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>.</sub>

<a href="../../README.md">Browse the full catalog</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>

</div>
