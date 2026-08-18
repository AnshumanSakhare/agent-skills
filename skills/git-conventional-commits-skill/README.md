<div align="center">

<h1>📌&nbsp;&nbsp;Git Conventional Commits</h1>

<p><b>Commits that explain why, and PR descriptions with a real test plan.</b></p>

<a href="https://github.com/AnshumanSakhare/agent-skills#quickstart"><img src="https://img.shields.io/badge/install-npx%20one--liner-000000?style=for-the-badge&logo=npm&logoColor=white" alt="install"></a>&nbsp;<img src="https://img.shields.io/badge/category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">&nbsp;<img src="https://img.shields.io/badge/type-playbook-2D3436?style=for-the-badge" alt="core">&nbsp;<a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>

</div>

---

> Analyses your actual diff and generates Conventional Commit messages plus full PR descriptions — precise scopes, bodies that explain the reason rather than restating the change, breaking-change footers, and a derived step-by-step test plan.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add git-conventional-commits-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

## What it does

- Derives exact scopes from directory structure, not generic `core`
- Commit bodies explain why, tied to observed diff changes
- Detects breaking changes and requires the footer
- Refuses omnibus commits — proposes a split plan instead
- Generates PR title, summary, risks, testing steps and checklist

## Try it

Once installed, just talk to your agent in plain language:

> *"Write commit messages for my current changes."*

> *"Draft a PR description from this diff with a test plan."*

> *"Split my staged changes into a sensible commit plan."*

## What you get back

- ✅ &nbsp;**Conventional commit set**
- ✅ &nbsp;**Commit split plan**
- ✅ &nbsp;**Full PR draft**

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`git` &middot; `commits` &middot; `pull-request` &middot; `changelog`

---

<div align="center">

<sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>.</sub>

<a href="../../README.md">Browse the full catalog</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>

</div>
