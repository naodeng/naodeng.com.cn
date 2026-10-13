---
title: "Agent Authorization"
titleZh: "Agent 授权与委托"
slug: "agent-authorization"
lang: "en"
summary: "Agent authorization defines whose behalf it may act on, which actions and resources are in scope, for how long, and how access is revoked."
topic: "ai-agents"
aliases:
  - "Agent delegation"
  - "Delegated authorization"
tags:
  - "Agent security"
  - "Permissions"
related:
  - "ai-agent-identity"
  - "human-in-the-loop"
  - "agent-sandboxing"
lastReviewedAt: "2026-10-12"
---

# Agent Authorization

## Quick Take

- **In brief:** Authorization defines what an agent may do, for whom, and for how long.
- **Useful for:** Delegating a narrow task without sharing a full account.
- **Main limit:** A model's request is not permission to act.

## Overview

An agent that organizes test tickets may need to read one project and create drafts. It does not need access to every project, billing settings, or destructive actions.

## Core Definition

Agent authorization grants an agent specific actions while limiting the principal, resources, conditions, and duration involved.

## Background and Evolution

Tool-using agents can act on files, services, and accounts. This makes ordinary access-control questions apply to automated actors as well as people.

## How It Works

The system identifies the actor, checks the delegation and its scope, then evaluates each requested operation against policy. It can require a fresh approval for a high-impact action and record who or what performed it.

## Applications in Software Development and Testing

A coding agent may read a repository and run tests, while a separate short-lived grant allows it to open a pull request. Production deployment can require another approval.

## Strengths and Limitations

Narrow, time-limited permissions reduce the impact of mistakes and make actions easier to audit. Authorization cannot determine whether a model's plan is technically sound.

## Comparison with Similar Terms

Identity answers “which actor is this?” Authorization answers “what may this actor do?” A sandbox limits the environment in which an allowed action runs.

## Best Practices

Set the smallest useful scope, use short-lived credentials, check permissions on each operation, and provide a clear revocation path.

## Common Pitfalls

Do not reuse a broad user token for every task. Do not treat one approval as permanent consent for later actions.

## FAQ

### Does one user approval let an agent keep access?

Not by default. The grant should state its scope and expiry, and the system should support revocation.

## Related Resources

### Related terms

- [AI agent identity](/en/AIWiki/ai-agent-identity/)
- [Human-in-the-loop](/en/AIWiki/human-in-the-loop/)
- [Agent sandboxing](/en/AIWiki/agent-sandboxing/)

### References

- [NIST: Software and AI Agent Identity and Authorization](https://www.nccoe.nist.gov/sites/default/files/2026-02/accelerating-the-adoption-of-software-and-ai-agent-identity-and-authorization-concept-paper.pdf)
