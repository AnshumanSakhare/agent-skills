<div align="center">

<h1>🗄️&nbsp;&nbsp;Mongoose Schema Architect</h1>

<p><b>Schemas designed backwards from your actual query patterns.</b></p>

<a href="https://github.com/AnshumanSakhare/agent-skills#quickstart"><img src="https://img.shields.io/badge/install-npx%20one--liner-000000?style=for-the-badge&logo=npm&logoColor=white" alt="install"></a>&nbsp;<img src="https://img.shields.io/badge/category-Backend%20%26%20Data-0984E3?style=for-the-badge" alt="Backend & Data">&nbsp;<img src="https://img.shields.io/badge/type-playbook-2D3436?style=for-the-badge" alt="core">&nbsp;<a href="https://github.com/AnshumanSakhare/agent-skills"><img src="https://img.shields.io/badge/registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>

</div>

---

> Designs high-performance Mongoose schemas with indexing, middleware, validation and a deliberate population strategy — modelled around the reads and writes you actually make rather than around entity diagrams.

## Install

```bash
npx github:AnshumanSakhare/agent-skills add mongoose-schema-architect-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

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

<div align="center">

<sub>One of <b>32 skills</b> in <a href="https://github.com/AnshumanSakhare/agent-skills">agent-skills</a>.</sub>

<a href="../../README.md">Browse the full catalog</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills">⭐ Star the repo</a> &nbsp;&middot;&nbsp; <a href="https://github.com/AnshumanSakhare/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>

</div>
