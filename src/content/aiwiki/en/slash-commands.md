---
title: "Slash Commands"
titleZh: "斜杠命令"
slug: "slash-commands"
lang: "en"
summary: "Command-style shortcuts in chat/IDE interfaces for invoking predefined actions."
topic: "ai-vibe-coding"
aliases:
  - "Slash Commands"
  - "斜杠命令"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "custom-commands"
  - "hooks"
  - "function-calling"
  - "conversation-state"
lastReviewedAt: "2026-10-12"
---
# Slash Commands

## Quick Take

- **In brief:** A slash command is a typed shortcut that starts a defined instruction or action.
- **Useful for:** Invoking a repeatable task from a chat or development interface.
- **Main limit:** Available commands and effects depend on the host product.

## Overview

A user may enter `/review` to start a code review prompt. One product may expand it into instructions; another may run a tool or not support the command.

## Core Definition

A slash command is an interface pattern that uses a slash-prefixed name to invoke a command, prompt, or action. It is not a universal AI standard.

## Background and Evolution

Slash commands were used in chat and developer tools as shortcuts for actions. AI products may map them to prompts, workflows, or tools. Syntax and behavior vary.

## How It Works

1. The user types a supported slash-prefixed name.
2. The host matches it to a configured command or action.
3. The host runs the action or supplies the associated instruction.
4. The user reviews the output and any effects.

## Applications in Software Development and Testing

A slash command can start a focused test review, summarize a diff, or generate release notes. Keep its expected inputs and output clear.

## Strengths and Limitations

Commands can make common tasks easier to start. A command may be unavailable, change after an update, or invoke a broader action than the name suggests.

## Comparison with Similar Terms

A slash command describes how a user invokes an action. A custom command is a reusable command definition. A hook runs after a host event. A skill packages instructions and resources for a task.

## Best Practices

Check the command list and product documentation. State the expected input. Review any files or systems changed by the action. Do not expose sensitive data in command arguments.

## Common Pitfalls

Do not assume a command is available in every product. Do not treat invocation as approval for high-impact actions. Check what the command actually runs.

## FAQ

### Does a slash command always run a tool?

No. It may expand to instructions, start an action, or be unsupported, depending on the host.

## Related Resources

### Related Terms

- [custom-commands](https://inaodeng.com/en/AIWiki/custom-commands/)
- [hooks](https://inaodeng.com/en/AIWiki/hooks/)
- [function-calling](https://inaodeng.com/en/AIWiki/function-calling/)
- [conversation-state](https://inaodeng.com/en/AIWiki/conversation-state/)

### External References

- [Claude Code Overview](https://code.claude.com/docs/en/overview)
- [Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview)
