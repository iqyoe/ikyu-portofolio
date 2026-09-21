# Components and Route Map

| Area | Path | Responsibility |
| --- | --- | --- |
| Root layout | `src/app/layout.tsx` | Metadata, global CSS, and theme provider. |
| Portfolio hub | `src/app/page.tsx` | Links visitors to the three portfolio experiences. |
| Iqbal portfolio | `src/app/(documentation)/iqbal-lukman/page.tsx` | Composes Iqbal's skills, timeline, and documented projects. |
| Iqbal detail route | `src/app/(documentation)/iqbal-lukman/projects/[slug]/page.tsx` | Generates project params, resolves a slug, and renders MDX case studies. |
| Racer pages | `src/app/(racer)/ikyu-racer/page.tsx`, `src/app/(racer)/nadya-racer/page.tsx` | Independent one-page portfolio experiences. |
| Project grid | `src/components/ProjectGrid.tsx` | Client-side tag filtering, project cards, images, and case-study links (verified at `src/components/ProjectGrid.tsx:1-97`). |
| Header | `src/components/SiteHeader.tsx` | Home link and theme toggle shell (verified at `src/components/SiteHeader.tsx:1-14`). |
| Theme toggle | `src/components/ThemeToggle.tsx` | Switches between light and dark themes after client mount (verified at `src/components/ThemeToggle.tsx:23-43`). |
| Theme provider | `src/components/theme-provider.tsx` | Thin wrapper around `next-themes` (verified at `src/components/theme-provider.tsx:1-7`). |
| Skills marquee | `src/components/SkillsMarquee.tsx` | Displays a repeated animated list of five declared skills (verified at `src/components/SkillsMarquee.tsx:1-23`). |
| Timeline | `src/components/Timeline.tsx` | Renders hard-coded work, academic, and awards sections (verified at `src/components/Timeline.tsx:1-45`). |
| Mermaid | `src/components/Mermaid.tsx` | Client-side Mermaid initialization and SVG insertion (verified at `src/components/Mermaid.tsx:1-43`). |

## Composition

The Iqbal route composes `SkillsMarquee`, `Timeline`, and `ProjectGrid`; each portfolio layout composes a configurable `SiteHeader`; the project detail route composes `Mermaid` through the MDX component map.

## Facts

- `ProjectGrid` and theme-related components use client boundaries because they rely on state, effects, or browser-aware theme behavior (verified at `src/components/ProjectGrid.tsx:1-3`, `src/components/ThemeToggle.tsx:1-4`, `src/components/theme-provider.tsx:1-3`, and `src/components/Mermaid.tsx:1-4`).
- `Timeline` and `SkillsMarquee` keep their content in module-local constants rather than loading it from `content/` (verified at `src/components/Timeline.tsx:1-45` and `src/components/SkillsMarquee.tsx:1-7`).

## Assumptions

- The hard-coded timeline is intentional portfolio copy until a content source is introduced (inferred from `src/components/Timeline.tsx:1-45`, not explicitly documented).
- No shared component test suite is present in the provided repository (not found in provided files).

## Decisions

- Update this map when a route, content loader, client boundary, or shared component is added or removed (decision for documentation maintenance).
- Keep implementation details in the source files and use this document for ownership and relationship mapping (decision from the short-example policy).
