# Ikyu Portfolio

Portfolio hub for Iqbal Lukman, Ikyu Racer, and Nadya Racer, built with Next.js, Tailwind CSS v4, MDX, and Mermaid.

## AI and agent onboarding

If you are an AI assistant or agent working in this repository, start here:

1. Read [`AGENTS.md`](./AGENTS.md) for repository instructions and the recommended walkthrough.
2. Read [`docs/INDEX.md`](./docs/INDEX.md) for the documentation map.
3. Open the relevant documents in [`docs/`](./docs/) before changing routes, components, content, or deployment configuration.
4. Use the cited source paths in the docs to verify current behavior before making assumptions.

The `docs/` folder is the shared, tool-agnostic source of truth for architecture, data contracts, components, workflow, deployment, known issues, and maintenance decisions.

## What this project is

This site is a hub for three separate portfolio experiences:

- a landing page that links to each identity
- an Iqbal Lukman portfolio for data engineering and analytics work
- Ikyu Racer and Nadya Racer one-page portfolios

The Iqbal portfolio includes:

- a homepage that lists featured projects
- tag-based filtering for faster browsing
- detailed case study pages written in MDX
- Mermaid diagram support for architecture and workflow visuals

The current direction is a dark, modern portfolio inspired by the Gerold template style.

## Tech Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- MDX via `next-mdx-remote`
- Mermaid for diagrams
- `gray-matter` for frontmatter parsing

## Content Structure

Iqbal project content is split into two layers:

- `content/iqbal-lukman/projects.json` for project summaries
- `content/iqbal-lukman/projects/*.mdx` for full case studies

The data loader in `src/lib/projects.ts` connects both layers.

## Current Features

- homepage project grid
- tag filtering
- project cards with images and metadata
- dynamic project detail pages
- static generation for project routes
- MDX rendering
- Mermaid component support

## Current Status

The core content pipeline is already working.

Done:

- content loading from JSON and MDX
- portfolio hub at `/`
- Iqbal portfolio at `/iqbal-lukman`
- Ikyu Racer at `/ikyu-racer`
- Nadya Racer at `/nadya-racer`
- homepage project listing within the Iqbal portfolio
- filterable project grid
- case study routing
- Mermaid support inside MDX
- dark/light mode toggle

Next:

- scroll animations
- typography and visual polish
- content validation for project metadata
- deployment provider and CI documentation

## Key Files

- `src/app/page.tsx` - portfolio hub
- `src/app/(documentation)/iqbal-lukman/page.tsx` - Iqbal portfolio
- `src/app/(documentation)/iqbal-lukman/projects/[slug]/page.tsx` - project detail pages
- `src/components/ProjectGrid.tsx` - project card grid and tag filter
- `src/components/Mermaid.tsx` - Mermaid renderer
- `src/lib/projects.ts` - project data access
- `content/iqbal-lukman/projects.json` - project summaries
- `content/iqbal-lukman/projects/*.mdx` - case studies

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Notes

- The project currently has one populated case study: `construction-contract-tracker`
- The README now reflects the actual portfolio direction instead of the default Next.js starter text
