---
title: "Agent Card"
titleEn: "Agent Card"
titleZh: "Agent Card"
slug: "agent-card"
lang: "zh-cn"
summary: "A2A Agent Card 用机器可读的描述公开远端 Agent 的端点、能力、技能和认证要求。"
topic: "ai-agents"
aliases:
  - "Agent 能力卡"
tags:
  - "A2A"
  - "Agent"
related:
  - "a2a-protocol"
  - "agent-authorization"
  - "ai-agent-identity"
  - "agent-protocol-conformance-testing"
lastReviewedAt: "2026-10-12"
---

# Agent Card

## 科普速读

- **它是什么：** Agent Card 是 A2A 服务的机器可读说明。
- **适合什么场景：** 让客户端发现服务地址和对外声明的能力。
- **主要边界：** 卡片描述服务，不证明服务实际可用。

## 概览

调用远端 Agent 前，客户端要知道请求发往哪里，以及服务声称支持什么。Agent Card 用软件可读取的格式提供这些信息。

## 核心定义

A2A Agent Card 描述服务的身份、接口、能力、技能和认证要求。

## 背景与发展

机器可读的服务描述早已用于服务发现。A2A 通过 Agent Card 描述 Agent 能力，让独立构建的系统更容易相互发现。

## 工作机制（How It Works）

服务发布或共享卡片。客户端读取端点、输入输出模式、技能和认证信息，再决定是否调用。服务可以公开普通卡片，也可以提供受访问控制的扩展卡片。

## 在软件测试与开发中的应用

测试客户端可以读取卡片、检查必填字段，并按卡片列出的操作调用服务。这有助于在工作流依赖服务前发现失效端点或缺少认证的问题。

## 优势与局限

结构化卡片比非正式说明更容易检查和验证。卡片可能过期，其中声明的能力仍须通过实际调用测试。

## 与相近术语对比

Agent Card 描述单个 Agent 服务；A2A 定义服务之间如何交互；服务注册表可以保存或分发卡片，但它本身不是 A2A 协议。

## 实施建议（Best Practices）

让卡片版本与服务保持同步，在 CI 中校验格式，保护内部卡片，并且不要在卡片中放密钥。

## 常见误区（Pitfalls）

卡片格式正确，不代表端点一定可用、调用者一定有权限，也不代表服务能给出正确结果。

## FAQ

### Agent Card 必须公开发布吗？

不必。可以通过公开发现、企业注册表或私有配置共享卡片。

## 相关资源

### 相关词条

- [A2A 协议](/zh-cn/AIWiki/a2a-protocol/)
- [Agent 授权](/zh-cn/AIWiki/agent-authorization/)
- [AI Agent 身份](/zh-cn/AIWiki/ai-agent-identity/)

### 参考资料

- [A2A Agent Discovery](https://a2a-protocol.org/latest/topics/agent-discovery/)
