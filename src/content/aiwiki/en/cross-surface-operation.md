---
title: "Cross-surface Operation"
titleZh: "跨界面协同"
slug: "cross-surface-operation"
lang: "en"
summary: "Continuing an AI task across interfaces such as an editor, terminal, or browser."
topic: "ai-vibe-coding"
aliases:
  - "Cross-surface Operation"
  - "跨界面协同"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "task-level-abstraction"
  - "remote-control"
  - "multi-agent-orchestration"
  - "background-agents"
lastReviewedAt: "2026-10-12"
---
# Cross-Surface Operation

## Quick Take

- **In brief:** Cross-surface operation continues a task across interfaces such as an editor, terminal, or browser.
- **Useful for:** Work that needs more than one application surface.
- **Main limit:** Shared context, permissions, and state depend on the product.

## Overview

A developer may ask an assistant to change code in an editor, run a test in a terminal, and inspect the result in a browser. The assistant may not share the same context or permissions across all three surfaces.

## Core Definition

Cross-surface operation is a workflow that uses or moves between multiple user interfaces or execution surfaces. It is a descriptive term, not a universal protocol. Product support and state synchronization vary.

## Background and Evolution

Development work already spans editors, terminals, browsers, and issue trackers. AI tools can connect some of these steps, but each integration defines its own data flow and controls.

## How It Works

1. A task begins in one surface.
2. The user or tool passes relevant context to another surface.
3. That surface performs an action or returns evidence.
4. The user checks the result and confirms the task state.
5. The task continues or stops at a defined review point.

## Applications in Software Development and Testing

An assistant can draft a change in an editor, run selected tests, and open the local page for inspection. Record which code revision and environment produced the result.

## Strengths and Limitations

Moving across surfaces can reduce manual handoffs. Context may be lost or become stale, and permission rules may differ between applications. A result in one surface does not prove that another surface completed its task.

## Comparison with Similar Terms

Cross-surface operation describes work across interfaces. Remote control lets a user or system operate another device or session. ACP and MCP are protocols for specific integrations; cross-surface operation does not imply either protocol is in use.

## Best Practices

Name the surfaces involved. Pass only the context needed for the next step. Check access rules and confirm the active project, revision, and environment at each handoff.

## Common Pitfalls

Do not assume application state syncs automatically. Do not infer that a browser or editor action was completed because a tool returned text. Check the actual result.

## FAQ

### Does cross-surface operation always synchronize task state?

No. Synchronization depends on the product and integration. Verify what each surface receives and returns.

## Related Resources

### Related Terms

- [task-level-abstraction](https://inaodeng.com/en/AIWiki/task-level-abstraction/)
- [remote-control](https://inaodeng.com/en/AIWiki/remote-control/)
- [agentic-workflow](https://inaodeng.com/en/AIWiki/agentic-workflow/)
- [subagents](https://inaodeng.com/en/AIWiki/subagents/)

### External References

- [Cross-Platform Agentic Synergies](https://docs.qoder.com/)
- [The Future of Human-Computer Interaction](https://www.interaction-design.org/)
