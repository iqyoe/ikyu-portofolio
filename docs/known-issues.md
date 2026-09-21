# Known Issues and Risks

## Evidence-backed issues

1. **No runtime schema validation.** `getAllProjects()` parses JSON directly, and no validation library or validation function is present in the loader (verified at `src/lib/projects.ts:29-36`; validation implementation not found in provided files).
2. **Static route discovery depends on JSON metadata.** `generateStaticParams()` maps only the projects returned from `getAllProjects()`, so an MDX file not represented in `content/iqbal-lukman/projects.json` is not included in the generated parameter list.
3. **Mermaid uses a permissive security setting.** The component sets `securityLevel: 'loose'` and assigns rendered SVG through `innerHTML` (verified at `src/components/Mermaid.tsx:6-11` and `src/components/Mermaid.tsx:20-33`).
4. **The case-study sample contains external pipeline code rather than repository code.** The MDX describes Python, `gspread`, a CSV path, and a service-account file, but those implementation files are not present in the reviewed repository paths (verified at `content/projects/construction-contract-tracker.mdx:40-63`; corresponding source files not found in provided files).

## Facts

- The project has no test script in `package.json` (verified at `package.json:5-10`).
- The current Iqbal content dataset contains one project record and one populated MDX case study.
- `next.config.ts` currently contains no custom options (verified at `next.config.ts:1-7`).

## Assumptions

- The stale README list is documentation drift rather than an intentional roadmap item (inferred from the components being active in `src/app/page.tsx:23-25`).
- The MDX case study is trusted repository content; whether users can author or upload MDX outside version control is unknown (not found in provided files).

## Decisions

- Prefer source behavior over stale status prose when agents make implementation decisions (decision based on the cited conflict).
- Treat Mermaid content handling and JSON validation as review items before accepting untrusted or frequently changing content (decision based on the cited risk evidence).
