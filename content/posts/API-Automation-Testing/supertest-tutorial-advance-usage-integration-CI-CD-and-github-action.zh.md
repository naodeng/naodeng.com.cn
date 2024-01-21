---
author:  "nao.deng"
title:  "SuperTest 接口自动化测试教程：进阶用法 - 集成 CI/CD 和 Github action"
date:  "2023-11-07T18:09:43+08:00"
summary:  "深入探讨 Supertest 的高级用法，着重介绍如何将 Supertest 集成到 CI/CD 流程中，以及如何使用 GitHub Actions 实现自动化测试。"
ZHtags:  [
"集成 CI/CD"
]
ZHcategories: ["接口自动化测试", "SuperTest"]
ZHseries: ["SuperTest 接口自动化测试教程"]
ShowWordCount: true
---

### 持续集成

#### 接入 github action

以 github action 为例，其他 CI 工具类似

##### Mocha 版本接入 github action

可参考 demo：<https://github.com/Automation-Test-Starter/SuperTest-Mocha-demo>

创建.github/workflows 目录：在你的 GitHub 仓库中，创建一个名为 .github/workflows 的目录。这将是存放 GitHub Actions 工作流程文件的地方。

创建工作流程文件：在.github/workflows 目录中创建一个 YAML 格式的工作流程文件，例如 mocha.yml。

编辑 mocha.yml 文件：将以下内容复制到文件中
  
```yaml
name: RUN SuperTest API Test CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  RUN-SuperTest-API-Test:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [ 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
        
    - name: Installation of related packages
      run: npm ci
      
    - name: RUN SuperTest API Testing
      run: npm test
      
    - name: Archive SuperTest mochawesome test report
      uses: actions/upload-artifact@v3
      with:
        name: SuperTest-mochawesome-test-report
        path: Report

    - name: Upload SuperTest mochawesome report to GitHub
      uses: actions/upload-artifact@v3
      with:
        name: SuperTest-mochawesome-test-report
        path: Report
```

- 提交代码：将 mocha.yml 文件添加到仓库中并提交。
- 查看测试报告：在 GitHub 中，导航到你的仓库。单击上方的 Actions 选项卡，然后单击左侧的 RUN SuperTest API Test CI 工作流。你应该会看到工作流正在运行，等待执行完成，就可以查看结果。

![dgfyaS](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/dgfyaS.png)

##### Jest 版本接入 github action

可参考 demo：<https://github.com/Automation-Test-Starter/SuperTest-Jest-demo>

创建.github/workflows 目录：在你的 GitHub 仓库中，创建一个名为 .github/workflows 的目录。这将是存放 GitHub Actions 工作流程文件的地方。

创建工作流程文件：在.github/workflows 目录中创建一个 YAML 格式的工作流程文件，例如 jest.yml。

编辑 jest.yml 文件：将以下内容复制到文件中
  
```yaml
name: RUN SuperTest API Test CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  RUN-SuperTest-API-Test:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [ 18.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Installation of related packages
        run: npm ci

      - name: RUN SuperTest API Testing
        run: npm test

      - name: Archive SuperTest test report
        uses: actions/upload-artifact@v3
        with:
          name: SuperTest-test-report
          path: Report

      - name: Upload SuperTest  report to GitHub
        uses: actions/upload-artifact@v3
        with:
          name: SuperTest-test-report
          path: Report
```

- 提交代码：将 jest.yml 文件添加到仓库中并提交。
- 查看测试报告：在 GitHub 中，导航到你的仓库。单击上方的 Actions 选项卡，然后单击左侧的 RUN-SuperTest-API-Test 工作流。你应该会看到工作流正在运行，等待执行完成，就可以查看结果。

![fqXy8o](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/fqXy8o.png)

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->