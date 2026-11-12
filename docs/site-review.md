# Site review and page inventory

Date: 2026-10-31

## Scope and evidence

This review covers the route tree, source components, content loaders, and the rendered production responses for every public route. The local checks used were `npm.cmd run lint`, `npm.cmd run validate:resume`, `npm.cmd run build`, and HTTP smoke tests against the running Next.js server. All three repository checks passed and all public routes returned HTTP 200.

The ThemeForest reference is [Bentofolio – Minimal Tailwind CSS Personal Portfolio HTML5 Template](https://themeforest.net/item/bentofolio-minimal-tailwind-css-personal-portfolio-html5-template/50795992). Its published direction is a responsive Tailwind portfolio with a Bento grid, dark/light theme variants, animation, and a documented multi-page HTML structure. This repository uses the reference as visual inspiration while implementing a Next.js App Router site with its own content model.

## Route-by-route review

### `/` — portfolio hub

**Implementation:** `src/app/page.tsx` renders `SiteHeader`, a brand introduction, three portfolio links, and a QR generator utility link. The cards use profile images from `public/image/` and route to the Iqbal, Ikyu, and Nadya experiences.

**What works:** clear entry points, meaningful alt text, a useful utility callout, responsive grid classes, and a simple information hierarchy.

**Resolved in this pass:** the homepage now uses a 12-column bento grid. Iqbal is the dominant two-row card, the two racer identities occupy supporting cells, and the QR utility spans the bottom. The shared header includes a dark/light toggle, with dark as the default.

**Content gap:** the root brand says “Sojitoy Team”, while the portfolio identity and reference language are otherwise centered on Ikyu/Iqbal/Nadya. Confirm whether “Sojitoy Team” is the permanent public brand before a visual redesign.

### `/iqbal-lukman` — documentation portfolio

**Implementation:** `src/app/(documentation)/iqbal-lukman/page.tsx` composes the bento hero, quick metrics, focus card, `TechStackMatrix`, `Timeline`, `ProjectGrid`, education, certifications, and contact panels. `getResumeData()` and `getAllProjects()` provide the content.

**What works:** this is the strongest bento implementation in the current site. The hero and side cards create an asymmetric first row, the technology matrix and timeline are distinct content blocks, and project cards lead to detailed case studies. The page has stable section anchors (`#tech-stack`, `#experience`, `#projects`, `#contact`) and a resume preview path.

**Risks:** the metric “1 Case study” does not match the 15 project records currently loaded; `featured` exists in JSON but does not control the visible ordering; the contact panel is intentionally a prompt with no direct contact action; and the existing portfolio canvas still uses deliberate dark sections even when the shell is switched to light mode.

### `/iqbal-lukman/projects/[slug]` — case-study documentation

**Implementation:** `src/app/(documentation)/iqbal-lukman/projects/[slug]/page.tsx` statically generates one route for each JSON project, resolves the matching MDX file through `src/lib/projects.ts`, and renders MDX with Mermaid support.

**What works:** the JSON/MDX split is easy to edit, slugs are stable, missing documents become a 404, images are optional, and diagrams can be authored in a case study without changing React code.

**Risks:** the page title falls back to the global `Sojitoy Team` title because the detail route does not export per-project metadata; the loader intentionally accepts unvalidated JSON; and Mermaid uses the documented permissive `securityLevel: 'loose'` setting. Keep MDX authoring trusted and run the content validation after metadata changes.

### `/iqbal-lukman/resume` and `/api/resume` — resume documentation/export

**Implementation:** the preview page embeds the generated PDF route, and the API route uses the normalized resume model from `src/lib/resume.ts` and `src/lib/resume-pdf.tsx`. The PDF includes a QR code generated from `resume.json`’s website URL.

**What works:** the website and PDF share one content model, the preview and download actions are obvious, and the page has a useful browser-native PDF fallback.

**Risks:** embedded PDF behavior varies by browser; the certification record is expired (`Apr 2025`) and should be labeled or refreshed before presenting it as current; and the resume page has no visible top-level `SiteHeader`, so the back link is the only route navigation.

### `/ikyu-racer` — Ikyu racing portfolio

**Implementation:** the route passes identity, image, and the `orange` theme to `RacerPortfolio`. The shared page contains hero, stats, profile carousel, track record, media, technical edge, partners, and contact sections.

**What works:** shared composition keeps both racer pages consistent while preserving theme differences; responsive sections and touch/arrow carousels are present; image alt text is supplied.

**Risks:** race results, media, sponsorship deck, and form submission are placeholders as documented. The contact form posts to `#contact`, so it does not send data. The page presents the same profile image in three media tiles until real media is added.

### `/nadya-racer` — Nadya racing portfolio

This uses the same `RacerPortfolio` contract with the `fuchsia` identity theme and the female racer image. The strengths and placeholder risks are the same as `/ikyu-racer`; content should be verified independently rather than copied between identities.

### `/qr-generator` — browser-local utility

**Implementation:** `src/components/QrGenerator.tsx` generates QR codes in the browser and exports PNG, JPEG, or A4 PDF. Payloads are capped at 2,200 UTF-8 bytes and raster output at 2,048 px.

**What works:** clear limits, local-only copy, accessible labels, status feedback, and predictable export sizes.

**Risks:** generation is deliberately debounced by one second, so the preview feels delayed for short edits; URL mode does not validate URL syntax before encoding; and download errors are presented as a generic content message.

## Cross-site findings

- **Visual consistency:** global styling is intentionally dark with blue, emerald, and pink accents. Racer pages use the same system but have different content density and stronger editorial sections.
- **Navigation:** the header is intentionally minimal. Iqbal exposes only “Portfolio”; racer pages expose only “Home”; case studies and resume rely on back links. A persistent section-aware nav would make long pages easier to scan.
- **Accessibility:** semantic headings, labels, button names, and image alt text are generally present. Interactive tab controls use `aria-selected`; carousel dots use `aria-current`. Add keyboard focus styling and consider `aria-controls`/`aria-labelledby` for richer state relationships.
- **Content integrity:** JSON and MDX alignment is validated by the resume script, but there is no general schema validation for project metadata or race content.
- **Reference alignment:** the Iqbal page and the root hub now both express the reference’s bento idea. The hub uses the theme toggle for the shell and portal surfaces; existing portfolio canvases retain their dark editorial treatment.

## Prioritized next actions

1. Review the new homepage at desktop and mobile widths, then tune card spans or copy based on real content and screenshots.
2. Correct the Iqbal hero metric and decide how `featured` should affect ordering or a featured row.
3. Add route-specific metadata for case-study titles and descriptions.
4. Replace racer placeholders with verified results, media, and a real contact destination before publishing those sections as complete.
5. Add project metadata schema validation and a small browser smoke/visual QA workflow.
6. Decide whether the remaining dark editorial sections should receive light variants in a later pass.

## 2026-11-09 section wayfinding pass

Added a shared desktop section rail to the Iqbal portfolio, Iqbal case studies, and both racer pages. The rail observes section visibility, updates its current heading with a short compositor-friendly transition, supports keyboard anchor navigation, and is hidden below the wide desktop breakpoint so mobile layouts keep their content width. Reduced-motion users retain the active-state change without movement.

The Iqbal portfolio also has view-triggered reveals for its major sections and project cards. The animation uses a 260ms strong ease-out on opacity and transform, with a 50ms alternating card offset and a reduced-motion opacity-only fallback. The section rail breakpoint is 1536px so it does not compete with the hero portrait on narrower desktop widths.



## 2026-10-31 Iqbal palette update

The Iqbal route now uses a scoped crimson primary and forest green supporting accent. The homepage keeps its unified Bentofolio-inspired blue palette.

## 2026-10-31 light-theme contrast audit

Audited the Iqbal portfolio, case-study route, and resume preview for hardcoded light text on light surfaces. Added route-scoped hero/card contrast rules and converted the resume preview shell to the shared theme variables. Dark mode keeps the same crimson/forest identity.
