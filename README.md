# Ikyu Portfolio

Personal portfolio for data engineering projects, built with Next.js, Tailwind CSS v4, MDX, and Mermaid.

## AI and agent onboarding

If you are an AI assistant or agent working in this repository, start here:

1. Read [`AGENTS.md`](./AGENTS.md) for repository instructions and the recommended walkthrough.
2. Read [`docs/INDEX.md`](./docs/INDEX.md) for the documentation map.
3. Open the relevant documents in [`docs/`](./docs/) before changing routes, components, content, or deployment configuration.
4. Use the cited source paths in the docs to verify current behavior before making assumptions.

The `docs/` folder is the shared, tool-agnostic source of truth for architecture, data contracts, components, workflow, deployment, known issues, and maintenance decisions.

## What this project is

This site is meant to showcase data engineering and analytics work in a clean portfolio format:

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

Project content is split into two layers:

- `content/projects.json` for project summaries used on the homepage
- `content/projects/*.mdx` for full case studies

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
- homepage project listing
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

- `src/app/page.tsx` - homepage
- `src/app/projects/[slug]/page.tsx` - project detail pages
- `src/components/ProjectGrid.tsx` - project card grid and tag filter
- `src/components/Mermaid.tsx` - Mermaid renderer
- `src/lib/projects.ts` - project data access
- `content/projects.json` - project summaries
- `content/projects/*.mdx` - case studies

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
