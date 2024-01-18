---
author:  "nao.deng"
title:  "K6 性能测试教程 - 进阶用法：如何快速编写 K6 性能测试脚本"
date: "2024-01-19T17:10:00+08:00"
summary:  "这篇博文深入介绍了在进行 K6 性能测试时，除了传统的 JavaScript 编写脚本方式外，还介绍了 K6 提供的多种快捷方式。首先，通过 K6 提供的 Test Builder 测试生成器工具，读者能够轻松快捷地生成性能测试脚本，简化了脚本编写过程。其次，博文介绍了使用 K6 Recorder 录制器的方法，通过录制操作生成脚本，省去手动编写的步骤。最后，读者还能了解到使用浏览器开发者工具获取 HAR 文件，并通过 har-to-k6 工具将其转换为 K6 脚本的技巧。通过本文，读者将更全面地了解 K6 性能测试工具的灵活性和多样化的脚本编写方式。"
ZHtags: ["进阶用法", "快速编写性能测试脚本"]
ZHcategories: ["性能测试", "k6"]
ZHseries: ["K6 性能测试教程"]
ShowWordCount: true
---

## 如何快速编写 K6 性能测试脚本

我们除了可以使用 JavaScript 编写 K6 性能测试脚本外，K6 还提供了多种快捷的方式来编写性能测试脚本。

- 1.使用 K6 提供的 Test builder 测试生成器工具来编写脚本
- 2.使用 K6 Recorder 录制器录制脚本
- 3.使用 浏览器开发者工具获取 HAR 文件后使用 har-to-k6 工具将 HAR 文件转换为 K6 脚本

下面将分别介绍这三种方式。

### 使用 K6 提供的 Test builder 测试生成器工具来编写脚本

k6 的 Test builder 测试生成器提供了一个图形界面，可根据您的输入生成 k6 测试脚本。然后，您可以复制测试脚本并从 CLI 运行测试。

> Test builder 测试生成器目前还是一个实验性的功能，可能会在未来的版本中发生变化。大家可以查看官方文档：[https://k6.io/docs/using-k6/test-builder/](https://k6.io/docs/using-k6/test-builder/)获取更多信息

#### 安装 Test builder 测试生成器

Test builder 不需要安装，它是 Grafana Cloud k6 提供的一个功能，可以在浏览器中使用。

需要注册一个 Grafana Cloud k6 账号，然后登录 Grafana Cloud。

如何进入 Test builder 测试生成器界面：

- 登录进入 Grafana Cloud 首页

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/66TXQ3.png)

- 依次点击左侧菜单栏上的 Testing & synthetics--->Performance--->Projects
- 然后选择 default project 或者新建一个 project，进入到项目的详情页面
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/Ynx49y.png)
- 点击页面上的 Start testing 按钮，然后再选择页面下的 Test builder，进入到 Test builder 测试生成器界面
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/GgzyK7.png)

> 提醒：由于 Test builder 测试生成器是 Grafana Cloud 上登录进行使用，可能 Grafana Cloud 存储一些敏感数据，所以建议大家不要在生产环境中使用 Test builder 测试生成器。

#### 如何使用 Test builder 测试生成器

- 1.在 Test builder 测试生成器界面，点击 Scenario_1 下的 Options 按钮进入到配置页面，配置测试场景的基本信息，如下图所示：
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/JvABl9.png)

> 可以看到场景配置页面提供了多种配置选项，可以根据自己的需求进行配置场景名称，执行器类型和不同的 UV 配置。

- 2.在 Test builder 测试生成器界面，点击 Scenario_1 下的 Requests 按钮进入到 Requests 管理页面，如下图所示：
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ohtOQD.png)

- 3.点击页面下的 Request 按钮进入添加请求页面，如下图所示：
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/BFSEME.png)

- 4.在添加请求页面，输入请求的 URL 地址，再根据实际情况添加请求的 headers 或请求的 body 或检查点等参数，然后点击页面上的 Create 按钮，完成性能场景的配置，如下图所示：
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/inCNCz.png)

#### 获取 Test builder 测试生成器生成的脚本

在 Test builder 测试生成器界面，点击页面上的 Script 按钮，页面就会展示出 Test builder 测试生成器生成的脚本，如下图所示：

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/rh3Qfr.png)

> 可以看到 Test builder 测试生成器生成的脚本，是一个完整的 K6 测试脚本，可以直接复制到本地，然后使用 k6 运行该脚本。

#### 运行 Test builder 测试生成器生成的脚本

在 Test builder 测试生成器界面，点击页面上的 Run Test 按钮，页面就会展示出 Test builder 测试生成器生成的脚本的运行结果，如下图所示：

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/yFuEyu.png)

> 可以看到 Test builder 测试生成器生成的脚本运行的很详细的测试结果信息。

#### 其他 Test builder 测试生成器的功能

- 也支持导入 HAR 文件生成测试脚本
- 也支持多个 scenario 场景的配置和一个 scenario 场景的多个请求的配置

更多关于 Test builder 测试生成器的内容，请参考官方文档：[https://grafana.com/docs/grafana-cloud/k6/author-run/test-builder/](https://grafana.com/docs/grafana-cloud/k6/author-run/test-builder/)

### 使用 K6 Recorder 录制器录制脚本

K6 Recorder 录制器是 K6 提供的一个浏览器扩展程序，可以在浏览器中录制用户与 Web 应用程序的交互，并将其转换为 k6 测试脚本。

#### 安装 K6 Recorder 录制器

K6 Recorder 录制器是一个浏览器扩展程序，可以在 Chrome 或 Firefox 中使用。您可以从 Chrome Web Store 或 Firefox Add-ons 页面安装它。

- Chrome Web Store 安装地址：[https://chrome.google.com/webstore/detail/grafana-k6-browser-record/fbanjfonbcedhifbgikmjelkkckhhidl](https://chrome.google.com/webstore/detail/grafana-k6-browser-record/fbanjfonbcedhifbgikmjelkkckhhidl)

- Firefox Add-ons 安装地址：[https://addons.mozilla.org/en-US/firefox/addon/grafana-k6-browser-recorder/](https://addons.mozilla.org/en-US/firefox/addon/grafana-k6-browser-recorder/)

安装完成后，就可以在浏览器中使用 K6 Recorder 录制器了。

#### 如何使用 K6 Recorder 录制器

- 1. 在浏览器上点击打开 k6 Recorder 录制器扩展。
- 2. 选择保存自动生成的脚本的位置。
  - 要将其保存在本地计算机上，请选择"我不想在云中保存测试"(后面的例子我选择的这个选项)。
  - 要将其保存到任何 Grafana Cloud k6 项目中，请选择“登录”。
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/yj75Ef.png)
- 3. 选择保存脚本位置后，在当前浏览器选项卡输入测试网站地址，点击选择开始录制按钮以开始录制当前浏览器选项卡。
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/6NjHGS.png)

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/KFMDWX.png)

> 图中我打开了谷歌的首页并点击了搜索框，输入了 123，然后点击了搜索按钮，

- 4. 点击了 k6 Recorder 录制器的停止录制按钮停止录制。
- 5. 将录制的文件取名保存在本地（我这里取名为 record-demo.har）。
- 6. 使用 har-to-k6 工具将 HAR 文件转换为 K6 脚本。
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2nRtpW.png)

> har-to-k6 工具是一个命令行工具，可以将 HAR 文件转换为 k6 脚本。需要先通过 `npm install -g har-to-k6`安装 har-to-k6 工具，然后通过 `har-to-k6 record-demo.har -O record-demo.js`命令将 HAR 文件转换为 K6 脚本。

- 7. 转换后的 K6 脚本部分截图如下所示：
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ldC2kl.png)

- 8. 大家可以根据自己的需求对转换后的 K6 脚本进行修改，然后使用 k6 运行该脚本。
- 9. 使用 k6 运行转换后的 K6 脚本，查看运行结果。
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/jUpYWj.png)

更多关于 K6 Recorder 录制器的内容，请参考官方文档：[https://grafana.com/docs/k6/latest/using-k6/test-authoring/create-tests-from-recordings/using-the-browser-recorder/](https://grafana.com/docs/k6/latest/using-k6/test-authoring/create-tests-from-recordings/using-the-browser-recorder/)

### 使用浏览器开发者工具和 har-to-k6 工具生成 K6 脚本

除了我们可以使用 K6 Recorder 录制器来录制脚本外，我们还可以使用浏览器开发者工具获取测试请求的 HAR 文件，然后使用 har-to-k6 工具转换 HAR 文件来生成 K6 脚本。

#### 可以获取 HAR 文件的浏览器和工具

我们可以根据实际情况选择一个工具来记录 HAR 文件。市面上的很多浏览器和工具可以以 HAR 格式导出 HTTP 流量。大家常用的是：

- Chrome 浏览器
- Firefox 浏览器
- Microsoft Edge 浏览器
- Charles 代理抓包工具 (HTTP proxy/recorder)
- Fiddler 代理抓包工具 (HTTP proxy/recorder)

#### 如何使用浏览器开发者工具获取 HAR 文件

下面是使用 Chrome 浏览器开发者工具获取测试请求 HAR 文件例子：

- 在 Chrome 中打开新的隐身窗口。 （可以排除登录 cookies 等干扰信息）。
- 打开 Chrome 开发者工具（按 F12）。
- 选择网络选项卡 Network。
- 检查和确认录音按钮（圆形按钮）是否已激活（红色）。
- 如果想要记录多个连续的页面加载，请选中“保留日志”复选框。
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/1RDeqJ.png)

- 输入测试网站的 URL（如 <https://www.google.com/>），然后开始执行和后续模拟用户执行的操作（如输入 123 进行搜索）。

- 完成后，在 Chrome 开发人员工具中，右键单击 URL 并选择“将内容另存为 HAR”。
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/WBsOXl.png)

- 选择保存 HAR 文件的位置并重命名（如 har-demo），然后点击保存按钮，完成 HAR 文件的保存。

#### 使用 har-to-k6 进行转换 HAR 文件

- 1. 安装 har-to-k6 工具

  - 通过 `npm install -g har-to-k6`命令安装 har-to-k6 工具。

- 2. 使用 har-to-k6 工具将 HAR 文件转换为 K6 脚本

  - 通过 `har-to-k6 har-demo.har -O har-demo.js`命令将 HAR 文件转换为 K6 脚本。
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/UIKobM.png)

- 3. 转换后的 K6 脚本部分截图如下所示：
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/1OWWG0.png)

- 4. 大家可以根据自己的需求对转换后的 K6 脚本进行修改，然后使用 k6 运行该脚本。
- 5. 使用 k6 运行转换后的 K6 脚本，查看运行结果。
![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/9BLD7D.png)

更多关于 HAR 文件的内容，请参考官方文档：[https://grafana.com/docs/k6/latest/using-k6/test-authoring/create-tests-from-recordings/using-the-har-converter/](https://grafana.com/docs/k6/latest/using-k6/test-authoring/create-tests-from-recordings/using-the-har-converter/)

## 参考文档

- [K6 文档：https://k6.io/docs/](https://k6.io/docs/)
- [k6 官方网站：https://k6.io/](https://k6.io/)
- [K6 性能测试快速启动项目：https://github.com/Automation-Test-Starter/K6-Performance-Test-starter/](https://github.com/Automation-Test-Starter/K6-Performance-Test-starter)
