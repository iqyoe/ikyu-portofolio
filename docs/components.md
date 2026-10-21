# Components and Route Map

| Area | Path | Responsibility |
| --- | --- | --- |
| Root layout | `src/app/layout.tsx` | Global metadata, CSS, and theme provider. |
| Portfolio hub | `src/app/page.tsx` | Links visitors to the three portfolio experiences. |
| Iqbal layout/page | `src/app/(documentation)/iqbal-lukman/` | Header, introduction, skills, timeline, and project grid. |
| Iqbal detail route | `src/app/(documentation)/iqbal-lukman/projects/[slug]/page.tsx` | Static params, slug resolution, and MDX rendering. |
| Racer routes | `src/app/(racer)/ikyu-racer/`, `src/app/(racer)/nadya-racer/` | Identity-specific layouts and shared one-page portfolio. |
| Header | `src/components/SiteHeader.tsx` | Home link, optional navigation, and tone. |
| Project grid | `src/components/ProjectGrid.tsx` | Tag filtering, cards, images, and case-study links. |
| Tech stack matrix | `src/components/TechStackMatrix.tsx` | Category-filtered technology pills for the Iqbal bento page. |
| Racer portfolio | `src/components/RacerPortfolio.tsx` | Shared racer hero, stats, profile, results, media, technical, partner, and contact sections. |
| Racer carousels | `src/components/DriverProfileCarousel.tsx`, `src/components/MachineryCarousel.tsx` | Racer profile and machinery visuals. |
| Theme provider | `src/components/theme-provider.tsx` | Forces the dark theme across the site. |
| Content visuals | `src/components/SkillsMarquee.tsx`, `Timeline.tsx`, `Mermaid.tsx` | Skills, timeline, and interactive MDX diagram rendering. Mermaid diagrams preserve a readable natural size and support zoom, reset, mouse-wheel zoom, drag-to-pan, and an expanded view. |

## Composition

The root layout provides theme context. Each route group supplies its own header layout. The Iqbal page composes the bento hero, metrics, `TechStackMatrix`, timeline, education/contact cards, and `ProjectGrid`; racer pages pass identity and theme props to `RacerPortfolio`; the detail route maps Mermaid code blocks to `Mermaid`.

## Content ownership

Timeline, skills, and racer copy are module-local constants. Iqbal project summaries and case studies are repository content under `content/iqbal-lukman/`.
