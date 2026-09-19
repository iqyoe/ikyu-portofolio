# Ikyu Portfolio Agent Documentation

This folder is the concise source of truth for agents working on the portfolio. It uses the requested medium budget and short-example policy. Examples are kept to commands and file references so the documents stay easy to scan.

## Navigation

- [Configuration](./config.yml) - documentation scope, budget, priorities, and update settings.
- [Architecture overview](./architecture-overview.md) - application flow, rendering boundaries, and styling model.
- [Data models](./data-models.md) - project metadata, case-study content, and content loading behavior.
- [Components](./components.md) - page and component responsibilities.
- [Development workflow](./development-workflow.md) - local commands and change workflow.
- [Deployment guide](./deployment-guide.md) - verified production commands and deployment unknowns.
- [Known issues](./known-issues.md) - evidence-backed inconsistencies and risks.
- [Roadmap](./roadmap.md) - maintenance priorities and deferred work.
- [Journal](./journal.md) - audit trail for documentation updates.
- [Validation report](./validation-report.md) - checks run for this documentation pass.

## Facts

- The project is a personal portfolio for data engineering and analytics work, implemented with Next.js, Tailwind CSS, MDX, and Mermaid (verified at `README.md:1-3` and `README.md:27-34`).
- The homepage loads project metadata and renders the project grid, skills marquee, and resume timeline (verified at `src/app/page.tsx:1-38`).
- The content pipeline uses `content/projects.json` for summaries and `content/projects/*.mdx` for case studies (verified at `README.md:36-43`).
- The documentation directory is `docs/`, as requested for shared agent use (verified by this file path).

## Assumptions

- The repository inventory used for this pass is not stored as a generated inventory file; exact file-count and line-count claims are therefore omitted from this source of truth (not found in provided files).
- `Focus: Short` means concise coverage across architecture, implementation, and operations because the supplied focus choices did not include `Short` (inferred from the task request, not verified in repository files).

## Decisions

- Use `docs/` instead of `cursor-docs/` so any agent can discover the documentation without tool-specific naming (decision from the task request).
- Use link-only references and small command examples by default, matching the requested short-example policy (decision from the task request).
- Treat source files as authoritative when the README conflicts with implementation (decision based on source paths cited throughout this folder).
