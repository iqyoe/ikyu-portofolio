# Data Models and Content Contracts

## Iqbal project summary

`ProjectMetadata` in `src/lib/projects.ts` requires `projectNumber`, `slug`, `title`, `summary`, `category`, `tags`, and `hasCaseStudy`, with optional `featured` and `image` fields. The project loader sorts records by descending `projectNumber` before the website and resume consume them.

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

## Resume content

`content/iqbal-lukman/resume.json` is the canonical source for Iqbal's profile, experience, skills, education, certifications, and shared website URL. The Iqbal page consumes this data for its timeline, technology matrix, education, and certification cards, while the PDF uses the website URL to generate its header QR code.

`src/lib/resume.ts` joins the resume content with every project in `projects.json` and the matching MDX frontmatter. Projects are included by default; a project can opt out with `resume.include: false`. Optional MDX resume metadata can override the project summary and tags or add concise contribution bullets. Projects are ordered by descending `projectNumber`, so the highest-numbered project is first in the website and PDF.

```mdx
---
resume:
  include: true
  summary: "Short resume-ready project summary."
  contributions:
    - "Resume-ready contribution."
  skills:
    - Airflow
---
```

The normalized model feeds both the website and `/api/resume`, which returns the PDF. `/iqbal-lukman/resume` previews that PDF inline before the download action. Adding a project still requires the normal matching JSON and MDX records; it is then picked up by the resume loader automatically unless it opts out.

Each project summary may include a stable positive `projectNumber`. If a new summary omits it, the loader assigns the next number after the current maximum and places that project first. Explicit project numbers must remain unique.

## Maintenance contract

For a new Iqbal project, add both a JSON summary and an MDX file with the same slug unless intentionally using the loader fallback. Keep public image paths valid and distinguish verified race or sponsorship information from placeholders.

For a resume change, update `resume.json` for profile, experience, skills, education, certification, or website URL content. Run `npm run validate:resume` to check project/MDX alignment, experience project references, certification fields, and website URL format.
