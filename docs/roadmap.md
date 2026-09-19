# Documentation and Maintenance Roadmap

## Near-term priorities

- Keep the README onboarding section synchronized with the agent walkthrough and documentation index (verified at `README.md:5-14` and `AGENTS.md:11-45`).
- Add content validation for `content/projects.json` before expanding the project catalog (current direct parsing is verified at `src/lib/projects.ts:29-36`; validation implementation not found in provided files).
- Decide whether `featured` should affect homepage ordering or filtering; it currently exists in JSON but is not part of the TypeScript interface or filtering logic (verified at `content/projects.json:7-10`, `src/lib/projects.ts:7-15`, and `src/components/ProjectGrid.tsx:12-20`).
- Document a hosting provider and deployment pipeline when one is selected (currently not found in provided files).

## Content maintenance

- For each new project, add a summary record and matching MDX file using the same slug (verified at `README.md:36-43` and `src/lib/projects.ts:39-50`).
- Keep frontmatter fields consistent with the case-study contract and use Mermaid blocks only where the client renderer is intended (verified at `content/projects/construction-contract-tracker.mdx:1-6` and `src/app/projects/[slug]/page.tsx:15-33`).
- Review public image paths whenever the JSON `image` field changes (verified at `content/projects.json:10` and `src/components/ProjectGrid.tsx:46-54`).

## Facts

- Existing README follow-up items include scroll animations and typography or visual polish (verified at `README.md:68-73`).
- The current timeline and skills content are source constants, not content files (verified at `src/components/Timeline.tsx:1-45` and `src/components/SkillsMarquee.tsx:1-7`).

## Assumptions

- Visual polish remains relevant because it is listed in the README, but the desired design changes are not specified (verified at `README.md:68-73`; detailed requirements not found in provided files).
- Documentation updates should remain concise unless the project grows beyond the current scope (decision context from the requested medium budget and short-example policy).

## Decisions

- Prioritize correctness of content contracts and deployment knowledge before adding more documentation detail (decision based on the current loader and deployment unknowns).
- Keep deferred work explicit instead of presenting it as implemented functionality (decision based on the anti-hallucination policy).
