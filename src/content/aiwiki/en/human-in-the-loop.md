---
title: "Human-in-the-loop (HITL)"
titleZh: "人机协同（HITL）"
slug: "human-in-the-loop"
lang: "en"
summary: "A control strategy where human review remains part of automated AI decisions, especially for high-risk outputs."
topic: "ai-vibe-coding"
aliases:
  - "HITL"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "agentic-workflow"
  - "self-healing-code"
  - "ai-agent"
lastReviewedAt: "2026-10-12"
---
# Human-in-the-Loop

## Quick Take

- **In brief:** Human-in-the-loop design gives a person a defined role in an AI workflow.
- **Useful for:** Decisions that need context, approval, or accountability.
- **Main limit:** Human review can be slow or inconsistent if the task and evidence are unclear.

## Overview

An assistant may draft a database migration. A person reviews the plan and approves execution because the change can affect data.

## Core Definition

Human-in-the-loop (HITL) is a workflow design in which a person provides input, reviews a result, or approves an action at defined points. The role can be required for some tasks and unnecessary for others.

## Background and Evolution

Human review has long been part of automated decision systems. AI workflows use it to handle uncertainty, high-impact actions, or judgments that need domain context. There is no single required review pattern.

## How It Works

1. Define which decisions need human input.
2. Present the person with the request, evidence, and possible impact.
3. Let the person approve, reject, edit, or request more information.
4. Record the decision when the workflow needs an audit trail.
5. Route uncertain or high-impact cases to the appropriate reviewer.

## Applications in Software Development and Testing

A reviewer can approve a production deployment, inspect an AI-generated security fix, or resolve conflicting test evidence. Low-risk drafts may need a lighter review than changes to data or infrastructure.

## Strengths and Limitations

Human input can add domain context and catch errors that automated checks miss. Reviewers can also be overloaded, inconsistent, or given too little information. A review step does not make an unsafe system safe by itself.

## Comparison with Similar Terms

HITL describes a person's role in a workflow. Human oversight is broader and may include monitoring and governance. A permission policy controls whether an action is allowed. A feedback label changes model training only if a separate training process uses it.

## Best Practices

Set review points based on impact and uncertainty. Show the reviewer relevant evidence and consequences. Give reviewers a way to reject or pause an action. Monitor review quality and workload.

## Common Pitfalls

Do not send every decision to a person without prioritization. Do not assume clicking “approve” means informed review. Do not treat feedback as model training unless that process is defined.

## FAQ

### Should a person review every AI action?

No. Set review requirements according to impact, uncertainty, and the available safeguards.

## Related Resources

### Related Terms

- [agentic-workflow](https://inaodeng.com/en/AIWiki/agentic-workflow/)
- [self-healing-code](https://inaodeng.com/en/AIWiki/self-healing-code/)
- [ai-agent](https://inaodeng.com/en/AIWiki/ai-agent/)

### References
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [OECD AI principles overview](https://oecd.ai/en/ai-principles)
