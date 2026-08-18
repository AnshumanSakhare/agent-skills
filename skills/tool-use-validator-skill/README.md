<div align="center">

<h1>✅&nbsp;&nbsp;Tool Use Validator</h1>

<p><b>Validate function-calling payloads against the schema before they execute.</b></p>

<a href="https://github.com/AnshumanSakhare/agent-skills#quickstart"><img src="https://img.shields.io/badge/install-npx%20one--liner-000000?style=for-the-badge&logo=npm&logoColor=white" alt="install"></a>&nbsp;<img src="https://img.shields.io/badge/category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">&nbsp;<img src="https://img.shields.io/badge/type-playbook-2D3436?style=for-the-badge" alt="core">&nbsp;<a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>

</div>

---

> Checks tool-call JSON against a supplied schema before execution — type-safe, no missing required fields, no unexpected extras — so a malformed agent call fails at the boundary instead of halfway through a side effect.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add tool-use-validator-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

## What it does

- Validates against the provided JSON schema strictly
- Catches missing required fields and unexpected extras
- Type-checks values, not just presence
- Explains exactly which path failed and why
- Suggests the corrected payload

## Try it

Once installed, just talk to your agent in plain language:

> *"Validate this tool call against my schema before I run it."*

> *"Why is my function-calling payload being rejected?"*

> *"Add schema validation at my agent's tool boundary."*

## What you get back

- ✅ &nbsp;**Validation verdict**
- ✅ &nbsp;**Path-level error report**
- ✅ &nbsp;**Corrected payload**

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`function-calling` &middot; `json-schema` &middot; `validation` &middot; `agents`

---

<div align="center">

<sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>.</sub>

<a href="../../README.md">Browse the full catalog</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>

</div>
