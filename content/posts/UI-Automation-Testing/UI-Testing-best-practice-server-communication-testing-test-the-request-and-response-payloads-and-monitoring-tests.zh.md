---
author: "nao.deng"
title:  "UI 测试最佳实践的服务通信测试：检验请求和响应负载，测试监控"
date:  "2024-01-21T17:06:44+08:00"
summary:  "这篇博文深入探讨了 UI 测试最佳实践中的服务通信测试，重点关注请求和响应负载的验证以及测试监控。读者将学到如何有效检验 UI 与服务之间的请求和响应负载，以确保系统交互的正确性和可靠性。博文还介绍了在 UI 测试中如何进行监控，以及监测服务通信过程中的性能和可用性。通过这些实践，读者能够更全面地覆盖 UI 测试中的服务通信方面，提高测试的全面性和准确性，确保系统的正常运行。"
ZHtags: ["检验请求", "响应负载", "测试监控"]
ZHcategories:  ["UI 测试", "服务通信测试"]
ZHseries: ["UI 测试最佳实践"]
ShowWordCount: true
---

文章由 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices) 内容翻译而来，大家有条件的话可以去 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices)阅读原文。

## 检验请求和响应负载

原文链接:<https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/server-communication-testing/test-request-and-response-payload.md>

### 一段简要说明

前端应用因与后端通信不协调而导致停止工作的频率有多高？

前端应用和后端应用之间存在一份合同，你始终需要测试合同是否得到遵守。每一次前后端应用之间的通信都由以下几个方面定义：

- 请求的 URL
- 所使用的 HTTP 动词（GET、POST 等）
- 请求的有效负载和标头：前端应用发送给后端应用的数据
- 响应的有效负载、标头和状态：后端应用发送回前端应用的数据

你需要对所有这些方面进行测试，更广义地说，你需要等待每个相关的 AJAX 请求，为什么呢？

- 相关的 XHR 请求是你正在测试的应用程序流程的一部分
- 即使 XHR 请求不是你正在测试的流程的一部分，它对达到期望的 UI 状态也可能是相关的
- 等待 XHR 请求可以使你的测试更为健壮，参见[等待，不要休眠](https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/generic-best-practices/await-dont-sleep.zh.md)章节及其[XHR 请求等待](https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/generic-best-practices/await-dont-sleep.zh.md#XHR-请求等待)部分

在现有的测试工具中，完全等待和检查 XHR 请求并不那么常见，目前 Cypress 提供了最全面的检查支持。

*请注意：以下所有示例均基于 Cypress，它目前提供了最佳的 XHR 测试支持。*

## 对 XHR 请求进行断言的完整示例

```javascript
// ask Cypress to intercept every XHR request made to a URL ending with `/authentication`
cy.intercept("POST", "**/authentication").as("authentication-xhr");

// ... your test actions...

cy.wait("@authentication-xhr").then(interception => {
  // request headers assertion
  expect(interception.request.headers).to.have.property("Content-Type", "application/json");
  // request payload assertions
  expect(interception.request.body).to.have.property("username", "admin");
  expect(interception.request.body).to.have.property("password", "asupersecretpassword");
  // status assertion
  expect(interception.response.statusCode).to.equal(200);
  // response headers assertions
  expect(interception.response.body).to.have.property("access-control-allow-origin", "*");
  // response payload assertions
  expect(interception.response.body).to.have.property("token");
});
```

在下面的章节中，我们将详细讨论 XHR 请求的不同特征。

<details><summary>验证 XHR 请求的 URL</summary>

在 Cypress 中，用于请求的 URL 是通过`cy.intercept`调用定义的。你可能需要检查 URL 的查询字符串。

```javascript
// ask Cypress to intercept every XHR request made to a URL ending with `/authentication`
cy.intercept("**/authentication**").as("authentication-xhr");

// ... your test actions...

cy.wait("@authentication-xhr").then(interception => {
  // query string assertion
  expect(interception.request.url).to.contain("username=admin");
  expect(interception.request.url).to.contain("password=asupersecretpassword");
});
```

请注意，当你需要对多个主题进行断言时，Cypress 的`then => expect`语法非常有帮助（例如，URL 和状态）。如果你只需要对单个主题进行断言，可以使用更具表现力的`should`语法。

```javascript
cy.wait("@authentication-xhr")
  .its("url")
  .should("contain", "username=admin")
  .and("contain", "password=asupersecretpassword");
```

</details>

<details><summary>XHR 请求的方法</summary>

在 Cypress 中，请求使用`cy.intercept`函数定义。你可以通过指定它来定义要拦截的请求类型。

```javascript
// the most compact `cy.intercept` call, the GET method is implied
cy.intercept("**/authentication").as("authentication-xhr");

// method can be explicitly defined
cy.intercept("POST", "**/authentication").as("authentication-xhr");

// the extended `cy.intercept` call is available too
cy.intercept({
  method: "POST",
  url: "**/authentication"
}).as("authentication-xhr");
```

</details>

<details><summary>验证 XHR 请求的 payload 和 headers</summary>

对 XHR 请求的 payload 和 headers 进行断言允许你立即获得有关糟糕的 XHR 请求原因的详细反馈。必须在每个 XHR 请求上进行检查，以确保一切都正确地表示了测试执行的 UI 操作。

```javascript
// ask Cypress to intercept every XHR request made to a URL ending with `/authentication`
cy.intercept("POST", "**/authentication").as("authentication-xhr");

// ... your test actions...

cy.wait("@authentication-xhr").then(interception => {
  // request headers assertion
  expect(interception.request.headers).to.have.property("Content-Type", "application/json");
  // request payload assertions
  expect(interception.request.body).to.have.property("username", "admin");
  expect(interception.request.body).to.have.property("password", "asupersecretpassword");
});
```

</details>

<details><summary>验证 XHR 请求响应的 payload, headers 和 status</summary>

响应必须百分之百符合前端应用的预期，否则可能向用户展示意料之外的状态。响应断言在完整的端到端测试中很有用，但在 UI 集成测试中则无关紧要（TODO：链接到集成测试页面）。

```javascript
// ask Cypress to intercept every XHR request made to a URL ending with `/authentication`
cy.intercept("POST", "**/authentication").as("authentication-xhr");

// ... your test actions...

cy.wait("@authentication-xhr").then(intercept => {
  // status assertions
  expect(intercept.response.statusCode).to.equal(200);
  // response headers assertions
  expect(intercept.response.body).to.have.property("access-control-allow-origin", "*");
  // response payload assertions
  expect(intercept.response.body).to.have.property("token");
});
```

</details>

## 测试监控

原文链接：:<https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/server-communication-testing/monitoring-tests.md>

### 一段简要说明

随着前端期望的提高，服务器和服务的复杂性也在增加。前端应用需要变得越来越快：代码拆分、懒加载、Brotli 压缩等性能优化解决方案已成为标准。还有一些令人惊叹的解决方案，如基于机器学习和分析数据的代码拆分和资源预加载。此外，JAMstack 站点生成器可用于避免手动管理许多性能优化，但它们的配置和构建过程可能会破坏**已经测试过的功能**。

有很多我们一旦测试过就认为理所当然的功能，但它们并非无法回归，可能会导致灾难。例如：

- `sitemap.xml` 和 `robots.txt` 的爬行配置（通常每个环境都不同）
- 使用 Brotli/gzip 提供的资产：错误的内容编码可能会破坏站点的所有功能
- 针对静态或动态资产的不同配置的缓存管理

这些问题可能看起来很明显，但比你想象的更微妙。如果你关心用户体验，就应该保持监控，因为通常在发现问题时已经为时过晚。我知道不能监控所有事物，但是测试应用的次数越多，测试就越能成为首要的质量检查工具。

监控测试也可以与 E2E 测试集成（毕竟，它们只是简单的 E2E 测试），但将它们保持分开可以帮助你在需要时运行它们。上述大多数事项与 DevOps 相关，有了超快的监控测试，您可以获得即时而专注的反馈。

## Cypress 示例

- 缓存监控测试示例

```javascript
const urls = {
  staging: "https://staging.example.com",
  production: "https://example.com",
}

const shouldNotBeCached = (xhr) => cy.wrap(xhr).its("headers.cache-control").should("equal", "public,max-age=0,must-revalidate")
const shouldBeCached = (xhr) => cy.wrap(xhr).its("headers.cache-control").should("equal", "public,max-age=31536000,immutable")
// extract the main JS file from the source code of the page
const getMainJsUrl = pageSource => "/app-56a3f6cb9e6156c82be6.js"

context('Site monitoring', () => {
  context('The HTML should not be cached', () => {
    const test = url =>
      cy.request(url)
        .then(shouldNotBeCached)

    it("staging", () => test(urls.staging))
    it("production", () => test(urls.production))
  })

  context('The static assets should be cached', () => {
    const test = url =>
      cy.request(url)
        .its("body")
        .then(getMainJsUrl)
        .then(appUrl => url+appUrl)
        .then(cy.request)
        .then(shouldBeCached)

    it('staging', () => test(urls.staging))
    it('production', () => test(urls.production))
  })
})
```

- 内容编码监控测试示例

```javascript
context('The Brotli-compressed assets should be served with the correct content encoding', () => {
  const test = url => {
    cy.request(url)
    .its("body")
    .then(getMainJsUrl)
    .then(appUrl => cy.request({url: url + appUrl, headers: {"Accept-Encoding": "br"}})
      .its("headers.content-encoding")
      .should("equal", "br"))
  }

  it('staging', () => test(urls.staging))
  it('production', () => test(urls.production))
})
```

- 抓取监测测试示例

```javascript
context('The robots.txt file should disallow the crawling of the staging site and allow the production one', () => {
  const test = (url, content) =>
    cy.request(`${url}/robots.txt`)
      .its("body")
      .should("contain", content)

  it('staging', () => test(urls.staging, "Disallow: /"))
  it('production', () => test(urls.production, "Allow: /"))
})
```

*由[NoriSte](https://github.com/NoriSte) 在 [dev.to](https://dev.to/noriste/the-concept-of-monitoring-tests-4l5j) 和 [Medium](https://medium.com/@NoriSte/the-concept-of-monitoring-tests-d7cb5af514e5)进行联合发表。*

## 参考资料

- UI 测试最佳实践项目:<https://github.com/NoriSte/ui-testing-best-practices>
- UI 测试最佳实践项目中文翻译:<https://github.com/naodeng/ui-testing-best-practices>

---
欢迎关注软件测试同学的公众号“**软件测试同学**”，原创 QA 技术文章第一时间推送。
<!-- markdownlint-disable MD045 -->
<!-- markdownlint-disable MD033 -->
<center>
  <img src="https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg" style="width: 100px;">
</center>
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD045 -->
