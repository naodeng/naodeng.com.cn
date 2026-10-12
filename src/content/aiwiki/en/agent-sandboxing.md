---
title: "Agent Sandboxing"
titleZh: "Agent 工具沙箱"
slug: "agent-sandboxing"
lang: "en"
summary: "An agent sandbox restricts file, network, and resource access in an isolated environment to limit the impact of code and tool calls."
topic: "ai-agents"
aliases:
  - "Tool sandbox"
tags:
  - "Agent security"
  - "Isolated execution"
related:
  - "permission-policies-allowed-command-list"
  - "agent-authorization"
  - "prompt-injection"
lastReviewedAt: "2026-10-12"
---

# Agent Sandboxing

## Quick Take

- **In brief:** A sandbox restricts the environment in which an agent's code or tools run.
- **Useful for:** Limiting file, network, and resource access during development tasks.
- **Main limit:** Isolation reduces impact; it does not remove every security risk.

## Overview

A coding assistant may need to install dependencies and run tests. A sandbox can let it work in a temporary directory without granting access to the whole machine.

## Core Definition

Agent sandboxing runs code or tools in an isolated environment with controlled access to files, networks, and computing resources.

## Background and Evolution

Sandboxing is an established software security technique. Agent systems use it to contain actions from generated code and tool calls that may be mistaken, unsafe, or influenced by hostile input.

## How It Works

The host sets file permissions, network rules, resource limits, and credential access before execution. A disposable container or virtual machine can be removed after the task, while the host keeps control of allowed operations.

## Applications in Software Development and Testing

Run generated code and tests in a temporary workspace with restricted network access. Test path traversal, secret exposure, resource exhaustion, and cleanup behavior.

## Strengths and Limitations

Isolation can limit damage from a faulty command or dependency. Misconfiguration, vulnerabilities in the isolation layer, or overly broad credentials can still expose data or systems.

## Comparison with Similar Terms

A command allowlist says which commands may run. A sandbox limits what those commands can reach. Authorization decides who may request an action.

## Best Practices

Default to no network access, mount only the files the task needs, avoid passing production secrets, set resource limits, and destroy temporary environments.

## Common Pitfalls

A prompt such as “do not read .env” is not an operating-system control. Do not treat that instruction as a substitute for enforced isolation.

## FAQ

### Does a sandbox remove the need for authorization?

No. The sandbox limits the environment; identity and authorization control who may perform each action.

## Related Resources

### Related terms

- [Permission policies and allowed command lists](/en/AIWiki/permission-policies-allowed-command-list/)
- [Agent authorization](/en/AIWiki/agent-authorization/)
- [Prompt injection](/en/AIWiki/prompt-injection/)

### References

- [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
- [MCP Security Best Practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices)
