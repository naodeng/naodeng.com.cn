---
author: "nao.deng"
title:  "gatling 性能测试教程 - 进阶用法：CI/CD 集成"
date:  "2023-10-30T10:36:24+08:00"
summary: "文章介绍性能测试工具 gatling 的进阶用法：CI/CD 集成，以 github action 为例来介绍如何集成 gatling 到 CI/CD 流程中"
ZHtags:  ["集成 CI/CD"]
ZHcategories:  ["性能测试", "Gatling"]
ZHseries: ["Gatling 性能测试教程"]
ShowWordCount: true
---

### 持续集成

#### 接入 github action

以 github action 为例，其他 CI 工具类似

##### Gradle + Scala 版本

> 可参考 demo：<https://github.com/Automation-Test-Starter/gatling-gradle-scala-demo>

- 创建.github/workflows 目录：在你的 GitHub 仓库中，创建一个名为 .github/workflows 的目录。这将是存放 GitHub Actions 工作流程文件的地方。

- 创建工作流程文件：在.github/workflows 目录中创建一个 YAML 格式的工作流程文件，例如 gatling.yml。
- 编辑 gatling.yml 文件：将以下内容复制到文件中。

```yaml
name: Gatling Performance Test

on:
  push:
    branches:
      - main

jobs:
  performance-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: 11
          distribution: 'adopt'

      - name: Run Gatling tests
        run: |
          ./gradlew gatlingRun
        env:
          GATLING_SIMULATIONS_FOLDER: src/gatling/scala

      - name: Archive Gatling results
        uses: actions/upload-artifact@v2
        with:
          name: gatling-results
          path: build/reports/gatling

      - name: Upload Gatling results to GitHub
        uses: actions/upload-artifact@v2
        with:
          name: gatling-results
          path: build/reports/gatling
```

- 提交代码：将 gatling.yml 文件添加到仓库中并提交。
- 查看测试报告：在 GitHub 中，导航到你的仓库。单击上方的 Actions 选项卡，然后单击左侧的 Performance Test 工作流。你应该会看到工作流正在运行，等待执行完成，就可以查看结果。

![readme-github-action-gradle](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-github-action-gradle.png)

##### Maven + Scala 版本

> 可参考 demo：<https://github.com/Automation-Test-Starter/gatling-maven-scala-demo>

- 创建.github/workflows 目录：在你的 GitHub 仓库中，创建一个名为 .github/workflows 的目录。这将是存放 GitHub Actions 工作流程文件的地方。

- 创建工作流程文件：在.github/workflows 目录中创建一个 YAML 格式的工作流程文件，例如 gatling.yml。
- 编辑 gatling.yml 文件：将以下内容复制到文件中。

```yaml
name: Gatling Performance Test

on:
  push:
    branches:
      - main

jobs:
  performance-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: 11
          distribution: 'adopt'

      - name: Run Gatling tests
        run: |
          mvn gatling:test
        env:
          GATLING_SIMULATIONS_FOLDER: src/test/scala

      - name: Archive Gatling results
        uses: actions/upload-artifact@v2
        with:
          name: gatling-results
          path: target/gatling

      - name: Upload Gatling results to GitHub
        uses: actions/upload-artifact@v2
        with:
          name: gatling-results
          path: target/gatling
```

- 提交代码：将 gatling.yml 文件添加到仓库中并提交。
- 查看测试报告：在 GitHub 中，导航到你的仓库。单击上方的 Actions 选项卡，然后单击左侧的 Performance Test 工作流。你应该会看到工作流正在运行，等待执行完成，就可以查看结果。

![readme-github-action-maven](https://github.com/Automation-Test-Starter/Gatling-Performance-Test-starter/raw/main/readme-pic/readme-github-action-maven.png)


## 参考

- galting 官网：<https://gatling.io/>
- galting 官方文档：<https://gatling.io/docs/gatling/>
- galting 官方 github: <https://github.com/gatling/>