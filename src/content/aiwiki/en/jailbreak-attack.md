---
title: "Jailbreak Attacks"
titleZh: "越狱攻击"
slug: "jailbreak-attack"
lang: "en"
summary: "Jailbreak attacks use prompts, roles, or transformed inputs to persuade a model to bypass developer-set safety behavior."
topic: "ai-safety-quality"
aliases:
  - "Jailbreak"
  - "Safety-policy bypass"
tags:
  - "LLM security"
  - "Red teaming"
related:
  - "prompt-injection"
  - "ai-red-teaming"
  - "agent-evals"
lastReviewedAt: "2026-10-12"
---

# Jailbreak Attacks

## Quick Take

- **In brief:** A jailbreak tries to make a model bypass intended safety behavior.
- **Useful for:** Testing whether model safeguards hold under adversarial inputs.
- **Main limit:** A model refusal does not control system permissions.

## Overview

An attacker may use a role, a sequence of requests, or transformed text to influence a model's response. If the model can call tools, a behavior failure can affect data or system operations.

## Core Definition

A jailbreak attack attempts to persuade a model to bypass intended safety behavior or refusal boundaries.

## Background and Evolution

Jailbreak techniques change as models and safeguards change. A test result applies to the tested model, configuration, and input; it should not be generalized to every system.

## How It Works

The attack shapes context or request wording so the model responds differently from its intended policy. External tools and permissions determine whether that response can cause a real-world action.

## Applications in Software Development and Testing

Red-team a coding assistant with approved adversarial cases. Record the model version, instructions, tools, and results, then retest after a safeguard or configuration change.

## Strengths and Limitations

Testing can reveal gaps in model behavior and safety controls. No single prompt filter or refusal behavior covers every attack path.

## Comparison with Similar Terms

Jailbreaks target the model's behavioral boundaries. Prompt injection supplies hostile instructions through user input or external content. The two can occur together.

## Best Practices

Use defense in depth: validate inputs, limit tool permissions, require approval for high-impact actions, and test legitimate tasks as well as attacks.

## Common Pitfalls

Do not treat a refusal as an access-control boundary. Do not assume one successful bypass applies to all models or versions.

## FAQ

### Can a jailbreak test prove that a model is safe?

No. It can find failures in the tested scope; continue testing after model or system changes.

## Related Resources

### Related terms

- [Prompt injection](/en/AIWiki/prompt-injection/)
- [AI red teaming](/en/AIWiki/ai-red-teaming/)
- [AI agent evaluations](/en/AIWiki/agent-evals/)

### References

- [OWASP LLM Top 10 2025](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
