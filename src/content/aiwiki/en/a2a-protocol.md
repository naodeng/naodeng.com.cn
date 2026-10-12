---
title: "Agent-to-Agent Protocol"
titleZh: "Agent-to-Agent（A2A）协议"
slug: "a2a-protocol"
lang: "en"
summary: "A2A defines interoperable capability discovery, task interaction, and result exchange between independent agent systems."
topic: "ai-agents"
aliases:
  - "A2A"
  - "Agent2Agent"
tags:
  - "Agents"
  - "Interoperability"
related:
  - "multi-agent-orchestration"
  - "acp-agent-client-protocol"
  - "model-context-protocol-mcp"
  - "agent-protocol-conformance-testing"
lastReviewedAt: "2026-10-12"
---

# Agent-to-Agent Protocol

## Quick Take

- **In brief:** A2A lets separate agent systems exchange tasks and results.
- **Useful for:** Handing work between products or teams that use different agent frameworks.
- **Main limit:** A shared protocol does not make an agent trustworthy or correct.

## Overview

A support agent may ask an order-system agent to investigate a refund. A2A gives the two systems a common way to describe capabilities, send work, and return results.

## Core Definition

A2A is an open protocol for independent agent systems to discover capabilities, exchange messages, and collaborate on tasks.

## Background and Evolution

A2A addresses a practical problem: organizations often build agents with different frameworks and cannot share internal state. Version 1.0.0 defines a stable protocol contract; implementations can still differ in transport and deployment.

## How It Works

A client discovers an agent's description, checks whether it supports the needed task, then sends a message or task request. The remote agent can return a result or report task progress before it finishes.

## Applications in Software Development and Testing

A development assistant can delegate a dependency audit to a security agent, then receive findings as a separate result. The caller should retain the links between the request, the agent, and the returned evidence.

## Strengths and Limitations

A shared contract can reduce custom integrations across frameworks. It does not define an organization's trust policy, guarantee compatible business meanings, or verify the returned work.

## Comparison with Similar Terms

MCP commonly connects a model application to tools and data. Multi-agent orchestration describes how a system assigns and coordinates work. A2A describes messages between independent agents.

## Best Practices

Pin the protocol version, authenticate each remote service, limit shared data, and validate results before using them in another workflow.

## Common Pitfalls

Do not treat protocol compatibility as authorization. A technically valid call can still send sensitive data to the wrong agent or trigger an unsafe action.

## FAQ

### Does A2A make a remote agent trustworthy?

No. Callers must check the agent's identity, permissions, and output.

## Related Resources

### Related terms

- [Multi-agent orchestration](/en/AIWiki/multi-agent-orchestration/)
- [Agent Client Protocol](/en/AIWiki/acp-agent-client-protocol/)
- [MCP](/en/AIWiki/model-context-protocol-mcp/)

### References

- [A2A official specification 1.0.0](https://a2a-protocol.org/v1.0.0/specification/)
