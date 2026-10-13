---
title: "Prompt Caching"
titleZh: "提示缓存"
slug: "prompt-caching"
lang: "en"
summary: "Prompt caching reuses eligible prompt-prefix work across requests. It can reduce processing time or input cost, depending on provider rules."
topic: "ai-vibe-coding"
aliases:
  - "Prompt Caching"
  - "提示缓存"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "compaction"
  - "context-window-management"
  - "predicted-outputs"
lastReviewedAt: "2026-10-12"
---

# Prompt Caching

> One-line definition: A provider reuses processing for an eligible prompt prefix that appears in a later request.

## Quick Take

- **In brief:** Prompt caching reuses a matching prompt prefix across requests.
- **Useful for:** Repeated requests with large, stable instructions or shared context.
- **Main limit:** Cache thresholds, lifetime, pricing, and behavior vary by provider.

## Overview

Prompt caching lets a provider reuse work for an eligible prompt prefix that appears again. This can reduce processing time or input cost. The exact rules depend on the provider.

## Core Definition

A model API may cache computation for part of a request, often a repeated prefix. When a later request contains an eligible matching prefix, the provider can reuse cached processing instead of processing that part from the beginning.

Prompt caching is not a memory feature. It does not make the model remember unrelated requests. Providers set their own matching rules, minimum prompt sizes, cache lifetime, and prices.

## Background and Evolution

Long system instructions, tool definitions, and shared reference material can repeat across requests. Providers introduced prompt caching to reduce the work needed for these repeated inputs.

Some APIs create caches automatically. Others let the caller mark cache breakpoints or set cache options. These are implementation choices, not universal parts of prompt caching.

## How It Works

1. The application sends a request with a prompt.
2. The provider checks whether part of the prompt matches an eligible cached prefix.
3. If it finds a match, the provider reuses the cached computation for that part.
4. The model processes the new or changed input and generates a response.

The provider may not cache a request that is too short or does not meet its matching rules. A cache can also expire.

## Applications in Software Development and Testing

- **Repeated evaluations:** Reuse stable instructions across many test prompts.
- **Repository Q&A:** Reuse shared project guidance when the provider and application support caching.
- **Tool workflows:** Reuse stable tool definitions across requests.

Measure cache hits and response time in the chosen environment. Do not assume that every repeated conversation qualifies.

## Strengths and Limitations

### Strengths

- Eligible repeated input may need less processing.
- Providers may charge less for cached input.
- Stable shared instructions can be reused across requests.

### Limitations and Risks

- A request must meet the provider's cache rules.
- Changes to a prefix can reduce or prevent reuse.
- Providers differ in cache lifetime, privacy terms, and price.
- Caching does not improve the factual quality of a response.

## Comparison with Similar Terms

| Term | What it does |
|---|---|
| Prompt caching | Reuses processing for eligible repeated input |
| Compaction | Replaces older context with a shorter summary |
| Conversation memory | Stores selected information for use in later interactions |

Prompt caching can lower repeated processing. It does not store a summary or user preference.

## Best Practices

- Put stable instructions before request-specific content when the provider uses prefix matching.
- Avoid changing stable content without a reason.
- Check the provider's cache threshold, retention, and pricing.
- Measure cache hits and total cost; caching can add setup or write costs.
- Review the provider's data-handling terms before sending sensitive code.

## Common Pitfalls

Do not assume that a prompt stays cached indefinitely. Cache keys, expiry, eligible content, and prices depend on the provider.

## FAQ

### Does prompt caching give a model long-term memory?

No. It reuses eligible prompt processing. It does not create general memory across unrelated requests.

### Will every repeated prompt receive a cache discount?

No. The prompt must meet the provider's current caching rules. Prices and cache lifetime vary.

## Related Resources

### Related Terms

- [compaction](https://inaodeng.com/en/AIWiki/compaction/)
- [context-window-management](https://inaodeng.com/en/AIWiki/context-window-management/)
- [predicted-outputs](https://inaodeng.com/en/AIWiki/predicted-outputs/)
- [batch-processing](https://inaodeng.com/en/AIWiki/batch-processing/)

### External References

- [Anthropic: Prompt Caching Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)
- [DeepSeek Documentation: Context Caching](https://api-docs.deepseek.com/guides/kv_cache)
