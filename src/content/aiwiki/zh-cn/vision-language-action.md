---
title: "视觉语言动作模型（VLA）"
titleEn: "Vision-Language-Action Models"
titleZh: "视觉语言动作模型"
slug: "vision-language-action"
lang: "zh-cn"
summary: "VLA 将视觉观察和自然语言指令映射为机器人动作，让模型能参与现实环境中的感知与执行闭环。"
topic: "multimodal-ai"
aliases:
  - "VLA"
  - "具身模型"
tags:
  - "机器人"
  - "多模态"
related:
  - "vision-language-model"
  - "ai-agent"
  - "agent-sandboxing"
lastReviewedAt: "2026-10-12"
---

# 视觉语言动作模型（VLA）

## 科普速读

- **它是什么：** VLA 把视觉观察和语言指令映射为机器人动作。
- **适合什么场景：** 研究能在物理环境中行动的机器人。
- **主要边界：** 仿真结果不能证明现实操作安全。

## 概览

机器人看到一个红杯子，并收到“把它放到架子上”的指令。VLA 可能预测动作，控制器和传感器再帮助执行和调整。

## 核心定义

视觉语言动作（VLA）模型把视觉输入和语言指令连接到机器人可执行的表示或动作。

## 背景与发展

VLA 研究把视觉、语言和动作模型结合起来完成具身任务。RT-2 等研究探索了把视觉语言知识迁移到机器人控制。

## 工作机制（How It Works）

模型接收传感器观察和指令，预测动作或动作序列；执行过程中再利用环境反馈调整。真实系统还需要控制器和安全限制。

## 在软件测试与开发中的应用

测试物体位置变化、遮挡、指令歧义、陌生场景和急停。对比仿真行为与物理测试结果。

## 优势与局限

VLA 能把语言目标连接到物理动作。它可能误读场景或做出不安全动作，进而影响人员或物品。

## 与相近术语对比

视觉语言模型关联图像和文字；VLA 还预测或选择动作。数字 Agent 可以调用 API，但不一定控制实体执行器。

## 实施建议（Best Practices）

由机器人控制器强制执行动作边界，测试急停，分阶段试运行，并对危险任务保留人工监督。

## 常见误区（Pitfalls）

不要依靠模型自行遵守警告，也不要把仿真成功当成现实安全证明。

## FAQ

### VLA 和视觉语言模型是同一种模型吗？

不是。VLA 增加了动作环节，并把输出接入机器人控制闭环。

## 相关资源

### 相关词条

- [视觉语言模型](/zh-cn/AIWiki/vision-language-model/)
- [AI 智能体](/zh-cn/AIWiki/ai-agent/)
- [Agent 工具沙箱](/zh-cn/AIWiki/agent-sandboxing/)

### 参考资料

- [RT-2: Vision-Language-Action Models](https://arxiv.org/abs/2307.15818)
