+++
author = "nao.deng"
title = "Cypress UI 自动化测试框架学习（6）- 用例编辑和脚本录制工具 Cypress Studio 介绍"
date = "2022-05-13"
description = "文章介绍 UI 自动化测试框架学习（6）- 用例编辑和脚本录制工具 Cypress Studio 介绍"
tags = [
"自动化测试","cypress"
]
+++

Cypress Studio 提供了一种在测试运行程序中生成测试的可视化方法，通过记录与被测应用程序的交互。支持.click（）、.type（）、.check（）、.uncheck（）和.select（）Cypress 命令，这些命令将在与 Cypress Studio 内部的 DOM 交互时生成测试代码

通过阅读文章你会学到什么：

- 如何使用 Cypress Studio 以交互方式扩展测试

- 如何使用 Cypress Studio 以交互方式添加新测试

## 概述

_Cypress Studio 通过记录与_ 被测应用程序的交互，提供了一种在 Test Runner 中生成测试的可视化方式。

支持、`.click()`、`.type()`、和 Cypress 命令 `.check()` ，并在与 Cypress Studio 内部的 DOM 交互时生成测试代码。您还可以通过右键单击要断言的元素来生成断言。 `.uncheck()` `.select()`

## 使用 Cypress Studio

Cypress Studio 是一项实验性功能，可以通过将 experimentalStudio 属性添加到您的配置文件来启用（ `cypress.json` 默认情况下）。

```
{ "experimentalStudio": true}
```

Cypress Real World App (RWA) 是一个开源项目，它实现了一个支付应用程序，以展示 Cypress 测试方法、模式和工作流程的实际使用情况。下面将使用它来演示 Cypress Studio 的功能。

### 扩展测试

您可以扩展任何预先存在的测试，或者通过使用以下测试脚手架在您的 integrationFolder（默认情况下）中创建一个新测试来开始。

#### 第 1 步 - 运行用例

我们将使用 Cypress Studio 执行“新交易”用户流程。首先，启动 Test Runner 并运行在上一步中创建的用例。

[image:F5CF37A4-27C0-4A6A-82DA-52C19191EB41-665-000000B8AF4F75E1/640.jpeg]

#### 第 2 步 - 启动 Cypress Studio

测试完成运行后，将鼠标悬停在命令日志中的测试上以显示“Add commands to Test”按钮。

单击“Add Commands to Test”将启动 Cypress Studio。

Cypress Studio 直接与 命令日志集成。

[image:7C04963F-638B-492C-B6D1-0C2C6FD31021-665-000000B8AF4F2B69/_640.jpeg]

Cypress 将自动执行所有挂钩和当前存在的测试代码，然后可以从该点开始扩展测试（例如，我们登录到 `beforeEach` 块内的应用程序）。

接下来，Test Runner 将单独执行测试，并在测试中的最后一条命令后暂停。

[image:E57D4269-75B6-49C2-9EC7-CB2BA527070D-665-000000B8AF4ECFAF/__640.jpeg]

现在，我们可以开始更新测试以在用户之间创建新事务。

#### 第 3 步 - 与应用程序交互

要记录操作，请开始与应用程序交互。在这里，我们将单击标题右侧的“新建”按钮，结果我们将看到我们的单击记录在命令日志中。

[image:B55CC01A-E8EF-4B70-9687-CC8A6423AD9A-665-000000B8AF4E893E/___640.jpeg]

接下来，我们可以开始输入我们想要支付的用户名。

[image:F647E6CB-2456-4602-84CB-B37B2B313DCF-665-000000B8AF4E4B07/____640.jpeg]

一旦我们看到名字出现在结果中，我们想要添加一个断言来确保我们的搜索功能正常工作。右键单击用户名将弹出一个菜单，我们可以从中添加断言以检查元素是否包含正确的文本（用户名）。

[image:F347B11C-142A-4EFC-821F-9B3F36B68119-665-000000B8AF4E15D4/_____640.jpeg]
然后，我们可以单击该用户以进入下一个屏幕。我们将通过单击并输入金额和描述输入来完成交易表格。

[image:1A5CFBED-CD31-4912-90A1-960E05992DC7-665-000000B8AF4DE240/______640.jpeg]

注意命令日志中生成的命令。

现在是时候完成交易了。您可能已经注意到，在我们输入输入之前，“支付”按钮已被禁用。为了确保我们的表单验证正常工作，让我们添加一个断言以确保启用“支付”按钮。

[image:F3E5EBF7-FB37-4A50-AF65-607939F664F0-665-000000B8AF4DAF00/_______640.jpeg]

最后，我们将单击“支付”按钮，并显示我们新交易的确认页面。

[image:AFF8F1D8-4FDC-42DF-BEEA-EDB769B0588A-665-000000B8AF4D783F/________640.jpeg]

要放弃交互，请单击“取消”按钮退出 Cypress Studio。如果对与应用程序的交互感到满意，请单击“保存命令”，测试代码将保存到您的规范文件中。或者，您可以选择“复制”按钮以将生成的命令复制到剪贴板。

#### 生成的测试代码

查看我们的测试代码，我们可以看到在点击“Save Commands”后测试更新了我们在 Cypress Studio 中记录的操作。

### 添加新测试

您可以通过单击我们定义的块上的“Add New Test”来向任何现有 `describe` 或块添加新测试。 `context ` ` describe`

[image:0A8CA77E-9AEF-45B9-9B70-F15C01983DFF-665-000000B8AF4D4166/_________640.jpeg]

我们被启动到 Cypress Studio 并可以开始与我们的应用程序交互以生成测试。

对于此测试，我们将添加一个新的银行帐户。我们的互动如下：

1. 点击左侧导航中的“银行账户”

[image:02219635-D587-4A52-BD45-738DA52F08E2-665-000000B8AF4D0E28/__________640.jpeg]

2. 点击银行账户页面上的“创建”按钮

[image:42C66725-A8B3-4ED6-9472-C0A0FF5AB64A-665-000000B8AF4CD946/___________640.jpeg]

3. 填写银行账户信息

[image:2E4443DE-C9A6-4D7A-84BB-6E6A5AA3F476-665-000000B8AF4CA262/____________640.jpeg]

4. 点击“保存”按钮

[image:655AAC92-065E-438E-B62C-145A771AD889-665-000000B8AF4C6D6F/_____________640.jpeg]

要放弃交互，请单击“取消”按钮退出 Cypress Studio。

如果对与应用程序的交互感到满意，请单击“保存命令”，提示将询问测试名称。单击“保存测试”，测试将保存到文件中。

[image:A9CFD28A-A32C-42B5-97D7-7BD34A46D85F-665-000000B8AF4C390B/______________640.jpeg]

保存后，该文件将在 Cypress 中再次运行。

[image:560BE965-9C4C-4E9A-A17F-4992200B053B-665-000000B8AF4BF3D8/_______________640.jpeg]

最后，查看我们的测试代码，我们可以看到点击“Save Commands”后测试更新了我们在 Cypress Studio 中记录的操作。
