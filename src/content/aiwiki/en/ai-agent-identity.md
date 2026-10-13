---
title: "AI Agent Identity"
titleZh: "AI Agent 身份"
slug: "ai-agent-identity"
lang: "en"
summary: "Agent identity identifies the software principal performing an action so platforms can distinguish automation, users, and services."
topic: "ai-agents"
aliases:
  - "Agent identity"
tags:
  - "Agent security"
  - "Identity governance"
related:
  - "agent-authorization"
  - "agent-card"
  - "permission-policies-allowed-command-list"
  - "genai-observability"
lastReviewedAt: "2026-10-12"
---

# AI Agent Identity

## Quick Take

- **In brief:** An agent identity names the automated actor behind a request.
- **Useful for:** Applying permissions and tracing actions in logs.
- **Main limit:** A verified identity does not prove trustworthiness.

## Overview

If a CI agent changes a repository, the audit trail should distinguish it from the developer who started the job and the service that ran it.

## Core Definition

An AI agent identity is a credential or identifier that a system uses to recognize an automated actor.

## Background and Evolution

Service identities already support automated software. Agent systems add delegation and tool use, so records may need to connect the agent, user, workflow, and service.

## How It Works

A trusted issuer creates an identity credential. A platform verifies it, links it to a principal, and uses that identity in permission checks and audit records.

## Applications in Software Development and Testing

Give a coding agent a separate identity for repository access. Logs can then show which agent opened a pull request, ran a test, or changed a file.

## Strengths and Limitations

Distinct identities improve accountability and support scoped access. They do not show whether the agent's code, model, or requested action is safe.

## Comparison with Similar Terms

Authentication checks which identity is making a request. Authorization decides what that identity may do. Identity is one input to a trust decision, not the decision itself.

## Best Practices

Use unique identities, short-lived credentials where possible, clear issuer and owner records, and a documented revocation process.

## Common Pitfalls

Do not share a human user's token with many agents. Shared credentials hide which actor performed an action.

## FAQ

### Can an agent be trusted once its identity is verified?

No. Verification identifies a principal; trust also depends on permissions, software provenance, runtime controls, and task risk.

## Related Resources

### Related terms

- [Agent authorization](/en/AIWiki/agent-authorization/)
- [Agent Card](/en/AIWiki/agent-card/)
- [Permission policies](/en/AIWiki/permission-policies-allowed-command-list/)

### References

- [NIST: Software and AI Agent Identity and Authorization](https://www.nccoe.nist.gov/sites/default/files/2026-02/accelerating-the-adoption-of-software-and-ai-agent-identity-and-authorization-concept-paper.pdf)
