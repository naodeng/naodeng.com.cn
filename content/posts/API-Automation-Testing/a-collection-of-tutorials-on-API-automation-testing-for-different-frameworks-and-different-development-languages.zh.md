---
author:  "nao.deng"
title:  "接口测试新手入门教程：不同框架和不同开发语言"
date: "2023-11-29T11:23:00+08:00"
summary:  "这篇博文汇总了关于不同框架和开发语言的接口自动化测试教程，为读者提供全面的学习资源。涵盖了各种流行测试框架和编程语言，让您能够选择适合自己项目的最佳方案。无论您是 Python、Java、JavaScript 还是其他语言的开发者，无论您偏好使用的是 REST Assured、SuperTest 还是其他框架，这个合集都将为您提供深入的学习指南，帮助您在接口自动化测试领域更加游刃有余。不容错过的资源，助您全面掌握接口自动化测试的各种工具和技术。"
ZHtags: ["入门介绍","环境搭建","从 0 到 1 搭建接口自动化测试项目","多环境支持","集成 allure 报告","数据驱动","集成 CI/CD"]
ZHcategories: ["接口自动化测试", "Postman", "SuperTest", "RestAssured", "Pytest", "Bruno"]
ZHseries: ["接口自动化测试教程"]
ShowWordCount: true
---

## Java 和 REST Assured 框架实现接口自动化项目

### REST Assured 框架教程目录

> 目录不可点击，仅为展示目录结构
<!-- markdownlint-disable MD051 -->
- [RestAssured 接口自动化测试快速启动项目](#restassured-接口自动化测试快速启动项目)
  - [RestAssured 介绍](#restassured-介绍)
  - [项目结构](#项目结构)
    - [Gradle 构建的版本](#gradle-构建的版本)
    - [Maven 构建的版本](#maven-构建的版本)
  - [项目依赖](#项目依赖)
  - [从 0 到 1 搭建 REST Assured 接口测试项目](#从-0-到-1-搭建-rest-assured-接口测试项目)
    - [Gradle 版本](#gradle-版本)
    - [Maven 版本](#maven-版本)
  - [进阶用法](#进阶用法)
    - [验证响应数据](#验证响应数据)
    - [文件上传](#文件上传)
    - [Logging 日志](#logging-日志)
    - [Filters 过滤器](#filters-过滤器)
    - [持续集成](#持续集成)
      - [接入 github action](#接入-github-action)
    - [集成 allure 测试报告](#集成-allure-测试报告)
    - [数据驱动](#数据驱动)
    - [多环境支持](#多环境支持)
<!-- markdownlint-disable MD051 -->
### REST Assured 框架教程对应文章

- REST Assured 接口自动化测试教程：进阶用法 - 集成 CI/CD 和集成 allure 测试报告:<https://naodeng.tech/zh/posts/api-automation-testing/rest-assured-tutorial-advance-usage-integration-ci-cd-and-allure-report/>

- REST Assured 接口自动化测试教程：进阶用法 - 验证响应和日志记录，过滤器，文件上传:<https://naodeng.tech/zh/posts/api-automation-testing/rest-assured-tutorial-advance-usage-verifying-response-and-logging/>

- REST Assured 接口自动化测试教程：从 0 到 1 搭建 REST Assured 接口自动化测试项目:<https://naodeng.tech/zh/posts/api-automation-testing/rest-assured-tutorial-building-your-own-project-from-0-to-1/>

- REST Assured 接口自动化测试教程：入门介绍和环境搭建准备:<https://naodeng.tech/zh/posts/api-automation-testing/rest-assured-tutorial-and-environment-preparation/>

### REST Assured 框架教程参考文档

- Demo 项目地址：<https://github.com/Automation-Test-Starter/RestAssured-API-Test-Starter/>
- Rest assured 官方文档：<https://rest-assured.io/>
- Rest assured 官方 github：<https://github.com/rest-assured/rest-assured>
- Rest assured 官方文档中文翻译：<https://github.com/RookieTester/rest-assured-doc>
- Allure 文档：<https://docs.qameta.io/allure/>
- gitHub action 文档：<https://docs.github.com/en/actions>

## JavaScript 和 SuperTest 框架实现接口自动化项目

### SuperTest 框架教程目录

> 目录不可点击，仅为展示目录结构
<!-- markdownlint-disable MD051 -->
- [SuperTest 接口自动化测试快速启动项目](#supertest-接口自动化测试快速启动项目)
  - [介绍](#介绍)
  - [项目依赖](#项目依赖)
  - [项目文件结构](#项目文件结构)
  - [从 0 到 1 搭建 SuperTest 接口自动化测试项目](#从-0-到-1-搭建-supertest-接口自动化测试项目)
    - [Mocha 版本](#mocha-版本)
    - [Jest 版本](#jest-版本)
  - [进阶用法](#进阶用法)
    - [持续集成](#持续集成)
      - [接入 github action](#接入-github-action)
    - [常用断言](#常用断言)
      - [SuperTest 的内置断言](#supertest-的内置断言)
      - [CHAI 的常用断言](#chai-的常用断言)
      - [Jest 的常用断言](#jest-的常用断言)
    - [数据驱动](#数据驱动)
    - [多环境支持](#多环境支持)
<!-- markdownlint-disable MD051 -->

### SuperTest 框架教程对应文章

- SuperTest 接口自动化测试教程：进阶用法 - 多环境支持：<https://naodeng.tech/zh/posts/api-automation-testing/supertest-tutorial-advance-usage-multiple-environment-support/>
- SuperTest 接口自动化测试教程：进阶用法 - 数据驱动：<https://naodeng.tech/zh/posts/api-automation-testing/supertest-tutorial-advance-usage-data-driven/>
- SuperTest 接口自动化测试教程：进阶用法 - 常用断言：<https://naodeng.tech/zh/posts/api-automation-testing/supertest-tutorial-advance-usage-common-assertions/>
- SuperTest 接口自动化测试教程：进阶用法 - 集成 CI/CD 和 Github action:<https://naodeng.tech/zh/posts/api-automation-testing/supertest-tutorial-advance-usage-integration-ci-cd-and-github-action/>
- SuperTest 接口自动化测试教程：从 0 到 1 搭建 Supertest 接口自动化测试项目：<https://naodeng.tech/zh/posts/api-automation-testing/supertest-tutorial-building-your-own-project-from-0-to-1/>
- SuperTest 接口自动化测试教程：入门介绍和环境搭建准备：<https://naodeng.tech/zh/posts/api-automation-testing/supertest-tutorial-getting-started-and-own-environment-preparation/>

### SuperTest 框架教程参考文档

- Demo 项目地址：<https://github.com/Automation-Test-Starter/SuperTest-API-Test-Starter>
- SuperTest 文档：<https://github.com/ladjs/supertest>
- Jest 文档：<https://jestjs.io/docs/en/getting-started>
- Mocha 文档：<https://mochajs.org/>
- Chai 文档：<https://www.chaijs.com/>
- Allure 文档：<https://docs.qameta.io/allure/>
- gitHub action 文档：<https://docs.github.com/en/actions>

## Python 和 Pytest 框架实现接口自动化项目

### Pytest 框架教程目录

> 目录不可点击，仅为展示目录结构
<!-- markdownlint-disable MD051 -->
- [Pytest 接口自动化测试快速启动项目](#pytest-接口自动化测试快速启动项目)
  - [介绍](#介绍)
    - [Pytest 介绍](#pytest-介绍)
    - [python 虚拟环境介绍](#python-虚拟环境介绍)
  - [项目依赖](#项目依赖)
  - [项目目录结构](#项目目录结构)
  - [从 0 到 1 搭建 Pytest 接口自动化测试项目](#从-0-到-1-搭建-pytest-接口自动化测试项目)
  - [进阶用法](#进阶用法)
    - [持续集成](#持续集成)
      - [接入 github action](#接入-github-action)
    - [常用断言](#常用断言)
    - [数据驱动](#数据驱动)
    - [多环境支持](#多环境支持)
    - [集成 allure 报告](#集成-allure-报告)
    - [并发测试和分布式测试](#并发测试和分布式测试)
    - [筛选用例执行](#筛选用例执行)
<!-- markdownlint-disable MD051 -->
### Pytest 框架教程对应文章

- Pytest 接口自动化测试教程：进阶用法 - 筛选测试用例执行，并发测试和分布式测试：<https://naodeng.tech/zh/posts/api-automation-testing/pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing/>
- Pytest 接口自动化测试教程：进阶用法 - 多环境支持 和 集成 allure 报告：<https://naodeng.tech/zh/posts/api-automation-testing/pytest-tutorial-advance-usage-multiple-environment-support-and-integration-allure-report/>
- Pytest 接口自动化测试教程：进阶用法 - 常用断言和数据驱动：<https://naodeng.tech/zh/posts/api-automation-testing/pytest-tutorial-advance-usage-common-assertions-and-data-driven/>
- Pytest 接口自动化测试教程：进阶用法 - 集成 CI/CD 和 Github action：<https://naodeng.tech/zh/posts/api-automation-testing/pytest-tutorial-advance-usage-integration-ci-cd-and-github-action/>
- Pytest 接口自动化测试教程：从 0 到 1 搭建 Pytest 接口自动化测试项目：<https://naodeng.tech/zh/posts/api-automation-testing/pytest-tutorial-building-your-own-project-from-0-to-1/>
- Pytest 接口自动化测试教程：入门介绍和环境搭建准备：<https://naodeng.tech/zh/posts/api-automation-testing/pytest-tutorial-getting-started-and-own-environment-preparation/>

### Pytest 框架教程参考文档

- Demo 项目地址：<https://github.com/Automation-Test-Starter/Pytest-API-Test-Starter>
- Pytest 文档：<https://docs.pytest.org/en/stable/>
- Pytest-html 文档：<https://pypi.org/project/pytest-html/>
- Pytest-xdist 文档：<https://pypi.org/project/pytest-xdist/>
- Allure-pytest 文档：<https://pypi.org/project/allure-pytest/>
- Allure 文档：<https://docs.qameta.io/allure/>
- gitHub action 文档：<https://docs.github.com/en/actions>

## 测试工具实现接口自动化测试

### Postman 接口自动化测试

#### Postman 框架教程目录

> 目录不可点击，仅为展示目录结构
<!-- markdownlint-disable MD051 -->
- [Postman-API-Test-Starter](#postman-api-test-starter)
  - [介绍](#介绍)
    - [接口测试简介](#接口测试简介)
    - [Postman 与 newman 介绍](#postman-与-newman-介绍)
  - [项目依赖](#项目依赖)
  - [项目文件结构](#项目文件结构)
  - [从 0 到 1 搭建 Postman 接口自动化测试项目](#从-0-到-1-搭建-postman-接口自动化测试项目)
  - [进阶用法](#进阶用法)
    - [输出 html 测试报告](#输出-html-测试报告)
    - [CI/CD 持续集成](#cicd-持续集成)
      - [接入 github action](#接入-github-action)
    - [集成 allure 测试报告](#集成-allure-测试报告)
    - [常用测试脚本](#常用测试脚本)
      - [响应测试脚本](#响应测试脚本)
      - [请求前脚本](#请求前脚本)
    - [测试脚本中可用的第三方库](#测试脚本中可用的第三方库)
      - [chai.js 断言库方法](#chaijs-断言库方法)
      - [使用 cheerio 操作 HTML 文件](#使用-cheerio-操作-html-文件)
      - [使用 tv4 来验证 JSON Schema](#使用-tv4-来验证-json-schema)
      - [生成 uuid](#生成-uuid)
      - [使用 xml2js 将 XML 转换为 JavaScript 对象](#使用-xml2js-将-xml-转换为-javascript-对象)
      - [常用工具函数 util](#常用工具函数-util)
      - [stream 流操作](#stream-流操作)
      - [定时器 timers](#定时器-timers)
      - [时间处理 events](#时间处理-events)
    - [数据驱动](#数据驱动)
      - [使用环境变量](#使用环境变量)
      - [使用数据文件](#使用数据文件)
    - [文件上传](#文件上传)
    - [并发测试](#并发测试)
<!-- markdownlint-disable MD051 -->
#### Postman 框架教程对应文章

- Postman 接口自动化测试教程：进阶用法 - 常用命令行选项，文件上传场景和 SSL 证书场景：<https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-advance-usage-common-command-line-options-and-file-upload/>
- Postman 接口自动化测试教程：进阶用法 - 数据驱动：<https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-advance-usage-data-driven-and-environment-data-driven/>
- Postman 接口自动化测试教程：进阶用法 - 常用的测试脚本和常用的第三方包用法示例：<https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages/>
- Postman 接口自动化测试教程：进阶用法 - 集成 CI/CD 和 Github action，接入 allure 测试报告：<https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action/>
- Postman 接口自动化测试教程：入门介绍和从 0 到 1 搭建 Postman 接口自动化测试项目：<https://naodeng.tech/zh/posts/api-automation-testing/postman-tutorial-getting-started-and-building-your-own-project-from-0-to-1/>

#### Postman 框架教程参考文档

- Demo 项目地址：<https://github.com/Automation-Test-Starter/Postman-API-Test-Starter>
- Postman 官方文档:<https://learning.postman.com/docs/getting-started/introduction/>
- Newman 官方文档:<https://github.com/postmanlabs/newman>
- gitHub action 文档：<https://docs.github.com/en/actions>
- allure 文档：<https://docs.qameta.io/allure/>

### Bruno 接口自动化测试

#### Bruno 框架教程目录

> 目录不可点击，仅为展示目录结构
<!-- markdownlint-disable MD051 -->
- [bruno-user-guide](#bruno-user-guide)
  - [为什么选择 bruno](#为什么选择-bruno)
  - [安装 bruno](#安装-bruno)
  - [客户端使用入门](#客户端使用入门)
    - [默认主界面](#默认主界面)
    - [API 请求集](#api-请求集)
    - [API 请求](#api-请求)
    - [编写 API 请求测试脚本](#编写-api-请求测试脚本)
  - [环境变量](#环境变量)
  - [测试脚本接口自动化](#测试脚本接口自动化)
    - [前置条件](#前置条件)
    - [接口自动化项目 demo](#接口自动化项目-demo)
  - [接入 CI](#接入-ci)
    - [接入 github action](#接入-github-action)
  - [Postman 脚本迁移](#postman-脚本迁移)
    - [API 请求集迁移](#api-请求集迁移)
    - [环境变量迁移](#环境变量迁移)
    - [测试脚本迁移参考](#测试脚本迁移参考)
<!-- markdownlint-disable MD051 -->

#### Bruno 框架教程对应文章

- postman 替换工具 bruno 使用介绍:<https://naodeng.tech/zh/posts/api-automation-testing/introduction_of_bruno/>

#### Bruno 框架教程参考文档

- Demo 项目地址：<https://github.com/Automation-Test-Starter/Bruno-API-Test-Starter>
- Bruno 文档：<https://docs.usebruno.com/>
- gitHub action 文档：<https://docs.github.com/en/actions>

#### 推荐阅读

- [使用 Postman 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/postman-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Pytest 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/pytest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 SuperTest 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/supertest-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Rest Assured 进行接口自动化测试快速开启教程系列](https://naodeng.tech/zh/zhseries/rest-assured-%E6%8E%A5%E5%8F%A3%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)
- [使用 Galting 进行性能测试快速开启教程系列](https://naodeng.tech/zh/zhseries/gatling-%E6%80%A7%E8%83%BD%E6%B5%8B%E8%AF%95%E6%95%99%E7%A8%8B/)

---
