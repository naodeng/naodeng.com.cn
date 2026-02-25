---
title: Pytest + Requests 入门教程
description: 学习如何使用 Pytest 和 Requests 进行 API 自动化测试
testType: api-testing
framework: pytest
language: Python
stage: getting-started
difficulty: beginner
duration: 40
order: 1
githubDemo: https://github.com/Automation-Test-Starter/Pytest-API-Test-Starter
officialDocs: https://docs.pytest.org/
date: 2024-02-24
---

# Pytest + Requests 入门教程

## 简介

Pytest 是 Python 生态中最流行的测试框架，结合 Requests 库可以轻松实现 API 自动化测试。

## 环境准备

### 安装 Python

确保已安装 Python 3.8 或更高版本：

```bash
python --version
```

### 安装依赖

```bash
pip install pytest requests
```

## 创建第一个测试

### 1. 项目结构

```
pytest-api-demo/
├── tests/
│   └── test_api.py
├── requirements.txt
└── pytest.ini
```

### 2. 编写测试用例

创建 `tests/test_api.py`：

```python
import requests
import pytest

BASE_URL = "https://jsonplaceholder.typicode.com"

def test_get_users():
    """测试获取用户列表"""
    response = requests.get(f"{BASE_URL}/users")
    
    # 验证状态码
    assert response.status_code == 200
    
    # 验证响应数据
    users = response.json()
    assert isinstance(users, list)
    assert len(users) > 0
    
    # 验证第一个用户的数据结构
    first_user = users[0]
    assert "id" in first_user
    assert "name" in first_user
    assert "email" in first_user

def test_get_single_user():
    """测试获取单个用户"""
    user_id = 1
    response = requests.get(f"{BASE_URL}/users/{user_id}")
    
    assert response.status_code == 200
    
    user = response.json()
    assert user["id"] == user_id
    assert user["name"] is not None

def test_create_user():
    """测试创建用户"""
    new_user = {
        "name": "Test User",
        "email": "test@example.com"
    }
    
    response = requests.post(f"{BASE_URL}/users", json=new_user)
    
    assert response.status_code == 201
    
    created_user = response.json()
    assert created_user["name"] == new_user["name"]
    assert created_user["email"] == new_user["email"]
```

### 3. 配置 pytest.ini

```ini
[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
```

## 运行测试

### 运行所有测试

```bash
pytest
```

### 运行特定测试文件

```bash
pytest tests/test_api.py
```

### 显示详细输出

```bash
pytest -v
```

### 显示打印信息

```bash
pytest -s
```

## 测试结果

```
tests/test_api.py::test_get_users PASSED
tests/test_api.py::test_get_single_user PASSED
tests/test_api.py::test_create_user PASSED

======================== 3 passed in 1.23s ========================
```

## 下一步

接下来可以学习：

- 使用 Fixtures 管理测试数据
- 参数化测试
- 数据驱动测试
- 集成 Allure 报告
- CI/CD 集成

## 相关资源

- [Pytest 官方文档](https://docs.pytest.org/)
- [Requests 文档](https://requests.readthedocs.io/)
- [GitHub Demo 项目](https://github.com/naodeng/pytest-requests-demo)
