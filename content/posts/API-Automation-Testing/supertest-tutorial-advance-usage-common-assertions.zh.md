---
author:  "nao.deng"
title:  "SuperTest 接口自动化测试教程：进阶用法 - 常用断言"
date:  "2023-11-08T17:38:34+08:00"
summary: "聚焦于 Supertest 的高级用法，特别关注常用断言。您将学习如何使用这些断言来验证 API 响应，包括状态码、响应内容、和响应头部等。"
ZHtags:  ["断言"]
ZHcategories:  ["接口自动化测试", "REST Assured"]
ZHseries: ["REST Assured 接口自动化测试教程"]
ShowWordCount: true
---

## 常用断言

下面会一次介绍一下 SuperTest,CHAI 和 Jest 常用的断言。

### SuperTest 的内置断言

Supertest 是基于[SuperAgent](https://github.com/ladjs/superagent) 构建的一个更高级的库，所以 Supertest 可以很轻松的使用 SuperAgent 的 HTTP 断言。

示例如下：

```javascript
.expect(status[, fn]) //断言响应状态代码。

.expect(status, body[, fn]) // 断言响应状态代码和正文。

.expect(body[, fn]) // 用字符串、正则表达式或解析后的正文对象断言响应正文文本。

.expect(field, value[, fn]) // 用字符串或正则表达式断言标题字段值。

.expect(function(res) {}) // 传递一个自定义断言函数。它将得到要检查的响应对象。如果检查失败，则抛出错误。
```

### CHAI 的常用断言

- 相等性断言（Equality Assertions）

```javascript
expect(actual).to.equal(expected) // 验证实际值是否等于期望值。
expect(actual).to.deep.equal(expected) // 验证实际值和期望值是否深度相等，适用于对象和数组比较。
expect(actual).to.eql(expected) // 与 deep.equal 一样，用于深度相等的比较。
```

- 包含性断言（Inclusion Assertions）

```javascript
expect(array).to.include(value) // 验证数组是否包含指定的值。
expect(string).to.include(substring) // 验证字符串是否包含指定的子字符串。
expect(object).to.include(key) // 验证对象是否包含指定的键。
```

- 类型断言（Type Assertions）

```javascript
expect(actual).to.be.a(type) // 验证实际值的类型是否等于指定类型。
expect(actual).to.be.an(type) // 与 to.be.a 一样，用于类型断言。
expect(actual).to.be.an.instanceof(constructor) // 验证实际值是否是指定构造函数的实例。
```

- 真假性断言（Truthiness Assertions）

```javascript
expect(value).to.be.true // 验证值是否为真。
expect(value).to.be.false // 验证值是否为假。
expect(value).to.exist // 验证值是否存在，非 null 和非 undefined。
```

- 长度断言（Length Assertions）

```javascript
expect(array).to.have.length(length) // 验证数组的长度是否等于指定长度。
expect(string).to.have.lengthOf(length) // 验证字符串的长度是否等于指定长度。
```

- 空值断言（Empty Assertions）

```javascript
expect(array).to.be.empty // 验证数组是否为空。
expect(string).to.be.empty // 验证字符串是否为空。
```

- 范围断言（Range Assertions）

```javascript
expect(value).to.be.within(min, max) // 验证值是否在指定的范围内。
expect(value).to.be.above(min) // 验证值是否大于指定值。
expect(value).to.be.below(max) // 验证值是否小于指定值。
```

- 异常断言（Exception Assertions）

```javascript
expect(fn).to.throw(error) // 验证函数是否抛出指定类型的异常。
expect(fn).to.throw(message) // 验证函数是否抛出包含指定消息的异常。
```

- 存在性断言（Existence Assertions）

```javascript
expect(object).to.have.property(key) // 验证对象是否包含指定属性。
expect(array).to.have.members(subset) // 验证数组是否包含指定的成员。
```

更多 chai 的断言，请查看<https://www.chaijs.com/api/assert/>

### Jest 的常用断言

- 相等性断言（Equality Assertions）

```javascript
expect(actual).toBe(expected) // 验证实际值是否严格等于期望值。
expect(actual).toEqual(expected) // 验证实际值和期望值是否深度相等，适用于对象和数组比较。
```

- 不相等性断言

```javascript
expect(actual).not.toBe(expected) // 验证实际值与期望值不相等。
```

- 包含性断言（Inclusion Assertions）

```javascript
expect(array).toContain(value) // 验证数组是否包含指定的值。
```

- 类型断言（Type Assertions）

```javascript
expect(actual).toBeTypeOf(expected) // 验证实际值的类型是否等于指定类型。
```

- 真假性断言（Truthiness Assertions）

```javascript
expect(value).toBeTruthy() // 验证值是否为真。
expect(value).toBeFalsy() // 验证值是否为假。
```

- 异步断言

```javascript
await expect(promise).resolves.toBe(expected) // 验证异步操作是否成功完成并返回与期望值匹配的结果。
```

- 异常断言

```javascript
expect(fn).toThrow(error) // 验证函数是否抛出指定类型的异常。
expect(fn).toThrow(message) // 验证函数是否抛出包含指定消息的异常。
```

- 范围断言

```javascript
expect(value).toBeGreaterThanOrEqual(min) // 验证值是否大于或等于指定的最小值。
expect(value).toBeLessThanOrEqual(max) // 验证值是否小于或等于指定的最大值。
```

- 对象属性断言

```javascript
expect(object).toHaveProperty(key, value) // 验证对象是否包含指定属性，并且该属性的值等于指定值。
```

更多 Jest 的断言，请查看<https://jestjs.io/docs/expect>