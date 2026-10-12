---
title: "AI Agent 身份"
titleEn: "AI Agent Identity"
titleZh: "AI Agent 身份"
slug: "ai-agent-identity"
lang: "zh-cn"
summary: "Agent 身份标识执行操作的软件主体，使平台能区分自动化实体、用户和服务并记录责任链。"
topic: "ai-agents"
aliases:
  - "智能体身份"
tags:
  - "Agent 安全"
  - "身份治理"
related:
  - "agent-authorization"
  - "agent-card"
  - "permission-policies-allowed-command-list"
  - "genai-observability"
lastReviewedAt: "2026-10-12"
---

# AI Agent 身份

## 科普速读

- **它是什么：** Agent 身份标识发起请求的自动化主体。
- **适合什么场景：** 控制访问权限，并在日志中追踪操作。
- **主要边界：** 身份验证通过不代表主体可信。

## 概览

如果 CI Agent 修改了仓库，审计记录应区分它、启动任务的开发者和实际运行任务的服务。

## 核心定义

AI Agent 身份是系统用于识别自动化主体的凭证或标识。

## 背景与发展

自动化软件一直使用服务身份。Agent 增加了委托和工具调用，因此记录可能要关联 Agent、用户、工作流和服务。

## 工作机制（How It Works）

可信签发方创建身份凭证。平台验证凭证、关联到具体主体，再将该身份用于权限检查和审计记录。

## 在软件测试与开发中的应用

为代码 Agent 分配独立身份来访问仓库。这样日志可以记录哪个 Agent 创建了 Pull Request、运行了测试或修改了文件。

## 优势与局限

独立身份能提高操作可追溯性，也便于设置范围明确的权限。身份本身无法证明 Agent 的代码、模型或操作请求是安全的。

## 与相近术语对比

身份验证检查当前请求来自谁；授权决定该主体能做什么。身份只是信任判断的一项信息，不是信任结论。

## 实施建议（Best Practices）

尽量使用独立身份和短期凭证，记录签发方与负责人，并明确凭证撤销流程。

## 常见误区（Pitfalls）

不要让多个 Agent 共用一个人的令牌。共享凭证会让日志无法准确区分执行主体。

## FAQ

### Agent 身份验证通过，就可以信任它吗？

不能。验证能识别主体；信任还取决于权限、软件来源、运行控制和任务风险。

## 相关资源

### 相关词条

- [Agent 授权](/zh-cn/AIWiki/agent-authorization/)
- [Agent Card](/zh-cn/AIWiki/agent-card/)
- [权限策略](/zh-cn/AIWiki/permission-policies-allowed-command-list/)

### 参考资料

- [NIST：Software and AI Agent Identity and Authorization](https://www.nccoe.nist.gov/sites/default/files/2026-02/accelerating-the-adoption-of-software-and-ai-agent-identity-and-authorization-concept-paper.pdf)
