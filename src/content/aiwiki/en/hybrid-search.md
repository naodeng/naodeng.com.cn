---
title: "Hybrid Search"
titleZh: "混合检索"
slug: "hybrid-search"
lang: "en"
summary: "Hybrid search combines keyword and vector retrieval so results can match exact names and semantically similar queries."
topic: "retrieval-and-rag"
aliases:
  - "Hybrid retrieval"
tags:
  - "RAG"
  - "Information retrieval"
related:
  - "bm25"
  - "vector-search"
  - "reciprocal-rank-fusion"
  - "graphrag"
lastReviewedAt: "2026-10-12"
---

# Hybrid Search

## Quick Take

- **In brief:** Hybrid search combines more than one retrieval method.
- **Useful for:** Queries that mix exact names with different wording.
- **Main limit:** More indexes and ranking steps add cost and tuning work.

## Overview

A developer may search for an exact function name, while another person describes the same issue as “the page did not update after saving.” Hybrid search can cover both query types.

## Core Definition

Hybrid search combines lexical retrieval, vector retrieval, or other search methods to build a candidate set.

## Background and Evolution

Keyword search handles literal terms well; vector search can handle related wording. Combining them became useful as AI systems needed both exact identifiers and semantic matches.

## How It Works

The system retrieves candidates with multiple methods, then deduplicates and merges their rankings or scores. It may rerank the merged list before sending passages to a generative model.

## Applications in Software Development and Testing

Combine BM25 with vector search to retrieve both a matching error code and a related explanation from technical documents. Keep version numbers and symbol names available as exact-match signals.

## Strengths and Limitations

Hybrid search can improve coverage when query styles vary. It adds indexes, latency, ranking choices, and operational maintenance.

## Comparison with Similar Terms

BM25 ranks lexical matches. Vector search ranks similar representations. Reciprocal rank fusion is one way to merge ranked lists.

## Best Practices

Compare lexical, vector, and hybrid search on the same real questions. Measure recall, answer support, latency, and maintenance cost.

## Common Pitfalls

Do not add raw scores from different retrievers without checking their scales. Do not assume a hybrid setup is better when one retriever already meets the need.

## FAQ

### Does hybrid search always improve retrieval?

No. It helps when retrieval methods cover different needs; test the combined results on representative queries.

## Related Resources

### Related terms

- [BM25](/en/AIWiki/bm25/)
- [Vector search](/en/AIWiki/vector-search/)
- [Reciprocal rank fusion](/en/AIWiki/reciprocal-rank-fusion/)

### References

- [Azure AI Search: Hybrid search](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview)
