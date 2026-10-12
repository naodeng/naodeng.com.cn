---
title: "Subagents"
titleZh: "子智能体"
slug: "subagents"
lang: "en"
summary: "Delegating a bounded task from one agent to another agent in a framework."
topic: "ai-vibe-coding"
aliases:
  - "Subagents"
  - "子智能体"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "multi-agent-orchestration"
  - "background-agents"
  - "task-level-abstraction"
lastReviewedAt: "2026-10-12"
---
# Subagents

## Quick Take

- **In brief:** A subagent is an agent delegated a bounded part of a larger task.
- **Useful for:** Separate research, review, or implementation work.
- **Main limit:** Isolation, tools, lifetime, and edit access depend on the host.

## Overview

A parent task can delegate an independent test review to a subagent and continue investigating code. The parent then checks the report before using it.

## Core Definition

A subagent is an agent instance or process assigned a subtask by another agent or orchestrator. The host defines how it receives context, which tools it can use, whether it can edit files, and how its result returns.

## Background and Evolution

Agent frameworks use delegation to split larger tasks. Some run subtasks in parallel; others use a sequential handoff. The term does not imply a specific hierarchy or execution environment.

## How It Works

1. The parent or orchestrator defines a subtask and expected output.
2. The host starts a subagent with selected context and permissions.
3. The subagent completes work or reports a blocker.
4. The parent reviews and integrates the result.
5. The parent verifies the combined task.

## Applications in Software Development and Testing

Delegate independent research, a review of a specific directory, or a test audit. Avoid overlapping file edits unless the host provides a safe coordination method.

## Strengths and Limitations

Delegation can reduce the time needed for independent work. It adds coordination and review. A subagent may use incomplete context, return conflicting advice, or fail to finish.

## Comparison with Similar Terms

A subagent is defined by delegation within a larger task. A background agent runs outside the immediate interaction. Multi-agent orchestration coordinates multiple agents. Product implementations may combine these patterns.

## Best Practices

Set a narrow scope, a baseline revision, and a clear deliverable. Explain whether edits are allowed. Review the output and rerun relevant checks before integration.

## Common Pitfalls

Do not assume a subagent is isolated or has limited permissions. Do not accept its findings without checking evidence. Do not delegate tightly coupled edits to multiple agents without coordination.

## FAQ

### Do subagents always work in separate branches?

No. The host decides where they run and whether their changes are isolated.

## Related Resources

### Related Terms

- [multi-agent-orchestration](https://inaodeng.com/en/AIWiki/multi-agent-orchestration/)
- [background-agents](https://inaodeng.com/en/AIWiki/background-agents/)
- [task-level-abstraction](https://inaodeng.com/en/AIWiki/task-level-abstraction/)
- [asynchronous-agent-execution](https://inaodeng.com/en/AIWiki/asynchronous-agent-execution/)

### External References

- [Agentic Patterns: Decomposition and Delegation](https://blog.langchain.dev/)
- [Building Effective Agents - Anthropic](https://www.anthropic.com/research/building-effective-agents)
