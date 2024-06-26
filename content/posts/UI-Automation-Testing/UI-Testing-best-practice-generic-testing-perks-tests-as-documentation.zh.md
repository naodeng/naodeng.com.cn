---
author: "nao.deng"
title:  "UI 测试最佳实践的通用测试的好处篇：将测试视为文档工具"
date:  "2024-01-24T17:06:44+08:00"
summary:  "这篇博文强调了 UI 测试最佳实践中通用测试的好处，特别是将测试视为文档工具的优势。文章解释了通过编写清晰、可读的测试代码，测试不仅仅是验证功能的手段，还是项目文档的一部分。这种做法有助于项目团队更好地理解系统，提高协作效率，并为后续开发和维护工作提供有价值的参考。通过将测试视为文档工具，项目团队能够更好地利用测试来传递信息，确保系统的可靠性和可维护性。"
ZHtags: ["测试视为文档工具"]
ZHcategories:  ["UI 测试", "通用测试的好处"]
ZHseries: ["UI 测试最佳实践"]
ShowWordCount: true
---

文章由 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices) 内容翻译而来，大家有条件的话可以去 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices)阅读原文。

## 将测试视为文档工具

原文链接：<https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/testing-perks/tests-as-documentation.md>

文档编写通常很困难，需要精确而细致的工作，并要求整个团队理解并重视撰写良好的文档。文档编写是一种无私的行为，**对其他开发人员和未来的你都有帮助**。

测试方法不仅是确保我们编写的代码符合项目需求、防止引入回归的绝佳方式，还是对代码和用户流程进行文档编写的利器。

通过将测试用例作为文档工具的好处包括：

- **文档与代码紧密关联**：所有 UI 测试都应该从用户的角度出发编写，它们的描述也应如此。观察用户在项目中能够完成的操作是了解项目功能的有效途径。<br>每个代码库都由成千上万个小代码片段组成，有时**可能很难将所有要点联系在一起**。测试有助于对项目有一个总体了解，甚至包括很多技术细节。

  <!-- TODO: 在黑盒测试章节添加一个链接。 -->

- 你**不依赖于某些员工的历史记忆**：很多时候，你最终会向一些了解项目并记得某些特定边缘案例的员工请教。一个良好的测试套件可以大大减少对这种知识的需求，并避免每个新开发人员通过几行代码引入回归问题。

- 同时，**交接和入职**阶段变得相当容易。

额外的一点是：如果你利用 [Gherkin](https://cucumber.io/docs/gherkin/reference/) 语法，甚至对一些不太懂技术的人，比如 QA 团队来说，文档的效果都会提高。

请记住：

- 测试描述必须对于不了解项目背景的开发人员来说也必须清晰。

- 重复使用的测试函数、固定装置等必须有有意义的名称。一个用于注册和登录测试的 `registration-success.json` 固定装置可能会误导未来的读者，并使历史知识变得必要。请记住，依赖历史知识总是对必须经受开发人员更替的代码库不利。

- 总的来说，UI 测试在前端应用中起着基础作用，它们是唯一记录用户预期能够完成的真实目标的手段。

- 测试的代码必须尽可能简单。易于阅读，无条件，抽象级别低，具有良好的日志级别等。永远记住**测试必须减轻阅读和理解代码的认知负担**，因此它们的复杂性应该比待理解的代码低一个数量级。这提高了开发人员在自动化浏览器中查看测试之后必

须经历的深入过程。

  <!-- TODO: 添加章节链接，说明测试代码必须简单的原因 -->

- "连接"代码和测试：如果用户流程相当长，将一些“步骤”（带有一些注释）在源代码和测试代码之间共享可能是有用的。类似于 `/** #1 \*/`、`/** #2 \*/` 等。

- UI 测试并不是唯一的测试类型：为代码的某些可能难以理解的部分编写更多的低级测试是描述代码期望行为的好方法。

- 在测试中添加注释可以极大地帮助读者，参见["匹配测试代码和测试运行命令"章节](https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/generic-best-practices/test-code-with-debugging-in-mind.zh.md#匹配测试代码和测试运行器命令)中的“保持抽象水平以便于调试测试”一章。

### 参考资料

- UI 测试最佳实践项目:<https://github.com/NoriSte/ui-testing-best-practices>
- UI 测试最佳实践项目中文翻译:<https://github.com/naodeng/ui-testing-best-practices>

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->
