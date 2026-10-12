---
title: "Transformers and Self-Attention"
titleZh: "Transformer 与自注意力"
slug: "transformer-self-attention"
lang: "en"
summary: "Transformers combine sequence information through attention layers and underpin many modern language models."
topic: "ai-foundations"
aliases:
  - "Transformer"
  - "Self-attention"
tags:
  - "Neural networks"
  - "LLM"
related:
  - "large-language-models-llms"
  - "reasoning-models"
  - "tokenization"
lastReviewedAt: "2026-10-12"
---

# Transformers and Self-Attention

## Quick Take

- **In brief:** Transformers process sequences; self-attention relates information across positions.
- **Useful for:** Understanding a common architecture behind language models.
- **Main limit:** Attention does not guarantee understanding or reliability.

## Overview

In “Give the report to her because she handles publishing,” a model needs context to connect “her” with the earlier role. Self-attention provides one mechanism for combining information across tokens.

## Core Definition

A Transformer is a neural architecture for sequence data. Self-attention lets each position use information from other positions through computed weights.

## Background and Evolution

The Transformer architecture was introduced as an alternative to recurrent sequence models. Its attention mechanism supports parallel processing during training and is used in many language models.

## How It Works

Each token is represented by vectors. Self-attention compares query and key vectors to calculate weights, then combines value vectors. Layers repeat this and other computations to build contextual representations.

## Applications in Software Development and Testing

A coding model can use a function definition, call site, and error message as context when suggesting a change. Missing or truncated context can still produce a wrong suggestion.

## Strengths and Limitations

Attention provides a way to relate distant parts of an input. It does not prove which information mattered, explain a decision in human terms, or guarantee a correct answer.

## Comparison with Similar Terms

Self-attention relates tokens already in the input. Retrieval searches an external index and adds selected material to context. Tokenization creates the token sequence that a Transformer processes.

## Best Practices

Provide relevant code and error context, manage input length, and verify generated changes with tests and review.

## Common Pitfalls

Do not read attention weights as a complete explanation of model behavior. They are part of a computation, not a reliability score.

## FAQ

### Does self-attention mean a model understands the full input?

No. It is a mathematical operation that combines information across token representations.

## Related Resources

### Related terms

- [Large language models](/en/AIWiki/large-language-models-llms/)
- [Reasoning models](/en/AIWiki/reasoning-models/)
- [Tokenization and Tokens](/en/AIWiki/tokenization/)

### References

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
