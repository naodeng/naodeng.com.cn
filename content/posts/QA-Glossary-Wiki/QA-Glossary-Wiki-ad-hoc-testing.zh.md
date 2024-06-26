---
author: "nao.deng"
title: "软件测试术语分享:Ad Hoc Testing 随机测试"
date: "2024-02-26T12:06:44+08:00"
summary: "这篇博文是软件测试术语分享系列的一部分，聚焦于 Ad Hoc Testing（随机测试）。文章详细介绍了随机测试的基础概念和重要性，阐述了在测试实践中实施和应用随机测试的技术。读者将了解随机测试的场景和用例，以及如何在项目中有效地运用这一测试方法。博文还提供了随机测试的最佳实践，帮助测试人员更好地利用这一方法发现潜在问题。通过这个系列分享，读者将更全面地了解 Ad Hoc Testing 的价值，并在测试策略中灵活地运用这一方法。"
ZHtags: ["随机测试","Ad Hoc Testing"]
ZHcategories: ["测试类型"]
ZHseries: ["软件测试术语分享"]
ShowWordCount: true
---

## Ad Hoc Testing 随机测试

> “Ad-Hoc”原意是指“特定的，一次性的”,故 Ad hoc testing 一般成为即兴测试，一次性测试或随机测试。
> 这里把 Ad Hoc Testing 翻译为随机测试，也感觉有些歧义，个人觉得即兴测试，临时测试，临场测试貌似更准确。（大家有好的想法，可以提 PR 来更新）

**Ad hoc testing（随机测试）** 是一种非正式、即兴的[软件测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/software-testing.md)方法。其主要目标是尽快发现漏洞或问题。这种方法没有详细的计划或文档支持，属于一种不受限、灵活应对的测试方式。

相关术语：
[Exploratory Testing  探索性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md)

## 关于随机测试的问题

### 基础知识和重要性

#### 什么是软件测试中的随机测试？

随机测试 是一种非正式且非结构化的软件测试技术，测试人员在没有具体计划或文档的情况下探索软件。它凭借测试人员的直觉、经验和对应用程序的理解来引导测试过程。这种测试通常用于发现传统、结构化测试方法可能遗漏的缺陷。

在 随机测试 中，测试人员可以自由选择应用程序的任何路径，并使用任何有效或无效的输入数据。这是一种探索性测试，其主要目标是通过超越传统思维方式、以创造性的方式尝试破坏系统来发现错误。

由于 随机测试 是无脚本的，要重现问题通常需要测试人员详细记录他们的操作。通常在正式执行测试用例后的测试后阶段使用，以补充更加结构化的测试方法。

**关键点：**

- 非结构化和非正式的测试方法。
- 依赖于测试人员的直觉和经验。
- 用于发现结构化测试未捕捉到的缺陷。
- 允许创造性和无约束的探索。
- 没有详细记录的情况下难以重现问题。
- 在后期阶段与结构化测试相辅相成。

#### 为什么随机测试在软件开发生命周期中很重要？

随机测试 在**软件开发生命周期**（SDLC）中至关重要，因为它提供了一种独特的方法来发现结构化测试可能忽略的缺陷。它依赖于测试人员的直觉、经验和对系统的理解，以在没有预定义 [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md) 或文档的情况下探索应用程序。这可能导致发现**意外问题**，特别是在应用程序的复杂或较不清晰的领域。

由于 随机测试 是无脚本的，它允许测试人员更自然地**模拟用户的视角**，潜在地识别正式 [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md) 无法发现的可用性问题。它还对应用程序进行**[压力测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/stress-testing.md)**提供了价值，这是在设计阶段未预料到的方式。

将 随机测试 纳入 SDLC 可以增强整体的**[测试覆盖率](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-coverage.md)**，并提供了一种结构化测试的补充方法。在开发的后期阶段，尤其是在正式测试周期完成后，在发布前进行最终检查或在快速测试补丁和小更新之前，它变得尤为重要。

此外，随机测试 可以是一种**高效利用时间**的测试应用程序的方式，特别是在截止日期紧迫的情况下，因为它不需要提前准备。这是一种灵活的测试方法，可以在任何机会使用，使其成为 SDLC 中持续改进的有价值工具。

#### 随机测试与其他测试形式的主要区别是什么？

随机测试 与其他测试形式的主要区别在于其**缺乏正式结构**和**预定义的 [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)**。与诸如单元测试、集成测试或[系统测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/system-testing.md)等系统测试方法不同，随机测试 是**无脚本**的，依赖于测试人员的直觉、经验和对系统的理解来探索应用程序并发现缺陷。

其他形式的测试通常遵循**记录的过程**，基于事先设计的**[测试计划](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-plan.md)**、**[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)**和**[测试脚本](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-script.md)**。这些测试通常是**可重复的**，可以**自动化**，确保在测试周期内保持一致的覆盖范围。

相反，随机测试 是**自发的**和**非正式的**，使其**不可重复**。它主要是一个**手动**测试过程，因为它需要人类的创造力和洞察力来执行。执行 随机测试 的测试人员可能会关注**难以自动化**或需要**人工判断**的应用程序区域。

虽然其他测试方法通过详细的[测试场景](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-scenario.md)旨在实现全面覆盖，随机测试通常用于发现结构化测试可能忽略的**边缘案例**或**异常缺陷**。它通常在**时间有限**时使用，并作为其他测试策略的补充，而不是作为一种独立的方法。

随机测试 的灵活性使测试人员能够在无需更新正式测试文档的情况下**快速适应**应用程序的更改。然而，由于其非结构化的性质，跟踪和衡量其有效性可能会**具有挑战性**。

#### 随机测试有哪些优缺点？

**随机测试的优势：**

- **灵活性**：允许测试人员在没有预定义案例的情况下探索应用程序，鼓励创造性的测试场景。
- **经济高效**：无需进行广泛的准备或文档编制，降低了初期成本。
- **快速反馈**：提供对应用程序功能和潜在问题的即时见解。
- **发现意外的[缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md)**：由于其不可预测的性质，可以揭示结构化测试可能忽略的缺陷。

**随机测试的劣势：**

- **不可重复**：如果步骤未经记录，找到一个错误可能是一次性事件，使得跟踪和修复变得困难。
- **测试范围不足**：没有结构化的方法，应用程序的某些部分可能保持未经测试状态。
- **主观结果**：严重依赖于测试人员的专业知识和直觉，可能导致不一致的结果。
- **不适用于所有阶段**：在需要更多形式化验证的开发后期阶段可能效果不佳。

请记住，随机测试是其他测试方法的一种补充，而不是独立的解决方案。它在由**经验丰富的测试人员**使用时效果最好，这些测试人员能够快速识别和探索复杂的应用程序区域。

### 实施和技术

#### 如何执行随机测试？

随机测试是在**没有任何正式的测试计划**或文档的情况下执行的。测试人员凭借他们的理解力和**探索软件**来发现缺陷。这种方法在很大程度上依赖于测试人员的**直觉、经验和创造力**。

以下是执行随机测试的一般过程：

1. **了解应用程序**：对软件的功能和目的有一个基本的了解。
2. **定义范围**：尽管是非正式的，但决定要关注的应用程序区域。
3. **执行测试**：以各种方式与软件进行交互，以发现问题，包括：
    - 尝试不同的输入
    - 以意想不到的方式浏览应用程序
    - 尝试用不寻常的行为破坏应用程序
4. **记录观察**：跟踪测试过程中观察到的任何缺陷或奇怪的行为。
5. **报告[缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md)**：将发现的问题通报给开发团队以供解决。

在随机测试期间，测试人员可能会采用**[错误猜测](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/error-guessing.md)**或**[探索性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md)**等技术来指导他们的方法。该过程本质上是**灵活和非结构化**的，使测试人员能够快速识别结构化测试可能忽略的问题。

值得注意的是，尽管随机测试可能是自发的，但对系统的**广泛了解**及其潜在弱点可以导致更有效的测试会话。

#### 有哪些常用的随机测试技术？

在**随机测试**中常见的技术包括：

- **[探索性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md)**：测试人员在没有预定义测试用例的情况下探索软件，使用他们的理解和直觉来引导他们的操作。
- **[错误猜测](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/error-guessing.md)**：测试人员依赖经验猜测软件中可能发生缺陷的最有可能的区域。
- **[猴子测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/monkey-testing.md)**：向系统提供随机输入，观察其行为，通常自动化生成大量随机数据。
- **[对测](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/pair-testing.md)**：两名测试人员在一台键盘上共同工作；一人操作测试，另一人提供指导并记录发现。
- **[基于会话的测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/session-based-testing.md)**：测试被结构化成专注于特定区域的不间断会话，测试人员记录他们的发现和思考过程。

这些技术通常以一种**互补**的方式使用，取决于测试会话的背景和目标。它们充分利用测试人员的创造力、经验和直觉，以发现结构化测试可能忽略的问题。

#### 有效执行随机测试需要哪些技能？

要有效执行**随机测试**，个体需要一系列技能，使他们能够在没有预定义的 [测试计划](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-plan.md) 的情况下探索软件。这些技能包括：

- **探索技能**：有创造性地探索和导航软件，以发现结构化测试可能忽略的问题的能力。
- **分析技能**：强大的分析思维，能够假设缺陷可能存在的位置并理解软件的行为。
- **注重细节**：敏锐的观察力，注意到可能导致更大问题的细微差异和潜在问题。
- **技术知识**：对软件的架构、特性和潜在弱点有扎实的了解。
- **经验**：熟悉被测试系统和类似系统，以便利用过去的知识并识别模式。
- **直觉**：对缺陷可能发生的位置有直观的感觉，通常是从经验中发展而来。
- **沟通技能**：能够清晰地记录和传达发现，向开发团队和其他利益相关者沟通。
- **适应能力**：灵活切换焦点，并根据测试过程中出现的新信息或关注的领域进行调整的能力。
- **时间管理**：有效管理时间的技能，因为即兴测试通常是有时间限制的或在有限的时间内进行的。

这些技能帮助测试人员以既高效又有效的方式执行**随机测试**，为软件的质量和可靠性提供有价值的见解。

#### 随机测试可以自动化还是只能严格手动测试？

由于其本质是一种非正式和无结构的测试方法，测试人员在**随机测试**中积极地在没有预定义的 [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md) 或计划的情况下探索软件。另一方面，自动化依赖于预先脚本化的测试，可以自动运行。因此，**随机测试主要是一个手动过程**。

然而，随机测试的某些方面可以通过自动化工具支持。例如，自动化脚本可以用于设置应用程序内的复杂环境或状态，然后测试人员可以手动探索。这种混合方法使测试人员能够专注于随机测试的探索方面，而无需进行重复的 [设置](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/setup.md) 任务。

此外，虽然随机测试的探索部分是手动的，**自动化可以帮助记录和捕获**发现问题时系统的状态。工具可以自动记录采取的步骤、系统状态和其他相关数据，有助于[缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md)的再现和报告。

总体而言，虽然随机测试的核心活动是手动的，但自动化可以在增强测试过程的效率和效果方面发挥支持性作用。

### 场景和用例

#### 有哪些实际场景的示例来介绍如何使用随机测试？

随机测试通常在存在有限结构或文档，并且需要对软件行为进行快速、直观评估的情况下使用。以下是一些实际场景的例子：

- **[探索性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md)**：在开发新功能时，测试人员可能会使用即兴方法在正式编写测试用例之前探索该功能的功能性。
- **发布后**：在软件发布后，可以使用即兴测试快速检查实时环境，以确保没有引入重大问题。
- **[缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md) [验证](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/V/verification.md)**：一旦修复了缺陷，测试人员可能会围绕修复进行即兴测试，以确保问题得到解决，并且没有引入新问题。
- **高风险区域**：在已知存在高风险组件的系统中，可以使用即兴测试快速评估这些区域的稳定性，特别是在进行更改后。
- **有限时间**：当存在时间限制且无法完成正式测试时，即兴测试可以提供快速的合理性检查，以评估关键功能。
- **用户反馈**：如果用户报告了意外行为，测试人员可能会使用即兴测试来复制问题并探索可能受到影响的相关功能。
- **技术更改**：当底层技术或框架更新时，即兴测试可以帮助快速识别任何兼容性问题或回归。

在这些场景中，测试人员的经验、直觉和对系统的了解引导测试过程，通常导致发现结构化测试可能忽视的缺陷。

#### 你能提供一个随机测试发现关键缺陷的场景吗？

情景：在一个开发的晚期阶段，一位测试工程师正在探索一个新实施的金融应用功能，该功能允许用户在账户之间进行资金转账。正式的 [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md) 已经执行过，未发现重大问题。然而，工程师决定进行一些**随机测试**，模拟可能做出不合理和非传统选择的用户。

在随机导航应用程序的过程中，工程师试图从资金不足的账户发起转账，期望看到标准错误消息。然而，应用程序崩溃了，重新启动后，账户余额损坏，显示不正确的数字。

这个关键的 [缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md)在结构化测试中被忽略了，因为 [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md) 假设用户行为是理性的，并且没有考虑到工程师在即兴会话期间采取的特定操作序列。这个 [缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md) 是在处理具有特定时间和数据条件的交易时发生未处理异常的结果，而这些条件在 [测试脚本](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-script.md) 中没有涵盖。

发现这个 [缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md) 是重要的，因为它可能导致在生产环境中出现严重的财务差异。随机测试 方法使工程师能够发现结构化测试忽视的关键问题，展示了这种测试方法在发现不可预测的现实问题方面的价值。

#### 随机测试如何融入端到端（e2e）测试方案？

随机测试，虽然主要是手动和探索性的，通过发现结构化测试可能忽略的问题，为端到端（E2E）测试提供了补充。在 E2E 场景中，随机测试可以被战略性地使用，**在**正式执行 [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md) **之后**，模拟真实的使用情况。这是一种在没有预定义脚本的情况下**验证整个系统行为**和**用户体验**的方式。

想象一下一个覆盖应用程序中典型用户流程的 E2E 测试。一旦自动化确认流程按预期工作，随机测试介入探索[用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/use-case.md)的边缘。测试人员可能尝试**意外的输入组合**，**以非线性方式导航**，或**超出典型使用模式的系统压力测试**。这可以揭示诸如内存泄漏、处理边缘情况或在不同设备上的 UI 不一致性等漏洞。

虽然随机测试不是 E2E 场景的主要焦点，但它是一种**全面评估**的有价值工具。这就是像一个不受[测试脚本](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-script.md)限制的最终用户思考的方式。自动化工程师可以通过使用随机测试会话的见解，以更强大的[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md.md)**增强自动化套件**的方法受益。

将即兴测试的发现纳入自动化的 E2E 测试中，确保**自动化保持相关**并**适应现实世界的复杂性**。这是一个持续改进的循环，随机测试为自动化提供信息，而自动化则为更多[探索性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md)释放时间。

### 最佳实践

#### 随机测试有哪些最佳实践？

进行随机测试的最佳实践包括：

- **优先考虑高风险或变更的区域**：专注于应用程序中最近修改或已知容易出错的部分。
- **利用领域知识**：利用您对业务和用户行为的理解，探索对最终用户至关重要的功能。
- **记录发现**：虽然随机测试是非脚本化的，但重要的是记录测试内容和发现的任何问题，以供将来参考和跟踪缺陷。
- **使用多样化的测试技术**：结合不同的方法，如探索性测试、错误猜测和结对测试，以发现各种问题。
- **限时会话**：为随机测试设定特定的持续时间，以保持专注和高效率。
- **与他人合作**：与团队中的不同成员合作，以获得新的视角并发现更多的缺陷。
- **重复测试**：在开发的不同阶段进行随机测试，以捕捉在代码更改后可能出现的新问题。
- **与正式测试集成**：利用随机测试的见解来增强您的正式测试用例和自动化脚本。

请记住，虽然随机测试是非正式的，但它仍应具有战略性和针对性，以最大化其在发现潜在缺陷方面的有效性。

#### 如何衡量随机测试的效果？

衡量**随机测试**的效果可能会有挑战，因为它的非结构化性质。然而，可以使用一些指标来评估其影响：

- **发现的[缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md)数量**：跟踪通过即兴测试特别发现的缺陷，尤其是其他测试方法未能发现的缺陷。
- **[缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md)的[严重程度](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/severity.md)**：评估所发现缺陷的严重程度。高严重程度的缺陷可以表明即兴测试在发现关键问题方面的效果。
- **[测试覆盖率](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-coverage.md)**：尽管在即兴测试中很难量化，但可以在测试后使用代码覆盖工具评估意外测试的应用程序哪些区域。
- **发现缺陷的时间**：测量发现缺陷所需的时间。即兴测试可能比结构化测试更快地发现某些缺陷。
- **[缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md)的成本**：分析通过早期发现和修复缺陷带来的成本节省，这可以归因于即兴测试的非正式和快速性质。
- **测试人员的反馈**：收集测试人员对于发现缺陷的难易程度以及他们对于即兴测试的全面性的看法的定性反馈。

将这些指标与您测试环境的背景结合使用，以确定随机测试的效果。请记住，虽然这些指标

可以提供见解，但即兴测试的非脚本化性质意味着其真正的价值通常在于测试人员的专业知识和直觉，这可能更难以量化。

#### 如何将随机测试集成到持续集成/持续部署流水线？

将**随机测试**集成到 CI/CD 流水线中需要有策略性但非正式的测试工作，以补充自动化和结构化测试。由于即兴测试是探索性的且通常是手动的，因此不能直接适用于自动化流水线。然而，可以通过以下方式进行集成：

- **部署后的合理性检查**：在自动化部署后，工程师可以在实际系统上进行即兴测试，以快速验证功能和特定于环境的问题。

- **定期手动测试会话**：在 CI/CD 流程中预留时间段，供测试人员对最新构建执行随机测试，确保对最新更改进行即时反馈。

- **反馈集成**：使用反馈机制将随机测试的发现结果报告回 CI/CD 流水线。这可能涉及创建自动化工单或更新[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)。

- **基于风险的测试触发器**：实施一个系统，在代码更改或高风险区域的基础上，通知测试人员执行有针对性的随机测试。

- **探索性[测试工具](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-tool.md)**：利用在 CI/CD 上下文中支持[探索性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md)的工具，允许基于会话的[测试管理](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-management.md)和报告。

- **文档和追踪**：确保即兴测试的发现结果像其他[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)一样进行文档化和追踪，以指导未来的自动化测试并改进回归套件。

请记住，虽然随机测试不能自动化，但其结果可以为自动化[测试套件](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-suite.md)提供信息并加以增强，使其成为持续交付生态系统中的有价值的资产。

## 参考资料

- 软件测试术语 Github 仓库 <https://github.com/naodeng/QA-Glossary-Wiki>
- QA Glossary Wiki <https://ray.run/wiki>

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->
