---
title: "Rules / .cursorrules"
titleZh: "规则 / .cursorrules"
slug: "rules-cursorrules"
lang: "en"
summary: "Cursor project rules provide prompt-level guidance. New project rules use .cursor/rules; .cursorrules is a legacy format."
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
lastReviewedAt: "2026-10-12"
---

# Rules / .cursorrules

> One-line definition: Cursor project rules provide prompt-level guidance. New project rules use .cursor/rules; .cursorrules is a legacy format.

## Quick Take

- **In brief:** Cursor rules provide project guidance in the editor's supported rule format.
- **Useful for:** Sharing coding and testing conventions with Cursor across a project.
- **Main limit:** Rules guide model responses; `.cursorrules` is a legacy format.

## Overview

Cursor project rules give its Agent reusable guidance for a codebase. Current project rules live in .cursor/rules. The older .cursorrules file is a legacy format that Cursor documentation recommends migrating.

## Core Definition

A Cursor rule is prompt-level guidance for the Agent. Project rules are stored as rule files under .cursor/rules and can apply to a project, selected files, or a manually invoked task. User and team rules are other options.

The legacy .cursorrules file is not the current project-rule format. Rules guide model behavior; they do not enforce operating-system or application permissions.

## Background and Evolution

Teams use project rules to provide coding conventions and task guidance without repeating them in every request. Cursor's current documentation describes project, user, and team rules, along with AGENTS.md support.

Cursor marks .cursorrules as a legacy format and documents migration to .cursor/rules. Rule types and behavior can change, so consult current product documentation.

## How It Works

1. A developer writes guidance in a supported rule file.
2. Cursor applies the rule according to its type, scope, or activation setting.
3. The applicable text becomes context for the Agent.
4. The model may follow that guidance when it generates a response or takes an action.

Rule application depends on the current product and rule configuration. The application still needs separate permission checks and validation.

## Applications in Software Development and Testing

- **Coding conventions:** State naming, formatting, and architecture preferences.
- **Test expectations:** Ask the Agent to consider tests when it changes code.
- **Scoped guidance:** Apply different instructions to selected folders or file types.
- **Reusable procedures:** Link a workflow to a project template or checklist.

Use linters, tests, and permission controls to enforce requirements that must not be skipped.

## Strengths and Limitations

### Strengths

- Teams can version project guidance with the codebase.
- Scoped rules can keep instructions relevant to selected files.
- Reusable guidance can reduce repeated setup text.

### Limitations and Risks

- Rules use context and do not guarantee compliance.
- Long or conflicting rules can reduce clarity.
- Rules can become outdated when the codebase changes.
- Rules do not replace tests, linters, or access controls.

## Comparison with Similar Terms

| Mechanism | Role |
|---|---|
| Cursor rule | Prompt-level guidance for Cursor Agent |
| AGENTS.md | A portable instruction file supported by some coding agents |
| Permission policy | Enforces which actions a tool or application may perform |
| Linter or test | Checks code against executable rules or expected behavior |

A rule can describe a requirement. A separate control must enforce it.

## Best Practices

- Use .cursor/rules for new Cursor project rules.
- Migrate legacy .cursorrules content using current Cursor guidance.
- Write short instructions with one requirement per sentence.
- Scope rules to the files or tasks where they apply.
- Test critical requirements with linters, tests, or permission checks.

## Common Pitfalls

Do not use rules as a security boundary. The model may miss or misapply an instruction. Keep legacy files under review and migrate them according to current Cursor documentation.

## FAQ

### Should a new Cursor project use .cursorrules?

Cursor documents .cursorrules as a legacy format. Use .cursor/rules for new project rules and follow the current migration guidance.

### Can a rule prevent an Agent from running a forbidden command?

A prompt rule alone cannot enforce that boundary. Configure the product's permissions or an external policy, then verify the result.

## Related Resources

### Related Terms

- [rule](https://inaodeng.com/en/AIWiki/rule/)
- [skill](https://inaodeng.com/en/AIWiki/skill/)
- [ai-agent](https://inaodeng.com/en/AIWiki/ai-agent/)
- [prompt-driven-development](https://inaodeng.com/en/AIWiki/prompt-driven-development/)

### References
- [Cursor Docs: Rules](https://cursor.com/docs/rules)
