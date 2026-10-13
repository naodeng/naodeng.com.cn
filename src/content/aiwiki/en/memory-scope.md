---
title: "Memory Scope"
titleZh: "记忆作用域"
slug: "memory-scope"
lang: "en"
summary: "Define where memory applies: global workspace, project, team, or session scope."
topic: "ai-vibe-coding"
aliases:
  - "Memory Scope"
  - "记忆作用域"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "active-memory"
  - "automatic-memory"
  - "privacy-mode"
  - "rules-and-memories"
lastReviewedAt: "2026-10-12"
---
# Memory Scope

## Quick Take

- **In brief:** Memory scope defines where saved information may be used.
- **Useful for:** Separating personal, project, or session context.
- **Main limit:** Scope labels do not guarantee access control or privacy.

## Overview

A preference about test output may apply to one repository but not to another. A memory system needs a clear scope so it does not reuse the preference in the wrong project.

## Core Definition

Memory scope is the boundary that determines which users, projects, sessions, or tasks can use saved information. The available scopes and how they are enforced depend on the product.

## Background and Evolution

Applications began storing context to support later interactions. As saved context grew, systems needed rules for when and where to retrieve it. There is no universal scope hierarchy.

## How It Works

1. The system stores information with a scope or ownership rule.
2. A later request identifies its user, project, or session.
3. The system retrieves information allowed for that context.
4. The application applies its access controls and retention rules.
5. A user checks whether the returned information is relevant and current.

## Applications in Software Development and Testing

A coding assistant may keep a repository-specific convention, such as the test command. A team should avoid sharing private notes across repositories unless the storage and permissions support that use.

## Strengths and Limitations

Scopes can reduce irrelevant reuse and help separate contexts. A wrong label, broad retrieval rule, or weak access control can expose or apply information in the wrong place. A scope name alone does not provide security.

## Comparison with Similar Terms

Memory scope defines where saved memory applies. Conversation state supports an active interaction. Rules provide instructions. Permission policies control access to actions or resources. These controls solve different problems.

## Best Practices

Document the available scopes and owners. Keep personal, team, and project data separate when required. Review access and deletion behavior. Let users inspect and correct stored information.

## Common Pitfalls

Do not assume a product has the same global, project, and session scopes as another product. Do not treat scope as a substitute for access control.

## FAQ

### Does project-scoped memory stay inside one repository?

Only if the product enforces that boundary. Check retrieval behavior and access controls.

## Related Resources

### Related Terms

- [active-memory](https://inaodeng.com/en/AIWiki/active-memory/)
- [automatic-memory](https://inaodeng.com/en/AIWiki/automatic-memory/)
- [privacy-mode](https://inaodeng.com/en/AIWiki/privacy-mode/)
- [rules-and-memories](https://inaodeng.com/en/AIWiki/rules-and-memories/)

### External References

- [Cursor: Project Scoped Rules](https://docs.cursor.com/context/rules)
- [How to manage AI memory hierarchy](https://docs.qoder.com/)
