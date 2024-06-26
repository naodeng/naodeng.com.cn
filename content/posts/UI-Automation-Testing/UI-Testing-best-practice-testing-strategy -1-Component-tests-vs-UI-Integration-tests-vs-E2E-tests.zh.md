---
author: "nao.deng"
title:  "UI 测试最佳实践的测试策略（一）：组件测试 vs（UI）集成测试 vs E2E 测试"
date:  "2024-01-09T18:05:44+08:00"
summary:  "这篇博文深入研究 UI 测试最佳实践，首篇聚焦于测试策略的选择：组件测试、UI 集成测试和端到端（E2E）测试的区别。了解每种测试类型的优缺点，帮助您在 UI 测试中做出明智的选择。不论您是开发者还是测试专业人员，这篇文章将为您提供深入洞察，助力您设计出更可靠、高效的 UI 测试策略。点击链接，探索 UI 测试的最佳实践，提升您的测试流程质量。"
ZHtags: ["组件测试 vs（UI）集成测试 vs E2E 测试"]
ZHcategories:  ["UI 测试", "测试策略"]
ZHseries: ["UI 测试最佳实践"]
ShowWordCount: true
---

## 一段简要说明

在谈论 UI 测试时（请记住我们只谈论 UI，而不是底层 JavaScript 代码），有三种主要的测试类型：

- **组件测试**：UI 的单元测试，它们在隔离的环境中测试每个单独的组件。

  在隔离中开发组件很重要，因为它允许你将它们与相应的容器/用途隔离开来。组件存在是为了隔离单一的行为/内容（[单一职责原则](https://www.wikiwand.com/en/Single_responsibility_principle)），因此，在隔离中编码是有益的。

  有许多在隔离中开发组件的方法和工具，但由于其效果和生态系统，[Storybook](https://storybook.js.org) 成为了标准选择。

  组件有三种类型的契约：生成的输出（**HTML**），它们的视觉方面（**CSS**）和外部 API（**props 和回调**）。测试每个方面可能很繁琐，这就是 [Storyshots](https://www.npmjs.com/package/@storybook/addon-storyshots) 可以派上用场的地方。它允许你自动化：
  - **快照测试**：快照是组件生成的输出，一个包含所有呈现 HTML 的字符串。如果生成的 HTML 更改，无论是意外还是非意外，快照测试都会失败，你可以选择这些更改是有意还是无意。
  - **视觉回归测试**：与先前的组件相比，组件的视觉方面逐像素比较，同样，你被提示选择是否接受更改。

    这些测试由 [Storyshots](https://www.npmjs.com/package/@storybook/addon-storyshots) 在每个 Storybook 页面（又名“故事”）上自动启动。
  - **回调测试**：一个小的 React 容器应用呈现组件并传递一些回调。然后，模拟用户交互并传递期望调用的回调。[React Testing Library](https://testing-library.com/docs/react-testing-library/) 是这类测试的标准库。
  - **交互/状态测试**：与组件的一些交互期望正确的状态管理。这种类型的测试必须从消费者的角度编写，而不是从内部的角度（例如，用户填写输入字段时的输入字段值，而不是内部组件状态）。交互/状态测试应在触发键盘事件后断言输入字段的值。
  
或者，Cypress 推出了自己的解决方案，以便在其中启动组件测试，请查看 [使用 Cypress 进行 React 组件单元测试](https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/tools/cypress-react-component-test.zh.md) 章节。

- **UI 集成测试**：它们在真实浏览器中运行整个应用 **而不连接真实服务器**。这些测试是每个前端开发人员的王牌。它们运行速度快，不容易出现随机失败或假阴性。

  前端应用程序并不知道没有真实服务器：每个 AJAX 调用都会被测试工具在瞬间解决。静态 JSON 响应（称为“fixtures”）用于模拟服务器响应。Fixtures 允许我们测试前端状态，模拟每种可能的后端状态。

  另一个有趣的效果是：Fixtures **允许您在没有工作的后端** 应用程序的情况下工作。您可以将 UI 集成测试视为“仅前端”测试。

  在最成功的测试套件的核心，有很多 UI 集成测试，考虑到对前端应用程序的最佳测试类型。

- **端到端（E2E）测试**：它们与真实服务器进行交互，运行整个应用程序。从用户交互（其中之一是“端”）到业务数据（另一个“端”）：一切都必须按设计工作。E2E 测试通常很慢，因为
  - 它们需要一个 **工作的后端** 应用程序，通常在前端应用程序旁边启动。没有服务器，你不能启动它们，所以你依赖于后端开发人员的工作
  - 它们需要 **可靠的数据**，在每次测试之前进行种植和清理

  这就是为什么 E2E 测试不可行作为唯一/主要测试类型的原因。它们非常重要，因为它们测试所有内容（前端 + 后端），但必须小心使用，以避免脆弱且持续时间长的测试套件。

  在具有许多 UI 集成测试的完整套件中，您可以将 E2E 测试视为“后端测试”。通过它们，您应该测试哪些流程？
  - 快乐路径流程：您需要确保至少用户能够完成基本操作
  - 对您的业务有价值

  在具有许多 UI 集成测试的完整套件中，您可以将 E2E 测试视为“后端测试”。通过它们，您应该测试哪些流程？
  - 快乐路径流程：您需要确保至少用户能够完成基本操作
  - 对您的业务有价值的一切：无论是快乐路径还是其他，都要测试您的业务关心的任何内容（明显是优先考虑它们）
  - 经常中断的一切：系统的薄弱区域也必须受到监视

识别/定义测试类型对于对它们进行分组、[合理命名测试文件](https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/name-test-files-wisely-zh.md)、限制它们的

范围以及选择是否在整个应用程序和部署流水线中运行它们很有用。

*由[NoriSte](https://github.com/NoriSte)在[dev.to](https://dev.to/noriste/component-vs-ui-integration-vs-e2e-tests-3i0d)和[Medium](https://medium.com/@NoriSte/component-vs-ui-integration-vs-e2e-tests-f02b575339dc)上进行了跨发表。*

  翻译自：[Component vs (UI) Integration vs E2E Tests](https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/testing-strategy/component-vs-integration-vs-e2e-testing.md)*

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->