<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent walkthrough

When starting work in this repository:

1. Read [`README.md`](./README.md) for the project purpose, stack, content structure, and local commands.
2. Read [`docs/INDEX.md`](./docs/INDEX.md) to find the relevant architecture, data-model, component, workflow, or deployment guide.
3. Check [`docs/known-issues.md`](./docs/known-issues.md) before changing content loading, MDX rendering, route generation, or Mermaid behavior.
4. Inspect the cited source files and treat implementation as authoritative when prose is stale.
5. After changes, run `npm.cmd run lint` and `npm.cmd run build` in PowerShell when practical.

## Repository map

- `src/app/` contains the App Router layout, homepage, and project detail route.
- `src/components/` contains the shared header, theme, project grid, timeline, skills marquee, and Mermaid renderer.
- `src/lib/projects.ts` loads project summaries from `content/projects.json` and case studies from `content/projects/*.mdx`.
- `content/` is the editable portfolio content boundary; keep summary records and MDX slugs aligned.
- `public/` contains static assets referenced by the UI and project metadata.
- `docs/` contains the AI-context documentation and should be updated when architecture, contracts, workflow, or known issues change.

## Change guidance

- For Next.js code, follow the generated instruction block above and read the relevant guide under `node_modules/next/dist/docs/` before editing.
- For a new project, add a JSON summary and a matching MDX case study unless the loader fallback is intentionally being used.
- Avoid inventing hosting, CI, database, authentication, or external pipeline details that are not present in the repository.
- Prefer concise file references over copied implementation blocks in documentation.
