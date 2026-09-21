# Documentation Validation Report

## Scope

This pass updates `README.md` and every existing file in `docs/` to reflect the current multi-portfolio source tree.

## Documentation checklist

- [x] README describes the portfolio hub and all route experiences.
- [x] Iqbal content paths use `content/iqbal-lukman/`.
- [x] Route groups, shared racer components, carousels, images, and redirect behavior are documented.
- [x] Placeholder racer content and deployment/test unknowns are explicit.
- [x] Navigation, configuration, journal, and validation documents are synchronized.
- [ ] Browser visual QA is not defined or run in this repository.

## Repository checks

Checks should be run after documentation changes when the local dependencies are available:

```text
npm.cmd run lint
npm.cmd run build
```

No test script is declared in `package.json`.

## Documentation decision

This pass changes documentation only; application runtime files were not edited.
