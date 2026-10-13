---
title: "Mixture of Experts"
titleZh: "混合专家模型"
slug: "mixture-of-experts"
lang: "en"
summary: "Mixture-of-experts models route each input through selected expert networks, expanding capacity while limiting active computation."
topic: "ai-foundations"
aliases:
  - "MoE"
tags:
  - "Model architecture"
  - "LLM"
related:
  - "mistral-mixtral"
  - "model-quantization"
  - "small-language-models-slms"
lastReviewedAt: "2026-10-12"
---

# Mixture of Experts

## Quick Take

- **In brief:** A mixture-of-experts model routes each input to selected sub-networks.
- **Useful for:** Increasing model capacity while limiting active computation per input.
- **Main limit:** More total parameters do not guarantee better quality or lower cost.

## Overview

Imagine a team that sends each question to a few relevant specialists. A mixture-of-experts model uses learned routing to select neural sub-networks for an input.

## Core Definition

A mixture-of-experts (MoE) model contains multiple expert sub-networks and a routing mechanism that selects which ones process each input.

## Background and Evolution

MoE research explores how to increase model capacity without activating every parameter for every input. Sparse routing is one way to control computation, but it adds training and serving complexity.

## How It Works

A router scores or selects experts for a token or input. The selected experts process it, and the model combines their outputs. The experts are learned components, not necessarily human-readable specialties.

## Applications in Software Development and Testing

An MoE model may be offered for code assistance or language tasks. Teams should test the deployed model directly rather than infer coding ability from its architecture label.

## Strengths and Limitations

Sparse routing can increase total capacity while using only part of the network for each input. Routing can cause uneven load, and all model weights still affect storage and distribution.

## Comparison with Similar Terms

MoE is an architecture inside one model. Multi-agent systems coordinate separate agents with control flow and tools. Quantization changes numerical precision, a different design choice.

## Best Practices

Measure quality, throughput, latency, memory, and serving cost on the intended workload. Check for routing and load-balancing effects.

## Common Pitfalls

Do not equate total parameter count with parameters used per token, capability, or inference cost. These measures are different.

## FAQ

### Is a mixture-of-experts model a multi-agent system?

No. Its experts are neural network components selected inside one model, not independent agents.

## Related Resources

### Related terms

- [Mistral and Mixtral](/en/AIWiki/mistral-mixtral/)
- [Model quantization](/en/AIWiki/model-quantization/)
- [Small language models](/en/AIWiki/small-language-models-slms/)

### References

- [Switch Transformers paper](https://arxiv.org/abs/2101.03961)
