---
author:  "nao.deng"
title:  "Pytest 接口自动化测试教程：进阶用法 - 集成 CI/CD 和 Github action"
date: "2023-11-15T18:32:55+08:00"
summary:  "深入探讨 Pytest 的高级用法，着重介绍如何将 Pytest 集成到 CI/CD 流程中，以及如何使用 GitHub Actions 实现自动化测试。"
ZHtags:  [
"集成 CI/CD"
]
ZHcategories: ["接口自动化测试", "Pytest"]
ZHseries: ["Pytest 接口自动化测试教程"]
ShowWordCount: true
---

## 进阶用法

### 持续集成

#### 接入 github action

以 github action 为例，其他 CI 工具类似

可参考 demo：<https://github.com/Automation-Test-Starter/Pytest-API-Test-Demo>

创建.github/workflows 目录：在你的 GitHub 仓库中，创建一个名为 .github/workflows 的目录。这将是存放 GitHub Actions 工作流程文件的地方。

创建工作流程文件：在.github/workflows 目录中创建一个 YAML 格式的工作流程文件，例如 pytest.yml。

编辑 pytest.yml 文件：将以下内容复制到文件中
  
```yaml
# This workflow will install Python dependencies, run tests and lint with a single version of Python
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-python

name: Pytest API Testing

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

permissions:
  contents: read

jobs:
  Pytes-API-Testing:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Set up Python 3.10
      uses: actions/setup-python@v3
      with:
        python-version: "3.10"
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        
    - name: Test with pytest
      run: |
        pytest

    - name: Archive Pytest test report
      uses: actions/upload-artifact@v3
      with:
        name: SuperTest-test-report
        path: report
          
    - name: Upload Pytest report to GitHub
      uses: actions/upload-artifact@v3
      with:
        name: Pytest-test-report
        path: report
```

- 提交代码：将 pytest.yml 文件添加到仓库中并提交。
- 查看测试报告：在 GitHub 中，导航到你的仓库。单击上方的 Actions 选项卡，然后单击左侧的 Pytest API Testing 工作流。你应该会看到工作流正在运行，等待执行完成，就可以查看结果。

![yE65LO](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/yE65LO.png)

## 参考

- [pytest 文档](https://docs.pytest.org/en/6.2.x/)
- [gitHub action 文档](https://docs.github.com/en/actions)

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->