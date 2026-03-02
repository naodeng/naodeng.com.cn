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
lastReviewedAt: "2026-03-02"
---

# Compaction

> One-line definition: The semantic extraction, deduplication, and summarization of long session histories to significantly reduce token consumption and enhance the AI's long-term attention on key decisions.

## Quick Take

- Problem it solves: Keep the right context and avoid context pollution.
- When to use: Use it in long sessions and multi-task workflows.
- Boundary: Not ideal for strict stateless-response requirements.

## Overview

`Compaction` is often viewed as a niche feature, but it actually solves practical delivery problems: unreliable outputs, weak reuse, and poor traceability. From a science-communication perspective, it helps move AI from “answers” to “operational outcomes.”

## Core Definition

### Formal Definition

Compaction is a context management technique. It transforms raw session logs into highly condensed knowledge representations via predefined strategies (such as sliding windows, importance scoring, or semantic clustering). This compacted content is then injected into subsequent requests as a "recap."

### Plain-Language Explanation

Think of `Compaction` as a reliability checkpoint in an AI pipeline. Its real value is not being “advanced,” but making outputs safer, repeatable, and easier to operate in production.

## Background and Evolution

### Origin

- **Context**: While the Context Window of Large Language Models is increasing, the latency and financial cost of processing long texts remain high.
- **Focus**: How to make the AI "forget" the fluff without losing critical engineering decisions.

### Evolution

- **Stage 1.0 (Simple Truncation)**: Directly discarding the earliest messages. The downside is "amnesia," where the AI forgets the original goal.
- **Stage 2.0 (Rolling Summaries)**: Automatically generating a short summary every 10 turns.
- **Stage 3.0 (Semantic Knowledge Distillation)**: Systems can now identify that "user decided to switch to Axios" is an unlosable fact, while "failed repair attempts" are compressible interim steps.

## How It Works

1. **Triggering**: Automatically starts when the session length reaches a threshold (e.g., 70% of the Context Window).
2. **Scoring**: A lightweight model scores each turn. Code changes, architectural decisions, and explicit user instructions get high scores; small talk and repetitive error logs get low scores.
3. **Clustering**: Merges repeated discussions of the same bug into a single record: "Confirmed as dependency conflict and resolved after 5 attempts."
4. **Rewriting**: Re-formats fragmented dialogue into structured Markdown lists.
5. **Injection**: Places the "Concentrated Juice" (summary) at the top of the Prompt, while moved detailed history remains archived.

## Applications in Software Development and Testing

- **Long-term Bug Tracking**: Even after processing 10 new features, the AI still remembers a performance issue from 5 hours ago because it was compacted into core memory.
- **Refactoring Navigation**: Record the original motivation for a large refactor to prevent the AI from generating hallucinations due to context loss later on.
- **Reducing Token Costs**: Compaction can shrink a 100k-token session down to 2k tokens, drastically lowering API invocation fees.

## Strengths and Limitations

### Strengths

- **Focused Attention**: AI is no longer distracted by lengthy error logs and can see the current goal more clearly.
- **Cost Efficiency**: Significantly reduces token costs per turn.
- **Project Continuity**: Supports saving compacted memory as a "project snapshot" for instant restoration later.

### Limitations and Risks

- **Information Loss**: Overly aggressive compaction might drop trivial but critical details (like a specific variable name).
- **Recursive Bias**: If an AI summarizes its own chat, it may create "self-reinforcing" hallucinations, drifting from facts.
- **Computational Overhead**: The compression process itself consumes tokens and compute power.

## Comparison with Similar Terms

| Dimension | Compaction | Prompt Caching | RAG (Vector Search) |
| :--- | :--- | :--- | :--- |
| **Core Goal** | **Extracting essence** | Reusing hash prefixes | Searching massive external knowledge |
| **Object** | Active session history | Static/Semi-static text| Large document/code base |
| **AI Impact** | Improves reasoning focus | Affects speed and cost | Provides background context |

## Best Practices

- **Preserve Key Code Snippets**: Do not delete the final adopted code structures during compaction.
- **Layered Compaction**: Keep the last 10 turns raw and perform deep compaction only on history older than that.
- **Reversibility**: Provide an entry point to "view original history" to allow traceability if disputes arise after compaction.

## Common Pitfalls

- **Blindly Compacting Errors**: Sometimes stack traces in error logs are vital for solving subsequent issues and shouldn't be fully merged.
- **Low-frequency Compaction**: Waiting until the token limit is reached before compacting may cause the AI to start hallucinating.

## FAQ

### Q1: Should beginners adopt this immediately?

A: Not always. For simple tasks, start lightweight; for team workflows or production-risk tasks, adopt it early.

### Q2: How do teams avoid overengineering with too many mechanisms?

A: Start with clear metrics, add mechanisms incrementally, and change one variable at a time.

## Related Resources

### Related Terms

- [active-memory](/en/AIWiki/active-memory/)
- [automatic-memory](/en/AIWiki/automatic-memory/)
- [prompt-caching](/en/AIWiki/prompt-caching/)
- [context-window](/en/AIWiki/context-window/)

### External References

- [How LLMs handle long contexts](https://docs.anthropic.com/claude/docs/long-context-window)
- [MemGPT: Managed Memory for Large Language Models](https://github.com/cpacker/MemGPT)
