+++
author = "nao.deng"
title = "Playwright 自动化框架入门"
date = "2023-01-18"
description = "文章介绍 playwright 自动化测试框架的新手入门介绍"
tags = [
"自动化测试","Playwright"
]
+++

下面的信息是对 playwright 自动化测试框架的新手入门介绍。如果你想要学习更多关于 playwright 自动化测试框架的信息，请参阅它的文档。运行测试：打开测试界面，选择"运行测试"。下面会显示一个非常简单的测试画面。你可以选择任何一个测试项目。你可以通过键盘或者鼠标来调试测试。查看测试报告：在测试结束后，单击"查看测试报告"按钮。测试报告会显示在测试结束后的浏览器中。

<!-- more -->

## 安装 Install

### 非 VS Code 编辑器安装

- 新建项目文件
- 使用命令行工具进入新建的项目文件夹
- 输入命令进行项目初始化
  `npm init playwright@latest`
- 按照提示进行项目初始化
- 安装完成后的目录结构为

```TEXT
playwright.config.ts //playwright.config.ts的配置文件
package.json //node项目的配置文件
package-lock.json //node项目的配置文件
tests/
example.spec.ts //测试demo
tests-examples/
demo-todo-app.spec.ts //todo app的测试demo
```

### VS Code 编辑器安装

- 新建项目文件
- 使用 VS Code 编辑器打开新建的项目文件夹
- 在 VS Code 编辑器安装 Playwright Test for VSCode 插件
- 然后在 VS Code 编辑器的命令面板上输入

```
Install Playwright
```

- 按照提示进行项目初始化
- 安装完成后的目录结构为

```
playwright.config.ts //playwright.config.ts的配置文件
package.json //node项目的配置文件
package-lock.json //node项目的配置文件
tests/
example.spec.ts //测试demo
tests-examples/
demo-todo-app.spec.ts //todo app的测试demo
```

## 运行测试 Run test

### VS Code 运行

#### 通过 Playwright Test for VSCode 插件运行

- 通过 VS Code 打开项目文件后
- 点击 VS Code 左侧的 Testing(漏斗) 按钮
- Testing 页面下会展示所有的 demo 测试用例
- 点击绿色三角形就可以运行 demo 测试用例了
  `可以点击是否选中'show browser'来控制是否无头浏览器运行用例和打开浏览器运行用例`

#### 测试文件运行

- 通过 VS Code 打开项目文件后
- 点击打开 demo 测试文件
- 点击测试块旁边的绿色三角形
- 就可以运行测试来运行单个测试

### 命令行运行

- 运行所有测试
  ```
  npx playwright test
  ```
- 运行单个测试文件

  ```
  npx playwright test landing-page.spec.ts
  ```

- 运行一组测试文件
  ```
  npx playwright test tests/todo-page/ tests/landing-page/
  ```
- 运行文件名中有`landing`或`login`的文件
  ```
  npx playwright test landing login
  ```
- 运行带有标题的测试
  ```
  npx playwright test -g "add a todo item"
  ```
- 在引导模式 (打开浏览器) 下运行测试
  ```
  npx playwright test landing-page.spec.ts --headed
  ```
- 在特定项目上运行测试
  ```
  npx playwright test landing-page.ts --project=chromium
  ```

## 调试 Debug

`由于 Playwright 在 Node.js 中运行，您可以使用您选择的调试器对其进行调试，例如使用`console.log`或在您的 IDE 内部或直接在 VS 代码中使用[VS 代码扩展](https://playwright.dev/docs/getting-started-vscode)。Playwright 带有[Playwright Inspector](https://playwright.dev/docs/debug#playwright-inspector)，它允许您单步执行 Playwright API 调用，查看他们的调试日志并探索[选择器](https://playwright.dev/docs/selectors)。`

### 命令行调试

- 调试所有测试：

  ```Shell
  npx playwright test --debug
  ```

- 调试一个测试文件：

  ```Shell
  npx playwright test example.spec.ts --debug
  ```

- 从`test(..`定义的行号调试测试：

  ```Shell
  npx playwright test example.spec.ts:42 --debug
  ```

### VS code 调试

#### 通过 Playwright Test for VSCode 插件调试

- 通过 VS Code 打开项目文件后
- 点击 VS Code 左侧的 Testing(漏斗) 按钮
- Testing 页面下会展示所有的 demo 测试用例
- 点击第二个运行按钮就可以调试 demo 测试用例了
  `可以之前在想要调试的测试脚本文件中提前打一些断点`

#### 测试文件运行

- 通过 VS Code 打开项目文件后
- 点击打开 demo 测试文件
- 选中测试代码块，然后右键选择 debug test 就可以调试测试用例了

## 测试报告 Test report

- 命令行输入如下命令，就可以打开 html 版本的测试报告

```Shell
npx playwright show-report
```

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->