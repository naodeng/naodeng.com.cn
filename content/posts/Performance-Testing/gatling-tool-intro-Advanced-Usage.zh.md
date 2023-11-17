---
author: "nao.deng"
title:  "gatling 性能测试教程 - 进阶用法：报告解析和场景设置"
date:  "2023-10-26T18:07:44+08:00"
summary:  "文章介绍性能测试工具 gatling 的进阶用法：性能测试报告的解析，不同类型的测试报告报表介绍，不同业务类型下的性能测试场景配置"
ZHtags: ["测试报告"]
ZHcategories:  ["性能测试", "Gatling"]
ZHseries: ["Gatling 性能测试教程"]
ShowWordCount: true
---

### 测试报告解析

#### 总览

##### 总览图

> 性能测试执行结束后打开详细的 html 报告，可以看到详细的性能测试报告；
> 可通过指标、活跃用户和随时间变化的请求/响应以及分布来分析您的报告

![readme-test-report1](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-test-report1.png)

- 页面中间标题处显示 Simulation 的名字
- 左侧的列表展示不同类型的报告菜单，可点击切换
- 页面中部展示性能测试报告的总览信息，包括：请求总数、成功请求总数、失败请求总数、最短响应时间、最长响应时间、平均响应时间、吞吐量、标准差、百分比分布等。也会展示 gatling 的版本及本次报告运行的时间和时长
- 全局菜单指向综合统计数据。
- 详细信息菜单指向每个请求类型的统计信息。

##### 请求数&响应时间分布图

![readme-test-report2](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-test-report2.png)

此图表展示了响应时间在标准范围内的分布情况
左侧的列表显示所有的请求以及请求响应的时间分布，红色代表失败的请求
右边 Number of request 代表用户并发数量，以及各个请求的请求数量及其成功失败状态

> 这些范围可以在 gatling.conf 文件中配置

##### 请求标准统计分析图

![readme-test-report3](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-test-report3.png)

此图表显示了一些标准统计数据，例如全局和每个请求的最小值、最大值、平均值、标准差和百分位数。
stats 显示了所有请求具体的成功失败情况 OK 代表成功，KO 代表失败，百分比 99th pct 代表对于这一个 API 总的请求中有百分之 99 的请求 response time 是这个数值

> 这些百分位数可以在 gatling.conf 文件中配置。

##### 活跃用户数统计图

![readme-test-report4](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-test-report4.png)

此图表展示了活跃用户数指的是在测试时间段内，正在进行请求的用户数。在测试开始时，活跃用户数为 0。当用户开始发送请求时，活跃用户数开始增加。当用户完成请求时，活跃用户数开始减少。活跃用户数的最大值是在测试期间同时发送请求的用户数。

##### 响应时间分布图

![readme-test-report5](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-test-report5.png)

此图表显示了响应时间的分布，包括请求成功的响应时间和请求失败的响应时间。

##### 响应时间百分位对比图

![readme-test-report6](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-test-report6.png)

此图表显示一段时间内的各种响应时间百分位数，但仅适用于成功的请求。由于失败的请求可能会提前结束或由超时引起，因此它们会对百分位数的计算产生巨大影响。

##### 每秒请求数图

![readme-test-report7](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-test-report7.png)

此图表展示了每秒的请求数，包括成功的请求数和失败的请求数。

##### 每秒响应数图

![readme-test-report8](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-test-report8.png)

此图表展示了每秒的响应数，包括成功的响应数和失败的响应数。

#### 单个请求分析报告

> 可点击报告页面上的 details 菜单切换到 details tab 页面，查看单个请求的详细报告

![readme-test-report9](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-test-report9.png)

Details 页面主要展示了每个请求的统计数据，与全局报告相似地包括了响应时间分布图，响应时间百分位图，每秒请求数图，每秒响应数图。不同的是最底下有一张图是描述单个请求相对于全局所有请求的响应时间。该图横坐标是每秒全局所有请求数，纵坐标是单个请求的响应时间。

### 性能场景设置

#### Injection 注入

##### 什么是 Injection

在 Gatling 性能测试中，"Injection"是指将虚拟用户（或负载）引入系统的一种方式。它定义了模拟用户如何被引入测试场景，包括用户的数量、速率和方式。Injection 是 Gatling 中用于控制负载和并发度的关键概念，允许你模拟不同的用户行为和负载模型。

用户注入配置文件的定义是通过 injectOpen 和 injectClosed 方法（Scala 中的 inject）完成的。此方法将按顺序处理的注入步骤序列作为参数。每个步骤都定义了一组用户，以及如何将这些用户注入到场景中。

官网更多介绍：<https://gatling.io/docs/gatling/reference/current/core/injection/>

##### 常用 Injection 场景

###### Open Model 开放模型场景

```scala
setUp(
  scn.inject(
    nothingFor(4), // 1
    atOnceUsers(10), // 2
    rampUsers(10).during(5), // 3
    constantUsersPerSec(20).during(15), // 4
    constantUsersPerSec(20).during(15).randomized, // 5
    rampUsersPerSec(10).to(20).during(10.minutes), // 6
    rampUsersPerSec(10).to(20).during(10.minutes).randomized, // 7
    stressPeakUsers(1000).during(20) // 8
  ).protocols(httpProtocol)
)
```

1. nothingFor(duration)：设置一段停止的时间，这段时间什么都不做
2. atOnceUsers(nbUsers)：立即注入一定数量的虚拟用户
3. rampUsers(nbUsers) during(duration)：在指定时间内，设置一定数量逐步注入的虚拟用户
4. constantUsersPerSec(rate) during(duration)：定义一个在每秒钟恒定的并发用户数，持续指定的时间
5. constantUsersPerSec(rate) during(duration) randomized：定义一个在每秒钟围绕指定并发数随机增减的并发，持续指定时间
6. rampUsersPerSec(rate1) to (rate2) during(duration)：定义一个并发数区间，运行指定时间，并发增长的周期是一个规律的值
7. rampUsersPerSec(rate1) to(rate2) during(duration) randomized：定义一个并发数区间，运行指定时间，并发增长的周期是一个随机的值
8. stressPeakUsers(nbUsers).during(duration) ：按照拉伸到给定持续时间的[阶跃函数](https://en.wikipedia.org/wiki/Heaviside_step_function)的平滑近似注入给定数量的用户。

###### Closed Model 闭合模型场景

```scala
setUp(
  scn.inject(
    constantConcurrentUsers(10).during(10), // 1
    rampConcurrentUsers(10).to(20).during(10) // 2
  )
)
```

1. constantConcurrentUsers(nbUsers).during(duration) ：注入以使系统中的并发用户数恒定
2. rampConcurrentUsers(fromNbUsers).to(toNbUsers).during(duration) ：注入，使系统中的并发用户数从一个数字线性增加到另一个数字

##### Meta DSL 场景

"Meta DSL"是一种特殊的领域特定语言（DSL），用于描述性能测试场景的元数据（metadata）和全局配置。Meta DSL 允许你定义性能测试中的一些全局设置和参数，以影响整个测试过程，而不是特定于某个场景。

可以使用 Meta DSL 的元素以更简单的方式编写测试。如果您想要链接级别和斜坡以达到应用程序的极限（有时称为容量负载测试的测试），您可以使用常规 DSL 手动完成，并使用 map 和 flatMap 进行循环。

- incrementUsersPerSec

```scala
setUp(
   // 生成一个开放的工作量注入配置文件
  // 每秒分别有 10、15、20、25 和 30 个用户到达
  // 每个级别持续 10 秒
  // 每级持续 10 秒
  scn.inject(
    incrementUsersPerSec(5.0)
      .times(5)
      .eachLevelLasting(10)
      .separatedByRampsLasting(10)
      .startingFrom(10) // Double
  )
```

- incrementConcurrentUsers
  
```scala
setUp(
  // 生成一个封闭的工作负载注入配置文件
  // 并发用户分别为 10、15、20、25 和 30 级
  // 每个级别持续 10 秒
  // 每级持续 10 秒
  scn.inject(
    incrementConcurrentUsers(5)
      .times(5)
      .eachLevelLasting(10)
      .separatedByRampsLasting(10)
      .startingFrom(10) // Int
  )
)
```

incrementUsersPerSec 用于开放式工作负载，incrementConcurrentUsers 用于封闭式工作负载（用户数/秒与并发用户数）。

separatedByRampsLasting 和 startingFrom 都是可选的。如果您不指定斜坡，测试完成后就会立即从一个级别跳到另一个级别。如果您不指定启动用户数，测试将从 0 个并发用户或每秒 0 个用户开始，并立即进入下一步。

##### Concurrent Scenarios 并发场景

```scala
setUp(
  scenario1.inject(injectionProfile1),
  scenario2.inject(injectionProfile2)
)
```

您可以在同一个 setUp 块中配置多个场景同时启动并并发执行。

##### 其他场景

查看官网介绍：<https://gatling.io/docs/gatling/reference/current/core/injection/>
