---
title: "Compaction"
titleZh: "上下文压缩"
slug: "compaction"
lang: "en"
summary: "Compress long conversation or context into concise state while retaining critical details."
topic: "ai-vibe-coding"
aliases:
  - "Compaction"
  - "上下文压缩"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "prompt-caching"
  - "conversation-state"
  - "memory-scope"
  - "automatic-memory"
lastReviewedAt: "2026-10-12"
---
# Context Compaction

## Quick Take

- **In brief:** Compaction shortens or summarizes conversation context when it approaches a limit.
- **Useful for:** Continuing a long interaction with selected earlier information.
- **Main limit:** A summary can omit details needed later.

## Overview

A long debugging session may exceed the context limit. An application may summarize earlier messages and keep recent messages so the task can continue.

## Core Definition

Context compaction is the process of reducing the context supplied to a model. A system may remove, summarize, or replace older content. Products use different methods and triggers.

## Background and Evolution

Compaction is one way to manage limited context in long conversations and agent runs. It does not increase the model's context limit, and it is not the same as saving durable memory.

## How It Works

1. The system detects that the context needs reduction.
2. It selects older content for removal or summarization.
3. It keeps or creates a shorter representation.
4. It sends the reduced context with later requests.
5. The user checks whether important decisions or constraints remain.

## Applications in Software Development and Testing

Before compaction, record the current code revision, failed checks, decisions, and open questions. After compaction, confirm these details before continuing a change.

## Strengths and Limitations

Compaction can let a task continue without sending the full history every time. It can lose precise wording, command output, or edge cases. Restored content may also mix current facts with outdated summaries.

## Comparison with Similar Terms

Compaction reduces active context. A context window is the model's input limit. Memory stores selected information for possible later use. Prompt caching reuses repeated input for efficiency; it does not summarize history.

## Best Practices

Preserve exact requirements, decisions, and identifiers that later steps need. Keep a source of truth outside the summary. Review the compacted state before high-impact actions.

## Common Pitfalls

Do not treat compaction as lossless. Do not assume omitted details remain available to the model. Recheck files and test output instead of trusting an old summary.

## FAQ

### Does compaction make the model's context window larger?

No. It reduces or summarizes the context sent to the model. The model's context limit stays the same.

## Related Resources

### Related Terms

- [active-memory](https://inaodeng.com/en/AIWiki/active-memory/)
- [automatic-memory](https://inaodeng.com/en/AIWiki/automatic-memory/)
- [prompt-caching](https://inaodeng.com/en/AIWiki/prompt-caching/)
- [context-window-management](https://inaodeng.com/en/AIWiki/context-window-management/)

### External References

- [How LLMs handle long contexts](https://docs.anthropic.com/claude/docs/long-context-window)
- [MemGPT: Managed Memory for Large Language Models](https://github.com/cpacker/MemGPT)
