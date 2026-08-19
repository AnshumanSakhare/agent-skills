<h1 align="center">🧠 Prompt Optimizer (CoT)</h1>

<p align="center"><strong>Rewrites vague tasks into prompts that reason properly.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">
  <img src="https://img.shields.io/badge/Type-playbook-2D3436?style=for-the-badge" alt="core">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Turns under-specified or raw tasks into robust Chain-of-Thought style prompts — structured reasoning, explicit constraints and output contracts that improve reliability and reduce the weak-output failure mode.

## Install

```bash
npx skills add https://github.com/buildfastwithai/agent-skills/tree/main/skills/workflow-skills/prompt-optimizer-cot-skill
```

<sub>Installs into every agent that reads the <code>SKILL.md</code> format. Add <code>--global</code> to install for all projects, or run <code>npx skills add</code> with no argument to pick interactively.</sub>

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

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a>
</p>
