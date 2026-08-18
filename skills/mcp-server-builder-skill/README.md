<p align="center">
  <a href="https://www.buildfastwithai.com/">
    <img src="https://raw.githubusercontent.com/buildfastwithai/gen-ai-experiments/main/assets/Banner2.png" width="780px" alt="BuildFastWithAI: Master Generative AI">
  </a>
</p>

<h1 align="center">🔌 MCP Server Builder</h1>

<p align="center"><strong>Design and ship Model Context Protocol servers that don't leak your database.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Backend%20%26%20Data-0984E3?style=for-the-badge" alt="Backend & Data">
  <img src="https://img.shields.io/badge/Type-playbook-2D3436?style=for-the-badge" alt="core">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Practical guidance for designing and building production-grade MCP servers that connect agents to APIs, tools, filesystems and databases — covering tool schema design, trust boundaries, security and deployment.

## Install

```bash
npx github:buildfastwithai/agent-skills add mcp-server-builder-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

## What it does

- Maps external systems to a clean tool surface
- Designs tool schemas agents can actually call correctly
- Establishes auth models and trust boundaries
- Handles rate limits and performance expectations
- Covers deployment and hosting constraints

## Try it

Once installed, just talk to your agent in plain language:

> *"Build me an MCP server that exposes our Postgres analytics tables read-only."*

> *"Design the tool schema for an MCP server wrapping the Stripe API."*

> *"Review my MCP server for security issues before I ship it."*

## What you get back

- ✅ &nbsp;**MCP server implementation**
- ✅ &nbsp;**Tool schema design**
- ✅ &nbsp;**Security review**

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`mcp` &middot; `agents` &middot; `api` &middot; `security`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>
</p>
