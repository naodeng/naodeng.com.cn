---
author: "nao.deng"
title:  "UI 测试最佳实践的通用最佳实践（一）：等待，不要休眠和明智地为测试文件命名"
date:  "2024-01-18T17:05:44+08:00"
summary:  "这篇博文探讨了 UI 测试的通用最佳实践之一：等待策略。强调了在 UI 测试中避免使用休眠（sleep）方法，而是采用等待机制来确保测试脚本与应用程序的同步。此外，博文提倡为测试文件采用明智的命名规范，以提高代码可维护性和可读性。通过这些最佳实践，读者将更有效地编写稳健的 UI 测试脚本，确保测试的准确性和可靠性，提升整个软件开发过程的质量。"
ZHtags: ["等待", "测试文件命名"]
ZHcategories:  ["UI 测试", "通用最佳实践"]
ZHseries: ["UI 测试最佳实践"]
ShowWordCount: true
---

文章由 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices) 内容翻译而来，大家有条件的话可以去 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices)阅读原文。

## 等待，不要休眠

原文链接：<https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/await-dont-sleep.md>

### 一段简要说明

在测试 UI 时，您需要定义应用程序必须经过的关键点。到达这些关键点是一个异步过程，因为几乎 100% 的情况下，UI 不会同步更新。

这些关键点称为**确定性事件**，即您知道必须发生的事件。

具体取决于您定义的事件以及 UI 达到这些事件的方式，但通常会存在一些“长时间”等待，例如 XHR 请求，以及一些更快的等待，例如重新渲染更新。

解决异步更新的方法似乎很简单：**休眠/暂停测试**一段时间，几毫秒、几分之一秒，甚至几秒钟。这可以使测试正常工作，因为它给应用程序足够的时间来更新自身并移动到下一个要测试的确定性事件。

请注意，除了特定和已知的等待（例如使用 `setInterval` 或 `setTimeout` 时），**完全无法预测**休眠时间应该是多久，因为它可能取决于：

- 网络状态（对于 XHR 请求）
- 可用机器资源的总量（CPU、RAM 等）
  - 例如，CI 流水线可能会对其进行限制
  - 在本地机器上，其他应用程序也可能会消耗这些资源
- 其他资源消耗更新的并发情况（canvas 等）
- 一系列不可预测的因素，如 Service Workers、缓存管理等，可能加快或减缓 UI 更新过程

每个固定的延迟都会使测试变得更加脆弱，并**增加其持续时间**。您需要在虚假负面和夸张的测试持续时间之间找到平衡。

等待可分为四个主要类别：

- **[页面加载等待](#页面加载等待)**：测试应用程序时需要处理的第一个等待，等待一个允许您了解页面是否可交互的事件
- **[内容等待](#内容等待)**：等待匹配选择器的 DOM 元素
- **[XHR 请求等待](#xhr-请求等待)**：等待 XHR 请求开始或相应接收到

以下所有示例都基于 Cypress。

### 页面加载等待

```javascript
// Cypress code
cy.visit('http://localhost:3000')
```

### 内容等待

请看以下示例，了解如何在可用工具中实现等待 DOM 元素。

#### 内容等待代码示例

- 等待元素

```javascript
// Cypress code

// it waits up to 4 seconds by default
cy.get('#form-feedback')
// the timeout can be customized
cy.get('#form-feedback', { timeout: 5000 })
```

- 等待具有特定内容的元素

```javascript
// Cypress code

cy.get('#form-feedback').contains('Success')
```

### XHR-请求等待

#### XHR-请求等待代码示例

- 等待 XHR 请求/响应

```javascript
// Cypress code

cy.intercept('http://dummy.restapiexample.com/api/v1/employees').as('employees')
cy.wait('@employees')
  .its('response.body')
  .then((body) => {
    /* ... */
  })
```

_由 [NoriSte](https://github.com/NoriSte) 在 [dev.to](https://dev.to/noriste/await-do-not-make-your-e2e-tests-sleep-4g1o) 和 [Medium](https://medium.com/@NoriSte/react-hooks-memorandum-bf1c2758a672)上进行联合发表._

## 明智地为测试文件命名

原文链接：<https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/name-test-files-wisely.md>

### 一段简要说明

编写各种不同的 UI 测试是一种好习惯，而采用一种常见的测试文件命名方式更是有益的。

这很有用，因为通常情况下，你需要仅运行某一类测试，可能的情况包括：

- 在开发过程中，你只需要运行其中一些测试
  - 你正在更改一些相关组件，并需要检查生成的标记是否发生了变化
  - 你正在更改全局 CSS 规则，只需运行视觉测试
  - 你正在更改应用程序流程，需要运行整个应用程序集成测试
- 你的 DevOps 同事需要确保一切正常运行，最简单的方法就是只运行端对端测试
- 你的构建流水线需要运行集成测试和端对端测试
- 你的监控流水线需要一个脚本来运行端对端测试和监控测试

如果你为测试取一个明智的命名，将会非常容易只运行其中的某些类型。

Cypress:

```bash
cypress run --spec \"cypress/integration/**/*.e2e.*\"
```

Jest:

```bash
jest --testPathPattern=e2e\\.*$
```

<br>

没有一种全局的命名测试文件的方式，一个建议是使用以下方式命名：

- 正在测试的主题
- 测试的类型（`integration`、`e2e`、`monitoring`、`component`等）
- 选择的测试后缀（`test`、`spec`等）
- 文件扩展名（`.js`、`.ts`、`.jsx`、`.tsx`等）

它们之间用句点分隔。

以下是一些例子：

- `authentication.e2e.test.ts`
- `authentication.integration.test.ts`
- `site.monitoring.test.js`
- `login.component.test.tsx`
等等。

## 参考资料

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