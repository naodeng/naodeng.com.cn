---
title: "Custom Commands"
titleZh: "自定义命令"
slug: "custom-commands"
lang: "en"
summary: "User-defined command entries that package prompts, tools, and workflow conventions."
topic: "ai-vibe-coding"
aliases:
  - "Custom Commands"
  - "自定义命令"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "slash-commands"
  - "hooks"
  - "function-calling"
  - "rule-types"
lastReviewedAt: "2026-10-12"
---
# Custom Commands

## Quick Take

- **In brief:** A custom command is a named entry for a repeatable instruction or action.
- **Useful for:** Reusing a review, test, or documentation workflow.
- **Main limit:** The format and available actions depend on the host product.

## Overview

A team may create a command named `/review-test`. It can ask an assistant to inspect a test change against a short checklist. The reviewer still checks the result.

## Core Definition

A custom command packages a reusable instruction. Some products also support arguments, templates, or tool calls. A command does not by itself grant permission or ensure that the model follows every instruction.

## Background and Evolution

Command systems provide shortcuts for common actions. AI tools may use them to supply task instructions or start a workflow. Names, files, arguments, and execution behavior vary by product.

## How It Works

1. A user defines a name and an instruction.
2. The host registers it in a supported location or setting.
3. The user invokes the command, often with a slash command.
4. The host passes the instruction and supported arguments to the model or action.
5. The user checks the output and any changes.

## Applications in Software Development and Testing

Use a command to request a focused test review, reproduce a named failing case, or draft release notes from selected changes. Keep each command narrow enough to review.

## Strengths and Limitations

Commands can make repeated tasks easier to start and more consistent. They can become stale, hide assumptions, or change behavior after a product update. Tool access and safety controls remain separate.

## Comparison with Similar Terms

A custom command is a reusable entry that starts an instruction or action. A slash command is one way to invoke an entry. A hook runs when a host event occurs. A skill usually packages broader task guidance and resources.

## Best Practices

Describe expected input and output. State which files or tools the command may use. Include a check step. Test commands after host updates, and version their instructions when possible.

## Common Pitfalls

Do not treat a command name as a permission boundary. Do not let a broad command make unrelated edits. Check that the command still matches the team's workflow.

## FAQ

### Is every custom command a slash command?

No. Some products use slash commands, while others provide a different interface. Check the host product's documentation.

## Related Resources

### Related Terms

- [slash-commands](https://inaodeng.com/en/AIWiki/slash-commands/)
- [hooks](https://inaodeng.com/en/AIWiki/hooks/)
- [function-calling](https://inaodeng.com/en/AIWiki/function-calling/)
- [rule-types](https://inaodeng.com/en/AIWiki/rule-types/)

### External References

- [Claude Code Overview](https://code.claude.com/docs/en/overview)
- [Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview)
