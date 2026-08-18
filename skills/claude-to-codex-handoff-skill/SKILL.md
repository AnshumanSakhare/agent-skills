---
name: claude-to-codex-handoff-skill
description: Use whenever the user wants to move, hand off, transfer, or "export" this conversation's work to Codex, another coding CLI/agent (Cursor, Cline, Gemini CLI, Windsurf), or a teammate who wasn't in this chat. Trigger on phrases like "hand this off to codex", "continue this in codex", "transfer context to codex", "package this up for another AI", "export this so I can pick it up elsewhere", or "I need to switch tools, get everything ready." Produces a portable handoff — AGENTS.md (build/test/convention info), HANDOFF.md (goal, decisions and why, status, blockers, next steps), and copies of every file created or referenced — zipped and ready to drop into the new working directory. Use this instead of a plain summary whenever the destination is another AI agent or tool, since agents need structured, self-contained context, not conversational recap.
---

# Claude → Codex (or any agent) Handoff

## Why this exists

When work moves from one AI tool to another, the new tool starts from zero: no memory of the conversation, no idea what's been tried, no sense of *why* a decision was made a particular way. A plain copy-pasted summary tends to lose the reasoning and the files. This skill builds a package that a coding agent (or a human) can pick up cold and continue from, with minimal re-explaining.

The package has three parts:
1. **AGENTS.md** — durable, project-level facts (build/test commands, conventions, constraints). This is a real cross-tool standard: Codex, Cursor, Cline, Windsurf, and Gemini CLI all auto-discover an `AGENTS.md` at the root of a working directory and load it automatically. Only include this if the session actually established repo-level facts — don't invent them.
2. **HANDOFF.md** — the narrative: what we were trying to do, what's done, what's not, why key decisions were made, what to watch out for, and what to do next. This is the part a plain file-export loses.
3. **files/** — every file actually created or meaningfully referenced during the session, in a structure that makes sense to drop into a working directory.

## Step 1: Mine the conversation for context

Before writing anything, reread the conversation and pull out, in your own words (don't invent anything not actually discussed):

- **The goal.** What was the user actually trying to accomplish? Distinguish the original ask from how it evolved.
- **Current status.** What's actually done and working vs. attempted-but-broken vs. not started.
- **Decisions and their reasoning.** Anywhere the user chose one approach over another (a library, an architecture, a naming convention, a tradeoff) — capture the *why*, not just the *what*. This is the highest-value content in the handoff; a new agent can rediscover the "what" from the code, but not the "why."
- **Dead ends.** Approaches that were tried and abandoned, and why — so the next agent doesn't repeat them.
- **Open questions / blockers.** Anything unresolved, waiting on the user, or genuinely ambiguous.
- **Repo-level facts, if any.** Build commands, test commands, lint/format commands, directory layout conventions, library choices, code-style preferences the user stated or corrected Claude on.
- **Next steps**, roughly prioritized.

If the conversation so far is thin (e.g., the user asked for this handoff before much work happened), say so plainly in HANDOFF.md rather than padding it out — a short honest handoff beats a long invented one.

## Step 2: Find the files

Check what actually exists on disk:

```bash
ls -la /mnt/user-data/outputs/ 2>/dev/null
ls -la /mnt/user-data/uploads/ 2>/dev/null
```

Include:
- Everything in `/mnt/user-data/outputs/` (anything Claude produced this session).
- Uploaded files that are still relevant to where the work is headed (skip ones that were only reference material already fully incorporated elsewhere, but mention in HANDOFF.md that they existed and what they were for).

If code was written directly in the conversation as snippets rather than saved as files (common for short scripts), write those out as real files now — don't leave them as prose the next agent has to re-transcribe.

## Step 3: Redact secrets

Scan everything you're about to write — HANDOFF.md, AGENTS.md, and any copied files — for API keys, tokens, passwords, connection strings, or other credentials that may have appeared in the conversation. Replace them with a clearly-marked placeholder (e.g. `<YOUR_API_KEY_HERE>`) and add a line to HANDOFF.md noting which secrets the user will need to supply in the new environment. Never carry a real secret into the handoff package.

## Step 4: Write AGENTS.md (only if there's real content for it)

Keep it minimal — plain Markdown, no required schema. Only include sections you have actual grounded content for; don't manufacture boilerplate.

```markdown
# AGENTS.md

## Commands
- Install: ...
- Build: ...
- Test: ...
- Lint/format: ...

## Conventions
- (code style, naming, directory structure the user established or corrected)

## Constraints
- (anything explicitly off-limits or non-negotiable — e.g. "don't upgrade past React 18", "no new dependencies without asking")
```

If the session never touched any of this (e.g., it was a research or writing task, not a coding project), skip AGENTS.md entirely rather than inventing generic content.

## Step 5: Write HANDOFF.md

Use the template at `assets/HANDOFF_template.md`. Fill it in from what you gathered in Step 1 — every section should reflect what actually happened in the conversation, not generic placeholder text. If a section genuinely doesn't apply, say "N/A — not discussed" rather than omitting it silently, so the next agent knows it wasn't forgotten.

## Step 6: Assemble and package

```bash
mkdir -p /home/claude/handoff/files
# copy relevant files into /home/claude/handoff/files/, preserving any meaningful subfolder structure
cd /home/claude/handoff
zip -r ../handoff.zip .
cp ../handoff.zip /mnt/user-data/outputs/
```

Then present the zip (and, if the user is likely to want to eyeball it first, the loose HANDOFF.md too) with the file-sharing tool.

## Step 7: Tell the user how to use it — briefly

After presenting the files, give a short (2-4 line) note, not a tutorial:
- Unzip into the working directory before starting Codex (or whichever tool) — `AGENTS.md` at the repo root is auto-loaded; `files/` contents go wherever they belong in the project.
- Paste HANDOFF.md as the first message to the new agent, or reference it (e.g. `@HANDOFF.md` in Codex CLI), so it reads the narrative before touching code.
- Flag again, once, if any secrets were redacted and need to be supplied in the new environment.

Don't re-explain the whole package structure in prose — the files speak for themselves.
