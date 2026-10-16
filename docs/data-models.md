# Data Models and Content Contracts

## Iqbal project summary

`ProjectMetadata` in `src/lib/projects.ts` requires `slug`, `title`, `summary`, `category`, `tags`, and `hasCaseStudy`, with an optional `image`. The current JSON record also contains `featured`, which is not represented in the TypeScript interface or currently used by the project grid.

The source file is `content/iqbal-lukman/projects.json`.

## Case study

`ProjectCaseStudy` contains resolved metadata, the MDX body, and parsed frontmatter. Case studies are stored at `content/iqbal-lukman/projects/<slug>.mdx`. Frontmatter may include `title`, `category`, `date`, `author`, and additional keys.

## Loading behavior

- Missing JSON returns an empty project list.
- Missing MDX returns `null`.
- A matching JSON record supplies metadata for a case study.
- Without a matching JSON record, the loader falls back to frontmatter title/category, an empty summary and tag list, and `hasCaseStudy: true`.
- The detail route calls `notFound()` when no MDX file exists.

## Racer content

Racer identity, statistics, result rows, section copy, and placeholder labels are currently defined in `src/components/RacerPortfolio.tsx`. Images are stored under `public/image/`. `DriverProfileCarousel` and `MachineryCarousel` provide the reusable visual sections.

## Maintenance contract

For a new Iqbal project, add both a JSON summary and an MDX file with the same slug unless intentionally using the loader fallback. Keep public image paths valid and distinguish verified race or sponsorship information from placeholders.
