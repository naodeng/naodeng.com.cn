---
title: "Rule"
titleZh: "Rule（规则）"
slug: "rule"
lang: "en"
summary: "A reusable instruction that guides an AI system’s behavior or output. A rule does not enforce itself."
topic: "ai-vibe-coding"
aliases:
  - "Instruction Rule"
  - "Constraint Rule"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rules-cursorrules"
  - "skill"
  - "prompt-driven-development"
lastReviewedAt: "2026-10-12"
---

# Rule

> One-line definition: A reusable instruction that guides an AI system.

## Quick Take

- **In brief:** A rule gives an AI workflow a preference, constraint, or procedure.
- **Useful for:** Repeating project guidance across related tasks.
- **Main limit:** A rule guides model output; it does not enforce permission or guarantee compliance.

## Overview

A team can store “run the focused tests before changing an API” as a project rule. The instruction can guide an AI assistant each time it works in that project.

## Core Definition

A rule is a reusable instruction that an AI application can add to task context. Rules can describe conventions, constraints, or workflows. Their scope and activation depend on the host application.

## Background and Evolution

Teams first entered guidance in individual prompts. Development tools later added reusable user or project rules. File names and rule formats differ across tools and can change over time.

## How It Works

A host application selects rules based on its own settings and task context. It may include those rules in the prompt sent to a model. The model then uses them as guidance. The host still needs permissions, validation, or tests to enforce requirements.

## Applications in Software Development and Testing

- **Code conventions:** Ask the assistant to follow the project’s naming and formatting rules.
- **Test workflow:** Ask it to run a named test command after a change and report the result.
- **Security guidance:** Remind it not to copy secrets into logs or generated examples. Enforce secret handling with tools and policy checks.

## Strengths and Limitations

Rules make recurring guidance easier to find and revise. Version-controlled project rules can help a team share that guidance. Rules consume context and can conflict. A model can ignore or misread them, so high-impact requirements need independent controls.

## Comparison with Similar Terms

| Term | Role |
|---|---|
| Rule | Reusable guidance that applies across selected tasks |
| Prompt | Instructions and information for one request |
| Permission policy | A control that allows or blocks an action |
| Automated test | A check that reports whether specified behavior passes |

## Best Practices

- Write one clear requirement per rule.
- State where the rule applies and how to verify it.
- Keep project guidance in version control.
- Use permissions and automated checks for requirements that must be enforced.

## Common Pitfalls

Do not treat a natural-language rule as a security boundary. Do not copy conflicting guidance into several files without deciding which instruction takes priority.

## FAQ

### Can a rule guarantee that the AI will not make mistakes?

No. A rule guides the model. Tests, review, and system controls are still needed.

### Where does Cursor store project rules?

Current Cursor project rules use files under .cursor/rules. Cursor lists .cursorrules as a legacy format that is still supported but deprecated.

## Related Resources

### Related Terms

- [Rules and Cursor rules](/en/AIWiki/rules-cursorrules/)
- [Skill](/en/AIWiki/skill/)
- [Prompt-driven development](/en/AIWiki/prompt-driven-development/)

### References

- [Cursor: Rules](https://docs.cursor.com/context/rules)
- [OpenAI: Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)
