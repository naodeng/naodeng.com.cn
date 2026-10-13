---
title: "Rules and Memories"
titleZh: "规则与记忆"
slug: "rules-and-memories"
lang: "en"
summary: "Rules instruct an AI system how to handle tasks, while memories store facts or preferences that may be reused later. This entry explains their loading, scope, persistence, and conflict boundaries; memory is not automatically a current requirement or permission control."
topic: "ai-vibe-coding"
aliases:
  - "Rules and Memories"
  - "规则与记忆"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rule-types"
  - "active-memory"
  - "automatic-memory"
  - "memory-scope"
lastReviewedAt: "2026-10-12"
---
# Rules and Memories

## Quick Take

- **In brief:** Rules give instructions; memories store information for possible later use.
- **Useful for:** Separating expected behavior from facts or preferences a system may reuse.
- **Main limit:** Loading, scope, and persistence depend on the product.

## Overview

A rule may say to run a specific test command before proposing a code change. A memory may store that command or a project preference. The system must still retrieve and apply the information correctly.

## Core Definition

A rule is an instruction about how a task should be handled. A memory is stored information that may be supplied in a later interaction. Products differ in how they create, retrieve, and update both.

## Background and Evolution

AI applications added instructions and saved context to support repeated work. Teams need to know which information is an active requirement and which is a stored fact that may be outdated.

## How It Works

1. The application stores a rule or memory in a product-defined format.
2. It applies or retrieves the item when its conditions match.
3. The model receives the information as context.
4. The model uses it while responding or taking an action.
5. The user checks for conflicts and stale information.

## Applications in Software Development and Testing

A rule can require tests before a patch is proposed. A memory can record the repository's test command. If the command changes, update the memory and check that the rule still reflects team policy.

## Strengths and Limitations

Rules can make expectations explicit. Memories can reduce repeated explanations. Either can be missed, stale, or inconsistent with a newer instruction. Neither is a permission control unless the host separately enforces it.

## Comparison with Similar Terms

Rules guide behavior. Memories store reusable context. Conversation state supports an active session. Permission policies decide whether an action is allowed.

## Best Practices

Keep requirements in rules and changeable facts in a source that can be updated. Limit scope. Remove stale entries. Resolve conflicting instructions explicitly and review the active context before important actions.

## Common Pitfalls

Do not treat a memory as a current requirement. Do not assume a saved instruction is always loaded. Do not use rules or memories to grant access to files or tools.

## FAQ

### Can a memory replace a rule?

Not reliably. A memory stores information, while a rule states an instruction. Use the product's documented mechanisms for each.

## Related Resources

### Related Terms

- [rule-types](https://inaodeng.com/en/AIWiki/rule-types/)
- [active-memory](https://inaodeng.com/en/AIWiki/active-memory/)
- [automatic-memory](https://inaodeng.com/en/AIWiki/automatic-memory/)
- [memory-scope](https://inaodeng.com/en/AIWiki/memory-scope/)

### External References

- [Cursor Docs](https://cursor.com/cn/docs)
- [Cursor Rules Docs](https://docs.cursor.com/context/rules)
- [Qoder Docs](https://docs.qoder.com/)
