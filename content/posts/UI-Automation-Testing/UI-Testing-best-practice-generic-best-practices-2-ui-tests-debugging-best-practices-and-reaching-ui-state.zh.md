---
author: "nao.deng"
title:  "UI 测试最佳实践的通用最佳实践（二）：UI 测试调试最佳实践和在测试中达到 UI 状态而无需使用 UI"
date:  "2024-01-19T13:05:44+08:00"
summary:  "这篇博文探讨了 UI 测试的通用最佳实践之二：UI 测试调试和无需使用 UI 达到 UI 状态。博文详细介绍了在 UI 测试中的调试技巧，包括使用断点、日志和交互式调试工具等方法，提高测试脚本的调试效率。此外，文章强调了通过直接设置应用程序状态而无需依赖 UI 元素来达到 UI 状态的方法，以提高测试速度和稳定性。通过这些实践，读者能够更好地应对 UI 测试中的调试挑战，同时优化测试脚本的执行效率。"
ZHtags: ["通用最佳实践"]
ZHcategories:  ["UI 测试", "通用最佳实践"]
ZHseries: ["UI 测试最佳实践"]
ShowWordCount: true
---

文章由 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices) 内容翻译而来，大家有条件的话可以去 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices)阅读原文。

## UI 测试调试最佳实践

原文链接：<https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/ui-tests-debugging-best-practices.md>

在转向 Cypress 之前，我通常使用 Puppeteer 编写 UI 测试。理解浏览器中发生的事情、了解正在运行的测试以及调试测试都不是简单的任务，因此我开始采取一系列解决方案来帮助我应对整个流程。

诸如 [Cypress](https://www.cypress.io/) 和 [TestCafé](https://devexpress.github.io/testcafe/) 的工具几乎使下面列出的最佳实践变得无关紧要，但除非你之前使用过 [Selenium](https://www.selenium.dev/) 或 [Puppeteer](https://pptr.dev/) 等工具进行测试，否则你不会意识到专为测试而设计的工具对简化生活有多么重要。

第零步是以非无头模式启动浏览器，然后...

### 在 console.log 中记录/显示测试的描述

由于在浏览器内部无法获得有关正在运行的测试的视觉反馈，请务必在浏览器控制台中记录测试的名称。在测试速度很快的情况下（少于 1 秒），这可能没有太多用处，但在测试时间较长或在使用 test.skip 和 test.only 进行测试时，这是有帮助的，可以对正在运行的测试进行双重检查。

在 Puppeteer 中，可以通过以下方式实现：

```js
test('Test description', async () => {
  await page.evaluate(() => console.log('Test description'));

  // ... the test code...
})
```

如果你需要更为显眼的反馈，甚至可以考虑在页面的左上角添加一个固定的 div，每个测试都会用自己的描述填充...

### 将浏览器的 console.log 转发到 Node.js

使用 Puppeteer 的一个简单例子：

```js
page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
```

允许你在同一终端窗口中查看测试日志和浏览器日志。简单而有效。

#### 启动浏览器时已经打开开发者工具

就像在经典的前端开发中一样，在页面加载已经开始后再打开开发者工具可能会导致你错过重要的信息，特别是在网络选项卡中。在调试测试时，启动浏览器时已经打开开发者工具可以节省宝贵的时间和信息。

```js
const browser = await puppeteer.launch({
  headless: false,
  devtools: true
});
```

### 减缓模拟用户操作速度

浏览器自动化工具速度非常快，这使得我们能在几秒钟内运行大量测试。然而，在调试过程中，这可能是一个劣势，因为你需要用眼睛跟踪页面上发生的情况。减缓**每个动作**可能会适得其反——因为整个测试变得很慢——但通常这是执行一些快速检查的最简单方法。在 Puppeteer 中，有一个全局设置可以实现这一点。

```js
const browser = await puppeteer.launch({
  headless: false,
  slowMo: 250, // slow down every action by 250ms
});
```

一些动作，比如输入，允许你添加更具体的延迟（这会叠加在全局 slowMo 设置之上）

```js
await page.type('.username', 'admin', {delay: 10});
```

### 使用调试器语句暂停测试

另一方面，就像在标准的 Web 开发中一样，你可以在运行在页面上的代码中添加一个调试器语句来“暂停”JavaScript 执行。请注意：该语句仅在已打开控制浏览器的开发者工具时有效。

```js
await page.evaluate(() => {debugger;});
```

通过点击“继续执行脚本”或按下 F8 键（调试器是一个“飞行”断点），将恢复测试的执行。

### 延长测试超时时间

类似 Jest、Jasmine 等的测试运行器都设有测试超时时间。这个超时时间的作用在于，在测试中发生问题导致测试无法正常结束时，及时终止测试。在 UI 测试中，这种行为相对繁琐，因为你需要在测试开始时打开浏览器，在测试结束时关闭浏览器。在正常的测试生命周期中，设定过高的超时时间并不实际，因为一旦测试失败就会导致大量时间的浪费，而过低的超时时间可能在测试完成之前就提前“截断”了测试。

相反，你需要设定较长的超时时间，因为你不希望测试结束的时候在你检查浏览器时关闭它。这就是为什么在调试受控浏览器时，设定为 10 分钟的超时时间可能会很有帮助。

当然，也可以...

### 避免在测试结束时关闭浏览器

测试开始时，打开浏览器，而在测试结束时不关闭它。避免关闭浏览器可让你自由地检查前端应用，而无需担心测试超时。这仅在本地运行测试时有效，但在运行测试于 CI 管道之前，必须还原自动关闭以避免由于未关闭的浏览器实例导致内存不足。

### 使用截图

在以无头模式运行测试时，这在测试稳定且仅在出现回归时才失败的阶段尤其有帮助。如果测试失败，很多时候截图能让你了解你正在开发的功能是如何影响之前正常工作的功能的。最有效的解决方案是在测试失败时截图，否则，你可以在 UI 测试中确定一些检查点，并在这些步骤中截图。

### 频繁使用断言

一个经验法则：如果测试失败，它必须直接带你理解出了什么问题，而不是重新启动测试并手动调试。尝试在你的代码库中手动引入一些错误（改变请求有效载荷，移除元素等），并查看测试报告。错误是否与你引入的错误相关联？阅读失败报告的人是否能够理解需要修复什么？

你需要在测试中添加很多断言，这是完全可以的！单元测试通常只包含一个步骤和一个或两个断言，但 UI 测试不同，它们有很多步骤，因此你需要很多断言。将它们视为一系列单元测试，其中前一个测试对第二个测试的创建是必要的，以此类推。

### 使用 test.skip 和 test.only

这是每个测试运行器的基础之一，但你可能不知道：如果你不习惯使用 skip 和 only，请从现在开始吧！否则，你将浪费很多时间，即使你的测试文件只包含两三个测试。始终仅运行你正在工作或需要调试的最小数量的测试！

### 串行运行测试

如果你正在使用 Puppeteer 结合 Jest，请记住 Jest 有一个专门的 runInBand 选项，它防止测试的执行在你的 CPU 核心上分散。将测试并行化可以加快执行速度，但在你需要用眼睛跟踪测试操作时可能会让人感到烦扰。runInBand 选项使测试串行运行。将它与 test.skip、test.only 以及 [jest-watch-typeahead](https://github.com/jest-community/jest-watch-typeahead) 结合使用可以避免很多调试的麻烦。

### 保持测试代码简单

宁愿有些重复，也不要过度抽象。努力让测试代码简单易读。你调试 UI 测试越多，就越能体会到其中的困难。当你需要理解底层发生了什么，以及哪一步不按预期工作时，你那超度抽象、完全符合 DRY 原则（不重复自己）的测试代码就会变得令人头痛。

更一般而言，测试是小型脚本，它们必须比它们测试的代码简单两个数量级，将其视为一个盟友，而不是更复杂的程序。

### 选择专门设计的工具

上述提到的解决方案都是有效的，但它们有一个共同点：**它们都是变通方法**。这是因为我在示例中使用的工具 Puppeteer 并非为 UI 测试而创建的，而是为通用浏览器自动化而设计的，然后，通过一些外部工具的帮助，并在测试中使用 Puppeteer，使其可以用于 UI 测试。测试 Web 应用有不同的需求，需要不同的工具，而不仅仅是自动化操作。

如果你需要编写 UI 测试，你应该考虑切换到 Cypress 或 TestCafé，因为它们已经被设计成简化你的测试工作。如何实现的呢？通过一系列实用工具和默认行为，以及一系列一流的解决方案，使你能够理解并调试浏览器中发生的情况。请注意，本章中提到的所有 Puppeteer **最佳实践**... **在 Cypress 或 TestCafé 中完全无用** 😉

[一些 UI 测试问题及 Cypress 方法](https://github.com/naodeng/ui-testing-best-practices/blob/master/tools/ui-testing-problems-cypress.zh.md) 和 [前端生产力提升：将 Cypress 作为你的主要开发浏览器](./use-your-testing-tool-as-your-primary-development-tool.zh.md) 这两章包括了 Cypress 一流工具的概述。

由[NoriSte](https://github.com/NoriSte) 在 [dev.to](https://dev.to/noriste/ui-tests-debugging-best-practices-1eg3) 和 [Medium](https://medium.com/@NoriSte/ui-tests-debugging-best-practices-789c4ed4daf6?sk=c6056f124f40b15e09669e5839e9f814)上进行联合发表._

## 在测试中达到 UI 状态而无需使用 UI

原文链接：<https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/generic-best-practices/reaching-ui-state.md>

### 一段简要说明

在 UI 场景中覆盖一次是有价值的，而在其他测试中复制其中任何部分提供的价值很小；这些测试可能需要系统的相关状态。假设在一个新测试中，你需要一种状态，而那种状态 - 部分或全部 - 与 UI 测试中的某些部分重复。在这种情况下，可以考虑以下几种技术：

* 直接导航
* 网络存根记录和播放
* 应用程序动作
* 数据库种子

> 免责声明：整个技术包的应用仅在 Cypress 中可能（据我们所知），因此以下代码示例是在 Cypress 上下文中。

### 直接导航

这是最简单的技术，适用于任何框架。假设测试的意图与你的应用程序中的某个页面有关。与其进行点击导航，直接访问 URL。一旦到达，你可以等待 UI 元素（任何测试框架）或网络调用（一些测试框架），或两者兼而有之。

```javascript
// Test A covers click-navigation to a certain page.
// This is Test B, and navigating to that page is the prerequisite step.

// assuming baseUrl is set in cypress.json or config file
// directly navigate to the page.
cy.visit('/endpoint');

// to ensure stability, wait for network (preferred), ui elements, or both

// note: checking the endpoint you are at is entirely optional, only for sanity that you are at the right page
cy.url().should('contain', 'endpoint');
// cy.url().should('match', /endpoint/); // there are many, some more complex, ways of doing it


// network wait: this is in addition to the sanity url check, and it is more important
// because you want the page to "settle" before you start running assertions on it

// usually a GET request. Is aliased so we can wait for it.
cy.intercept('some-xhr-call-that-happens-upon-landing').as('crutcXHR');
// The default Cypress timeout is 4 seconds. 15 seconds here is arbitrary.
// Most pages load faster, but if you need more time then increase the timeout.
// The only caveat to increasing timeout is that the tests will take longer to fail, but still run as fast as possible when things work.
cy.wait('@crutchXHR', {timeout: 15000});

// ui-element wait is straightforward, and may be optional, as well as less stable)
cy.get('element-on-page').should('exist').and('be.visible');

```

#### 直接导航的优缺点

优点：不进行点击导航可以节省测试时间，并减少测试维护的工作量。

缺点：这种技术忽略了用户通过应用程序的端到端点击方式。确保在其他测试中至少有一个工作流程覆盖与点击导航相同的工作流程，以确保点击导航功能不会出现回归问题。通常，点击导航可以成为一个独立的测试；在设置其他测试的状态时，不要重复已经在其他地方覆盖的 UI 测试。思考模式类似于登录；如果在一个测试中进行 UI 登录，在其他测试中可以实现程序化登录，这既快速又经济。

### 应用程序操作

Cypress 为你提供了对应用程序的完全控制权。你可以绕过页面对象的抽象层（与你的应用程序分离），通过 `cy.get()` 直接访问 UI，还可以访问 API、数据库，甚至可以访问源代码。

应用程序操作是一种快捷方式，允许你访问内部工具以节省时间。一个简单的例子可以是一个 `cy.signup()` 自定义命令，该命令进入注册表单并调用注册表单的回调，而不是填写表单并点击注册按钮。

以下是一个快速示例，演示了在 Angular 应用程序中如何允许 Cypress 访问源代码。

```javascript
// Angular Component file example
/* setup:
 1. Identify the component in the DOM;
  inspect and find the corresponding <app.. tag,

 2. Right in the constructor of your component, insert conditional */
constructor(
  /* ... */
) {
  /* if running inside Cypress tests, set the component
  may need // @ts-ignore initially */
  if (window.Cypress) {
    window.yourComponent = this;
  }
}

// at https://github.com/naodeng/ui-testing-best-practices/blob/master/https://github.com/naodeng/ui-testing-best-practices/blob/master/support/app-actions.ts helper file:

/** yields  window.yourComponent */
export const yourComponent = () =>
  cy.window().should('have.property', 'yourComponent');

/** yields the data property on your component */
export const getSomeListData = () =>
 yourComponent().should('have.property', 'data');
```

在这之后，在 DevTools 中查看该组件允许的属性，或者在组件代码中查看你可以使用 `.invoke()` 进行的函数。

可以查看 [演示幻灯片](https://cypress.slides.com/cypress-io/siemens-case-study#/12/3/4) 获取一个使用应用程序操作进行视觉测试的代码示例。

#### 另一个应用程序操作的示例，利用状态，使用 Siemens 的 [Building Operator](https://new.siemens.com/us/en/products/buildingtechnologies/automation/talon/software/building-operator.html?stc=ussi100451&sp_source=ussi100451&&s_kwcid=AL!464!3!435315652461!b!!g!!%2Bbuilding%20%2Boperator&ef_id=CjwKCAjw8df2BRA3EiwAvfZWaAsQmgot5Ph-nGBB8rW1QLLr870q2HW-qzMKhqtQb1QvlPBVJxho5BoCmtMQAvD_BwE:G:s) Siemens 的建筑控制产品

在下面的状态图中有 3 个状态。我们从左右两个窗格都存在的地方开始。如果删除右窗格（删除点/红色流），则只剩下左窗格。如果删除左窗格（删除设备 - 蓝色流），两个窗格都消失，并且 UI 被重定向。

![删除建筑点和控制器](https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/ui-state/delete-states.PNG?raw=true)

在测试 UI 时，你可能选择删除右窗格（红色流），然后在另一个测试中，你可能选择删除左窗格（蓝色流）。这遗漏了通过状态图的最后一条路径，其中右窗格和左窗格被逐一删除。

我们已经在一个 UI 测试中涵盖了删除右窗格（红色路径）。为什么不避免重复进行此测试，利用应用程序操作，获取源代码中的删除函数，并使用 `cy.invoke()` 调用它呢？

```javascript
it('Component test: delete right pane and then left', () => {
  /* tests a SEQUENCE not covered with UI tests
   * tests a COMBINATION of components */
  appAction.deleteRightPane();
  cy.window().should('not.have.property', 'rightPaneComponent');
  cy.window().should('have.property', 'leftPaneComponent');

  appAction.deleteLeftPane();
  cy.window().should('not.have.property', 'leftPaneComponent');
  cy.window().should('not.have.property', 'rightPaneComponent');
  cy.url().should('match', redirectRoute);
});
```

#### 应用程序操作的优缺点

使用应用程序操作/拥有组件访问速度很快！测试不太容易受到变化的影响。一般来说，这是在较低级别进行测试的好处。然而，对于工程师而言，这可能会变得让人上瘾，开始忽视对用户界面的测试；优势可能变成劣势。

有一些反对应用程序的论点。开发人员可能认为 Cypress 对源代码的访问不理想。在 Cypress 具有官方组件测试支持之前，这没有反驳的理由。

应用程序操作的真正威力在于将应用程序操作与其他技术结合使用时显现出来；不重复 UI 工作流程来设置状态，将组件测试与视觉测试结合使用，将组件测试与网络操作结合使用，这些都是这种方法的亮点所在。

### 网络存根记录和回放

这是一种与 UI 集成测试密切相关的高级技术。回顾 UI 集成参考 [1](https://github.com/naodeng/ui-testing-best-practices/blob/master/testing-strategy/component-vs-integration-vs-e2e-testing.zh.md), [2](https://github.com/naodeng/ui-testing-best-practices/blob/master/real-life-examples/test-front-end-with-integration-back-end-with-e2e.zh.md)。

Cypress 允许你对所有网络流量进行存根。我们可以记录来自一个端点的网络数据，并在 UI 每次调用任意服务器时存根该响应。

首先，从开发者工具复制网络数据到一个 json 文件中。将其放置在 `cypress/fixtures` 文件夹中。这个文件夹专为此目的而创建，对它的任何引用都将默认指向文件夹的根目录。

![开发者工具 > 网络选项卡](https://github.com/naodeng/ui-testing-best-practices/blob/master/assets/images/ui-state/devtools-network.PNG?raw=true)

```javascript
// prerequisite: the data has been copied to a file `cypress/fixtures/agents.json`

// this is a shorthand for cy.fixture(). More at https://docs.cypress.io/api/commands/fixture.html#Accessing-Fixture-Data
cy.intercept('some-xhr-call-that-happens-upon-landing', { fixture: 'agents.json'} ).as('crutcXHR');
// all calls to the network route will be stubbed by the data in agents.json file
```

#### 如果有很多网络请求发生怎么办？

我们从哪里获取所有的模拟数据？我们不想手动复制和保存它们。我们希望在测试运行时记录它们，以便与真实的 API 进行比对。

至少有两个 Cypress 插件可以用于这个目的 [1](https://github.com/Nanciee/cypress-autorecord) 和 [2](https://github.com/scottschafer/cypressautomocker)。

如果这些插件不适用于你，你可以轻松使用以下三个函数创建自己的记录和回放工具。

```javascript
function stubRecorder(pathToJson) {
  const xhrData = []; // an empty array to hold the data
  cy.server({ // if recording, save the response data in the array
    onResponse: (response) => {
      const url = response.url;
      const method = response.method;
      const data = response.response.body;
      // We push a new entry into the xhrData array
      xhrData.push({ url, method, data });
    }
  });

  // cy.intercept() specification below is used as a selector for the data you want to record.
  // In this example, all GET requests from any url will be selected
  // You can specify the methods and routes that are recorded
  cy.log('recording!');
  cy.intercept({
    method: 'GET',
    url: '*',
  });

  // if recording, after the test runs, create a fixture file with the recorded data
  after(function () {
    cy.writeFile(`./cypress/fixtures/${pathToJson}.json`, xhrData);
    cy.log(`Wrote ${xhrData.length} XHR responses to local file ${pathToJson}.json`);
  });
}

/** Plays recorded fixture with all required network data as json*/
function playStubbedFixture(stateFixture) {
  cy.log(`playing fixture from ${stateFixture}`);
  cy.fixture(stateFixture, { timeout: 15000 }) // the fixture file may be large and take time in CI
    .each(({method, url, data}) => {
      cy.intercept(method, url, data);
    }).as(`stateFixture_stub`);
}

/** Visits the stubbed state */
function visitStubbedState(stubFile, url, wait: boolean = true) {
  playStubbedFixture(stubFile);
  cy.visit(url);
  if (wait) { // sometimes you do not want to wait for network, this gives you the option
    cy.wait('@stateFixture_stub', { timeout: 15000 });
  }
}

//////////
// usage

// recording network
it('should run your test', function () {
  stubrecorder('jsonfileNameForNetworkData');

  // your original test

  cy.wait(5000); // one-time wait so that the after() step records all the network without missing anything

  // the rest of your original test
});

// playing the stubbed network
it('should run your test', function () {
  // every time we visit this endpoint, all network will be stubbed
  // double check this by observing (XHR stubbed) network responses in the test runner
  visitStubbedState('jsonfileNameForNetworkData', '/endpoint');

  // the rest of your original test
});
```

#### 网络存根记录和回放的优缺点

UI 集成测试是 UI 测试的核心。它们在真实浏览器中运行整个应用程序，而不连接真实服务器。它们运行速度极快，对网络中的随机故障或错误负面影响较小。

工程师们必须认识到，这种优势如果被滥用可能成为一种诅咒。UI 应用程序是隔离的，但如果有网络故障，它们会被忽略。这对于功能分支测试非常有用，但在进一步的部署中，应确保后端也正常运行。请参阅 [使用集成测试前端，同时使用 E2E 测试后端](https://github.com/naodeng/ui-testing-best-practices/blob/master/real-life-examples/test-front-end-with-integration-back-end-with-e2e.zh.md) 了解何时使用哪种技术。

### 填充数据库

Cypress [`cy.task()`](https://docs.cypress.io/api/commands/task.html#Requirements) 功能非常强大。实际上，它允许你在 Cypress 上下文中使用 Node.js。这可以是任何内容，从 Node.js 代码到使用 npm 包来操纵数据库。如果你的应用程序使用 Node.js，你可以重用应用程序代码来帮助设置和操纵测试数据。

关于这个主题有一个 [Cypress 示例](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/server-communication__seeding-database-in-node)，我们将以此作为参考结束。

## 参考资料

* UI 测试最佳实践项目:<https://github.com/NoriSte/ui-testing-best-practices>
* UI 测试最佳实践项目中文翻译:<https://github.com/naodeng/ui-testing-best-practices>
