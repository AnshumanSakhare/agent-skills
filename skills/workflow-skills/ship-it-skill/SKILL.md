---
name: ship-it-skill
description: Turns any repository — whatever it contains (standalone HTML/artifacts, a framework app, markdown collections like prompt libraries or guides, a Python/npm library, notebooks, a CLI tool) — into a polished, public-facing open-source project ready to share on X/Twitter. Clean structure, a practical flagship example, a viral-ready README with real proof (screenshots, snippets, or demos as fits the product), license, and — whenever the repo embodies a reproducible method — a distributable agent skill with install instructions. Use this skill WHENEVER Satvik asks to open-source a repo, polish or clean up a repo for public release, make a repo viral or shareable, write a nice README for a public repo, prep a project for a launch tweet, or says things like "ship it", "ship this repo", "make this repo public-ready", "make this a proper open-source project", "I want to post this repo on Twitter". Do NOT use for repos staying private/internal, or for writing the launch tweet itself.
---

# Ship It

Turn the current repo into a polished, public-facing open-source project ready to share. The goal is a repo where a stranger with a 10-second attention span understands the idea, sees proof it works, and can reproduce or use it themselves in five minutes — that last part is what turns viewers into sharers.

Distribution philosophy: **no CI/CD workflows, no hosted deploys.** People adopt these repos by downloading a file, running one install command, or installing a skill — not by visiting a deployed site. The live-demo role is played by proof in the README and by the skill install.

## Stage 0 — Name the product

Before touching anything, read the repo and answer in one sentence: **what is the product, and in what form does it ship?** State this to the user and put it (refined) at the top of the README. Every later decision — preview, proof, distribution, even what "zero-install" means — follows from this answer, so don't assume; look at the actual files.

Common product shapes and how they change the playbook:

| Product shape | Zero-friction path | Preview / demo | Distribute | Proof for the README |
|---|---|---|---|---|
| **Standalone artifacts** (self-contained HTML, SVGs, single-file demos) | open the file directly | tiny local gallery app (Vite + vanilla JS, artifacts served verbatim) | download the file + the method as a skill | screenshots of the artifacts |
| **Framework app** (Next/Vite/Astro/etc.) | `npm i && npm run dev` | the app itself | clone-and-run instructions | screenshots of key screens |
| **Content repo** (markdown collections: prompt libraries, guides, awesome lists) | reading it on GitHub | the README **is** the product surface: index tables, consistent per-file structure, internal links | download the MD files + skill if the content is a method | formatted excerpts and tables, not screenshots |
| **Library / package** (Python, npm) | `pip install` / `npm i` + a 5-line usage snippet on the first screen | runnable `examples/` folder | publish to PyPI/npm (or note how) | the usage snippet + real output |
| **Notebooks** | Colab / nbviewer badge per notebook | the notebooks themselves, run top-to-bottom | download / open in Colab | screenshots of outputs and charts |
| **CLI tool** | install one-liner + one impressive command | `--help` that reads well | package registry | a styled terminal screenshot or GIF |

Never force the wrong shape: no gallery app on a content repo, no screenshots where a code snippet is the honest proof. The friction-removal headline changes per shape too ("no build step", "just markdown, steal freely", "one pip install").

## 1. Structure

- Organize files into clean folders with clear kebab-case names. Use `git mv` so history survives.
- Add `.gitignore` and an MIT `LICENSE` (default; confirm only if the repo already has a different license).
- Keep the core artifacts in their most portable, directly-usable form — if something works standalone today, don't wrap or bundle it.
- Add tooling (local preview app) only when the table above calls for it, and keep it to one dev dependency. Do **not** add GitHub Actions workflows or deploy configs.

## 2. Flagship example

If the repo demonstrates an idea, make sure there's one example aimed at a **practical everyday use case**, not just an impressive demo. Readers share what makes them think "I could use this Monday." The impressive demo shows the ceiling; the practical one shows the floor — you want both, and the practical one leads.

## 3. Package the method as a skill (whenever possible)

If the repo embodies a **reproducible method** — a way of making things, a workflow, a design system, a prompt technique — package that method as a distributable agent skill inside the repo:

- Write `skills/<repo-name>/SKILL.md`: YAML frontmatter (`name`, plus a description that says what it does *and* when an assistant should trigger it), then the method itself as imperative instructions with the reasoning included — the recipe, the conventions, the verification step, the output contract. Write it for **any user of any AI assistant**, not for the repo owner personally.
- The skill should stand alone: someone who installs only that one file (without cloning the repo) must be able to get the full result. Reference repo files only as optional extras ("if the repo is available locally, read X as a working reference").
- Document installation in the README (see next section).

Repos that are pure end-products with no transferable method (a finished app, a dataset) can skip this — say so explicitly rather than forcing a skill that has nothing to teach.

## 4. README (the priority — spend the most effort here)

Write for a skimming stranger. Structure:

1. **Hook**: centered title + the one-sentence product statement from Stage 0, then the friction it removes.
2. **Why now / why this matters**: one short section giving the reader the insight, not just the feature list.
3. **Proof**: whatever the Stage 0 table says — screenshot grids, a usage snippet with real output, formatted excerpts. Capture visuals headlessly yourself (see Verification), save to `assets/`. Proof is the difference between scrolled-past and clicked.
4. **Use it**: zero-friction path first, fuller setup second. Commands in fenced blocks.
5. **The recipe**: a numbered breakdown of how the thing works or was made, so readers learn the method — not just admire the result.
6. **Install the skill** (when Stage 3 produced one): `npx skills add <owner>/<repo>` first, then manual installs — Claude Code (curl the SKILL.md into `~/.claude/skills/<name>/`), claude.ai (upload under Settings → Capabilities → Skills), and a paste-into-your-rules fallback for other assistants. End with the one-line ask the user should type. Keep a copy-paste reproduction prompt as the no-skills fallback. This section is the virality mechanic; don't skip it.
7. Real use cases, a one-line contributing invitation (what a PR should contain — including improvements to the skill itself), license link.

Style: confident, concrete, zero filler. Show over tell. No badge walls (badges that do work — Colab, registry versions — are fine).

## 5. Verify — before committing, not after

- Actually run whatever you claim works: build the app, run the examples, execute the notebook, render the markdown, and test the skill's install commands for typos/paths.
- Capture visuals headlessly (Playwright + the preinstalled Chromium for anything browser-rendered) and **look at the images**: broken layouts, overlapping text, missing fonts. Fix and re-shoot.
- Reuse the good captures as the README assets — verification and marketing are the same step.
- Keep total asset weight reasonable (roughly under 2 MB).

## Finish

Commit with clear messages and push. If the user wants a PR, write the body from the actual diff. Close by offering (don't just do) the launch-tweet draft as a follow-up, and suggest which proof makes the strongest opening image — usually the practical example, not the prettiest one.

## Definition of done

- [ ] The product is named in one sentence at the top of the README
- [ ] A stranger understands the project from the README's first screen
- [ ] Zero-friction path works; fuller path works; everything claimed was actually run
- [ ] Proof is real, current, and matched to the product shape
- [ ] If the repo carries a reproducible method, it ships as `skills/<name>/SKILL.md` with install docs (or the skip is explicitly justified)
- [ ] A reader can reproduce the idea via the recipe + skill (or the fallback prompt)
- [ ] LICENSE and .gitignore in place; no CI/deploy workflows added
