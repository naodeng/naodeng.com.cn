---
title: "Knowledge Distillation"
titleZh: "知识蒸馏"
slug: "knowledge-distillation"
lang: "en"
summary: "Knowledge distillation trains a student model from a teacher's outputs or representations to transfer behavior or reduce deployment size."
topic: "ai-foundations"
aliases:
  - "Model distillation"
tags:
  - "Model compression"
  - "Model training"
related:
  - "small-language-models-slms"
  - "model-quantization"
  - "synthetic-training-data"
lastReviewedAt: "2026-10-12"
---

# Knowledge Distillation

## Quick Take

- **In brief:** Distillation trains a student model with signals from a teacher model.
- **Useful for:** Building a smaller model for a narrower task or deployment limit.
- **Main limit:** The student may inherit errors and will not necessarily match the teacher.

## Overview

A team may use a stronger model to create candidate explanations for code questions, then review examples to train a smaller model for that task.

## Core Definition

Knowledge distillation transfers learning signals from a teacher model to a student model through training.

## Background and Evolution

Distillation is a model-training technique studied before modern large language models. It is now used to explore smaller or more specialized models that need fewer deployment resources.

## How It Works

The teacher can provide output probabilities, answers, or intermediate representations. Training uses those signals to adjust a student model; methods vary by task and model.

## Applications in Software Development and Testing

Distill a broad model into a smaller assistant for a stable, well-defined internal task. Test the student on new examples, edge cases, and the target language.

## Strengths and Limitations

A smaller student can reduce inference cost or run in a constrained environment. Its quality depends on the training data and capacity, and it may copy teacher errors or bias.

## Comparison with Similar Terms

Distillation trains a student model. Quantization changes numerical precision. Pruning removes selected model parameters or connections. These methods can be combined.

## Best Practices

Define the target task, review teacher outputs, keep an independent test set, and compare quality, latency, and cost with the original model.

## Common Pitfalls

Do not equate smaller size with equivalent capability. Do not use teacher-generated examples as the only evaluation set.

## FAQ

### Is distillation the same as quantization?

No. Distillation trains a student; quantization represents model values at lower numerical precision.

## Related Resources

### Related terms

- [Small language models](/en/AIWiki/small-language-models-slms/)
- [Model quantization](/en/AIWiki/model-quantization/)
- [Synthetic training data](/en/AIWiki/synthetic-training-data/)

### References

- [Distilling the Knowledge in a Neural Network](https://arxiv.org/abs/1503.02531)
