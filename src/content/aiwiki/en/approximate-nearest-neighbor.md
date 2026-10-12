---
title: "Approximate Nearest-Neighbor Search"
titleZh: "近似最近邻搜索"
slug: "approximate-nearest-neighbor"
lang: "en"
summary: "ANN indexes trade a controlled amount of recall for faster high-dimensional neighbor queries at retrieval scale."
topic: "retrieval-and-rag"
aliases:
  - "ANN"
  - "Approximate nearest neighbors"
tags:
  - "Vector retrieval"
  - "Algorithms"
related:
  - "vector-search"
  - "vector-database"
  - "reranking"
lastReviewedAt: "2026-10-12"
---

# Approximate Nearest-Neighbor Search

## Quick Take

- **In brief:** ANN search finds close vectors without comparing every item exactly.
- **Useful for:** Reducing query time in large vector collections.
- **Main limit:** It can miss the exact nearest result.

## Overview

A support system may search millions of past issue reports for cases related to a new bug. An exact scan can be costly, so the system may first use an approximate index to find likely candidates.

## Core Definition

Approximate nearest-neighbor search uses an index to find vectors close to a query faster than an exhaustive exact comparison.

## Background and Evolution

As vector collections grow, scanning each vector becomes slower and more expensive. ANN methods trade some recall for lower query cost by inspecting a smaller candidate set.

## How It Works

An index organizes vectors into structures such as partitions or neighbor graphs. A query visits selected areas, returns likely neighbors, and may pass them to a reranker for a closer comparison.

## Applications in Software Development and Testing

A code assistant can retrieve likely files for a question about login timeouts. Add keyword search when exact identifiers matter, then measure whether the combined results include the right files.

## Strengths and Limitations

ANN can lower latency and compute cost at scale. Its recall depends on the index, settings, data, and query distribution; updates can also require index work.

## Comparison with Similar Terms

Vector search is the broader task of finding similar vectors. ANN is one way to make that search faster. Reranking orders the candidates after retrieval.

## Best Practices

Measure recall on real queries and representative data. Compare latency, memory, index-build time, and update cost before selecting settings.

## Common Pitfalls

Do not treat an ANN result as the mathematically closest item. A high average score can hide misses on queries where recall matters most.

## FAQ

### Does ANN always return the actual nearest neighbor?

No. It trades some exactness for fewer comparisons and faster queries.

## Related Resources

### Related terms

- [Vector search](/en/AIWiki/vector-search/)
- [Vector databases](/en/AIWiki/vector-database/)
- [Reranking](/en/AIWiki/reranking/)

### References

- [Faiss: Billion-scale similarity search with GPUs](https://arxiv.org/abs/1702.08734)
