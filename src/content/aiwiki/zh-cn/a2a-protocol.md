---
title: "Agent-to-Agent（A2A）协议"
titleEn: "Agent-to-Agent Protocol"
titleZh: "Agent-to-Agent（A2A）协议"
slug: "a2a-protocol"
lang: "zh-cn"
summary: "A2A 为独立 Agent 系统之间的能力发现、任务交互和结果传递定义互操作协议。"
topic: "ai-agents"
aliases:
  - "A2A"
  - "Agent2Agent"
tags:
  - "Agent"
  - "互操作"
related:
  - "multi-agent-orchestration"
  - "acp-agent-client-protocol"
  - "model-context-protocol-mcp"
  - "agent-protocol-conformance-testing"
lastReviewedAt: "2026-10-12"
---

# Agent-to-Agent（A2A）协议

## 科普速读

- **它是什么：** A2A 让彼此独立的 Agent 系统交换任务和结果。
- **适合什么场景：** 不同团队或框架之间需要移交工作时。
- **主要边界：** 协议一致不等于对方可信，也不等于结果正确。

## 概览

客服 Agent 可以请订单系统中的另一个 Agent 调查退款。A2A 为双方提供共同方式来描述能力、发送任务和返回结果。

## 核心定义

A2A 是一种开放协议，用于让独立的 Agent 系统发现能力、交换消息并协作处理任务。

## 背景与发展

组织常用不同框架构建 Agent，也不适合彼此共享内部状态。A2A 解决跨系统协作的接口问题。1.0.0 版本定义了稳定的协议契约，但传输和部署方式仍会因实现而异。

## 工作机制（How It Works）

调用方先发现远端 Agent 的描述，再确认它是否支持所需任务，然后发送消息或任务请求。对端可以直接返回结果，也可以先报告进度，完成后再提交结果。

## 在软件测试与开发中的应用

开发助手可以把依赖项审计交给安全 Agent，再接收独立的检查结果。调用方应保留请求、执行 Agent 和返回证据之间的关联。

## 优势与局限

共享契约可以减少不同框架之间的定制集成。它不负责制定组织的信任策略，也不保证业务含义一致或返回结果正确。

## 与相近术语对比

MCP 常把模型应用连接到工具和数据；多 Agent 编排描述系统如何分派和协调工作；A2A 描述独立 Agent 之间如何交换消息。

## 实施建议（Best Practices）

固定协议版本，验证每个远端服务的身份，限制共享数据，并在把结果传给后续流程前先做校验。

## 常见误区（Pitfalls）

不要把协议兼容当作授权。一次符合规范的调用，仍可能把敏感数据发给错误的 Agent，或触发不安全操作。

## FAQ

### A2A 能保证远端 Agent 可靠吗？

不能。调用方仍要检查对端身份、权限和输出。

## 相关资源

### 相关词条

- [多智能体编排](/zh-cn/AIWiki/multi-agent-orchestration/)
- [Agent Client Protocol](/zh-cn/AIWiki/acp-agent-client-protocol/)
- [MCP](/zh-cn/AIWiki/model-context-protocol-mcp/)

### 参考资料

- [A2A 官方规范 1.0.0](https://a2a-protocol.org/v1.0.0/specification/)
