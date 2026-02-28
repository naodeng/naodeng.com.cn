---
title: "准入条件的问题？ ｜ Entry Criteria"
description: "# 准入条件的问题？ ｜ Entry Criteria #### 基础与重要性 - 软件测试中的准入条件是什么？ 准入条件 (Entry Criteria) 是一组预先定义的条件，必须在测试活动开始前满足。"
section: "E"
order: 0
---

# 准入条件的问题？ ｜ Entry Criteria

<!-- TOC START -->
- [准入条件的问题？ ｜ Entry Criteria](#准入条件的问题--entry-criteria)
  - [关于入学标准有疑问吗？](#关于入学标准有疑问吗)
    - [基础知识和重要性](#基础知识和重要性)
      - [软件测试的准入标准是什么？](#软件测试的准入标准是什么)
      - [为什么进入标准在测试过程中很重要？](#为什么进入标准在测试过程中很重要)
      - [准入标准如何影响软件产品的整体质量？](#准入标准如何影响软件产品的整体质量)
    - [组件和元素](#组件和元素)
      - [准入标准的关键组成部分是什么？](#准入标准的关键组成部分是什么)
      - [准入标准是如何定义的以及由谁定义的？](#准入标准是如何定义的以及由谁定义的)
      - [设置准入标准时应考虑哪些要素？](#设置准入标准时应考虑哪些要素)
    - [应用与使用](#应用与使用)
      - [测试过程中如何应用准入标准？](#测试过程中如何应用准入标准)
      - [现实世界软件测试场景中的进入标准有哪些示例？](#现实世界软件测试场景中的进入标准有哪些示例)
      - [在测试过程中如何调整或修改准入标准？](#在测试过程中如何调整或修改准入标准)
    - [与其他测试概念的关系](#与其他测试概念的关系)
      - [软件测试中的进入标准与退出标准有何关系？](#软件测试中的进入标准与退出标准有何关系)
      - [准入标准和测试计划之间有什么关系？](#准入标准和测试计划之间有什么关系)
      - [准入标准如何影响测试执行过程？](#准入标准如何影响测试执行过程)
<!-- TOC END -->
在软件测试 , 入学标准指在特定测试阶段开始之前必须满足的一组预定义条件或要求。这些条件确保测试以结构化方式进行，并且仅在先决条件满足时才启动该过程。 入学标准可以涵盖各个方面，例如测试环境 , 准备情况测试工具和测试数据、先前阶段的完成或某些文件的签署。建立明确入学标准有助于避免过早测试，确保资源得到有效利用，并保持测试过程的质量和有效性。

## 关于入学标准有疑问吗？

### 基础知识和重要性

#### 软件测试的准入标准是什么？

[进入标准](/zh-cn/wiki/entry-criteria/) 是一组预定义的条件，在测试活动开始之前必须满足这些条件。 These conditions ensure that testing begins with a stable and viable baseline, reducing the risk of encountering critical issues during the [测试执行](/zh-cn/wiki/test-execution/) phase that could invalidate test results or lead to wasted effort.
  In defining [进入标准](/zh-cn/wiki/entry-criteria/), stakeholders typically consider factors such as the readiness of the [测试环境](/zh-cn/wiki/test-environment/), the availability and stability of the test item, the completion of prerequisite steps like unit or [集成测试](/zh-cn/wiki/integration-testing/), and the establishment of baseline documentation. It's often the responsibility of the project manager or [质量保证](/zh-cn/wiki/quality-assurance/) lead to outline these criteria, with input from developers, testers, and other stakeholders.
  当应用[进入标准](/zh-cn/wiki/entry-criteria/)时，[测试自动化](/zh-cn/wiki/test-automation/)工程师应在继续操作之前验证是否满足每个条件。 This might involve checks like ensuring the software build is deployed correctly, the [测试数据](/zh-cn/wiki/test-data/) is prepared, and all necessary tools and resources are in place.
  随着项目的发展，[进入标准](/zh-cn/wiki/entry-criteria/) 可能会发生调整，特别是在范围发生变化或出现不可预见的挑战的情况下。然而，任何修改都应得到相关利益相关者的同意，以保持测试过程的完整性。
  虽然[进入标准](/zh-cn/wiki/entry-criteria/) 专注于测试的开始，但它们与退出标准有着内在的联系，退出标准定义了测试何时结束。 Together, they frame the testing lifecycle, guiding both the initiation and the closure of test activities, and ensuring alignment with the overall [测试策略](/zh-cn/wiki/test-strategy/) and project goals.

#### 为什么进入标准在测试过程中很重要？

[进入标准](/zh-cn/wiki/entry-criteria/) 充当**看门人**，以确保仅当应用程序准备就绪且足够稳定以适应流程时才开始测试。这**可以防止在测试尚未成熟到足以产生有意义的结果的软件上浪费精力**。通过遵守[进入标准](/zh-cn/wiki/entry-criteria/)，团队可以避免报告问题的**低效率**，而这些问题可以通过完成已知和计划的开发或配置任务来解决。
  此外，[进入标准](/zh-cn/wiki/entry-criteria/) 通过确保在测试开始之前解决高风险领域来帮助**风险管理**。这可能包括设置正确的环境、解决依赖关系以及实现关键功能。它确保测试团队拥有有效执行测试所需的一切，这反过来又**降低了发现修复成本高昂的后期缺陷的可能性**。
  在变化频繁且[迭代](/zh-cn/wiki/iteration/) 快速变化的敏捷环境中，[进入标准](/zh-cn/wiki/entry-criteria/) 为整个[迭代](/zh-cn/wiki/iteration/) 的准备情况提供了**一致的基准**。这种一致性对于在不影响质量的情况下保持交付速度至关重要。
  最后，[进入标准](/zh-cn/wiki/entry-criteria/) 是开发人员、测试人员和利益相关者之间的**沟通工具**。他们对测试进行之前必须采取的措施设定了明确的期望，这有助于协调团队的工作并避免可能导致延迟或质量问题的误解。

#### 准入标准如何影响软件产品的整体质量？

[进入标准](/zh-cn/wiki/entry-criteria/) 确保**[软件测试](/zh-cn/wiki/software-testing/)** 仅在产品达到**定义的成熟度**时才开始。这有助于通过以下方式提高整体质量：

- **防止过早测试**
    ，这可能会导致在不稳定的构建上浪费精力。

- **确保稳定的环境**
    和测试基线，从而获得更可靠和一致的测试结果。

- **促进有效的资源分配**
    ，因为测试资源在准备测试的构建上得到有效利用。

- **降低缺陷漏掉的风险**
    由于对不完整或不稳定的产品进行测试。

- **与项目里程碑保持一致**
    ，这有助于跟踪计划进度和质量目标的进度。
  通过遵守[进入标准](/zh-cn/wiki/entry-criteria/)，[测试自动化](/zh-cn/wiki/test-automation/) 工程师可以专注于提供反映产品真实状态的**高质量测试结果**，从而就产品的发布准备情况做出更明智的决策。

- **防止过早测试**
    ，这可能会导致在不稳定的构建上浪费精力。

- **确保稳定的环境**
    和测试基线，从而获得更可靠和一致的测试结果。

- **促进有效的资源分配**
    ，因为测试资源在准备测试的构建上得到有效利用。

- **降低缺陷漏掉的风险**
    由于对不完整或不稳定的产品进行测试。

- **与项目里程碑保持一致**
    ，这有助于跟踪计划进度和质量目标的进度。

### 组件和元素

#### 准入标准的关键组成部分是什么？

[进入标准](/zh-cn/wiki/entry-criteria/) 的关键组件通常包括：

- **[测试环境](/zh-cn/wiki/test-environment/) 准备情况**：自动化运行的测试环境的可用性和配置。
- **[测试数据](/zh-cn/wiki/test-data/) 可用性**：访问测试执行所需的数据集。
- **稳定版本**：足够稳定的软件版本，已通过冒烟测试。
- **需求清晰度**：测试所依据的明确定义和商定的需求。
- **[测试用例](/zh-cn/wiki/test-case/) 准备**：完成测试用例设计并审查要测试的功能。
- **工具可用性**：访问并正确设置所需的测试自动化工具和框架。
- **资源分配**：分配具有测试执行和分析所需技能的人员。
- **风险评估**：识别和评估可能影响测试的风险。
- **文档**：提供必要的文档，包括测试计划和测试用例。
- **基线指标**：建立用于比较和评估测试结果的基线指标。
  These components ensure that testing begins with a clear understanding of what will be tested, how it will be tested, and the expected outcomes, thus facilitating a smooth and effective [测试自动化](/zh-cn/wiki/test-automation/) process.

- **[测试环境](/zh-cn/wiki/test-environment/) 准备情况**：自动化运行的测试环境的可用性和配置。
- **[测试数据](/zh-cn/wiki/test-data/) 可用性**：访问测试执行所需的数据集。
- **稳定版本**：足够稳定的软件版本，已通过冒烟测试。
- **需求清晰度**：测试所依据的明确定义和商定的需求。
- **[测试用例](/zh-cn/wiki/test-case/) 准备**：完成测试用例设计并审查要测试的功能。
- **工具可用性**：访问并正确设置所需的测试自动化工具和框架。
- **资源分配**：分配具有测试执行和分析所需技能的人员。
- **风险评估**：识别和评估可能影响测试的风险。
- **文档**：提供必要的文档，包括测试计划和测试用例。
- **基线指标**：建立用于比较和评估测试结果的基线指标。

#### 准入标准是如何定义的以及由谁定义的？

[进入标准](/zh-cn/wiki/entry-criteria/) 通常由涉及关键利益相关者（如 **测试经理、项目经理、开发人员**和 **业务分析师**）的 **协作努力** 来定义。定义过程通常以项目的**范围**、**目标**和**约束**为指导。
  The **test lead** or **test manager** usually takes the initiative to draft the [进入标准](/zh-cn/wiki/entry-criteria/), leveraging their understanding of the testing requirements and the project's context.他们将考虑诸如**[测试环境](/zh-cn/wiki/test-environment/)**的准备情况、**[测试数据](/zh-cn/wiki/test-data/)**的可用性、**功能开发的完成度**以及**构建的稳定性**等因素。
  草案准备好后，将通过与**开发团队**的讨论进行审查和完善，以确保技术可行性，并与**业务利益相关者**进行讨论，以符合业务需求和风险承受能力。这种协作方法确保[进入标准](/zh-cn/wiki/entry-criteria/) 是现实的并得到所有相关方的同意。
  在某些情况下，特别是在**敏捷环境**中，**产品所有者**也可能在定义[进入标准](/zh-cn/wiki/entry-criteria/)中发挥重要作用，特别是当标准与用户故事或验收标准密切相关时。
  然后，[进入标准](/zh-cn/wiki/entry-criteria/) 的最终集合会被记录下来，通常作为 **[测试计划](/zh-cn/wiki/test-plan/)** 的一部分，并作为正式测试开始之前的 **检查点**。这些标准必须**明确**、**可衡量**和**可实现**，以防止误解并确保顺利过渡到测试阶段。

#### 设置准入标准时应考虑哪些要素？

为软件[测试自动化](/zh-cn/wiki/test-automation/) 设置[进入标准](/zh-cn/wiki/entry-criteria/) 时，请考虑以下要素：

- **[测试环境](/zh-cn/wiki/test-environment/) 准备情况**：确保[测试环境](/zh-cn/wiki/test-environment/) 密切反映生产环境，并完全配置必要的数据、服务和网络设置。
- **构建稳定性**：应用程序构建应该足够稳定以实现自动化，关键功能按预期工作，以避免由于应用程序问题而导致[假阴性](/zh-cn/wiki/false-negative/)。
- **[测试数据](/zh-cn/wiki/test-data/) 可用性**：应有足够的[测试数据](/zh-cn/wiki/test-data/) 来覆盖各种[测试场景](/zh-cn/wiki/test-scenario/)。这包括静态数据和[测试执行](/zh-cn/wiki/test-execution/)期间动态生成的数据。
- **依赖项解析**：所有外部依赖项（例如第三方服务或 [API](/zh-cn/wiki/api/)）应可用并按测试要求运行。
- **[测试用例](/zh-cn/wiki/test-case/) 准备情况**：应根据发布范围对自动 [测试用例](/zh-cn/wiki/test-case/) 进行审查、更新和优先级排序。它们应该处于允许立即执行的状态。
- **资源可用性**：确保为测试阶段分配必要的硬件、软件和人力资源。
- **文档**：相关文档，例如需求规范和设计文档，应该完整且可供测试团队访问。
- **工具[Setup](/zh-cn/wiki/setup/)**：应正确配置自动化工具和框架，包括任何所需的插件或扩展。
- **基线性能**：如果 [性能测试](/zh-cn/wiki/performance-testing/) 是标准的一部分，则建立性能基线，以便在进行更改时进行比较。
- **合规性和安全性**：在测试开始之前验证应用程序是否满足任何必要的合规性标准和安全要求。
- **风险评估**：进行风险评估，以确定可能影响测试阶段的任何潜在问题，并制定缓解策略。
  请记住，[进入标准](/zh-cn/wiki/entry-criteria/) 应该**具体、可衡量、可实现、相关且有时限 (SMART)**，以确保清晰且高效的测试过程。

- **[测试环境](/zh-cn/wiki/test-environment/) 准备**：确保[测试环境](/zh-cn/wiki/test-environment/) 密切反映生产环境，并完全配置必要的数据、服务和网络设置。
- **构建稳定性**：应用程序构建应该足够稳定以实现自动化，关键功能按预期工作，以避免由于应用程序问题而导致[假阴性](/zh-cn/wiki/false-negative/)。
- **[测试数据](/zh-cn/wiki/test-data/) 可用性**：应有足够的[测试数据](/zh-cn/wiki/test-data/) 来覆盖各种[测试场景](/zh-cn/wiki/test-scenario/)。这包括静态数据和[测试执行](/zh-cn/wiki/test-execution/)期间动态生成的数据。
- **依赖项解析**：所有外部依赖项（例如第三方服务或 [API](/zh-cn/wiki/api/)）应可用并按测试要求运行。
- **[测试用例](/zh-cn/wiki/test-case/) 准备情况**：应根据发布范围对自动 [测试用例](/zh-cn/wiki/test-case/) 进行审查、更新和优先级排序。它们应该处于允许立即执行的状态。
- **资源可用性**：确保为测试阶段分配必要的硬件、软件和人力资源。
- **文档**：相关文档，例如需求规范和设计文档，应该完整且可供测试团队访问。
- **工具[Setup](/zh-cn/wiki/setup/)**：应正确配置自动化工具和框架，包括任何所需的插件或扩展。
- **基线性能**：如果 [性能测试](/zh-cn/wiki/performance-testing/) 是标准的一部分，则建立性能基线，以便在进行更改时进行比较。
- **合规性和安全性**：在测试开始之前验证应用程序是否满足任何必要的合规性标准和安全要求。
- **风险评估**：进行风险评估，以确定可能影响测试阶段的任何潜在问题，并制定缓解策略。

### 应用与使用

#### 测试过程中如何应用准入标准？

在测试过程中应用 **[进入标准](/zh-cn/wiki/entry-criteria/)** 可确保仅在满足某些预定义条件时才开始测试。这种把关机制对于维持测试周期的完整性和效率至关重要。
  要应用[进入标准](/zh-cn/wiki/entry-criteria/)：

1. **在测试开始之前查看标准**，以确认满足所有条件。这包括可测试代码的可用性、[测试环境](/zh-cn/wiki/test-environment/) 准备情况、[测试数据](/zh-cn/wiki/test-data/) [setup](/zh-cn/wiki/setup/) 以及先前开发里程碑的完成。
2. **经常使用清单[verification](/zh-cn/wiki/verification/)**。测试人员检查[进入标准](/zh-cn/wiki/entry-criteria/) 项目列表，将每个项目标记为满足或未满足。只有当所有项目都检查合格后，测试才会继续进行。
3. **尽可能自动化[verification](/zh-cn/wiki/verification/)**。例如，脚本可用于验证环境[setup](/zh-cn/wiki/setup/) 或[测试数据](/zh-cn/wiki/test-data/) 的可用性。
4. **与利益相关者举行启动会议**，讨论 [进入标准](/zh-cn/wiki/entry-criteria/) 的状态。这确保了测试准备情况的透明度和一致性。
5. **在[测试计划](/zh-cn/wiki/test-plan/) 或测试准备报告中记录[进入标准](/zh-cn/wiki/entry-criteria/) 的履行情况**。这是项目已准备好进行测试的正式记录。
6. **与[测试管理](/zh-cn/wiki/test-management/) 工具集成**以跟踪和执行[进入标准](/zh-cn/wiki/entry-criteria/)。许多工具允许设置在下一阶段开始之前必须通过的关卡。
7. **在测试阶段持续重新评估**。如果项目范围或环境发生变化，请重新评估 [进入标准](/zh-cn/wiki/entry-criteria/) 以确保它们仍然得到满足。
  本质上，[进入标准](/zh-cn/wiki/entry-criteria/) 被用作**前提条件检查**，以促进结构化和有效的测试，防止过早[测试执行](/zh-cn/wiki/test-execution/) 和潜在的返工。

1. **在测试开始之前查看标准**，以确认满足所有条件。这包括可测试代码的可用性、[测试环境](/zh-cn/wiki/test-environment/) 准备情况、[测试数据](/zh-cn/wiki/test-data/) [setup](/zh-cn/wiki/setup/) 以及先前开发里程碑的完成。
2. **经常使用清单[verification](/zh-cn/wiki/verification/)**。测试人员检查 [进入标准](/zh-cn/wiki/entry-criteria/) 项目列表，将每个项目标记为满足或未满足。只有当所有项目都检查合格后，测试才会继续进行。
3. **尽可能自动化[verification](/zh-cn/wiki/verification/)**。例如，脚本可用于验证环境[setup](/zh-cn/wiki/setup/) 或[测试数据](/zh-cn/wiki/test-data/) 的可用性。
4. **与利益相关者举行启动会议**，讨论 [进入标准](/zh-cn/wiki/entry-criteria/) 的状态。这确保了测试准备情况的透明度和一致性。
5. **在[测试计划](/zh-cn/wiki/test-plan/) 或测试准备报告中记录[进入标准](/zh-cn/wiki/entry-criteria/) 的履行情况**。这是项目已准备好进行测试的正式记录。
6. **与[测试管理](/zh-cn/wiki/test-management/) 工具集成**以跟踪和执行[进入标准](/zh-cn/wiki/entry-criteria/)。许多工具允许设置在下一阶段开始之前必须通过的关卡。
7. **在测试阶段持续重新评估**。如果项目范围或环境发生变化，请重新评估 [进入标准](/zh-cn/wiki/entry-criteria/) 以确保它们仍然得到满足。

#### 现实世界软件测试场景中的进入标准有哪些示例？

现实世界 [软件测试](/zh-cn/wiki/software-testing/) 场景中 [进入标准](/zh-cn/wiki/entry-criteria/) 的示例包括：

- **代码完整性**：当前版本计划的所有功能必须完全实现并合并到主分支中。
- **代码审查**：所有新的代码更改都经过同行审查并已获得批准。
- **[单元测试](/zh-cn/wiki/unit-testing/)** ：单元测试覆盖代码库的预定义百分比，并且所有测试均成功通过。
- **[集成测试](/zh-cn/wiki/integration-testing/)** ：与外部系统的关键集成已经过测试和验证。
- **文档**：相关文档（例如功能描述和使用说明）完整且可用。
- **[测试环境](/zh-cn/wiki/test-environment/)** ：镜像生产的稳定测试环境已设置并可供使用。
- **[测试数据](/zh-cn/wiki/test-data/)** ：准备自动化测试所需的测试数据并将其加载到测试环境中。
- **构建稳定性**：最新版本稳定，没有阻止应用程序启动或基本功能的严重错误。
- **性能标准**：应用程序在加载时间和响应能力方面满足最低性能基准。
- **安全许可**：任何新代码均符合安全标准，并已通过安全审核（如有必要）。
- **依赖项**：所有外部依赖项（例如第三方服务或库）均可用并按预期运行。
- **资源可用性**：为测试阶段分配并提供必要的资源，包括测试自动化工程师和必要的硬件。
  这些标准确保测试从坚实的基础开始，减少遇到可能使测试结果无效或导致浪费精力的阻碍因素的可能性。

- **代码完整性**：当前版本计划的所有功能必须完全实现并合并到主分支中。
- **代码审查**：所有新的代码更改都经过同行审查并已获得批准。
- **[单元测试](/zh-cn/wiki/unit-testing/)** ：单元测试覆盖代码库的预定义百分比，并且所有测试均成功通过。
- **[集成测试](/zh-cn/wiki/integration-testing/)** ：与外部系统的关键集成已经过测试和验证。
- **文档**：相关文档（例如功能描述和使用说明）完整且可用。
- **[测试环境](/zh-cn/wiki/test-environment/)** ：镜像生产的稳定测试环境已设置并可供使用。
- **[测试数据](/zh-cn/wiki/test-data/)** ：准备自动化测试所需的测试数据并将其加载到测试环境中。
- **构建稳定性**：最新版本稳定，没有阻止应用程序启动或基本功能的严重错误。
- **性能标准**：应用程序在加载时间和响应能力方面满足最低性能基准。
- **安全许可**：任何新代码均符合安全标准，并已通过安全审核（如有必要）。
- **依赖项**：所有外部依赖项（例如第三方服务或库）均可用并按预期运行。
- **资源可用性**：为测试阶段分配并提供必要的资源，包括测试自动化工程师和必要的硬件。

#### 在测试过程中如何调整或修改准入标准？

有时需要在测试过程中调整[进入标准](/zh-cn/wiki/entry-criteria/)，以适应项目范围的变化、不可预见的挑战或新信息。要修改[进入标准](/zh-cn/wiki/entry-criteria/)：

- **进行风险评估**：评估变更对项目风险状况的影响。调整标准以减轻新风险。
- **与利益相关者合作**：与团队（包括开发人员、项目经理和业务分析师）讨论潜在的调整，以确保一致性。
- **审查[测试计划](/zh-cn/wiki/test-plan/)** ：确保修改后的进入标准与现有测试计划一致或相应更新测试计划。
- **更新文档**：反映所有相关文档中的更改，以保持透明度和可追溯性。
- **传达变更**：清楚地通知所有团队成员更新的标准，以避免在测试执行期间出现混乱。
- **重新评估资源分配**：根据需要调整人员配置和工具以满足新标准。
  代码修改示例：

  ```
  interface EntryCriteria {
    testEnvironmentReady: boolean;
    testCasesReviewed: boolean;
    // Additional criteria...
  }
  let currentCriteria: EntryCriteria = {
    testEnvironmentReady: true,
    testCasesReviewed: true,
    // Additional criteria set to initial values...
  };
  function updateEntryCriteria(criteria: Partial<EntryCriteria>) {
    currentCriteria = { ...currentCriteria, ...criteria };
  }
  // Adjusting criteria during the process
  updateEntryCriteria({ testEnvironmentReady: false }); // Reflects a change in test environment readiness
  ```
请记住，对 [进入标准](/zh-cn/wiki/entry-criteria/) 的更改应该经过论证、记录和传达，以保持测试过程的完整性。

- **进行风险评估**：评估变更对项目风险状况的影响。调整标准以减轻新风险。
- **与利益相关者合作**：与团队（包括开发人员、项目经理和业务分析师）讨论潜在的调整，以确保一致性。
- **审查[测试计划](/zh-cn/wiki/test-plan/)** ：确保修改后的进入标准与现有测试计划一致或相应更新测试计划。
- **更新文档**：反映所有相关文档中的更改，以保持透明度和可追溯性。
- **传达变更**：清楚地通知所有团队成员更新的标准，以避免在测试执行期间出现混乱。
- **重新评估资源分配**：根据需要调整人员配置和工具以满足新标准。

### 与其他测试概念的关系

#### 软件测试中的进入标准与退出标准有何关系？

[进入标准](/zh-cn/wiki/entry-criteria/) 和[软件测试](/zh-cn/wiki/software-testing/) 中的退出标准是定义测试阶段边界的互补概念。虽然在测试开始之前必须满足 **[进入标准](/zh-cn/wiki/entry-criteria/)** ，但 **退出标准** 指定结束测试活动必须满足的条件。
  两者之间的关系在于它们作为质量门的作用。 [进入标准](/zh-cn/wiki/entry-criteria/) 确保测试从稳定且可测试的构建开始，而退出标准则确认软件在发布或进入下一开发阶段之前满足所需的质量标准。
  在实践中，退出标准通常包括成功完成[测试用例](/zh-cn/wiki/test-case/)，这些[测试用例](/zh-cn/wiki/test-case/) 被定义为[进入标准](/zh-cn/wiki/entry-criteria/) 的一部分。例如，如果[进入标准](/zh-cn/wiki/entry-criteria/) 规定了一定级别的[代码覆盖率](/zh-cn/wiki/code-coverage/)，则退出标准可能要求在没有严重缺陷的情况下实现此覆盖范围。
  两组标准均由项目利益相关者定义，通常是在测试计划阶段，并且基于项目的风险评估、目标和标准。它们是动态的，可以随着项目的发展而重新审视。
  为了确保从测试阶段开始到结束的顺利过渡，应明确定义进入和退出标准，并得到所有利益相关者的同意并记录在案。这种一致性有助于衡量测试工作的进度和质量，促进更加结构化和可预测的发布过程。

#### 准入标准和测试计划之间有什么关系？

**[进入标准](/zh-cn/wiki/entry-criteria/)** 和 **测试计划** 之间的关系是测试阶段的结构和成功的基础。 [进入标准](/zh-cn/wiki/entry-criteria/) 作为测试开始前必须满足的**前提条件**，从而直接影响[测试计划](/zh-cn/wiki/test-plan/) 的**范围**和**时间表**。
  In test planning, [进入标准](/zh-cn/wiki/entry-criteria/) are used to:

- **定义基线**
    测试何时开始执行，确保仅当软件准备就绪且足够稳定以进行有效的测试周期时才开始测试。

- **指导资源分配**
    ，因为满足进入标准可以表明需要特定的工具、环境或人员。

- **降低风险**
    通过防止过早测试，这可能会导致在与未就绪的功能或不稳定的构建相关的缺陷上浪费精力和资源。

- **促进沟通**
    提供明确的、商定的进展基准，这对于协调活动和期望至关重要。
  在测试计划阶段，标准被集成到计划中，以建立明确的**里程碑**和**检查点**。这种集成有助于确保测试团队清楚地了解何时继续进行测试活动以及何时暂停，直至满足进入条件。
  总之，[进入标准](/zh-cn/wiki/entry-criteria/) 是测试计划不可或缺的一部分，因为它们为结构化且高效的测试流程奠定了基础，确保测试工作与软件的准备情况和项目目标保持一致。

- **定义基线**
    测试何时开始执行，确保仅当软件准备就绪且足够稳定以进行有效的测试周期时才开始测试。

- **指导资源分配**
    ，因为满足进入标准可以表明需要特定的工具、环境或人员。

- **降低风险**
    通过防止过早测试，这可能会导致在与未就绪的功能或不稳定的构建相关的缺陷上浪费精力和资源。

- **促进沟通**
    提供明确的、商定的进展基准，这对于协调活动和期望至关重要。

#### 准入标准如何影响测试执行过程？

[进入标准](/zh-cn/wiki/entry-criteria/) 充当[测试执行](/zh-cn/wiki/test-execution/) 的**看门人**，确保仅在满足预定义条件时才开始测试。这通过以下方式直接影响[测试执行](/zh-cn/wiki/test-execution/)进程：

- **确定准备情况**：仅当软件构建稳定并达到最低质量阈值时才启动测试，从而防止在过早或不稳定的构建上浪费精力。
- **指导资源分配**：通过设置明确的切入点，团队可以在正确的时间高效地分配资源，例如人员和测试环境。
- **简化工作流程**：进入标准有助于对测试活动进行排序，确保在测试开始之前解决依赖关系。
- **降低风险**：通过遵守进入标准，团队可以避免与测试不完整的功能或具有已知关键问题的功能相关的风险。
- **促进自动化**：对于自动化测试，可以将进入标准集成到 CI/CD 管道中，以便在满足条件时自动触发测试套件。
  In practice, [进入标准](/zh-cn/wiki/entry-criteria/) might include conditions such as:

  ```
  allFeaturesImplemented = true;
  codeReviewed = true;
  unitTestsPassed = true;
  ```
如果这些条件评估为`true`，则自动[测试套件](/zh-cn/wiki/test-suite/)继续进行；否则，执行将被延迟，直到满足标准。在测试周期中对[进入标准](/zh-cn/wiki/entry-criteria/)进行调整可以重新调整测试工作的重点，以响应不断变化的项目动态或新发现的信息。

- **确定准备情况**：仅当软件构建稳定并达到最低质量阈值时才启动测试，从而防止在过早或不稳定的构建上浪费精力。
- **指导资源分配**：通过设置明确的切入点，团队可以在正确的时间高效地分配资源，例如人员和测试环境。
- **简化工作流程**：进入标准有助于对测试活动进行排序，确保在测试开始之前解决依赖关系。
- **降低风险**：通过遵守进入标准，团队可以避免与测试不完整的功能或具有已知关键问题的功能相关的风险。
- **促进自动化**：对于自动化测试，可以将进入标准集成到 CI/CD 管道中，以便在满足条件时自动触发测试套件。
