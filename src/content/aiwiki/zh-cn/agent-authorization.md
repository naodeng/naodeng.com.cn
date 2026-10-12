---
title: "Agent 授权与委托"
titleEn: "Agent Authorization"
titleZh: "Agent 授权与委托"
slug: "agent-authorization"
lang: "zh-cn"
summary: "Agent 授权规定自动化主体可代表谁、在什么范围和期限内执行哪些操作，以及如何撤销权限。"
topic: "ai-agents"
aliases:
  - "智能体授权"
  - "委托授权"
tags:
  - "Agent 安全"
  - "权限"
related:
  - "ai-agent-identity"
  - "human-in-the-loop"
  - "agent-sandboxing"
lastReviewedAt: "2026-10-12"
---

# Agent 授权与委托

## 科普速读

- **它是什么：** 授权规定 Agent 能代表谁、执行什么操作以及权限持续多久。
- **适合什么场景：** 只委托一项具体工作，不交出整个账号。
- **主要边界：** 模型提出操作请求，不代表系统已经授予权限。

## 概览

帮忙整理测试工单的 Agent 可能只需读取一个项目并创建草稿。它不需要访问所有项目、账单设置或删除操作。

## 核心定义

Agent 授权把特定操作权限授予 Agent，同时限定授权主体、资源、条件和有效期限。

## 背景与发展

能调用工具的 Agent 可以操作文件、服务和账号。因此，传统访问控制也必须明确约束自动化主体。

## 工作机制（How It Works）

系统先确认调用主体，再检查委托范围，并按策略逐次判断请求操作。高影响操作可以要求重新确认；审计记录应说明是谁或什么系统执行了操作。

## 在软件测试与开发中的应用

代码 Agent 可以读取仓库并运行测试；另一个短时授权再允许它创建 Pull Request。若要部署到生产环境，可要求额外审批。

## 优势与局限

范围明确、期限较短的授权能减轻错误造成的影响，也便于追踪操作。授权机制不能判断模型提出的方案在技术上是否正确。

## 与相近术语对比

身份回答“这是哪个主体”；授权回答“这个主体能做什么”；沙箱则限制获准操作可以访问的执行环境。

## 实施建议（Best Practices）

只授予完成任务所需的最小权限，使用短期凭证，逐次检查操作，并提供明确的撤销方式。

## 常见误区（Pitfalls）

不要让所有任务共用一个权限宽泛的用户令牌。也不要把一次批准视为后续操作的永久授权。

## FAQ

### 用户批准一次操作后，Agent 就能持续访问吗？

不能默认如此。授权应写明范围和期限，并支持撤销。

## 相关资源

### 相关词条

- [AI Agent 身份](/zh-cn/AIWiki/ai-agent-identity/)
- [人在回路中](/zh-cn/AIWiki/human-in-the-loop/)
- [Agent 工具沙箱](/zh-cn/AIWiki/agent-sandboxing/)

### 参考资料

- [NIST：Software and AI Agent Identity and Authorization](https://www.nccoe.nist.gov/sites/default/files/2026-02/accelerating-the-adoption-of-software-and-ai-agent-identity-and-authorization-concept-paper.pdf)
