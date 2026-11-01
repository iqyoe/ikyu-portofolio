---
name: impeccable
description: >-
  Use for frontend design work: creating, redesigning, critiquing, auditing,
  polishing, simplifying, hardening, animating, or improving websites,
  dashboards, portfolio pages, components, forms, and responsive UI. Do not use
  for backend-only work.
metadata:
  source: https://impeccable.style/#downloads
  upstream: https://github.com/pbakaus/impeccable
---

# Impeccable frontend design workflow

Use this skill when a request changes the rendered interface. Preserve the
project's existing visual language unless the user explicitly asks for a
redesign, and verify the result at the viewport sizes where it ships.

## Workflow

1. Read `PRODUCT.md` and `DESIGN.md` when they exist. Treat the request and
   existing product constraints as authoritative.
2. Inspect the target route and its components before editing. Identify the
   surface mode: **Persuade** (conversion), **Operate** (task completion),
   **Read** (comprehension), or **Experience** (portfolio/showcase).
3. Choose the smallest focused command that matches the request:
   - `shape` — plan a new interface before implementation
   - `critique` — review usability and hierarchy
   - `audit` — check accessibility, responsiveness, performance, and edge cases
   - `polish` — final quality pass
   - `typeset` / `layout` / `colorize` / `animate` — focused visual refinement
   - `distill` / `quieter` / `bolder` — adjust visual intensity
   - `harden` / `adapt` / `clarify` / `optimize` — production quality fixes
   - `init` / `document` / `extract` — capture product or design-system context
4. Read the relevant guidance in the upstream reference before making a UI
   edit. Keep hierarchy intentional, use real project assets, avoid decorative
   card nesting and generic gradient treatments, and respect existing tokens.
5. Run the project's lint and build checks. When possible, inspect the rendered
   page at desktop and mobile widths after the batch of changes.

## Commands

In Codex, invoke the skill with `$impeccable` and include a target, for example:

```text
$impeccable critique the Iqbal portfolio project grid
$impeccable polish the portfolio hub
$impeccable audit the QR generator page
```

The full command set and maintained playbooks are available from the upstream
project. Keep this local entrypoint small so updates can be pulled from the
official source instead of copying a large, versioned playbook into the app.
