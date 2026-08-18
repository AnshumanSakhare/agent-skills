<div align="center">

# Contributing

**New skills are very welcome — especially ones that *do* something rather than describe something.**

</div>

---

## The bar

A skill gets merged if it clears four things:

1. **The description earns its place.** The `description` in the frontmatter is the *only* text always in the agent's context. It has to say what the skill does *and* when to reach for it, in the words a user would actually type. Vague descriptions never fire.
2. **It does real work.** A single page of advice is a prompt, not a skill. Bundle the references the agent should read, the scripts it should run, the templates it should fill.
3. **There's a worked example.** One artifact a stranger can open and immediately understand what the skill produces.
4. **`npm run validate` passes.** Naming, frontmatter, manifest entry, no broken links.

## Setup

```bash
git clone https://github.com/AnshumanSakhare/agent-skills
cd agent-skills
node --version   # needs >= 18, no install step
```

There are no dependencies. Everything runs on the Node standard library.

## Add a skill

### 1. Create the folder

Names are lowercase kebab-case and **must end in `-skill`**:

```bash
mkdir -p skills/my-thing-skill
```

```text
skills/my-thing-skill/
├── SKILL.md          required
├── references/       optional — deep context, read on demand
├── scripts/          optional — code the agent executes
├── templates/        optional — output scaffolding
├── assets/           optional
└── examples/         strongly encouraged
```

Don't write `README.md` yourself — it's generated.

### 2. Write `SKILL.md`

```markdown
---
name: my-thing-skill
description: One or two sentences on what this does, followed by the triggers.
  Use when the user asks for X, mentions Y, or wants Z — including phrasings
  like "do the thing", "make me a thing", or when they paste a thing.
---

# My Thing

One line on what the agent should aim for. Not "this skill helps with X" —
say what a good result looks like.

## Workflow

1. Gather these specific inputs.
2. Read [references/deep-dive.md](references/deep-dive.md) before acting.
3. Do the work.
4. Verify the output against the rubric rather than declaring success.

## Quality bar

- The specific things that separate a good result from a mediocre one.
- What to refuse or flag rather than guess at.
```

Rules that CI enforces:

- `name` **must exactly match the folder name**, including the `-skill` suffix. Claude Code and Codex both require this.
- `description` must exist and should sit roughly between 150 and 1024 characters.
- Every relative link in `SKILL.md` and `README.md` must resolve.

Two things that separate skills that work from skills that don't:

- **Progressive disclosure.** Keep `SKILL.md` tight and push depth into `references/`, linked so the agent reads them only when it needs them. A 900-line `SKILL.md` burns context on every invocation.
- **Verification, not vibes.** Give the agent a way to check its own output — a rubric, a checklist, a script that runs. The best skills in this repo all end with a verification step.

### 3. Register it in `skills.json`

```jsonc
{
  "id": "my-thing-skill",
  "name": "My Thing",
  "category": "build",          // build · design · growth · backend · docs · workflow
  "icon": "🧰",
  "level": "core",              // "core" (playbook) or "advanced" (scripts + refs + examples)
  "tagline": "One punchy line. This is what people read in the catalog.",
  "summary": "Two or three sentences with the real detail.",
  "what": ["Bullet", "points", "of concrete capability"],
  "prompts": ["Things a user would actually say to trigger it"],
  "outputs": ["What they get back"],
  "tags": ["searchable", "keywords"],
  "example": "examples/demo.html"   // optional
}
```

### 4. Generate and validate

```bash
npm run docs       # writes skills/my-thing-skill/README.md + updates the catalog
npm run validate   # naming, frontmatter, manifest, links
```

Commit the generated `README.md` and the updated root `README.md` — CI checks they're in sync.

### 5. Test it end to end

```bash
node bin/agent-skills.js add my-thing-skill --dir /tmp/skills-test
```

Then point a real agent at it and confirm it actually triggers on the phrasings in your `description`. This is the step people skip and it's the one that matters.

## Improving an existing skill

Fixes, sharper trigger descriptions, better references and new examples are all just as welcome as new skills. If you're changing metadata, edit `skills.json` and run `npm run docs` — don't hand-edit a generated `README.md`, CI will revert you.

## Categories

| id | For |
|:--|:--|
| `build` | Skills that produce a working product — sites, stores, games, apps |
| `design` | Art direction and design systems |
| `growth` | Startup, GTM, pricing, launch |
| `backend` | APIs, auth, data, MCP |
| `docs` | Documentation, research, presentations |
| `workflow` | Meta-skills that improve how agents work |

Think a seventh category is needed? Open an issue — happy to add one.

## Pull requests

Keep them to one skill (or one focused change) each. Include:

- what the skill does and who it's for
- a real example of its output
- confirmation you ran `npm run validate` and tested it in an actual agent

That's it. Thanks for adding to this.
