<p align="center">
  <a href="https://www.buildfastwithai.com/">
    <img src="https://raw.githubusercontent.com/buildfastwithai/gen-ai-experiments/main/assets/Banner2.png" width="780px" alt="BuildFastWithAI: Master Generative AI">
  </a>
</p>

<h1 align="center">🧪 Test Strength</h1>

<p align="center"><strong>Coverage lies. Mutation testing tells you whether your tests would notice a bug.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">
  <img src="https://img.shields.io/badge/Type-scripts%20%2B%20references-2D3436?style=for-the-badge" alt="advanced">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Measures whether a pytest suite actually detects behaviour changes, using diff-scoped mutation testing. Audits suite strength, evaluates whether tests cover changed code, investigates surviving mutants, and proposes plus verifies targeted tests for what was missed.

## Install

```bash
npx github:buildfastwithai/agent-skills add test-strength-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

## What it does

- Mutates changed code and checks whether your tests notice
- Scopes to the diff so runs stay fast on real repos
- Copies the tree to a temp dir — your working tree is never touched
- Reports surviving mutants with the exact behaviour that went undetected
- Proposes targeted tests, then verifies they kill the mutant
- Ships strong/weak fixture suites so you can see the difference

## Try it

Once installed, just talk to your agent in plain language:

> *"Audit the strength of my pytest suite."*

> *"Do my tests actually cover the code I changed in this branch?"*

> *"Find surviving mutants and write tests that kill them."*

## What you get back

- ✅ &nbsp;**Mutation report**
- ✅ &nbsp;**Surviving-mutant analysis**
- ✅ &nbsp;**Proposed + verified tests**

## Inside this skill

```text
test-strength-skill/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── fixtures/
│   ├── strong/
│   └── weak/
└── scripts/
    └── strength.py
```

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`testing` &middot; `mutation-testing` &middot; `pytest` &middot; `quality`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>
</p>
