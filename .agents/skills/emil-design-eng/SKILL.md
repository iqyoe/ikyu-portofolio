---
name: emil-design-eng
description: >-
  Use for frontend interface and animation work. Applies Emil Kowalski's
  design-engineering principles to UI polish, component behavior, motion,
  accessibility, and performance.
metadata:
  source: https://github.com/emilkowalski/skills
  license: MIT
---

# Design engineering

Use this skill when changing rendered UI, interactions, or animation. Treat
motion as part of the product's behavior: every animation should have a clear
purpose, fit the frequency of the interaction, and remain accessible.

## Decision rules

- Do not animate actions users repeat constantly, such as keyboard shortcuts.
- Use `ease-out` for entering UI, `ease-in-out` for movement, `ease` for hover
  and color changes, and `linear` for constant motion. Prefer purposeful custom
  curves over weak defaults.
- Keep ordinary UI motion under 300ms: roughly 100–160ms for press feedback,
  125–200ms for tooltips, 150–250ms for dropdowns, and 200–500ms for modals or
  drawers.
- Animate `transform` and `opacity` where possible. Avoid animating layout
  properties such as `width`, `height`, `padding`, or `margin`.
- Use CSS transitions for interruptible UI. Avoid `transition: all` and avoid
  entering from `scale(0)`; use a small scale such as `0.95` with opacity.
- Give popovers an origin near their trigger. Keep modal transforms centered.
- Add subtle `:active` feedback to pressable controls (`scale(0.95–0.98)`).
- Gate hover effects behind `@media (hover: hover) and (pointer: fine)`.
- Respect `prefers-reduced-motion`: remove positional movement while preserving
  useful opacity or color changes.

## Performance and interaction

Prefer CSS animations for predetermined motion and JavaScript or WAAPI when the
animation must respond dynamically or be interrupted. For drag interactions,
capture the pointer, ignore additional touch points, apply damping at bounds,
and use velocity as well as distance when deciding whether to dismiss.

Use springs for gestures, momentum, and decorative interactions that benefit
from interruption. Keep bounce subtle in ordinary product UI.

## Review format

When reviewing UI code, use a single Markdown table with `Before`, `After`, and
`Why` columns. Be specific about properties, timing, easing, accessibility,
and performance. Inspect the rendered result at desktop and mobile sizes after
editing, and run the project's lint/build checks.

## Useful commands

The upstream collection includes focused skills for `animate`,
`review-animations`, `improve-animations`, `animation-performance`,
`animation-vocabulary`, `prototype`, `mobile-native`, and `break-ui`. Use the
focused skill when it is available and the request is narrow; otherwise apply
this design-engineering skill directly.
