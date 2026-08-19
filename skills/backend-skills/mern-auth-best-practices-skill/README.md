<h1 align="center">🔐 MERN Auth Best Practices</h1>

<p align="center"><strong>JWT and Auth.js flows with refresh rotation and cookie strategy that actually holds.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Backend%20%26%20Data-0984E3?style=for-the-badge" alt="Backend & Data">
  <img src="https://img.shields.io/badge/Type-playbook-2D3436?style=for-the-badge" alt="core">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Implements secure authentication for MERN and Next.js stacks — JWT or Auth.js/NextAuth — including refresh token rotation, session hardening, secure cookie strategy and role-based access checks.

## Install

```bash
npx skills add https://github.com/buildfastwithai/agent-skills/tree/main/skills/backend-skills/mern-auth-best-practices-skill
```

<sub>Installs into every agent that reads the <code>SKILL.md</code> format. Add <code>--global</code> to install for all projects, or run <code>npx skills add</code> with no argument to pick interactively.</sub>

## What it does

- Refresh token rotation with reuse detection
- Secure cookie strategy: SameSite, HttpOnly, domain scoping
- Session hardening and revocation paths
- Role and permission checks on protected routes
- Provider integration via Auth.js/NextAuth

## Try it

Once installed, just talk to your agent in plain language:

> *"Add secure JWT auth with refresh rotation to my Express + React app."*

> *"Set up NextAuth with role-based route protection."*

> *"Review my auth flow for token and cookie vulnerabilities."*

## What you get back

- ✅ &nbsp;**Auth implementation**
- ✅ &nbsp;**Cookie and session strategy**
- ✅ &nbsp;**Access-control model**

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`auth` &middot; `jwt` &middot; `nextauth` &middot; `security` &middot; `mern`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a>
</p>
