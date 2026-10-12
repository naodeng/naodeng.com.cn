---
title: "Training Data Poisoning"
titleZh: "训练数据投毒"
slug: "training-data-poisoning"
lang: "en"
summary: "Training data poisoning contaminates training or fine-tuning examples to teach a model false associations, biased behavior, or a hidden backdoor."
topic: "ai-safety-quality"
aliases:
  - "Data poisoning"
  - "Model poisoning"
tags:
  - "AI security"
  - "Data governance"
related:
  - "synthetic-training-data"
  - "ai-supply-chain-security"
  - "prompt-injection"
lastReviewedAt: "2026-10-12"
---

# Training Data Poisoning

## Quick Take

- **In brief:** Data poisoning corrupts training examples to change model behavior.
- **Useful for:** Assessing risks in data collection, fine-tuning, and feedback pipelines.
- **Main limit:** One filter cannot prove a dataset is free of malicious samples.

## Overview

An attacker may add mislabeled examples with a trigger so a model behaves differently when that phrase appears. The change can affect training without being visible in ordinary tests.

## Core Definition

Training data poisoning deliberately alters data used for training or fine-tuning to make a model behave as an attacker wants or perform worse.

## Background and Evolution

Machine-learning models depend on their training data. As teams combine public, vendor, user, and synthetic data, the data pipeline becomes part of the system's security boundary.

## How It Works

An attacker inserts or changes examples in a training source. The model learns from those samples, which may create a targeted behavior, a bias, or lower performance.

## Applications in Software Development and Testing

Review data provenance and processing, then test rare triggers and unusual inputs. Retain model, adapter, and dataset versions to investigate unexpected behavior.

## Strengths and Limitations

Data review and provenance tracking can reduce exposure and support investigation. They may miss carefully crafted or low-frequency poisoning.

## Comparison with Similar Terms

Data poisoning targets training data. Prompt injection targets content the model reads at runtime. A training-data supply-chain issue may enable poisoning but can affect other assets too.

## Best Practices

Record data sources and transformations, deduplicate samples, review high-risk additions, and keep evaluation data independent from training sources.

## Common Pitfalls

Do not test only common inputs. Do not claim a clean scan proves there are no poisoned samples.

## FAQ

### Is data poisoning the same as prompt injection?

No. Poisoning aims to change training; prompt injection tries to influence the model during use.

## Related Resources

### Related terms

- [Synthetic training data](/en/AIWiki/synthetic-training-data/)
- [AI supply-chain security](/en/AIWiki/ai-supply-chain-security/)
- [Prompt injection](/en/AIWiki/prompt-injection/)

### References

- [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final)
