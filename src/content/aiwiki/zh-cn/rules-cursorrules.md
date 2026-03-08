---
title: "规则 / .cursorrules"
titleEn: "Rules / .cursorrules"
slug: "rules-cursorrules"
lang: "zh-cn"
summary: "用于约束智能体行为、代码风格和执行边界的项目级或用户级指令文件。"
topic: "ai-vibe-coding"
aliases:
  - "Cursor rules"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "rule"
  - "skill"
  - "ai-agent"
  - "prompt-driven-development"
lastReviewedAt: "2026-03-02"
---

# 规则 / .cursorrules（Rules / .cursorrules）

> 一句话定义：用于在 IDE 级别约束 AI 智能体行为、定义编码规范并自动化项目上下文的配置文件。

## 科普速读

- 解决问题：建立 AI 执行能力与治理边界。
- 适用场景：用于工具调用、规则控制和多步任务执行。
- 使用边界：没有权限和审计机制时风险较高。

## 概览

`规则 / .cursorrules` 的价值不在于概念本身，而在于它能解决真实工程问题：稳定性、可解释性和可协作性。科普视角下，理解它等于理解 AI 研发流程里的一个关键环节。

## 核心定义

### 标准定义

`.cursorrules` 是存放于项目根目录的一个特殊指令文件，它被 Cursor 编辑器自动加载并作为每一轮对话的“系统级提示词”。它允许开发者定义全局约束、常用文档库引用以及在不同文件类型下 AI 应遵循的特定规则。

### 通俗解释

把它理解为“AI 工程中的一个基础控制点”：它帮助团队减少随机性、提升复用性，并把经验沉淀成可执行的方法。

## 背景与发展

### 起源

- **提出背景**：随着 AI IDE 深入到项目全局，开发者发现每次开启新对话都要重复交待背景（如：“我是用 Next.js 14 的，记得用 App Router”）非常低效。
- **关注重点**：如何实现“一次配置，全域生效”的约束机制。

### 演进

- **1.0 阶段（隐藏文件）**：仅通过根目录的 `.cursorrules` 文件进行文本描述。
- **2.0 阶段（可视化管理）**：Cursor 引入了 Settings 中的 Rules 界面，支持按需启用、分级管理（全局规则 vs. 项目规则）。
- **3.0 阶段（自动生成）**：AI 开始能够根据现有代码库自动“学习”并生成建议的 `.cursorrules`。

## 工作机制（How It Works）

1. **自动挂载**：只要文件存在，Cursor 在向模型发送请求时会自动将其内容拼接在 System Prompt 之后。
2. **上下文过滤**：AI 会根据当前打开的文件路径，自动匹配 `.cursorrules` 中定义的特定规则（如：如果是 `.test.ts` 文件，则应用测试相关的规则）。
3. **指令合并**：将用户的即时 Prompt 与 `.cursorrules` 中的长效规则进行冲突检测并执行。

## 在软件测试与开发中的应用

- **统一测试标准**：规定“所有 API 必须写配套的单元测试”，AI 在生成功能代码后会自动提醒你还没写测试，或者直接帮你写好。
- **技术栈固化**：禁止 AI 使用过时的 API（如：禁止使用 `React.FC`），强迫它输出符合最新标准的语法。
- **文档即时同步**：在规则中加入最新版框架的在线文档链接，确保 AI 参考的是最新文档而非模型过时的训练数据。

## 优势与局限

### 优势

- **降低沟通成本**：不需要在每个 Prompt 里都强调一遍项目背景。
- **团队一致性**：整个团队共享同一套规则，确保 AI 写出的代码风格高度统一。
- **动态调整**：随着项目演进，修改一个文件即可改变所有 AI 会话的“认知”。

### 局限与风险

- **提示词竞争**：如果规则写得太长，会占用模型的上下文窗口，可能导致 AI 忽略用户最核心的即时指令。
- **指令过载**：过于繁琐的规则可能会让 AI 变得“畏手畏脚”，甚至导致生成失败。
- **维护心智**：如果规则与实际工程实践脱钩，会导致 AI 输出的代码需要被人类大量重写。

## 与相近术语对比

| 维度 | 规则 / .cursorrules | 提示词驱动开发 (PDD) | 代码规范 (Lint/EditorConfig) |
| :--- | :--- | :--- | :--- |
| **作用时机** | AI 生成代码之前 (Pre-gen) | 整个开发生命周期 (Full cycle) | 代码生成之后检查 (Post-gen) |
| **柔韧性** | 语义级约束（推荐/禁止） | 流程级控制 | 语法级强制（报错/警告） |
| **核心媒介** | 自然语言指令 | 提示词管理流程 | 正则表达式/AST 检查 |

## 实施建议（Best Practices）

- **模块化设计**：将通用规则（如：语言习惯）与业务规则（如：数据校验逻辑）分开编写。
- **使用 Markdown 格式**：使用标题和列表让 AI 更好地通过层级理解规则。
- **定期“修剪”**：删除不再需要的过时指令，保持文件精简。
- **善用例子**：在规则中包含一小段“Good Code”和“Bad Code”，AI 的模仿效果极佳。

## 常见误区（Pitfalls）

- **试图写满所有细节**：AI 的理解能力很强，只要抓大放小即可，写太细反而适得其反。
- **忽略模型差异**：某些复杂的逻辑约束在弱模型上可能无效，需要配合强模型使用。

## FAQ

### Q1: 新手需要马上掌握这个术语吗？

A: 建议先理解核心目的，再结合实际项目逐步使用。

### Q2: 如何判断是否真的用对了？

A: 看三件事：交付更稳、返工更少、团队协作更顺畅。

## 相关资源

### 相关词条

- [rule](https://inaodeng.com/zh-cn/AIWiki/rule/)
- [skill](https://inaodeng.com/zh-cn/AIWiki/skill/)
- [ai-agent](https://inaodeng.com/zh-cn/AIWiki/ai-agent/)
- [prompt-driven-development](https://inaodeng.com/zh-cn/AIWiki/prompt-driven-development/)

### 术语元数据

- 别名：Cursor rules
- 标签：AI Vibe Coding、Wiki

## 参考来源

- [Cursor docs: Rules](https://docs.cursor.com/context/rules)
- [Cursor docs (EN path)](https://docs.cursor.com/en/context/rules)
