# Deployment Guide

## Verified commands

```text
npm run build
npm run start
```

The repository does not declare a hosting provider, container, CI workflow, process manager, or deployment-specific environment variables.

## Runtime inputs

- Iqbal content is read from `content/iqbal-lukman/` using `process.cwd()`.
- Project and racer images are served from `public/image/`.
- The application uses the Next server runtime; no static export configuration is present.
- The racer contact form is currently presentational and has no repository-defined submission backend.

## Security and operational notes

- Mermaid uses `securityLevel: 'loose'` and inserts generated SVG into the DOM; review this before accepting untrusted MDX.
- The case study mentions external Python, Google Sheets, and service-account workflows, but those pipeline files and credentials are not part of this repository.
- Do not commit environment files or credentials.

## Unknowns

Provider choice, domain, environment configuration, CI checks, monitoring, and rollback procedure must be documented when they are introduced.
