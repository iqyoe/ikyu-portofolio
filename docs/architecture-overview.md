# Architecture Overview

## System summary

The application is a small Next.js App Router site for presenting data engineering portfolio projects. The verified stack is Next.js 16, React 19, Tailwind CSS v4, MDX through `next-mdx-remote`, Mermaid, and `gray-matter` (verified at `README.md:27-34` and `package.json:11-31`).

## Request and content flow

1. `src/app/layout.tsx` defines global metadata, loads global CSS, and wraps the tree in `next-themes` (verified at `src/app/layout.tsx`).
2. `src/app/page.tsx` renders the portfolio hub and links to the three experiences (verified at `src/app/page.tsx`).
3. The Iqbal route group renders the documentation portfolio, using `SkillsMarquee`, `Timeline`, and `ProjectGrid` (verified at `src/app/(documentation)/iqbal-lukman/page.tsx`).
4. `src/lib/projects.ts` reads `content/iqbal-lukman/projects.json` and matching MDX files (verified at `src/lib/projects.ts`).
5. Iqbal case studies live at `/iqbal-lukman/projects/[slug]` and render through `MDXRemote` with Mermaid support (verified at `src/app/(documentation)/iqbal-lukman/projects/[slug]/page.tsx`).
6. The Ikyu Racer and Nadya Racer routes are independent one-page experiences with separate nested layouts (verified at `src/app/(racer)/`).

## Rendering boundaries

- The hub and portfolio pages are Server Components; client boundaries remain limited to interactive theme, filtering, and Mermaid components.
- `ProjectGrid`, `ThemeToggle`, `theme-provider`, and `Mermaid` are client components (verified at their respective `'use client'` directives).
- Iqbal project routes are enumerated by `generateStaticParams()` from the Iqbal JSON project list.

## Styling and theme model

- Tailwind CSS is imported through the global stylesheet and the typography plugin is enabled there (verified at `src/app/globals.css:1-2`).
- Light and dark colors are stored as CSS variables, while `next-themes` applies the `class` attribute with dark as the default and system support enabled (verified at `src/app/globals.css:4-14` and `src/app/layout.tsx:21-27`).
- The header is shared by the layout and contains the theme toggle (verified at `src/app/layout.tsx:23-25` and `src/components/SiteHeader.tsx:1-14`).

## Facts

- The architecture has a filesystem content boundary rather than a database or API boundary (verified at `src/lib/projects.ts:5-45`).
- The only documented project flow is raw CSV to Pandas to Google Sheets API to Looker Studio, as represented in the Iqbal case study content.

## Assumptions

- The production hosting provider and CDN behavior are unknown (not found in provided files).
- The case-study data flow describes the showcased project and is not evidence that this portfolio repository contains the Python pipeline itself (inferred from the absence of a corresponding source path in the provided repository inventory, not verified in a dedicated manifest).

## Decisions

- Keep the architecture description centered on verified source boundaries and avoid inventing an API, database, authentication layer, or deployment platform (decision based on the cited files).
- Use file references instead of reproducing implementation blocks to honor the short-example policy (decision from the task request).
