# Ikyu Portfolio

Portfolio hub for Iqbal Lukman, Ikyu Racer, and Nadya Racer, built with Next.js, Tailwind CSS v4, MDX, and Mermaid.

## AI and agent onboarding

1. Read [`AGENTS.md`](./AGENTS.md) for repository instructions.
2. Read [`docs/INDEX.md`](./docs/INDEX.md) for the documentation map.
3. Read the relevant documents in [`docs/`](./docs/) before changing routes, components, content, or deployment configuration.
4. Verify documented behavior against the source paths before making assumptions.

The `docs/` folder is the shared source of truth for architecture, data contracts, components, workflow, deployment, risks, and maintenance decisions.

## What this project is

The site is a hub for three portfolio experiences:

- `/` — portfolio hub
- `/iqbal-lukman` — data engineering and analytics portfolio with MDX case studies
- `/ikyu-racer` — Ikyu Racer one-page portfolio
- `/nadya-racer` — Nadya Racer one-page portfolio

The current visual direction is dark, modern, and inspired by the Gerold template style.

## Tech stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- MDX via `next-mdx-remote`
- Mermaid for diagrams
- `gray-matter` for frontmatter parsing

## Content structure

Iqbal project content is split into two layers:

- `content/iqbal-lukman/projects.json` — project summaries
- `content/iqbal-lukman/projects/*.mdx` — full case studies

`src/lib/projects.ts` connects the two layers by slug. Racer pages currently use component-local content and public image assets.

## Current features

- portfolio hub with links to all three experiences
- Iqbal project grid with tag filtering
- project cards with images and metadata
- statically generated Iqbal case-study routes
- MDX rendering with Mermaid support
- light/dark theme toggle
- racer portfolio layouts with profile, results, media, technical, partner, and contact sections
- legacy `/projects/:slug` redirect to `/iqbal-lukman/projects/:slug`

## Current status

Done:

- portfolio hub at `/`
- Iqbal portfolio at `/iqbal-lukman`
- Ikyu Racer at `/ikyu-racer`
- Nadya Racer at `/nadya-racer`
- JSON and MDX content loading
- project filtering and case-study routing
- Mermaid support inside MDX
- dark/light mode toggle
- racer profile and machinery carousel components

Next:

- replace placeholder racer results and media with verified content
- add content validation for project metadata
- decide whether `featured` should affect ordering or filtering
- document a deployment provider and CI workflow when selected
- continue scroll-animation and typography polish

## Key files

- `src/app/page.tsx` — portfolio hub
- `src/app/(documentation)/iqbal-lukman/page.tsx` — Iqbal portfolio
- `src/app/(documentation)/iqbal-lukman/projects/[slug]/page.tsx` — Iqbal case studies
- `src/app/(racer)/ikyu-racer/page.tsx` — Ikyu Racer route
- `src/app/(racer)/nadya-racer/page.tsx` — Nadya Racer route
- `src/components/ProjectGrid.tsx` — project grid and tag filter
- `src/components/RacerPortfolio.tsx` — shared racer page
- `src/components/Mermaid.tsx` — Mermaid renderer
- `src/lib/projects.ts` — Iqbal content loader
- `content/iqbal-lukman/projects.json` — project summaries

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Validation commands:

```bash
npm run lint
npm run build
```

## Notes

- The repository currently contains one populated Iqbal case study: `construction-contract-tracker`.
- Racer sections include clearly marked placeholders where official results, media, telemetry, or sponsorship materials are not yet available.
