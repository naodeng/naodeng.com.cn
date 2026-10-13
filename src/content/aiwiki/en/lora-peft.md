---
title: "LoRA and Parameter-Efficient Fine-Tuning"
titleZh: "LoRA 与参数高效微调"
slug: "lora-peft"
lang: "en"
summary: "LoRA freezes most base-model weights and trains low-rank adapters, reducing the number of parameters updated for a task."
topic: "ai-foundations"
aliases:
  - "LoRA"
  - "PEFT"
  - "Low-rank adaptation"
tags:
  - "Model training"
  - "Fine-tuning"
related:
  - "model-quantization"
  - "instruction-tuning"
  - "small-language-models-slms"
lastReviewedAt: "2026-10-12"
---

# LoRA and Parameter-Efficient Fine-Tuning

## Quick Take

- **In brief:** LoRA trains small adapter parameters while keeping most base-model weights fixed.
- **Useful for:** Adapting a model with fewer trainable parameters than full fine-tuning.
- **Main limit:** An adapter does not automatically add current project knowledge.

## Overview

A team may want a coding assistant to follow its test naming conventions. LoRA can train a small adapter for that behavior without updating every base-model weight.

## Core Definition

Low-Rank Adaptation (LoRA) adds trainable low-rank updates to selected model layers while the base weights remain frozen.

## Background and Evolution

Full fine-tuning updates many model parameters. Parameter-efficient fine-tuning methods such as LoRA reduce the number of parameters that need training and storage.

## How It Works

LoRA represents a weight update as the product of two smaller matrices. Training updates those matrices, and the adapter can be stored separately or merged when the framework supports it.

## Applications in Software Development and Testing

Adapt a base model to produce a team's preferred test format or use domain-specific terms consistently. Compare the result with prompting and retrieval before committing to training.

## Strengths and Limitations

Adapters can be smaller to train and distribute than full-model updates. Quality depends on the base model, examples, and training setup.

## Comparison with Similar Terms

LoRA is a fine-tuning method. Quantization lowers numerical precision. QLoRA combines a low-precision base model with LoRA training.

## Best Practices

Use representative data, keep evaluation data separate, check base-model licenses, and test adapter compatibility with the serving framework.

## Common Pitfalls

Do not treat LoRA as a knowledge database or assume an adapter will fix a weak base model.

## FAQ

### Is LoRA the same as quantization?

No. LoRA trains adapter parameters; quantization changes how model values are represented.

## Related Resources

### Related terms

- [Model quantization](/en/AIWiki/model-quantization/)
- [Instruction tuning](/en/AIWiki/instruction-tuning/)
- [Small language models](/en/AIWiki/small-language-models-slms/)

### References

- [LoRA paper](https://arxiv.org/abs/2106.09685)
