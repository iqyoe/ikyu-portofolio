# Architecture Overview

## System summary

The application is a small Next.js App Router site for presenting data engineering portfolio projects. The verified stack is Next.js 16, React 19, Tailwind CSS v4, MDX through `next-mdx-remote`, Mermaid, and `gray-matter` (verified at `README.md:27-34` and `package.json:11-31`).

## Request and content flow

1. `src/app/layout.tsx` defines global metadata, loads global CSS, wraps the tree in `next-themes`, and renders `SiteHeader` around page content (verified at `src/app/layout.tsx:1-30`).
2. `src/app/page.tsx` calls `getAllProjects()` and renders the introduction, skills marquee, timeline, and `ProjectGrid` (verified at `src/app/page.tsx:1-38`).
3. `src/lib/projects.ts` reads `content/projects.json` from the process working directory and parses it into project metadata (verified at `src/lib/projects.ts:5-35`).
4. `ProjectGrid` derives the available tags, keeps the selected tag in client state, filters projects, and links case-study cards to `/projects/[slug]` (verified at `src/components/ProjectGrid.tsx:1-20` and `src/components/ProjectGrid.tsx:81-88`).
5. The dynamic project page obtains a slug, loads the matching case study, renders the metadata, and passes MDX content to `MDXRemote` (verified at `src/app/projects/[slug]/page.tsx:43-82`).
6. Mermaid code blocks are converted to the `Mermaid` client component, which renders SVG after mount (verified at `src/app/projects/[slug]/page.tsx:15-33` and `src/components/Mermaid.tsx:17-43`).

## Rendering boundaries

- The home page and project detail page do not declare `'use client'` and call filesystem-backed loaders, so their data access is implemented in server-side modules (verified at `src/app/page.tsx:1-8`, `src/app/projects/[slug]/page.tsx:1-5`, and `src/lib/projects.ts:1-5`).
- `ProjectGrid`, `ThemeToggle`, `theme-provider`, and `Mermaid` are client components (verified at their respective `'use client'` directives).
- Project routes are enumerated by `generateStaticParams()` from the JSON project list (verified at `src/app/projects/[slug]/page.tsx:36-41`).

## Styling and theme model

- Tailwind CSS is imported through the global stylesheet and the typography plugin is enabled there (verified at `src/app/globals.css:1-2`).
- Light and dark colors are stored as CSS variables, while `next-themes` applies the `class` attribute with dark as the default and system support enabled (verified at `src/app/globals.css:4-14` and `src/app/layout.tsx:21-27`).
- The header is shared by the layout and contains the theme toggle (verified at `src/app/layout.tsx:23-25` and `src/components/SiteHeader.tsx:1-14`).

## Facts

- The architecture has a filesystem content boundary rather than a database or API boundary (verified at `src/lib/projects.ts:5-45`).
- The only documented project flow is raw CSV to Pandas to Google Sheets API to Looker Studio, as represented in the case study content (verified at `content/projects/construction-contract-tracker.mdx:31-42`).

## Assumptions

- The production hosting provider and CDN behavior are unknown (not found in provided files).
- The case-study data flow describes the showcased project and is not evidence that this portfolio repository contains the Python pipeline itself (inferred from the absence of a corresponding source path in the provided repository inventory, not verified in a dedicated manifest).

## Decisions

- Keep the architecture description centered on verified source boundaries and avoid inventing an API, database, authentication layer, or deployment platform (decision based on the cited files).
- Use file references instead of reproducing implementation blocks to honor the short-example policy (decision from the task request).
