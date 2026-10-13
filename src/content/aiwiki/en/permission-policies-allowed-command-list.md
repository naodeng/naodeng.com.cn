---
title: "Permission Policies / Allowed Command List"
titleZh: "权限策略 / 命令白名单"
slug: "permission-policies-allowed-command-list"
lang: "en"
summary: "Policies controlling which tools/commands an agent is allowed to execute."
topic: "ai-vibe-coding"
aliases:
  - "Permission Policies / Allowed Command List"
  - "权限策略 / 命令白名单"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "privacy-mode"
  - "rule-types"
  - "function-calling"
  - "hooks"
lastReviewedAt: "2026-10-12"
---
# Permission Policies and Allowed Command Lists

## Quick Take

- **In brief:** Permission policies define which actions or resources a user or tool may access.
- **Useful for:** Limiting what an AI coding assistant can read, run, or change.
- **Main limit:** A command list is only as strong as its matching and enforcement rules.

## Overview

A team may allow a test command but block commands that delete files. The system must define how it interprets command arguments, shell operators, and scripts.

## Core Definition

A permission policy is a set of rules that allows, denies, or requests approval for actions. An allowed command list identifies commands that a policy permits under defined conditions. Products implement these rules differently.

## Background and Evolution

AI tools gained access to files, shells, and external services. Permission controls limit that access. A list of command names may not cover every effect of a command or script.

## How It Works

1. Define the resources and actions to protect.
2. Write allow, deny, or approval rules.
3. Match each requested action against the rules.
4. Block, allow, or request approval.
5. Record and test the decision path.

## Applications in Software Development and Testing

Allow read-only test discovery while requiring approval before a command writes files or changes a remote system. Test compound commands, scripts, paths, and environment variables.

## Strengths and Limitations

Policies can reduce accidental or unauthorized actions. Matching rules can be too broad or too narrow. A command may invoke another program or produce side effects that its name does not reveal.

## Comparison with Similar Terms

An allowlist describes permitted items. A permission policy also defines denials and approval behavior. A sandbox restricts execution at the environment level. A hook can check actions only when they pass through a supported event.

## Best Practices

Use least privilege. Prefer narrow rules. Test shell expansion, chained commands, and scripts. Keep an approval path for uncertain actions and review policy changes.

## Common Pitfalls

Do not assume that allowing a command makes all its effects safe. Do not rely on a textual pattern without knowing how the host matches it. Keep environment-level isolation separate.

## FAQ

### Is an allowed command list a complete security boundary?

Not by itself. Safety depends on matching, enforcement, the command's behavior, and other controls.

## Related Resources

### Related Terms

- [privacy-mode](https://inaodeng.com/en/AIWiki/privacy-mode/)
- [rule-types](https://inaodeng.com/en/AIWiki/rule-types/)
- [function-calling](https://inaodeng.com/en/AIWiki/function-calling/)
- [hooks](https://inaodeng.com/en/AIWiki/hooks/)

### External References

- [Cursor Docs](https://cursor.com/cn/docs)
- [Cursor Rules Docs](https://docs.cursor.com/context/rules)
- [Qoder Docs](https://docs.qoder.com/)
