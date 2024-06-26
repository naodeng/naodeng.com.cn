---
author: "nao.deng"
title: "软件测试术语分享:Agile Development 敏捷开发"
date: "2024-02-27T12:06:44+08:00"
summary: "这篇博文是软件测试术语分享系列的一部分，集中讨论 Agile Development（敏捷开发）。文章深入解析了敏捷开发的基础概念和其在软件开发中的重要性，探讨了敏捷方法论的原则，各个角色与职责的分工，以及敏捷实践中软件测试的关键作用。读者将了解如何在敏捷团队中协同工作，提高交付效率，并应对变化。通过这个系列分享，读者将对敏捷开发的理念、方法和软件测试在敏捷环境中的实践有更深刻的了解。"
ZHtags: ["敏捷开发","Agile Development"]
ZHcategories: ["软件开发模型"]
ZHseries: ["软件测试术语分享"]
ShowWordCount: true
---

## Agile Development 敏捷开发

敏捷软件开发是一种迭代方法，通过跨职能团队的协作来共同开发需求和解决方案。其着重点在于适应性和灵活性，而非死板的规划。

也可以看看：
[敏捷软件开发维基百科](https://zh.wikipedia.org/wiki/%E6%95%8F%E6%8D%B7%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91)

## 关于敏捷开发的问题

### 基础知识和重要性

#### 什么是敏捷开发，为什么它很重要？

敏捷开发是一种以**协作、迭代和增量**为特点的软件开发方法，注重**灵活性**、**客户满意度**和**快速交付**功能性软件。其重要性在于使团队能够灵活应对变化的需求，通过持续反馈提高产品质量，并通过分阶段发布来缩短上线时间。

在 [测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)领域，敏捷开发至关重要，因为它将测试融入到开发流程中，确保问题能够迅速被发现和解决。自动化测试在敏捷中扮演关键角色，提供**迅速反馈**，并支持**持续集成**和**部署**。敏捷团队的测试人员与开发人员和产品负责人密切合作，共同贡献于用户故事，并确保满足验收标准。[敏捷测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/agile-testing.md)的核心思想是从发现[缺陷](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bug.md)转向预防缺陷，与敏捷强调**质量**和**可持续性**的理念一致。

在敏捷环境中，[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)工程师需要善于设计、实施和维护**可靠**、**可维护**且提供**快速反馈**的自动化测试。他们通常采用**[测试驱动开发](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-driven-development.md)（TDD）**和**行为驱动开发（[BDD](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/B/bdd.md)）**等方法，确保测试是从用户角度出发的，并且能够引导开发过程。

敏捷开发在 [测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)中的重要性不可低估，因为它使团队能够在现代软件交付的快节奏环境中保持高质量。

#### 敏捷开发的主要原则是什么？

敏捷开发的核心是敏捷宣言中概述的**四个关键原则**：

1. **个体与交互**优先于流程和工具：敏捷强调直接沟通和协作，更看重团队对变化的响应能力，而非严格遵循繁琐的流程。

2. **可工作的软件**优先于详尽的文档：敏捷专注于频繁交付功能性软件，对详尽文档的侧重较少。这并不意味着文档不重要，而是强调主要的进展衡量标准是交付可工作的软件。

3. **与客户的协作**优先于合同谈判：敏捷鼓励与客户或利益相关者持续互动。与其仅仅依赖合同规定，敏捷团队与客户密切合作，确保产品能够根据他们的需求和反馈不断演进。

4. **响应变化**优先于遵循计划：敏捷团队灵活适应变化的需求，即使在开发过程的后期。这种适应能力被认为比严格遵循计划更有价值。

这些原则指导着敏捷团队的日常工作和决策过程，确保适应性、客户满意度和有效沟通一直是开发工作的核心。作为经验丰富的 [测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)工程师，将这些原则融入到你的测试策略中将使你的工作与敏捷开发的整体目标保持一致，促进一个欢迎变化并专注于交付高质量、功能性软件的协作环境。

#### 敏捷开发与传统软件开发方法有何不同？

敏捷开发注重**迭代进展**、**协作**和**灵活性**，与传统的软件开发方法有着明显的区别。传统方法通常依赖**顺序进行**的各个阶段和**严格的计划**。例如，在瀑布模型中，必须在进入下一阶段之前完成每个阶段的工作，形成线性和有序的过程。

相反，敏捷开发将产品划分为小的、可操作的增量，允许**频繁地评估**和**调整计划**。这种迭代的循环使得每次发布都能向客户提供**持续的价值**，而不是等到最终产品完全完成。敏捷开发还鼓励**直接的沟通**而非过度的文档，**与客户的协作**而非依赖合同，以及**灵活地应对变化**而非严格遵循既定计划。

在实践中，敏捷团队采用称为 sprint 或 [迭代](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/iteration.md)的**短周期**进行工作，通常持续几周，以构建和交付功能性的产品增量。团队会定期举行各种会议，例如每日站会、冲刺计划和回顾会议，以确保工作同步进行并反思改进之处。测试从一开始就得到整合，通过**持续的反馈循环**来确保质量和相关性。

敏捷开发的适应性使其特别适用于**需求不确定或经常变化**的项目，而传统的开发方法可能在需求已经充分理解且相对稳定时更为有效。敏捷开发通过关注**客户满意度**和**团队协作**通常能够产生更高质量的产品并实现更有效的开发流程。

### 敏捷方法论

#### 有哪些常见的敏捷方法，它们有何不同？

除了已经提到的**[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)**和**Kanban**，还有其他一些常见的敏捷方法：

- **[极限编程](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/extreme-programming.md) (XP):** 专注于技术实践，如**[测试驱动开发](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-driven-development.md) (TDD)**、**重构**和**持续集成**。XP 强调客户满意度和迭代开发。它鼓励在短时间内频繁发布，从而提高了生产效率，并引入了检查点，可以在其中采纳新的客户需求。

- **特征驱动开发 (FDD):** 该方法以设计和构建功能为中心。与[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)不同，FDD 是模型驱动的，并有特定的角色，如类拥有权和特征团队。它涉及创建总体模型，构建功能列表，然后通过功能进行规划、设计和构建。

- **精益软件开发：** 受到精益制造实践的启发，Lean 注重通过消除浪费（任何对客户没有附加值的事物）向客户提供价值。它强调通过优化工作流程和管理工作量，通过减少批处理大小来实现快速交付。

- **动态系统开发方法 (DSDM):** 该方法侧重于项目，并强调整个项目生命周期。DSDM 整合了项目管理和产品开发的最佳实践。其特点包括用户参与、团队有权做决定、频繁交付产品以及以交付的业务目的为主要标准。

- **水晶：** 这是一系列敏捷方法，注重人和他们的互动，而非过程和工具。水晶方法根据项目的不同

大小和关键性定制，强调频繁交付、反思改进和紧密沟通。

每种方法都有其独特的实践和差异，但共享敏捷原则，包括协作、迭代开发和灵活适应变化。

#### 什么是 Scrum，它与敏捷开发有什么关系？

[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)是敏捷方法中的一个**框架**，用于管理和完成复杂项目，包括软件[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)。它强调**迭代进展**、**团队协作**和**适应变化**。

在[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)中，工作被分成**冲刺**，通常持续一到四周，期间从产品积压中选择特定的项目进行开发和测试。每个冲刺开始时都有一个**冲刺计划**会议，用于确定要完成的工作。**每日[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)**或站立会是一个简短的、时间固定的会议，用于同步团队活动并制定下一天的计划。

**[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md) Master**推动整个过程，确保团队遵循[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)实践并解决障碍。**产品负责人**管理产品积压并确保团队提供价值。

在每个冲刺结束时，团队进行**冲刺回顾**，向利益相关者展示完成的工作，并进行**冲刺反思**，以反思冲刺并进行流程改进。

[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)在[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)中的重要性在于其适应性和对**持续反馈**的强调。[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)工程师在[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)框架内工作，与冲刺目标保持一致，开发、执行和完善自动化测试，确保测试与开发同步，为交付高质量软件做出贡献。

#### 什么是 Kanban，它如何用于敏捷开发？

Kanban 是一种视觉化的工作流程管理方法，能够帮助团队优化工作流程。在**敏捷开发**中，Kanban 通过提供清晰的工作项可视化和其状态的 Kanban 板来辅助团队。这个板被划分为不同开发阶段的列，比如“待办”，“进行中”和“完成”。

工作项通常以卡片的形式从左到右移动穿过板，使团队能够跟踪进度并识别瓶颈。Kanban 强调**限制在制品**（WIP），这鼓励专注并减少多任务。通过为每个阶段设置 WIP 限制，团队可以平衡需求与吞吐量，提高工作流程。

Kanban 通过促进持续改进、灵活性和客户关注来与敏捷原则保持一致。与 [Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)的不同之处在于它不规定有时间框限制的[迭代](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/iteration.md)；相反，它关注周期时间和吞吐量。团队在完成当前任务后即拉取新工作，使 Kanban 成为一种更加流畅和连续的方法。

在[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)中，Kanban 在管理[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)的开发、执行和维护流程中特别有用。它允许根据反馈和变化的优先级快速调整，确保测试工作始终与项目最新需求保持一致。

以下是 Markdown 中简单 Kanban 板布局的示例：

```markdown
To Do | In Progress | Done
------|-------------|-----
Task1 | Task2       | Task3
Task4 |             | Task5
```

通过可视化测试活动，团队可以更有效地沟通并实时调整他们的测试策略，从而增强开发过程的整体敏捷性。

### 角色和责任

#### 敏捷团队中的角色是什么以及他们的职责是什么？

在**敏捷团队**中，角色通常不像传统方法那样刻板，但关键职位包括：

- **开发团队**：负责在每个[迭代](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/iteration.md)结束时交付可能可交付的产品增量。他们紧密合作，通常具有跨职能的技能，以确保产品按照用户需求发展。

- **业务分析师 (BA)**：充当利益相关者和开发团队之间的桥梁。他们帮助将业务需求转化为用户故事和验收标准，确保团队理解业务背景。

- **UX/UI 设计师**：专注于用户体验和界面设计。他们确保产品不仅功能强大，而且直观易用。

- **[质量保证](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/Q/quality-assurance.md) (QA) 工程师**：与开发人员一起工作，创建[测试计划](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-plan.md)，编写自动化测试，并通过各种测试方法确保产品质量。

- **DevOps 工程师**：促进持续集成和部署 (CI/CD) 实践，维护支持[自动化测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/automated-testing.md)和高效发布管理的工具和基础架构。

- **技术领导/架构师**：提供技术方向，确保架构支持产品的需求。他们在技术决策和编码标准方面指导团队。

每个角色都密切合作，通常兼具多重角色，以支持敏捷的迭代开发和持续反馈的过程。重点是**团队合作、适应性**和**致力于为客户提供价值**。

#### Scrum Master 在敏捷开发中的角色是什么？

**[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md) Master** 在敏捷[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)团队中充当促进者和教练的角色，专注于使团队能够以最高效的方式工作。他们的责任是确保团队遵循[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md)的实践和原则。为实现这一目标，[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md) Master 会通过以下方式进行：

- **排除障碍**：他们积极识别和消除可能妨碍团队进展的问题。
- **促进会议**：这包括每日站会、冲刺计划、冲刺回顾和回顾等会议。
- **保护团队**：他们保护团队，使其免受外部打扰和干扰，以确保专注于手头的任务。
- **指导团队**：Scrum Master 帮助团队改进其工作流程，使其能够更有效地协同工作。
- **确保协作**：他们鼓励团队内部以及与外部利益相关者之间的沟通和协作。
- **支持产品负责人**：他们协助维护产品待办事项，并确保为下一个冲刺做好准备。
- **促进持续改进**：Scrum Master 培养一种学习和适应的文化，鼓励团队对其实践进行反思并不断改进。

总的来说，[Scrum](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/scrum.md) Master 是一位服务型领导者，致力于支持团队遵循敏捷框架，优化其工作流程，并交付高质量的产品。

#### 产品负责人在敏捷开发中的角色是什么？

在敏捷开发中，**产品负责人（PO）**是代表业务或用户社区的关键利益相关者。PO 负责**定义和优先安排产品待办事项**，确保团队致力于完成对业务价值最大的任务。

产品负责人的角色包括：

- **阐明产品愿景**，并确保团队理解长期目标。
- **创建和维护产品待办事项**，包括编写用户故事和验收标准，并根据优先级排序项目。
- **基于利益相关者和客户的反馈做出决策**，关于产品的功能和特性。
- **与开发团队合作**，澄清需求并接受或拒绝工作成果。
- **参与敏捷仪式**，如冲刺计划、回顾和回顾，提供反馈和指导。
- **与利益相关者沟通**，管理期望并汇报产品进展。

对于 [测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)工程师而言，产品负责人是理解自动化功能背后业务背景的关键资源，也是澄清需求中的任何模糊之处的重要角色。PO 对待办事项的优先级排序也影响[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)策略，因为测试应与最关键和最高[优先级](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/priority.md)的功能保持一致。

### 敏捷实践

#### 什么是结对编程以及它如何融入敏捷开发？

**配对编程**是一种**敏捷软件开发技术**，两名程序员在一个工作站上共同工作。一名是**驱动者**，负责编写代码，而另一名是**观察者**或**导航者**，在代码键入时审查每一行。两名程序员经常交换角色。

在**敏捷开发**的背景下，配对编程融入了**协作**和**持续反馈**的敏捷原则。它鼓励实时的代码审查和知识分享，可以提高代码质量和团队成员的技能水平。这种做法与敏捷对**团队合作**、**沟通**和**迭代进展**的强调相一致。

配对编程还有助于**集体代码拥有权**和**可持续的工作节奏**，这在敏捷环境中非常关键。通过成对工作，团队成员可以避免专业知识的孤立，确保关于系统不同部分的知识分布在整个团队中。

对于 [测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)工程师而言，当创建或完善自动化[测试套件](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-suite.md)时，配对编程可能特别有益。它允许对[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)和脚本进行即时反馈，确保它们是健壮的、可理解的和可维护的。在[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)中的配对编程可以导致更可靠、更有效的测试流程，这对于敏捷方法论中通常包含的**持续集成**和**持续交付**实践至关重要。

总之，配对编程通过促进协作、提高代码质量和分享知识，增强了敏捷开发，这对于快速而灵活的软件开发是至关重要的。

#### 什么是测试驱动开发以及它如何在敏捷中使用？

[测试驱动开发](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-driven-development.md)（TDD）是一种**软件开发实践**，其中编写[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)发生在实际代码之前。在敏捷环境中，TDD 支持**迭代开发**和**快速反馈循环**。

以下是 TDD 在敏捷中的典型用法：

1. **编写一个失败的测试**：从一个尚不存在的新功能或特性的测试开始。由于代码尚未实现，此测试应该失败。

2. **编写最简单的代码**：编写使测试通过所需的最少量代码。

3. **重构**：清理新代码，确保其与现有代码库良好配合。[测试套件](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-suite.md)确保重构不会破坏任何东西。

4. **重复**：继续下一个测试。

在敏捷中，TDD 确保**代码质量**得以保持，**回归**被最小化，并且代码库保持对变更的**灵活性**。它与敏捷强调通过**连续交付**有价值的软件来实现**可持续开发**和**客户满意度**的目标一致。在敏捷团队中，[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)工程师利用 TDD 创建了一套健壮的自动化测试，随着代码库的演变而不断更新，为频繁发布和重构提供信心。

#### 什么是持续集成以及它如何融入敏捷开发？

**持续集成**（Continuous Integration，CI）是一种**开发实践**，其核心是开发人员频繁地将代码更改合并到共享存储库中，通常一天多次。每次集成都会通过自动构建和[测试过程](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-process.md)自动验证，使团队能够及早发现问题。

在**敏捷开发**的背景下，持续集成支持**快速反馈**和**持续改进**的原则。敏捷团队追求**增量开发**，定期交付小块功能。持续集成完美地融入这个模型，确保新的代码贡献不会破坏现有功能，从而保持一个随时可以发布的稳定代码库。

对于 [测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)工程师，持续集成至关重要，因为它提供了在集成过程中运行自动化测试的框架。这意味着每次代码提交都会触发一个包括单元测试、集成测试，甚至可能是验收测试的自动化[测试套件](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-suite.md)。这些测试的即时反馈使开发人员能够迅速解决问题，通常在编写代码的几分钟内完成，这符合敏捷对**适应性**和**客户满意度**的强调。

这里是使用 Jenkins 的一个基本 CI 流水线脚本的示例：

```shell
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Commands to build the application
                sh 'make'
            }
        }
        stage('Test') {
            steps {
                // Commands to run automated tests
                sh 'make test'
            }
        }
    }
    post {
        always {
            // Actions to take after the pipeline runs, like notifications
            mail to: 'team@example.com', subject: 'Build Finished'
        }
    }
}
```

通过定期集成，敏捷团队可以最小化在等待发布日期合并特性分支时经常发生的集成问题，从而保持一个**高质量的产品**。

### 敏捷和软件测试

#### 测试如何融入敏捷开发？

在敏捷开发中，测试是一个不可或缺且持续的过程，与敏捷的迭代性质相一致。它强调**早期**和**频繁**的测试，确保质量从一开始就内建于产品中，而不是在最后进行检查。

[敏捷测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/agile-testing.md)涉及整个团队，包括开发人员、测试人员和业务利益相关者的密切协作。测试人员从项目开始就参与其中，参与需求讨论和设计会议，以了解用户故事和验收标准。这种早期的参与有助于创建**相关且全面的[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)**。

**自动化**在[敏捷测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/agile-testing.md)中起着至关重要的作用。自动化测试不仅针对新功能进行创建，还用于[回归测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/R/regression-testing.md)。这些自动化测试通常作为**持续集成（CI）**流水线的一部分频繁运行，为应用程序的健康状况提供快速反馈。

**[测试驱动开发](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-driven-development.md)（TDD）**是一个常见的实践，其中在编写代码之前编写测试。这确保了在开发的每个步骤中都考虑到了测试，并且在被视为完成之前，代码就满足了预定义的标准。

在敏捷中，测试不是一个阶段，而是一个与开发平行的活动。随着功能的完成，它们会进行测试，并立即解决任何问题，从而降低了累积缺陷和技术债务的风险。

[敏捷测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/agile-testing.md)是一种**协作的、持续的、自适应的**过程，强调自动化以支持敏捷开发的快速节奏。

#### 测试人员在敏捷团队中的角色是什么？

在**敏捷团队**中，测试人员的角色是多方面的，围绕着**协作**、**反馈**和**持续改进**展开。测试人员直接与开发人员、产品负责人和其他利益相关者互动，以确保对产品及其需求有共享的理解。他们参与以下活动：

- **用户故事细化**：提供对验收标准的意见，并确保它们可以进行测试。
- **规划**：估算测试工作量并为冲刺计划做出贡献。
- **设计和执行**：创建并执行测试用例，包括手动和自动化测试，以验证用户故事。
- **自动化**：开发和维护自动化测试套件，通常使用 Selenium 或 Cypress 等工具。
- **持续测试**：实施持续测试实践，以迅速提供有关应用程序健康状况的反馈。
- **[探索性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md)**：执行非脚本化的测试，揭示结构化测试可能无法揭示的问题。
- **[缺陷管理](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/D/defect-management.md)**：识别、记录和追踪缺陷直至解决。
- **协作**：与开发团队密切合作，确保质量从一开始就内嵌于产品中。
- **反馈**：在迭代中对新功能和错误修复提供快速反馈。
- **回顾**：参与回顾会议，讨论做得好的地方、做得不好的地方以及如何改进流程。

在敏捷团队中，测试人员是积极主动的，不断适应变化，并专注于在短[迭代](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/iteration.md)中交付高质量的软件。他们在通过质量视角推动开发过程中扮演着至关重要的角色。

#### 什么是敏捷测试以及它与传统测试方法有何不同？

[敏捷测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/agile-testing.md)是一种与敏捷软件开发原则一致的迭代方法。它强调**持续反馈**、**团队协作**和**灵活性**，以适应变化。与传统方法不同，传统方法中测试是在开发之后的一个独立阶段，而[敏捷测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/agile-testing.md)则被整合到了开发周期中。

主要区别包括：

- **持续测试**：在敏捷中，测试是持续的，从第一天开始，每个迭代都会重复进行，确保对最新更改的即时反馈。
- **协作方法**：测试人员与开发人员、产品所有者和其他团队成员密切合作，促进对质量的共同责任。
- **适应性**：敏捷测试迅速适应需求或范围的变化，无需进行大量测试计划修订。
- **用户故事验证**：测试通常基于用户故事，确保软件满足实际用户需求。
- **自动化**：敏捷团队在很大程度上依赖于**[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)**，以保持迭代开发的节奏，通常实施持续集成（CI）以频繁验证代码更改。

在敏捷中，测试人员的角色不仅仅是发现缺陷，更是通过提供用户故事验收标准的输入、完善[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)和从开发周期的开始改进产品的整体质量，以防止缺陷的发生。[敏捷测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/agile-testing.md)不太关注遵循预定的[测试计划](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-plan.md)，而更关注根据团队和产品的独特需求演进测试实践。

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
