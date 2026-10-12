---
title: "Rule Types"
titleZh: "规则类型"
slug: "rule-types"
lang: "en"
summary: "Classification of rules by scope and trigger strategy, such as always-on, conditional, and manual."
topic: "ai-vibe-coding"
aliases:
  - "Rule Types"
  - "规则类型"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rules-and-memories"
  - "permission-policies-allowed-command-list"
  - "privacy-mode"
  - "custom-commands"
lastReviewedAt: "2026-10-12"
---
# Rule Types

## Quick Take

- **In brief:** Rule types classify instructions by their scope or activation method.
- **Useful for:** Organizing instructions used by an AI coding tool.
- **Main limit:** Rule categories and behavior vary by product.

## Overview

A repository may need a rule that always applies, a rule for one folder, and a checklist that a user invokes for a specific task. A product may support some or none of these forms.

## Core Definition

Rule types are categories used to describe how an instruction is stored, scoped, or activated. Common distinctions include always-on rules, path-specific rules, and manually invoked rules. This is a practical grouping, not a universal standard.

## Background and Evolution

As AI tools added project instructions, users needed ways to organize rules for different tasks and files. Products use their own formats, precedence rules, and loading behavior.

## How It Works

1. Choose the scope or trigger for an instruction.
2. Store it in the format supported by the product.
3. The host loads it when its scope or trigger matches.
4. The model receives the instruction as context.
5. The user checks that it was applied as intended.

## Applications in Software Development and Testing

Keep general repository conventions in a broad rule. Put framework-specific details near the relevant files when supported. Use a manually invoked checklist for a focused release review.

## Strengths and Limitations

Categories can make instructions easier to find and maintain. Overlapping rules can conflict, and a host may not load a file that users expect it to read.

## Comparison with Similar Terms

A rule is an instruction. Rule type describes its scope or activation. Memory stores information for possible reuse. A permission policy controls allowed actions rather than response guidance.

## Best Practices

Use the smallest scope that fits the instruction. Avoid duplicate rules. Document precedence and activation behavior. Test with a task that should trigger each rule.

## Common Pitfalls

Do not assume that category names work the same across tools. Do not use a writing rule as a security control. Remove or update instructions that no longer match the project.

## FAQ

### Is there a standard list of AI rule types?

No. Products define their own formats and behavior. Always-on, scoped, and manually invoked are useful descriptive categories.

## Related Resources

### Related Terms

- [rules-and-memories](https://inaodeng.com/en/AIWiki/rules-and-memories/)
- [permission-policies-allowed-command-list](https://inaodeng.com/en/AIWiki/permission-policies-allowed-command-list/)
- [privacy-mode](https://inaodeng.com/en/AIWiki/privacy-mode/)
- [custom-commands](https://inaodeng.com/en/AIWiki/custom-commands/)

### External References

- [Cursor Docs](https://cursor.com/cn/docs)
- [Cursor Rules Docs](https://docs.cursor.com/context/rules)
- [Qoder Docs](https://docs.qoder.com/)
