---
title: "Vibe Coding"
titleZh: "氛围编程"
slug: "vibe-coding"
lang: "en"
summary: "A style of AI-assisted coding where developers describe intent in natural language and iteratively refine generated code."
topic: "ai-vibe-coding"
aliases:
  - "Intent-first coding"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "agentic-workflow"
  - "prompt-driven-development"
  - "ai-pair-programming"
  - "acp-agent-client-protocol"
  - "antigravity"
  - "cursor"
  - "gemini"
  - "zero-shot-coding"
lastReviewedAt: "2026-10-12"
---
# Vibe Coding

## Quick Take

- **In brief:** Vibe coding is an informal style of building software through natural-language requests and repeated AI-assisted changes.
- **Useful for:** Exploring ideas or making prototypes that a person can review.
- **Main limit:** Rapid changes can hide defects, security issues, and maintenance costs.

## Overview

A developer asks an AI tool to draft a simple settings page, runs it, and gives feedback on what is missing. The developer still checks the code and behavior before using the result.

## Core Definition

Vibe coding is an informal term for directing AI-assisted code generation through high-level intent and iteration. It does not define a formal development process. The amount of planning, code review, and testing varies.

## Background and Evolution

The term is used for a range of AI-assisted coding practices, from generating a small prototype to making changes through an agentic editor. It is not a fixed stage in software development, and it does not mean that architecture or testing is unnecessary.

## How It Works

1. Describe the desired behavior and constraints.
2. Ask an AI tool to draft or change code.
3. Run the result and observe what happens.
4. Give specific feedback or revise the code directly.
5. Review the final diff and run relevant tests.

## Applications in Software Development and Testing

Use this approach to explore a UI idea, generate a prototype, or try a small implementation. Use stricter design review and testing for production code or high-impact behavior.

## Strengths and Limitations

Natural-language input can make a first draft easier to create. Repeated changes can also leave inconsistent code or untested assumptions. The result depends on prompt quality, project context, tools, and review.

## Comparison with Similar Terms

AI pair programming keeps a developer involved in each decision. Vibe coding describes an informal, intent-led style. An agentic workflow may delegate several actions to an agent. These terms can overlap.

## Best Practices

Keep changes small. State expected behavior and constraints. Inspect the code diff and run tests. Ask for explanations when you cannot verify an implementation.

## Common Pitfalls

Do not treat a visual preview as proof that a feature works. Do not skip security, accessibility, or maintenance review because the prototype looks right.

## FAQ

### Does vibe coding mean developers do not need to read code?

No. Developers still need to review and verify code that they plan to use.

## Related Resources

### Related Terms

- [agentic-workflow](https://inaodeng.com/en/AIWiki/agentic-workflow/)
- [prompt-driven-development](https://inaodeng.com/en/AIWiki/prompt-driven-development/)
- [ai-pair-programming](https://inaodeng.com/en/AIWiki/ai-pair-programming/)

### References
- [Wikipedia: Vibe coding](https://en.wikipedia.org/wiki/Vibe_coding)
- [IBM: What is Vibe Coding?](https://www.ibm.com/think/topics/vibe-coding)
