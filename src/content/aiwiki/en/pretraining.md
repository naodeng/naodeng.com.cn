---
title: "Pretraining"
titleZh: "预训练"
slug: "pretraining"
lang: "en"
summary: "Pretraining fits a model to broad data objectives and gives later instruction tuning and applications a starting point."
topic: "ai-foundations"
aliases:
  - "Foundation-model pretraining"
tags:
  - "Model training"
  - "LLM"
related:
  - "large-language-models-llms"
  - "small-language-models-slms"
  - "instruction-tuning"
  - "mixture-of-experts"
  - "test-time-compute"
  - "transformer-self-attention"
lastReviewedAt: "2026-10-12"
---

# Pretraining

## Quick Take

- **In brief:** Pretraining teaches a model patterns from broad data using an initial learning objective.
- **Useful for:** Creating a starting model for later adaptation and applications.
- **Main limit:** Learned patterns are not a verified or current fact store.

## Overview

Many language models learn to predict a likely next token from earlier text. This gives them patterns they can use later for language or code tasks.

## Core Definition

Pretraining is an initial stage that fits a model to a learning objective so it develops representations used by later stages.

## Background and Evolution

Pretraining provides the foundation for many modern language models. Later instruction tuning, preference training, retrieval, and tools can shape how a model serves a task.

## How It Works

Training supplies large data collections and an objective, such as predicting a continuation. The model adjusts its parameters to reduce prediction error over many examples.

## Applications in Software Development and Testing

A pretrained model can draft code or explain common patterns. Retrieval and tests can add current repository context and check whether generated code works.

## Strengths and Limitations

Pretraining can give one model broad language and code capabilities. Data gaps, stale information, and training choices affect results; the model may produce unsupported claims.

## Comparison with Similar Terms

Pretraining learns broad patterns. Instruction tuning focuses on task requests and responses. Preference optimization can further adjust behavior.

## Best Practices

Treat pretraining as a starting capability. Supply trusted current context for project-specific tasks and test outputs against requirements.

## Common Pitfalls

Do not assume a pretrained model is ready for a specific product or that its learned information is up to date.

## FAQ

### Does pretraining mean the model knows the facts in its data?

No. It learns patterns from training; it does not provide a verified database of facts.

## Related Resources

### Related terms

- [Large language models](/en/AIWiki/large-language-models-llms/)
- [Small language models](/en/AIWiki/small-language-models-slms/)
- [Instruction tuning](/en/AIWiki/instruction-tuning/)

### References

- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165)
