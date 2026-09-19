# Data Models and Content Contracts

## Project summary contract

`ProjectMetadata` is the TypeScript contract used by the homepage and detail route. It requires `slug`, `title`, `summary`, `category`, `tags`, and `hasCaseStudy`, with an optional `image` field (verified at `src/lib/projects.ts:7-15`).

The current JSON dataset contains one project summary with a slug, title, category, summary, five tags, `featured`, `hasCaseStudy`, and a public image path (verified at `content/projects.json:1-11`). The `featured` field exists in content but is not represented in `ProjectMetadata` (verified at `content/projects.json:3-10` and `src/lib/projects.ts:7-15`).

## Case-study contract

`ProjectCaseStudy` contains the resolved project metadata, the MDX body as a string, and parsed frontmatter (verified at `src/lib/projects.ts:17-21`). The loader accepts optional `title` and `category` frontmatter and preserves additional frontmatter keys through an index signature (verified at `src/lib/projects.ts:23-27`).

The populated case study declares `title`, `date`, `author`, and `category` frontmatter, then stores the body as Markdown and Mermaid content (verified at `content/projects/construction-contract-tracker.mdx:1-6` and `content/projects/construction-contract-tracker.mdx:31-38`).

## Loading behavior

- `getAllProjects()` returns an empty array when `content/projects.json` does not exist; otherwise it parses the file without schema validation (verified at `src/lib/projects.ts:29-36`).
- `getProjectBySlug()` returns `null` when the corresponding MDX file does not exist (verified at `src/lib/projects.ts:38-46`).
- If a matching JSON summary is absent, the loader falls back to frontmatter title and category, an empty summary, an empty tag list, and `hasCaseStudy: true` (verified at `src/lib/projects.ts:48-56`).
- The detail route calls `notFound()` when the loader returns `null` (verified at `src/app/projects/[slug]/page.tsx:43-49`).

## Facts

- The JSON summary and MDX case study are separate content layers connected by `slug` (verified at `README.md:36-43` and `src/lib/projects.ts:39-50`).
- The current case study defines eight named operational outcomes, including `DISCONTINUED` (verified at `content/projects/construction-contract-tracker.mdx:14-27`).

## Assumptions

- `featured` is intended for future filtering or ordering because the current homepage passes all loaded projects to `ProjectGrid` without reading that property explicitly (inferred from `content/projects.json:7-10` and `src/app/page.tsx:6-7`, not documented as an explicit product decision).
- JSON and frontmatter validity is currently trusted at runtime; no schema library or validation function was found (not found in provided files).

## Decisions

- Add new projects by updating both `content/projects.json` and a matching `content/projects/<slug>.mdx` file unless intentionally relying on the loader fallback (decision based on the verified two-layer contract).
- Preserve the existing field names and slug relationship to avoid breaking `getAllProjects()`, `getProjectBySlug()`, and `generateStaticParams()` (decision based on `src/lib/projects.ts:29-62` and `src/app/projects/[slug]/page.tsx:36-40`).
