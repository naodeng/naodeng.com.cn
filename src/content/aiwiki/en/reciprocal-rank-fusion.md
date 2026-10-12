---
title: "Reciprocal Rank Fusion"
titleZh: "倒数排名融合"
slug: "reciprocal-rank-fusion"
lang: "en"
summary: "RRF combines rankings by adding reciprocal rank scores, which is useful when retrieval systems produce scores on different scales."
topic: "retrieval-and-rag"
aliases:
  - "RRF"
tags:
  - "Search ranking"
  - "Hybrid retrieval"
related:
  - "hybrid-search"
  - "bm25"
  - "vector-search"
lastReviewedAt: "2026-10-12"
---

# Reciprocal Rank Fusion

## Quick Take

- **In brief:** RRF combines search rankings using each result's position.
- **Useful for:** Merging retrievers whose scores use different scales.
- **Main limit:** It cannot recover a document that every retriever missed.

## Overview

Keyword search may rank an exact error-code page first. Vector search may rank a related incident second. RRF can combine these lists without comparing their raw scores.

## Core Definition

Reciprocal rank fusion (RRF) combines ranked lists by adding a score based on each result's rank position.

## Background and Evolution

Search systems often combine lexical and vector retrievers. Their scores may not be directly comparable, so rank-based fusion offers a simple alternative to score calibration.

## How It Works

Each result gets a contribution based on its position in a list. Results ranked near the top of several lists receive stronger combined scores and move higher in the fused ranking.

## Applications in Software Development and Testing

Use RRF to merge BM25 results for exact identifiers with vector results for related descriptions. Evaluate whether the merged list retrieves the evidence needed by real questions.

## Strengths and Limitations

RRF does not require score scales to match and is simple to apply. Its result depends on the candidate lists and rank positions; it does not assess truth.

## Comparison with Similar Terms

Hybrid search combines retrieval methods. RRF is one ranking-fusion method that can merge their result lists. Reranking applies a separate relevance judgment to candidates.

## Best Practices

Compare RRF with each retriever alone and other fusion methods on the same query set. Track recall, answer support, latency, and candidate count.

## Common Pitfalls

Do not expect fusion to find evidence missed by every retriever. Do not describe a high fused rank as proof that a passage is correct.

## FAQ

### Does RRF combine the raw search scores?

No. It combines rank positions, which avoids directly comparing scores on different scales.

## Related Resources

### Related terms

- [Hybrid search](/en/AIWiki/hybrid-search/)
- [BM25](/en/AIWiki/bm25/)
- [Vector search](/en/AIWiki/vector-search/)

### References

- [Reciprocal Rank Fusion paper record](https://research.google/pubs/reciprocal-rank-fusion-outperforms-condorcet-and-individual-rank-learning-methods/)
