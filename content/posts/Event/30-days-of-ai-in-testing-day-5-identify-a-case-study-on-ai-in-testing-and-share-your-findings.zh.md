---
author: "nao.deng"
title: "30 天 AI 测试挑战活动：第五天：确定一个测试中的人工智能案例研究，并分享您的发现"
date: "2024-03-06T13:06:44+08:00"
summary: "这篇博文是 30 天 AI 测试挑战活动的第五天，要求参与者确定一个测试中的人工智能案例研究，并分享他们的发现。博文可能包括案例研究的背景、目的和方法，以及在研究过程中所发现的重要见解。通过分享案例研究，作者能够向读者展示 AI 在实际测试场景中的应用，促进知识的交流和学习。这个系列活动有望为测试专业人士提供深入了解 AI 测试的机会，并鼓励他们积极参与实际案例的研究。"
ZHtags: ["确定一个测试中的人工智能案例研究，并分享您的发现"]
ZHcategories: ["软件测试活动"]
ZHseries: ["30 天 AI 测试挑战活动"]
ShowWordCount: true
---

## 第五天任务：确定一个测试中的人工智能案例研究，并分享您的发现

我们现在已经进入了 30 天 AI 测试挑战的第 5 天！在过去的几天里，我们已经建立了有关 AI 在测试中的基础知识。今天，我们将通过探索案例研究或分享个人经验，看看我们的发现在现实世界中是如何应用的。

### 任务步骤

#### 选项 1：案例研究分析

- 搜索一个真实世界的例子，说明 AI 是如何用来解决测试挑战的。这可以是一份已发表的案例研究，也可以是在文章或博客中分享的例子。

- 选择并分析一个对你来说相关或有趣的案例研究。记录公司和背景，AI 是如何应用在他们的测试过程中的，具体使用了哪些 AI 工具或技术，以及对测试结果/效率的影响。

#### 选项 2：个人经验分享

- 如果你在测试活动中使用 AI 工具或技术有个人经验，你可以分享你的旅程和收获。

- 描述背景，你使用了哪些 AI 工具或技术，你是如何应用它们的，以及你面临的结果或挑战。

#### 分享你的发现

- 无论你选择选项 1 还是选项 2，通过回复此帖分享你的发现。以下是一些提示，指导你的帖子：
  - 案例研究或个人经验的简要背景
  - AI 是如何在他们/你的测试中使用的？
  - 他们/你使用了哪些工具或技术？
  - 他们/你取得了什么结果？
  - 这个例子中有什么令人印象深刻或让你感到惊讶的地方？
  - 它与你自己的背景或对 AI 的期望有何关联？

### 为什么参加

- **看到 AI 在测试中的应用**：通过探索实际例子，我们能够了解到可能发生的事情，并开始想象 AI 如何能够改变我们自己的测试。

- **加深对 AI 的理解**：通过探索案例研究或个人经验，你将更深刻地了解将 AI 整合到测试工作流程中的复杂性和细微差别。

- **分享知识**：分享你的案例研究发现或个人经验，并与其他人讨论，提供了一个学习彼此研究的机会，拓展了我们对 AI 在测试中角色的集体知识和看法。

### 任务链接

<https://club.ministryoftesting.com/t/day-5-identify-a-case-study-on-ai-in-testing-and-share-your-findings/74458/1>

## 我的第五天任务

我最近阅读了这篇文章[基于 UI 交互意图理解的异常检测方法](https://mp.weixin.qq.com/s/qxS6ty0tS1QDpIqPFNDseQ)，它是一项基于 UI 交互意图理解的异常检测方法的研究成果和具体演示示例。

结合第五天的任务我来回答以下问题：

1. 案例研究或个人经验的简要背景：

   - 美团的商店平台技术部和质量工程部与复旦大学周阳帆教授的团队合作，共同开发了一种多模态 UI 交互意图识别模型和相应的 UI 交互框架。随着美团各个业务线的扩张和迭代，UI 测试任务变得越来越繁重，促使了这一模型的开发。

2. 在测试中如何应用人工智能：

   - 人工智能的应用非常巧妙。团队利用 AI 技术将用户可以看到的文本、视觉图像内容以及 UI 组件树中的属性结合起来，从而准确无误地识别出 UI 交互的意图。这种技术的运用，有效解决了 UI 测试中人力成本高昂和过度依赖脚本测试的问题。

3. 使用的工具或技术：

   - 研究团队采用了结合机器学习、图像、文本和渲染树信息的多模态模型。这种方法不仅能理解测试人员通常执行的“认知 - 操作 - 检查”过程，而且能够在不同的应用程序和平台之间进行泛化，无需为每个新环境编写特定的测试脚本。

4. 取得的成果：

   - 案例研究表明，基于 UI 交互意图编写的测试用例展现了在不需要特定适应的情况下能够在不同平台、应用和技术上实现泛化的能力。该研究已被 ESEC/FSE 2023（软件领域的顶级会议）接受，并将在其行业专题中进行演讲。

5. 这个例子中让你印象深刻或感到惊讶的是什么：

   - 这项研究已经被软件领域的顶级会议 ESEC/FSE 2023 接受，并在会议上进行展示。这标志着该研究不仅在学术上得到认可，而且其实用价值和创新性也得到了业界的高度评价。对于我这样一个 QA 来说，这种跨学科的合作和创新技术的应用是非常令人兴奋的，它不仅为我们打开了 AI 在 UI 测试领域应用的新篇章，更为软件质量保障的未来指明了方向。

## 关于活动

30 天 AI 测试挑战活动是 Ministry 测试社区发起的活动，上一次我了解这个社区是关于他们发起的 30 天敏捷测试的活动。

社区官网：<https://www.ministryoftesting.com>

活动链接：<https://www.ministryoftesting.com/events/30-days-of-ai-in-testing>

**挑战**：

- [第一天：介绍你自己以及你对人工智能的兴趣](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-1-introduce-yourself-and-your-interest-in-ai/)
- [第二天：阅读有关测试中的人工智能的介绍性文章并分享](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-2-read-an-introductory-article-on-ai-in-testing-and-share-it/)
- [第三天：AI 在测试中的多种应用方式](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-3-list-ways-in-which-ai-is-used-in-testing/)
- [第四天：观看有关测试中人工智能的任何问题视频并分享主要收获](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-4-watch-the-ama-on-artificial-intelligence-in-testing-and-share-your-key-takeaway/)

## 推荐阅读

- [使用 Bruno 进行接口自动化测试快速开启教程系列](https://naodeng.com.cn/zh/zhcategories/bruno/)

- [使用 Postman 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/postman-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Pytest 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/pytest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 SuperTest 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/supertest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Rest Assured 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/rest-assured-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Galting 进行性能测试快速开启教程系列](https://naodeng.tech/zh/zhseries/gatling-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 K6 进行性能测试快速开启教程系列](https://naodeng.com.cn/zh/zhseries/k6-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->