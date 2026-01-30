import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "SuperTest API Automation Testing Tutorial: Getting Started and Setting Up Your Environment",
  "description": " a tutorial on Supertest, focusing on getting started and preparing the environment to be built.",
  "date": "2023-11-05T02:36:26.000Z",
  "author": "nao.deng",
  "tags": ["Supertest", "API Testing"],
  "series": ["SuperTest API Automation Testing Tutorial"],
  "cover": "./supertest-tutorial-getting-started-and-own-environment-preparation-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 3,
    "slug": "introduction-of-supertest",
    "text": "Introduction of SuperTest"
  }, {
    "depth": 3,
    "slug": "introduction-of-jest",
    "text": "Introduction of Jest"
  }, {
    "depth": 3,
    "slug": "introduction-of-mocha",
    "text": "Introduction of Mocha"
  }, {
    "depth": 3,
    "slug": "introduction-of-chai",
    "text": "Introduction of CHAI"
  }, {
    "depth": 2,
    "slug": "project-dependencies",
    "text": "Project dependencies"
  }, {
    "depth": 2,
    "slug": "project-structure",
    "text": "Project Structure"
  }, {
    "depth": 2,
    "slug": "next",
    "text": "Next"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    input: "input",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "This project is a quick start tutorial for API automation testing using SuperTest, and will use Jest or Mocha as the testing framework for demo demonstration."
    }), "\n", createVNode(_components.p, {
      children: "We will introduce SuperTest, Jest and Mocha in turn, so that you can understand the basic usage of these tools in advance."
    }), "\n", createVNode(_components.h3, {
      id: "introduction-of-supertest",
      children: "Introduction of SuperTest"
    }), "\n", createVNode(_components.p, {
      children: "“Supertest” is a popular JavaScript library for testing Node.js applications. It is primarily used for end-to-end testing, also known as integration testing, to make sure that your application works properly across different components.Supertest is typically used in conjunction with testing frameworks such as Mocha, Jasmine or Jest to write and run test cases."
    }), "\n", createVNode(_components.p, {
      children: "Here are some of the key features and uses of Supertest:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Initiating HTTP requests: Supertest allows you to easily simulate HTTP requests such as GET, POST, PUT, DELETE, etc. to test your application’s routing and endpoints."
      }), "\n", createVNode(_components.li, {
        children: "Chained Syntax: Supertest provides a chained syntax that allows you to build and execute multiple requests in a single test case, which helps simulate different user actions in your application."
      }), "\n", createVNode(_components.li, {
        children: "Assertions and Expectations: You can use Supertest in conjunction with assertion libraries such as Chai to examine the content of the response, status codes, headers, etc. to ensure the expected behavior of your application."
      }), "\n", createVNode(_components.li, {
        children: "Authentication Testing: Supertest can be used to test endpoints that require authentication to ensure that user login and authorization functions properly."
      }), "\n", createVNode(_components.li, {
        children: "Asynchronous support: Supertest can handle asynchronous operations, such as waiting for a response to return before executing further test code."
      }), "\n", createVNode(_components.li, {
        children: "Easy Integration: Supertest can be easily used with different Node.js frameworks (e.g. Express, Koa, Hapi, etc.), so you can test all types of applications."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Using Supertest can help you verify that your application is working as expected, as well as quickly catch potential problems when changes are made to your application. Typically, you need to install Supertest and the testing framework in your project, and then write test cases to simulate different requests and check responses. This helps improve code quality and maintainability and ensures that your application remains stable as it evolves."
    }), "\n", createVNode(_components.p, {
      children: ["Official documentation: ", createVNode(_components.a, {
        href: "https://github.com/ladjs/supertest",
        children: "https://github.com/ladjs/supertest"
      })]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Note: Supertest can be used not only for API testing, but also for unit and integration testing."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "code examples:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// import supertest"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " request"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'supertest'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "request"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({URL}) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// request(url) or request(app)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() or ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "put"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() or."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "post"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// http methods"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "set"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// http options"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "send"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// http body"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// http assertions"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "end"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// end the request"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "introduction-of-jest",
      children: "Introduction of Jest"
    }), "\n", createVNode(_components.p, {
      children: "Jest is a popular JavaScript testing framework for writing and running unit, integration and end-to-end tests for JavaScript applications. Its goal is to provide simple, fast and easy-to-use testing tools for a wide variety of JavaScript applications, both front-end and back-end."
    }), "\n", createVNode(_components.p, {
      children: "Here are some of the key features and uses of Jest:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Built-in Assertion Library: Jest includes a powerful assertion library that makes it easy to write assertions to verify that code behaves as expected."
      }), "\n", createVNode(_components.li, {
        children: "Automated mocks: Jest automatically creates mocks that help you simulate functions, modules, and external dependencies, making testing easier and more manageable."
      }), "\n", createVNode(_components.li, {
        children: "Fast and Parallel: Jest saves time by intelligently selecting which tests to run and executing them in parallel, allowing you to run a large number of test cases quickly."
      }), "\n", createVNode(_components.li, {
        children: "Comprehensive Test Suite: Jest supports unit, integration and end-to-end testing and can test a wide range of application types such as JavaScript, TypeScript, React, Vue, Node.js and more."
      }), "\n", createVNode(_components.li, {
        children: "Snapshot testing: Jest has a snapshot testing feature that can be used to capture UI changes by checking if the rendering of a UI component matches a previous snapshot."
      }), "\n", createVNode(_components.li, {
        children: "Automatic Watch Mode: Jest has a watch mode that automatically re-runs tests as code changes are made, supporting developers in continuous testing."
      }), "\n", createVNode(_components.li, {
        children: "Rich Ecosystem: Jest has a rich set of plug-ins and extensions that can be used to extend its functionality, such as coverage reporting, test reporting, and integration with other tools."
      }), "\n", createVNode(_components.li, {
        children: "Community Support: Jest is a popular testing framework with a large community that provides extensive documentation, tutorials and support resources."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Jest is often used in conjunction with other tools such as Babel (for transcoding JavaScript), Enzyme (for React component testing), Supertest (for API testing), etc. to achieve comprehensive test coverage and ensure code quality. Whether you’re writing front-end or back-end code, Jest is a powerful testing tool that can help you catch potential problems and improve code quality and maintainability."
    }), "\n", createVNode(_components.p, {
      children: ["Official Documentation: ", createVNode(_components.a, {
        href: "https://jestjs.io/docs/zh-Hans/getting-started",
        children: "https://jestjs.io/docs/zh-Hans/getting-started"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Code examples:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// import jest"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " jest"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'jest'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "describe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// test scenarios"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// detailed test case, it() is in the describe()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "before"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// this action is before all test cases"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "after"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// this action is after all test cases"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "introduction-of-mocha",
      children: "Introduction of Mocha"
    }), "\n", createVNode(_components.p, {
      children: "Mocha is a popular JavaScript testing framework for writing and running a variety of tests for JavaScript applications, including unit tests, integration tests, and end-to-end tests.Mocha provides flexibility and extensibility, allowing developers to easily customize the test suite to meet the needs of their projects."
    }), "\n", createVNode(_components.p, {
      children: "Here are some of the key features and uses of Mocha:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Multiple Test Styles: Mocha supports multiple test styles including BDD (Behavior Driven Development) and TDD (Test Driven Development). This allows developers to write test cases according to their preferences."
      }), "\n", createVNode(_components.li, {
        children: "Rich Assertion Library: Mocha does not include an assertion library by itself, but it can be used in conjunction with a variety of assertion libraries (e.g., Chai, Should.js, Expect.js, etc.), allowing you to write tests using your favorite assertion style."
      }), "\n", createVNode(_components.li, {
        children: "Asynchronous Testing: Mocha has built-in support for asynchronous testing, allowing you to test asynchronous code, Promises, callback functions, etc. to ensure that your code is correct in asynchronous scenarios."
      }), "\n", createVNode(_components.li, {
        children: "Parallel Testing: Mocha allows you to run test cases in your test suite in parallel, improving the efficiency of test execution."
      }), "\n", createVNode(_components.li, {
        children: "Rich Plug-ins and Extensions: Mocha has a rich ecosystem of plug-ins that can be used to extend its functionality, such as test coverage reporting, test report generation, and so on."
      }), "\n", createVNode(_components.li, {
        children: "Easy to Integrate: Mocha can be used with various assertion libraries, test runners (such as Karma and Jest), browsers (using the browser test runner), etc. to suit different project and testing needs."
      }), "\n", createVNode(_components.li, {
        children: "Command Line API: Mocha provides an easy-to-use command line API for running test suites, generating reports, and other test-related operations."
      }), "\n", createVNode(_components.li, {
        children: "Continuous Integration Support: Mocha can be easily integrated into Continuous Integration (CI) tools such as Jenkins, Travis CI, CircleCI, etc. to ensure that code is tested after every commit."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Mocha’s flexibility and extensibility make it a popular testing framework for a variety of JavaScript projects, including front-end and back-end applications. Developers can choose the testing tools, assertion libraries, and other extensions to meet the requirements of their projects based on their needs and preferences. Whether you are writing browser-side code or server-side code, Mocha is a powerful testing tool to help you ensure code quality and reliability."
    }), "\n", createVNode(_components.p, {
      children: ["Official documentation: ", createVNode(_components.a, {
        href: "https://mochajs.org/",
        children: "https://mochajs.org/"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Code examples:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// import mocha"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " mocha"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'mocha'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "describe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// test scenarios"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// detailed test case, it() is in the describe()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "before"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// this action is before all test cases"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "after"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(): "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// this action is after all test cases"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "introduction-of-chai",
      children: "Introduction of CHAI"
    }), "\n", createVNode(_components.p, {
      children: "Chai is a JavaScript assertion library for assertion and expectation validation when writing and running test cases. It is a popular testing tool that is often used in conjunction with testing frameworks (e.g. Mocha, Jest, etc.) to help developers write and execute various types of tests, including unit tests and integration tests."
    }), "\n", createVNode(_components.p, {
      children: "Here are some of the key features and uses of Chai:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Readable Assertion Syntax: Chai provides an easy to read and write assertion syntax that makes test cases easier to understand. It supports natural language assertion styles such as expect(foo).to.be.a(‘string’) or expect(bar).to.equal(42)."
      }), "\n", createVNode(_components.li, {
        children: "Multiple Assertion Styles: Chai provides a number of different assertion styles to suit different developer preferences. The main styles include BDD (Behavior-Driven Development) style, TDD (Test-Driven Development) style and assert style."
      }), "\n", createVNode(_components.li, {
        children: "Plugin extensions: Chai can be extended with plugins to support more assertion types and features. This allows Chai to fulfill a variety of testing needs, including asynchronous testing, HTTP request testing, and more."
      }), "\n", createVNode(_components.li, {
        children: "Easy Integration: Chai can be easily integrated with various testing frameworks such as Mocha, Jest, Jasmine etc. This makes it a powerful tool for writing test cases."
      }), "\n", createVNode(_components.li, {
        children: "Chained Assertions Support: Chai allows you to chain calls to multiple assertions to make complex testing and validation easier."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Official documentation: ", createVNode(_components.a, {
        href: "https://www.chaijs.com/",
        children: "https://www.chaijs.com/"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Code examples:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// import chai"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " chai"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'chai'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " expect"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chai.expect;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// demo assertions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "actual"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " result"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">).to.{assert}(<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "expected"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " result"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">) // Asserts that the target is strictly equal to value."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".expect(‘hello').to.equal('hello'); // Asserts that the target is strictly equal to value."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".expect({ foo: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'bar'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }).to.not.equal({ foo: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'bar'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }); // Asserts that the target is not strictly equal to value."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".expect('foobar').to.contain('foo'); // Asserts that the target contains the given substring."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".expect(foo).to.exist; // Asserts that the target is neither null nor undefined."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".expect(5).to.be.at.most(5); // Asserts that the target is less than or equal to value."
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "project-dependencies",
      children: "Project dependencies"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The following environments need to be installed in advance"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " nodejs, demo version v21.1.0"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "project-structure",
      children: "Project Structure"
    }), "\n", createVNode(_components.p, {
      children: "The following is the file structure of a SuperTest API Automation Test project, which contains test configuration files, test case files, test tool files, and test report files. It can be used for reference."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "SuperTest-Jest-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── README.md"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── package.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── package-lock.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Config // Test configuration "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── config.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Specs // Test case "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── test.spec.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Utils // Test tool "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── utils.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Report // Test report "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── report.html"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── .gitignore"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── node_modules // Project dependencies"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    └── ..."
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "next",
      children: "Next"
    }), "\n", createVNode(_components.p, {
      children: "In the next post, we will introduce how to build a SuperTest API automation test project from 0 to 1 using Supertest, so stay tuned."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/blog/en/API-Automation-Testing/supertest-tutorial-getting-started-and-own-environment-preparation.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/supertest-tutorial-getting-started-and-own-environment-preparation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/supertest-tutorial-getting-started-and-own-environment-preparation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
