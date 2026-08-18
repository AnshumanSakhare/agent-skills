<div align="center">

<h1>🧪&nbsp;&nbsp;Test Strength</h1>

<p><b>Coverage lies. Mutation testing tells you whether your tests would notice a bug.</b></p>

<a href="https://github.com/AnshumanSakhare/agent-skills#quickstart"><img src="https://img.shields.io/badge/install-npx%20one--liner-000000?style=for-the-badge&logo=npm&logoColor=white" alt="install"></a>&nbsp;<img src="https://img.shields.io/badge/category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">&nbsp;<img src="https://img.shields.io/badge/type-scripts%20%2B%20references-2D3436?style=for-the-badge" alt="advanced">&nbsp;<a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>

</div>

---

> Measures whether a pytest suite actually detects behaviour changes, using diff-scoped mutation testing. Audits suite strength, evaluates whether tests cover changed code, investigates surviving mutants, and proposes plus verifies targeted tests for what was missed.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add test-strength-skill
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

<div align="center">

<sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>.</sub>

<a href="../../README.md">Browse the full catalog</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>

</div>
