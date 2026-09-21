# Architecture Overview

## System summary

This is a small Next.js App Router site with three portfolio experiences. The stack is Next.js 16, React 19, Tailwind CSS v4, `next-mdx-remote`, Mermaid, and `gray-matter`.

## Request and content flow

1. `src/app/layout.tsx` provides global metadata, CSS, and the theme provider.
2. `src/app/page.tsx` renders the portfolio hub.
3. The `(documentation)/iqbal-lukman` route group renders Iqbal’s introduction, skills, timeline, and projects.
4. `src/lib/projects.ts` reads `content/iqbal-lukman/projects.json` and matching MDX files.
5. Iqbal case studies render at `/iqbal-lukman/projects/[slug]` through `MDXRemote` and the Mermaid component.
6. The `(racer)` route group renders Ikyu and Nadya pages through the shared `RacerPortfolio` component.

## Rendering boundaries

- Hub, Iqbal pages, and racer pages are server-rendered components.
- `ProjectGrid`, `ThemeToggle`, `theme-provider`, `Mermaid`, `DriverProfileCarousel`, and `MachineryCarousel` are client components where state, effects, or browser APIs are needed.
- Iqbal static parameters are generated from the Iqbal JSON project list.
- `next.config.ts` redirects legacy `/projects/:slug` URLs to the Iqbal route.

## Styling and theme model

Tailwind CSS is imported through `src/app/globals.css`. CSS variables provide light and dark colors, and `next-themes` applies the `class` attribute with dark as the default and system support enabled. Racer pages use orange or fuchsia accents through shared component props.

## Boundaries and unknowns

The application has a repository-backed content boundary rather than a database or API. Hosting, CDN behavior, CI, authentication, and external race-data integrations are not defined in the repository.
