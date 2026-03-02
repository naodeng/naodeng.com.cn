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
lastReviewedAt: "2026-03-02"
---

# ACP (Agent Client Protocol)

> One-line definition: A standardized communication protocol used for state synchronization, capability collaboration, and command dispatching between an AI Agent runtime and its IDE or other client tools.

## Quick Take

- Problem it solves: Set guardrails for safety, compliance, and consistency.
- When to use: Use it for enterprise rollout and permission control.
- Boundary: Not suitable for speed-only workflows with no governance.

## Overview

`ACP (Agent Client Protocol)` is often viewed as a niche feature, but it actually solves practical delivery problems: unreliable outputs, weak reuse, and poor traceability. From a science-communication perspective, it helps move AI from “answers” to “operational outcomes.”

## Core Definition

### Formal Definition

ACP is an asynchronous communication model based on JSON-RPC or similar structures. It defines a set of standard Schemas, allowing different Agent runtimes to integrate seamlessly with various developer clients. Key topics include Capability Negotiation, Streaming State Synchronization, and deterministic Resource Locking.

### Plain-Language Explanation

Think of `ACP (Agent Client Protocol)` as a reliability checkpoint in an AI pipeline. Its real value is not being “advanced,” but making outputs safer, repeatable, and easier to operate in production.

## Background and Evolution

### Origin

- **Context**: Early AI plugins were "point-to-point" hardcoded, requiring a total rewrite for every new editor and failing to support complex, long-running Agent tasks.
- **Focus**: Achieving "Cross-platform portability" for Agents and ensuring data consistency under high-concurrency operations.

### Evolution

- **Stage 1.0 (Command Dispatch)**: AI sends a block of text; a human manually copies and executes it.
- **Stage 2.0 (API Hooks)**: IDEs provide simple APIs for plugins to use.
- **Stage 3.0 (ACP Era)**: The Agent becomes an independent entity, reversely controlling client functions through a standardized protocol, enabling true "Human-Agent Handoff."

## How It Works

1. **Handshake & Capability Negotiation**: When the Agent connects to the client, they first communicate "what I can do" and "what tools you can provide."
2. **Request-Response Loop**: The Agent issues an `fs.read` command; the client returns the file content (Base64 or text).
3. **Event-Driven Stream**: The client pushes user behaviors (e.g., cursor movement) as an event stream to the Agent.
4. **Gatekeeping**: The ACP protocol layer integrates permission validation, ensuring every high-risk action taken by the Agent complies with security policies.

## Applications in Software Development and Testing

- **Multi-Agent Collaborative Workflow**: An Agent responsible for writing code and an Agent responsible for running tests share the same ACP channel.
- **Remote Debugging & Hot-plugging**: Developers can run an Agent in the cloud and connect it to a local IDE interface via ACP.
- **Automated Evaluation Collection**: Test Agents automatically capture exceptions/errors in the IDE via the protocol layer and send them back for analysis.

## Strengths and Limitations

### Strengths

- **Decoupled Performance**: The Agent backend and UI frontend can upgrade independently without mutual interference.
- **Cross-Platform Consistency**: The same Agent logic provides a consistent experience across VS Code, Cursor, or Web-based IDEs.
- **Auditability**: All communication packets can be logged and replayed, facilitating bug root-cause analysis.

### Limitations and Risks

- **Communication Latency**: If protocol parsing is too slow, it can lead to a "laggy" feeling during high-frequency interaction.
- **Security Boundary Challenges**: If the protocol is abused, an Agent might manipulate sensitive files without the user's knowledge.
- **Version Mismatch**: When the client updates the protocol but the Agent has not yet adapted, core functions may fail.

## Comparison with Similar Terms

| Dimension | ACP (Agent Client Protocol) | MCP (Model Context Protocol) | LSP (Language Server Protocol) |
| :--- | :--- | :--- | :--- |
| **Focus** | **Action & Runtime Collaboration** | **Context & Resource Access** | Static Syntax & Type Analysis |
| **Communicators**| Agent <-> IDE | Model <-> External Data | Editor <-> Tooling |
| **Typical Actions**| Commands, State Mgmt | Read Docs, Query DB | Go to Definition, Autocomplete|

## Best Practices

- **Define Granular Schemas**: Cover enough tool capabilities while keeping the protocol layer lean.
- **Enable Heartbeat Checks**: For long-running tasks, ensure ACP connection stability to prevent the Agent from "going rogue."
- **Tiered Permission Management**: Implement "Auto-approve" vs. "Manual Confirm" at the protocol layer for specific commands.

## Common Pitfalls

- **Confusing ACP with Standard APIs**: APIs are passively called, whereas ACP typically supports "Bidirectional Communication" initiated by the Agent.
- **Ignoring Error Handling**: If an Agent issues a command not supported by the client, the entire "Vibe" will collapse without graceful rollback logic.

## FAQ

### Q1: Should beginners adopt this immediately?

A: Not always. For simple tasks, start lightweight; for team workflows or production-risk tasks, adopt it early.

### Q2: How do teams avoid overengineering with too many mechanisms?

A: Start with clear metrics, add mechanisms incrementally, and change one variable at a time.

## Related Resources

### Related Terms

- [cross-surface-operation](/en/AIWiki/cross-surface-operation/)
- [remote-control](/en/AIWiki/remote-control/)
- [permission-policies-allowed-command-list](/en/AIWiki/permission-policies-allowed-command-list/)
- [subagents](/en/AIWiki/subagents/)

### External References

- [Cursor Protocol Overview](https://cursor.com/docs)
- [Agentic Interoperability Standards](https://docs.qoder.com/)
