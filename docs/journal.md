# Project Documentation Journal

## 2026-09-22 - Align documentation with portfolio hub architecture

**Goal**: Update `README.md` and all files in `docs/` to match the current source tree.

**Inputs**: Route groups, shared components, content loader, public assets, `package.json`, and current Next configuration.

**Actions**:

- Documented the portfolio hub and the Iqbal, Ikyu Racer, and Nadya Racer routes.
- Moved Iqbal content references from `content/` to `content/iqbal-lukman/`.
- Added shared racer components, carousel components, public assets, and legacy redirect behavior to the documentation.
- Marked racer results, media, contact submission, hosting, CI, and tests according to their actual repository status.

**Decisions**: Keep source behavior authoritative and avoid presenting placeholder portfolio content or undocumented infrastructure as complete.

## 2026-09-20 - Initial agent documentation

Created the initial concise documentation set covering architecture, content contracts, components, workflow, deployment unknowns, known issues, roadmap, and validation.

## Future entry template

**Goal**:

**Inputs**:

**Actions**:

**Facts**:

**Assumptions**:

**Decisions**:

**Next prompts**:

## 2026-10-31 - Review routes and explain bento/documentation composition

**Goal**: Review every public page against the current implementation and the Bentofolio reference, then create an agent-readable context for the homepage bento and documentation flow.

**Inputs**: Route source, shared components, content loaders, local HTTP smoke tests, lint, resume validation, production build, and the published Bentofolio reference description.

**Actions**:

- Added `docs/site-review.md` with route-by-route findings, cross-site risks, and prioritized next actions.
- Added `docs/bento-homepage-and-documentation-context.md` with the current card composition, content ownership, MDX flow, resume flow, and bento acceptance criteria.
- Linked both documents from `docs/INDEX.md` and `README.md`.

**Facts**: The Iqbal route already uses an asymmetric bento composition. The root homepage is a regular three-card portal grid. Racer results/media/contact and the certification date remain content risks documented in the review.

**Validation**: `npm.cmd run lint`, `npm.cmd run validate:resume`, and `npm.cmd run build` passed. Public route smoke tests returned HTTP 200.
