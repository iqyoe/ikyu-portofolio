# Development Workflow

## Local setup

```text
npm install
npm run dev
npm run lint
npm run build
```

The development server is available at `http://localhost:3000`. There is no test script in `package.json`.

## Change workflow

1. Inspect the relevant route, component, content, and documentation files.
2. For an Iqbal project, keep the JSON summary and MDX slug aligned.
3. For racer changes, keep identity-specific route metadata and shared component props aligned.
4. Run lint and build after source, route, content-loading, MDX, or configuration changes.
5. Review the affected routes and both theme modes when practical.
6. Update the relevant document in `docs/` when behavior or contracts change.

## Configuration facts

- TypeScript is strict, uses bundler module resolution, and maps `@/*` to `src/*`.
- ESLint uses the Next core web vitals and TypeScript configurations.
- PostCSS uses the Tailwind CSS PostCSS plugin.
- `next.config.ts` contains the legacy project-route redirect.
- `.env*`, `.next/`, `out/`, `build/`, dependency directories, and PEM files are ignored.

## Validation policy

Record lint/build results only after actually running them. Do not document undocumented CI, hosting, or browser-test workflows as facts.
