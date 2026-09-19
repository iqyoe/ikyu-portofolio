# Development Workflow

## Local setup

The repository declares Node-based scripts for development, production build, production start, and linting (verified at `package.json:5-10`). The README instructs contributors to install dependencies, run the development server, and open `http://localhost:3000` (verified at `README.md:85-98`).

Short command reference:

```text
npm install
npm run dev
npm run lint
npm run build
```

The first two commands are documented in the README; the latter two are declared in `package.json` and should be used for validation (verified at `README.md:85-98` and `package.json:5-10`).

## Change workflow

1. Update the relevant source or content path.
2. Keep JSON metadata and the matching MDX slug aligned (verified at `README.md:36-43` and `src/lib/projects.ts:39-50`).
3. Run lint and build scripts declared in `package.json` (verified at `package.json:5-10`).
4. Review the rendered route and theme behavior locally; the exact browser-test process is not defined in provided files (not found in provided files).
5. Update the relevant file in `docs/` when architecture, content contracts, commands, or known issues change (decision for documentation maintenance).

## Configuration facts

- TypeScript is strict, emits no JavaScript, uses bundler module resolution, and defines the `@/*` alias to `./src/*` (verified at `tsconfig.json:2-23`).
- ESLint uses Next core web vitals and TypeScript configurations and ignores generated Next, output, build, and environment declaration paths (verified at `eslint.config.mjs:1-16`).
- PostCSS uses the Tailwind CSS PostCSS plugin (verified at `postcss.config.mjs:1-7`).
- `.env*`, `.next/`, `out/`, `build/`, and dependency directories are ignored by git (verified at `.gitignore:3-21` and `.gitignore:33-41`).

## Facts

- There is no test script in `package.json` (verified at `package.json:5-10`).
- The project uses the Next.js App Router layout and route conventions under `src/app/` (verified at `src/app/layout.tsx:1-30` and `src/app/page.tsx:1-41`).

## Assumptions

- Node and npm are available in the contributor environment (required by the declared scripts, but versions are not specified in provided files).
- CI configuration and branch protection rules are unknown (not found in provided files).

## Decisions

- Treat `npm run lint` and `npm run build` as the minimum repository checks because both are explicitly declared (decision based on `package.json:5-10`).
- Do not document undocumented CI, hosting, or release steps as facts (decision based on the anti-hallucination policy).
