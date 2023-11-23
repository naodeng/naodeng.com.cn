---
author:  "nao.deng"
title:  "Postman 接口自动化测试教程：进阶用法 - 常用的测试脚本和常用的第三方包示例"
date: "2023-11-23T17:37:00+08:00"
summary:  "深入研究 Postman 接口自动化测试的高级用法，专注于常用的测试脚本和第三方包示例。探讨如何编写强大的测试脚本，涵盖各种测试场景，并介绍一些常用的第三方包，优化测试流程。"
ZHtags: ["常用测试脚本", "第三方包"]
ZHcategories: ["接口自动化测试", "Postman"]
ZHseries: ["Postman 接口自动化测试教程"]
ShowWordCount: true
---

## 进阶用法

以下会介绍 Postman 和 Newman 的一些进阶用法，包括常用测试响应测试脚本，测试前置脚本和常用的测试脚本可用的第三方包等。

### 常用测试脚本

Postman 提供了测试脚本功能，可以使用 JavaScript 编写脚本来验证 API 的响应和行为。这些脚本可以在请求的“Tests”标签下添加，分为请求前脚本（Pre-request Script）和响应后脚本（Tests）两个部分。下面是一些常用的 Postman 和 Newman 测试脚本：

#### 响应测试脚本

1. **状态码检查：**

   ```javascript
   pm.test("Status code is 200", function () {
       pm.response.to.have.status(200);
   });
   ```

2. **响应时间检查：**

   ```javascript
   pm.test("Response time is less than 200ms", function () {
       pm.expect(pm.response.responseTime).to.be.below(200);
   });
   ```

3. **响应体 JSON 格式检查：**

   ```javascript
   pm.test("Response body is a valid JSON", function () {
       pm.response.to.be.json;
   });
   ```

4. **响应体字段值检查：**

   ```javascript
   pm.test("Response body contains expected value", function () {
       pm.expect(pm.response.json().key).to.eql("expectedValue");
   });
   ```

5. **响应体数组长度检查：**

   ```javascript
   pm.test("Response body array has correct length", function () {
       pm.expect(pm.response.json().arrayKey).to.have.lengthOf(3);
   });
   ```

6. **响应体属性存在性检查：**

   ```javascript
   pm.test("Response body has required properties", function () {
       pm.expect(pm.response.json()).to.have.property("key");
   });
   ```

#### 请求前脚本

1. **动态设置请求参数：**

   ```javascript
   pm.variables.set("dynamicVariable", "dynamicValue");
   ```

2. **使用全局变量设置请求头：**

   ```javascript
   pm.request.headers.add({ key: 'Authorization', value: pm.globals.get('authToken') });
   ```

3. **生成随机数并设置为变量：**

   ```javascript
   const randomNumber = Math.floor(Math.random() * 1000);
   pm.variables.set("randomNumber", randomNumber);
   ```

4. **签名生成或加密等操作：**

   ```javascript
   // 示例：使用 CryptoJS 进行 HMAC SHA256 签名
   const CryptoJS = require('crypto-js');
   const secretKey = 'yourSecretKey';
   const message = 'dataToSign';
   const signature = CryptoJS.HmacSHA256(message, secretKey).toString(CryptoJS.enc.Base64);
   pm.variables.set("signature", signature);
   ```

### 测试脚本中可用的第三方库

提供的 require 方法允许您使用沙箱内置库模块。下面列出了个人常用的可用库和示例
更多可用的库可以在[这里](https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-external-libraries)找到

#### chai.js 断言库方法

在 Postman 的测试脚本中，你可以使用 Chai 断言库来编写断言，以验证你的 API 响应是否符合预期。Chai 提供了多种断言风格，包括 BDD（Behavior Driven Development）、TDD（Test Driven Development）等。以下是一些基本的 Chai 使用方法：

##### 1. 安装 Chai

在 Postman 的脚本环境中，你无需单独安装 Chai，因为 Postman 默认已经内置了 Chai。

##### 2. 使用 BDD 风格断言

在 Postman 的 "Tests" 部分中，你可以使用 Chai 的 BDD 风格断言，例如：

```javascript
// 引入 Chai 库
const chai = require('chai');

// 使用 BDD 风格断言
const expect = chai.expect;

// 示例：验证响应状态码为 200
pm.test('Status code is 200', function() {
    expect(pm.response.code).to.equal(200);
});

// 示例：验证响应体是 JSON
pm.test('Response body is JSON', function() {
    expect(pm.response.headers.get('Content-Type')).to.include('application/json');
});
```

##### 3. 使用 TDD 风格断言

```javascript
// 引入 Chai 库
const chai = require('chai');

// 使用 TDD 风格断言
const assert = chai.assert;

// 示例：使用 assert 断言响应状态码为 200
assert.equal(pm.response.code, 200, 'Status code should be 200');
```

##### 4. Chai 支持的一些常用断言

- **相等性：**

  ```javascript
  expect(actual).to.equal(expected);
  ```

- **包含：**
  
  ```javascript
  expect(actual).to.include(expected);
  ```

- **类型检查：**
  
  ```javascript
  expect(actual).to.be.a('string');
  ```

- **大于/小于：**
  
  ```javascript
  expect(actual).to.be.above(expected);
  expect(actual).to.be.below(expected);
  ```

- **空/非空：**
  
  ```javascript
  expect(actual).to.be.null;
  expect(actual).to.not.be.null;
  ```

- **深度相等性：**
  
  ```javascript
  expect(actual).to.deep.equal(expected);
  ```

以上只是 Chai 断言库的一些基本用法，你可以根据需要使用更多的断言方法和组合。Chai 提供了丰富的断言功能，可以满足各种测试需求。更多详细信息，请查阅 Chai 的官方文档：[Chai Documentation](https://www.chaijs.com/)。

#### 使用 cheerio 操作 HTML 文件

在 Postman 中，Cheerio 是一个基于 jQuery 的库，用于在服务器端操作 HTML 文档。它允许你使用类似于 jQuery 的语法来选择和操作 HTML 元素，非常适用于解析和提取 HTML 页面中的信息。在 Postman 中，你可以使用 Cheerio 库进行 HTML 响应的解析。以下是 Cheerio 在 Postman 中的基本用法：

1. **安装 Cheerio：**
   - 由于 Postman 使用的是 Node.js 运行时环境，你可以通过在 Postman 的脚本中安装 Cheerio 来使用它。在请求的 "Pre-request Script" 或 "Tests" 部分，可以使用以下方式安装 Cheerio：

   ```javascript
   // 安装 Cheerio
   const cheerio = require('cheerio');
   ```

2. **使用 Cheerio 解析 HTML：**
   - 在请求的 "Tests" 部分中，你可以使用 Cheerio 解析 HTML。以下是一个简单的例子：

   ```javascript
   // 从响应中获取 HTML 内容
   const htmlContent = pm.response.text();

   // 使用 Cheerio 解析 HTML
   const $ = cheerio.load(htmlContent);

   // 示例：从 HTML 中提取标题文本
   const titleText = $('title').text();
   console.log('Title:', titleText);

   // 示例：从 HTML 中提取所有链接的 href 属性
   const links = [];
   $('a').each(function () {
       const link = $(this).attr('href');
       links.push(link);
   });
   console.log('Links:', links);
   ```

   在上述例子中，`cheerio.load(htmlContent)` 用于加载 HTML 内容，并使用类似于 jQuery 的语法来选择和操作元素。

3. **注意事项：**
   - Cheerio 主要用于解析静态 HTML，对于使用 JavaScript 动态生成的内容，可能无法正常获取。在这种情况下，你可能需要考虑使用 Puppeteer 或其他支持 JavaScript 执行的工具。

这只是 Cheerio 在 Postman 中的基本用法。你可以根据具体的需求使用 Cheerio 提供的各种选择器和方法。请查阅 Cheerio 的官方文档以获取更详细的信息：[Cheerio Documentation](https://cheerio.js.org/)。

#### 使用 tv4 来验证 JSON Schema

在 Postman 中，tv4 是一个 JSON Schema 验证库，用于验证 JSON 数据是否符合给定的 JSON Schema。JSON Schema 是一种描述 JSON 数据结构的规范，它定义了 JSON 对象的属性、类型和其他约束。

以下是在 Postman 中使用 tv4 进行 JSON Schema 验证的基本步骤：

1. **安装 tv4 库：**
   - 由于 Postman 使用的是 Node.js 运行时环境，你可以通过在 Postman 的脚本中安装 tv4 来使用它。在请求的 "Pre-request Script" 或 "Tests" 部分，你可以使用以下方式安装 tv4：

   ```javascript
   // 安装 tv4
   const tv4 = require('tv4');
   ```

2. **定义 JSON Schema：**
   - 在 Postman 中，你可以在请求的 "Pre-request Script" 或 "Tests" 部分定义 JSON Schema。JSON Schema 可以作为一个 JavaScript 对象进行定义。以下是一个简单的例子：

   ```javascript
   // 定义 JSON Schema
   const jsonSchema = {
       "type": "object",
       "properties": {
           "name": { "type": "string" },
           "age": { "type": "number" }
       },
       "required": ["name", "age"]
   };
   ```

3. **使用 tv4 进行验证：**
   - 在请求的 "Tests" 部分，你可以使用 tv4 对 JSON 数据进行验证。以下是一个简单的例子：

   ```javascript
   // 获取响应的 JSON 数据
   const jsonResponse = pm.response.json();

   // 使用 tv4 进行 JSON Schema 验证
   const isValid = tv4.validate(jsonResponse, jsonSchema);

   // 检查验证结果
   pm.test('JSON is valid according to the schema', function() {
       pm.expect(isValid).to.be.true;
   });
   ```

   在上述例子中，`tv4.validate(jsonResponse, jsonSchema)` 用于验证 `jsonResponse` 是否符合 `jsonSchema` 定义的规范。验证结果存储在 `isValid` 变量中，然后使用 `pm.test` 来检查验证结果。

这只是 tv4 在 Postman 中的基本用法。你可以根据实际需求，定义更复杂的 JSON Schema，并使用 tv4 的其他功能进行更灵活的验证。请查阅 tv4 的官方文档以获取更详细的信息：[tv4 Documentation](https://github.com/geraintluff/tv4)。

#### 生成 uuid

在 Postman 中，你可以使用 `uuid` 模块来生成 UUID（Universally Unique Identifier），也被称为 GUID。以下是在 Postman 中使用 `uuid` 模块的基本用法：

##### 1. 安装 `uuid` 模块

在 Postman 的 "Pre-request Script" 或 "Tests" 部分，你可以使用以下方式安装 `uuid` 模块：

```javascript
// 安装 uuid 模块
const uuid = require('uuid');
```

##### 2. 生成 UUID

```javascript
// 生成 UUID
const generatedUUID = uuid.v4();
console.log('Generated UUID:', generatedUUID);
```

在上述例子中，`uuid.v4()` 用于生成一个基于随机数的 UUID。你可以在 Postman 脚本中使用生成的 UUID，例如将其设置为请求头或参数的值。

##### 示例

以下是一个在 Postman "Pre-request Script" 中生成 UUID 并设置为请求头的示例：

```javascript
// 安装 uuid 模块
const uuid = require('uuid');

// 生成 UUID
const generatedUUID = uuid.v4();

// 设置请求头
pm.request.headers.add({ key: 'X-Request-ID', value: generatedUUID });
```

在上述例子中，`X-Request-ID` 是一个常见的请求头，用于标识请求的唯一性。生成的 UUID 被设置为这个请求头的值，以确保每个请求都有唯一的标识。

请注意，Postman 在运行脚本时会自动执行安装依赖项的步骤，无需手动安装 `uuid` 模块。

#### 使用 xml2js 将 XML 转换为 JavaScript 对象

在 Postman 中，`xml2js` 是一个用于将 XML 转换为 JavaScript 对象的库。在 Postman 的脚本中，你可以使用 `xml2js` 来处理 XML 响应并将其转换为易于处理的 JavaScript 对象。以下是在 Postman 中使用 `xml2js` 的基本步骤：

1. **安装 xml2js 库：**
   - 由于 Postman 使用的是 Node.js 运行时环境，你可以通过在 Postman 的脚本中安装 `xml2js` 来使用它。在请求的 "Pre-request Script" 或 "Tests" 部分，你可以使用以下方式安装 `xml2js`：

   ```javascript
   // 安装 xml2js
   const xml2js = require('xml2js');
   ```

2. **解析 XML 响应：**
   - 获取 XML 响应后，你可以使用 `xml2js` 将其解析为 JavaScript 对象。以下是一个简单的例子：

   ```javascript
   // 获取响应的 XML 内容
   const xmlContent = pm.response.text();

   // 使用 xml2js 解析 XML
   xml2js.parseString(xmlContent, function (err, result) {
       if (err) {
           console.error('Error parsing XML:', err);
           return;
       }

       // result 是解析后的 JavaScript 对象
       console.log('Parsed XML:', result);
   });
   ```

   在上述例子中，`xml2js.parseString(xmlContent, function (err, result) {...}` 用于异步地解析 XML 内容。解析后的 JavaScript 对象存储在 `result` 中。

3. **处理解析后的 JavaScript 对象：**
   - 一旦你获得了解析后的 JavaScript 对象，你就可以按照普通的 JavaScript 对象处理方式访问和操作它的属性。

   ```javascript
   // 示例：访问解析后的 JavaScript 对象的属性
   const value = result.root.element[0].subelement[0]._;
   console.log('Value from parsed XML:', value);
   ```

   在上述例子中，`result.root.element[0].subelement[0]._` 是一个访问解析后对象属性的示例。具体的结构取决于你的 XML 结构。

这只是 `xml2js` 在 Postman 中的基本用法。你可以根据实际需求使用 `xml2js` 的其他功能，例如设置解析选项，处理命名空间等。请查阅 `xml2js` 的官方文档以获取更详细的信息：[xml2js Documentation](https://github.com/Leonidas-from-XIV/node-xml2js)。

#### 常用工具函数 util

在 Postman 中，`util` 是一个全局对象，提供了一些常用的实用工具函数，可以在 Postman 脚本中使用。以下是一些常见的 `util` 对象的用法：

##### 1. `util.guid()` - 生成全局唯一标识符（GUID）

```javascript
// 生成一个全局唯一标识符
const uniqueId = util.guid();
console.log('Unique ID:', uniqueId);
```

##### 2. `util.timestamp()` - 获取当前时间戳

```javascript
// 获取当前时间戳（毫秒）
const timestamp = util.timestamp();
console.log('Timestamp:', timestamp);
```

##### 3. `util.randomInt(min, max)` - 生成指定范围内的随机整数

```javascript
// 生成 1 到 100 之间的随机整数
const randomInt = util.randomInt(1, 100);
console.log('Random Integer:', randomInt);
```

##### 4. `util.unixTimestamp()` - 获取当前时间戳（Unix 时间戳，秒）

```javascript
// 获取当前时间戳（秒）
const unixTimestamp = util.unixTimestamp();
console.log('Unix Timestamp:', unixTimestamp);
```

##### 5. `util.encodeBase64(str)` 和 `util.decodeBase64(base64Str)` - Base64 编码和解码

```javascript
// Base64 编码
const encodedString = util.encodeBase64('Hello, World!');
console.log('Encoded String:', encodedString);

// Base64 解码
const decodedString = util.decodeBase64(encodedString);
console.log('Decoded String:', decodedString);
```

##### 6. `util.each(obj, callback)` - 遍历对象或数组

```javascript
// 遍历数组
const array = [1, 2, 3, 4];
util.each(array, function (value, index) {
    console.log(`Index ${index}: ${value}`);
});

// 遍历对象
const obj = { a: 1, b: 2, c: 3 };
util.each(obj, function (value, key) {
    console.log(`Key ${key}: ${value}`);
});
```

##### 注意事项

- 在 Postman 脚本中，可以通过 `util` 对象直接调用这些实用工具函数。
- `util` 对象提供的这些方法能够简化在 Postman 脚本中的一些常见任务，如生成随机数、处理时间戳等。
- 请注意查阅 Postman 的官方文档，因为 Postman 会不断更新和改进其脚本环境，可能会引入新的实用工具函数。

#### stream 流操作

在 Node.js 中使用流（Streams）通常用于处理大量的数据，可以有效地降低内存占用并提高性能。以下是一些在 Node.js 中使用流的基本用法，可以参考这些方法来处理数据或文件。

##### 1. **读取流（Readable Streams）：**

```javascript
const fs = require('fs');

// 创建可读流
const readableStream = fs.createReadStream('input.txt');

// 设置编码（如果是文本文件）
readableStream.setEncoding('utf-8');

// 处理数据
readableStream.on('data', function(chunk) {
    console.log('Received chunk:', chunk);
});

// 处理结束
readableStream.on('end', function() {
    console.log('Stream ended.');
});

// 处理错误
readableStream.on('error', function(err) {
    console.error('Error:', err);
});
```

##### 2. **写入流（Writable Streams）：**

```javascript
const fs = require('fs');

// 创建可写流
const writableStream = fs.createWriteStream('output.txt');

// 写入数据
writableStream.write('Hello, World!\n');
writableStream.write('Another line.');

// 结束写入
writableStream.end();

// 处理结束
writableStream.on('finish', function() {
    console.log('Write completed.');
});

// 处理错误
writableStream.on('error', function(err) {
    console.error('Error:', err);
});
```

##### 3. **转换流（Transform Streams）：**

```javascript
const { Transform } = require('stream');

// 创建转换流
const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        // 转换数据
        const transformedData = chunk.toString().toUpperCase();
        this.push(transformedData);
        callback();
    }
});

// 管道连接读取流、转换流和写入流
readableStream.pipe(myTransform).pipe(writableStream);
```

这只是 Node.js 中使用流的一些基本用法。在 Postman 中，你可以在请求的脚本中使用这些方法，例如 "Pre-request Script" 或 "Tests" 部分，通过 Node.js 运行环境来执行这些脚本。请注意，Node.js 中的流 API 可以更复杂，例如通过使用 `pipeline` 函数来处理多个流的连接。

#### 定时器 timers

在 Postman 中，你可以使用 Node.js 的定时器功能来处理定时任务或延时执行的操作。以下是一些基本的 Node.js 定时器的用法，这些用法可以在 Postman 的脚本中使用。

##### 1. `setTimeout` - 延时执行

```javascript
// 延时执行操作
setTimeout(function() {
    console.log('Delayed operation.');
}, 2000); // 2000 毫秒（2 秒）
```

##### 2. `setInterval` - 定时执行重复操作

```javascript
// 定时执行重复操作
const intervalId = setInterval(function() {
    console.log('Repeated operation.');
}, 3000); // 3000 毫秒（3 秒）

// 取消定时执行
// clearInterval(intervalId);
```

##### 3. 在 Postman 中使用

在 Postman 中，你可以在 "Pre-request Script" 或 "Tests" 部分中使用这些定时器。例如，在 "Tests" 部分中延时执行操作：

```javascript
// 在 "Tests" 部分延时执行操作
setTimeout(function() {
    console.log('Delayed operation in Tests.');
}, 2000); // 2000 毫秒（2 秒）
```

请注意，在 Postman 的 "Pre-request Script" 或 "Tests" 部分执行的代码是在 Node.js 环境中运行的，因此你可以使用 Node.js 支持的大多数功能，包括定时器。

在以上例子中，`setTimeout` 会在指定的延时后执行一次操作，而 `setInterval` 会在每隔指定的时间间隔后执行一次操作。在 Postman 中，你可以根据实际需求使用这些定时器功能。

#### 时间处理 events

在 Postman 的脚本环境中，你可以使用 Node.js 的 `events` 模块来处理事件。`events` 模块提供了 `EventEmitter` 类，该类可以用于定义和触发事件。以下是在 Postman 中使用 Node.js 的 `events` 模块的一些基本用法：

##### 1. 创建事件发射器

```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
```

##### 2. 定义事件处理函数

```javascript
// 定义事件处理函数
function myEventHandler() {
    console.log('Event handled.');
}
```

##### 3. 注册事件处理函数

```javascript
// 注册事件处理函数
myEmitter.on('myEvent', myEventHandler);
```

##### 4. 触发事件

```javascript
// 触发事件
myEmitter.emit('myEvent');
```

##### 示例

在 Postman 的脚本环境中，你可以使用事件来实现异步操作的回调或处理。以下是一个简单的例子，演示如何在异步操作完成后触发事件：

```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// 模拟异步操作
function performAsyncOperation() {
    setTimeout(function() {
        console.log('Async operation completed.');
        // 触发事件
        myEmitter.emit('asyncOperationComplete');
    }, 2000);
}

// 注册事件处理函数
myEmitter.on('asyncOperationComplete', function() {
    console.log('Handling async operation completion.');
    // 这里可以执行异步操作完成后的处理逻辑
});

// 执行异步操作
performAsyncOperation();
```

在上述例子中，`performAsyncOperation` 函数模拟了一个异步操作，当该操作完成时，通过 `myEmitter.emit` 触发了 `asyncOperationComplete` 事件。在事件处理函数中，你可以编写处理异步操作完成后的逻辑。

请注意，在 Postman 的脚本中，异步操作的执行方式可能受到限制，因此在实际使用中需要谨慎考虑。

## 参考文档

- [Postman 官方文档](https://learning.postman.com/docs/getting-started/introduction/)
- [newman 官方文档](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/)
