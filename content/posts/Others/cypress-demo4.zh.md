+++
author = "nao.deng"
title = "Cypress UI 自动化测试框架学习（4）- 数据驱动，方法封装参数化和测试框架"
date = "2022-05-11"
description = "文章介绍如何去使用 cypress 的数据驱动方法封装参数化和测试框架"
tags = [
"自动化测试","cypress"
]
+++

下面的信息是自动化测试框架学习第四篇数据驱动方法封装参数化和测试框架的介绍。
在自动化测试框架学习中，有很多方法可以用来驱动测试框架。例如，数据驱动方法封装参数化和测试框架。这两个方法都可以将测试框架的数据处理和预设环境等现有模型结合起来。这样就可以方便地开发、测试和运行新的测试框架。

<!-- more -->

## 测试数据驱动

### js 格式测试数据驱动

#### 简介

数据以 js 格式存储，使用 js 的 import 方法导入使用

#### 使用方法

##### 新建测试数据 js 文件

- 示例：在项目的 cypress/integration 文件夹下新建 testData 目录，然后在该目录下创建一个 js 文件，示例文件名为：testLogin.data.js

- testLogin.data.js 示例代码如下：

```//账号密码记得换成自己的
export const testLoginUserEmail = [

    {
        summary: "正确邮箱账号登录验证",
        username:"dengnao.123@163.com",
        password:"xxxx"
    }
]
export const testLoginUserId = [

    {
        summary: "正确id账号登录验证",
        username:"waitnoww",
        password:"xxxx"
    }
]
export const testLoginUserMobilephone = [

    {
        summary: "正确手机号账号登录验证",
        username:"18888139031",
        password:"xxxx"
    }
]
```

##### 编写测试用例

- 在项目 cypress/integration 文件夹下新建 js 测试用例文件，示例文件名为：testLogin_guanggoo_data_by_js.js

- 示例代码如下：

```// 导入 js 文件获取测试数据
import {
testLoginUserEmail,
testLoginUserId,
testLoginUserMobilephone
} from "./testData/testLogin.data";

// 测试用例
describe("光谷社区登录验证", function () {

    // 执行用例执行用例之前先进入首页
    beforeEach(function () {
        // 访问并登录光谷社区
        cy.visit('http://www.guanggoo.com/') //访问url
        cy.url().should('include', 'www.guanggoo.com') //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面
        cy.title().should('contain', '光谷社区') //验证页面 title 是否正确
    })

    //正确邮箱账号登录
    it(testLoginUserEmail[0].summary, function () {
        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
        cy.url().should('include', 'login') //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
            .type(testLoginUserEmail[0].username) //输入邮箱用户名
        cy.get('#password') //根据 css 定位密码输入框
            .type(testLoginUserEmail[0].password) //输入密码
        cy.get('.btn-success').click() //点击登录按钮
        cy.get('.ui-header > .username')
            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确
    }),

    //正确ID账号登录
    it(testLoginUserId[0].summary, function () {
        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
        cy.url().should('include', 'login') //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
            .type(testLoginUserId[0].username) //输入ID用户名
        cy.get('#password') //根据 css 定位密码输入框
            .type(testLoginUserId[0].password) //输入密码
        cy.get('.btn-success').click() //点击登录按钮
        cy.get('.ui-header > .username')
            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确
    }),

    //正确手机账号登录
    it(testLoginUserMobilephone[0].summary, function () {
        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
        cy.url().should('include', 'login') //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
            .type(testLoginUserMobilephone[0].username) //输入手机号用户名
        cy.get('#password') //根据 css 定位密码输入框
            .type(testLoginUserMobilephone[0].password) //输入密码
        cy.get('.btn-success').click() //点击登录按钮
        cy.get('.ui-header > .username')
            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确
    })

        // 执行用例执行用例之后清除登录信息
        afterEach(function () {
            // 清除cookies
            cy.clearCookies()
        })
})
```

##### 运行测试用例

- 运行脚本：npm run cypress:open
- 点击运行 testLogin_guanggoo_data_by_js.js 用例
- 查看运行结果 (测试数据能正常获取到)

### fixture 测试数据驱动介绍

> fixture 数据驱动方式是 cypress 框架推荐的方法，支持的格式也很多，如.json/txt/html/jpg/gif/mp3/zip 等，具体可参考：https://docs.cypress.io/api/commands/fixture

#### 简介

Cypress 使用 cypress/fixture 目录存放 json 文件数据，cy.fixture() 加载测试数据，如果不指定文件路径，默认从 cypress/fixtures 文件下去查找，也可以自己设置文件路径

#### 使用方法

> 以 json 格式读取举例介绍

##### 新建测试数据 json 文件

- 示例：在项目的 cypress/fixtures 文件夹下新建一个 json 文件，示例文件名为：testLoginData.json

- testLoginData.json 示例代码如下（账号密码记得换成自己的）：

```{
"testLoginUserEmail": {
"summary": "正确邮箱账号登录验证",
"username": "dengnao.123@163.com",
"password": "xxxx"
},
"testLoginUserId": {
"summary": "正确 id 账号登录验证",
"username": "waitnoww",
"password": "xxxx"
},
"testLoginUserMobilephone": {
"summary": "正确手机号账号登录验证",
"username": "18888889031",
"password": "xxxx"
}
}
```

##### 编写测试用例

- 在项目 cypress/integration 文件夹下新建 js 测试用例文件，示例文件名为：testLogin_guanggoo_data_by_fixture.js

- 示例代码如下：

```// 测试用例
describe("光谷社区登录验证", function () {

    // 执行用例执行用例之前先进入首页
    beforeEach(function () {
        // 访问并登录光谷社区
        cy.visit('http://www.guanggoo.com/') //访问url
        cy.url().should('include', 'www.guanggoo.com') //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面
        cy.title().should('contain', '光谷社区') //验证页面 title 是否正确
        // 获取测试数据
        cy.fixture('testLoginData.json').as('loginData')
    })

    //正确邮箱账号登录
    it("正确邮箱账号登录验证", function () {
        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
        cy.url().should('include', 'login') //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
            .type(this.loginData.testLoginUserEmail.username) //输入邮箱用户名
        cy.get('#password') //根据 css 定位密码输入框
            .type(this.loginData.testLoginUserEmail.password) //输入密码
        cy.get('.btn-success').click() //点击登录按钮
        cy.get('.ui-header > .username')
            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确
    }),

    //正确ID账号登录
    it("正确id账号登录验证", function () {
        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
        cy.url().should('include', 'login') //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
            .type(this.loginData.testLoginUserId.username) //输入ID用户名
        cy.get('#password') //根据 css 定位密码输入框
            .type(this.loginData.testLoginUserId.password) //输入密码
        cy.get('.btn-success').click() //点击登录按钮
        cy.get('.ui-header > .username')
            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确
    }),

    //正确手机账号登录
    it("正确手机号账号登录验证", function () {
        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
        cy.url().should('include', 'login') //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
            .type(this.loginData.testLoginUserMobilephone.username) //输入手机号用户名
        cy.get('#password') //根据 css 定位密码输入框
            .type(this.loginData.testLoginUserMobilephone.password) //输入密码
        cy.get('.btn-success').click() //点击登录按钮
        cy.get('.ui-header > .username')
            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确
    })

        // 执行用例执行用例之后清除登录信息
        afterEach(function () {
            // 清除cookies
            cy.clearCookies()
        })

})
```

##### 运行测试用例

- 运行脚本：npm run cypress:open
- 点击运行 testLogin_guanggoo_data_by_fixture.js 用例
- 查看运行结果 (测试数据能正常获取到)

## 方法封装参数化

### 简介

cypress 框架提供了一个 commands.js 可以自定义各种命令，用来封装各种通用方法，参数化方法，常用脚本等；

将常用的通用方法如登录方法在 cypress/support/commands.js 中编写完成之后，与 cy.get()/cy.visit() 一样，可以直接用 cy.xxx() 形式调用，非常方便，减少维护成本

### 使用介绍

> 示例会介绍常用的参数化登录命令和进入首页命令

#### 登录参数化登录封装

##### 代码编写

- 打开 cypress/support/commands.js 文件
- 输入如下代码：

```//将用户名和密码进行登录参数化
Cypress.Commands.add("login",(username,password) => {
cy.clearCookies() //清除 cookies,保证页面为未登录状态
cy.visit('http://www.guanggoo.com/') //访问 url
cy.url().should('include', 'www.guanggoo.com') //验证目标 url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面
cy.title().should('contain', '光谷社区') //验证页面 title 是否正确
cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
cy.url().should('include', 'login') //验证正确跳转到登录页面
cy.get('#email') //根据 css 定位用户名输入框
.type(username) //输入参数化的用户名
cy.get('#password') //根据 css 定位密码输入框
.type(password) //输入参数化的密码
cy.get('.btn-success').click() //点击登录按钮
cy.get(':nth-child(2) > .nav-collapse').should('contain', '设置') //验证登录成功回到首页，设置按钮展示正确
})
```

#### 代码使用

- 在测试用例中可直接进行方法调用 cy.login(username,password) 换成自己的账号密码进行登录操作了

```// 账号密码须换成正确可用的
cy.login("dengnao.123@163.com","xxxx")
```

#### 进入首页方法封装

##### 代码编写

- 打开 cypress/support/commands.js 文件
- 输入如下代码：

```//进入首页
Cypress.Commands.add("initHomePage",() => {
cy.visit('http://www.guanggoo.com/') //访问 url
cy.url().should('include', 'www.guanggoo.com') //验证目标 url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面
cy.title().should('contain', '光谷社区') //验证页面 title 是否正确
})
```

#### 代码使用

- 在测试用例中可直接进行方法调用 cy.initHomePage() 即可进入首页

```// 进入首页
cy.initHomePage()
```

## 测试框架介绍

### 简介

Cypress 框架采用了 Mocha 框架的语法，故 Mocha 框架的测试语法可在 cypress 上直接使用

### 语法介绍

#### describe()

定义测试套件，里面还可以定义多个 context 或 it

#### context()

定义测试套件，是 describe() 的别名，可以替代 describe

#### it()

定义测试用例

#### before()

在一个测试套件中的所有测试用例之前执行，设置一些运行 testcase 的前置条件

```before(function() {
// runs once before the first test in this block
});
```

#### beforeEach()

在每个测试用例之前执行

```beforeEach(function () {
        // 访问并登录光谷社区
        cy.visit('http://www.guanggoo.com/') //访问url
        cy.url().should('include', 'www.guanggoo.com') //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面
        cy.title().should('contain', '光谷社区') //验证页面 title 是否正确
    })
```

#### afterEach()

在每个测试用例之后执行，可以执行清除数据等操作

```afterEach(function () {
// 清除 cookies
cy.clearCookies()
})
```

#### after()

在一个测试套件中的所有测试用例之后执行

```after(function() {
// runs once after the last test in this block
});

```

#### .only()

设置只执行某个 testcase/testsuite

```describe('Array', function() {
describe.only('#indexOf()', function() {
// ...
});
});
```

#### .skip()

设置跳过执行某个 testcase/testsuite

```describe('Array', function() {
describe('#indexOf()', function() {
it.skip('should return -1 unless present', function() {
// this test will not be run
});

    it('should return the index when present', function() {
      // this test will be run
    });

});
});
```

### 参考网址

- https://docs.cypress.io/guides/references/bundled-tools#Mocha

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->