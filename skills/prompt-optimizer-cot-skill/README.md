<div align="center">

<h1>🧠&nbsp;&nbsp;Prompt Optimizer (CoT)</h1>

<p><b>Rewrites vague tasks into prompts that reason properly.</b></p>

<a href="https://github.com/AnshumanSakhare/agent-skills#quickstart"><img src="https://img.shields.io/badge/install-npx%20one--liner-000000?style=for-the-badge&logo=npm&logoColor=white" alt="install"></a>&nbsp;<img src="https://img.shields.io/badge/category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">&nbsp;<img src="https://img.shields.io/badge/type-playbook-2D3436?style=for-the-badge" alt="core">&nbsp;<a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>

</div>

---

> Turns under-specified or raw tasks into robust Chain-of-Thought style prompts — structured reasoning, explicit constraints and output contracts that improve reliability and reduce the weak-output failure mode.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add prompt-optimizer-cot-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

## What it does

- Diagnoses why the current prompt underperforms
- Adds explicit reasoning structure and decomposition
- Pins down constraints, edge cases and the output contract
- Supplies positive and negative examples where they help
- Returns the rewritten prompt ready to paste

## Try it

Once installed, just talk to your agent in plain language:

> *"Optimise this prompt — it keeps giving shallow answers."*

> *"Turn this vague task into a proper CoT prompt."*

> *"Why does this prompt fail, and what should it be instead?"*

## What you get back

- ✅ &nbsp;**Rewritten prompt**
- ✅ &nbsp;**Failure diagnosis**
- ✅ &nbsp;**Example set**

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`prompting` &middot; `chain-of-thought` &middot; `reliability`

---

<div align="center">

<sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>.</sub>

<a href="../../README.md">Browse the full catalog</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>

</div>
