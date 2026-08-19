<h1 align="center">🗄️ Mongoose Schema Architect</h1>

<p align="center"><strong>Schemas designed backwards from your actual query patterns.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Backend%20%26%20Data-0984E3?style=for-the-badge" alt="Backend & Data">
  <img src="https://img.shields.io/badge/Type-playbook-2D3436?style=for-the-badge" alt="core">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Designs high-performance Mongoose schemas with indexing, middleware, validation and a deliberate population strategy — modelled around the reads and writes you actually make rather than around entity diagrams.

## Install

```bash
npx skills add https://github.com/buildfastwithai/agent-skills/tree/main/skills/backend-skills/mongoose-schema-architect-skill
```

<sub>Installs into every agent that reads the <code>SKILL.md</code> format. Add <code>--global</code> to install for all projects, or run <code>npx skills add</code> with no argument to pick interactively.</sub>

## What it does

- Starts from top read/write query patterns, not from the ER diagram
- Designs indexes that match those queries
- Decides embed vs reference with growth in mind
- Places middleware and validation where it belongs
- Plans population strategy to avoid N+1 blowups

## Try it

Once installed, just talk to your agent in plain language:

> *"Design Mongoose schemas for a multi-tenant SaaS with orgs, users and projects."*

> *"My queries are slow — refactor these schemas and indexes."*

> *"Should this be embedded or referenced? Here's my access pattern."*

## What you get back

- ✅ &nbsp;**Schema definitions**
- ✅ &nbsp;**Index strategy**
- ✅ &nbsp;**Population plan**

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`mongodb` &middot; `mongoose` &middot; `database` &middot; `indexing`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a>
</p>
