---
author: "nao.deng"
title: "接口测试简介"
date: "2023-04-20"
summary: "文章介绍接口测试的简介，类型和工具"
ZHtags: ["接口测试介绍"]
ZHcategories: ["接口测试", "测试工具"]
ZHseries: ["测试理论指南"]
ShowWordCount: true
---

### 什么是 API?

API:应用程序接口（全称：application programming interface），缩写为 API，是一种计算接口，它定义多个软件中介之间的交互，以及可以进行的调用（call）或请求（request）的种类，如何进行调用或发出请求，应使用的数据格式，应遵循的惯例等。它还可以提供扩展机制，以便用户可以通过各种方式对现有功能进行不同程度的扩展。一个 API 可以是完全定制的，针对某个组件的，也可以是基于行业标准设计的以确保互操作性。通过信息隐藏，API 实现了模块化编程，从而允许用户实现独立地使用接口。

### 什么是 API 测试？

接口测试是[软件测试](https://zh.wikipedia.org/wiki/软件测试)的一种，它包括两种测试类型：狭义上指的是直接针对[应用程序接口](https://zh.wikipedia.org/wiki/应用程序接口)（下面使用缩写 API 指代，其中文简称为接口）的功能进行的测试；广义上指[集成测试](https://zh.wikipedia.org/wiki/集成测试)中，通过调用 API 测试整体的功能完成度、可靠性、安全性与性能等指标。

API Best Practice:

- API 定义遵循 RESTFUL API 风格，语意化的 URI 定义，准确的 HTTP 状态码，通过 API 的定义就可以知道资源间的关系
- 配有详细且准确的 API 文档（如 Swagger 文档）
- 对外的 API 可以包含版本号以快速迭代（如 https://thoughtworks.com/v1/users/）

### API 测试与测试四象限

测试四象限中不同象限的测试，其测试目的跟测试策略也不同，API 测试主要位于第二、第四象限

### API 测试与测试金字塔

API 测试在测试金子塔中处于一个相对靠上的位置，主要站在系统、服务边界来测试功能和业务逻辑，执行时机是在服务完成构建、部署到测试环境之后再执行、验证。

### API 测试类型

功能测试

- 正确性测试
- 异常处理
- 内部逻辑
- ……

非功能测试

- 性能
- 安全
- ……

### API 测试步骤

- 发送请求
- 得到响应
- 验证响应结果

### API 功能测试设计

设计理论

- 正面
- 负面
- 异常处理
- 内部逻辑
- ……

测试方法

- 等价类划分
- 边界值
- 错误推断
- ……

### API 非功能测试设计

安全测试

- 随机测试
- SQL 注入
- XSS
- ……

性能测试

- 性能瓶颈
- 稳定性测试
- ……

### API 测试工具

API 请求工具

- CURL
- Soap UI
- Postman
- Swagger UI
- ……

Http proxy 工具

- Fiddler
- Charles
- ……

API 性能测试工具

- ab(apache bench)
- Jmeter
- ……

欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->