---
title: "Hooks"
titleZh: "钩子机制"
slug: "hooks"
lang: "en"
summary: "Register lifecycle callbacks around agent/tool events to enforce policy and automation steps."
topic: "ai-vibe-coding"
aliases:
  - "Hooks"
  - "钩子机制"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "hook-events"
  - "function-calling"
  - "custom-commands"
  - "permission-policies-allowed-command-list"
lastReviewedAt: "2026-10-12"
---
# Hooks

## Quick Take

- **In brief:** A hook is code or a callback that runs when a host reports a configured event.
- **Useful for:** Adding checks, logs, or follow-up actions to supported workflows.
- **Main limit:** A hook covers only event paths connected to it by the host.

## Overview

A development tool can run a hook before a supported shell command. The hook may check or record the command. It cannot control another path unless that path also invokes the hook.

## Core Definition

A hook is an extension that runs in response to a host-defined event. The host controls how it is registered, what data it receives, and how its result affects the workflow.

## Background and Evolution

Hooks extend defined lifecycle points in editors, build systems, and other applications. Some AI coding tools use them around sessions, prompts, or tool calls. Their behavior depends on the host.

## How It Works

1. The host emits a documented event.
2. The registered hook receives event data.
3. The hook performs a bounded task, such as a check or log entry.
4. The host handles the result under its documented rules.
5. The team reviews failures and confirms which paths invoke the hook.

## Applications in Software Development and Testing

A hook can run a formatter after a supported file change or check a command before execution. Use separate permissions and controls for actions that do not pass through the hook.

## Strengths and Limitations

Hooks can automate repeated checks at selected workflow points. They add another component to maintain. Poor error handling can block work or allow a check to pass without running.

## Comparison with Similar Terms

A hook runs in response to an event. A hook event is the trigger point. A custom command starts a named task on request. Function calling asks an application to execute a tool selected by a model.

## Best Practices

Keep each hook focused. Document its inputs and failure behavior. Test event order, duplicate events, timeouts, and errors. Review permissions separately from hook logic.

## Common Pitfalls

Do not assume a hook is a complete security boundary. Do not ignore hook failures or rely on a hook when another path can bypass it.

## FAQ

### Can hooks enforce a policy?

They can check actions that pass through supported events. Use host permissions or other controls for paths the hook does not cover.

## Related Resources

### Related Terms

- [hook-events](https://inaodeng.com/en/AIWiki/hook-events/)
- [function-calling](https://inaodeng.com/en/AIWiki/function-calling/)
- [custom-commands](https://inaodeng.com/en/AIWiki/custom-commands/)
- [permission-policies-allowed-command-list](https://inaodeng.com/en/AIWiki/permission-policies-allowed-command-list/)

### External References

- [Claude Code Overview](https://code.claude.com/docs/en/overview)
- [Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview)
