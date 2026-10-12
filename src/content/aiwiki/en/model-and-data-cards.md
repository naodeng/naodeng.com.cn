---
title: "Model and Data Cards"
titleZh: "模型卡与数据卡"
slug: "model-and-data-cards"
lang: "en"
summary: "Model and data cards document intended uses, evaluations, limitations, and dataset provenance to help assess fit."
topic: "ai-safety-quality"
aliases:
  - "Model card"
  - "Data card"
tags:
  - "AI governance"
  - "Documentation"
related:
  - "model-privacy-attacks"
  - "ai-supply-chain-security"
  - "agent-evals"
lastReviewedAt: "2026-10-12"
---

# Model and Data Cards

## Quick Take

- **In brief:** Model and data cards document what a model or dataset is and how it was assessed.
- **Useful for:** Reviewing intended use, evaluation conditions, provenance, and limits.
- **Main limit:** Documentation is not independent validation.

## Overview

Before adopting a coding model, a team may need to know which languages were tested, what uses are intended, and which limitations are known.

## Core Definition

A model card describes a model's intended uses, evaluation conditions, and limits. A data card describes a dataset's origin, collection, and composition.

## Background and Evolution

These cards are documentation practices used to make AI development and evaluation easier to inspect. Templates differ, so a card should name the exact model or dataset version.

## How It Works

Authors record scope, methods, data sources, evaluation conditions, risks, and known gaps in a structured document. Reviewers use that information to decide whether a resource fits a task.

## Applications in Software Development and Testing

Use model and data cards during vendor review, model selection, dataset approval, and test planning. They can help identify unsupported languages or missing evaluation cases.

## Strengths and Limitations

A complete card can make assumptions and gaps visible. It relies on the accuracy and completeness of what its authors report.

## Comparison with Similar Terms

A model card describes a model; a data card describes a dataset. A benchmark reports results on selected tasks but may not explain intended use or data provenance.

## Best Practices

Version the cards with the model or dataset, name evaluation conditions, disclose missing information, and update them when the underlying resource changes.

## Common Pitfalls

Do not treat a card as a certification or third-party audit. Missing risk information means “unknown,” not “no risk.”

## FAQ

### Does a model card prove that a model is safe?

No. It describes reported uses, evaluations, and limits; teams still need their own validation.

## Related Resources

### Related terms

- [Model privacy attacks](/en/AIWiki/model-privacy-attacks/)
- [AI supply-chain security](/en/AIWiki/ai-supply-chain-security/)
- [AI agent evaluations](/en/AIWiki/agent-evals/)

### References

- [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993)
- [Data Cards: Purposeful and Transparent Dataset Documentation](https://arxiv.org/abs/2204.01075)
