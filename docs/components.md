# Components and Route Map

| Area | Path | Responsibility |
| --- | --- | --- |
| Root layout | `src/app/layout.tsx` | Global metadata, CSS, and theme provider. |
| Portfolio hub | `src/app/page.tsx` | Links visitors to the three portfolio experiences. |
| Iqbal layout/page | `src/app/(documentation)/iqbal-lukman/` | Header, introduction, skills, timeline, and project grid. |
| Iqbal detail route | `src/app/(documentation)/iqbal-lukman/projects/[slug]/page.tsx` | Static params, slug resolution, and MDX rendering. |
| Racer routes | `src/app/(racer)/ikyu-racer/`, `src/app/(racer)/nadya-racer/` | Identity-specific layouts and shared one-page portfolio. |
| Header | `src/components/SiteHeader.tsx` | Home link, optional navigation, tone, and theme toggle. |
| Project grid | `src/components/ProjectGrid.tsx` | Tag filtering, cards, images, and case-study links. |
| Racer portfolio | `src/components/RacerPortfolio.tsx` | Shared racer hero, stats, profile, results, media, technical, partner, and contact sections. |
| Racer carousels | `src/components/DriverProfileCarousel.tsx`, `src/components/MachineryCarousel.tsx` | Racer profile and machinery visuals. |
| Theme components | `src/components/theme-provider.tsx`, `ThemeToggle.tsx` | Theme context and toggle control. |
| Content visuals | `src/components/SkillsMarquee.tsx`, `Timeline.tsx`, `Mermaid.tsx` | Skills, timeline, and MDX diagram rendering. |

## Composition

The root layout provides theme context. Each route group supplies its own header layout. The Iqbal page composes skills, timeline, and projects; racer pages pass identity and theme props to `RacerPortfolio`; the detail route maps Mermaid code blocks to `Mermaid`.

## Content ownership

Timeline, skills, and racer copy are module-local constants. Iqbal project summaries and case studies are repository content under `content/iqbal-lukman/`.
