---
name: karpathy-guidelines
description: Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, reviewing, or refactoring code to avoid overcomplication, make surgical changes, surface assumptions, and define verifiable success criteria.
license: MIT
metadata:
  source: https://github.com/multica-ai/andrej-karpathy-skills
---

# Karpathy Guidelines

Behavioral guidelines to reduce common LLM coding mistakes, derived from
Andrej Karpathy's observations on LLM coding pitfalls.

These guidelines bias toward caution over speed. Use judgment for trivial
tasks.

## 1. Think Before Coding

Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:

- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them instead of choosing silently.
- If a simpler approach exists, say so and push back when warranted.
- If something is unclear, stop, name what is confusing, and ask.

## 2. Simplicity First

Use the minimum code that solves the problem. Avoid speculative work.

- Add no features beyond what was requested.
- Do not create abstractions for single-use code.
- Do not add flexibility or configurability that was not requested.
- Do not add handling for impossible scenarios.
- If the implementation could be substantially shorter, simplify it.

Ask: “Would a senior engineer say this is overcomplicated?” If yes, simplify.

## 3. Surgical Changes

Touch only what you must. Clean up only your own mess.

- Do not improve adjacent code, comments, or formatting.
- Do not refactor code that is not broken.
- Match the existing style, even when you would choose another approach.
- Mention unrelated dead code instead of deleting it.
- Remove imports, variables, and functions that your changes made unused.
- Do not remove pre-existing dead code unless asked.

Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

Define success criteria and loop until they are verified.

Transform tasks into verifiable goals:

- “Add validation” → write tests for invalid inputs, then make them pass.
- “Fix the bug” → write a test that reproduces it, then make it pass.
- “Refactor X” → ensure tests pass before and after.

For multi-step tasks, state a brief plan:

```text
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let the agent loop independently. Weak criteria such as
“make it work” require repeated clarification.
