---
author:  "nao.deng"
title: "Pytest 教程：从 0 到 1 搭建 Pytest 接口自动化测试项目"
date: "2023-11-14T09:58:14+08:00"
summary: "将从零开始教您如何建立 Pytest 接口自动化测试项目。您将学习如何创建项目的基础结构，设置环境，编写测试用例，以及执行自动化测试。"
ZHtags: ["从 0 到 1 搭建接口自动化测试项目"]
ZHcategories:  ["接口自动化测试", "Pytest"]
ZHseries: ["Pytest 教程"]
ShowWordCount: true
---

## 从 0 到 1 搭建 Pytest 接口自动化测试项目

### 1.创建项目目录

```shell
mkdir Pytest-API-Testing-Demo
```

### 2.项目初始化

```shell
// 进入项目文件夹下
cd Pytest-API-Testing-Demo
// 创建项目 python 项目虚拟环境
python -m venv .env
// 启用项目 python 项目虚拟环境
source .env/bin/activate
```

### 3.安装项目依赖

```shell
// 安装 requests 包
pip install requests
// 安装pytest 包
pip install pytest
// 将项目依赖项保存到 requirements.txt 文件中
pip freeze > requirements.txt
```

### 4.新建测试文件及测试用例

```shell
// 新建测试文件夹
mkdir tests
// 新建测试用例文件
cd tests
touch test_demo.py
```

### 5.编写测试用例

> 测试接口可参考项目中 demoAPI.md 文件

```python
import requests


class TestPytestDemo:

    def test_get_demo(self):
        base_url = "https://jsonplaceholder.typicode.com"
        # 发起请求
        response = requests.get(f"{base_url}/posts/1")
        # 断言
        assert response.status_code == 200
        assert response.json()['userId'] == 1
        assert response.json()['id'] == 1

    def test_post_demo(self):
        base_url = "https://jsonplaceholder.typicode.com"
        requests_data = {
            "title": "foo",
            "body": "bar",
            "userId": 1
        }
        # 发起请求
        response = requests.post(f"{base_url}/posts", requests_data)
        # 断言
        assert response.status_code == 201
        print(response.json())
        assert response.json()['userId'] == '1'
        assert response.json()['id'] == 101
```

### 6.运行测试用例

```shell
pytest
```

### 7.查看测试报告

![CsoB4y](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/CsoB4y.png)

### 8.接入 pytest-html-reporter 测试报告

> <https://github.com/prashanth-sams/pytest-html-reporter>

#### 安装 pytest-html-reporter 依赖

```shell
pip install pytest-html-reporter 
```

#### 配置测试报告参数

- 项目根目录下新建 pytest.ini 文件
- 添加以下内容

```ini
[pytest]
addopts = -vs -rf --html-report=./report --title='PYTEST REPORT' --self-contained-html
```

#### 运行测试用例

```shell
pytest
```

#### 查看测试报告

报告在项目根目录下的 report 目录下，使用浏览器打开 pytest_html_report.html 文件即可查看

![8JdxbA](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/8JdxbA.png)
