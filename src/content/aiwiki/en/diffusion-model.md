---
title: "Diffusion Models"
titleZh: "扩散模型"
slug: "diffusion-model"
lang: "en"
summary: "Diffusion models learn data distributions through gradual noising and denoising and can generate images, audio, or other content."
topic: "multimodal-ai"
aliases:
  - "Diffusion generative model"
tags:
  - "Generative AI"
  - "Model foundations"
related:
  - "vision-language-model"
  - "video-language-model"
  - "content-credentials-c2pa"
lastReviewedAt: "2026-10-12"
---

# Diffusion Models

## Quick Take

- **In brief:** A diffusion model learns to generate samples through a denoising process.
- **Useful for:** Generating images, audio, video, and other structured data.
- **Main limit:** Realistic output is not evidence that a scene happened.

## Overview

A prompt can guide a model from random noise toward an image. The output may look detailed, but the model is generating a sample rather than recording an event.

## Core Definition

A diffusion model learns a process that gradually removes noise to produce samples that resemble its training data.

## Background and Evolution

Research on diffusion probabilistic models showed that repeated denoising can generate complex samples. Later systems adapted the approach to images and other data types.

## How It Works

During training, noise is added to examples and the model learns to reverse that process. During generation, it starts from noise and repeatedly predicts a less noisy sample. The prompt can guide each step.

## Applications in Software Development and Testing

Teams can create draft interface assets or synthetic images for visual tests. Check text, object counts, layout, and edge cases against known expectations.

## Strengths and Limitations

Iterative denoising can produce varied, detailed samples from prompts. It may distort text or spatial relationships, and results depend on the model, sampler, and prompt.

## Comparison with Similar Terms

Diffusion models commonly use several denoising steps. Autoregressive models predict the next token or segment in a sequence. Systems can combine these approaches.

## Best Practices

Treat generated media as a draft, inspect important details, and record model and prompt versions when results must be reproducible.

## Common Pitfalls

Do not use visual realism as proof of factual accuracy, provenance, or rights to use an image.

## FAQ

### Is an image from a diffusion model a record of a real event?

No. It is generated from learned patterns. Verify provenance and factual claims separately.

## Related Resources

### Related terms

- [Vision-language models](/en/AIWiki/vision-language-model/)
- [Video language models](/en/AIWiki/video-language-model/)
- [Content credentials (C2PA)](/en/AIWiki/content-credentials-c2pa/)

### References

- [Denoising Diffusion Probabilistic Models](https://arxiv.org/abs/2006.11239)
