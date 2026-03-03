---
title: "自动化测试 ｜ Automated Testing"
description: "自动化测试 (Automated Testing) 是指利用软件工具执行预先编写的测试脚本 (Test Scripts)，以验证软件应用程序的功能、性能和可靠性的过程。与每一步都需要人工参与的手工测试 (Manual Testing) 不同，自动化测试一旦设置完成，运行时的手工干预极少，并且可以重复执行。"
section: "A"
related:
  - manual-testing
  - test-case
  - web-testing
  - test-script
  - test-case-management
order: 0
---

# 自动化测试 ｜ Automated Testing

<!-- TOC START -->

- [自动化测试 ｜ Automated Testing](#自动化测试--automated-testing)
  - [相关术语](#相关术语)
    - [另请参阅：](#另请参阅)
  - [有关自动化测试的问题吗？](#有关自动化测试的问题吗)
    - [基础知识和重要性](#基础知识和重要性)
      - [什么是自动化测试？](#什么是自动化测试)
      - [为什么自动化测试很重要？](#为什么自动化测试很重要)
      - [自动化测试的优点和缺点是什么？](#自动化测试的优点和缺点是什么)
      - [自动化测试如何融入软件开发生命周期？](#自动化测试如何融入软件开发生命周期)
      - [手动测试和自动化测试有什么区别？](#手动测试和自动化测试有什么区别)
    - [工具和技术](#工具和技术)
      - [自动化测试常用的工具有哪些？](#自动化测试常用的工具有哪些)
      - [这些工具之间有什么区别？](#这些工具之间有什么区别)
      - [如何为特定测试任务选择正确的工具？](#如何为特定测试任务选择正确的工具)
      - [自动化测试中常用的技术有哪些？](#自动化测试中常用的技术有哪些)
      - [自动化测试工具如何集成到 CI/CD 管道中？](#自动化测试工具如何集成到-cicd-管道中)
    - [测试用例和脚本](#测试用例和脚本)
      - [如何为自动化测试开发测试用例？](#如何为自动化测试开发测试用例)
      - [自动化测试中的测试脚本是什么？](#自动化测试中的测试脚本是什么)
      - [您如何确保您的测试用例涵盖所有可能的场景？](#您如何确保您的测试用例涵盖所有可能的场景)
      - [编写测试脚本的最佳实践有哪些？](#编写测试脚本的最佳实践有哪些)
      - [随着时间的推移，如何管理和维护测试用例和脚本？](#随着时间的推移如何管理和维护测试用例和脚本)
    - [自动化测试的类型](#自动化测试的类型)
      - [什么是单元测试？](#什么是单元测试)
      - [什么是集成测试？](#什么是集成测试)
      - [什么是系统测试？](#什么是系统测试)
      - [什么是回归测试？](#什么是回归测试)
      - [黑盒测试和白盒测试有什么区别？](#黑盒测试和白盒测试有什么区别)
      - [什么是端到端 (e2e) 测试以及为什么它很重要？](#什么是端到端-e2e-测试以及为什么它很重要)
    - [高级概念](#高级概念)
      - [什么是测试驱动开发 (TDD) 以及它与自动化测试有何关系？](#什么是测试驱动开发-tdd-以及它与自动化测试有何关系)
      - [什么是行为驱动开发 (BDD) 以及它与自动化测试有何关系？](#什么是行为驱动开发-bdd-以及它与自动化测试有何关系)
      - [什么是数据驱动测试？](#什么是数据驱动测试)
      - [什么是关键字驱动测试？](#什么是关键字驱动测试)
      - [人工智能和机器学习在自动化测试中的作用是什么？](#人工智能和机器学习在自动化测试中的作用是什么)
<!-- TOC END -->
自动化测试使用脚本执行重复性任务，提高软件性能和测试效率。它增强了测试覆盖率和执行速度，使得软件测试过程更有效。

## 相关术语

- [手动测试](/zh-cn/wiki/manual-testing/)
- [测试自动化](/zh-cn/wiki/test-automation/)

### 另请参阅：

- [维基百科](https://en.wikipedia.org/wiki/Test_automation)

## 有关自动化测试的问题吗？

### 基础知识和重要性

#### 什么是自动化测试？

[自动化测试](/zh-cn/wiki/automated-testing/) 是通过软件工具执行预先编写的[测试脚本](/zh-cn/wiki/test-script/) 来验证软件应用程序的功能、性能和可靠性的过程。与每一步都需要人工干预的 [手动测试](/zh-cn/wiki/manual-testing/) 不同，自动化测试一旦设置好并可以重复执行，就可以在最少的人工监督下运行。
  测试通常使用与应用程序代码相同或不同的语言编写，并且被设计为可重用和可维护。它们的范围可以从验证单个组件的简单单元测试到验证应用程序内整个工作流程的复杂端到端测试。
  自动化测试作为持续集成/持续部署 (CI/CD) 管道的一部分被触发，确保新的代码更改不会引入回归。这对于在快节奏的开发环境中维护[软件质量](/zh-cn/wiki/software-quality/) 至关重要。

```
  // Example of a simple automated test script in TypeScript
  import { expect } from 'chai';
  import { Calculator } from './Calculator';
  describe('Calculator', () => {
    it('should add two numbers correctly', () => {
      const calculator = new Calculator();
      expect(calculator.add(2, 3)).to.equal(5);
    });
  });
```
有效的[自动化测试](/zh-cn/wiki/automated-testing/) 依赖于选择适当的工具和框架，开发强大的[测试用例](/zh-cn/wiki/test-case/)，并随着应用程序的发展对其进行维护。确保全面的 [测试覆盖率](/zh-cn/wiki/test-coverage/) 以便在部署之前捕获尽可能多的问题也很重要。随着人工智能和机器学习的进步，[自动化测试](/zh-cn/wiki/automated-testing/) 变得更加智能，能够以更少的手动输入来预测和适应软件的变化。

#### 为什么自动化测试很重要？

[自动化测试](/zh-cn/wiki/automated-testing/) 对于 **确保 [软件质量](/zh-cn/wiki/software-quality/)** 以 [手动测试](/zh-cn/wiki/manual-testing/) 无法比拟的速度和规模至关重要。它使团队能够在更短的时间内执行更多的测试，提供有关代码更改的**快速反馈**。这对于敏捷和 DevOps 等现代开发实践至关重要，其中持续集成和交付是关键。自动化通过允许频繁且一致的测试来支持这些方法，从而尽早发现缺陷，从而减少修复[bugs](/zh-cn/wiki/bug/)的成本和工作量。
  此外，自动化测试可以**重复**运行，几乎不需要额外的成本，确保以前开发的功能在新的更改后仍然有效（[回归测试](/zh-cn/wiki/regression-testing/)）。它们还允许跨各种环境和设备**并行执行**，从而提高[测试覆盖率](/zh-cn/wiki/test-coverage/)和效率。自动化测试可产生**可靠的结果**，减少人为错误，并提供有助于调试的详细日志。
  本质上，[自动化测试](/zh-cn/wiki/automated-testing/) 是 **[质量保证](/zh-cn/wiki/quality-assurance/) 战略**的基石，旨在及时交付强大的软件。它通过处理重复、耗时的任务来补充[手动测试](/zh-cn/wiki/manual-testing/)工作，使人类测试人员能够专注于更复杂的[探索性测试](/zh-cn/wiki/exploratory-testing/)场景。

#### 自动化测试的优点和缺点是什么？

[自动化测试](/zh-cn/wiki/automated-testing/) 的好处：

- **速度和效率**：自动化测试比手动测试运行得更快，可以在更短的时间内进行更多的测试。
- **可重用性**：测试脚本可以在不同版本的应用程序中重用，从而节省测试准备时间。
- **一致性**：确保每次都以相同的方式执行测试，消除人为错误。
- **覆盖率**：实现手动可能不切实际的彻底测试，包括复杂的场景和大型数据集。
- **持续集成**：通过允许测试在发生更改时自动运行来促进 CI/CD。
- **早期[Bug](/zh-cn/wiki/bug/)检测**：可以在开发过程中快速识别错误，从而降低修复成本。
- **[非功能测试](/zh-cn/wiki/non-functional-testing/)** ：非常适合难以手动执行的性能、负载和压力测试。 [自动化测试](/zh-cn/wiki/automated-testing/) 的缺点：

- **初始投资**：工具和设置测试环境的前期成本很高。
- **维护**：测试脚本需要定期更新以应对应用程序中的更改。
- **学习曲线**：团队需要时间来学习工具并开发有效的测试。
- **范围有限**：无法像人类一样处理视觉参考或用户体验评估。
- **[误报](/zh-cn/wiki/false-positive/)/Negatives**：自动化测试可能会报告不是错误的故障（误报）或遗漏错误（漏报）。
- **复杂[环境搭建](/zh-cn/wiki/setup/)** ：某些测试场景自动化起来很复杂，可能不值得付出努力。
- **工具限制**：工具可能不支持每种技术或应用程序类型，从而限制了它们的使用。
- **速度和效率**：自动化测试比手动测试运行得更快，可以在更短的时间内进行更多的测试。
- **可重用性**：测试脚本可以在不同版本的应用程序中重用，从而节省测试准备时间。
- **一致性**：确保每次都以相同的方式执行测试，消除人为错误。
- **覆盖率**：实现手动可能不切实际的彻底测试，包括复杂的场景和大型数据集。
- **持续集成**：通过允许测试在发生更改时自动运行来促进 CI/CD。
- **早期[Bug](/zh-cn/wiki/bug/)检测**：可以在开发过程中快速识别错误，从而降低修复成本。
- **[非功能测试](/zh-cn/wiki/non-functional-testing/)** ：非常适合难以手动执行的性能、负载和压力测试。
- **初始投资**：工具和设置测试环境的前期成本很高。
- **维护**：测试脚本需要定期更新以应对应用程序中的更改。
- **学习曲线**：团队需要时间来学习工具并开发有效的测试。
- **范围有限**：无法像人类一样处理视觉参考或用户体验评估。
- **[误报](/zh-cn/wiki/false-positive/)/Negatives**：自动化测试可能会报告不是错误的故障（误报）或错过错误（漏报）。
- **复杂[环境搭建](/zh-cn/wiki/setup/)** ：某些测试场景自动化起来很复杂，可能不值得付出努力。
- **工具限制**：工具可能不支持每种技术或应用程序类型，从而限制了它们的使用。

#### 自动化测试如何融入软件开发生命周期？

[自动化测试](/zh-cn/wiki/automated-testing/) 无缝集成到软件开发生命周期 (SDLC) 的各个阶段，提高效率和可靠性。在**需求阶段**，计划自动化测试，与验收标准保持一致。在**设计和开发阶段**，通常遵循 TDD 实践来实施自动化单元测试。当功能完成时，自动化集成测试会验证组件交互。
  在**测试阶段**，自动化回归测试确保新的更改不会破坏现有功能，而自动化系统测试则验证整个软件。自动化端到端测试模仿用户行为，涵盖整个应用程序流程。对于**部署**，自动化测试在 CI/CD 管道中至关重要，可以提供有关构建运行状况的即时反馈。
  部署后，自动化测试继续支持**维护阶段**，快速识别补丁或更新引入的问题。在整个 SDLC 中，自动化测试得到维护和完善，以适应不断变化的应用程序需求并覆盖新场景。
  [自动化测试](/zh-cn/wiki/automated-testing/) 的角色是迭代和连续的，与敏捷和 DevOps 方法论保持一致，以支持快速开发周期和频繁发布。它确保质量从一开始就融入到产品中，并在整个生命周期中得到维护。

```
  // Example of a simple automated unit test in TypeScript
  import { add } from './math';
  describe('add function', () => {
    it('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });
  });
```

#### 手动测试和自动化测试有什么区别？

[手动测试](/zh-cn/wiki/manual-testing/) 涉及人类测试人员在没有工具或脚本帮助的情况下执行[测试用例](/zh-cn/wiki/test-case/)。另一方面，[自动化测试](/zh-cn/wiki/automated-testing/) 使用软件工具自动运行测试，管理测试的执行以及实际结果与预测结果的比较。
  主要区别是：

- **执行**：手动测试的每一步都需要人工干预，而自动化测试则由软件执行。
- **速度**：一旦开发出测试，自动化测试就会明显加快。
- **一致性**：自动化测试可以在相同条件下重复运行，确保一致性。手动测试可能会出现人为错误。
- **初始成本**：与手动测试相比，设置自动化测试需要更多的时间和资源。
- **维护**：自动化测试需要维护，以在应用程序发生变化时保持其有效性，而手动测试更能适应变化，无需额外设置。
- **可扩展性**：自动化测试可以处理大量测试并且具有可扩展性，这对手动测试来说是一个挑战。
- **复杂性**：一些复杂的用户交互可能很难自动化，最好手动评估。
- **反馈**：手动测试可以提供即时的定性反馈，而自动化测试则无法提供。
- **[用例](/zh-cn/wiki/use-case/)** ：手动测试通常更适合探索性、可用性和临时测试。自动化测试非常适合回归、负载和性能测试等。 在实践中，利用两种方法的优势的平衡方法通常是最有效的策略。

### 工具和技术

#### 自动化测试常用的工具有哪些？

[自动化测试](/zh-cn/wiki/automated-testing/) 的常用工具包括：

- **[selenium](/zh-cn/wiki/selenium/)** ：用于跨各种浏览器和平台测试 Web 应用程序的开源框架。它支持多种编程语言，如 Java、C# 和 Python。

```
  WebDriver driver = new ChromeDriver();
  driver.get("http://www.example.com");
```

- **Appium**：用于在 iOS 和 Android 平台上自动化移动应用程序的开源工具。它使用 WebDriver 协议。

```
  DesiredCapabilities caps = new DesiredCapabilities();
  caps.setCapability("platformName", "iOS");
  caps.setCapability("deviceName", "iPhone Simulator");
```

- **JUnit**和 **TestNG**：Java 中的单元测试框架，提供注释和断言来帮助构建和运行测试。

```
  @Test
  public void testMethod() {
    assertEquals(1, 1);
  }
```

- **[Cypress](/zh-cn/wiki/cypress/)** ：一个在浏览器中运行的基于 JavaScript 的端到端测试框架，可以对浏览器中运行的任何内容进行快速、简单且可靠的测试。

```
  describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
    })
  })
```

- **Robot Framework**：用于验收测试和验收测试驱动开发（ATDD）的关键字驱动测试自动化框架。

```
  *** Test Cases ***
  Valid Login
      Open Browser To Login Page
      Input Username    demo
      Input Password    mode
      Submit Credentials
```

- **[Postman](/zh-cn/wiki/postman/)** ：API 测试工具，允许用户发送 HTTP 请求并分析响应、创建自动化测试以及与 CI/CD 管道集成。

```
  {
    "id": "f2955b9f-da77-4f80-8f1c-9f8b0d8f2b7d",
    "name": "API Test",
    "request": {
      "method": "GET",
      "url": "https://api.example.com/v1/users"
    }
  }
```

- **Cucumber** ：支持行为驱动开发（BDD），允许用简单的语言规范应用程序行为。

```
  Feature: Login functionality
    Scenario: Successful login with valid credentials
      Given the user is on the login page
      When the user enters valid credentials
      Then the user is redirected to the homepage
```
这些工具提供了满足不同测试需求的各种功能，从单元和[集成测试](/zh-cn/wiki/integration-testing/) 到端到端和[API 测试](/zh-cn/wiki/api-testing/)。

- **[selenium](/zh-cn/wiki/selenium/)** ：用于跨各种浏览器和平台测试 Web 应用程序的开源框架。它支持多种编程语言，如 Java、C# 和 Python。
- **Appium**：用于在 iOS 和 Android 平台上自动化移动应用程序的开源工具。它使用 WebDriver 协议。
- **JUnit**和 **TestNG**：Java 中的单元测试框架，提供注释和断言来帮助构建和运行测试。

- **[Cypress](/zh-cn/wiki/cypress/)** ：一个在浏览器中运行的基于 JavaScript 的端到端测试框架，可以对浏览器中运行的任何内容进行快速、简单且可靠的测试。
- **Robot Framework**：用于验收测试和验收测试驱动开发（ATDD）的关键字驱动测试自动化框架。
- **[Postman](/zh-cn/wiki/postman/)** ：API 测试工具，允许用户发送 HTTP 请求并分析响应、创建自动化测试以及与 CI/CD 管道集成。
- **Cucumber** ：支持行为驱动开发（BDD），允许用简单的语言规范应用程序行为。

#### 这些工具之间有什么区别？

不同的[自动化测试](/zh-cn/wiki/automated-testing/) 工具具有独特的特性、功能和[用例](/zh-cn/wiki/use-case/)。这是一个简短的比较：

- **[selenium](/zh-cn/wiki/selenium/)** ：用于跨不同浏览器和平台测试 Web 应用程序的开源工具。它支持多种编程语言并与各种框架集成。

```
  WebDriver driver = new ChromeDriver();
  driver.get("http://www.example.com");
```

- **QTP/UFT (Unified [功能测试](/zh-cn/wiki/functional-testing/))** ：Micro Focus 的一款商业工具，用于功能和回归测试，重点关注桌面和 Web 应用程序。它使用 VBScript 并以其录制和播放功能而闻名。

```
  Browser("Example").Page("Home").Link("Login").Click
```

- **TestComplete**：另一个支持桌面、移动和 Web 应用程序的商业工具。它提供基于脚本和关键字驱动的测试，并支持各种脚本语言。

```
  Sys.Browser("*").Page("http://www.example.com").Link("Login").Click();
```

- **[Cypress](/zh-cn/wiki/cypress/)** ：专为现代 Web 应用程序设计的基于 JavaScript 的端到端测试框架。它在与应用程序相同的运行循环中运行测试，提供实时反馈和更快的测试执行。

```
  cy.visit('http://www.example.com');
  cy.contains('Login').click();
```

- **[Jest](/zh-cn/wiki/jest/)** ：一个 JavaScript 测试框架，注重简单性，支持单元和集成测试。它与 React 和其他现代 JavaScript 库配合良好。

```
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
```

- **Appium**：用于移动应用程序自动化测试的开源工具。它支持本机、混合和移动 Web 应用程序，并可与任何测试框架配合使用。

```
  driver.findElement(By.id("com.example:id/login")).click();
```

- **Robot Framework**：使用表格测试数据语法的关键字驱动的测试自动化框架。对于不熟悉编程的人来说很容易学习，并与 Selenium 集成进行 Web 测试。

```
  *** Test Cases ***
  Login Test
      Open Browser    http://www.example.com    Chrome
      Click Link    Login
```
每个工具都有其优点，选择通常取决于被测应用程序、首选编程语言以及测试过程的具体要求。

- **[selenium](/zh-cn/wiki/selenium/)** ：用于跨不同浏览器和平台测试 Web 应用程序的开源工具。它支持多种编程语言并与各种框架集成。
- **QTP/UFT (Unified [功能测试](/zh-cn/wiki/functional-testing/))** ：Micro Focus 的一款商业工具，用于功能和回归测试，重点关注桌面和 Web 应用程序。它使用 VBScript 并以其录制和播放功能而闻名。
- **TestComplete**：另一个支持桌面、移动和 Web 应用程序的商业工具。它提供基于脚本和关键字驱动的测试，并支持各种脚本语言。
- **[Cypress](/zh-cn/wiki/cypress/)** ：专为现代 Web 应用程序设计的基于 JavaScript 的端到端测试框架。它在与应用程序相同的运行循环中运行测试，提供实时反馈和更快的测试执行。
- **[Jest](/zh-cn/wiki/jest/)** ：一个 JavaScript 测试框架，注重简单性，支持单元和集成测试。它与 React 和其他现代 JavaScript 库配合良好。
- **Appium**：用于移动应用程序自动化测试的开源工具。它支持本机、混合和移动 Web 应用程序，并可与任何测试框架配合使用。
- **Robot Framework**：使用表格测试数据语法的关键字驱动的测试自动化框架。对于不熟悉编程的人来说很容易学习，并与 Selenium 集成进行 Web 测试。

#### 如何为特定测试任务选择正确的工具？

为特定测试任务选择正确的工具涉及几个考虑因素：

- **兼容性**：确保该工具支持您的应用程序的技术堆栈（例如，网络、移动、桌面）。
- **可用性**：寻找适合您团队技能的工具。如果学习曲线陡峭的工具会影响生产力，那么它可能不是最佳选择。
- **集成**：该工具应与您现有的工具和工作流程无缝集成，例如版本控制、CI/CD 管道和问题跟踪系统。
- **可扩展性**：考虑该工具是否可以随着应用程序的增长而处理其大小和复杂性。
- **灵活性**：编写自定义函数或与其他工具集成的能力对于复杂的测试场景至关重要。
- **报告**：详细的报告和分析可以帮助快速识别趋势并查明问题。
- **支持和社​​区**：强大的社区和供应商支持对于故障排除和保持工具保持最新状态非常宝贵。
- **成本**：根据您的预算评估工具的成本，包括许可、维护和潜在的培训成本。
- **性能**：该工具应快速有效地执行测试，以跟上快速的开发周期。
- **可靠性**：选择具有经过验证的稳定性记录的工具，以避免不稳定的测试和不一致的结果。 通过根据测试任务的特定需求权衡这些因素，您可以选择能够提高测试效率和有效性的工具。请记住，随着您的需求和工具本身的发展，定期重新评估您的选择。

#### 自动化测试中常用的技术有哪些？

[自动化测试](/zh-cn/wiki/automated-testing/) 中的常用技术包括：

- **[页面对象模型](/zh-cn/wiki/page-object-model/) (POM)**：将页面元素和交互封装在类中，促进代码重用和[可维护性](/zh-cn/wiki/maintainability/)。
- **模块化测试**：将测试分解为更小的、可管理的具有独立[测试脚本](/zh-cn/wiki/test-script/)的模块，增强[可维护性](/zh-cn/wiki/maintainability/)和可扩展性。
- **混合测试框架**：结合各种测试方法，例如关键字驱动和数据驱动，以发挥其优势。
- **行为驱动开发 ([BDD](/zh-cn/wiki/bdd/))**：使用自然语言描述来定义应用程序的行为，促进利益相关者之间的沟通。
- **[测试驱动开发](/zh-cn/wiki/test-driven-development/) (TDD)**：涉及在实际代码之前编写[测试用例](/zh-cn/wiki/test-case/)，确保软件在构建时考虑到测试。
- **数据驱动测试**：使用外部数据源将多个数据集输入[测试用例](/zh-cn/wiki/test-case/)，提高覆盖范围和效率。
- **关键字驱动测试**：使用表示操作和数据的关键字定义测试，使测试更易于理解和维护。
- **持续测试**：将测试集成到持续集成和交付管道中，提供有关构建运行状况的即时反馈。
- **并行测试**：跨不同环境同时执​​行多个测试，减少[测试执行](/zh-cn/wiki/test-execution/)所需的时间。
- **[API 测试](/zh-cn/wiki/api-testing/)**：专注于直接测试 [API](/zh-cn/wiki/api/) 的功能、可靠性、性能和安全性，通常级别低于 UI 测试。
- **模拟和存根**：使用模拟对象和存根来模拟真实组件的行为，从而允许对系统的各个部分进行隔离测试。
- **[视觉回归测试](/zh-cn/wiki/visual-regression-testing/)**：通过将当前屏幕截图与基线图像进行比较来检测意外的视觉变化。
- **负载和[性能测试](/zh-cn/wiki/performance-testing/)**：模拟软件上的用户负载，以检查不同条件下的性能和可扩展性。
- **[安全测试](/zh-cn/wiki/security-testing/)**：自动脚本探测应用程序的漏洞，确保软件免受潜在攻击。 这些技术可以组合和定制，以满足特定的项目要求，确保强大而高效的[自动化测试](/zh-cn/wiki/automated-testing/)流程。

#### 自动化测试工具如何集成到 CI/CD 管道中？

将 [自动化测试](/zh-cn/wiki/automated-testing/) 工具集成到 CI/CD 管道中涉及几个步骤：

1. **选择合适的工具**与您的 CI/CD 服务器无缝集成（例如 Jenkins、GitLab CI、CircleCI）。

2. **配置 CI/CD 服务器**触发自动化测试。这通常是通过在管道配置文件中定义作业或阶段来完成的。

3. **设置[测试环境](/zh-cn/wiki/test-environment/)**自动化测试将在哪里运行。这可以是专用的测试服务器、容器化环境或基于云的服务。

4. **写[测试脚本](/zh-cn/wiki/test-script/)**兼容CI/CD环境，无需人工干预即可执行。

5. **存储[测试脚本](/zh-cn/wiki/test-script/)**在版本控制系统中，与应用程序代码一起维护版本控制和更改跟踪。

6. **定义触发器**用于自动化测试，例如每次提交、夜间构建或按需测试。

7. **执行测试**作为管道的一部分，并确保将测试结果报告回 CI/CD 服务器。

8. **处理测试结果**通过设置通知、仪表板或与其他工具集成进行结果分析。

9. **Manage [测试数据](/zh-cn/wiki/test-data/)**和依赖关系，以确保测试运行之间的一致性。

10. **自动化部署**在运行测试之前将应用程序添加到测试环境。 Jenkinsfile 的示例管道配置片段：

```
  pipeline {
      agent any
      stages {
          stage('Test') {
              steps {
                  // Checkout code
                  checkout scm
                  // Run tests
                  script {
                      // Execute test command
                      sh 'npm test'
                  }
              }
              post {
                  always {
                      // Publish test results
                      junit '**/target/surefire-reports/TEST-*.xml'
                  }
              }
          }
      }
  }
```
确保管道设计为在测试失败时**停止部署**，从而保持发布的质量。定期**审查和更新** [测试用例](/zh-cn/wiki/test-case/) 和脚本以适应应用程序中的更改。

1. **选择合适的工具**与您的 CI/CD 服务器无缝集成（例如 Jenkins、GitLab CI、CircleCI）。

2. **配置 CI/CD 服务器**触发自动化测试。这通常是通过在管道配置文件中定义作业或阶段来完成的。

3. **设置[测试环境](/zh-cn/wiki/test-environment/)**自动化测试将在哪里运行。这可以是专用的测试服务器、容器化环境或基于云的服务。

4. **写[测试脚本](/zh-cn/wiki/test-script/)**兼容CI/CD环境，无需人工干预即可执行。

5. **存储[测试脚本](/zh-cn/wiki/test-script/)**在版本控制系统中，与应用程序代码一起维护版本控制和更改跟踪。

6. **定义触发器**用于自动化测试，例如每次提交、夜间构建或按需测试。

7. **执行测试**作为管道的一部分，并确保将测试结果报告回 CI/CD 服务器。

8. **处理测试结果**通过设置通知、仪表板或与其他工具集成进行结果分析。

9. **管理[测试数据](/zh-cn/wiki/test-data/)**和依赖关系，以确保测试运行之间的一致性。

10. **自动化部署**在运行测试之前将应用程序添加到测试环境。

### 测试用例和脚本

#### 如何为自动化测试开发测试用例？

为[自动化测试](/zh-cn/wiki/automated-testing/) 开发[测试用例](/zh-cn/wiki/test-case/) 涉及几个步骤：

1. **确定测试需求**：分析被测应用程序 (AUT) 以确定测试需求。重点关注特性、功能以及高风险或频繁变化的区域。
2. **定义测试目标**：明确说明每个[测试用例](/zh-cn/wiki/test-case/) 应验证的内容。目标应该具体、可衡量，并与用户故事或需求保持一致。
3. **设计[测试用例](/zh-cn/wiki/test-case/)**：创建详细的[测试用例](/zh-cn/wiki/test-case/)，其中包括前提条件、[测试数据](/zh-cn/wiki/test-data/)、要执行的操作和[预期结果](/zh-cn/wiki/expected-result/)。确保它们可重复使用和可维护。
4. **参数化测试**：使用参数使[测试用例](/zh-cn/wiki/test-case/)数据驱动，允许使用同一脚本测试多个数据集。
5. **创建断言**：实施断言以根据预期结果检查 AUT 的响应。断言对于确定测试的通过/失败状态至关重要。
6. **开发[测试脚本](/zh-cn/wiki/test-script/)**：使用自动化工具或框架编写脚本。遵循最佳编码实践，例如使用 [页面对象模型](/zh-cn/wiki/page-object-model/) 进行 UI 测试，将测试逻辑与特定于页面的代码分开。
7. **设置[测试环境](/zh-cn/wiki/test-environment/)**：配置运行测试所需的环境，包括浏览器、[数据库](/zh-cn/wiki/database/) 和任何其他依赖项。
8. **实现[测试执行](/zh-cn/wiki/test-execution/)逻辑**：定义如何执行测试，包括顺序、依赖关系以及测试前/测试后步骤的处理。
9. **审查和完善**：同行评审或演练可以帮助及早发现问题。根据需要进行重构，以提高清晰度、效率和[可维护性](/zh-cn/wiki/maintainability/)。
10. **版本控制**：将[测试用例](/zh-cn/wiki/test-case/) 和脚本存储在版本控制系统中，以跟踪更改并与团队成员协作。
11. **与 CI/CD 集成**：作为 CI/CD 管道的一部分自动执行[测试用例](/zh-cn/wiki/test-case/)，以确保每次构建或发布时持续验证 AUT。 通过遵循这些步骤，[测试自动化](/zh-cn/wiki/test-automation/) 工程师可以创建健壮、可靠且有效的自动化[测试用例](/zh-cn/wiki/test-case/)，从而有助于提高软件产品的整体质量。

1. **确定测试需求**：分析被测应用程序 (AUT) 以确定测试需求。重点关注特性、功能以及高风险或频繁变化的区域。
2. **定义测试目标**：明确说明每个[测试用例](/zh-cn/wiki/test-case/) 应验证的内容。目标应该具体、可衡量，并与用户故事或需求保持一致。
3. **设计[测试用例](/zh-cn/wiki/test-case/)**：创建详细的[测试用例](/zh-cn/wiki/test-case/)，其中包括先决条件、[测试数据](/zh-cn/wiki/test-data/)、要执行的操作和[预期结果](/zh-cn/wiki/expected-result/)。确保它们可重复使用和可维护。
4. **参数化测试**：使用参数使[测试用例](/zh-cn/wiki/test-case/)数据驱动，允许使用同一脚本测试多个数据集。
5. **创建断言**：实施断言以根据预期结果检查 AUT 的响应。断言对于确定测试的通过/失败状态至关重要。
6. **开发[测试脚本](/zh-cn/wiki/test-script/)**：使用自动化工具或框架编写脚本。遵循最佳编码实践，例如使用 [页面对象模型](/zh-cn/wiki/page-object-model/) 进行 UI 测试，将测试逻辑与特定于页面的代码分开。
7. **设置[测试环境](/zh-cn/wiki/test-environment/)**：配置运行测试所需的环境，包括浏览器、[数据库](/zh-cn/wiki/database/) 和任何其他依赖项。
8. **实现 [测试执行](/zh-cn/wiki/test-execution/) 逻辑**：定义如何执行测试，包括顺序、依赖关系以及测试前/测试后步骤的处理。
9. **审查和完善**：同行评审或演练可以帮助及早发现问题。根据需要进行重构，以提高清晰度、效率和[可维护性](/zh-cn/wiki/maintainability/)。
10. **版本控制**：将[测试用例](/zh-cn/wiki/test-case/)和脚本存储在版本控制系统中，以跟踪更改并与团队成员协作。
11. **与 CI/CD 集成**：作为 CI/CD 管道的一部分自动执行[测试用例](/zh-cn/wiki/test-case/)，以确保每次构建或发布时持续验证 AUT。

#### 自动化测试中的测试脚本是什么？

在[自动化测试](/zh-cn/wiki/automated-testing/) 中，**[测试脚本](/zh-cn/wiki/test-script/)** 是由自动化工具执行的一组指令，用于验证软件应用程序的功能。它本质上是一个自动执行手动[测试用例](/zh-cn/wiki/test-case/)步骤的程序。
  [测试脚本](/zh-cn/wiki/test-script/) 与被测应用程序 (AUT) 交互，输入数据，并将预期结果与实际结果进行比较。它们是用所使用的自动化工具支持的编程或脚本语言编写的，例如 JavaScript、Python 或 Ruby。
  下面是使用假设的测试框架用 JavaScript 编写的 [测试脚本](/zh-cn/wiki/test-script/) 的简化示例：

```
  describe('Login Page Tests', function() {
    it('should allow a user to log in', function() {
      goToLoginPage();
      enterUsername('testUser');
      enterPassword('password123');
      submitLoginForm();
      expect(isLoggedIn()).toBe(true);
    });
  });
```
此脚本描述了登录页面的[测试用例](/zh-cn/wiki/test-case/)，它在其中导航到登录页面、输入凭据、提交表单并检查登录是否成功。
  有效的[测试脚本](/zh-cn/wiki/test-script/)是：

- **可重复使用**：功能如下 `goToLoginPage()` 可以在多个测试用例中使用。

- **可维护**：当 AUT 更改时，它们应该易于更新。
- **可读**：清晰简洁，以便其他工程师可以理解和修改。
- **可靠**：它们产生一致的结果并优雅地处理异常。 脚本通常被组织成 [测试套件](/zh-cn/wiki/test-suite/) 以获得更好的可管理性，并且可以单独运行或作为更大的测试运行的一部分运行。它们对于持续集成和交付管道至关重要，可以对软件构建进行频繁的自动验证。

- **可重复使用**：功能如下 `goToLoginPage()` 可以在多个测试用例中使用。

#### 您如何确保您的测试用例涵盖所有可能的场景？

为了确保[测试用例](/zh-cn/wiki/test-case/)涵盖所有可能的场景，请遵循以下策略：

- **[等价划分](/zh-cn/wiki/equivalence-partitioning/)** ：将输入分为逻辑组，其中行为应相同，测试每个分区的一个值。
- **边界值分析**：关注输入范围边界的边缘情况。
- **[决策表测试](/zh-cn/wiki/decision-table-testing/)** ：创建一个表来探索输入和相应操作的不同组合。
- **[状态转换测试](/zh-cn/wiki/state-transition-testing/)** ：将场景建模为系统状态，确定彻底覆盖的转换和条件。
- **[用例测试](/zh-cn/wiki/use-case-testing/)** ：从现实世界的用例中派生测试用例，以确保覆盖用户旅程。
- **组合测试**：应用成对测试等工具来检查参数之间的相互作用。
- **[基于风险的测试](/zh-cn/wiki/risk-based-testing/)** ：根据潜在的故障风险及其影响确定测试的优先级。
- **[探索性测试](/zh-cn/wiki/exploratory-testing/)** ：通过手动探索会话补充自动化测试，以发现意外行为。
- **基于模型的测试**：从代表所需行为的系统模型生成测试用例。
- **[代码覆盖率](/zh-cn/wiki/code-coverage/) 分析**：使用工具测量测试执行的代码范围，旨在获得高覆盖率指标，例如语句、分支和路径覆盖率。 将这些策略纳入您的测试设计过程中，以创建全面的[测试套件](/zh-cn/wiki/test-suite/)。定期审查和更新[测试用例](/zh-cn/wiki/test-case/)以适应应用程序及其使用模式的变化。

#### 编写测试脚本的最佳实践有哪些？

编写 [测试脚本](/zh-cn/wiki/test-script/) 的最佳实践包括：

- **[可维护性](/zh-cn/wiki/maintainability/)**：编写清晰易懂的代码，并用注释解释复杂的逻辑。使用页面对象或类似模式将测试逻辑与 UI 结构分开，使脚本更易于更新。
- **可重用性**：为常见操作创建可重用的函数或方法。这减少了重复并简化了更新。
- **模块化**：将测试分解为更小的、独立的模块，这些模块可以组合起来形成更大的测试。这增强了可读性和可调试性。
- **数据分离**：将[测试数据](/zh-cn/wiki/test-data/) 与脚本分开。使用 JSON、XML 或 CSV 文件等外部数据源作为输入数据，这样可以轻松进行更新和数据驱动的测试。
- **版本控制**：将 [测试脚本](/zh-cn/wiki/test-script/) 存储在版本控制系统中，以跟踪更改、与其他人协作，并在必要时恢复到以前的版本。
- **命名约定**：使用 [测试用例](/zh-cn/wiki/test-case/) 和函数的描述性名称来一目了然地传达其用途。
- **错误处理**：实施强大的错误处理来管理意外事件。测试应该优雅地失败，并提供清晰的错误消息。
- **断言**：使用清晰且具体的断言来确保测试准确地验证预期结果。
- **并行执行**：设计测试以尽可能并行运行，以加快执行时间。
- **清理**：始终清理[测试数据](/zh-cn/wiki/test-data/)并将系统恢复到原始状态，以避免影响后续测试。
- **报告**：生成详细的日志和报告，以深入了解测试结果并促进故障排除。
- **持续集成**：将 [测试脚本](/zh-cn/wiki/test-script/) 集成到 CI/CD 管道中，以确保它们定期执行并提供有关代码更改的即时反馈。

```
  // Example of a reusable function in TypeScript
  function login(username: string, password: string) {
    // Code to perform login action
  }
```
遵守这些实践将产生健壮、可靠且高效的 [测试自动化](/zh-cn/wiki/test-automation/) 脚本。

#### 随着时间的推移，如何管理和维护测试用例和脚本？

随着时间的推移，管理和维护 [测试用例](/zh-cn/wiki/test-case/) 和脚本需要结合**良好实践**、**组织**和**工具**。以下是一些策略：

- **版本控制**：使用 Git 等版本控制系统来跟踪更改、与团队成员协作，并在必要时进行回滚。
- **模块化设计**：以模块化方式编写测试，使用可重用的组件，以最大限度地减少维护并促进更新。
- **文档**：清楚地记录测试用例和脚本，包括目的、输入、预期结果和变更历史记录。
- **重构**：定期重构测试以提高清晰度、效率和可维护性，消除冗余并改进结构。
- **代码审查**：对测试脚本进行同行审查，以确保质量并遵守标准。
- **自动检查**：实施自动 linting 和代码分析工具以强制执行编码标准并及早发现问题。
- **[测试数据](/zh-cn/wiki/test-data/) 管理**：使用数据工厂或固定装置等策略来有效管理测试数据，确保其保持相关性和准确性。
- **持续集成**：将测试脚本集成到 CI/CD 管道中，以确保它们定期执行并与代码库保持兼容。
- **监控**：监控测试执行结果以快速识别和解决不稳定或故障。
- **优先级**：根据测试的重要性确定维护任务的优先级，重点关注应用程序的高影响领域。
- **弃用策略**：制定明确的策略来弃用和删除过时的测试，以避免混乱和混乱。 通过应用这些策略，[测试自动化](/zh-cn/wiki/test-automation/) 工程师可以确保他们的[测试套件](/zh-cn/wiki/test-suite/) 随着时间的推移保持稳健、相关和可靠，从而在软件开发生命周期中提供持续的价值。

### 自动化测试的类型

#### 什么是单元测试？

[单元测试](/zh-cn/wiki/unit-testing/) 是测试应用程序的最小可测试部分（通常是函数或方法）的做法，与系统的其余部分隔离。这可确保每个组件按预期运行。单元测试通常由开发人员在处理代码时编写和运行，以便立即反馈其更改。
  在 **[自动化测试](/zh-cn/wiki/automated-testing/)** 的上下文中，单元测试通常作为构建过程的一部分或通过 **持续集成** (CI) 系统自动执行。它们对于在开发周期的早期发现问题至关重要，这可以减少修复 [bugs](/zh-cn/wiki/bug/) 的成本和时间。
  单元测试的特点是范围（狭窄，专注于单个代码“单元”）和速度（执行速度快）。它们是使用[单元测试](/zh-cn/wiki/unit-testing/)框架编写的，例如用于Java的JUnit、用于.NET的[NUnit](/zh-cn/wiki/nunit/)或用于JavaScript的[Jest](/zh-cn/wiki/jest/)。这些框架提供了用于编写测试的结构，并包含断言来验证代码的行为是否符合预期。
  以下是使用 [Jest](/zh-cn/wiki/jest/) 在 TypeScript 中进行简单单元测试的示例：

```
  import { add } from './math';
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
```
单元测试应该**可维护**和**可靠**，不依赖于外部系统或状态。它们是强大的 [自动化测试](/zh-cn/wiki/automated-testing/) 策略的基本组成部分，有助于软件的整体健康和质量。

#### 什么是集成测试？

[集成测试](/zh-cn/wiki/integration-testing/) 是[软件测试](/zh-cn/wiki/software-testing/) 过程的一个级别，其中软件应用程序的各个单元或组件作为一个组进行组合和测试。主要目标是验证集成模块之间的功能、性能和可靠性。
  在[自动化测试](/zh-cn/wiki/automated-testing/) 中，集成测试是脚本化的，并且通常合并到构建过程中，以确保新的更改不会破坏组件之间的交互。这些测试可能比单元测试更复杂，因为它们需要配置多个组件交互的环境。
  自动化集成测试通常使用与单元测试相同或相似的工具编写，但它们侧重于组件之间的交互点，以确保数据流、[API](/zh-cn/wiki/api/) 合约和用户界面在组合时按预期工作。它们可以在持续集成环境中执行，以便在每次提交后或按计划提供有关应用程序集成运行状况的反馈。
  **TypeScript 中的自动化集成测试示例：**

```
  import { expect } from 'chai';
  import { fetchData, processInput } from './integrationComponents';
  describe('Integration Test', () => {
    it('should process input and return expected data', async () => {
      const input = 'test input';
      const processedData = await processInput(input);
      const fetchedData = await fetchData(processedData);
      expect(fetchedData).to.be.an('object');
      expect(fetchedData).to.have.property('key', 'expected value');
    });
  });
```
此示例演示了一个简单的集成测试，其中 `processInput` 和 `fetchData` 是两个需要正确协同工作的独立组件。该测试确保一个组件处理的数据适合另一组件获取[预期结果](/zh-cn/wiki/expected-result/)。

#### 什么是系统测试？

[系统测试](/zh-cn/wiki/system-testing/) 是一个**高级**测试阶段，用于评估完整的集成软件系统以验证其是否满足指定的要求。它在 **[集成测试](/zh-cn/wiki/integration-testing/)** 之后和 **[验收测试](/zh-cn/wiki/acceptance-testing/)** 之前进行，重点关注各种条件下的行为和输出。
  在[系统测试](/zh-cn/wiki/system-testing/)期间，应用程序在与生产非常相似的环境中进行测试，包括**[数据库](/zh-cn/wiki/database/)交互**、**网络通信**和**服务器交互**。目标是识别只有当组件在系统范围内集成和交互时才会出现的缺陷。
  [系统测试](/zh-cn/wiki/system-testing/) 的关键方面包括：

- **功能测试**：确保软件按预期运行。
- **[性能测试](/zh-cn/wiki/performance-testing/)** ：检查系统的响应时间、吞吐量和负载稳定性。
- **[安全测试](/zh-cn/wiki/security-testing/)** ：验证安全功能是否按预期保护数据并维护功能。
- **[可用性测试](/zh-cn/wiki/usability-testing/)** ：评估用户界面和用户体验。
- **[兼容性测试](/zh-cn/wiki/compatibility-testing/)** ：确认软件可以在不同的设备、浏览器和操作系统上运行。 自动化[系统测试](/zh-cn/wiki/system-testing/)可以显着**减少执行重复但必要的检查所需的时间**，从而允许更频繁和彻底的测试周期。它对于 **[回归测试](/zh-cn/wiki/regression-testing/)** 特别有用，可确保新更改不会对现有功能产生不利影响。但是，它可能无法完全取代[手动测试](/zh-cn/wiki/manual-testing/)，特别是对于探索性、可用性和临时测试场景。

#### 什么是回归测试？

[回归测试](/zh-cn/wiki/regression-testing/) 是验证先前开发和测试的软件在进行增强、修补或配置更改等更改后仍能正常运行的过程。它确保新的代码更改不会对现有功能产生不利影响。在 **[自动化测试](/zh-cn/wiki/automated-testing/)** 上下文中，回归测试通常作为频繁运行的 [测试套件](/zh-cn/wiki/test-suite/) 的一部分执行，通常在 CI/CD 管道期间运行，以提供有关代码修改影响的快速反馈。
  自动回归测试对于保持软件随着时间的推移的稳定性至关重要，特别是随着代码库的增长和发展。它们允许对软件行为进行一致且可重复的验证，这比手动[回归测试](/zh-cn/wiki/regression-testing/)更有效。自动化测试可以在各种环境和配置上运行，以确保广泛的覆盖范围。
  以下示例展示了简单的自动化回归测试在 [Jest](/zh-cn/wiki/jest/) 等 JavaScript 测试框架中的外观：

```
  describe('Calculator', () => {
    test('should add two numbers correctly', () => {
      expect(add(1, 2)).toBe(3);
    });
  });
```
在此示例中，`add` 函数是先前已测试过的软件的一部分。回归测试将确保在更改代码库后，`add` 函数继续生成[预期结果](/zh-cn/wiki/expected-result/)。
  有效的[回归测试](/zh-cn/wiki/regression-testing/)通常涉及选择涵盖关键功能的相关[测试用例](/zh-cn/wiki/test-case/)，经常运行这些测试，并随着软件的发展更新它们。这有助于及早发现缺陷并降低将 [bugs](/zh-cn/wiki/bug/) 引入生产的风险。

#### 黑盒测试和白盒测试有什么区别？

[黑盒测试](/zh-cn/wiki/black-box-testing/) 和[白盒测试](/zh-cn/wiki/white-box-testing/) 是评估软件功能和完整性的两种不同方法。
  **[黑盒测试](/zh-cn/wiki/black-box-testing/)** 将软件视为不透明实体，专注于输入和输出，而不考虑内部代码结构。测试人员根据规范验证功能，确保系统在各种条件下按预期运行。这种方法不了解内部运作，因此称为“黑匣子”。
  相反，**[白盒测试](/zh-cn/wiki/white-box-testing/)** 需要了解内部逻辑。测试人员检查代码库以确保正确的操作和结构，通常会寻找特定条件，例如循环执行、分支覆盖率和路径覆盖率。由于内部代码的可见性，这种方法也被称为清晰、开放或透明的测试。
  虽然这两种方法都可以自动化，但黑盒测试通常是较高级别的，例如用户[接口测试](/zh-cn/wiki/interface-testing/)，而白盒测试是较低级别的，例如单元测试。黑盒自动化脚本模拟用户交互，而白盒脚本直接与应用程序代码交互。
  在实践中，结合这两种方法可以提供全面的测试策略，[黑盒测试](/zh-cn/wiki/black-box-testing/) 验证面向用户的功能，[白盒测试](/zh-cn/wiki/white-box-testing/) 确保底层代码库的稳健性。

#### 什么是端到端 (e2e) 测试以及为什么它很重要？

端到端 (E2E) 测试是一种在紧密模仿现实世界使用的场景中测试整个应用程序的技术，例如与 [数据库](/zh-cn/wiki/database/)、网络、硬件和其他应用程序交互。目标是从头到尾验证系统的集成和数据完整性，确保应用程序的所有组件在各种场景下都按预期运行。
  **端到端测试**至关重要，因为它验证系统的整体运行状况，而不是专注于单个组件或交互的单元或集成测试。它有助于捕获系统不同部分协同工作时出现的问题，这些问题单独来看可能并不明显。此类测试对于直接影响用户体验或业务利润的关键工作流程尤其重要。
  端到端测试通过模拟真实的用户场景，确保应用程序在生产环境中满足业务需求并正常运行。它可以发现由于各种子系统组合而产生的意外行为，这对于防止实时设置中的问题非常宝贵。
  在 **[测试自动化](/zh-cn/wiki/test-automation/)** 的上下文中，E2E 测试通常作为 CI/CD 管道的一部分执行，以确保新更改不会破坏关键功能。虽然它们比其他类型的测试运行起来更复杂、更耗时，但它们在确认软件产品的可行性方面的重要性怎么强调也不为过。

### 高级概念

#### 什么是测试驱动开发 (TDD) 以及它与自动化测试有何关系？

[测试驱动开发](/zh-cn/wiki/test-driven-development/) (TDD) 是一种软件开发方法，其中测试是在需要通过测试的代码之前编写的。它遵循一个简单的循环：**编写测试**，**运行测试**（最初应该失败），**编写最少的代码**以通过测试，然后**重构**代码，同时确保测试继续通过。
  TDD 与 [自动化测试](/zh-cn/wiki/automated-testing/) 相关，因为它本质上依赖于在实现软件功能之前为其创建自动化测试。这些测试通常是**单元测试**，运行速度快并且可以轻松实现自动化。 TDD 周期确保每个新功能都以相应的[测试用例](/zh-cn/wiki/test-case/) 开始，这有助于随着时间的推移构建一套自动化测试。
  此方法对[测试自动化](/zh-cn/wiki/test-automation/) 有几个影响：

- **持续反馈**：自动化测试提供有关代码更改的即时反馈。
- **回归安全**：随着代码库的增长，测试套件有助于防止回归。
- **设计影响**：首先编写测试可以推动更好的软件设计和架构。
- **重构信心**：自动化测试允许开发人员重构代码，并确保现有功能保持不变。 TDD 通过确保从开发过程的一开始就考虑测试而不是事后才考虑测试，从而补充了其他[自动化测试](/zh-cn/wiki/automated-testing/) 策略。它鼓励一种可以带来更高质量软件的测试规则，并且非常适合敏捷和持续集成/持续部署 (CI/CD) 工作流程。

#### 什么是行为驱动开发 (BDD) 以及它与自动化测试有何关系？

行为驱动开发 ([BDD](/zh-cn/wiki/bdd/)) 是一种敏捷的软件开发流程，鼓励软件项目中的开发人员、QA 以及非技术或业务参与者之间的协作。 [BDD](/zh-cn/wiki/bdd/) 专注于通过与利益相关者的讨论来清楚地了解所需的软件行为。它通过以非程序员可以阅读的自然语言编写[测试用例](/zh-cn/wiki/test-case/)来扩展[测试驱动开发](/zh-cn/wiki/test-driven-development/) (TDD)。
  [BDD](/zh-cn/wiki/bdd/) 与[自动化测试](/zh-cn/wiki/automated-testing/) 相关，提供了编写测试的框架。测试以**领域特定语言 (DSL)** 编写，通常使用[gherkin](/zh-cn/wiki/gherkin/) 等语言，允许对软件行为进行人类可读的描述。然后可以通过 Cucumber 或 SpecFlow 等工具自动执行这些描述。

```
  Feature: User login
    Scenario: Successful login with valid credentials
      Given the user is on the login page
      When the user enters valid credentials
      Then the user is redirected to the homepage
```
在[BDD](/zh-cn/wiki/bdd/) 中，场景在开发开始之前定义，并作为[测试用例](/zh-cn/wiki/test-case/) 的基础。这确保了自动化测试与用户角度的预期行为保持一致。随着开发的进展，这些场景将转变为自动化测试，不断执行以验证应用程序的行为是否符合预期结果。
  [BDD](/zh-cn/wiki/bdd/) 强调共享理解和清晰沟通，这对于确保自动化测试的相关性、可理解性和可维护性特别有用。它有助于弥合技术和非技术团队成员之间的差距，确保自动化测试准确反映业务需求和用户需求。

#### 什么是数据驱动测试？

数据驱动测试 (DDT) 是一种 **[测试自动化](/zh-cn/wiki/test-automation/)** 策略，涉及使用多组输入数据执行一组测试步骤。此方法通过验证各种输入值的应用程序行为来增强[测试覆盖率](/zh-cn/wiki/test-coverage/)，而无需为每个数据集编写多个[测试脚本](/zh-cn/wiki/test-script/)。
  在 DDT 中，测试逻辑与 [测试数据](/zh-cn/wiki/test-data/) 分离，通常存储在外部数据源中，例如 CSV 文件、Excel 电子表格、XML 或 [数据库](/zh-cn/wiki/database/)。在[测试执行](/zh-cn/wiki/test-execution/)期间，自动化框架读取数据并将其输入[测试用例](/zh-cn/wiki/test-case/)。
  这是伪代码的简化示例：

```
  for each data_row in data_source:
      input_values = read_data(data_row)
      execute_test(input_values)
      verify_results()
```
DDT 对于应用程序行为在不同数据输入之间保持一致的场景特别有用，并且对于确保测试边缘情况和边界条件至关重要。它还简化了更新测试的过程，因为[测试数据](/zh-cn/wiki/test-data/) 中的更改不需要[测试脚本](/zh-cn/wiki/test-script/) 中的更改。
  然而，仔细设计 DDT 以避免造成维护负担至关重要，因为 [测试数据](/zh-cn/wiki/test-data/) 的数量和复杂性可能会显着增长。正确管理[测试数据](/zh-cn/wiki/test-data/) 是数据驱动测试成功的关键。

#### 什么是关键字驱动测试？

关键字驱动测试，也称为表驱动测试或基于动作词的测试，是[自动化测试](/zh-cn/wiki/automated-testing/) 中使用的一种方法，其中[测试用例](/zh-cn/wiki/test-case/) 是使用一组预定义关键字编写的。这些关键字表示可以对被测应用程序 (AUT) 执行的操作。每个关键字对应于执行特定操作的函数或方法，例如单击按钮、输入文本或验证结果。
  在关键字驱动的测试中，[测试脚本](/zh-cn/wiki/test-script/) 不是用编程语言编写的。相反，它们由一系列易于阅读和理解的关键字组成。这种抽象允许没有编程专业知识的个人设计和执行测试，从而促进不同利益相关者之间的协作。
  以下是关键字驱动的 [测试用例](/zh-cn/wiki/test-case/) 的简化示例：

```
  | Keyword       | Parameter 1    | Parameter 2       |
  |---------------|----------------|-------------------|
  | OpenBrowser   | Chrome         |                   |
  | NavigateTo    | https://example.com |             |
  | ClickButton   | Submit         |                   |
  | VerifyText    | Thank you for submitting! |        |
```
[测试自动化](/zh-cn/wiki/test-automation/) 框架解释这些关键字并将它们转换为 AUT 上的操作。 [测试用例](/zh-cn/wiki/test-case/) 设计与[测试脚本](/zh-cn/wiki/test-script/) 实现的分离使得[测试用例](/zh-cn/wiki/test-case/) 的维护和可扩展性更加容易。当关键字的底层实现发生变化时，只需更新关联的函数或方法，[测试用例](/zh-cn/wiki/test-case/) 本身保持不变。

#### 人工智能和机器学习在自动化测试中的作用是什么？

人工智能和机器学习 (ML) 正在通过增强其能力和效率来改变 [自动化测试](/zh-cn/wiki/automated-testing/)。 **人工智能驱动的 [测试自动化](/zh-cn/wiki/test-automation/)** 可以**分析应用程序数据**，以预测 [测试用例](/zh-cn/wiki/test-case/) 并确定其优先级、检测依赖性并识别出现缺陷可能性较高的区域。这种预测分析有助于优化[测试套件](/zh-cn/wiki/test-suite/)、减少冗余并专注于高风险领域。
  **机器学习算法**可以从过去的[测试执行](/zh-cn/wiki/test-execution/)中学习，以**识别模式**并**预测未来的故障**。通过分析一段时间内的结果，机器学习可以提高测试准确性并适应应用程序的变化，而无需手动干预测试维护。
  **自我修复测试** 当在应用程序的 UI 或 [API](/zh-cn/wiki/api/) 中检测到更改时，利用 AI 自动更新 [测试脚本](/zh-cn/wiki/test-script/)，从而显着减轻维护负担。此功能可确保测试随着时间的推移保持稳健和可靠，即使应用程序不断发展也是如此。
  人工智能增强工具还可以提供**视觉测试功能**，比较应用程序的视觉方面，以检测传统自动化测试可能无法捕获的 UI 差异。这对于确保跨设备和跨浏览器的一致性特别有用。
  此外，人工智能可以协助**测试生成**，通过分析用户行为和应用程序使用模式来创建有意义的[测试用例](/zh-cn/wiki/test-case/)。这可以导致更全面的[测试覆盖率](/zh-cn/wiki/test-coverage/)，其中包括现实世界的场景。
  总之，[自动化测试](/zh-cn/wiki/automated-testing/) 中的人工智能和机器学习带来了更智能的测试规划、维护、执行和分析，从而实现更高效、更有效的测试流程。
