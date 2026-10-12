---
title: "Active Memory"
titleZh: "主动记忆"
slug: "active-memory"
lang: "en"
summary: "Guidance that a person or system explicitly saves for use in later tasks."
topic: "ai-vibe-coding"
aliases:
  - "Active Memory"
  - "主动记忆"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "automatic-memory"
  - "memory-scope"
  - "conversation-state"
  - "rules-and-memories"
lastReviewedAt: "2026-10-12"
---

# Active Memory

> One-line definition: Guidance that a person or system explicitly saves for use in later tasks. It can guide a model, but it does not enforce permissions or guarantee that the model will follow it.

## Quick Take

- **In brief:** Active memory keeps selected instructions available across tasks.
- **Useful for:** Carrying stable project constraints into later work.
- **Main limit:** Old or conflicting items can mislead the model.

## Overview

Active memory is information that a person or system deliberately saves for later use. Examples include a project rule, a preference, or a short summary of an earlier decision.

## Core Definition

### Formal Definition

Active memory is explicit context that a system can include in later model requests. It can be written in a file, a project setting, or another product-specific store. The model receives it as input; it is not a permission control and may not be included in every request.

## Background and Evolution

### Background

Users need a way to carry stable facts and instructions across conversations. Explicit notes make that context easier to inspect and edit than information inferred automatically.

### Development

Products support different forms of saved instructions, such as project files, user preferences, or workspace settings. Their scope and loading rules vary.

## How It Works

1. A person or system writes a preference, rule, or summary.
2. The product stores it in a file or setting.
3. A later workflow may load it into the model context.
4. The model uses the text as guidance when generating a response.

Loading order and scope depend on the product. The model can still miss or misinterpret a saved instruction.

## Applications in Software Development and Testing

- **Repository conventions**: Record naming rules, test commands, and architecture constraints.
- **Review guidance**: Keep a checklist for recurring code reviews.
- **Handoff notes**: Save a concise summary of decisions that another session needs.

## Strengths and Limitations

### Strengths

- **Visible content**: A user can inspect and edit explicit instructions.
- **Repeatable context**: A product can provide the same saved guidance in more than one session.

### Limitations and Risks

- **Loading varies**: A product may not load a file in every workflow.
- **Conflict**: Old instructions can conflict with current requirements.
- **No enforcement**: Prompt-level guidance does not block a command or validate a change.

## Comparison with Similar Terms

| Term | How information is saved | Main role |
| :--- | :--- | :--- |
| Active memory | Written or deliberately pinned | Reusable, inspectable guidance |
| Automatic memory | Selected by a product from past interactions | Reuse context with less manual entry |
| Conversation state | Stored history or state for a continuing session | Continue an interaction |
| Prompt caching | Reuses request data at the service level | Reduce repeated processing when supported |

## Best Practices

- Keep rules short, specific, and easy to verify.
- Store project rules in version control when the team needs to share them.
- Review instructions after project changes.
- Use tests and permission controls to enforce requirements that must not be skipped.

## Common Pitfalls

- **Assuming every request includes the memory**: Check the product’s loading scope.
- **Treating instructions as access controls**: Use technical permissions to restrict actions.
- **Leaving stale rules in place**: Remove or update guidance that no longer applies.

## FAQ

### Can active memory guarantee that an agent follows a rule?

No. It can provide guidance as model context. Use tests, permissions, and review for requirements that need enforcement.

### Where should a team store project rules?

Use a version-controlled file or another shared source that the team can inspect. Confirm that the AI product loads that source in the relevant workflow.

## Related Resources

### Related Terms

- [automatic-memory](https://inaodeng.com/en/AIWiki/automatic-memory/)
- [memory-scope](https://inaodeng.com/en/AIWiki/memory-scope/)
- [conversation-state](https://inaodeng.com/en/AIWiki/conversation-state/)
- [rules-and-memories](https://inaodeng.com/en/AIWiki/rules-and-memories/)

### External References

- [Cursor: Persistent Memory](https://cursor.com/docs)
- [Understanding Agent Memory Hierarchies](https://docs.qoder.com/)
