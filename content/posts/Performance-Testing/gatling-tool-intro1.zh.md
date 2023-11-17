---
author:  "nao.deng"
title:  "gatling 性能测试教程：入门介绍"
date:  "2023-10-24T17:44:53+08:00"
summary:  "文章介绍性能测试工具 gatling 的新手入门介绍，环境搭建，如何将官方 demo 跑起来"
ZHtags: [
"入门介绍","环境搭建"]
ZHcategories:  ["性能测试", "Gatling"]
ZHseries: ["Gatling 性能测试教程"]
ShowWordCount: true
---

## Gatling 介绍

Gatling 是一个用于性能测试和负载测试的开源工具，特别适用于测试 Web 应用程序。它是一个基于 Scala 编程语言的高性能工具，用于模拟并测量应用程序在不同负载下的性能。

以下是 Gatling 的一些重要特点和优势：

- 基于 Scala 编程语言：Gatling 的测试脚本使用 Scala 编写，这使得它具有强大的编程能力，允许用户编写复杂的测试场景和逻辑。
- 高性能：Gatling 被设计为高性能的负载测试工具。它使用了非阻塞的 I/O 和异步编程模型，能够模拟大量并发用户，从而更好地模拟真实世界中的负载情况。
- 易于学习和使用：尽管 Gatling 的测试脚本是使用 Scala 编写的，但它的 DSL（领域特定语言）非常简单，容易上手。即使你不熟悉 Scala，也可以快速学会如何创建测试脚本。
- 丰富的功能：Gatling 提供了丰富的功能，包括请求和响应处理、数据提取、条件断言、性能报告生成等。这些功能使你能够创建复杂的测试场景，并对应用程序的性能进行全面的评估。
- 多协议支持：除了 HTTP 和 HTTPS，Gatling 还支持其他协议，如 WebSocket，JMS，和 SMTP。这使得它适用于测试各种不同类型的应用程序。
- 实时结果分析：Gatling 可以在测试运行期间提供实时的性能数据和图形化报告，帮助你快速发现性能问题。
- 开源和活跃的社区：Gatling 是一个开源项目，拥有一个活跃的社区，不断更新和改进工具。
- 支持 CI/CD 集成：Gatling 可以与 CI/CD 工具（如 Jenkins）集成，以便在持续集成和持续交付流程中执行性能测试。

总的来说，Gatling 是一个功能强大的性能测试工具，适用于测试各种类型的应用程序，帮助开发团队识别和解决性能问题，以确保应用程序在生产环境中具有稳定的性能和可伸缩性。

## 环境搭建

> 由于我是 macbook，后面的介绍几本会以 macbook demo 为例，windows 的同学可以自行参考

### VSCode + Gradle + Scala 版本

#### 准备工作

- [x] 开发工具：VSCode
- [x] 安装 Gradle 版本>=6.0，我使用的 Gradle 8.44
- [x] 安装 JDK 版本>=8，我使用的 JDK 19

#### 安装插件

- [x] VSCode 搜索 Scala (Metals) 插件进行安装
- [x] VSCode 搜索 Gradle for Java 插件进行安装

#### 官方 demo 初始化&调试

> 前面先会用官方 demo 工程来做初始化和调试，后面再介绍如何自己创建工程

- 克隆官方 demo 工程

```bash
git clone git@github.com:gatling/gatling-gradle-plugin-demo-scala.git
```

- 使用 VSCode 打开克隆下来的官方 demo 工程

- 用 VSCode 打开本项目 Terminal 窗口，执行以下命令

```bash
gradle build
```

![readme-build](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-build.png)

- 运行工程中的 demo

```bash
gradle gatlingRun
```

- 查看命令行运行结果

![readme-report](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-report.png)

- 点击命令行报告中的 html 报告链接，并使用浏览器打开，即可查看详细的报告信息

![readme-report1](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-report1.png)

### VSCode + Maven + Scala 版本

#### 准备工作

- [x] 开发工具：VSCode
- [x] 安装 Maven，我使用的 Maven 3.9.5
- [x] JDK 版本>=8，我使用的 JDK 19

#### 安装插件

- [x] VSCode 搜索 Scala (Metals) 插件进行安装
- [x] VSCode 搜索 Maven for Java 插件进行安装

#### 官方 demo 初始化&调试

> 前面先会用官方 demo 工程来做初始化和调试，后面再介绍如何自己创建工程

- 克隆官方 demo 工程

```bash
git clone git@github.com:gatling/gatling-maven-plugin-demo-scala.git
```

- 使用 VSCode 打开克隆下来的官方 demo 工程

- 用 VSCode 打开本项目 Terminal 窗口，执行以下命令运行工程中的 demo

```bash
mvn gatling:test
```

- 查看命令行运行结果

![readme-report2](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-report2.png)

- 点击命令行报告中的 html 报告链接，并使用浏览器打开，即可查看详细的报告信息

![readme-report1](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-report1.png)

### IDEA + Gradle + Scala 版本

与 VSCode 下基本类似，这里就不再赘述了

差异点如下：

- IDEA 搜索 Scala 插件进行安装
- 新的运行方式：右键选择项目目录下的 Engine.scala 文件，选择 Run 'Engine'也可以运行 demo（运行过程中需要按回车键确认哦）

### IDEA + Maven + Scala 版本

与 VSCode 下基本类似，这里就不再赘述了

差异点如下：

- IDEA 搜索 Scala 插件进行安装
- 新的运行方式：右键选择项目目录下的 Engine.scala 文件，选择 Run 'Engine'也可以运行 demo（运行过程中需要按回车键确认哦）
