---
title: "代码覆盖率 ｜ Code Coverage"
description: "代码覆盖率 (Code Coverage) 是一种衡量指标，用于评估在测试期间源代码被执行的程度。它量化了被自动化测试覆盖的代码百分比，从而洞察代码库中哪些区域已测试，哪些尚未测试。该指标有助于识别代码中未测试的部分，这些部分可能隐藏着未检测到的 Bug。"
section: "C"
related:
  - test-coverage
  - mutation-testing
  - glass-box-testing
  - structural-testing
  - automated-testing
order: 0
---

# 代码覆盖率 ｜ Code Coverage

<!-- TOC START -->

- [代码覆盖率 ｜ Code Coverage](#代码覆盖率--code-coverage)
  - [另请参阅](#另请参阅)
  - [有关代码覆盖率的问题吗？](#有关代码覆盖率的问题吗)
    - [基础知识和重要性](#基础知识和重要性)
      - [什么是代码覆盖率？](#什么是代码覆盖率)
      - [为什么代码覆盖率很重要？](#为什么代码覆盖率很重要)
      - [代码覆盖率有哪些不同类型？](#代码覆盖率有哪些不同类型)
      - [代码覆盖率如何影响软件质量？](#代码覆盖率如何影响软件质量)
      - [代码覆盖率有哪些限制？](#代码覆盖率有哪些限制)
    - [测量和工具](#测量和工具)
      - [如何衡量代码覆盖率？](#如何衡量代码覆盖率)
      - [衡量代码覆盖率常用的工具有哪些？](#衡量代码覆盖率常用的工具有哪些)
      - [这些工具之间有什么区别？](#这些工具之间有什么区别)
      - [如何将代码覆盖率工具集成到持续集成管道中？](#如何将代码覆盖率工具集成到持续集成管道中)
      - [如何解读代码覆盖率报告？](#如何解读代码覆盖率报告)
    - [最佳实践](#最佳实践)
      - [什么是好的代码覆盖率？](#什么是好的代码覆盖率)
      - [如何提高代码覆盖率？](#如何提高代码覆盖率)
      - [实现高代码覆盖率的最佳实践有哪些？](#实现高代码覆盖率的最佳实践有哪些)
      - [如何长期保持高代码覆盖率？](#如何长期保持高代码覆盖率)
      - [尝试提高代码覆盖率时需要避免哪些常见陷阱？](#尝试提高代码覆盖率时需要避免哪些常见陷阱)
    - [高级主题](#高级主题)
      - [什么是分支覆盖率以及它与语句覆盖率有何不同？](#什么是分支覆盖率以及它与语句覆盖率有何不同)
      - [什么是条件覆盖以及它与分支覆盖有何不同？](#什么是条件覆盖以及它与分支覆盖有何不同)
      - [代码覆盖率与突变测试等其他测试指标有何关系？](#代码覆盖率与突变测试等其他测试指标有何关系)
      - [代码覆盖率和测试驱动开发之间有什么关系？](#代码覆盖率和测试驱动开发之间有什么关系)
      - [代码覆盖率如何影响代码库的可维护性？](#代码覆盖率如何影响代码库的可维护性)
<!-- TOC END -->

代码覆盖率衡量已测试代码的范围，帮助评估测试套件的品质。它标识测试期间未执行的区域，是一种形式白盒测试。

## 另请参阅

- [维基百科](https://en.wikipedia.org/wiki/Code_coverage)

## 有关代码覆盖率的问题吗？

### 基础知识和重要性

#### 什么是代码覆盖率？

[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 是一个用于评估测试期间源代码执行程度的指标。它量化了自动化测试覆盖的代码百分比，提供了对已测试和未测试的代码库区域的深入了解。此指标有助于识别代码中未经测试的部分，这些部分可能隐藏着未检测到的[bugs](https://inaodeng.com/zh-cn/wiki/bug/)。

为了测量[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)，在[测试执行](https://inaodeng.com/zh-cn/wiki/test-execution/)期间使用工具来监视执行了哪些代码行、分支和条件。完成后，会生成一份报告，突出显示已覆盖和未覆盖的代码部分。

[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 工具可以集成到**持续集成 (CI)**管道中，以自动收集每个构建的覆盖率数据。这种集成可确保覆盖率指标得到一致的监控，并且如果覆盖率低于某个阈值，则可以触发警报或使构建失败。

在分析[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 报告时，重点关注未覆盖的区域并评估它们带来的风险至关重要。简单地追求高覆盖率可能会产生误导，因为它不能保证测试的质量或有效性。

为了有效地利用[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)，将其与其他质量指标和测试实践结合起来非常重要。虽然它提供了有价值的信息，但它不应该是[软件质量](https://inaodeng.com/zh-cn/wiki/software-quality/) 的唯一指示符。这是实现稳健可靠的 [测试自动化](https://inaodeng.com/zh-cn/wiki/test-automation/) 策略的难题之一。

#### 为什么代码覆盖率很重要？

[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 至关重要，因为它提供了测试期间执行了多少源代码的“定量测量”。该指标有助于识别代码库中未经测试的部分，确保潜在的缺陷不会被忽视。高[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 意味着未检测到[bugs](https://inaodeng.com/zh-cn/wiki/bug/) 的可能性较低，并且可以带来更强大的软件。然而，重要的是用其他质量指标和测试实践来补充[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)，以解决其局限性并实现全面的测试策略。

为了维护和改进[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)，请定期审查和更新测试以覆盖新代码，重构测试以提高效率，并删除已弃用功能的过时测试。避免常见的陷阱，例如编写测试只是为了增加覆盖率而不断言有意义的行为，并记住 100% 覆盖率并不能保证不存在 [bugs](https://inaodeng.com/zh-cn/wiki/bug/)。

[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 也是随着时间的推移**维持代码库质量**的关键因素。它可以指示 [测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 的有效性并突出显示可能需要额外测试或重构的区域。通过将 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 工具集成到持续集成管道中，团队可以持续监控和解决覆盖范围差距。

在**[测试驱动开发](https://inaodeng.com/zh-cn/wiki/test-driven-development/) (TDD)** 的上下文中，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 可以验证新代码是否伴随有相应的测试，从而强化了编写失败测试、编写通过测试的代码和重构的 TDD 循环。

最终，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 应该用作加强测试工作的指南，而不是作为[软件质量](https://inaodeng.com/zh-cn/wiki/software-quality/) 的绝对衡量标准。它是测试人员工具库中用于建立对软件可靠性信心的众多工具之一。

#### 代码覆盖率有哪些不同类型？

不同类型的 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 包括：

- **语句覆盖率**：测量已执行代码中可执行语句的百分比。
- **分支覆盖率**：也称为决策覆盖率，它衡量每个决策点的每个可能的分支是否被执行。
- **函数覆盖**：确保代码中的每个函数或子例程都已被调用。
- **条件覆盖**：验证每个布尔子表达式是否已计算为 true 和 false。
- **行覆盖率**：与语句覆盖率类似，但根据执行的代码行数进行测量。
- **路径覆盖率**：考虑嵌套分支和循环，测量是否遵循了代码给定部分的所有可能路径。
- **入口/出口覆盖**：确保执行每个函数的每个可能的调用和返回。
- **循环覆盖**：确保循环执行零次迭代、一次迭代和多次迭代。
- **参数值覆盖**：测试参数化方法的参数值的所有组合。
- **数据流覆盖**：通过程序变量跟踪数据值流，确保测试不同的值组合。

每种类型的覆盖范围都为 [测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 的有效性提供了不同的视角，并且可以突出测试中不同的潜在差距。组合多种覆盖类型可以更全面地了解代码的[测试覆盖率](https://inaodeng.com/zh-cn/wiki/test-coverage/)。

#### 代码覆盖率如何影响软件质量？

[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 是一个指标，可以通过确保在测试期间执行代码库的重要部分来间接为[软件质量](https://inaodeng.com/zh-cn/wiki/software-quality/) 做出贡献。高[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 可以发现隐藏的[bugs](https://inaodeng.com/zh-cn/wiki/bug/) 和仅通过[手动测试](https://inaodeng.com/zh-cn/wiki/manual-testing/) 可能无法发现的边缘情况。它鼓励开发人员编写更全面的测试，从而开发出更强大、更可靠的软件。

但是，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 不应是[软件质量](https://inaodeng.com/zh-cn/wiki/software-quality/) 的唯一措施。它不保证测试的有效性或检测到所有缺陷。测试需要精心设计且有意义，才能真正提高质量。如果重点是达到目标百分比而不是 [测试用例](https://inaodeng.com/zh-cn/wiki/test-case/) 的质量，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 有时会导致错误的安全感。

在实践中，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 可以通过以下方式帮助维护[软件质量](https://inaodeng.com/zh-cn/wiki/software-quality/)：

- **识别未经测试的零件**代码，然后可以将其作为其他测试的目标。
- **防止回归** ，随着时间的推移维持或增加覆盖范围可以确保新代码得到测试。
- **促进重构** ，因为可以更有信心地更改覆盖良好的代码库，并且现有功能不会被破坏。

为了最大限度地发挥 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 的优势，应将其与其他质量措施和测试实践结合使用。它是指导质量工作的工具，而不是最终目标。质量最终由最终用户体验决定，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 只是有助于实现积极成果的众多指标之一。

#### 代码覆盖率有哪些限制？

[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 有一些[测试自动化](https://inaodeng.com/zh-cn/wiki/test-automation/) 工程师应该注意的限制：

- **错误的安全感**：高代码覆盖率可能会导致自满，因为它不能保证不存在错误或所有关键路径都经过测试。
- **测试质量**：覆盖率指标不评估测试的质量或有效性。写得不好的测试可能会在没有正确断言行为的情况下执行代码。
- **无法访问的代码**：某些代码可能旨在处理在测试环境中极其罕见或不可能模拟的边缘情况。
- **为了覆盖而覆盖**：追求更高的覆盖率可能会导致编写不必要的测试或测试琐碎的代码，而这不会增加价值。
- **集成和系统范围的问题**：代码覆盖率通常衡量单元测试覆盖率，可能无法反映集成或系统范围测试期间出现的问题。
- **性能**：收集代码覆盖率数据可能会减慢测试执行速度，这可能会影响持续集成管道和开发人员的工作效率。
- **维护**：随着代码库的发展，维护高代码覆盖率可能变得越来越困难和耗时。

将[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 与其他[质量保证](https://inaodeng.com/zh-cn/wiki/quality-assurance/) 实践（例如[手动测试](https://inaodeng.com/zh-cn/wiki/manual-testing/)、同行评审和静态代码分析）进行补充非常重要，以确保全面的测试策略。

### 测量和工具

#### 如何衡量代码覆盖率？

[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 通过监视自动化测试期间执行的代码行、分支和条件来测量。这通常是使用专门的工具来完成的，这些工具可以检测代码库以跟踪执行路径。运行测试时，这些工具会记录测试执行了代码的哪些部分。

要设置 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 测量，您需要：

1. **选择[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)工具**与您的编程语言和测试框架兼容。
2. **检测您的代码库**，手动或自动，具体取决于工具的功能。
3. **运行你的[测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/)**执行检测的代码。
4. **生成报告**详细说明了覆盖率指标。覆盖率报告通常包括：

- **执行代码的百分比**通过测试。
- **突出显示已覆盖和未覆盖的代码**用于目视检查。
- **承保范围细分**通过文件、类或函数。

例如，在 JavaScript 中，您可以使用 Istanbul (nyc) 来测量覆盖范围：

```yml
  nyc --reporter=html --reporter=text mocha
```

此命令通过 Istanbul 运行 Mocha 测试，收集覆盖率数据，然后生成 HTML 和文本报告。

将 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 合并到**持续集成 (CI) 管道** 涉及添加执行覆盖工具的步骤并在 [测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 运行后报告结果。某些 CI 系统可以强制执行阈值，如果覆盖率低于指定百分比，则构建失败。

#### 衡量代码覆盖率常用的工具有哪些？

用于测量[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)的常用工具包括：

- **JaCoCo** ：一个免费的 Java 代码覆盖库，与 Maven、Gradle 和 Ant 集成。
- **Cobertura**：另一个 Java 工具，它生成 HTML 和 XML 格式的报告。
- **Clover**：Atlassian for Java 和 Groovy 的付费工具，提供详细报告。
- **Istanbul(nyc)**：一种 JavaScript 代码覆盖率工具，与 Node.js 配合良好，并且可以与持续集成系统集成。
- **SimpleCov** ：对于 Ruby，它提供了强大的配置集，并且可以生成 HTML 报告。
- **gcov** ：GCC（GNU 编译器集合）附带的用于 C 和 C++ 语言的工具。
- **OpenCover**：支持多种测试框架的.NET 框架工具。
- **dotCover** ：JetBrains 的.NET 代码覆盖工具，与 ReSharper 和 Rider 集成。
- **lcov** ：gcov 的图形前端，主要用于 C 和 C++。
- **Codecov**：一种在线服务，可以处理许多覆盖率工具生成的报告，并与 GitHub、Bitbucket 和 GitLab 集成。
- **Coveralls** ：与 Codecov 类似，它适用于多种编程语言，并与 GitHub 集成。

这些工具可以集成到构建脚本或持续集成系统中，以在构建过程中自动生成覆盖率报告。他们通常提供命令行界面和配置文件来自定义其行为。报告通常包括诸如覆盖代码的百分比、突出显示未覆盖的行以及有时识别潜在的冗余测试等指标。

#### 这些工具之间有什么区别？

不同的 [测试自动化](https://inaodeng.com/zh-cn/wiki/test-automation/) 工具提供不同的功能并适合特定的测试需求。这是一个简短的比较：

- **[selenium](https://inaodeng.com/zh-cn/wiki/selenium/)** ：开源，支持多种浏览器和语言。Web 应用程序测试的理想选择。需要更多设置和编码知识。

```js
  WebDriver driver = new ChromeDriver();
  driver.get("http://example.com");
```

- **[Cypress](https://inaodeng.com/zh-cn/wiki/cypress/)** ：基于 JavaScript，更现代，设置更快。提供实时重新加载和自动等待。主要针对网络应用程序，重点是端到端测试。

```js
  cy.visit('http://example.com');
```

- **Appium**：用于移动应用程序测试的开源工具。支持 iOS 和 Android 平台。与 Selenium 类似，它使用 WebDriver 协议。

```js
  driver.get("http://example.com");
```

- **TestComplete**：带有 GUI 界面的商业工具。支持桌面、移动和 Web 应用程序。由于记录和回放功能，所需的编码更少。

```js
  Sys.Desktop.Keys("Hello, World!");
```

- **JUnit/[NUnit](https://inaodeng.com/zh-cn/wiki/nunit/)** ：分别用于 Java 和.NET 中的单元测试的框架。它们不是成熟的自动化工具，但对于测试驱动开发至关重要。

```js
  assertEquals("Expected", actual);
```

- **Robot Framework**：关键字驱动的工具，对于非程序员来说很容易学习。支持测试用例的表格数据并与 Selenium 集成。

```robotframework
  *** Test Cases ***
  Example
      Open Browser    http://example.com    Chrome
```

- **[Jest](https://inaodeng.com/zh-cn/wiki/jest/)** ：JavaScript 测试框架，注重简单性。适合 React 应用程序中的单元和集成测试。

```js
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
```

每个工具都有其**优点**和**缺点**；选择取决于项目要求、团队技能和所测试的应用程序。

#### 如何将代码覆盖率工具集成到持续集成管道中？

将 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 工具集成到 **持续集成 (CI)** 管道涉及几个步骤：

1. **选择与您的技术堆栈和 CI 系统兼容的 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 工具**。流行的选择包括用于 Java 的 JaCoCo、用于 JavaScript 的 Istanbul 和用于 Python 的 Coverage.py。
2. **在您的项目中安装并配置该工具**。这通常涉及将该工具添加为依赖项并将其配置为监视正确的文件和目录。
3. **更新您的[测试脚本](https://inaodeng.com/zh-cn/wiki/test-script/)** 以包含[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 工具的命令。这确保每次运行测试时都会收集覆盖率数据。
4. **修改 CI 管道配置**以执行更新的 [测试脚本](https://inaodeng.com/zh-cn/wiki/test-script/)。这可以通过编辑 CI 配置文件（例如 `.travis.yml`、`Jenkinsfile`、`gitlab-ci.yml`）以包含测试命令来完成。
5. **添加发布覆盖率报告的步骤**。测试完成后，使用 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 工具生成报告，然后将其发布到 Codecov、Coveralls 或 SonarQube 等服务。此步骤通常需要将令牌或 [API](https://inaodeng.com/zh-cn/wiki/api/) 密钥添加到 CI 环境变量中以进行身份​​验证。
6. **根据覆盖阈值设置通知或失败条件**。这可以在 CI 系统或覆盖报告服务内完成。
7. **自动化流程**在每个提交或拉取请求上运行，以确保一致地跟踪覆盖范围。

通过执行这些步骤，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 数据将成为 CI 流程的一个组成部分，为 [测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 及其涵盖的代码的质量提供持续的反馈。

#### 如何解读代码覆盖率报告？

解释 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 报告涉及分析数据以了解测试执行了代码库的哪些部分。寻找**关键指标**，例如**线路覆盖率**、**分支覆盖率**和**功能覆盖率**。这些指标指示测试期间已执行的代码行、分支和函数的百分比。

- **行覆盖率**：检查哪些代码行根本没有执行。未覆盖的线路可能表示严重遗漏[测试用例](https://inaodeng.com/zh-cn/wiki/test-case/)。
- **分支覆盖**：注意条件语句。确保真分支和假分支都经过测试。缺少分支可能会导致[bugs](https://inaodeng.com/zh-cn/wiki/bug/)未被检测到。
- **函数覆盖率**：验证所有函数都已被调用。未经测试的功能存在隐藏缺陷的风险。
- **覆盖率差距**：识别覆盖率低的区域并评估它们是否对应用程序的功能至关重要。优先考虑为这些部分添加测试。
- **过度覆盖的区域**：请注意，是否对琐碎的代码（如 getter 和 setter）进行了大量测试，而复杂的逻辑仍未得到充分测试。平衡测试工作以关注更容易出错的区域。
- **覆盖率趋势**：查看一段时间内的覆盖率。覆盖率下降可能表明在维护新代码更改的测试方面缺乏纪律。
- **与 CI 集成**：确保覆盖率报告是 **持续集成 (CI)** 流程的一部分，以检测每个构建的覆盖率变化。
- **可行的见解**：使用报告创建任务来编写额外的测试或重构代码以使其更具可测试性。

请记住，虽然高覆盖率是可取的，但它并不是测试质量的绝对指标。覆盖率应与其他质量指标和测试实践结合使用，以确保软件产品稳健可靠。

### 最佳实践

#### 什么是好的代码覆盖率？

良好的 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 百分比通常目标为 **70-90%**，但理想目标可能会根据项目的背景和重要性而有所不同。争取 100% 的覆盖率通常是不切实际的，而且可能不具有成本效益，因为与所获得的收益相比，覆盖最后几个百分比的努力可能不成比例地高。

重要的是要专注于覆盖**关键路径**并确保最重要的功能得到彻底测试。复杂、容易出现风险的区域的高覆盖率比包含琐碎或低风险代码的全面覆盖更有价值。

请记住，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 只是评估测试质量的指标之一。它应该与其他测试实践和指标相补充，以确保健壮且可维护的代码库。避免编写测试只是为了增加覆盖率指标而没有为 [测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 捕获回归或 [bugs](https://inaodeng.com/zh-cn/wiki/bug/) 的能力增加真正的价值。

总之，目标是实现高但现实的覆盖率，优先考虑关键路径并补充其他[质量保证](https://inaodeng.com/zh-cn/wiki/quality-assurance/) 措施。

#### 如何提高代码覆盖率？

要增加[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)，请重点关注代码中的**识别未经测试的路径**。首先分析[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 报告以查明覆盖率较低的区域。优先为应用程序的**关键和复杂部分**编写额外的测试，这些测试如果损坏可能会影响功能。

实施 **[测试驱动开发](https://inaodeng.com/zh-cn/wiki/test-driven-development/) (TDD)**，其中测试是在代码本身之前编写的，确保每个新功能或 [bug](https://inaodeng.com/zh-cn/wiki/bug/) 修复都从测试开始。这鼓励编写可测试的代码，并可以从一开始就实现更高的覆盖率。

- 利用**参数化测试**以不同的输入运行相同的测试逻辑，以更少的代码有效覆盖更多场景。这对于处理一系列输入值的函数特别有用。
- 考虑**模拟外部依赖项**来测试在真实环境中难以重现的边缘情况和错误条件。模拟可以模拟外部系统的各种状态，增加测试可以覆盖的路径。
- 合并**集成和端到端测试**以涵盖应用程序不同部分之间的交互，而单元测试可能会错过这些交互。
- 定期**重构测试**以保持其高效和有效。重构可以揭示多余的测试或激发新的测试来覆盖以前遗漏的逻辑。
- 最后，促进**集体代码所有权**的文化，其中所有团队成员都负责编写和维护测试。这确保了不同的观点对[测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/)有所贡献，有可能发现需要更多覆盖的领域。

```js
  // Example of a parameterized test in TypeScript using Jest
  describe.each([
    [1, 2, 3],
    [4, 5, 9],
    [-1, -2, -3]
  ])('add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(add(a, b)).toBe(expected);
    });
  });
```

通过战略性地扩展您的[测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 并培养测试文化，您可以有效地增加[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)。

#### 实现高代码覆盖率的最佳实践有哪些？

要实现高[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)，请考虑以下最佳实践：

- **优先考虑关键路径**在您的应用程序中，确保最重要的功能经过彻底测试。
- **在编码时编写测试**推广测试驱动开发（TDD）方法，这自然会增加覆盖范围。
- **重构代码**使其更具可测试性；模块化、松散耦合的代码更容易被测试覆盖。
- **使用模拟和存根**隔离代码单元，允许在没有外部依赖的情况下对各个组件进行更彻底的测试。
- **将测试集成到您的构建过程中** ，因此测试会自动运行，并且每次更改都会检查覆盖率。
- **设定覆盖目标**并逐步提高覆盖范围；避免以 100% 为目标，因为这可能不具有成本效益。
- **查看[测试用例](https://inaodeng.com/zh-cn/wiki/test-case/)**定期进行，以确保它们有意义，而不仅仅是夸大覆盖率指标。
- **避免为琐碎的代码编写测试**除非它是关键功能的一部分；专注于更可能包含错误的复杂逻辑。
- **利用[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 报告**识别未经测试的路径并编写额外的测试来覆盖这些区域。
- **鼓励集体所有制**代码库及其测试覆盖率，培养一种所有开发人员都对质量负责的文化。
- **尽可能自动化** ，但请记住，某些区域可能需要手动测试；平衡自动化与探索性测试。

通过遵循这些做法，您可以确保为[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 所做的努力转化为对[软件质量](https://inaodeng.com/zh-cn/wiki/software-quality/) 的有意义的改进。

#### 如何长期保持高代码覆盖率？

随着时间的推移，保持较高的[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 需要采取严格的方法并遵守最佳实践。以下是一些策略：

- **自动化**：作为**持续集成** (CI) 流程的一部分，自动执行 [测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/)。这可以确保定期运行测试并一致地测量覆盖范围。
- **监控**：使用仪表板监控覆盖率趋势。设置大幅下降警报，以便及早发现问题。
- **重构**：更新代码时重构测试以使其与更改保持一致。这有助于避免过时的测试并确保覆盖新的代码路径。
- **代码审查**：将 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 检查纳入您的同行评审流程。要求新代码提交不会降低覆盖率。
- **测试优先**：采用 **[测试驱动开发](https://inaodeng.com/zh-cn/wiki/test-driven-development/)** (TDD) 方法，在代码之前编写测试，确保从一开始就覆盖。
- **优先级**：首先专注于测试关键路径和功能。高风险地区应具有最高的覆盖率。
- **删除死代码**：定期扫描并删除死代码或无法访问的代码，以防止人为夸大覆盖率指标。
- **教育**：确保团队了解高[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 的价值以及如何编写有效的测试。
- **平衡**：平衡对高覆盖率的追求与测试质量。避免仅仅为了提高覆盖率而编写测试。
- **更新阈值**：随着代码库的增长，定期重新评估和更新覆盖率阈值以反映项目的当前状态。

通过实施这些策略，您可以确保随着代码库的发展保持高[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)。

#### 尝试提高代码覆盖率时需要避免哪些常见陷阱？

增加[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)时，请避免以下常见陷阱：

- **为了指标而编写测试**：专注于有意义的测试，而不是通过琐碎或冗余的测试来夸大覆盖率数字。
- **忽略[可维护性](https://inaodeng.com/zh-cn/wiki/maintainability/)** ：确保测试易于理解和维护。复杂的测试可能会成为一种负担，并且随着时间的推移可能会被忽略或删除。
- **忽略边缘情况**：高覆盖率并不能保证所有边缘情况都经过测试。优先考虑涵盖不同输入场景和错误条件的测试。
- **忽略集成点**：不要只关注单元测试。确保覆盖范围延伸到组件交互的集成点。
- **注重数量而非质量**：一些经过深思熟虑的测试比许多仓促、无效的测试要好。旨在进行断言正确行为的测试。
- **省略负面测试**：不仅测试预期结果，还测试系统如何处理故障或意外输入。
- **忘记非功能方面**：性能、安全性和可用性也很重要，应该通过测试来涵盖。
- **变得自满**：高覆盖率不是一次性的成就。随着代码库的发展不断审查和更新测试。
- **仅依赖覆盖率工具**：工具可能会错过深思熟虑的测试人员可能捕捉到的场景。将它们用作辅助工具，而不是作为测试完整性的唯一衡量标准。

请记住，我们的目标是创建一个强大且可靠的 [测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 以支持软件的质量，而不仅仅是达到覆盖率目标。

### 高级主题

#### 什么是分支覆盖率以及它与语句覆盖率有何不同？

分支覆盖率是衡量程序控制流中已执行分支百分比的指标。与仅检查每行代码是否已执行的“语句覆盖率”不同，分支覆盖率要求测试通过条件语句的每个可能的路由。这意味着对于`if-else` 语句，`if` 分支和`else` 分支都必须由[测试用例](https://inaodeng.com/zh-cn/wiki/test-case/) 遍历，以实现完全分支覆盖。

下面是一个 TypeScript 示例来说明差异：

```ts
  function exampleFunction(x: number) {
    if (x > 0) {
      console.log('Positive number');
    } else {
      console.log('Non-positive number');
    }
  }
```

对于**语句覆盖率**，您需要运行 `exampleFunction` 至少一次以覆盖所有代码行。但是，对于 **分支覆盖**，您需要运行至少两次，使用正数来覆盖 `if` 分支，使用非正数来覆盖 `else` 分支。

分支覆盖比语句覆盖更彻底，因为它确保测试代码中决策产生的所有分支，这可以揭示语句覆盖可能遗漏的逻辑错误。但是，它并不能保证复合决策中的所有条件都经过单独评估，这就是**条件覆盖**的用武之地。

#### 什么是条件覆盖以及它与分支覆盖有何不同？

条件覆盖率也称为谓词覆盖率，用于衡量代码中决策中的每个布尔子表达式是否已被评估为 true 和 false。这与分支覆盖不同，分支覆盖侧重于确保从决策点产生的每个可能的分支（或路径）至少执行一次。

例如，考虑以下代码片段：

```js
  if (a > 0 && b < 10) {
      // do something
  }
```

如果测试确保整个 `if` 语句被评估为 true 和 false，则分支覆盖率将得到满足，这可以通过两个测试来实现：一个测试 `a > 0 && b < 10` 为 true，另一个测试为 false。

条件覆盖比分支覆盖更彻底，因为它检查分支条件本身的逻辑复杂性，而不仅仅是代码中的路径。然而，实现完整的条件覆盖可能需要大量的[测试用例](https://inaodeng.com/zh-cn/wiki/test-case/)，特别是当条件的复杂性增加时。

#### 代码覆盖率与突变测试等其他测试指标有何关系？

[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 和[突变测试](https://inaodeng.com/zh-cn/wiki/mutation-testing/) 是用于评估[测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 有效性的补充指标。 **[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)** 测量测试执行的代码的百分比，**[突变测试](https://inaodeng.com/zh-cn/wiki/mutation-testing/)** 通过向代码库引入更改或突变并检查测试是否检测到这些更改来评估这些测试的质量。

[突变测试](https://inaodeng.com/zh-cn/wiki/mutation-testing/) 涉及创建许多版本的代码，每个版本都有称为**突变体**的小修改。如果 [测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 在引入突变体时失败，则认为它是有效的，表明它可以检测引入的故障。此过程可让您深入了解[测试用例](https://inaodeng.com/zh-cn/wiki/test-case/) 的**稳健性**。

相比之下，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 只是量化测试了多少代码，而不评估测试对缺陷的敏感性。如果测试的目的不是彻底断言正确的行为，那么高 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 可能会产生错误的安全感。

这些指标共同提供了 [测试套件](https://inaodeng.com/zh-cn/wiki/test-suite/) 有效性的更全面的视图。 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 可以识别代码库中未经测试的部分，而 [突变测试](https://inaodeng.com/zh-cn/wiki/mutation-testing/) 可以突出 [测试用例](https://inaodeng.com/zh-cn/wiki/test-case/) 本身的弱点。通过使用这两个指标，工程师不仅可以确保所有代码路径都得到执行，而且还可以确保测试能够捕获错误，从而形成更可靠和可维护的代码库。

在实践中，以高[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)为目标是一个很好的起点，但用[突变测试](https://inaodeng.com/zh-cn/wiki/mutation-testing/)对其进行补充可确保测试不仅覆盖代码，而且对潜在缺陷也敏感。

#### 代码覆盖率和测试驱动开发之间有什么关系？

**[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)** 和 **[测试驱动开发](https://inaodeng.com/zh-cn/wiki/test-driven-development/) (TDD)** 之间的关系是内在的，因为 TDD 本质上促进了更高的 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)。在 TDD 中，测试是在生产代码之前编写的，确保每个新功能都以相应的 [测试用例](https://inaodeng.com/zh-cn/wiki/test-case/) 开头。这种方法自然会导致为每一段新代码创建测试，这可以显着增加 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 指标。

此外，TDD 鼓励小的增量更改和频繁的重构，这有助于随着时间的推移保持较高的[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)。当开发人员添加或修改代码时，系统会提示他们更新或添加新测试，这加强了代码库的覆盖范围。

然而，值得注意的是，虽然 TDD 可以导致高[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)，但它并不能保证全面的测试。 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 是一种定量测量，高覆盖率并不总是等同于高质量的测试。TDD 专注于系统所需的功能，虽然它可以对新功能进行彻底的测试，但它可能无法解决代码中的所有边缘情况或路径。

总之，TDD 和 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 相辅相成，TDD 提供了一种结构化方法来确保大多数新代码都被测试覆盖，而 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 则提供了衡量测试范围的指标。两者都应该明智地使用，并理解高[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/)是达到目的的手段，而不是目的本身。

#### 代码覆盖率如何影响代码库的可维护性？

[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 可以显着影响代码库的 **[可维护性](https://inaodeng.com/zh-cn/wiki/maintainability/)**。高 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 通常表示测试了更多的代码库，这可以使维护更容易，原因如下：

1. **重构信心**：通过一套全面的测试，开发人员可以充满信心地重构代码，因为他们知道测试可能会发现任何引入的错误。
2. **文档**：测试可以作为文档的一种形式，显示代码的行为方式。这对于不熟悉代码的维护人员来说非常宝贵。
3. **设计质量**：争取高代码覆盖率可以鼓励更好的软件设计，因为测试精心设计的模块化代码通常更容易。这可以使代码库更易于理解和维护。
4. **[Bug](https://inaodeng.com/zh-cn/wiki/bug/) 检测**：经过良好测试的代码库可以帮助维护人员快速识别和修复错误，因为测试可以查明代码中存在问题的区域。

但是，需要注意的是，[代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 并不是灵丹妙药。盲目追求高覆盖率而不考虑测试质量可能会导致错误的安全感。测试应该是有意义的，并关注关键路径和逻辑，而不是简单地增加覆盖率指标。过度关注覆盖率还可能导致为琐碎的代码编写测试，这会增加维护开销，但没有多大好处。
总之，虽然 [代码覆盖率](https://inaodeng.com/zh-cn/wiki/code-coverage/) 可以成为测试彻底性的有用指标，并且可以帮助 [可维护性](https://inaodeng.com/zh-cn/wiki/maintainability/)，但它应该与测试质量和相关性相平衡，以确保可维护的代码库。
