---
title: "Prompt-Driven Development (PDD)"
titleZh: "提示词驱动开发（PDD）"
slug: "prompt-driven-development"
lang: "en"
summary: "A development approach where prompt design is treated as a first-class engineering artifact for producing and refining code."
topic: "ai-vibe-coding"
aliases:
  - "PDD"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "vibe-coding"
  - "context-window-management"
  - "skill"
lastReviewedAt: "2026-10-12"
---
# Prompt-Driven Development (PDD)

## Quick Take

- **In brief:** Prompt-driven development uses written instructions to guide AI-assisted software work.
- **Useful for:** Repeating a bounded task or exploring an implementation.
- **Main limit:** Prompts do not replace requirements, code review, or tests.

## Overview

A team can keep a prompt for reviewing test changes. It can state the project context, review criteria, and expected report. The team still checks the result.

## Core Definition

Prompt-driven development (PDD) is a descriptive approach that uses prompts as an important part of an AI-assisted workflow. A prompt can guide code generation, analysis, or testing. The term has no single agreed process or standard.

## Background and Evolution

Prompting is one way to give a model instructions and context. Some teams save prompts for repeated tasks. Others use them only during one interaction. These practices do not require a fixed development lifecycle.

## How It Works

1. State the task and its constraints.
2. Provide relevant code, examples, or project rules.
3. Ask the model to produce an output or propose a change.
4. Review the result and run relevant checks.
5. Update the prompt when repeated gaps show that the instruction needs to change.

## Applications in Software Development and Testing

Use a prompt to draft a test outline, explain an error, or propose a bounded code change. For repeated work, keep a template with expected inputs and review criteria.

## Strengths and Limitations

A clear prompt can make a request easier to repeat and review. Results can vary across model versions and contexts. A prompt may also omit assumptions that the team has not documented.

## Comparison with Similar Terms

Prompt-driven development describes a way to use instructions during software work. Prompt engineering focuses on prompt design. Vibe coding describes informal, iterative AI-assisted coding. Test-driven development uses tests to guide implementation; it does not depend on prompts.

## Best Practices

State the desired behavior, constraints, and acceptance checks. Include examples when exact format matters. Version prompts for repeated workflows. Review generated code and run tests.

## Common Pitfalls

Do not treat a prompt as the only source of truth for requirements. Do not assume the same prompt produces identical results across models or versions. A detailed prompt does not remove the need for review.

## FAQ

### Is prompt-driven development a formal standard?

No. The term describes a broad practice. Teams should define their own prompt format and verification steps.

## Related Resources

### Related Terms

- [vibe-coding](https://inaodeng.com/en/AIWiki/vibe-coding/)
- [context-window-management](https://inaodeng.com/en/AIWiki/context-window-management/)
- [skill](https://inaodeng.com/en/AIWiki/skill/)

### References
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Engineering Overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
