---
author: "nao.deng"
title: "30 天 AI 测试挑战活动：第二十三天：评估 AI 在视觉测试中的有效性并讨论其优势"
date: "2024-03-26T20:06:44+08:00"
summary: "这篇博文是关于 30 天 AI 测试挑战活动的第二十三天，涉及评估人工智能在视觉测试中的有效性，并讨论其优势。文章可能包括作者对于使用人工智能进行视觉测试的实际应用经验，以及对于人工智能在视觉测试中所带来的优势和挑战的思考和评估。通过分享对人工智能在视觉测试中的应用效果和优势的评估，读者将了解到作者对于这一新兴测试方法的认识和见解，以及对于未来在视觉测试领域的应用前景的展望。这个系列活动有望为测试专业人士提供一个了解和探索人工智能在视觉测试中的应用效果和优势的机会，并促进行业对于 AI 在测试领域的更深入研究和应用。"
ZHtags: ["评估 AI 在视觉测试中的有效性并讨论其优势","提示词","视觉测试","人工智能"]
ZHcategories: ["软件测试活动"]
ZHseries: ["30 天 AI 测试挑战活动"]
ShowWordCount: true
---

## 第 23 天：评估 AI 在视觉测试中的有效性并讨论其优势

欢迎来到第 23 天！今天，我们将评估人工智能与非人工智能视觉测试方法相比在视觉测试中的有效性。使用人工智能来检测图形用户界面 (GUI) 中的视觉异常有着巨大的前景。因此，让我们探讨一下采用人工智能辅助视觉测试方法的潜在优势和缺陷。

### 任务步骤

基于你当前的经验和对视觉测试工具的访问，选择以下两个选项之一开始这项调查：

- **选项 1 - 对于那些积极使用或希望实际操作视觉测试工具的人**

  - **选择工具并检查其功能**：选择一个拥有 AI 驱动视觉测试功能的工具或平台。查阅文档或营销材料以了解 AI 方法及其异常检测声明。
  - **测试这些声明**：设计一个限时测试（例如，30 分钟）来评估该工具的 AI 驱动视觉测试能力。例如，如果它声称能检测布局变化，故意修改 GUI 并查看工具识别异常的能力。
  - **考虑失败情景**：假设工具在你的测试中表现良好，构建一个你认为它可能无法检测视觉异常的情景。
  - **分享你的发现**：回复此帖分享你对 AI 驱动视觉测试的见解。考虑包括
    - 你选择的选项
    - 你选择的工具及其声明的 AI 视觉测试能力
    - 你的定时实验发现
    - 使用 AI 进行视觉测试的潜在优势和风险
    - 你继续使用 AI 驱动视觉测试工具的可能性。

- **选项 2 - 对于视觉测试新手或没有工具访问权限的人**

  - **研究 AI 视觉测试**：找到讨论 AI 如何用于视觉测试和 GUI 异常检测的资源（研究论文、博客帖子、文档、视频演示）。
  - **评价 AI 方法**：尝试识别 AI 为视觉测试带来的核心优势以及 AI 系统使用的技术来分析 GUI 图像/截图和识别视觉异常。然后假设 AI 系统可能难以检测视觉异常的情景。
  - **评估 AI 视觉测试是否适合你**：根据你当前面临的挑战，考虑 AI 驱动的视觉测试解决方案是否会对你的团队有益。
  - **分享你的发现**：回复此帖分享你对 AI 驱动视觉测试的见解。考虑包括
    - 你选择的选项，
    - AI 驱动视觉测试声称解决的问题及其解决方式的总结
    - 采用 AI 视觉测试方法的潜在优势和风险
    - 你采用 AI 驱动视觉测试工具的可能性。

### 为什么参与

- **加深你的知识**：在 UI 不断演化的情况下，保持强大的视觉测试可能具有挑战性。这项任务帮助你了解 AI 如何有可能简化这一过程。
- **培养批判性思维**：评估新的测试工具或方法时，关键在于批判性地思考它们的能力、局限性及对你的团队的影响。今天的任务磨练了这项技能。

### 任务链接

<https://club.ministryoftesting.com/t/day-23-assess-ai-effectiveness-in-visual-testing-and-discuss-the-advantages/75363>

## 我的第 23 天任务

基于持续学习 AI 测试工具的目的，我选择试用新的 AI 视觉测试工具，所以今天的任务我选择**选项 2**

### 1.关于**选择工具并检查其功能**

由于在之前的挑战任务中我试用了 Applitools Eyes，这一次我选择更换一种新的 AI 视觉测试工具：[Percy](https://www.browserstack.com/docs/percy/overview/visual-testing-basics)来进行学习

Percy 官方介绍：

- 消除运输视觉错误的风险：获得整个 UI 的视觉覆盖并充满信心地发布每个版本
- 快速执行全面的视觉审查：对每次提交运行可视化测试并获得快速、确定的结果，以帮助你高效调试
- 跨浏览器和平台渲染：Percy 在不同的浏览器和平台（桌面和移动设备）中呈现相同的页面，突出显示每个浏览器和平台特定的视觉差异。Percy 捕获 DOM 快照和资源，进行渲染并将它们与之前生成的快照进行比较，以检测视觉变化。
- 响应式差异：Percy 在生成页面屏幕截图时通过调整浏览器大小，以可配置的响应宽度渲染页面并突出显示视觉差异。它对视觉变化进行分组并忽略噪音，以促进更快、更准确的视觉审查。
- 快照稳定：Percy 专有的快照稳定技术会自动冻结动画和其他动态元素，以最大限度地减少误报。Percy 确保页面呈现的一致性和确定性。

好像没有 AI 相关的宣传字样，不可能，很快我就查找到了另外一个关于 percy 的官方宣传新闻：[认识 App Percy：适用于本机应用程序的人工智能驱动的自动化视觉测试平台](https://www.browserstack.com/blog/product-launch-app-percy/)

- **AI 驱动的视觉测试**：借助 App Percy，你可以自动检测跨设备和屏幕尺寸的每次提交的视觉缺陷，确保你的 UI 在第一天就达到每位客户的预期。在每次代码推送时，App Percy 的闪电般快速的基础设施都会捕获屏幕截图选择的设备并将它们与基线进行比较以发现视觉缺陷。这里的关键是我们底层的计算机视觉驱动算法——珀西视觉引擎——它可以减少误报，例如由动态元素引起的误报，并仅突出显示那些肉眼可以识别的视觉偏差。
- **Percy 视觉引擎**：应用程序 Percy 强大的人工智能算法可以检测用户真正关心的变化。它可以通过页面移位检测、处理抗锯齿噪声、智能文本稳定和忽略区域来帮助你减少噪声并简化图像比较。了解有关珀西视觉引擎的更多信息

### 2.关于**测试声明**

> Percy 是一个商业化的工具，所以我注册账号申请了试用

#### Percy 工具使用简介

注册账号且邮箱校验通过后可以新建项目进行试用，和 Applitools Eyes 的步骤类似

- 新建项目：可以选择是 web app 项目还是 mobile app 项目，也可以选择代码管理工具 git 或者 github

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/0KPcbd.png)

- 选择代码编写工具
- 获取 Percy token
- 设置 Percy 本地环境​
- 编写测试
- 运行测试
- Percy 平台查看报告

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/sp8nHu.png)

#### Percy 试用开始

这一次我选择了 Percy 的 cypress sdk 来进行 demo 项目试用，大致步骤如下

- 选择一个本地文件夹并在命令行对文件夹进行 node 项目初始化

```shell
npm init
```

- 项目进行 cypress 初始化

```shell
npm install cypress --save-dev
```

- 安装 Percy 依赖包

```shell
npm install --save-dev @percy/cli @percy/cypress
```

- 配置 Percy token

```shell
export PERCY_TOKEN="<your token here>"
```

- 编写 demo 测试代码：以我的博客首页来做视觉测试

```javascript
import '@percy/cypress';

describe('Integration test with visual testing', function() {
    it('Loads the homepage', function() {
      // Load the page or perform any other interactions with the app.
      cy.visit("http://localhost:1313/");
      cy.percySnapshot('Login page responsive test', { widths: [768, 992, 1200] });
    });
  });
```

- 运行测试

```shell
npx percy exec -- cypress run
```

- 查看命令行结果

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/HvIxIz.png)

测试运行成功后，命令行上会显示一个 percy 平台链接，点击可以去查看具体的视觉验证结果

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/tmz854.png)

> 平台上会显示这一次运行后我的博客首页和上一次运行对比的的差异结果。

#### 测试场景 1：页面多处差异视觉识别验证

- 测试准备：更改我的博客首页顶部内容和顶部内容
- 重新运行 demo 测试
- 查看 percy 识别结果

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/exwX2h.png)

- 结论：能成功识别并给出页面顶部和顶部的多次差异点

#### 测试场景 2：页面 小图标差异视觉识别验证

- 测试准备：删除我的博客首页菜单上的外链图标
- 重新运行 demo 测试
- 查看 percy 识别结果

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/Ma0RMp.png)

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/8FN43p.png)

- 结论：也能成功识别到页面小图标的变化

### 3.关于**考虑失败场景**

我后面持续多个页面改动的识别验证，基本都能成功识别到，目前还未发现失败的场景。我觉得可能出现的识别失败的场景会是：细微颜色差异和较小差异的不同格式字体变化

### 4. 关于**使用人工智能进行视觉测试的潜在优势和风险**

- 潜在优势：如果有一个专业的视觉测试的 AI 工具，那一定能提升项目视觉测试的效率，确保项目的视觉测试质量。

- 潜在风险和限制：因为是使用 AI 工具，而且当前项目为未发布的产品，AI 工具通用的数据隐私安全和结果偏见不确定性都会存在一定的风险。另外一个我担忧的点就是 percy 也是使用 token 把本地测试的数据上传到 percy 平台查看视觉测试报告，数据隐私安全存在可能泄露的风险。

### 5.关于**你采用 AI 驱动视觉测试工具的可能性**

当前项目上目前不太可能会采用 AI 驱动视觉测试工具，但以个人项目进行试用学习新的 AI 驱动视觉测试工具。

## 关于活动

30 天 AI 测试挑战活动是 Ministry 测试社区发起的活动，上一次我了解这个社区是关于他们发起的 30 天敏捷测试的活动。

社区官网：<https://www.ministryoftesting.com>

活动链接：<https://www.ministryoftesting.com/events/30-days-of-ai-in-testing>

**挑战**：

- [第一天：介绍你自己以及你对人工智能的兴趣](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-1-introduce-yourself-and-your-interest-in-ai/)
- [第二天：阅读有关测试中的人工智能的介绍性文章并分享](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-2-read-an-introductory-article-on-ai-in-testing-and-share-it/)
- [第三天：AI 在测试中的多种应用方式](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-3-list-ways-in-which-ai-is-used-in-testing/)
- [第四天：观看有关测试中人工智能的任何问题视频并分享主要收获](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-4-watch-the-ama-on-artificial-intelligence-in-testing-and-share-your-key-takeaway/)
- [第五天：确定一个测试中的人工智能案例研究，并分享你的发现](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-5-identify-a-case-study-on-ai-in-testing-and-share-your-findings/)
- [第六天：探索并分享对 AI 测试工具的见解](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-6-explore-and-share-insights-on-ai-testing-tools/)
- [第七天：研究并分享提示词工程技术](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-7-research-and-share-prompt-engineering-techniques/)
- [第八天：制作详细的 Prompt 来支持测试活动](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-8-craft-a-detailed-prompt-to-support-test-activities/)
- [第九天：评估提示词质量并努力加以改进](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-9-evaluate-prompt-quality-and-try-to-improve-it/)
- [第十天：批判性分析人工智能生成的测试](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-10-critically-analyse-ai-generated-tests/)
- [第十一天：使用 AI 生成测试数据并评估其功效](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-11-generate-test-data-using-ai-and-evaluate-its-efficacy/)
- [第十二天：评估你是否信任 AI 支持测试并分享你的想法](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-12-evaluate-whether-you-trust-ai-to-support-testing-and-share-your-thoughts/)
- [第十三天：开发你的测试方法并成为 AI 测试的先行者](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-13-develop-a-testing-approach-and-become-an-ai-in-testing-champion/)
- [第十四天：生成 AI 测试代码并分享你的体验](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-14-generate-ai-test-code-and-share-your-experience/)
- [第十五天：衡量测试计划中的短期人工智能](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-15-gauge-your-short-term-ai-in-testing-plans/)
- [第十六天：评估采用 AI 进行无障碍测试并分享你的发现](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-16-evaluate-adopting-ai-for-accessibility-testing-and-share-your-findings/)
- [第十七天：利用人工智能实现缺陷报告自动化，并分享你的流程和评估结果](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-17-automate-bug-reporting-with-ai-and-share-your-process-and-evaluation/)
- [第十八天：分享你在 AI 测试中遇到的最大难题](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-18-share-your-greatest-frustration-with-ai-in-testing/)
- [第十九天：探索 AI 在测试优先级排序中的作用，并评价其利弊](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-19-experiment-with-ai-for-test-prioritisation-and-evaluate-the-benefits-and-risks/)
- [第二十天：探索 AI 自愈测试的有效性](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-20-learn-about-ai-self-healing-tests-and-evaluate-how-effective-they-are/)
- [第二十一天：打造你的 AI 测试宣言](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-21-develop-your-ai-in-testing-manifesto/)
- [第二十二天：思考团队需要哪些技能才能在 AI 辅助测试中取得成功](https://naodeng.com.cn/zh/posts/event/30-days-of-ai-in-testing-day-22-reflect-on-what-skills-a-team-needs-to-succeed-with-ai-assisted-testing/)

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