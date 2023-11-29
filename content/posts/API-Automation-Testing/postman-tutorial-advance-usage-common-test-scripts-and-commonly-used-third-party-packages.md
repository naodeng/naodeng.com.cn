---
author:  "nao.deng"
title:  "Postman API Automation Testing Tutorial Advance Usage Common Test Scripts and Third-Party Packages"
date: "2023-11-23T17:37:00+08:00"
summary:  "A deep dive into advanced usage of Postman API automation testing, focusing on commonly used test scripts and third-party package examples. Explores how to write powerful test scripts that cover a variety of testing scenarios and introduces some common third-party packages that optimize the testing process."
tags: ["Common Test Scripts", "Third-Party Packages"]
categories: ["API Automation Testing", "Postman"]
series: ["Postman API Automation Testing Tutorial"]
ShowWordCount: true
---

## Advanced Usage

This section will introduce some advanced features of Postman and Newman, including commonly used response test scripts, pre-request scripts, and third-party packages available for test scripts.

### Common Test Scripts

Postman provides a test script feature that allows you to write JavaScript scripts to validate the response and behavior of your API. These scripts can be added under the "Tests" tab of a request and are divided into pre-request scripts (`Pre-request Script`) and post-response scripts (`Tests`). Here are some common Postman and Newman test scripts:

#### Response Test Scripts

1. **Status Code Check:**

   ```javascript
   pm.test("Status code is 200", function () {
       pm.response.to.have.status(200);
   });
   ```

2. **Response Time Check:**

   ```javascript
   pm.test("Response time is less than 200ms", function () {
       pm.expect(pm.response.responseTime).to.be.below(200);
   });
   ```

3. **Response Body JSON Format Check:**

   ```javascript
   pm.test("Response body is a valid JSON", function () {
       pm.response.to.be.json;
   });
   ```

4. **Response Body Field Value Check:**

   ```javascript
   pm.test("Response body contains expected value", function () {
       pm.expect(pm.response.json().key).to.eql("expectedValue");
   });
   ```

5. **Response Body Array Length Check:**

   ```javascript
   pm.test("Response body array has correct length", function () {
       pm.expect(pm.response.json().arrayKey).to.have.lengthOf(3);
   });
   ```

6. **Response Body Property Existence Check:**

   ```javascript
   pm.test("Response body has required properties", function () {
       pm.expect(pm.response.json()).to.have.property("key");
   });
   ```

#### Pre-request Scripts

1. **Dynamically Set Request Parameters:**

   ```javascript
   pm.variables.set("dynamicVariable", "dynamicValue");
   ```

2. **Set Request Header Using Global Variable:**

   ```javascript
   pm.request.headers.add({ key: 'Authorization', value: pm.globals.get('authToken') });
   ```

3. **Generate Random Number:**

   ```javascript
   const randomNumber = Math.floor(Math.random() * 1000);
   pm.variables.set("randomNumber", randomNumber);
   ```

4. **Generate Signature or Encryption:**

   ```javascript
   // Example: Use CryptoJS for HMAC SHA256 signature
   const CryptoJS = require('crypto-js');
   const secretKey = 'yourSecretKey';
   const message = 'dataToSign';
   const signature = CryptoJS.HmacSHA256(message, secretKey).toString(CryptoJS.enc.Base64);
   pm.variables.set("signature", signature);
   ```

### Third-Party Libraries in Test Scripts

The provided `require` method allows you to use built-in library modules in the sandbox. Here are some common libraries and examples.
More available libraries can be found [here](https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-external-libraries).

#### Chai.js Assertion Library Methods

In Postman's test scripts, you can use the Chai assertion library to write assertions to validate the response of your API. Chai provides various assertion styles, including BDD (Behavior-Driven Development) and TDD (Test-Driven Development). Here are some basic usage examples:

##### 1. Install Chai

In the Postman script environment, you don't need to install Chai separately as Postman already includes Chai by default.

##### 2. Use BDD Style Assertions

In the "Tests" section of Postman, you can use Chai's BDD style assertions, for example:

   ```javascript
   // Include Chai library
   const chai = require('chai');

   // Use BDD style assertions
   const expect = chai.expect;

   // Example: Verify the response status code is 200
   pm.test('Status code is 200', function() {
       expect(pm.response.code).to.equal(200);
   });

   // Example: Verify the response body is JSON
   pm.test('Response body is JSON', function() {
       expect(pm.response.headers.get('Content-Type')).to.include('application/json');
   });
   ```

##### 3. Use TDD Style Assertions

   ```javascript
   // Include Chai library
   const chai = require('chai');

   // Use TDD style assertions
   const assert = chai.assert;

   // Example: Use assert to verify the response status code is 200
   assert.equal(pm.response.code, 200, 'Status code should be 200');
   ```

### 4. Common Assertions Supported by Chai

- **Equality:**

  ```javascript
  expect(actual).to.equal(expected);
  ```

- **Inclusion:**
  
  ```javascript
  expect(actual).to.include(expected);
  ```

- **Type Checking:**
  
  ```javascript
  expect(actual).to.be.a('string');
  ```

- **Greater Than/Less Than:**
  
  ```javascript
  expect(actual).to.be.above(expected);
  expect(actual).to.be.below(expected);
  ```

- **Null/Not Null:**
  
  ```javascript
  expect(actual).to.be.null;
  expect(actual).to.not.be.null;
  ```

- **Deep Equality:**
  
  ```javascript
  expect(actual).to.deep.equal(expected);
  ```

The above are just some basic usage of the Chai assertion library. You can use more assertion methods and combinations based on your needs. Chai provides a rich set of assertion features to meet various testing requirements. For more detailed information, please refer to the [Chai Documentation](https://www.chaijs.com/).

#### Using Cheerio to Manipulate HTML Files

In Postman, Cheerio is a jQuery-based library for server-side manipulation of HTML documents. It allows you to use jQuery-like syntax to select and manipulate HTML elements on the server side, making it suitable for parsing and extracting information from HTML pages. In Postman, you can use the Cheerio library for parsing HTML responses. Here are the basic usage steps for Cheerio in Postman:

1. **Install Cheerio:**
   - Since Postman uses the Node.js runtime environment, you can install Cheerio in Postman scripts. In the "Pre-request Script" or "Tests" section of your request, you can install Cheerio as follows:

   ```javascript
   // Install Cheerio
   const cheerio = require('cheerio');
   ```

2. **Parse HTML with Cheerio:**
   - In the "Tests" section of your request, you can use Cheerio to parse HTML. Here's a simple example:

   ```javascript
   // Get HTML content from the response
   const htmlContent = pm.response.text();

   // Parse HTML with Cheerio
   const $ = cheerio.load(htmlContent);

   // Example: Extract text from the title tag
   const titleText = $('title').text();
   console.log('Title:', titleText);

   // Example: Extract the href attribute from all links
   const links = [];
   $('a').each(function () {
       const link = $(this).attr('href');
       links.push(link);
   });
   console.log('Links:', links);
   ```

   In the example above, `cheerio.load(htmlContent)` is used to load HTML content, and jQuery-like syntax is used to select and manipulate elements.

3. **Considerations:**
   - Cheerio is primarily used for parsing static HTML. It may not work well with content generated dynamically using JavaScript. In such cases, you might consider using Puppeteer or other tools that support JavaScript execution.

This is just the basic usage of Cheerio in Postman. You can use various selectors and methods provided by Cheerio according to your specific needs. Refer to the [Cheerio Documentation](https://cheerio.js.org/) for more detailed information.

#### Validating JSON Schema with tv4

In Postman, tv4 is a JSON Schema validation library used to validate whether JSON data conforms to a given JSON Schema. JSON Schema is a specification for describing the structure of JSON objects, defining properties, types, and other constraints.

Here are the basic steps for using tv4 to validate JSON Schema in Postman:

1. **Install tv4 Library:**
   - Since Postman uses the Node.js runtime environment, you can install tv4 in Postman scripts. In the "Pre-request Script" or "Tests" section of your request, you can install tv4 as follows:

   ```javascript
   // Install tv4
   const tv4 = require('tv4');
   ```

2. **Define JSON Schema:**
   - In Postman, you can define the JSON Schema in the "Pre-request Script" or "Tests" section. JSON Schema can be defined as a JavaScript object. Here's a simple example:

   ```javascript
   // Define JSON Schema
   const jsonSchema = {
       "type": "object",
       "properties": {
           "name": { "type": "string" },
           "age": { "type": "number" }
       },
       "required": ["name", "age"]
   };
   ```

3. **Validate with tv4:**
   - In the "Tests" section of your request, you can use tv4 to validate JSON data against the defined JSON Schema. Here's a simple example:

   ```javascript
   // Get JSON data from the response
   const jsonResponse = pm.response.json();

   // Validate JSON against the schema using tv4
   const isValid = tv4.validate(jsonResponse, jsonSchema);

   // Check the validation result
   pm.test('JSON is valid according to the schema', function() {
       pm.expect(isValid).to.be.true;
   });
   ```

   In the example above, `tv4.validate(jsonResponse, jsonSchema)` is used to validate whether the JSON response conforms to the specified schema. The validation result is stored in the `isValid` variable, and `pm.test` is used to check the validation result.

This is just the basic usage of tv4 in Postman. You can define more complex JSON Schemas and use other features of tv4 for flexible validation according to your specific requirements. Refer to the [tv4 Documentation](https://github.com/geraintluff/tv4) for more detailed information.

#### Generating UUIDs

In Postman, you can use the `uuid` module to generate UUIDs (Universally Unique Identifiers), also known as GUIDs. Here's the basic usage of the `uuid` module in Postman:

##### 1. Install the `uuid` Module

In the "Pre-request Script" or "Tests" section of your Postman request, you can install the `uuid` module as follows:

```javascript
// Install the uuid module
const uuid = require('uuid');
```

##### 2. Generate UUID

```javascript
// Generate UUID
const generatedUUID = uuid.v4();
console.log('Generated UUID:', generatedUUID);
```

In the example above, `uuid.v4()` is used to generate a UUID based on random numbers. You can use the generated UUID in your Postman script, such as setting it as the value for a request header or parameter.

##### Example

Here's an example of generating a UUID and setting it as a request header in the "Pre-request Script" of a Postman request:

```javascript
// Install the uuid module
const uuid = require('uuid');

// Generate UUID
const generatedUUID = uuid.v4();

// Set request header
pm.request.headers.add({ key: 'X-Request-ID', value: generatedUUID });
```

In the example above, `X-Request-ID` is a common request header used to identify the uniqueness of the request. The generated UUID is set as the value for this request header to ensure a unique identifier for each request.

Note that Postman automatically performs the steps to install dependencies

 when running scripts, so manual installation of the `uuid` module is not necessary.

#### Converting XML to JavaScript Objects with xml2js

In Postman, `xml2js` is a library used to convert XML into JavaScript objects. In the "Pre-request Script" or "Tests" section of your Postman request, you can use `xml2js` to handle XML responses and transform them into JavaScript objects. Here are the basic steps for using `xml2js` in Postman:

1. **Install the xml2js Library:**
   - Since Postman uses the Node.js runtime environment, you can install `xml2js` in Postman scripts. In the "Pre-request Script" or "Tests" section of your request, you can install `xml2js` as follows:

   ```javascript
   // Install xml2js
   const xml2js = require('xml2js');
   ```

2. **Parse XML Response:**
   - After getting the XML response, you can use `xml2js` to parse it into a JavaScript object. Here's a simple example:

   ```javascript
   // Get the content of the response as XML
   const xmlContent = pm.response.text();

   // Use xml2js to parse XML
   xml2js.parseString(xmlContent, function (err, result) {
       if (err) {
           console.error('Error parsing XML:', err);
           return;
       }

       // result is the parsed JavaScript object
       console.log('Parsed XML:', result);
   });
   ```

   In the example above, `xml2js.parseString(xmlContent, function (err, result) {...}` is used to asynchronously parse the XML content. The parsed JavaScript object is stored in the `result` variable.

3. **Handle Parsed JavaScript Object:**
   - Once you have the parsed JavaScript object, you can access and manipulate its properties using regular JavaScript object handling techniques.

   ```javascript
   // Example: Access a property of the parsed JavaScript object
   const value = result.root.element[0].subelement[0]._;
   console.log('Value from parsed XML:', value);
   ```

   In the example above, `result.root.element[0].subelement[0]._` is an example of accessing a property of the parsed object. The structure depends on your XML structure.

This is just the basic usage of `xml2js` in Postman. You can use other features of `xml2js`, such as setting parsing options or handling namespaces, based on your specific needs. Refer to the [xml2js Documentation](https://github.com/Leonidas-from-XIV/node-xml2js) for more detailed information.

#### Common Utility Functions with util

In Postman, `util` is a global object that provides some common utility functions for use in Postman scripts. Here are some common `util` functions and their usage:

##### 1. `util.guid()` - Generate a Globally Unique Identifier (GUID)

```javascript
// Generate a globally unique identifier
const uniqueId = util.guid();
console.log('Unique ID:', uniqueId);
```

##### 2. `util.timestamp()` - Get the Current Timestamp

```javascript
// Get the current timestamp (in milliseconds)
const timestamp = util.timestamp();
console.log('Timestamp:', timestamp);
```

##### 3. `util.randomInt(min, max)` - Generate a Random Integer in a Specified Range

```javascript
// Generate a random integer between 1 and 100
const randomInt = util.randomInt(1, 100);
console.log('Random Integer:', randomInt);
```

##### 4. `util.unixTimestamp()` - Get the Current Timestamp in Unix Timestamp (seconds)

```javascript
// Get the current timestamp (in seconds)
const unixTimestamp = util.unixTimestamp();
console.log('Unix Timestamp:', unixTimestamp);
```

##### 5. `util.encodeBase64(str)` and `util.decodeBase64(base64Str)` - Base64 Encoding and Decoding

```javascript
// Base64 encoding
const encodedString = util.encodeBase64('Hello, World!');
console.log('Encoded String:', encodedString);

// Base64 decoding
const decodedString = util.decodeBase64(encodedString);
console.log('Decoded String:', decodedString);
```

##### 6. `util.each(obj, callback)` - Iterate Over an Object or Array

```javascript
// Iterate over an array
const array = [1, 2, 3, 4];
util.each(array, function (value, index) {
    console.log(`Index ${index}: ${value}`);
});

// Iterate over an object
const obj = { a: 1, b: 2, c: 3 };
util.each(obj, function (value, key) {
    console.log(`Key ${key}: ${value}`);
});
```

**Notes:**

- In Postman scripts, you can directly use these utility functions via the `util` object.
- These methods provided by the `util` object simplify some common tasks in Postman scripts, such as generating random numbers, handling timestamps, and encoding/decoding strings.
- Please refer to the Postman official documentation, as Postman continues to update and improve its script environment, and new utility functions may be introduced.

#### Stream Operations with stream

In Node.js, streams are often used to handle large amounts of data, effectively reducing memory usage and improving performance. Here are some basic usage examples of streams in Node.js that you can refer to for data or file processing.

##### 1. **Readable Streams:**

```javascript
const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('input.txt');

// Set encoding (if it's a text file)
readableStream.setEncoding('utf-8');

// Handle data
readableStream.on('data', function(chunk) {
    console.log('Received chunk:', chunk);
});

// Handle end
readableStream.on('end', function() {
    console.log('Stream ended.');
});

// Handle error
readableStream.on('error', function(err) {
    console.error('Error:', err);
});
```

##### 2. **Writable Streams:**

```javascript
const fs = require('fs');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Write data
writableStream.write('Hello, World!\n');
writableStream.write('Another line.');

// End writing
writableStream.end();

// Handle finish
writableStream.on('finish', function() {
    console.log('Write completed.');
});

// Handle error
writableStream.on('error', function(err) {
    console.error('Error:', err);
});
```

##### 3. **Transform Streams:**

```javascript
const { Transform } = require('stream');

// Create a transform stream
const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        // Transform data
        const transformedData = chunk.toString().toUpperCase();
        this.push(transformedData);
        callback();
    }
});

// Pipe connecting readable stream, transform stream, and writable stream
readableStream.pipe(myTransform).pipe(writableStream);
```

This is just some basic usage of streams in Node.js. In Postman, you can use these methods in the scripts of your requests, such as the "Pre-request Script" or "Tests" sections, by executing these scripts in the Node.js runtime environment. Please note that the stream API in Node.js can be more complex, for example, by using the `pipeline` function to handle the connection of multiple streams.

#### Timers: `timers`

In Postman, you can use the timer functionality of Node.js to handle scheduled tasks or operations with a delay. Here are some basic usages of Node.js timers that can be used in Postman scripts.

##### 1. `setTimeout` - Delayed Execution

```javascript
// Delayed execution of an operation
setTimeout(function() {
    console.log('Delayed operation.');
}, 2000); // 2000 milliseconds (2 seconds)
```

##### 2. `setInterval` - Periodic Execution

```javascript
// Periodic execution of a repeated operation
const intervalId = setInterval(function() {
    console.log('Repeated operation.');
}, 3000); // 3000 milliseconds (3 seconds)

// Cancel periodic execution
// clearInterval(intervalId);
```

##### 3. Usage in Postman

In Postman, you can use these timers in the "Pre-request Script" or "Tests" sections. For example, delaying an operation in the "Tests" section:

```javascript
// Delayed operation in the "Tests" section
setTimeout(function() {
    console.log('Delayed operation in Tests.');
}, 2000); // 2000 milliseconds (2 seconds)
```

Please note that the code executed in the "Pre-request Script" or "Tests" sections of Postman is running in the Node.js environment, so you can use most features supported by Node.js, including timers.

In the examples above, `setTimeout` executes an operation once after a specified delay, and `setInterval` executes an operation periodically at a specified interval. In Postman, you can use these timers according to your specific needs.

#### Events Handling: `events`

In the Postman script environment, you can use Node.js `events` module to handle events. The `events` module provides the `EventEmitter` class, which can be used to define and trigger events. Here are some basic usages of using the `events` module in Postman with Node.js:

##### 1. Creating an Event Emitter

```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
```

##### 2. Defining an Event Handling Function

```javascript
// Define an event handling function
function myEventHandler() {
    console.log('Event handled.');
}
```

##### 3. Registering an Event Handling Function

```javascript
// Register an event handling function
myEmitter.on('myEvent', myEventHandler);
```

##### 4. Triggering an Event

```javascript
// Trigger an event
myEmitter.emit('myEvent');
```

##### 5. Example

In the Postman script environment, you can use events to implement callbacks or handling for asynchronous operations. Here's a simple example demonstrating how to trigger an event after completing an asynchronous operation:

```javascript
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Simulate an asynchronous operation
function performAsyncOperation() {
    setTimeout(function() {
        console.log('Async operation completed.');
        // Trigger the event
        myEmitter.emit('asyncOperationComplete');
    }, 2000);
}

// Register an event handling function
myEmitter.on('asyncOperationComplete', function() {
    console.log('Handling async operation completion.');
    // You can perform logic here after the asynchronous operation completes
});

// Execute the asynchronous operation
performAsyncOperation();
```

In the above example, the `performAsyncOperation` function simulates an asynchronous operation, and when the operation completes, the `asyncOperationComplete` event is triggered using `myEmitter.emit`. In the event handling function, you can write logic to handle what happens after the asynchronous operation completes.

Please note that the execution of asynchronous operations in Postman scripts may be subject to limitations, so careful consideration is required in practical use.

## Reference Documents

- [Postman Official Documentation](https://learning.postman.com/docs/getting-started/introduction/)
- [Newman Official Documentation](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/)
