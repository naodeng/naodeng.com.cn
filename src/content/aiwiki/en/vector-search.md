---
title: "Vector Search"
titleZh: "向量搜索"
slug: "vector-search"
lang: "en"
summary: "Vector search compares query and content representations to find nearby candidates, often for semantic retrieval and RAG."
topic: "retrieval-and-rag"
aliases:
  - "Vector retrieval"
tags:
  - "Retrieval"
  - "RAG"
related:
  - "embeddings"
  - "vector-database"
  - "hybrid-search"
  - "document-chunking"
lastReviewedAt: "2026-10-12"
---

# Vector Search

## Quick Take

- **In brief:** Vector search retrieves items with representations close to a query vector.
- **Useful for:** Finding related content when wording differs.
- **Main limit:** Similarity returns candidates, not verified answers.

## Overview

A user searches “blank page after login,” while a report says “rendering failed after the authentication callback.” Vector search can find both if their vector representations are close.

## Core Definition

Vector search finds indexed items whose vector representations are close to a query under a distance or similarity measure.

## Background and Evolution

Embedding models made it practical to compare content by learned representations. Vector search applies that comparison to collections of documents, code, images, or other data.

## How It Works

A model converts a query and stored items to vectors. The search system compares them, often through an index, and returns nearby candidates.

## Applications in Software Development and Testing

Search code, bug reports, and documentation by meaning when users do not know the exact term. Combine it with keyword search for version numbers, error codes, and function names.

## Strengths and Limitations

Vector search can match related wording that literal search misses. It may return content about the wrong product, version, or cause.

## Comparison with Similar Terms

Embeddings create vector representations. Vector search uses them to retrieve neighbors. A vector database stores vectors and may provide that search capability.

## Best Practices

Use representative queries, tune filters and candidate counts, and verify that retrieved sources support generated answers.

## Common Pitfalls

Do not equate vector similarity with factual agreement. Do not expect vector search alone to supply citations or decide which answer is correct.

## FAQ

### Does vector search understand meaning like a person?

No. It compares learned numerical representations that can reflect useful relationships but can also produce mismatches.

## Related Resources

### Related terms

- [Embeddings](/en/AIWiki/embeddings/)
- [Vector databases](/en/AIWiki/vector-database/)
- [Hybrid search](/en/AIWiki/hybrid-search/)

### References

- [Faiss paper](https://arxiv.org/abs/1702.08734)
