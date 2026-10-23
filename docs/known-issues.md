# Known Issues and Risks

## Evidence-backed issues

1. **No runtime schema validation.** `getAllProjects()` parses JSON directly.
2. **Static route discovery depends on JSON metadata.** An MDX file absent from `content/iqbal-lukman/projects.json` is not included in generated params.
3. **Permissive Mermaid configuration.** `Mermaid` uses `securityLevel: 'loose'` and DOM SVG insertion; review before rendering untrusted MDX.
4. **External pipeline is illustrative.** The Iqbal case study describes Python, `gspread`, CSV, and service-account usage, but the pipeline is not included here.
5. **Racer content contains placeholders.** Results, media, telemetry, sponsorship deck, and form submission are not yet backed by verified data or a backend.
6. **No automated test suite.** `package.json` declares lint and build but no test script.
7. **QR payload and resolution are intentionally bounded.** The generator allows 2,200 UTF-8 bytes and a maximum 2,048 × 2,048 px raster output; larger content or print-specific vector workflows are out of scope for the browser utility.

## Current facts

- The Iqbal portfolio includes separate PwC case studies for enhanced audit analytics and data infrastructure modernization.
- `featured` exists in the project JSON but is not part of the loader interface or filtering behavior.
- `next.config.ts` redirects legacy `/projects/:slug` URLs to `/iqbal-lukman/projects/:slug`.

## Decisions

Prefer source behavior over stale prose, keep placeholders explicit, and treat validation, Mermaid handling, and external content as review items before expanding the system.
