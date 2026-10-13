---
title: "技能"
titleEn: "Skill"
slug: "skill"
lang: "zh-cn"
summary: "为智能体提供可复用能力的封装，定义“能做什么、如何做、用什么工具做”。"
topic: "ai-vibe-coding"
aliases:
  - "Agent skill"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "ai-agent"
  - "model-context-protocol-mcp"
  - "rules-cursorrules"
lastReviewedAt: "2026-10-12"
---
# AI Agent 技能（Skills）

## 科普速读

- **它是什么：** Agent 技能将任务说明和相关资源打包，用于重复处理某类任务。
- **适合什么场景：** 为 Agent 的专业工作流提供一致指导。
- **主要边界：** 技能格式、发现和加载方式取决于产品。

## 概览

测试技能可以说明如何复现失败、运行哪些检查以及如何报告结果。Agent 仍需具备相应工具和权限。

## 核心定义

AI Agent 技能是一组结构化的任务指令。技能还可以包含参考文件、示例或脚本。宿主决定如何发现和加载技能。技能本身不会授予权限。

## 背景与发展

Agent 开始处理专业任务后，团队需要复用单条提示词之外的工作说明。不同产品逐渐定义了各自的技能格式和加载规则。因此，“技能”也可能指某个产品的特定功能。

## 工作机制（How It Works）

1. 开发者编写任务指导并明确适用范围。
2. 按宿主要求的格式保存技能。
3. 宿主或用户让任务可以使用该技能。
4. Agent 使用现有上下文和工具遵循指导。
5. 人员检查结果，并在要求变化时更新技能。

## 在软件测试与开发中的应用

技能可以描述测试分诊流程：检查失败、定位相关代码、重新运行聚焦检查并报告证据。应及时更新命令和假设。

## 优势与局限

技能可以让重复工作流更容易执行和维护。指令也可能被忽略、与新要求冲突，或依赖当前不可用的工具。

## 与相近术语对比

技能封装指导，也可能包含辅助资源。规则是在指定范围内生效的指令。自定义命令用于启动命名任务。MCP 工具通过协议提供具体操作。

## 实施建议（Best Practices）

保持每项技能职责明确。说明何时使用和应产生什么结果。将指令与参考资料分开。用有代表性的任务测试技能，并单独检查工具权限。

## 常见误区（Pitfalls）

不要假设每个 Agent 都会自动加载技能。不要在技能文件中放密钥。不要把“说明使用工具”写成“技能授予工具权限”。

## FAQ

### 技能会赋予 Agent 工具访问权吗？

不会。工具访问由宿主和权限设置控制。技能只能说明何时使用当前可用的工具。

## 相关资源

### 相关词条

- [ai-agent](https://inaodeng.com/zh-cn/AIWiki/ai-agent/)
- [model-context-protocol-mcp](https://inaodeng.com/zh-cn/AIWiki/model-context-protocol-mcp/)
- [rules-cursorrules](https://inaodeng.com/zh-cn/AIWiki/rules-cursorrules/)

### 参考资料
- [MCP docs (tools/connectors context)](https://docs.anthropic.com/en/docs/mcp)
- [Cursor rules docs (reusable behavior control)](https://docs.cursor.com/context/rules)
