---
title: "Model Privacy Attacks"
titleZh: "模型隐私攻击"
slug: "model-privacy-attacks"
lang: "en"
summary: "Model privacy attacks infer whether data appeared in training, recover sensitive fragments, or expose user information through model outputs."
topic: "ai-safety-quality"
aliases:
  - "Membership inference"
  - "Training-data extraction"
tags:
  - "AI security"
  - "Privacy"
related:
  - "privacy-mode"
  - "ai-supply-chain-security"
  - "training-data-poisoning"
lastReviewedAt: "2026-10-12"
---

# Model Privacy Attacks

## Quick Take

- **In brief:** Privacy attacks try to infer or recover information from model behavior.
- **Useful for:** Assessing whether training or user data may be exposed.
- **Main limit:** Results depend on the model, data, access, and threat setup.

## Overview

A membership-inference attack asks whether a record was in a model's training set. A data-extraction attack tries to recover memorized text from outputs.

## Core Definition

Model privacy attacks use access to a model or its outputs to infer training examples, recover memorized content, or expose sensitive information.

## Background and Evolution

Models can retain patterns from their training data. Research studies when an attacker can infer membership or recover content; success varies with the model and defenses.

## How It Works

An attacker sends queries or analyzes model outputs, then uses patterns in the responses to test a privacy hypothesis. The required access may range from repeated queries to access to model internals.

## Applications in Software Development and Testing

Before deployment, test whether a model reveals sensitive test records or training examples under the intended access conditions. Keep attack results separate from a product's data-retention policy.

## Strengths and Limitations

Privacy testing can reveal exposure paths that ordinary quality tests miss. A failed attack under one setup does not prove that all data is protected.

## Comparison with Similar Terms

A privacy attack tests what can be inferred from a model. A product privacy mode describes how a service handles data. The setting does not make the model immune to leakage.

## Best Practices

Minimize sensitive training data, control access and query rates, review logs, and evaluate against a stated threat model. Consider privacy-preserving training methods where appropriate.

## Common Pitfalls

Do not generalize success rates from one research setup to every product. Do not confuse model leakage risk with data-retention rules.

## FAQ

### Can a model reveal information from training data?

It may, depending on training, data, access, and defenses. Test the deployed configuration for the relevant threat.

## Related Resources

### Related terms

- [Privacy mode](/en/AIWiki/privacy-mode/)
- [AI supply-chain security](/en/AIWiki/ai-supply-chain-security/)
- [Training data poisoning](/en/AIWiki/training-data-poisoning/)

### References

- [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final)
