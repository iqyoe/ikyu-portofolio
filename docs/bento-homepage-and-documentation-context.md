# Bento homepage and documentation context

This document explains how the current site is assembled, how its bento layout relates to the Bentofolio reference, and where an agent should edit content or structure.

## Reference vocabulary

The Bentofolio reference describes a responsive Tailwind portfolio organized around a Bento grid: a set of cards with different sizes and roles that fit together as one dashboard-like composition. The reference also advertises dark/light variants, smooth motion, reusable UI components, and dedicated documentation. Those are design cues, not an instruction to copy template source or content.

A useful bento card has one clear job:

- **Identity:** who the portfolio is for and what the visitor should remember.
- **Proof:** a metric, project, result, or capability.
- **Navigation:** a direct path to projects, experience, resume, or contact.
- **Context:** a short explanation that makes the adjacent cards understandable.
- **Utility:** a focused action such as the QR generator or resume download.

Bento composition comes from the grid relationship between these jobs. It is not created by adding rounded corners to every element.

## Current composition map

### Root homepage (`src/app/page.tsx`)

The root page is a bento portal. It renders:

1. `SiteHeader` with the “Sojitoy Team” label and theme toggle.
2. A short brand introduction.
3. An Iqbal focal card from the local `portfolios` array.
4. Two supporting racer cards.
5. A full-width QR generator utility card.

The current grid uses twelve columns at medium widths. Iqbal occupies seven columns and two rows as the focal card; IKYU and CHEZNADDZ occupy the right-side supporting cells; the QR utility spans the bottom. On small screens the cells stack naturally. Images, alt text, routes, and the `portfolios` data array remain local to `src/app/page.tsx`.
## Iqbal portfolio (`src/app/(documentation)/iqbal-lukman/page.tsx`)

This is the site’s actual bento-style page:

- The hero is a large `lg:grid-cols-[1.35fr_0.65fr]` cell with portrait, identity, summary, contact links, and actions.
- The right column contains two stacked cells: quick metrics and primary focus.
- `TechStackMatrix` is a full-width interactive technology cell.
- `Timeline` is a full-width experience cell with linked project subcards.
- `ProjectGrid` is the documentation gallery.
- Education/certifications and contact are paired closing cells.

The page is server-rendered. Only the technology filter and project tag filter become client components. The bento behavior is therefore structural CSS grid composition plus small local interactions, not a client-side layout engine.

## How the documentation/about experience is made

The route group name `(documentation)` is organizational; it does not appear in the URL. The public documentation experience is the Iqbal page plus its case-study and resume routes.

### Profile and about content

`content/iqbal-lukman/resume.json` is the canonical profile source. It contains the name, headline, summary, contact links, work experience, skill groups, education, and certifications. `src/lib/resume.ts` reads this file and joins it with project summaries and optional MDX resume metadata.

The Iqbal page maps those normalized fields into visible sections:

- `resume.name`, `headline`, `summary`, and `contact` become the hero.
- `resume.skillGroups` becomes `TechStackMatrix`.
- `resume.experience` becomes `Timeline`.
- `resume.education` and `resume.certifications` become the education/about panel.
- `resume.projects` and `getAllProjects()` become the case-study grid and timeline links.

Edit profile facts in `resume.json`; do not duplicate them in the page component.

### Case-study documentation

Project summaries live in `content/iqbal-lukman/projects.json`. Each record supplies a stable `projectNumber`, `slug`, title, category, summary, tags, optional image, and case-study flag. Full documentation lives in `content/iqbal-lukman/projects/<slug>.mdx`.

`src/lib/projects.ts` joins the two layers. `generateStaticParams()` uses the JSON list to create static detail routes, and `getProjectBySlug()` reads the matching MDX file with `gray-matter`. The detail page renders the body with `MDXRemote`; fenced `mermaid` blocks and the `Mermaid` component render diagrams.

A new case study therefore follows this contract:

1. Add one JSON summary.
2. Add one MDX file with the same slug.
3. Add an image under `public/` only if the case study needs one.
4. Add the slug to a resume experience entry only when the project belongs in that timeline.
5. Run `npm.cmd run validate:resume`, `npm.cmd run lint`, and `npm.cmd run build`.

### Resume documentation

`/iqbal-lukman/resume` embeds `/api/resume`. The API route generates a PDF from the same normalized resume model used by the page, so the website and downloadable document stay aligned. The shared website URL in `resume.json` is also used for the PDF header QR code.

## Reference palette`r`n`r`nThe homepage shell follows the Bentofolio services page palette: light `#f0f2f5` with dark text `#1a1f2c`, dark surfaces around `#0e1018`/`#1a1f2c`, muted text around `#576076`, and one primary blue around `#4770ff`. The portal avoids separate green and pink accents so light and dark modes read as one system. The racer pages keep their identity-specific accent props.`r`n`r`n## Theme behavior

src/app/layout.tsx now enables 
ext-themes with a dark default and no forced theme. ThemeToggle is mounted in SiteHeader, so it appears on the hub and the nested portfolio routes. Global shell variables (--background, --surface, --line, --muted, and accent variables) switch between light and dark values. The Iqbal and racer pages still contain deliberate dark editorial sections, so a light selection does not rewrite those content canvases.

## Editing rules for agents

- Treat source files as authoritative when this document and the implementation disagree.
- Keep summary JSON and MDX slugs aligned.
- Keep verified facts separate from racer placeholders.
- Do not claim a contact form, analytics pipeline, hosting provider, or deployment workflow unless the repository contains that integration.
- When changing layout roles, update `docs/site-review.md` and this context document together.

## Suggested bento acceptance criteria

A future homepage revision matches the intended direction when it has a clear focal identity card, at least two intentionally different card spans, direct navigation to all three portfolio experiences, a visible utility action, usable mobile stacking, and no duplicated or invented portfolio facts.





## Iqbal palette

The Iqbal documentation route adds a scoped crimson/forest override: crimson is the primary action and navigation color, while forest green marks supporting identity and skill emphasis. This wrapper leaves the homepage palette unchanged.
