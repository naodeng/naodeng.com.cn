---
author: "nao.deng"
title: "软件测试术语分享:API Testing API 测试"
date: "2024-03-02T17:56:44+08:00"
summary: "这篇博文是软件测试术语分享系列的一部分，重点关注 API Testing（API 测试）。文章深入探讨了 API 测试的基础概念和其在软件开发中的重要性，包括 API 测试的不同类型，常用的 API 测试工具，以及 API 测试的流程。读者将学到如何有效地进行 API 测试，确保 API 的稳定性和可靠性。此外，博文还深入了解 API 测试的深层理解，以便读者能更全面地应对复杂的 API 测试场景，提高测试的质量。"
ZHtags: ["API Testing","API 测试"]
ZHcategories: ["测试类型"]
ZHseries: ["软件测试术语分享"]
ShowWordCount: true
---

## API Testing API 测试

API 测试旨在验证和确认 API 在性能、功能、可靠性和安全性方面的表现。测试流程包括向 API 发送请求并分析其响应，以确保其符合预期结果。这项测试可以手动完成，也可以借助自动化工具，有助于发现诸如无效输入、错误处理不当和未经授权访问等问题。

相关术语：

- [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)
- [Microservices Testing  微服务测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/M/microservices-testing.md)
- [Postman](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/postman.md)
- [Swagger](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/swagger.md)

## 关于 API 测试的问题

### 基础知识和重要性

#### 什么是 API 测试？

API 测试 是一种 [软件测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/software-testing.md) 类型，旨在验证和确认应用程序编程接口 ([APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)) 及其与其他软件组件的交互。该测试专注于软件架构的业务逻辑层，确保 [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 正常运作，数据准确交换，并在各种条件下保持服务的可靠性和性能。

在没有用户界面的消息层进行测试，使用工具发送调用到 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)，获取输出并记录系统的响应。输入可以采用 REST、SOAP 或其他 Web 服务调用的形式，而输出通常采用 HTTP 状态码、JSON、XML 或其他数据格式。

[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 测试的自动化是为了提高效率，包括以下方面：

- **[功能测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/F/functional-testing.md)**：确保 API 的行为符合预期。
- **[可靠性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/R/reliability-testing.md)**：检查 API 连接的能力以及导致一致结果的能力。
- **[性能测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/performance-testing.md)**：评估 API 的响应时间和吞吐量。
- **[安全测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/security-testing.md)**：识别 API 中的漏洞。

API 测试 对于验证依赖于多个相互连接的 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 服务的应用程序的核心功能至关重要。它允许早期发现问题，并有助于保持高水平的服务质量。测试用例是基于 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 的规格设计的，而断言用于验证响应是否符合预期结果。

#### 为什么 API 测试很重要？

API 测试 的重要性在于它直接审视软件架构的**业务逻辑**层，提供**早期检测**缺陷和**安全漏洞**的机会。它允许在没有用户界面的情况下测试各种软件组件之间的**交互**以及与**外部系统**的互动，从而实现**更快的 [测试执行](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-execution.md)** 和**更全面的 [测试覆盖率](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-coverage.md)**，因为可以对 [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 进行独立测试。

此外，API 测试 对于**现代开发实践**，如**DevOps**和**微服务**至关重要，这些服务经常更新和部署。它确保在这些服务集成到应用程序之前，它们能够**有效通信**并**按预期工作**，从而降低集成问题的风险。

API 测试 还支持**自动化**，这对于**持续测试**和**持续交付**至关重要。自动化 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 测试可以迅速而频繁地运行，为开发团队提供**即时反馈**。这在**[回归测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/R/regression-testing.md)**方面尤为重要，确保新的更改不会破坏现有功能。

此外，API 测试 对于**性能优化**至关重要，因为它有助于在服务级别识别瓶颈和性能问题。它还在**契约测试**方面发挥着重要作用，确保 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 符合与其他服务或客户定义的期望和协议。

总之，API 测试 是**坚实的 [软件测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/software-testing.md) 策略**的基础要素，确保在软件交互的最关键层面上系统可靠性、性能和安全性。

#### API 测试有什么好处？

API 测试 提供了多个有助于提高软件系统质量和可靠性的优点：

- **早期问题检测**：通过直接测试逻辑层，可以在开发周期的早期阶段识别问题，从而节省时间和资源。
- **语言无关性**：可以测试 API，而不受构建应用程序时使用的语言的限制，实现更灵活的测试环境。
- **无 GUI 测试**：可以在无需用户界面的情况下测试核心功能，尤其在 UI 尚未开发或正在变更时特别有益。
- **改进的 [测试覆盖率](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-coverage.md)**：可以涵盖更多条件和情况，包括那些通过 UI 测试难以模拟的情况。
- **更快的 [测试执行](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-execution.md)**：API 测试通常比基于 UI 的测试更快，导致更快的反馈和更高效的开发周期。
- **稳定性**：与 UI 测试相比，它们更不容易受到变更的影响，形成一个更稳定且需要更少维护的测试套件。
- **[集成测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/integration-testing.md)**：API 测试可以作为集成测试的基础，确保应用程序的不同部分能够正确交互。
- **安全性**：它允许测试人员评估应用程序的安全方面，如访问控制、身份验证和数据加密。
- **性能基准测试**：可用于评估应用程序在负载下的性能和行为，有助于识别瓶颈并优化吞吐量和响应时间。
- **自动化**：API 测试可以轻松自动化，集成到 CI/CD 流水线中，并在不同环境中执行，为系统健康提供持续反馈。

#### API 测试和单元测试有什么区别？

API 测试 和 [单元测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/unit-testing.md) 是具有不同范围和目标的独立测试方法。

**[单元测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/unit-testing.md)** 专注于软件的最小部分，通常是类内的个别函数或方法。这是由开发人员执行的，目的是确保软件的每个单元都按设计执行。单元测试通过隔离依赖项，通常使用模拟或存根来模拟其他模块。

**API 测试** 则涉及测试应用程序编程接口 ([APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md))，以验证其是否符合功能、可靠性、性能和安全性的期望。它在比 [单元测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/unit-testing.md) 更高的层次上运作，通常不关心系统内部的工作，而是专注于软件架构的业务逻辑层。

[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 测试通过 HTTP 请求和响应与应用程序进行交互，验证集成各种软件模块的逻辑。与单元测试不同，[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 测试可能没有那么精细，并且通常需要运行环境来与 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 交互。

虽然 **[单元测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/unit-testing.md)** 确保各个组件在孤立环境中正常工作，**API 测试** 则验证系统的外部接口是否正确运作，有可能发现由于与其他系统组件集成而被单元测试忽略的问题。

#### API 测试在集成测试中的作用是什么？

API 测试 在 [集成测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/integration-testing.md) 中发挥着至关重要的作用，通过确保不同软件模块通过 [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 进行交互时能够按预期通信和协同工作。在 [集成测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/integration-testing.md) 中，API 测试 专注于验证 [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 与系统其他组件集成时的端到端功能、可靠性、性能和安全性。

在 [集成测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/integration-testing.md) 过程中，测试人员使用 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 调用来验证各种软件层和外部系统之间的交互。这包括检查在相互连接的模块之间发生的数据流、错误处理和业务逻辑。API 测试 在这个阶段有助于识别在 [单元测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/unit-testing.md) 中可能不会显露的问题，例如数据交换格式的不一致、身份验证问题以及处理并发进程失败的问题。

通过在 [集成测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/integration-testing.md) 中自动化 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 测试，工程师可以快速检测集成缺陷，并确保系统作为整体无缝运行。这在代码变更频繁集成和测试的持续集成环境中尤为重要。

总之，在 [集成测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/integration-testing.md) 中，API 测试 对以下方面至关重要：

- **验证**不同系统组件之间的**交互**。
- **确保数据一致性**和正确的数据交换。
- **检测接口缺陷**，这在单元测试中可能会被忽略。
- **验证贯穿多个模块的业务逻辑**。
- 通过自动化 [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md) 促进在 CI/CD 流水线中进行持续测试。  

### API 测试类型

#### API 测试有哪些不同类型？

不同类型的 API 测试 专注于 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 的功能、可靠性、性能和安全性的各个方面。以下是一些关键类型：

- **[功能测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/F/functional-testing.md)**：验证 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 是否按预期功能，处理请求并返回正确的响应。

- **[验证测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/V/validation-testing.md)**：确保 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 符合规范和要求，包括数据验证和架构遵从性。

- **错误检测**：识别错误条件并检查 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 如何处理不正确的输入或意外的用户行为。

- **[UI 测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/ui-testing.md)**：对于带有用户界面组件的 [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)，从用户的角度测试集成和功能。

- **[安全性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/security-testing.md)**：评估 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 的漏洞，确保数据得到正确加密、身份验证和授权。

- **[性能测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/performance-testing.md)**：衡量 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 在各种负载条件下的响应性、吞吐量和稳定性。

- **[模糊测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/F/fuzz-testing.md)**：向 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 发送随机、畸形或意外的数据，以检查是否存在崩溃、故障或安全漏洞。

- **互操作性和 WS 合规性测试**：对于 SOAP [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)，确保 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 符合 WS-* 标准并可以与其他符合 WS 标准的系统互操作。

- **运行时/错误检测**：在执行过程中监视 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)，以检测在正常操作期间发生的运行时问题和错误。

- **[渗透测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/penetration-testing.md)**：模拟攻击以识别 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 中的安全弱点。

- **合规性测试**：验证 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 是否符合法规标准和合规性要求。

每种类型都针对 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 的不同方面和层次，确保全面的测试策略覆盖 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 的功能和潜在问题的全部范围。  

#### REST 和 SOAP API 在测试方面有什么区别？

在测试 **REST**（表征状态转移）和 **SOAP**（简单对象访问协议）[APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 时，关键的区别在于所使用的 **协议**、**数据格式**、**复杂性** 和测试方法。

**REST [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)**：

- 明确使用 **HTTP** 方法（GET、POST、PUT、DELETE）。
- 支持多种数据格式，通常是 **JSON** 和 **XML**。
- 是无状态的；客户端到服务器的每个请求必须包含理解请求所需的所有信息。
- 测试涉及使用正确的参数和方法构造请求，并验证响应代码、标头和主体。诸如 Postman 的工具可用于模拟 API 调用并自动化测试。

**SOAP [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)**：

- 使用 **SOAP 协议**，这是一组更为严格的消息模式。
- 主要使用 **XML** 作为消息格式。
- 可以是有状态的；服务器可以在多个请求之间保持会话状态。
- 测试需要分析 **WSDL**（Web 服务描述语言）文件以了解可用的操作。必须根据特定的 SOAP 包结构和其中包含的数据进行断言。诸如 SoapUI 的工具专为此目的而设计。

在测试方面，由于其使用标准 HTTP 和 JSON，通常认为 REST API 测试 更为 **灵活** 和 **易于实施**，而 SOAP 则需要更多关于协议和服务 WSDL 的 **详细知识**。此外，REST 测试可能更加 **轻量级**，因为它不需要像 SOAP 那样进行广泛的 XML 解析和验证。然而，SOAP 的严格规范对于测试可能是有益的，因为它强制执行必须遵守的契约，从而可能减少 [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md) 中的歧义。  

#### API 测试中什么是 CRUD 测试？

在 API 测试 中，CRUD 测试侧重于验证对于 RESTful [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 功能至关重要的 **Create**（创建）、**Read**（读取）、**Update**（更新）和 **Delete**（删除）操作。每个操作对应一个 HTTP 方法：创建使用 POST，读取使用 GET，更新使用 PUT/PATCH，删除使用 DELETE。

在 CRUD 测试期间，您需要确保：

- **POST** 请求成功创建新资源，并返回适当的状态码（例如 `201 Created`），以及资源的表示或位置。
- **GET** 请求准确检索数据，支持查询和路径参数，并且在处理不存在的资源时能够优雅地处理（例如 `404 Not Found`）。
- **PUT** 或 **PATCH** 请求正确修改现有资源，适当时遵循幂等性，并提供正确的响应代码（例如 `200 OK` 或 `204 No Content`）。
- **DELETE** 请求按预期删除资源，并返回正确的状态码（例如 `200 OK` 或 `204 No Content`）。

CRUD 测试确保 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 遵循其规范并正确处理数据操作场景。这对于在应用程序内部保持数据完整性和一致性至关重要。[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md) 应该涵盖典型的 [用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/U/use-case.md) 和边缘情况，例如尝试删除不存在的资源或使用无效数据更新资源。

#### API 测试中的负载测试是什么？

API 测试 中的 [负载测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/L/load-testing.md) 涉及模拟对 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 终端点的大量请求，以评估系统在压力下的性能。这种类型的测试对于确定 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 的 **可扩展性** 和 **可靠性** 至关重要，因为它有助于在 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 面临大量流量时识别瓶颈和潜在的故障点。

在 [负载测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/L/load-testing.md) 期间，会测量各种指标，如 **响应时间**、**吞吐量**、**错误率** 和 **资源利用率**，以评估 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 的性能。其目标是确保 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 能够在维持可接受性能水平的同时处理预期的负载条件。

诸如 **[JMeter](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/J/jmeter.md)**、**Gatling** 和 **LoadRunner** 之类的工具通常用于自动化生成请求并收集性能数据的过程。这些工具允许测试人员通过调整并发用户数、请求频率和有效载荷大小来创建逼真的负载场景。

[负载测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/L/load-testing.md) 通常在尽可能模拟生产 [设置](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/setup.md) 的受控环境中进行。这确保测试结果是相关且可操作的。逐渐增加负载是很重要的，以了解性能如何随着施加的负载而变化。

通过早期识别性能限制，组织可以在对最终用户产生影响之前对其 [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 进行必要的优化，确保在高峰时期仍然能够提供流畅、高效的用户体验。  

#### API 测试中的安全测试是什么？

API 测试 中的安全测试专注于验证 [APIs](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 的机密性、完整性和可用性。其目标是发现可能导致未经授权访问、数据泄露或其他安全威胁的漏洞。关键方面包括：

- **身份验证**：确保只有经授权的用户可以访问 API。
- **授权**：确认用户对请求的操作具有权限。
- **输入验证**：检查 SQL 注入、XSS 和其他注入漏洞。
- **加密**：验证数据在传输和静态状态下是否加密。
- **错误处理**：确保敏感信息不会通过错误消息泄漏。
- **速率限制**：通过限制 API 请求速率来防止 DoS 攻击。

[安全测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/security-testing.md) 工具如 OWASP ZAP 或 Burp Suite 可以自动化漏洞扫描。将 [安全测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/security-testing.md) 集成到 CI/CD 流水线中以进行持续安全保障至关重要。

### API 测试工具

#### API 测试常用的工具有哪些？

常用于 API 测试 的工具包括：

- **[Bruno](https://naodeng.com.cn/zh/posts/api-automation-testing/introduction_of_bruno/)/[Postman](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/postman.md)**：一种广受欢迎的手动和自动化测试工具，提供用户友好的界面和脚本功能。
- **SoapUI**：专为 SOAP 和 REST API 测试设计的工具，提供丰富的测试功能。
- **Katalon Studio**：一款集成工具，支持 API 和 UI 测试自动化。
- **[JMeter](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/J/jmeter.md)**：一款主要用于性能测试的开源工具，同时也支持 API 测试。
- **Rest-Assured**：一个用于简化 RESTful API 测试的 Java DSL，在现有的基于 Java 的生态系统中能够无缝集成。
- **Insomnia**：一款功能强大的 REST 客户端，支持测试 API，包括 GraphQL 和 gRPC。
- **Curl**：用于通过 URL 传输数据的命令行工具，通常用于快速进行 API 交互。
- **Paw**：一款专为 macOS 设计的 API 工具，具有原生的 macOS 界面，提供了用于 API 开发和测试的高级功能。
- **Karate DSL**：一个开源工具，将 API 测试自动化、模拟、性能测试甚至 UI 自动化整合到一个统一的框架中。
- **Assertible**：专注于持续测试和可靠性的工具，提供自动化的 API 测试和监控。
- **HTTPie**：一款用户友好的命令行 HTTP 客户端，提供简单直观的方式进行 HTTP 请求，可用于 API 测试。

这些工具提供各种功能，包括测试脚本、响应验证和与 CI/CD 流水线的集成，以满足不同的测试需求和偏好。

#### Postman 用于 API 测试有哪些功能？

[Postman](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/postman.md) 是一款多功能的 API 测试 工具，具有简化 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 测试创建、执行和管理的功能：

- **易于使用的界面**：Postman 提供用户友好的图形界面，用于发送请求、保存环境和查看响应。
- **集合**：将相关的 API 请求分组到集合中，以便更好地组织和执行。
- **环境和全局变量**：存储和管理变量，方便在不同的测试环境之间切换。
- **预请求脚本和测试**：编写 JavaScript 代码，在发送请求之前或收到响应后执行，以设置条件或断言结果。
- **[自动化测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/automated-testing.md)**：使用集合运行器或 Newman（Postman 的命令行伴侣）运行集合，实现自动化测试执行。
- **数据驱动测试**：从外部文件中提取数据到请求中，以验证在不同条件下的 API 行为。
- **监控**：定期安排集合运行，监控 API 的性能和健康状况。
- **文档**：从集合自动生成并发布 API 文档。
- **版本控制**：将集合与 Postman 的云服务同步，实现协作和版本控制。
- **集成**：使用 Newman 或 Postman API 与 CI/CD 流水线连接，实现与开发工作流的无缝集成。
- **[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 模拟**：创建模拟服务器以模拟 API 端点，进行测试而无需实际的后端服务。
- **工作区**：在共享或个人工作区中与团队成员协作。

这些功能使 [Postman](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/postman.md) 成为一款全面的 API 测试 工具，既方便手动的 [探索性测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/E/exploratory-testing.md) 又支持自动化的 [测试执行](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-execution.md)。

#### SoapUI 与其他 API 测试工具有何不同？

SoapUI 与其他 API 测试工具的主要区别在于它主要专注于**SOAP（Simple Object Access Protocol）**服务，尽管它也支持 RESTful 服务和其他 Web 协议。它提供了一个专门用于 SOAP 特定验证的环境，例如 WS-Security、WS-Addressing 和 MTOM（Message Transmission Optimization Mechanism），这在其他更偏向 REST 的工具中较为罕见。

另一个不同之处是 SoapUI 对**数据驱动测试**的广泛支持。它允许测试人员轻松地从外部来源，如[数据库](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/wiki/database.md)和 Excel 文件，读取数据以创建动态请求并验证响应。这与其使用**Groovy 脚本编写复杂场景**的能力结合使用。

SoapUI 还提供了**模拟功能**，使用户能够在实际实施之前模拟 Web 服务的行为。这在**面向服务的体系结构（SOA）**中特别有用，因为服务是并行开发的。

对于[性能测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/performance-testing.md)，SoapUI 提供了**LoadUI**，这是一个集成工具，允许测试人员将功能[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)重复使用作为性能测试，这是不是所有 API 测试工具都提供的独特功能。

最后，SoapUI Pro，SoapUI 的商业版本，提供了高级功能，如**[SQL](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/sql.md)查询构建器**、**基于表单的输入**和**报告生成**，这提高了用户体验和生产力，使其从许多开源替代品中脱颖而出。

#### 使用自动化工具进行 API 测试有哪些优势？

使用自动化工具进行 API 测试 具有多重优势：

- **高效性**：自动化测试比手动测试运行速度更快，可以在更短时间内执行更多的测试。
- **一致性**：自动化确保每次以相同方式执行测试，减少人为错误，提高可靠性。
- **可重用性**：测试脚本可在不同 API 版本之间重复使用，省去为每个变更编写新测试的时间。
- **集成性**：自动化测试可轻松集成到 CI/CD 流水线中，实现持续测试和部署。
- **可扩展性**：自动化支持在各种条件和负载下运行测试，对性能测试至关重要。
- **覆盖面**：工具能生成并执行大量测试用例，提高测试的广度和深度。
- **[回归测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/R/regression-testing.md)**：可以迅速、频繁地运行自动化回归测试，确保新更改未破坏现有功能。
- **报告功能**：工具通常提供详细的日志和报告，有助于识别和解决问题。
- **并行执行**：测试可并行运行，减少测试执行时间。
- **程序控制**：测试用例可包含难以手动执行的复杂逻辑和场景。

通过充分发挥这些优势，[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md) 工程师能够确保更强大、可靠的 [API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)，同时优化测试工作和资源利用。

#### 选择 API 测试工具应该考虑哪些因素？

使用自动化工具进行 API 测试具有多重优势：

- **高效性**：自动化测试比手动测试更迅速，能够在更短的时间内完成更多测试。
- **一致性**：自动化确保每次测试都以相同方式执行，减少人为错误，提高可靠性。
- **可重用性**：测试脚本可以跨不同 API 版本重复使用，省去为每次变更编写新测试的时间。
- **集成性**：自动化测试可轻松集成到 CI/CD 流程中，实现持续测试和部署。
- **可扩展性**：自动化支持在不同条件和负载下运行测试，对性能测试至关重要。
- **覆盖全面**：工具能够生成并执行大量测试用例，提高测试的广度和深度。
- **[回归测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/R/regression-testing.md)**：自动化回归测试可以快速而频繁地运行，确保新更改没有破坏现有功能。
- **报告详尽**：工具通常提供详细的日志和报告，有助于快速识别和解决问题。
- **并行执行**：测试可以并行运行，缩短测试执行时间。
- **程序控制**：测试用例可以包含复杂的逻辑和场景，手动执行难以实现。

通过充分发挥这些优势，[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)工程师可以确保更为强大和可靠的[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)，同时优化测试工作和资源利用。

### API 测试流程

#### API 测试涉及哪些步骤？

进行 API 测试的步骤通常包括以下几个关键步骤：

1. **定义测试范围**：明确定义需要测试的端点和操作（GET、POST、PUT、DELETE）。

2. **了解[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)需求**：仔细研究[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)文档，了解所期望的请求格式、标头、负载和响应代码。

3. **设置测试环境**：配置必要的参数，如基本 URL、身份验证凭据以及任何需要的初始数据[设置](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/S/setup.md)。

4. **创建[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)**：制定各种[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)，涵盖功能、可靠性、性能和安全性。包括正面、负面和边缘案例。

5. **自动化[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)**：使用 API 测试工具编写脚本，发送请求并验证响应。运用断言检查正确的状态代码、响应时间和数据准确性。

6. **执行测试**：运行自动化[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)对[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)进行测试。这可以手动进行，也可以作为 CI/CD 管道的一部分。

7. **验证和记录结果**：分析测试结果是否存在任何差异。对于任何失败的测试，记录缺陷并详细记录发现。

8. **审查[测试覆盖率](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-coverage.md)**：确保测试覆盖了[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)的所有方面，并根据需要更新[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)以提高覆盖率。

9. **监控和维护**：持续监控[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)以寻找任何性能问题，并维护[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)以适应[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)的任何更改。

10. **报告**：生成[测试报告](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-report.md)，总结测试活动，包括通过/失败的测试数量和任何未覆盖的问题。

每个步骤都至关重要，以确保对[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)的功能、可靠性、性能和安全性进行全面评估。

#### 什么是 API 端点测试？

[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) 端点测试是验证客户端与[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)之间各个交互点的过程。其目的是确保**端点**对各种 HTTP 方法（如 GET、POST、PUT 和 DELETE）以及适当的输入参数能够正确响应。这种测试注重于以下几个方面：

- **请求和响应结构**：验证请求的格式是否正确，以及响应是否符合预期的模式。
- **数据验证**：确保发送到端点和从端点接收的数据是正确的，并符合规定的约束。
- **HTTP 状态码**：检查端点在不同情境下是否返回了正确的状态码。
- **错误处理**：确认端点能够提供有意义的错误消息，并且能够优雅地处理错误。
- **性能**：评估端点在负载下的响应时间以及其行为。

进行端点测试可以利用工具如[Postman](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/P/postman.md)，也可以通过编写脚本来实现，比如在 Python 中使用`requests`或在 JavaScript 中使用`axios`。下面是使用`axios`在 JavaScript 中进行简单 GET 请求测试的示例：

```JavaScript
const axios = require('axios');

axios.get('https://api.example.com/v1/users')
  .then(response => {
    if(response.status === 200) {
      console.log('Success: Endpoint returned 200 OK');
    } else {
      console.error('Error: Unexpected status code');
    }
  })
  .catch(error => {
    console.error('Error: Endpoint request failed');
  });
```

在这一背景下，端点测试是 API 测试的一个关键环节，重点关注[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)的外部接口的正确性和可靠性。

#### 如何验证 API 测试中的响应？

在进行 API 测试时，验证响应涉及多个检查，以确保[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)的行为符合预期。使用**断言**将实际响应与预期结果进行比较。主要的验证点包括：

- **状态码**：验证 HTTP 状态码（例如，200 OK，404 Not Found），以确认响应的成功或失败。
- **响应时间**：确保 API 在可接受的时间范围内响应，表示性能良好。
- **头部**：检查响应头部，确保内容类型、缓存策略和安全参数正确。
- **主体**：验证响应负载的正确数据结构、数据类型和数值。在适用时使用 JSON 或 XML 模式验证。
- **错误码**：对于错误响应，确保 API 返回适当的错误代码和消息。
- **业务逻辑**：确认响应是否遵循业务规则和工作流程。
- **数据完整性**：如果 API 与数据库交互，验证返回的数据是否与数据库状态一致。

以下是在 JavaScript 中使用 Chai 断言库的示例：

```JavaScript
const expect = require('chai').expect;
const request = require('supertest');
const api = request('http://api.example.com');

api.get('/users/1')
  .end((err, response) => {
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.have.property('username');
    expect(response.body.username).to.be.a('string');
    expect(response.headers['content-type']).to.equal('application/json');
  });
```

通过使用您选择的 API 测试工具自动化这些验证，确保测试过程中的一致性和效率。

#### API 测试中如何处理认证和授权？

在 API 测试中处理身份验证和授权涉及验证[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)是否正确识别用户（身份验证）并授予适当的访问级别（授权）。以下是处理方法：

- **了解身份验证机制**：常见的方法包括基本身份验证、OAuth、[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)密钥和 JWT（JSON Web Tokens）。确定[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)使用的方法。

- **获取有效凭据**：对于[自动化测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/automated-testing.md)，您需要一组有效的凭据或令牌。这可能涉及初步[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)调用以生成令牌，或者使用预先生成的长期有效令牌进行测试。

- **在[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)请求中包含凭据**：根据身份验证方法，这可能意味着在 HTTP 请求中添加标头、Cookie 或参数。例如，在基本身份验证中，您将添加包含经过 base64 编码的用户名和密码的`Authorization`标头。

```JavaScript
Authorization: Basic <base64-encoded-credentials>
```

- **使用无效/过期凭据进行测试**：确保当提供无效凭据或令牌过期时，[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)正确拒绝访问。

- **验证授权**：测试[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)是否通过尝试使用不同用户角色访问资源来执行正确的权限级别。确认每个角色只能访问其应有的资源。

- **自动化凭证管理**：在您的[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)框架中，实施一种自动处理令牌生成和更新的方式，特别是如果令牌具有短有效期。

- **安全存储凭据**：使用环境变量或安全保险库来存储和访问您[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)环境中的凭据，避免硬编码敏感信息。

- **检查响应代码和消息**：确保[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)对身份验证和授权方案返回适当的 HTTP 状态代码和消息，如`401 Unauthorized`或`403 Forbidden`。

#### 测试期间需要查找哪些常见 API 错误？

在测试[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)时，要留意以下常见错误：

- **400 Bad Request**：无效的请求格式；确保负载符合 API 规范。
- **401 Unauthorized**：缺少或不正确的身份验证凭据；验证令牌或用户凭据。
- **403 Forbidden**：已验证但缺少权限；检查用户权限。
- **404 Not Found**：端点或资源不存在；确认 URL 和资源标识符。
- **405 Method Not Allowed**：HTTP 方法不适用于端点；查阅 API 文档了解允许的方法。
- **408 Request Timeout**：服务器等待请求时超时；调查网络问题或增加超时设置。
- **429 Too Many Requests**：超过速率限制阈值；实施回退策略并遵守速率限制。
- **500 Internal Server Error**：通用的服务器端错误；检查服务器日志以查找未处理的异常或配置错误。
- **502 Bad Gateway**：上游服务器返回无效响应；确保所有后端服务都正常运行。
- **503 Service Unavailable**：服务不可用或过载；监控系统健康和负载。
- **504 Gateway Timeout**：上游服务器未能及时响应；类似于 408，但表示服务器之间通信存在问题。

对响应负载进行模式验证，检查数据一致性，并确保错误消息清晰而有帮助。使用自动化工具模拟各种场景和边缘情况。在评估错误响应时，要始终考虑[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)的上下文和业务逻辑。

### 深层理解

#### API 测试在持续集成/持续部署 (CI/CD) 中的作用是什么？

API 测试在持续集成/持续部署（CI/CD）流水线中发挥着至关重要的作用，通过确保应用程序编程接口（[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)）符合功能、可靠性、性能和安全标准。在 CI/CD 中，每次代码提交都会触发自动构建和[测试过程](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-process.md)，其中包括[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)测试，以验证不同软件组件之间的交互。

**在 CI/CD 中，API 测试：**

- **验证**新的代码更改是否未破坏现有的 API 功能。
- **实现**及早检测缺陷，降低修复所需的成本和工作量。
- **促进**在完整系统环境中集成服务之前，对 API 进行孤立测试。
- **支持**对 DevOps 实践至关重要的快速反馈循环，使开发人员能够立即了解其更改的影响。
- **自动化**API 的回归测试，确保增强或修复错误不会引入新问题。
- **协助**在每次部署时监控 API 的性能，保持应用程序的响应性和效率。
- **为安全保障**做出贡献，整合自动化安全测试，检查 API 中的漏洞。

通过将 API 测试集成到 CI/CD 流水线中，团队可以在保持高质量标准的同时加速软件更新的交付，从而实现在生产中更可靠和强大的应用程序。  

#### API 测试如何集成到敏捷方法中？

将 API 测试整合到**敏捷方法论**中需要确保测试活动与迭代式开发周期相协调。首先，在**用户故事**和**验收标准**中引入 API 测试，确保从一开始就考虑[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)功能。在**冲刺计划**期间，分配任务以创建和自动化[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md) [测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)，与冲刺的开发工作相协调。

利用**测试驱动开发（TDD）**，在实际编写[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)代码之前编写[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)测试，确保代码从一开始就符合测试要求。在**冲刺**中，将 API 测试作为**完成的定义**的一部分，确保在考虑功能完成之前对[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)进行了全面测试。

借助**持续集成（CI）**流水线，在代码提交时自动触发[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)测试，以确保变更的即时反馈。在**每日站会**中，讨论[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)测试的状态和结果，以保持团队的及时了解并及时解决问题。

整合**与敏捷项目管理工具良好集成的[测试自动化](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-automation.md)框架**，实现[测试用例](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/T/test-case.md)、用户故事和缺陷之间的可追溯性。应用**模拟和服务虚拟化**，独立于依赖项测试[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)，允许在隔离的环境中进行测试并与开发同时进行测试。

最后，倡导**协作文化**，鼓励开发人员、测试人员和产品负责人共同负责[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)质量，并促使通过 API 测试发现的问题迅速解决。

#### API 测试在微服务架构中的作用是什么？

在**微服务架构**中，API 测试发挥着至关重要的作用，确保每个服务能够有效地与其他服务通信，并确保整个系统按预期运行。由于微服务被设计为松散耦合且可以独立部署，因此 API 测试成为验证**服务间合同**和相互作用的关键要素。

在这一背景下，API 测试主要关注以下方面：

- **服务隔离**：在独立环境中测试各个微服务，确保它们正确执行其特定功能。
- **集成点**：验证服务通过它们的 API 与其他服务无缝交互，包括检查数据流、错误处理和备用机制。
- **端到端工作流**：确保微服务的综合操作符合整体业务需求。
- **版本管理**：检查 API 版本管理是否得当，以避免独立更新服务时出现破坏性变更。
- **服务发现**：确认服务能够在不断演化的生态系统中动态发现并相互通信。

通过在微服务架构中进行严格的 API 测试，团队能够早期发现问题，减少服务间的依赖关系，并保持高水平的服务自治性。这对于实现微服务所承诺的可扩展性、灵活性和弹性至关重要。此外，API 测试通过自动验证服务集成支持**CI/CD流水线**，这对于快速、可靠地交付基于微服务的应用程序至关重要。

#### API 测试中的契约测试是什么？

契约测试是 API 测试的一种类型，专注于验证不同服务之间的交互是否符合在“契约”中记录的共同理解。这个契约定义了消费者（例如客户端应用程序）和提供者（例如 Web 服务）之间期望的请求和响应。

在契约测试中，消费者和提供者的测试是根据已同意的契约编写的，这个契约充当单一真相来源。消费者测试验证客户端是否能够正确生成符合契约规范的请求。提供者测试确保服务能够处理这些请求并返回符合契约的响应。

契约测试的一个常用工具是**Pact**，它允许开发人员将契约定义为代码，并提供一个平台，用于在消费者和提供者之间共享这些契约。契约进行版本管理以安全管理更改。

契约测试的主要目标是在将服务部署到生产环境之前检测服务之间的任何不兼容性。这在微服务架构中尤为重要，因为服务是独立开发和独立部署的。

契约测试并不替代 API 测试的其他形式，而是通过专注于交互契约来补充它们，因为这可能是[集成测试](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/I/integration-testing.md)中的盲点。它提供了快速反馈，并确保应用程序的可独立部署单元将按照预期的方式一起工作。

#### API 测试如何帮助性能优化？

API 测试在性能优化方面发挥着重要作用，它允许工程师在服务层次上发现并解决**性能瓶颈**。通过对[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)端点执行性能测试，团队可以评估在不同负载条件下的响应时间、吞吐量和资源利用率，从而找出需要优化的地方。

例如，使用[JMeter](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/wiki/jmeter.md)或 LoadRunner 等工具，测试人员可以模拟高并发场景，了解[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)在压力下的表现。如果[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)表现出**长时间的响应**或**高错误率**，这表明需要进行性能调优。这可能包括优化[数据库](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/D/database.md)查询、缓存响应或扩展基础架构。

此外，[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)性能测试可以自动化，并纳入 CI/CD 流水线，确保在部署之前验证任何代码更改对性能的影响。这种积极的方法防止性能下降进入生产环境。

通过隔离[API](https://github.com/naodeng/QA-Glossary-Wiki/blob/main/Sections/A/api.md)层，工程师可以专注于优化服务级性能，而不必担心全面 UI 或端到端测试的复杂性。在**微服务架构**中，这尤其关键，因为必须确保各个服务以最佳性能运行，以保证整个系统的响应速度和可靠性。

总体而言，API 测试是性能优化的有力工具，为工程师提供了洞察服务级性能的机会，使其能够基于数据做出决策，从而提高应用程序的速度和可靠性。

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