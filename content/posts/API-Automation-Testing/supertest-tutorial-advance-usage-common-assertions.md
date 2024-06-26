---
author: "nao.deng"
title: "SuperTest API Automation Testing Tutorial: Advanced Usage - Common Assertions"
date: "2023-11-08T17:38:34+08:00"
summary: "This blog focuses on advanced usage of Supertest, with a particular focus on commonly used assertions. "
tags: ["Assertions"
]
Categories:  ["API automation testing", "SuperTest"]
series: ["SuperTest API Automation Testing Tutorial"]
ShowWordCount: true
---

## Common Assertions

The following is an overview of common assertions used by SuperTest, CHAI and Jest.

### SuperTest's built-in assertions

Supertest is a more advanced library built on [SuperAgent](https://github.com/ladjs/superagent), so Supertest can easily use SuperAgent's HTTP assertions.

Examples are as follows:

```javascript
.expect(status[, fn]) // Assert response status code.

.expect(status, body[, fn]) // Assert response status code and body.

.expect(body[, fn]) // Assert response body text with a string, regular expression, or parsed body object.

.expect(field, value[, fn]) // Assert header field value with a string or regular expression.

.expect(function(res) {}) // Pass a custom assertion function. It'll be given the response object to check. If the check fails, throw an error.
```

### Common Assertions for CHAI

- Equality Assertions

```javascript
expect(actual).to.equal(expected) // Verify that the actual value is equal to the expected value.
expect(actual).to.deep.equal(expected) // Verify that the actual value is deeply equal to the expected value, for object and array comparisons.
expect(actual).to.eql(expected) // Same as deep.equal for deep-equal comparisons.
```

- Inclusion Assertions

```javascript
expect(array).to.include(value) // Verify that the array contains the specified value.
expect(string).to.include(substring) // Verify that the string contains the specified substring.
expect(object).to.include(key) // Verify that the object contains the specified key.
```

- Type Assertions

```javascript
expect(actual).to.be.a(type) // Verify that the type of the actual value is equal to the specified type.
expect(actual).to.be.an(type) // Same as to.be.a for type assertions.
expect(actual).to.be.an.instanceof(constructor) // Verify that the actual value is an instance of the specified constructor.
```

- Truthiness Assertions

```javascript
expect(value).to.be.true // Verify that the value is true.
expect(value).to.be.false // Verify that the value is false.
expect(value).to.exist // Verify that the value exists, is not null and is not undefined.
```

- Length Assertions

```javascript
expect(array).to.have.length(length) // Verify that the length of the array is equal to the specified length.
expect(string).to.have.lengthOf(length) // Verify that the length of the string is equal to the specified length.
```

- Empty Assertions

```javascript
expect(array).to.be.empty // Verify if the array is empty.
expect(string).to.be.empty // Verify that the string is empty.
```

- Range Assertions

```javascript
expect(value).to.be.within(min, max) // Verify that the value is within the specified range.
expect(value).to.be.above(min) // Verify that the value is greater than the specified value.
expect(value).to.be.below(max) // Verify that the value is less than the specified value.
```

- Exception Assertions

```javascript
expect(fn).to.throw(error) // Verify that the function throws an exception of the specified type.
expect(fn).to.throw(message) // Verify that the function throws an exception containing the specified message.
```

- Existence Assertions

```javascript
expect(object).to.have.property(key) // Verify that the object contains the specified property.
expect(array).to.have.members(subset) // Verify that the array contains the specified members.
```

For more chai assertions, see <https://www.chaijs.com/api/assert/>

### Common Assertions for Jest

- Equality Assertions

```javascript
expect(actual).toBe(expected) // Verify that the actual value is strictly equal to the expected value.
expect(actual).toEqual(expected) // Verify that the actual value is deeply equal to the expected value, for object and array comparisons.
```

- Inequality Assertions

```javascript
expect(actual).not.toBe(expected) // Verify that the actual value is not equal to the expected value.
```

- Inclusion Assertions

```javascript
expect(array).toContain(value) // Verify that the array contains the specified value.
```

- Type Assertions

```javascript
expect(actual).toBeTypeOf(expected) // Verify that the type of the actual value is equal to the specified type.
```

- Truthiness Assertions

```javascript
expect(value).toBeTruthy() // Verify that the value is true.
expect(value).toBeFalsy() // Verify that the value is false.
```

- Asynchronous Assertions

```javascript
await expect(promise).resolves.toBe(expected) // Verify that the asynchronous operation completed successfully and return a result matching the expected value.
```

- Exception Assertions

```javascript
expect(fn).toThrow(error) // Verify that the function throws an exception of the specified type.
expect(fn).toThrow(message) // Verify that the function throws an exception containing the specified message.
```

- Scope Assertions

```javascript
expect(value).toBeGreaterThanOrEqual(min) // Verify that the value is greater than or equal to the specified minimum.
expect(value).toBeLessThanOrEqual(max) // Verify that the value is less than or equal to the specified maximum.
```

- Object Property Assertions

```javascript
expect(object).toHaveProperty(key, value) // Verify that the object contains the specified property and that the value of the property is equal to the specified value.
```

For more Jest assertions, see<https://jestjs.io/docs/expect>
