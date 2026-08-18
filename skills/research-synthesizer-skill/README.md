<p align="center">
  <a href="https://www.buildfastwithai.com/">
    <img src="https://raw.githubusercontent.com/buildfastwithai/gen-ai-experiments/main/assets/Banner2.png" width="780px" alt="BuildFastWithAI: Master Generative AI">
  </a>
</p>

<h1 align="center">🔬 Research Synthesizer</h1>

<p align="center"><strong>Many sources in, one cited Markdown report out — with confidence notes.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Format-SKILL.md-000000?style=for-the-badge" alt="SKILL.md">
  <img src="https://img.shields.io/badge/Category-Docs%20%26%20Research-E17055?style=for-the-badge" alt="Docs & Research">
  <img src="https://img.shields.io/badge/Type-playbook-2D3436?style=for-the-badge" alt="core">
  <a href="https://github.com/buildfastwithai/agent-skills"><img src="https://img.shields.io/badge/Registry-agent----skills-181717?style=for-the-badge&logo=github&logoColor=white" alt="agent-skills"></a>
</p>

---

> Synthesises multiple search results into a structured, cited Markdown report. Comparisons, evidence-backed summaries, literature overviews and source-grounded recommendations, with confidence flagged where the sources disagree.

## Install

```bash
npx github:buildfastwithai/agent-skills add research-synthesizer-skill
```

<sub>Installs into every agent directory found on your machine. Target one explicitly with `--client claude` &middot; `codex` &middot; `cursor` &middot; `opencode` &middot; `project`, or drop it anywhere with `--dir <path>`.</sub>

## What it does

- Pulls from multiple sources and reconciles them
- Cites every substantive claim
- Flags confidence and notes where sources conflict
- Adjustable depth: quick brief, standard, deep dive
- Respects geographic and recency constraints

## Try it

Once installed, just talk to your agent in plain language:

> *"Research the current state of vector database pricing and give me a cited brief."*

> *"Compare these five frameworks with evidence and tell me what to pick."*

> *"Deep dive on this topic with citations and confidence notes."*

## What you get back

- ✅ &nbsp;**Cited Markdown report**
- ✅ &nbsp;**Source list**
- ✅ &nbsp;**Confidence notes**

## Works with

Claude Code &middot; Claude Desktop &middot; OpenAI Codex &middot; Cursor &middot; opencode &middot; anything that reads the [Agent Skills](https://code.claude.com/docs/en/skills) `SKILL.md` format.

## Tags

`research` &middot; `citations` &middot; `synthesis` &middot; `analysis`

---

<p align="center">
  <sub>One of <b>32 skills</b> in <a href="https://github.com/buildfastwithai/agent-skills">agent-skills</a>, by <a href="https://www.buildfastwithai.com/">Build Fast with AI</a>.</sub>
</p>

<p align="center">
  <a href="../../README.md">Browse the full catalog</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills">⭐ Star the repo</a> &nbsp;·&nbsp; <a href="https://github.com/buildfastwithai/agent-skills/blob/main/CONTRIBUTING.md">Add your own skill</a>
</p>
