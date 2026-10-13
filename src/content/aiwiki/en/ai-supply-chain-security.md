---
title: "AI Supply-Chain Security"
titleZh: "AI 供应链安全"
slug: "ai-supply-chain-security"
lang: "en"
summary: "AI supply-chain security tracks model weights, datasets, adapters, dependencies, and services to reduce tampering and unknown risk."
topic: "ai-safety-quality"
aliases:
  - "Model supply-chain security"
  - "AI asset security"
tags:
  - "AI security"
  - "Supply chain"
related:
  - "training-data-poisoning"
  - "model-privacy-attacks"
  - "model-and-data-cards"
lastReviewedAt: "2026-10-12"
---

# AI Supply-Chain Security

## Quick Take

- **In brief:** AI supply-chain security tracks and protects the components used to build and run AI.
- **Useful for:** Managing risk in weights, datasets, adapters, libraries, and services.
- **Main limit:** A hash or signature alone cannot prove safety.

## Overview

A deployed model may rely on weights, training data, adapters, tokenizers, inference libraries, plugins, and remote APIs. A change to any part can affect behavior or expose data.

## Core Definition

AI supply-chain security protects the assets, software, data, and services used to develop and deploy AI, while tracking their origin and changes.

## Background and Evolution

Software teams already manage dependency provenance and integrity. AI adds model weights, datasets, evaluation material, and conversion steps that can also change a system's behavior.

## How It Works

Teams record source, version, checksum, license, build steps, and owner for each asset. They pin dependencies, verify artifacts, scan for known issues, and isolate components that are not trusted.

## Applications in Software Development and Testing

Before loading a third-party model or adapter, verify its publisher, hash, license, and conversion history. Evaluate its behavior in an isolated environment before using it in development tools.

## Strengths and Limitations

Traceability helps teams identify what changed and investigate incidents. A trusted source or matching hash does not prove that data is lawful or model behavior is safe.

## Comparison with Similar Terms

Training-data poisoning changes or corrupts training examples. Supply-chain security covers the wider path that includes data, models, tools, build systems, and deployment services.

## Best Practices

Keep an inventory of AI assets, pin versions, verify provenance, review licenses, and retain evaluation conditions alongside model and data documentation.

## Common Pitfalls

Do not assume a model is safe because it loads or came from a popular repository. Record the conversion process for quantized weights and adapters too.

## FAQ

### Does checking a model hash confirm that it is safe?

No. It confirms whether a file matches a known value; source, license, dependencies, build steps, and behavior still need review.

## Related Resources

### Related terms

- [Training data poisoning](/en/AIWiki/training-data-poisoning/)
- [Model privacy attacks](/en/AIWiki/model-privacy-attacks/)
- [Model and data cards](/en/AIWiki/model-and-data-cards/)

### References

- [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final)
