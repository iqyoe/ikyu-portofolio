# Components and Route Map

| Area | Path | Responsibility |
| --- | --- | --- |
| Root layout | `src/app/layout.tsx` | Global metadata, CSS, and theme provider. |
| Portfolio hub | `src/app/page.tsx` | Links visitors to the three portfolio experiences. |
| Iqbal layout/page | `src/app/(documentation)/iqbal-lukman/` | Header, introduction, skills, timeline, education, resume preview, and project grid. |
| Iqbal detail route | `src/app/(documentation)/iqbal-lukman/projects/[slug]/page.tsx` | Static params, slug resolution, and MDX rendering. |
| Racer routes | `src/app/(racer)/ikyu-racer/`, `src/app/(racer)/nadya-racer/` | Identity-specific layouts and shared one-page portfolio. |
| Header | `src/components/SiteHeader.tsx` | Home link, optional navigation, and tone. |
| Project grid | `src/components/ProjectGrid.tsx` | Tag filtering, cards, images, and case-study links. |
| Tech stack matrix | `src/components/TechStackMatrix.tsx` | Category-filtered technology pills for the Iqbal bento page. |
| Racer portfolio | `src/components/RacerPortfolio.tsx` | Shared racer hero, stats, profile, results, media, technical, partner, and contact sections. |
| Racer carousels | `src/components/DriverProfileCarousel.tsx`, `src/components/MachineryCarousel.tsx` | Racer profile and machinery visuals. |
| Theme provider | `src/components/theme-provider.tsx` | Forces the dark theme across the site. |
| Content visuals | `src/components/SkillsMarquee.tsx`, `Timeline.tsx`, `Mermaid.tsx` | Skills, timeline, and interactive MDX diagram rendering. Mermaid diagrams preserve a readable natural size and support zoom, reset, mouse-wheel zoom, drag-to-pan, and an expanded view. |
| Resume generation | `src/lib/resume.ts`, `src/lib/resume-pdf.tsx`, `src/app/api/resume/route.ts`, `src/app/(documentation)/iqbal-lukman/resume/page.tsx` | Normalizes content, previews the inline PDF, renders the downloadable PDF through a Node.js Route Handler, and generates a header QR code from the shared portfolio URL. |
| QR generator | `src/components/QrGenerator.tsx`, `src/app/qr-generator/page.tsx` | Generates URL/text QR codes locally and exports selected 256–2,048 px PNG/JPEG images or an A4 PDF. |

## Composition

The root layout provides theme context. Each route group supplies its own header layout. The Iqbal page composes the bento hero, metrics, `TechStackMatrix`, timeline, education/certification contact cards, and `ProjectGrid`; racer pages pass identity and theme props to `RacerPortfolio`; shared outline-primary actions inherit the current page accent; the detail route maps Mermaid code blocks to `Mermaid`. The resume route reads the same normalized content model and does not alter the visual page renderer.

## Content ownership

Racer copy remains component-local. Iqbal profile, timeline, skills, education, project summaries, and case studies are repository content under `content/iqbal-lukman/`; the website and PDF derive their shared resume fields from that boundary.
