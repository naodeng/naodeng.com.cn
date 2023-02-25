---
title: "Cypress UI 自动化测试框架学习（3）- 元素定位，操作和断言"
date: 2022-05-10T09:49:24+08:00
tags:
- 自动化测试
- cypress
categories : [
"软件测试",
]
description: 文章介绍如何去使用 cypress 的元素定位、操作和断言
---

下面的信息是对于框架学习第 3 篇的介绍。在该篇文章中，我们学习了如何使用元素定位、操作和断言。该框架可以帮助用户定位相关的元素，并且可以帮助用户进行操作。这些操作可以帮助用户断言事件。

<!-- more -->

## 元素定位

谈到 UI 自动化测试，不管是 web 端还是移动端，页面元素的各种操作在编写测试脚本时都会涉及，如果想写出高通过率和高健壮性的自动化测试用例，必须要确保正确高效的页面元素识别和使用。

cypress 框架除了支持常用的元素定位，还提供了好用的 JQuery css 选择器。

下面会介绍常用的元素定位方法，常用的定位方式，以及框架自带可视化自助元素定位方法

### 常用元素定位

#### #id 定位

- 描述：通过元素的 id 属性来定位

- 前提：定位的元素 css 样式须存在 id 属性且唯一

`//元素前端代码示例 <input type="text" id="email" name="email" placeholder="" class="form-control">`

- 示例代码
  `cy.get('#email')`

#### .class 定位

- 描述：通过元素的 class 属性来定位

- 前提：定位的元素 css 样式存在 class 属性且唯一

`//元素前端代码示例 <a class="navbar-brand" href="/"><img width="150" height="28" border="0" align="default" alt="光谷社区" src="http://cdn.guanggoo.com//static/images/guanggoonew.png"></a>`

- 示例代码

`cy.get('.navbar-brand')`

#### name 定位

- 描述：通过元素 name 定位

- 前提：定位的元素 css 样式存在 name 属性且唯一
  `//元素前端代码示例 <input type="text" id="email" name="email" placeholder="" class="form-control">`

- 示例代码

`cy.get('input[name="email"]')`

### 常用定位方式

#### .get()

- 描述：使用 get() 定位元素，定位元素用 CSS selectors，跟 jQuery 一样
- 示例代码

`cy.get('#email')`

#### .contains()

- 描述：可以使用 cy.contains（）根据元素的内容找到元素

- 示例代码

`cy.contains(‘value’) cy.get(‘div[name=“div_name”]’).contains(‘value’)`

#### .within()

- 描述：可以在特定的 DOM 元素中找到元素

- 示例代码

`cy.get('.query-form').within(() => { cy.get('input:first').should('have.attr', 'placeholder', 'Email') cy.get('input:last').should('have.attr', 'placeholder', 'Password') })`

#### Cypress.$

- 描述：Cypress 也提供了 JQuery 选择器，调用 Cypress.$('button'）会自动在您的窗口中查询元素。换句话说，Cypress 会自动将文档设置为您当前通过 cy.visit() 导航到的任何内容，这是从开发人员工具调试时同步查询元素的好方法。

- 示例代码

`Cypress.$(selector) // other proxied jQuery methods Cypress.$.Event Cypress.$.Deferred Cypress.$.ajax Cypress.$.get Cypress.$.getJSON Cypress.$.getScript Cypress.$.post`

### 框架自带可视化自助元素定位

- 1.前提：demo 代码已经跑起来 (运行脚本：npm run cypress:open)

![](https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601152305.png)

- 2.点击运行调试用例，进入定位元素对应的页面

![](https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601152419.png)

- 3.在页面上选择瞄准镜标识（open selector playground）

- 4.选择页面上的元素区域，元素的定位信息就会展示在定位信息展示区域，点击复制就可使用

![](https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601152904.png)

## 元素常用操作

### .click()

- 描述：单击

- 示例代码

`cy.get('.btn-success').click()`

### .type(value)

- 描述：输入内容

- 示例代码
  ` `cy.get(‘input[name=“username”]’).type('dengnao.123@163.com')``

### .clear()

- 描述：清空输入内容

- 示例代码

`cy.get(‘[type=“text”]’).clear()`

### .submit()

- 描述：提交表单

- 示例代码

`cy.get(‘.ant-input’).submit()`

### .dbclick()/.rightclick()

- 描述：鼠标双击操作/鼠标右击操作

- 示例代码

`cy.get('.menu').rightclick() // 鼠标右击 .menu 菜单元素`

### .select()

- 描述：针对<select>元素选择一个选项

- 示例代码

`cy.get('color').select('red') // 颜色选项中选择红色`

### .check()/.uncheck()

- 描述：单选或多选进行勾选/取消选中 (反选)

- 示例代码

`cy.get('[type="checkbox"]').check() // 对 checkbox 进行选中操作 cy.get('[type="checkbox"]').uncheck() // 对 checkbox 进行取消选中操作`

### .focus()/.blur()

- 描述：对选项进行聚焦/失焦操作

- 示例代码

`cy.get(‘input[name=“username”]’).focus() //对于用户名输入框进行聚焦操作`

## 断言

### BDD 断言

#### 断言类型

##### .should()：

- 描述：创建断言，断言会自动重试，直到它们通过或超时。

- 示例代码

`cy.get(‘.ant-checkbox).should(‘be.checked’)`

##### .expect()：

- 描述：预期结果

- 示例代码

`expect(name).to.not.equal(‘dengnao.123@163.com’)`

#### 常用断言

> 可参考官网文档:https://docs.cypress.io/guides/references/assertions#BDD-Assertions

![](https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601161229.png)

### TDD 断言

#### 断言类型

##### .assert()：

- 描述：断言

- 示例代码

`assert.equal(3,3,’vals equal’)`

#### 常用断言

> 可参考官网文档:https://docs.cypress.io/guides/references/assertions#TDD-Assertions

![](https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601161926.png)

### 常用断言

#### 针对长度（length）的断言

    `//重试，直到找到 3 个匹配的<li.selected>
    cy.get('li.selected').should('have.length',3)`

#### 针对类（Class）的断言

    `//重试，直到 input 元素没有类被 disabled 为止（或者超时为止）
    cy.get('from').fijd('input').should('not.have.class','disabled')`

#### 针对值（Value）断言

    `//重试，直到 textarea 的值为‘iTesting’
    cy.get('textarea').should('have.value','iTesting')`

#### 针对文本内容（Text Content）的断言

` //重试，直到这个 span 不包含“click me”字样 cy.get('a').parent('span.help').should('not.contain','click me') //重试，直到这个 span 包含“click me”字样 cy.get('a').parent('span.help').should('contain','click me')`

#### 针对元素可见与否（Visibility）的断言

`//重试，直到这个 button 是可为止 cy.get('button').should('be.visible')`

#### 针对元素存在与否（Existence）的断言

`//重试，直到 id 为 loading 的 spinner 不在存在 cy.get('#loading').should('not.exist')`

#### 针对元素状态的（status）的断言

    `//重试，直到这个 radio button 是选中状态
    cy.get('：radio').should('be.checked')`

#### 针对 CSS 的断言

    `//重试，直到 completed 这个类有匹配的 css 为止
    cy.get('.completed').should('have.css','text-decoration','line-through')`

## 运行出错问题记录

#### 运行 npm run cypress:open 报错，提示 No version of Cypress is installed

##### 报错截图如下：

![](https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601150230.png)

##### 修复方式

`//项目根目录下运行如下命令即可解决 ./node_modules/.bin/cypress install`

##### 原因

电脑使用过清理软件，安装的 cypress 缓存信息被删除了，重新安装就好

#### 运行 npm run cypress:open 报错，提示 Cypress verification timed out

##### 报错截图如下：

![](https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601151647.png)

##### 修复方式

重新运行 npm run cypress:open 尝试即可

##### 原因

电脑 cypress 验证超时了，一般重新操作即可恢复
