---
title: "任务产物"
titleEn: "Artifacts"
slug: "artifacts"
lang: "zh-cn"
summary: "智能体流程中产生的结构化产物，如计划、变更、日志和报告。"
topic: "ai-vibe-coding"
aliases:
  - "Artifacts"
  - "任务产物"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "verification-artifacts"
  - "artifact-feedback-loop"
  - "multi-agent-orchestration"
  - "task-level-abstraction"
lastReviewedAt: "2026-10-12"
---
# 任务产物（Artifacts）

## 科普速读

- **它是什么：** 产物是任务中生成或使用并保存下来的输出。
- **适合什么场景：** 检查代码改动、报告、截图、日志和其他结果。
- **主要边界：** 产物本身不能证明结果正确。

## 概览

编码 Agent 可能提交补丁、测试报告和截图。这些文件能帮助人员检查执行结果，但截图本身不能证明代码正确。

## 核心定义

产物是与任务关联的文件或记录。在 AI 编码工作流中，它可以是代码差异、生成的文档、测试结果、截图或执行日志。具体含义取决于产品。

## 背景与发展

构建系统长期以来会生成软件包和二进制文件等产物。AI 工具也可以展示任务过程和最终输出，供人评审。不同产品保存哪些文件、如何关联任务，各不相同。

## 工作机制（How It Works）

1. 任务生成或收集文件和输出。
2. 宿主保存或展示选定内容。
3. 用户打开产物，检查来源和上下文。
4. 团队保留有助于评审或后续工作的产物。

## 在软件测试与开发中的应用

评审补丁时可以同时查看测试输出。检查生成的截图时，可以对照原始浏览器状态。日志有助于复现失败时可以保留，但分享前要清除密钥。

## 优势与局限

产物便于检查和交接工作，但可能不完整、已过时，或与生成它的代码版本不匹配。仅仅存在产物，不能验证某项结论。

## 与相近术语对比

产物是保存的输出。构建产物是构建过程生成的软件包或文件。验证产物是用于核对结论的证据。日志记录事件，也可以作为一种产物。

## 实施建议（Best Practices）

为每份产物标明任务和代码版本。保留评审所需文件，并设置访问与保留规则。说明文件能展示什么，以及它不能证明什么。

## 常见误区（Pitfalls）

不要在所有场景中都把“产物”和“验证证据”当成同义词。不要认为截图、日志或报告能证明底层行为正确。

## FAQ

### 每份产物都能证明任务成功吗？

不能。产物只记录输出。评审者还要检查它是否支持相应结论。

## 相关资源

### 相关词条

- [verification-artifacts](https://inaodeng.com/zh-cn/AIWiki/verification-artifacts/)
- [artifact-feedback-loop](https://inaodeng.com/zh-cn/AIWiki/artifact-feedback-loop/)
- [multi-agent-orchestration](https://inaodeng.com/zh-cn/AIWiki/multi-agent-orchestration/)
- [task-level-abstraction](https://inaodeng.com/zh-cn/AIWiki/task-level-abstraction/)

### 外部参考

- [Antigravity Get Started](https://antigravity.google/docs/get-started)
- [Google Developers Blog: Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)
