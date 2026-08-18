<p align="center">
  <a href="https://www.buildfastwithai.com/">
    <img src="../../assets/banner.jpg" width="100%" alt="Agent Skills by Build Fast with AI">
  </a>
</p>

<h1 align="center">📌 Git Conventional Commits</h1>

<p align="center"><strong>Commits that explain why, and PR descriptions with a real test plan.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Agent%20Workflow-636E72?style=for-the-badge" alt="Agent Workflow">
  <img src="https://img.shields.io/badge/Type-playbook-2D3436?style=for-the-badge" alt="core">
  <a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

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

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;·&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>
</p>
