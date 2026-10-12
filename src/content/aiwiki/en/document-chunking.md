---
title: "Document Chunking"
titleZh: "文档分块"
slug: "document-chunking"
lang: "en"
summary: "Chunking splits long sources into indexable and retrievable units; boundaries affect context and retrieval quality."
topic: "retrieval-and-rag"
aliases:
  - "Text chunking"
  - "Chunking"
tags:
  - "RAG"
  - "Data processing"
related:
  - "codebase-indexing-rag"
  - "vector-search"
  - "reranking"
lastReviewedAt: "2026-10-12"
---

# Document Chunking

## Quick Take

- **In brief:** Chunking splits long sources into smaller units for indexing and retrieval.
- **Useful for:** Preparing manuals, tickets, and code for retrieval-augmented generation.
- **Main limit:** A poor boundary can separate facts that belong together.

## Overview

If a manual is split at an arbitrary character count, a parameter table may end up apart from its explanation. The retriever may then find only half of the information needed to answer a question.

## Core Definition

Document chunking divides long material into smaller units that a system can index, retrieve, or place in model context.

## Background and Evolution

Chunking became a key design choice as retrieval systems began supplying selected passages to models with limited context. The right unit depends on the structure and use of the source.

## How It Works

The pipeline extracts a source, splits it by length or structure, and stores each chunk with metadata such as title, page, and version. Retrieval returns selected chunks for later processing.

## Applications in Software Development and Testing

A code index may split by function or class and retain file paths. A technical-document assistant may split by heading and keep page numbers, so answers can point to the original location.

## Strengths and Limitations

Smaller units can improve precision and reduce irrelevant context. Very small chunks may omit conditions; large chunks can dilute relevance and consume context.

## Comparison with Similar Terms

Chunking decides what text units enter the index. Embeddings represent those units as vectors. Retrieval selects candidates from the index.

## Best Practices

Test chunk boundaries on real questions. Preserve headings and source metadata, then compare retrieval and answer support after each change.

## Common Pitfalls

Do not choose chunk size by vector-store count alone. Re-index and re-evaluate after changing the boundaries.

## FAQ

### How large should chunks be for RAG?

There is no universal size. Use real questions to check context, retrieval quality, latency, and indexing cost.

## Related Resources

### Related terms

- [Codebase indexing and RAG](/en/AIWiki/codebase-indexing-rag/)
- [Vector search](/en/AIWiki/vector-search/)
- [Reranking](/en/AIWiki/reranking/)

### References

- [Retrieval-Augmented Generation paper](https://arxiv.org/abs/2005.11401)
- [OpenAI retrieval guide](https://developers.openai.com/api/docs/guides/retrieval)
