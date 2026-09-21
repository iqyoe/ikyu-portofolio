# Ikyu Portfolio Agent Documentation

This directory is the concise source of truth for agents working on the portfolio.

## Navigation

- [Configuration](./config.yml) — documentation scope and update settings.
- [Architecture overview](./architecture-overview.md) — application flow, route groups, rendering, and styling.
- [Data models](./data-models.md) — Iqbal metadata, MDX, and loading behavior.
- [Components](./components.md) — route and component responsibilities.
- [Development workflow](./development-workflow.md) — local commands and change workflow.
- [Deployment guide](./deployment-guide.md) — verified production commands and unknowns.
- [Known issues](./known-issues.md) — evidence-backed risks and placeholders.
- [Roadmap](./roadmap.md) — maintenance priorities.
- [Journal](./journal.md) — documentation update history.
- [Validation report](./validation-report.md) — checks run for the current source state.

## Verified facts

- The root route is a portfolio hub linking to Iqbal Lukman, Ikyu Racer, and Nadya Racer.
- The Iqbal route group owns project summaries, case studies, the project grid, skills marquee, and timeline.
- Racer route groups share `RacerPortfolio` while supplying identity, imagery, and accent theme.
- Iqbal content is loaded from `content/iqbal-lukman/`.
- The application uses Next.js 16, React 19, Tailwind CSS v4, MDX, Mermaid, and `gray-matter`.

## Documentation rules

- Treat source files as authoritative when prose and implementation differ.
- Mark hosting, CI, tests, external integrations, and unverified portfolio content as unknown or placeholder.
- Update this index and the relevant document when routes, content contracts, commands, or known risks change.
