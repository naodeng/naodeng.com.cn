+++
author = "nao.deng"
title = "Cypress UI 自动化测试框架学习（5）- 命令大全"
date = "2022-05-12"
description = "文章介绍 UI 自动化测试框架学习（5）- 命令大全"
tags = [
"自动化测试","cypress"
]
+++

## Cypress UI 自动化测试框架学习（5）- 命令大全

### 命令大全

- and：创建断言
- as：创建别名
- blur：失去焦点
- check：选中 check 或者 radio
- children：获取一组 DOM 元素中每个元素的子元素
- clear：清除 input 或者 textarea 的值
- clearCookie：清除特定的浏览器 cookie
- clearCookies：清除浏览器的所有 cookie
- clearLocalStorage：清除 localstorage 的数据
- click：点击 DOM 元素
- clock：覆盖全局与时间相关的函数
- closest：获取与选择器匹配的第一个 DOM 元素
- contains：获取包含文本的 DOM 元素
- dblclick：双击 DOM 元素
- debug：设置调试器并记录上一个命令产生的内容
- document：获取 `window.document` 对象
- each：迭代数组结构
- end：结束一系列命令
- eq：在元素数组中获取特定索引的 DOM 元素
- exec：执行系统命令
- filter：获取特定选择器匹配的元素
- find：查找特定选择器的特定后代元素
- first：获取一组 DOM 元素中的第一个 DOM 元素
- fixture：加载文件中的数据集
- focus：使一个 DOM 元素获取焦点
- focused：获取当前获取焦点的 DOM 元素
- get：通过选择器或者别名获取一个或者多个 DOM 元素
- getCookie：获取浏览器的特定 cookie
- getCookies：获取浏览器的所有 cookie
- go：前进或者后退
- hash：获取当前页面地址的哈希值
- hover：**不存在这个命令**
- invoke：在前边生成的主题上调用函数
- its：获取前边生成的主题的属性值
- last：获取一组 DOM 元素的最后一个 DOM 元素
- location：获取活动页面的 `window.location` 对象
- log：打印 cypress 日志信息
- next：获取紧接的下一个兄弟 DOM 元素
- nextAll：获取所有兄弟 DOM 元素
- nextUntil：获取一组匹配的 DOM 元素中的每个后续兄弟元素，不包括提供的元素
- not：过滤 DOM 元素
- parent：获取父元素
- parents：获取所有的父元素
- parentsUntil：获取所有的父元素，不包括提供的元素
- pause：暂停执行 cypress 命令
- prev：获取前一个兄弟节点
- prevAll：获取前边的所有兄弟节点
- prevUntil：获取前边所有的兄弟节点，不包括提供的元素
- readFile：读取文件内容
- reload：重新加载页面
- request：发送 HTTP 请求
- root：获取页面根节点
- route：管理网络请求的行为
- screenshot：生成截图
- scrollIntoView：将元素滚动到视图中
- scrollTo：滚动到特定位置
- select：选择 select 中的 option
- server：启动服务器开始讲响应路由到 `cy.route()` 和 `cy.request()`
- setCookie：设置浏览器 cookie
- should：创建断言，同 `and()`
- siblings：获取兄弟 DOM 元素
- spread：将数组扩展为多个参数
- spy：包装方法，记录函数的调用和参数
- stub：替换函数，记录其用法并控制其行为
- submit：提交一个表单
- task：通过 `task` 插件，在 Node.js 中执行代码
- then：使用上一个命令产生的结果
- tick：移动时间
- title：获取活动页面的 `document.title`
- trigger：触发 DOM 元素上的事件
- type：给 DOM 元素输入内容
- uncheck：取消选中复选框
- url：获取当前活动页面的 URL
- viewport：控制应用程序的屏幕大小和方向
- visit：访问远程 URL
- wait：等待方法
- window：获取当前活动窗口的 `window` 对象
- within：将后续命令限制在此元素内
- wrap：产生传递给 `.wrap()` 的对象
- writeFile：写入指定内容到文件

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->