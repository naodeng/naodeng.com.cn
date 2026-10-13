---
title: "Agent Card"
titleZh: "Agent Card"
slug: "agent-card"
lang: "en"
summary: "An A2A Agent Card machine-readably describes a remote agent's endpoint, capabilities, skills, and authentication requirements."
topic: "ai-agents"
aliases:
  - "Agent capability card"
tags:
  - "A2A"
  - "Agents"
related:
  - "a2a-protocol"
  - "agent-authorization"
  - "ai-agent-identity"
  - "agent-protocol-conformance-testing"
lastReviewedAt: "2026-10-12"
---

# Agent Card

## Quick Take

- **In brief:** An Agent Card is a machine-readable description of an A2A service.
- **Useful for:** Helping a client discover an agent's endpoint and advertised capabilities.
- **Main limit:** A card describes a service; it does not prove that the service works.

## Overview

Before calling a remote agent, a client needs to know where to send a request and what the service claims to support. An Agent Card provides that information in a form software can read.

## Core Definition

An A2A Agent Card describes a service's identity, interfaces, capabilities, skills, and authentication requirements.

## Background and Evolution

Service registries have long used machine-readable descriptions to support discovery. A2A uses an Agent Card to make agent capabilities discoverable across independently built systems.

## How It Works

A service publishes or shares a card. A client reads its endpoint, input and output modes, skills, and authentication details, then decides whether to call it. The service can expose a public card or a restricted extended card.

## Applications in Software Development and Testing

A test client can read a card, verify required fields, and test the listed operations against the service. These checks help catch stale endpoints or missing authentication before a workflow depends on them.

## Strengths and Limitations

A structured card is easier to inspect and validate than informal documentation. It can become stale, and its advertised capabilities still require runtime testing.

## Comparison with Similar Terms

An Agent Card describes one agent service. A2A defines the interactions between services. A service registry may store or distribute cards but is not the protocol itself.

## Best Practices

Version the card with the service, validate its schema in CI, protect private cards, and avoid placing secrets in the document.

## Common Pitfalls

Do not assume that a valid card proves the endpoint is available, authorized for the caller, or capable of producing correct results.

## FAQ

### Does an Agent Card have to be public?

No. A service can share it through public discovery, an enterprise registry, or private configuration.

## Related Resources

### Related terms

- [A2A protocol](/en/AIWiki/a2a-protocol/)
- [Agent authorization](/en/AIWiki/agent-authorization/)
- [AI agent identity](/en/AIWiki/ai-agent-identity/)

### References

- [A2A Agent Discovery](https://a2a-protocol.org/latest/topics/agent-discovery/)
