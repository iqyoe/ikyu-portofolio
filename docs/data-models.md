# Data Models and Content Contracts

## Project summary contract

`ProjectMetadata` is the TypeScript contract used by the Iqbal portfolio and detail route. It requires `slug`, `title`, `summary`, `category`, `tags`, and `hasCaseStudy`, with an optional `image` field (verified at `src/lib/projects.ts`).

The current Iqbal dataset contains one project summary with a slug, title, category, summary, five tags, `featured`, `hasCaseStudy`, and a public image path (verified at `content/iqbal-lukman/projects.json`). The `featured` field exists in content but is not represented in `ProjectMetadata`.

## Case-study contract

`ProjectCaseStudy` contains the resolved project metadata, the MDX body as a string, and parsed frontmatter (verified at `src/lib/projects.ts:17-21`). The loader accepts optional `title` and `category` frontmatter and preserves additional frontmatter keys through an index signature (verified at `src/lib/projects.ts:23-27`).

The populated case study declares `title`, `date`, `author`, and `category` frontmatter, then stores the body as Markdown and Mermaid content (verified at `content/iqbal-lukman/projects/construction-contract-tracker.mdx`).

## Loading behavior

- `getAllProjects()` returns an empty array when `content/iqbal-lukman/projects.json` does not exist; otherwise it parses the file without schema validation.
- `getProjectBySlug()` returns `null` when the corresponding MDX file does not exist (verified at `src/lib/projects.ts:38-46`).
- If a matching JSON summary is absent, the loader falls back to frontmatter title and category, an empty summary, an empty tag list, and `hasCaseStudy: true` (verified at `src/lib/projects.ts:48-56`).
- The Iqbal detail route calls `notFound()` when the loader returns `null`.

## Facts

- The JSON summary and MDX case study are separate content layers connected by `slug` (verified at `README.md:36-43` and `src/lib/projects.ts:39-50`).
- The current case study defines eight named operational outcomes, including `DISCONTINUED`.

## Assumptions

- `featured` is intended for future filtering or ordering because the Iqbal portfolio currently passes all loaded projects to `ProjectGrid` without reading that property explicitly.
- JSON and frontmatter validity is currently trusted at runtime; no schema library or validation function was found (not found in provided files).

## Decisions

- Add new Iqbal projects by updating both `content/iqbal-lukman/projects.json` and a matching `content/iqbal-lukman/projects/<slug>.mdx` file unless intentionally relying on the loader fallback.
- Preserve the existing field names and slug relationship to avoid breaking `getAllProjects()`, `getProjectBySlug()`, and `generateStaticParams()` (decision based on `src/lib/projects.ts:29-62` and `src/app/projects/[slug]/page.tsx:36-40`).
