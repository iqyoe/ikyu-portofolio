# Deployment Guide

## Verified application commands

The package declares `npm run build` for a production build and `npm run start` for starting the production server (verified at `package.json:5-10`). The repository does not declare a deployment provider, container file, CI workflow, or hosting configuration in the provided files (not found in provided files).

Minimal command sequence after dependencies are installed:

```text
npm run build
npm run start
```

These commands are repository facts; the required hosting platform, environment variables, port, and process manager are deployment-specific and unknown (verified at `package.json:5-10`; not found in provided files).

## Runtime inputs

- The application reads content from the repository-relative `content/` directory using `process.cwd()` (verified at `src/lib/projects.ts:1-5`).
- Project images are referenced with a public path from the Iqbal JSON and are rendered with `next/image` (verified at `content/iqbal-lukman/projects.json` and `src/components/ProjectGrid.tsx`).
- The case-study example mentions Google service-account credentials in sample content, but no credential file or integration code is present in the repository paths reviewed.

## Security notes

- Environment files and PEM files are ignored by git (verified at `.gitignore:25-34`).
- Mermaid is configured with `securityLevel: 'loose'` and inserts returned SVG into the DOM (verified at `src/components/Mermaid.tsx:6-11` and `src/components/Mermaid.tsx:20-33`). Review this setting before rendering untrusted MDX content (risk assessment based on the cited implementation, not a confirmed exploit).

## Facts

- A Vercel ignore entry exists, but no Vercel project configuration or deployment workflow is present (verified at `.gitignore:42-43`; not found in provided files).
- `next.config.ts` exports an otherwise empty Next configuration object (verified at `next.config.ts:1-7`).

## Assumptions

- Deployment is expected to use a Node-compatible Next.js runtime because the repository provides `next start` and does not provide a static export configuration (inferred from `package.json:5-10` and `next.config.ts:1-7`).
- Production environment variables are currently unnecessary for the portfolio itself, but this has not been verified against an external deployment environment (not found in provided files).

## Decisions

- Keep provider-specific instructions out of this guide until a hosting provider or deployment workflow is committed (decision based on the anti-hallucination policy).
- Re-run the production build after changes to routes, content loading, MDX handling, or Next configuration (decision based on the declared build script and cited architecture).
