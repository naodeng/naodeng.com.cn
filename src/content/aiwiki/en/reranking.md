---
title: "Reranking"
titleZh: "检索重排"
slug: "reranking"
lang: "en"
summary: "A reranker rescales a small set of retrieved candidates to put the passages most relevant to a query nearer the top."
topic: "retrieval-and-rag"
aliases:
  - "Reranker"
  - "Re-ranking"
tags:
  - "Search"
  - "RAG"
related:
  - "vector-search"
  - "hybrid-search"
  - "codebase-indexing-rag"
lastReviewedAt: "2026-10-12"
---

# Reranking

## Quick Take

- **In brief:** A reranker reorders candidates after an initial search.
- **Useful for:** Putting the most relevant passages near the top.
- **Main limit:** It cannot rank a document that the first stage did not retrieve.

## Overview

A search for “Why did OCR return nothing after upload?” may find pages about uploading, image processing, and OCR. A reranker can move the page that describes the exact flow to the top.

## Core Definition

Reranking applies a more detailed relevance judgment to an initial set of retrieved candidates and changes their order.

## Background and Evolution

Retrieval systems often use a fast first stage to find candidates, then a more detailed model to score a smaller set. This two-stage approach balances coverage and compute cost.

## How It Works

The first retriever returns candidates. A reranker evaluates the query and each candidate together, assigns relevance scores, and sorts the list.

## Applications in Software Development and Testing

Rerank code snippets or documentation pages before sending them to a coding assistant. Measure whether the top passages support generated answers.

## Strengths and Limitations

Reranking can improve the order of useful candidates. It adds computation and can only work with items returned by the first stage.

## Comparison with Similar Terms

A retriever finds candidates. A reranker reorders them. A grader evaluates a generated answer against a rubric.

## Best Practices

Choose a candidate count that balances recall, latency, and cost. Track retrieval misses separately from ranking errors.

## Common Pitfalls

Do not treat a high reranker score as proof of truth. If a needed document is absent from the candidate list, reranking cannot restore it.

## FAQ

### Does reranking replace the initial search?

No. It needs a first-stage retriever to supply candidates.

## Related Resources

### Related terms

- [Vector search](/en/AIWiki/vector-search/)
- [Hybrid search](/en/AIWiki/hybrid-search/)
- [Codebase indexing and RAG](/en/AIWiki/codebase-indexing-rag/)

### References

- [ColBERT paper](https://arxiv.org/abs/2004.12832)
