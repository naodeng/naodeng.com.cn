---
title: "Rules / .cursorrules"
titleZh: "规则 / .cursorrules"
slug: "rules-cursorrules"
lang: "en"
summary: "Project- or user-level instruction files that steer agent behavior, coding style, and constraints."
topic: "ai-vibe-coding"
aliases:
  - "Cursor rules"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rule"
  - "skill"
  - "ai-agent"
  - "prompt-driven-development"
lastReviewedAt: "2026-03-02"
---

# Rules / .cursorrules

> One-line definition: Project- or user-level instruction files that steer agent behavior, coding style, and constraints, ensuring AI stays "on-track" with your team's unique requirements.

## Quick Take

- Problem it solves: Define execution capability and governance boundaries for AI agents.
- When to use: Use for tool invocation, policy control, and multi-step task execution.
- Boundary: Risk increases without permission and audit controls.

## Overview

`Rules / .cursorrules` matters less as a buzzword and more as an engineering control point for reliability, interpretability, and collaboration in AI-enabled development.

## Core Definition

### Formal Definition

Rules are markdown-based configuration files (typically named `.cursorrules`) that provide high-level context, technical constraints, and behavioral instructions to an AI agent. They are automatically injected into the model's prompt to maintain consistency across every interaction within a project.

### Plain-Language Explanation

Think of it as a foundational control point in AI engineering: it reduces randomness, improves reuse, and turns team know-how into repeatable practice.

## Background and Evolution

### Origin

- **Context**: As developers moved from "one-off" questions to "project-wide" engineering, there was a need for a persistent memory that didn't consume the entire context window.
- **Main focus**: Eliminating "Prompt Fatigue"—the need to repeat the same instructions over and over.

### Evolution

- **Implicit Rules**: AI relies on its general training (can be hit or miss).
- **System Prompts**: Global rules that apply to every project (hard to customize).
- **Project Rules (.cursorrules)**: Granular, file-based instructions that allow different rules for a frontend React app versus a backend Go service.

## How It Works

1. **Automatic Injection**: When you open a folder in Cursor, it looks for a `.cursorrules` file in the root.
2. **Context Enrichment**: Every time you use "Cmd+K" or Composer, the contents of the rules file are added to the hidden system prompt.
3. **Behavior Steering**: The AI prioritizes the instructions in your rules over its general training (e.g., if you say "Use tabs," it will use tabs even if it usually prefers spaces).

## Applications in Software Development and Testing

- **Architecture Enforcement**: "Always use the Atomic Design pattern for components."
- **Language Governance**: "Only use modern ES6+ syntax; avoid using `var` at all costs."
- **Testing Standards**: "For every new function, generate a corresponding `.spec.ts` file in the `__tests__` directory."

## Strengths and Limitations

### Strengths

- **Consistency**: ensures all AI-generated code looks like it was written by the same (human) team member.
- **Low Maintenance**: Update the rule once, and it applies to the entire project instantly.
- **Zero Prompt Cost**: Since it's handled by the IDE, you don't have to copy-paste it into every chat session.

### Limitations and Risks

- **Rule Conflict**: If rules are too complex or contradictory, the AI may become "confused" or ignore them.
- **Context Bloat**: Extremely long rule files can consume significant portions of the "Context Window," leaving less room for your actual code.
- **Inflexibility**: Rules that are *too* strict may prevent the AI from suggesting creative or better solutions.

## Comparison with Similar Terms

| Dimension | .cursorrules | Global System Prompt | Project README |
| :--- | :--- | :--- | :--- |
| **Scope** | **Current Project/Folder** | All Projects | Information only |
| **Enforcement** | **Automatic & Persistent** | Automatic but Generic | Manual (AI must be told to read it) |
| **Primary Goal** | **Coding Style & Behavior** | General Persona | Project Documentation |

## Best Practices

- **Keep it Atomic**: Break rules into clear, bulleted sections (e.g., `# Naming`, `# Testing`, `# UI`).
- **Use "Always/Never"**: Use strong imperative language to minimize AI ambiguity.
- **Vibe but Verify**: Periodically check if your rules are still relevant as the project tech stack evolves.

## Common Pitfalls

- **The "Wall of Text"**: Writing a 5,000-word essay that the AI will likely ignore or partially forget.
- **Outdated Rules**: Keeping a rule to "user React 16" after you've upgraded to React 18 will lead to the AI generating broken code.

## FAQ

### Q1: Should beginners master this immediately?

A: Learn the core purpose first, then adopt it gradually in real workflows.

### Q2: How do teams know adoption is working?

A: Check for more stable delivery, less rework, and smoother collaboration.

## Related Resources

### Related Terms

- [rule](https://inaodeng.com/en/AIWiki/rule/)
- [skill](https://inaodeng.com/en/AIWiki/skill/)
- [ai-agent](https://inaodeng.com/en/AIWiki/ai-agent/)
- [prompt-driven-development](https://inaodeng.com/en/AIWiki/prompt-driven-development/)

## Related Resources

### Related Terms

- [rule](https://inaodeng.com/en/AIWiki/rule/)
- [skill](https://inaodeng.com/en/AIWiki/skill/)
- [ai-agent](https://inaodeng.com/en/AIWiki/ai-agent/)
- [prompt-driven-development](https://inaodeng.com/en/AIWiki/prompt-driven-development/)

### Term Metadata

- Aliases: Cursor rules
- Tags: AI Vibe Coding, Wiki

## References

- [Cursor docs: Rules](https://docs.cursor.com/context/rules)
- [Cursor docs (EN path)](https://docs.cursor.com/en/context/rules)
