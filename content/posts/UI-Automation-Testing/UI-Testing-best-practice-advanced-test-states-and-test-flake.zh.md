---
author: "nao.deng"
title: "UI 测试最佳实践的进阶篇（一）：测试状态和不稳定的测试"
date: "2024-01-29T16:06:44+08:00"
summary: "这篇博文是 UI 测试最佳实践的进阶篇，首篇介绍测试状态和处理不稳定测试的方法。文章深入探讨了在 UI 测试中如何有效处理测试状态，以及应对测试不稳定性的最佳实践。读者将学到确保测试脚本可靠性的策略，包括等待机制、测试数据管理等方面的技巧。通过这个进阶篇的指南，读者能够更灵活地应对复杂的 UI 测试场景，确保测试结果的一致性和可信度。"
ZHtags: ["测试状态","不稳定的测试"]
ZHcategories: ["UI 测试", "进阶"]
ZHseries: ["UI 测试最佳实践"]
ShowWordCount: true
---

文章由 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices) 内容翻译而来，大家有条件的话可以去 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices)阅读原文。

## 测试状态

原文链接：<https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/test-states.md>

### 一段简要说明

测试应该是可重复的、模块化的，并且应该自己处理状态设置。为了为其他测试实现状态，不应该重复执行 UI 测试。

我们希望测试是无状态的，具有可扩展性：

- 测试应该独立处理其状态。
- 没有对外部产生不受控制的副作用，或者具有测试自身能够处理的可管理副作用。
- 测试应该能够被 *n* 个实体同时执行。

### 代码示例 – 解释说明

**可重复性**: 测试必须能够设置状态、执行测试，并在不影响下一个测试执行的前提下使环境保持干净。如果一个测试在每次执行时都使系统混乱，将其留在无法重置的状态，那么这个测试就适合作为手动测试。测试还不能互相冲突：多个测试者和流水线必须能够同时执行相同的测试。如果这不可行，这些测试组应该每天在流水线中执行一次，最好在非工作时间执行 [cron 作业](https://crontab.guru/#0_1-23_*_*_6-7)。

每个需要更改环境状态的测试都必须被用作设置 - 状态 - 测试，并确保在下一个测试之前能够清理测试环境。

最好是 UI 测试不要重复作为设置测试；在必须将 UI 测试用作另一个测试的设置的情况下，应该使用 API 测试、应用程序操作或数据库初始化。

**设置 vs 清理**: 设置（之前全部）优于清理（之后全部）。在可能的情况下，测试本身应该负责在一个干净的环境中开始。然而，正如上面强调的，测试不能使得在它们执行后下一个测试无法清理环境。

**登录**: UI 登录的各种形式应仅在其各自的测试用例中使用。任何其他需要登录的测试应该使用内部的 API 登录和/或具有预配置的测试用户。

**测试状态设置**: 鼓励测试是隔离的，以便它们在执行之前不依赖于整个设置。例如：如果一组测试可能需要创建用户，可以利用一个测试用户在隔离中使用这些测试。另一方面，设置用户的测试应该是独立的和隔离的。

**模块化**: 每个测试应该能够独立运行，不依赖于其他测试来为其设置状态。如果需要进行这样的设置，应该在 `beforeAll` 或 `beforeEach` 部分进行。测试这一点的一个好方法是在隔离中运行测试：`it.only()`，`fit()`，等等。

```JavaScript
describe('..', function () {

  // setup (before/beforeEach) is preferred over cleanup (after/afterEach)

  before(function () {
    // login with UI once in an isolated test
    // for login here and all other tests, use a faster login method: use API, App Actions or DB seeding
  });

  beforeEach(function () {
    // setup additional state...
    // have one UI test to ensure this state can be achieved
    // however for the state set up here, utilize API, Application Actions or DB seeding; do not repeat UI tests
  });

    // test each test once with .only to ensure modularity
    it('..', function () {..});
    it('..', function () {..});
    it.only('..', function () {..});
    it('..', function () {..});

});

```

### 测试状态参考资料

[放弃使用页面对象，转而使用应用动作](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)

[Cypress 文档：测试组织、登录、状态控制](https://docs.cypress.io/guides/references/best-practices.html#Organizing-Tests-Logging-In-Controlling-State)

## 不稳定的测试

原文链接：<https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/advanced/test-flake.md>

### 一段简要说明

每次测试都必须产生一致的结果，而可重复的流水线执行结果则是至关重要的。如果测试无法产生可靠的结果，将降低对测试的信心，还需要进行维护，这将降低所有价值。在这些情况下，最好进行手动功能测试。

并请自问以下几个问题：

- 如何解决测试波动，通过成长的过程确保测试的可信度？
- 如何处理流水线、基础设施、共享资源等方面的假阴性，并在没有控制的情况下解决？
- 如何发现零星缺陷？

### 第一步：本地识别不稳定的测试

推荐在模拟流水线 CI 机器的操作系统中进行无头模式执行；Linux 和 MacOS 与流水线的行为更为相似，而 Windows 则是个例外，除非你正在使用 Windows Docker 容器。无头执行将更容易暴露测试波动。有多种方法可以重复执行测试规范，Cypress 提供的一个例子是使用 Lodash 库（Cypress 已经内置了）`Cypress._.times( <重复次数>, () => { <你的测试规范代码> })`。在提交代码合并请求之前，务必使用此方法。

#### 第一步的代码示例

```JavaScript
// will repeat the full suite 10 times
Cypress._.times( 10, function {

  describe('..', function () {

    before(function () {
    });

    beforeEach(function () {
    });

      // you can place it anywhere to repeat 1 test, or another describe / context block
      Cypress._.times( 3, function {
        it('..', function () {..});
      }
      it('..', function () {..});
      it('..', function () {..});
      it('..', function () {..});

  });
});

// this will result in 6 tests per run x 10 runs = 60 executions

```

### 第二步：在流水线中识别不稳定的测试并进行重试

在初始的流水线顺利通过并合并代码后，**有时**测试会出现失败的情况。

为什么测试在**没有可重现的缺陷**且**测试代码已经完全优化的情况下仍然失败呢**？

为了解决这种零星的失败问题，以及避免测试被忽略或**降低团队对其的信心**，我们可以采用重试机制：

- 用以解决团队无法掌控的不可靠流水线基础设施问题
- 在开发中遇到的问题，或者依赖于正在开发中的外部服务
- 最为重要的是，**用于锁定零星的系统问题**

#### 第二步的代码示例

许多框架都提供了重试实用工具。下面是一个例子来自于 [Cypress 文档](https://docs.cypress.io/guides/references/migration-guide.html#Tests-retries):

在一个测试中：

```javascript
it('allows user to login', { // can also be in a context or describe block
  retries: {
    runMode: 2, // for CI usage
    openMode: 1  // for local usage
  }
}, () => {
  // ...
})
```

在配置文件中，例如 `cypress.json`:

```json
{
  "retries": {
    "runMode": 1,
    "openMode": 3
  }
}

```

### 第三步：识别零星的系统问题 - *不稳定的系统*

鉴于以下情况：

- 不存在可重现的缺陷
- 测试代码已经充分优化
- 已知并通过测试重试有效解决了流水线问题
- 已知、认可并通过测试重试解决了外部依赖和成长痛苦

... 我们如何检测系统存在的更深层次问题，这可能表明存在*不稳定的系统*？以下是团队[Cypress 仪表板](https://www.cypress.io/dashboard/)上的一个示例快照：

>*“在周末的 40 次执行中，它以 10% 的错误率失败... 我们运行了测试套件 40 次，在其中的一次执行中看到该规范重试了 2 次，直到通过...”*
![ ](https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/test-retry-pipeline.png?raw=true)

*请注意：相机图标表示一些测试失败，因为 Cypress 在失败时会拍摄视频和截图。*

在这些情况下，可以通过每晚或周末的 [cron 任务](https://crontab.guru/#0_1-23_*_*_6-7) 进行一致性测试，作为更深层次系统问题的初始指标。这些通常是那些容易泄漏到生产环境中、在实际使用中被发现并具有昂贵后果的模糊缺陷。

#### 代码示例 - [cron 任务](https://crontab.guru/#0_1-23_*_*_6-7)

```cron syntax
at minute 0 at midnight and 2 am, every day-of-week from Monday through Friday:

0 0,2 * * 1-5


At minute 0 past hour 2, 6, 8, 10, 12, 14, 16, 18, and 20 on every day-of-week from Saturday through Sunday:

0 2,6,8,10,12,14,16,18,20 * * 6-7
```

一旦排除了所有其他因素，并且在管道中使用 cron 任务自动化测试初步指示了“系统波动”，这些问题就是**性能测试**的理想候选项，因为这种测试方法可以直接指出可能导致“不稳定的系统”的系统缺陷。

性能测试的要点如下：
![ ](https://github.com/NoriSte/ui-testing-best-practices/blob/master/assets/images/performanceTesting.jpg?raw=true)

有许多性能测试工具，其中一个我们认为比较易于使用的是 [k6-loadImpact](https://docs.k6.io/docs)，因为它采用了 ES6 语法，并且与流水线兼容。
你可以在 [这里](https://github.com/muratkeremozcan/k6-loadImpact) 找到一个包含代码示例的简单教程。

### 不稳定的测试参考资料

[Google 测试博客：我们的测试中哪些是不稳定的，是从哪些方面产生的](https://testing.googleblog.com/2017/04/where-do-our-flaky-tests-come-from.html)

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
