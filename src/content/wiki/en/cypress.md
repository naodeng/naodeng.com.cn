---
title: "Cypress"
description: "(aka Cypress.io) Cypress is an end-to-end testing framework designed for modern web applications."
section: "C"
related:
  - "automated-testing"
  - "browserstack"
  - "web-testing"
  - "web-test-automation-tools"
  - "test-runner"
order: 0
---
# Cypress

<!-- TOC START -->

- [Cypress](#cypress)
  - [Questions about Cypress?](#questions-about-cypress)
    - [Basics and Importance](#basics-and-importance)
      - [What is Cypress?](#what-is-cypress)
      - [Why is Cypress used in testing?](#why-is-cypress-used-in-testing)
      - [What are the key features of Cypress?](#what-are-the-key-features-of-cypress)
      - [How does Cypress differ from other testing tools like Selenium?](#how-does-cypress-differ-from-other-testing-tools-like-selenium)
      - [What types of testing can be performed using Cypress?](#what-types-of-testing-can-be-performed-using-cypress)
    - [Installation and Setup](#installation-and-setup)
      - [How to install Cypress?](#how-to-install-cypress)
      - [What are the system requirements for Cypress?](#what-are-the-system-requirements-for-cypress)
      - [How to set up a project in Cypress?](#how-to-set-up-a-project-in-cypress)
      - [How to configure Cypress for a specific environment?](#how-to-configure-cypress-for-a-specific-environment)
    - [Writing and Running Tests](#writing-and-running-tests)
      - [How to write a basic test in Cypress?](#how-to-write-a-basic-test-in-cypress)
      - [What is the structure of a Cypress test?](#what-is-the-structure-of-a-cypress-test)
      - [How to run a test in Cypress?](#how-to-run-a-test-in-cypress)
      - [How to use assertions in Cypress?](#how-to-use-assertions-in-cypress)
      - [How to handle events in Cypress?](#how-to-handle-events-in-cypress)
      - [How to use fixtures in Cypress?](#how-to-use-fixtures-in-cypress)
    - [Advanced Concepts](#advanced-concepts)
      - [How does Cypress handle asynchronous operations?](#how-does-cypress-handle-asynchronous-operations)
      - [How to use custom commands in Cypress?](#how-to-use-custom-commands-in-cypress)
      - [How to handle network requests in Cypress?](#how-to-handle-network-requests-in-cypress)
      - [How to work with cookies and local storage in Cypress?](#how-to-work-with-cookies-and-local-storage-in-cypress)
      - [How to handle iframes in Cypress?](#how-to-handle-iframes-in-cypress)
      - [How to use plugins in Cypress?](#how-to-use-plugins-in-cypress)
    - [Best Practices and Troubleshooting](#best-practices-and-troubleshooting)
      - [What are some best practices for writing tests in Cypress?](#what-are-some-best-practices-for-writing-tests-in-cypress)
      - [How to debug tests in Cypress?](#how-to-debug-tests-in-cypress)
      - [How to handle common errors in Cypress?](#how-to-handle-common-errors-in-cypress)
      - [How to optimize test execution time in Cypress?](#how-to-optimize-test-execution-time-in-cypress)
<!-- TOC END -->

(aka Cypress.io) Cypress is an end-to-end testing framework designed for modern web applications. Unlike many other testing solutions, Cypress operates directly within the web browser, ensuring more consistent and accurate real-world testing scenarios. It provides a rich set of features and tools for writing tests, debugging in real time, and capturing screenshots or video recordings of test runs. Cypress supports both unit testing and full end-to-end testing, making it a versatile choice for developers and QA professionals. One of its notable features is its interactive test runner that allows developers to see commands as they execute while also viewing the application under test. Built on top of technologies like Mocha, Chai, and Sinon, Cypress offers a comprehensive and user-friendly environment for web application testing.

Related Terms:

- Web Automation tool
- Playwright

See also:

- [Official Website](https://www.cypress.io/)
- [Wikipedia](https://en.wikipedia.org/wiki/Cypress_(software))
## Questions about Cypress?

### Basics and Importance

#### What is Cypress?

  Cypress is an **[end-to-end testing](/en/wiki/end-to-end-testing/) framework** designed for modern web applications. It runs tests in a browser and is built on top of technologies like **JavaScript** and **[Node.js](/en/wiki/node-js/)**. Unlike many other testing tools, Cypress executes tests in the same run loop as the application, providing native access to every object without the need for a separate driver or server.
  Cypress offers a **rich interactive [test runner](/en/wiki/test-runner/)** that allows you to see commands as they execute while also viewing the application under test. The tool provides **real-time reloads** for [test-driven development](/en/wiki/test-driven-development/), with tests rerunning upon file save.
  Tests in Cypress are written using a **chainable [API](/en/wiki/api-testing/)** that works with promises, thus simplifying the handling of asynchronous operations. Cypress includes **jQuery-like commands** for DOM traversal and manipulation, making it familiar to front-end developers.
  Cypress provides **automatic waiting** before performing actions or assertions, eliminating the need for explicit waits or sleeps in most cases. It also offers **spies, stubs, and clocks** to verify and control the behavior of server responses, functions, or timers.
  The tool has a **screenshot and video recording** feature, which is handy for debugging and understanding test failures. Cypress tests can be run headlessly in Continuous Integration (CI) environments or interactively during development.
  Cypress's architecture does not use [Selenium](/en/wiki/selenium/) or [WebDriver](/en/wiki/webdriver/), which allows for faster execution and more control but also means it's primarily suited for testing applications that run in a browser. It supports **Chrome-family browsers** (including Electron) and **Firefox**.

#### Why is Cypress used in testing?

  Cypress is used in testing primarily for its **simplicity** and **developer-friendly** approach to [end-to-end testing](/en/wiki/end-to-end-testing/). It allows for writing **flakiness-free** tests due to its unique architecture that runs in the same run-loop as the application being tested. This results in more **reliable** and **consistent** tests compared to other tools that operate outside the browser.
  The use of Cypress is favored for its **real-time reloads**, which provide instant feedback on test code changes, enhancing productivity and reducing the time spent on writing and maintaining tests. Its **automatic waiting** mechanism eliminates the need for manual sleep or wait commands, thus reducing the complexity of [test scripts](/en/wiki/test-script/).
  Developers and QA engineers opt for Cypress when they need **tight integration** with modern development tools and workflows, including continuous integration and version control systems. Cypress's **rich debugging capabilities** make it easier to diagnose and fix issues directly from the browser's developer tools.
  Cypress's **screenshot and video recording** features are crucial for visualizing the state of the application at the time of test failure, facilitating quicker troubleshooting. Its **network traffic control** allows for easy stubbing and testing of edge cases without the need for backend dependencies.
  Overall, Cypress is used for its **all-in-one** testing experience, providing a robust set of tools that cater to the needs of modern web application testing, all within a single, coherent framework.

#### What are the key features of Cypress?

  Key features of Cypress include:

  - **Real-Time Reloads** : Cypress automatically reloads tests upon detecting changes to the test code, providing immediate feedback.
  - **Time Travel** : Cypress takes snapshots as tests run, allowing you to hover over commands in the Command Log to see exactly what happened at each step.
  - **Automatic Waiting** : Cypress waits for commands and assertions before moving on, eliminating the need for explicit waits or sleeps.
  - **Consistent Results** : Tests in Cypress are less flaky and more reliable as it runs in the same run-loop as the application.
  - **Debuggability** : With readable errors and stack traces, Cypress makes debugging tests easier. You can also use familiar dev tools.
  - **Network Traffic Control** : Intercept and control every network request, enabling you to test edge cases without involving your server.
  - **Screenshots and Videos** : Cypress can capture screenshots automatically on failure, or you can take them manually. It also records a video of the entire test run.
  - **Cross Browser Testing** : Cypress supports testing across multiple browsers, including Chrome, Firefox, Edge, and Electron.
  - **Parallelization** : Tests can be run in parallel across multiple machines to speed up execution time in Continuous Integration (CI).
  - **Dashboard Service** : Provides insights into tests with analytics, parallelization, and history when used with the Cypress Dashboard.
  - **Spies, Stubs, and Clocks** : Verify and control the behavior of functions, server responses, or timers.
  - **[Accessibility Testing](/en/wiki/accessibility-testing/)** : With plugins like
    `cypress-axe`
    , you can incorporate accessibility checks into your test suite.
  These features are designed to streamline the testing process, making it more efficient and effective for [test automation](/en/wiki/test-automation/) engineers.

#### How does Cypress differ from other testing tools like Selenium?

  Cypress differs from [Selenium](/en/wiki/selenium/) in several key aspects:

  - **Architecture**: Cypress runs in the same run-loop as the application being tested, leading to faster execution and more consistent results. [Selenium](/en/wiki/selenium/) operates outside the browser, which can introduce latency and flakiness.
  - **Language Support**: Cypress tests are written in JavaScript, while [Selenium](/en/wiki/selenium/) supports multiple languages like Java, C#, Python, and Ruby.
  - **Direct Access**: Cypress has direct access to the DOM and can interact with elements more naturally. [Selenium](/en/wiki/selenium/) requires an intermediary ([WebDriver](/en/wiki/webdriver/)) to communicate with the browser, which can slow down interactions.
  - **[Setup](/en/wiki/setup/) and Configuration**: Cypress is easier to set up, with no need for additional drivers or servers. [Selenium](/en/wiki/selenium/) often requires additional [setup](/en/wiki/setup/) for the [WebDriver](/en/wiki/webdriver/) and browser-specific drivers.
  - **Real-time Reloads**: Cypress offers a [Test Runner](/en/wiki/test-runner/) that automatically reloads upon test file changes, providing instant feedback. [Selenium](/en/wiki/selenium/) does not have a built-in equivalent.
  - **Automatic Waiting**: Cypress automatically waits for commands and assertions before moving on. [Selenium](/en/wiki/selenium/) requires explicit waits or sleep commands to manage timing issues.
  - **[API Testing](/en/wiki/api-testing/)**: Cypress includes built-in support for [API testing](/en/wiki/api-testing/), allowing for both front-end and back-end tests in one framework. [Selenium](/en/wiki/selenium/) is primarily focused on browser-based testing.
  - **Screenshots and Videos**: Cypress can take screenshots and record videos natively. [Selenium](/en/wiki/selenium/) can capture screenshots, but video recording often requires additional tools or plugins.
  - **Debuggability**: Cypress provides more informative error messages and stack traces, making debugging easier. [Selenium](/en/wiki/selenium/)'s error messages can be less clear, making debugging more challenging.
  - **[Cross-browser Testing](/en/wiki/cross-browser-testing/)**: [Selenium](/en/wiki/selenium/) supports a wider range of browsers and versions. Cypress's cross-browser support is improving but has historically been limited to fewer browsers.

#### What types of testing can be performed using Cypress?

  Using Cypress, testers can perform various types of testing, including:

  - **[End-to-End Testing](/en/wiki/end-to-end-testing/) (E2E)** : Simulating real user scenarios from start to finish, ensuring the application behaves as expected in a production-like environment.
  - **[Integration Testing](/en/wiki/integration-testing/)** : Testing the interactions between application layers or between different microservices to verify they work together correctly.
  - **[Unit Testing](/en/wiki/unit-testing/)** : Although not its primary use case, Cypress can be used to test individual functions or components in isolation.
  - **Component Testing** : Verifying the functionality and rendering of individual components, especially useful in modern JavaScript frameworks like React, Angular, or Vue.
  - **[Visual Regression Testing](/en/wiki/visual-regression-testing/)** : By integrating with tools like Percy or Applitools, Cypress can capture screenshots and compare them to baseline images to detect visual changes.
  - **[Accessibility Testing](/en/wiki/accessibility-testing/)** : With plugins like
    `cypress-axe`
    , testers can incorporate accessibility checks into their test suites to ensure compliance with standards like WCAG.

  - **[API Testing](/en/wiki/api-testing/)** : Although Cypress is primarily a browser-based tool, it can be used to test REST or GraphQL APIs by sending HTTP requests and asserting the responses.
  - **[Performance Testing](/en/wiki/performance-testing/)** : While not a full-fledged performance testing tool, Cypress can capture performance metrics like page load times and use assertions to flag performance regressions.
  Cypress's versatility allows it to cover a broad range of testing needs within a single framework, streamlining the development and testing workflow.

### Installation and Setup

#### How to install Cypress?

  Before installing, check the [official installation guide and system requirements](https://docs.cypress.io/app/get-started/install-cypress) for the operating system, Node.js version, and package manager supported by your Cypress release.

  1. Navigate to your project directory:

     ```
     cd /your/project/path
     ```

  2. Install Cypress as a dev dependency using npm:
    Alternatively, you can use `yarn` if you prefer:

     ```
     npm install cypress --save-dev
     ```

     ```
     yarn add cypress --dev
     ```

  3. After installation, you can open Cypress for the first time with:
    Or, if you're using yarn:

     ```
     npx cypress open
     ```

     ```
     yarn cypress open
     ```
  This will open the Cypress [Test Runner](/en/wiki/test-runner/) and create a `cypress` folder in your project directory, which contains the default configuration and sample tests.
  For continuous integration systems or to run Cypress tests headlessly, use the `cypress run` command:

  ```
  npx cypress run
  ```
  Remember to add Cypress commands to the `scripts` section of your `package.json` for easier execution:

  ```
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
  ```
  To execute with these scripts:

  ```
  npm run cypress:open
  ```
  or

  ```
  npm run cypress:run
  ```
  Ensure you have the necessary permissions to install new packages on your system. If you encounter any issues, refer to the official Cypress documentation for troubleshooting.

#### What are the system requirements for Cypress?

Cypress requirements vary by release. The current [official system requirements](https://docs.cypress.io/app/get-started/install-cypress#System-requirements) list Node.js 22.x, 24.x, and 26.x or newer. Supported operating systems, architectures, and package manager versions are version-specific, so check the guide before installing or upgrading.

The current guide lists npm 10.1.0 or newer, Yarn Classic 1.22.22 or newer, Yarn Modern 4.x or newer, pnpm 8.x or newer, and Bun 1.2.22 or newer. Cypress supports the latest three major versions of Chrome, Edge, and Firefox; WebKit support is experimental. The bundled Electron browser is deprecated, so use an installed supported browser for new projects.

Linux system dependencies vary by distribution and release. Follow the official guide for the matching package list instead of copying a command intended for a different Linux version.

#### How to set up a project in Cypress?

  To set up a project in Cypress, follow these steps:

  1. **Create a new directory** for your project if you haven't already, and navigate into it using your terminal or command prompt.

     ```
     mkdir my-cypress-project
     cd my-cypress-project
     ```

  2. **Initialize a new npm project** with `npm init`. You can skip through the prompts by using `npm init -y`.

     ```
     npm init -y
     ```

  3. **Install Cypress** via npm by running:

     ```
     npm install cypress --save-dev
     ```

  4. **Open Cypress** for the first time to launch the Launchpad:
    It guides you through choosing a testing type and browser, then generates a `cypress.config.js` or `cypress.config.ts` file and the files for that testing type.

     ```
     npx cypress open
     ```

  5. **Configure your tests** in the generated Cypress configuration file, including any base URL or environment-specific settings.

  6. **Organize your test files** in the spec directory generated for the selected testing type.
  7. **Write your tests** using the `describe` and `it` functions, and use the spec-file pattern shown in the generated project.
  8. **Run your tests** either using `npx cypress open` to open the Cypress [Test Runner](/en/wiki/test-runner/) or `npx cypress run` to execute tests in headless mode.
  Remember to **add the `node_modules` directory to your `.gitignore` file** to avoid committing dependencies to version control. Also, consider setting up scripts in your `package.json` for common Cypress commands.

#### How to configure Cypress for a specific environment?

Use `cypress.config.js` or `cypress.config.ts` for current Cypress configuration. See the [official configuration guide](https://docs.cypress.io/app/references/configuration) and [environment variables guide](https://docs.cypress.io/app/guides/environment-variables) for details.

- Put public, non-sensitive values under `expose` and read them with `Cypress.expose('apiVersion')`.
- Keep API keys, passwords, and tokens in CI secrets or operating-system environment variables. Read only the needed value with `cy.env(['apiKey'])`; do not commit secrets.
- Override configuration for one run with `--config`, or select a separate file such as `cypress.staging.config.js` with `--config-file`.
- For dynamic Node-side settings, use `setupNodeEvents(on, config)` under the relevant `e2e` or `component` configuration and return the updated config.

`Cypress.env()` was removed in Cypress 16.0. Use `cy.env()` for sensitive values and `Cypress.expose()` for public configuration instead.

### Writing and Running Tests

#### How to write a basic test in Cypress?

  To write a basic test in Cypress, follow these steps:

  1. **Create a test file** in the E2E spec directory generated for your project. The current default spec pattern uses `.cy.js` or `.cy.ts`, for example, `login.cy.js`.
  2. **Start by requiring Cypress** at the top of your test file:

     ```
     /// <reference types="cypress" />
     ```

  1. **Describe your [test suite](/en/wiki/test-suite/)**
    using the
    `describe`
    function, providing a title and a callback function to contain your tests:

     ```
     describe('Login Test', () => {
         // Your tests will go here
     });
     ```

  1. **Write individual [test cases](/en/wiki/test-case/)**
    within the
    `describe`
    block using the
    `it`
    function. Each
    `it`
    function takes a title for the test case and a callback function to execute the test steps:

     ```
     it('successfully logs in', () => {
         // Test steps will go here
     });
     ```

  1. **Define the test steps**
    within the
    `it`
    callback. Use Cypress commands to interact with the application:

     ```
     it('successfully logs in', () => {
         cy.visit('/login'); // Navigate to the login page
         cy.get('input[name=username]').type('user@example.com'); // Type the username
         cy.get('input[name=password]').type('password123'); // Type the password
         cy.get('form').submit(); // Submit the login form
         cy.url().should('include', '/dashboard'); // Assert the URL to ensure login was successful
     });
     ```

  1. **Run your test**
    using the Cypress Test Runner or via the command line with
    `cypress open`
    or
    `cypress run`
    .
  Remember to **keep tests isolated** and **independent** for reliability. Use `beforeEach` or `before` hooks if you need to set up state before each test or once before all tests in the suite, respectively.


  1. **Run your test**
    using the Cypress Test Runner or via the command line with
    `cypress open`
    or
    `cypress run`
    .

#### What is the structure of a Cypress test?

  A Cypress test typically follows a structure that includes importing necessary dependencies, describing [test suites](/en/wiki/test-suite/), defining [test cases](/en/wiki/test-case/), and implementing test steps with assertions. Here's an example of a basic Cypress test structure:

  ```
  // Import the Cypress module
  import cy from 'cypress';
  // Describe the test suite
  describe('User Login', () => {
    // Before each test, do some common setup (optional)
    beforeEach(() => {
      // Visit the login page
      cy.visit('/login');
    });
    // Define a test case
    it('should login with valid credentials', () => {
      // Test steps
      cy.get('input[name="username"]').type('user');
      cy.get('input[name="password"]').type('password');
      cy.get('form').submit();
      // Assertions
      cy.url().should('include', '/dashboard');
      cy.get('.welcome-message').should('contain', 'Welcome, user');
    });
    // Define another test case
    it('should display an error for invalid credentials', () => {
      // Test steps
      cy.get('input[name="username"]').type('wronguser');
      cy.get('input[name="password"]').type('wrongpassword');
      cy.get('form').submit();
      // Assertions
      cy.get('.error-message').should('be.visible');
    });
  });
  ```
  In this structure:

  - **describe**
    blocks group related tests, known as a test suite.

  - **it**
    blocks define individual test cases.

  - **beforeEach**
    is a hook for setting up conditions before each test runs.

  - **cy.visit**
    navigates to a URL.

  - **cy.get**
    selects DOM elements.

  - **type**
    and
    **submit**
    simulate user actions.

  - **should**
    is used for assertions to verify the desired state.

  - **describe**
#### How to run a test in Cypress?

  To run a test in Cypress, follow these steps:

  1. Open your terminal or command prompt.
  2. Navigate to your project directory where Cypress is installed.
  3. Execute the following command to open the Cypress Test Runner:

     ```
     npx cypress open
     ```

  1. The Cypress Test Runner GUI will launch, displaying a list of your test files.
  2. Click on the test file you want to run. Cypress will execute the tests in that file and display the results in real-time.
  Alternatively, to run tests headlessly without opening the [Test Runner](/en/wiki/test-runner/) GUI:

  1. Use the following command in your terminal:

     ```
     npx cypress run
     ```

  1. This will run all test files in the default headless browser (Electron).
  For running tests in a specific browser, use the `--browser` flag:

  ```
  npx cypress run --browser chrome
  ```
  To run a specific test file, append the `--spec` flag followed by the path to the test file:

  ```
  npx cypress run --spec "cypress/e2e/example.cy.js"
  ```
  To run tests with additional configuration options, use the `--config` flag:

  ```
  npx cypress run --config video=false
  ```
  This command will run tests without recording a video.
  For parallel [test execution](/en/wiki/test-execution/) and load balancing across multiple machines or CI containers, use the Cypress Dashboard service, which requires additional [setup](/en/wiki/setup/) and configuration.

#### How to use assertions in Cypress?

  Using assertions in Cypress is crucial for verifying that the application under test behaves as expected. Cypress uses Chai for assertions, which provides `expect`, `assert`, and `should` syntax.
  **Expect** and **should** are [BDD](/en/wiki/bdd/) (Behavior-Driven Development) style assertions, while **assert** is TDD ([Test-Driven Development](/en/wiki/test-driven-development/)) style. Here's how you can use them:
  **Expect:**

  ```
  expect(variable).to.equal(value);
  expect(element).to.have.class(className);
  ```
  **Should:**

  ```
  cy.get(selector).should('have.class', className);
  cy.get(selector).should('contain', text);
  ```
  **Assert:**

  ```
  assert.equal(variable, value, 'Optional message');
  assert.isTrue(condition, 'Optional message');
  ```
  Cypress assertions are automatically retried until they pass or time out, which is defined by the `defaultCommandTimeout` configuration.
  Chain assertions for more complex checks:

  ```
  cy.get(selector).should('be.visible').and('contain', text);
  ```
  Use `.and` to chain multiple assertions on the same subject.
  For assertions on network requests:

  ```
  cy.request('GET', '/api/data').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('data');
  });
  ```
  Remember to leverage Cypress's built-in assertions for common conditions, such as visibility or existence of elements, which simplifies the syntax and improves readability:

  ```
  cy.get(selector).should('be.visible');
  cy.get(selector).should('exist');
  ```
  By using assertions effectively, you ensure that your tests accurately validate the behavior of your application.

#### How to handle events in Cypress?

  Handling events in Cypress is straightforward due to its jQuery-like syntax. To interact with elements and handle events, you can use Cypress commands that simulate user actions.
  For example, to handle a click event, you would use the `.click()` command:

  ```
  cy.get('button').click();
  ```
  To handle form submission, you can use the `.submit()` command:

  ```
  cy.get('form').submit();
  ```
  For keyboard events, such as typing into an input field, use the `.type()` command:

  ```
  cy.get('input').type('Hello, World!');
  ```
  To handle more complex events like hover, Cypress does not natively support the `hover` event as a user would experience it. Instead, you can trigger the same functionality using the `.trigger()` command:

  ```
  cy.get('div').trigger('mouseover');
  ```
  For events that require waiting for a specific condition, you can use `.wait()` in combination with other commands:

  ```
  cy.wait(1000); // Waits for 1 second
  cy.get('button').click();
  ```
  Remember that Cypress automatically waits for elements to exist and will retry commands until the elements are actionable. This means you often don't need to manually handle events that depend on previous actions or asynchronous operations.
  For custom events or more complex scenarios, you can define custom commands using `Cypress.Commands.add()` to encapsulate reusable event handling logic:

  ```
  Cypress.Commands.add('customEvent', (selector, event) => {
    cy.get(selector).trigger(event);
  });
  // Usage
  cy.customEvent('button', 'customEventName');
  ```
  Always ensure you understand the application's behavior to correctly simulate events and achieve reliable test results.

#### How to use fixtures in Cypress?

  Using fixtures in Cypress is a way to manage [test data](/en/wiki/test-data/) separately from [test scripts](/en/wiki/test-script/), allowing you to load static data that can be used across multiple tests. Here's how to use fixtures in Cypress:

  1. **Create a fixture file** : Place a JSON file inside the
    `cypress/fixtures`
    directory. For example,
    `user.json`
    could contain:

     ```
     {
         "id": 1,
         "name": "Jane Doe",
         "email": "jane.doe@example.com"
     }
     ```

  1. **Load a fixture** : Use the
    `cy.fixture()`
    function to load the fixture data. You can then use this data within your test.

     ```
     describe('Test with fixtures', () => {
         it('Loads data from a fixture', () => {
             cy.fixture('user').then((user) => {
                 // user now contains the fixture data
             });
         });
     });
     ```

  1. **Use fixture data in tests** : Once the fixture is loaded, you can use the data in your test logic, such as filling out forms or comparing against expected values.

     ```
     cy.get('input[name="name"]').type(user.name);
     cy.get('input[name="email"]').type(user.email);
     ```

  1. **Shortcut for loading fixtures** : You can also pass the fixture file directly to commands like
    `cy.get()`
    or
    `cy.route()`
    using the
    `@`
    prefix.

     ```
     cy.get('input[name="name"]').type('@user.name');
     ```

  1. **Alias fixture data** : To make fixtures easier to manage within a test, you can assign an alias to the fixture using
    `as()`
    .

     ```
     cy.fixture('user').as('userData');
     cy.get('@userData').then((user) => {
         // use user data here
     });
     ```
  Remember to keep your fixture data up-to-date and relevant to the tests you are performing. This will ensure your tests remain reliable and maintainable.


### Advanced Concepts

#### How does Cypress handle asynchronous operations?

  Cypress handles asynchronous operations by automatically waiting for commands and assertions before moving on to the next step. This means that it will wait for elements to become visible, for animations to complete, and for network requests to finish before executing the next command. There's no need to add explicit waits or sleeps in your tests.
  For example, when you use a command to get an element, Cypress will continuously retry this command until the element is found or a timeout is reached. This applies to most commands in Cypress:

  ```
  cy.get('.some-element') // Cypress will wait for this element to exist
  ```
  When dealing with network requests, Cypress provides `cy.wait()` to wait for a specific request to complete:

  ```
  cy.wait('@yourRequestAlias')
  ```
  You can also handle the response of asynchronous requests using `.then()`:

  ```
  cy.request('POST', '/yourEndpoint', yourRequestBody)
    .then((response) => {
      expect(response.body).to.have.property('success', true);
    });
  ```
  Cypress ensures that the test does not proceed until the asynchronous operation inside `.then()` is completed.
  For assertions, Cypress uses a retry-and-timeout mechanism. Assertions will re-run until they pass or until a specified timeout is reached:

  ```
  cy.get('.list-item').should('have.length', 5) // Retries until the condition is met or timeout
  ```
  This approach simplifies handling asynchronous operations, making tests more readable and less flaky.

#### How to use custom commands in Cypress?

  Using custom commands in Cypress can enhance your [test suite](/en/wiki/test-suite/) by encapsulating repetitive tasks. To define a custom command, add a function to the `Cypress.Commands.add` method in the `commands.js` file located in the `cypress/support` directory.

  ```
  Cypress.Commands.add('login', (email, password) => {
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);
    cy.get('form').submit();
  });
  ```
  Invoke custom commands in your tests using `cy` followed by the command name:

  ```
  cy.login('user@example.com', 'password123');
  ```
  **Parameters** can be passed to custom commands just like any other function. In the example above, `email` and `password` are the parameters.
  **Chaining** is supported by custom commands. Return `cy` from your custom command to continue chaining Cypress commands:

  ```
  Cypress.Commands.add('fillForm', data => {
    return cy.get('form').within(() => {
      cy.get('input[name=firstName]').type(data.firstName);
      cy.get('input[name=lastName]').type(data.lastName);
    });
  });
  ```
  **Overwriting** existing commands is possible by using the same `Cypress.Commands.add` method with the name of an existing command:

  ```
  Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    // Custom logic before visit
    return originalFn(url, options);
  });
  ```
  Remember to **document** your custom commands to ensure team members understand their purpose and usage. Keep custom commands **maintainable** by limiting their scope and complexity.

#### How to handle network requests in Cypress?

  Handling network requests in Cypress can be achieved using the `cy.intercept()` method. This allows you to listen to, modify, or mock network requests and responses.
  **Intercepting a GET request:**

  ```
  cy.intercept('GET', '/api/todos').as('getTodos')
  ```
  After setting up an intercept, you can wait for the request to complete using `cy.wait()`:

  ```
  cy.wait('@getTodos').its('response.statusCode').should('eq', 200)
  ```
  **Modifying a response:**
  You can modify the response by providing a static response:

  ```
  cy.intercept('GET', '/api/todos', { fixture: 'todos.json' })
  ```
  **Stubbing a response:**
  To stub a response, you can provide the response directly:

  ```
  cy.intercept('POST', '/api/todos', {
    statusCode: 201,
    body: { id: 123, title: 'Stubbed task' },
  }).as('createTodo')
  ```
  **Accessing request and response:**
  You can access the request and response objects in the intercept callback:

  ```
  cy.intercept('POST', '/api/todos', (req) => {
    req.body.title = 'Modified title'
  }).as('createTodo')
  ```
  **Chaining assertions:**
  You can chain assertions to the intercepted request:

  ```
  cy.wait('@createTodo').then(({ request, response }) => {
    expect(request.body).to.have.property('title', 'Modified title')
    expect(response.statusCode).to.eq(201)
  })
  ```
  Use `cy.intercept()` to gain full control over network requests and responses, enabling you to test your application's behavior under various scenarios.

#### How to work with cookies and local storage in Cypress?

  Working with cookies and local storage in Cypress is straightforward due to its built-in commands.
  **Cookies:**
  To get a cookie by name:

  ```
  cy.getCookie('session_id').should('exist')
  ```
  To get all cookies:

  ```
  cy.getCookies().should('have.length', 1)
  ```
  To set a cookie:

  ```
  cy.setCookie('session_id', 'abc123')
  ```
  To clear a specific cookie:

  ```
  cy.clearCookie('session_id')
  ```
  To clear all cookies:

  ```
  cy.clearCookies()
  ```
  **Local Storage:**
  To set an item in local storage:

  ```
  cy.setLocalStorage('cart', JSON.stringify({ items: 1 }))
  ```
  To get an item from local storage:

  ```
  cy.getLocalStorage('cart').should('equal', '{"items":1}')
  ```
  To clear specific item from local storage:

  ```
  cy.removeLocalStorage('cart')
  ```
  To clear all local storage data:

  ```
  cy.clearLocalStorage()
  ```
  Or to clear local storage with a specific key pattern:

  ```
  cy.clearLocalStorage(/cart/)
  ```
  Remember, these commands are asynchronous and return promises, so they should be used with Cypress's chaining mechanism. Also, local storage operations are typically performed in the context of the application under test, so ensure the correct page is loaded before attempting to interact with local storage.

#### How to handle iframes in Cypress?

  Handling iframes in Cypress requires a few additional steps because Cypress commands are designed to operate within the same-origin context. Here's a succinct guide:

  1. **Target the iframe**
    - Use
    `cy.get()`
    to grab the iframe element.

      ```
      cy.get('iframe')
      ```

  1. **Access the iframe's content**
    - Use
    `.its('contentDocument.body')`
    to get the body of the iframe, which is subject to same-origin policy restrictions.

      ```
      cy.get('iframe').its('contentDocument.body').should('not.be.empty').then(cy.wrap)
      ```

  1. **Interact with elements**
    - Once wrapped, you can interact with the elements inside the iframe as you would with any other element in Cypress.

      ```
      cy.get('iframe').its('contentDocument.body').should('not.be.empty').then(cy.wrap).find('selector').click()
      ```
  For navigation between different origins, use `cy.origin()` and follow the [Cypress cross-origin testing guide](https://docs.cypress.io/app/guides/cross-origin-testing). `chromeWebSecurity: false` is a Chromium browser option that weakens browser security restrictions; it is not a general-purpose cross-origin iframe workaround. Set it in `cypress.config.js` only when you understand the impact and have a specific need.
  If you're dealing with multiple nested iframes, you'll need to repeat the process for each level of iframe nesting, ensuring that you target the correct iframe at each level.
  Keep in mind that Cypress best practices recommend avoiding iframes when possible, as they add complexity to your tests. If you have control over the application, consider alternatives to iframes that are more test-friendly.


#### How to use plugins in Cypress?

  Cypress extensions are usually installed as project dependencies. Before adding one, check that it is maintained and supports your Cypress version.

  Browser-side commands or support code belong in the support file generated for the selected testing type. Node-side extensions, such as tasks and preprocessors, are registered with `setupNodeEvents(on, config)` under `e2e` or `component` in `cypress.config.js`.

  The `cypress/plugins/index.js` convention belongs to Cypress 9 and earlier. Cypress 10 and later use the configuration file and `setupNodeEvents` instead. See the [official plugin guide](https://docs.cypress.io/app/plugins/plugins-guide) and [configuration guide](https://docs.cypress.io/app/references/configuration).

### Best Practices and Troubleshooting

#### What are some best practices for writing tests in Cypress?

  When writing tests in Cypress, consider the following best practices:

  - **Organize tests logically**
    using
    `describe`
    and
    `context`
    blocks for better readability and structure.

  - **Use `it` blocks**
    for individual test cases, ensuring they are descriptive and reflect the user behavior you're testing.

  - **Keep tests isolated and independent**
    to avoid inter-test dependencies that can cause flakiness.

  - **Employ [Page Object Model](/en/wiki/page-object-model/)**
    or similar patterns to abstract element selectors and page interactions, enhancing maintainability.

  - **Utilize Cypress's built-in retry-ability**
    for commands and assertions to handle dynamic content and reduce flakiness.

  - **Avoid using arbitrary waits**
    (
    `cy.wait()`
    with a fixed time); instead, rely on Cypress's automatic waiting for elements to exist, be visible, be clickable, etc.

  - **Leverage Cypress aliases**
    with
    `cy.as()`
    for reusing elements or responses in a chain of commands.

  - **Write custom commands**
    for reusable sequences of actions, but use them judiciously to keep the clarity of the tests.

  - **Assert on real user interactions**
    and outcomes, not implementation details, to ensure tests remain valid with code changes.

  - **Test the critical user journeys**
    first to provide immediate value and catch significant regressions early.

  - **Use environment variables**
    for configuration to keep sensitive data out of the test code and allow flexibility across different environments.

  - **Implement Continuous Integration**
    to run tests automatically on code changes, ensuring immediate feedback on the health of the application.

    ```
    // Example of a descriptive test case
    describe('User Profile', () => {
      it('should allow a user to update their profile picture', () => {
        cy.get('.profile-pic').click();
        cy.get('input[type="file"]').attachFile('new-pic.jpg');
        cy.get('.save-btn').click();
        cy.get('.profile-pic').should('have.attr', 'src', 'path/to/new-pic.jpg');
      });
    });
    ```
  Remember to **review and refactor tests regularly** to adapt to application changes and improve [test suite](/en/wiki/test-suite/) reliability and performance.

#### How to debug tests in Cypress?

  Debugging tests in Cypress can be approached systematically:

  1. **Use the Cypress [Test Runner](/en/wiki/test-runner/)**: It provides a visual representation of [test execution](/en/wiki/test-execution/). You can see commands as they run and inspect the state of the application at each step.
  2. **Time Travel**: Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
  3. **Real-Time Reloads**: Cypress automatically reloads whenever you make changes to your tests. You can see test results instantly.
  4. **Console Output**: Check the browser's developer console for logs. Cypress commands log additional information here, which can be useful for debugging.
  5. **`.debug()` Command**: Insert `.debug()` into your chain of commands to inspect the state of the DOM at that point. It will cause the browser's debugger to kick in.

     ```
     cy.get('.selector').debug().should('have.text', 'expected text');
     ```

  6. **Breakpoints**: Use `debugger` statements in your test code to pause execution at a specific line.

     ```
     cy.get('.selector').then(($el) => {
         debugger; // Execution will pause here
     });
     ```

  7. **Network Requests**: Inspect network requests in the [Test Runner](/en/wiki/test-runner/)'s Command Log to ensure [API](/en/wiki/api-testing/) calls are being made as expected and with the correct data.
  8. **Error Messages**: Read error messages carefully. Cypress provides descriptive error messages that can guide you to the source of the problem.
  9. **Cypress Logs**: Review Cypress's Command Log while a test runs. Use `cy.log()` when you need to add custom diagnostic messages about the [test execution](/en/wiki/test-execution/).
  10. **Retry-ability**: Understand that Cypress commands automatically retry until they succeed or time out. If a test is failing because an assertion is running before the application is ready, consider adding waits or assertions for intermediate states.
  By combining these tools and techniques, you can effectively debug your Cypress tests and resolve issues more quickly.

#### How to handle common errors in Cypress?

  Handling common errors in Cypress involves understanding the error messages and applying appropriate fixes or workarounds. Here are some strategies:
  **Timeout Errors**: Prefer retryable assertions or a timeout on the specific command. If the project consistently needs a longer default, adjust `defaultCommandTimeout` in `cypress.config.js`. Avoid replacing a condition check with a fixed-duration `cy.wait()`.

  ```
  cy.get('.some-element', { timeout: 10000 }) // waits for 10 seconds
  ```
  **Element Not Found**: Ensure elements are available in the DOM before interacting with them. Use `.should('be.visible')` to wait for elements to appear.

  ```
  cy.get('.some-element').should('be.visible').click()
  ```
  **Cross-Origin Errors**: Use `cy.origin()` for cross-origin navigation. Only consider setting `chromeWebSecurity: false` in `cypress.config.js` for a specific Chromium-only case after reviewing the security impact.

  ```
  const { defineConfig } = require('cypress')
  module.exports = defineConfig({
    chromeWebSecurity: false,
  })
  ```
  **[Flaky Tests](/en/wiki/flaky-test/)**: Cypress commands and assertions retry automatically until they pass or time out. Wait for a meaningful application state, and use Cypress test retry configuration when rerunning failed tests is appropriate.

  ```
  cy.get('.some-element').should('exist')
  ```
  **Assertion Failures**: Review the expected conditions and ensure the assertions match the actual application state. Use explicit assertions like `.should('have.text', 'expected text')`.

  ```
  cy.get('.some-element').should('have.text', 'expected text')
  ```
  **Network Errors**: Stub network requests using `cy.intercept()` to control the response and avoid external dependencies.

  ```
  cy.intercept('GET', '/api/data', { fixture: 'data.json' })
  ```
  **Unhandled Promise Rejections**: Use `.catch()` to handle promise rejections within tests and avoid uncaught exceptions.

  ```
  cy.task('mightFail').catch((error) => {
    // handle error
  })
  ```
  **Cypress Command Queue Errors**: Remember that Cypress commands are asynchronous and queued. Avoid using traditional async/await with Cypress commands.
  For more complex or persistent errors, consult the Cypress documentation or community forums for specific solutions and troubleshooting tips.

#### How to optimize test execution time in Cypress?

  To optimize [test execution](/en/wiki/test-execution/) time in Cypress, consider the following strategies:

  - **Run tests in parallel**: Utilize Cypress Dashboard Service to run tests simultaneously across multiple machines. This can significantly reduce the overall [test suite](/en/wiki/test-suite/) execution time.

    ```
    cypress run --record --key <record_key> --parallel
    ```

  - **Selective [test execution](/en/wiki/test-execution/)**: Use `.only` to run specific tests or [test suites](/en/wiki/test-suite/) during development to avoid running the entire suite.

    ```
    describe.only('My Test Suite', () => {
      // Only this suite will run
    });
    it.only('My Test', () => {
      // Only this test will run
    });
    ```

  - **Test retries**: Implement test retries to handle [flaky tests](/en/wiki/flaky-test/) without rerunning the entire suite.

    ```
    // Global level
    Cypress.config('retries', 2);
    // Test-specific level
    it('retries test', { retries: 2 }, () => {
      // Test code here
    });
    ```

  - **Smart waiting**: Use Cypress's automatic waiting for elements and assertions to avoid unnecessary waits and timeouts.
  - **Stubbing and intercepting**: Replace actual network calls with stubs using `cy.intercept()` to save time spent on real network requests.

    ```
    cy.intercept('GET', '/users', { fixture: 'users.json' });
    ```

  - **Avoid unnecessary UI actions**: Use direct [API](/en/wiki/api-testing/) calls to set up application state instead of going through UI workflows.

    ```
    cy.request('POST', '/login', { username: 'user', password: 'pass' });
    ```

  - **Cache resources**: Cache data that doesn't change often between tests to avoid reloading.
  - **Optimize selectors**: Use efficient selectors to reduce the time Cypress spends querying the DOM.
  - **Batch actions**: Group actions or commands that can be executed together to minimize the number of yieldable Cypress commands.
  By implementing these strategies, you can achieve faster feedback cycles and more efficient [test execution](/en/wiki/test-execution/) in Cypress.
