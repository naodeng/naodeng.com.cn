---
title: "Embeddings"
titleZh: "向量嵌入"
slug: "embeddings"
lang: "en"
summary: "An embedding model maps text or other inputs to vectors so systems can compare content using learned representations."
topic: "ai-foundations"
aliases:
  - "Text embeddings"
  - "Vector representations"
tags:
  - "Vectors"
  - "Retrieval"
related:
  - "tokenization"
  - "vector-search"
  - "codebase-indexing-rag"
lastReviewedAt: "2026-10-12"
---

# Embeddings

## Quick Take

- **In brief:** An embedding represents input as a vector of numbers.
- **Useful for:** Comparing text or other data by learned similarity.
- **Main limit:** Similarity does not prove truth or source quality.

## Overview

A user reports “the checkout page keeps spinning.” An older ticket says “payment confirmation timed out.” An embedding system can retrieve the older ticket even though the wording differs.

## Core Definition

An embedding is a numerical representation that a model produces for an input and a specific task.

## Background and Evolution

Embeddings are a long-standing machine-learning technique. Modern text embedding models make it practical to compare large collections of documents, images, or code.

## How It Works

An embedding model maps an input to a vector. A search system can compare that vector with stored vectors, then return nearby items as candidates.

## Applications in Software Development and Testing

Use embeddings to search code, support tickets, test reports, and documentation by meaning. Combine them with keyword search when exact symbols or error codes matter.

## Strengths and Limitations

Embeddings can connect different wording and support semantic search. Their results depend on the model, training data, language, and domain.

## Comparison with Similar Terms

Tokenization maps text to discrete token IDs. Embeddings map inputs to numerical vectors. Vector search uses those vectors to retrieve nearby items.

## Best Practices

Choose an embedding model for the target language and data. Evaluate retrieval with real queries, and preserve source links for returned passages.

## Common Pitfalls

Do not assume nearby vectors mean two statements are equivalent or true. An embedding does not search a collection by itself.

## FAQ

### If two texts have similar embeddings, are both true?

No. Similarity shows a relationship learned by the model, not factual accuracy or trustworthiness.

## Related Resources

### Related terms

- [Tokenization and Tokens](/en/AIWiki/tokenization/)
- [Vector search](/en/AIWiki/vector-search/)
- [Codebase indexing and RAG](/en/AIWiki/codebase-indexing-rag/)

### References

- [Sentence-BERT paper](https://arxiv.org/abs/1908.10084)
