---
title: "Vector Databases"
titleZh: "向量数据库"
slug: "vector-database"
lang: "en"
summary: "A vector database manages vector indexes, similarity queries, and metadata filters as part of a retrieval system."
topic: "retrieval-and-rag"
aliases:
  - "Vector store"
tags:
  - "Retrieval"
  - "Databases"
related:
  - "vector-search"
  - "approximate-nearest-neighbor"
  - "codebase-indexing-rag"
lastReviewedAt: "2026-10-12"
---

# Vector Databases

## Quick Take

- **In brief:** A vector database stores vector representations and supports similarity retrieval.
- **Useful for:** Finding passages with related meaning at scale.
- **Main limit:** It is only one part of a retrieval system.

## Overview

A knowledge assistant can retrieve passages related to a question, then give them to a generative model. The vector database stores and retrieves candidate representations for that workflow.

## Core Definition

A vector database stores vectors and related records, with support for nearest-neighbor retrieval, filtering, and index management.

## Background and Evolution

Vector databases became more prominent as embedding models made similarity search useful for documents, images, and code. Some relational databases and search engines also provide vector features.

## How It Works

The system stores an embedding with identifiers and metadata. For a query, it compares or indexes vectors, applies filters such as version or permissions, and returns candidate records.

## Applications in Software Development and Testing

A code assistant can retrieve functions or documentation related to a natural-language question. Include file paths, repository versions, and access permissions in the index.

## Strengths and Limitations

A vector index can retrieve candidates by learned similarity and apply metadata filters. Results depend on embeddings, index settings, data, and workload.

## Comparison with Similar Terms

A conventional database is optimized for structured field queries. Vector search is the retrieval operation; a vector database is one system that stores vectors and supports it. Neither is a full RAG pipeline.

## Best Practices

Test recall, filter correctness, updates, deletions, latency, and operating cost with real queries and representative data.

## Common Pitfalls

Do not assume that storing vectors gives you document ingestion, chunking, permissions, answer generation, or source checking.

## FAQ

### Is a vector database required for RAG?

No. Vector search can also be built into a relational database or search engine.

## Related Resources

### Related Terms

- [Vector search](/en/AIWiki/vector-search/)
- [Approximate nearest-neighbor search](/en/AIWiki/approximate-nearest-neighbor/)
- [Codebase indexing and RAG](/en/AIWiki/codebase-indexing-rag/)

### References

- [pgvector: Vector similarity search for Postgres](https://github.com/pgvector/pgvector)
