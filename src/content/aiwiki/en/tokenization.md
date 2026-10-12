---
title: "Tokenization and Tokens"
titleZh: "分词与 Token"
slug: "tokenization"
lang: "en"
summary: "A tokenizer turns text, code, and symbols into model tokens, which affect context length and usage cost."
topic: "ai-foundations"
aliases:
  - "Token"
tags:
  - "LLM"
  - "Model foundations"
related:
  - "large-language-models-llms"
  - "small-language-models-slms"
  - "embeddings"
lastReviewedAt: "2026-10-12"
---

# Tokenization and Tokens

## Quick Take

- **In brief:** Tokenization splits input into token IDs from a model's vocabulary.
- **Useful for:** Understanding context limits and token-based billing.
- **Main limit:** A token is not a word or a measure of answer quality.

## Overview

A tokenizer may split the code name checkoutTimeout into several pieces. The same text can use different token counts with different models.

## Core Definition

Tokenization maps text, code, or other input into token IDs that a model can process.

## Background and Evolution

Language models process numerical inputs, not raw text characters. Tokenizers provide a vocabulary and rules for turning input into those numerical units.

## How It Works

A tokenizer matches input against a vocabulary and returns a sequence of token IDs. A decoder maps generated IDs back to text. Words, word parts, punctuation, and symbols may each form tokens.

## Applications in Software Development and Testing

Prompts, repository passages, logs, and generated answers share a model's context budget. Removing irrelevant logs can preserve useful code without losing key details.

## Strengths and Limitations

Tokenization gives models a manageable input representation and lets systems count context use. Different tokenizers split the same input differently, and estimates may not match the target model.

## Comparison with Similar Terms

Tokenization maps input to discrete IDs. Embeddings map input to numerical vectors. Vector search compares embeddings; it does not count tokens.

## Best Practices

Use the target model's tokenizer for exact counts. Keep only relevant source code and logs when a prompt approaches the context limit.

## Common Pitfalls

Do not treat one token as one word or one unit of thought. Token count alone does not predict answer quality.

## FAQ

### Is a token always one word?

No. A token may be a word, word fragment, punctuation mark, or another symbol.

## Related Resources

### Related terms

- [Large language models](/en/AIWiki/large-language-models-llms/)
- [Small language models](/en/AIWiki/small-language-models-slms/)
- [Embeddings](/en/AIWiki/embeddings/)

### References

- [Hugging Face Tokenizers documentation](https://huggingface.co/docs/tokenizers/)
