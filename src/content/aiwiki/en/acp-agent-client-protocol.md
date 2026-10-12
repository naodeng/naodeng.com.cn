---
title: "ACP (Agent Client Protocol)"
titleZh: "ACP（Agent Client Protocol）"
slug: "acp-agent-client-protocol"
lang: "en"
summary: "A protocol for interoperability between agent runtimes and client tools."
topic: "ai-vibe-coding"
aliases:
  - "ACP (Agent Client Protocol)"
  - "ACP（Agent Client Protocol）"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "cross-surface-operation"
  - "remote-control"
  - "permission-policies-allowed-command-list"
  - "subagents"
lastReviewedAt: "2026-10-12"
---
# Agent Client Protocol (ACP)

## Quick Take

- **In brief:** ACP defines how a coding agent and a code editor or client exchange requests and events.
- **Useful for:** Connecting compatible editors and agents through a shared protocol.
- **Main limit:** The protocol does not define every product feature or grant tool permissions.

## Overview

An editor can use ACP to start an agent session, send a coding request, and receive progress or results. The editor and agent still decide which tools and capabilities they support.

## Core Definition

The Agent Client Protocol (ACP) is a protocol for communication between coding agents and agent clients, such as code editors. Its protocol messages use JSON-RPC 2.0. The protocol defines operations such as initialization, session handling, prompts, and updates.

## Background and Evolution

ACP addresses the need to connect coding agents to more than one compatible client. It is a published protocol with versioned documentation. Support can differ between clients and agents.

## How It Works

1. The client and agent initialize and exchange supported capabilities.
2. The client opens or selects a session.
3. The client sends a prompt or session operation.
4. The agent returns responses and may send progress updates or request client input.
5. The client displays results and applies its own permission and user-interface rules.

Exact methods and behavior depend on the protocol version and implementation.

## Applications in Software Development and Testing

An editor can connect to an ACP-compatible coding agent without using a vendor-specific chat interface. A team can test connection setup, session continuity, tool approvals, cancellation, and error handling.

## Strengths and Limitations

A shared protocol can reduce client-specific integration work. It does not ensure that two implementations support the same optional capabilities. It also does not define the agent's quality, safety, or authorization policy.

## Comparison with Similar Terms

ACP connects a coding agent with a client. MCP connects an AI application with external tools and data sources. A2A supports communication between agents. These protocols address different connections.

## Best Practices

Check the protocol version and capability negotiation. Test supported and unsupported methods. Keep user approvals and operating-system permissions in the client or execution environment.

## Common Pitfalls

Do not infer that an ACP connection grants file or shell access. Do not assume all clients support every method. Confirm how the implementation handles errors, cancellation, and user approval.

## FAQ

### Does ACP decide which actions an agent may perform?

No. ACP defines communication. The client, agent, and execution environment enforce their own permissions.

## Related Resources

### Related Terms

- [Cross-surface operation](/en/AIWiki/cross-surface-operation/)
- [Remote control](/en/AIWiki/remote-control/)
- [Permission policies](/en/AIWiki/permission-policies-allowed-command-list/)
- [Subagents](/en/AIWiki/subagents/)

### External References

- [Agent Client Protocol: Protocol overview](https://github.com/agentclientprotocol/agent-client-protocol/blob/main/docs/protocol/v1/overview.mdx)
