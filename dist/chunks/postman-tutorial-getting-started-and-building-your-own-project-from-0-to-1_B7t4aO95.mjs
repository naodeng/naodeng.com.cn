import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Postman API Automation Testing Tutorial: Getting Started and Building a Postman API Automation Test project from 0 to 1",
  "description": "This guide provides a comprehensive introduction to getting started with Postman API automation testing, covering both the basics and the step-by-step process of building a project from scratch. Learn how to effectively use Postman for API testing, understand the foundational structure of project setup, environment configuration, and writing test cases from the ground up.",
  "date": "2023-11-21T09:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Postman", "API Testing"],
  "categories": ["API Automation Testing", "Postman"],
  "series": ["Postman API Automation Testing Tutorial"],
  "cover": "./postman-tutorial-getting-started-and-building-your-own-project-from-0-to-1-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 3,
    "slug": "introduction-to-api-testing",
    "text": "Introduction to API Testing"
  }, {
    "depth": 4,
    "slug": "what-is-api",
    "text": "What is API?"
  }, {
    "depth": 4,
    "slug": "what-is-api-testing",
    "text": "What is API Testing?"
  }, {
    "depth": 4,
    "slug": "types-of-api-testing",
    "text": "Types of API Testing"
  }, {
    "depth": 4,
    "slug": "steps-in-api-testing",
    "text": "Steps in API Testing"
  }, {
    "depth": 3,
    "slug": "introduction-to-postman-and-newman",
    "text": "Introduction to Postman and Newman"
  }, {
    "depth": 2,
    "slug": "project-dependencies",
    "text": "Project Dependencies"
  }, {
    "depth": 2,
    "slug": "project-structure",
    "text": "Project Structure"
  }, {
    "depth": 2,
    "slug": "building-a-postman-api-automation-test-project-from-0-to-1",
    "text": "Building a Postman API Automation Test Project from 0 to 1"
  }, {
    "depth": 3,
    "slug": "create-a-new-project-folder",
    "text": "Create a New Project Folder"
  }, {
    "depth": 3,
    "slug": "project-initialization",
    "text": "Project initialization"
  }, {
    "depth": 3,
    "slug": "install-dependencies",
    "text": "Install dependencies"
  }, {
    "depth": 3,
    "slug": "writing-api-test-cases-in-postman",
    "text": "Writing API Test Cases in Postman"
  }, {
    "depth": 4,
    "slug": "creating-a-collection-and-request-in-postman",
    "text": "Creating a Collection and Request in Postman"
  }, {
    "depth": 4,
    "slug": "editing-request-and-writing-test-cases",
    "text": "Editing Request and Writing Test Cases"
  }, {
    "depth": 5,
    "slug": "get-demo",
    "text": "get-demo"
  }, {
    "depth": 5,
    "slug": "post-demo",
    "text": "post-demo"
  }, {
    "depth": 3,
    "slug": "configuring-test-environment-in-postman",
    "text": "Configuring Test Environment in Postman"
  }, {
    "depth": 4,
    "slug": "adding-environment-variables",
    "text": "Adding Environment Variables"
  }, {
    "depth": 4,
    "slug": "updating-requests",
    "text": "Updating Requests"
  }, {
    "depth": 4,
    "slug": "verifying-environment-variables",
    "text": "Verifying Environment Variables"
  }, {
    "depth": 4,
    "slug": "exporting-environment-variables-and-test-case-files",
    "text": "Exporting Environment Variables and Test Case Files"
  }, {
    "depth": 3,
    "slug": "adjusting-project-file-structure",
    "text": "Adjusting Project File Structure"
  }, {
    "depth": 4,
    "slug": "creating-env-and-testcase-folders",
    "text": "Creating Env and Testcase Folders"
  }, {
    "depth": 4,
    "slug": "adjusting-the-packagejson-file",
    "text": "Adjusting the package.json file"
  }, {
    "depth": 3,
    "slug": "running-test-cases",
    "text": "Running Test Cases"
  }, {
    "depth": 2,
    "slug": "reference",
    "text": "Reference"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    input: "input",
    li: "li",
    ol: "ol",
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
    }), "\n", createVNode(_components.h3, {
      id: "introduction-to-api-testing",
      children: "Introduction to API Testing"
    }), "\n", createVNode(_components.h4, {
      id: "what-is-api",
      children: "What is API?"
    }), "\n", createVNode(_components.p, {
      children: "API, which stands for Application Programming Interface, is a computing interface that defines the interactions between multiple software intermediaries. It specifies the types of calls or requests that can be made, how they are made, the data format to be used, and the conventions to be followed. APIs can also provide extension mechanisms, allowing users to extend existing functionalities in various ways. An API can be custom-made for a specific component or designed based on industry standards to ensure interoperability. By hiding information, APIs enable modular programming, allowing users to work independently using interfaces."
    }), "\n", createVNode(_components.h4, {
      id: "what-is-api-testing",
      children: "What is API Testing?"
    }), "\n", createVNode(_components.p, {
      children: ["API testing is a type of ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Software_testing",
        children: "software testing"
      }), " that includes two types: specifically testing the functionality of ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Application_programming_interface",
        children: "Application Programming Interfaces"
      }), " (referred to as API) and, more broadly, testing the overall functionality, reliability, security, and performance in ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Integration_testing",
        children: "integration testing"
      }), " by invoking APIs."]
    }), "\n", createVNode(_components.p, {
      children: "API Best Practice:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "API definition follows the RESTful API style, with semantic URI definitions, accurate HTTP status codes, and the ability to understand the relationships between resources through API definitions."
      }), "\n", createVNode(_components.li, {
        children: "Detailed and accurate API documentation (such as Swagger documentation)."
      }), "\n", createVNode(_components.li, {
        children: ["External APIs may include version numbers for quick iteration (e.g., ", createVNode(_components.a, {
          href: "https://thoughtworks.com/v1/users/",
          children: "https://thoughtworks.com/v1/users/"
        }), ")."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Testing in different quadrants of the testing pyramid has different purposes and strategies. API testing mainly resides in the second and fourth quadrants."
    }), "\n", createVNode(_components.p, {
      children: "API testing holds a relatively high position in the testing pyramid, focusing on testing functionality and business logic at the boundaries of systems and services. It is executed after the service is built and deployed in the testing environment for validation."
    }), "\n", createVNode(_components.h4, {
      id: "types-of-api-testing",
      children: "Types of API Testing"
    }), "\n", createVNode(_components.p, {
      children: "Functional Testing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Correctness Testing"
      }), "\n", createVNode(_components.li, {
        children: "Exception Handling"
      }), "\n", createVNode(_components.li, {
        children: "Internal Logic"
      }), "\n", createVNode(_components.li, {
        children: "…"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Non-functional Testing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Performance"
      }), "\n", createVNode(_components.li, {
        children: "Security"
      }), "\n", createVNode(_components.li, {
        children: "…"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "steps-in-api-testing",
      children: "Steps in API Testing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Send Request"
      }), "\n", createVNode(_components.li, {
        children: "Get Response"
      }), "\n", createVNode(_components.li, {
        children: "Verify Response Result"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "introduction-to-postman-and-newman",
      children: "Introduction to Postman and Newman"
    }), "\n", createVNode(_components.p, {
      children: "Postman is a popular API development tool that provides an easy-to-use graphical interface for creating, testing, and debugging APIs. Postman also features the ability to easily write and share test scripts. It supports various HTTP request methods, including GET, POST, PUT, DELETE, etc., and can use various authentication and authorization methods for API testing."
    }), "\n", createVNode(_components.p, {
      children: "Newman is the command-line tool for Postman, used to run test suites without using the Postman GUI. With Newman, users can easily export Postman collections as an executable file and run them in any environment. Additionally, Newman supports generating test reports in HTML or Junit format and integrating into CI/CD pipelines for automated testing."
    }), "\n", createVNode(_components.p, {
      children: "In summary, Postman is a powerful API development and testing tool, while Newman is a convenient command-line tool for running test suites without using the Postman GUI. Their combination enhances the efficiency and accuracy of API testing and development."
    }), "\n", createVNode(_components.p, {
      children: "In addition to basic functionalities, Postman has the following features:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Environment and Variable Management: Postman supports switching between different environments, such as development, testing, and production, and variable management, making it easy to set variables for different test cases and requests."
      }), "\n", createVNode(_components.li, {
        children: "Automated Testing: Users can create and run automated tests using Postman, integrating them into continuous integration or deployment processes for more accurate and efficient testing."
      }), "\n", createVNode(_components.li, {
        children: "Collaboration and Sharing: Postman supports sharing collections and environments with teams, facilitating collaboration among team members."
      }), "\n", createVNode(_components.li, {
        children: "Monitoring: Postman provides API monitoring, allowing real-time monitoring of API availability and performance."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Meanwhile, Newman has the following characteristics:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Command-Line Interface: Newman can run in the command line, making it convenient for automated testing and integration into CI/CD processes."
      }), "\n", createVNode(_components.li, {
        children: "Support for Multiple Output Formats: Newman supports multiple output formats, including HTML, JSON, and JUnit formats, making it easy to use in different scenarios."
      }), "\n", createVNode(_components.li, {
        children: "Concurrent Execution: Newman supports concurrent test execution, improving testing efficiency."
      }), "\n", createVNode(_components.li, {
        children: "Lightweight: Compared to the Postman GUI, Newman is a lightweight tool, requiring fewer resources during test execution."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In conclusion, Postman and Newman are essential tools for modern API testing, offering powerful features for efficient, accurate, and automated API testing and development."
    }), "\n", createVNode(_components.p, {
      children: "In addition to the mentioned features and characteristics, Postman and Newman have other important functionalities and advantages:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Integration: Postman and Newman can integrate with many other tools and services, such as GitHub, Jenkins, Slack, etc., making it easy to integrate into development and deployment processes for more efficient API development and testing."
      }), "\n", createVNode(_components.li, {
        children: "Documentation Generation: Postman can generate API documentation using requests and responses, ensuring accurate and timely documentation."
      }), "\n", createVNode(_components.li, {
        children: "Test Scripts: Postman can use JavaScript to write test scripts, providing flexibility and customization in testing. Users can easily write custom test scripts to ensure the expected behavior of the API."
      }), "\n", createVNode(_components.li, {
        children: "History: Postman can store the history of API requests, making it convenient for users to view and manage previous requests and responses. This is useful for debugging and issue troubleshooting."
      }), "\n", createVNode(_components.li, {
        children: "Multi-Platform Support: Postman and Newman can run on multiple platforms, including Windows, MacOS, and Linux."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In summary, Postman and Newman are powerful tools for modern API testing and development, offering rich features and flexible test scripts to help developers and testers build and test APIs faster and more accurately."
    }), "\n", createVNode(_components.h2, {
      id: "project-dependencies",
      children: "Project Dependencies"
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
        }), " Node.js, with the demo version being v21.1.0"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Postman installed, you can download the installation package from the official website and complete the installation"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "project-structure",
      children: "Project Structure"
    }), "\n", createVNode(_components.p, {
      children: "The following is the file structure of an API automation testing project for Postman and Newman, which contains test configuration files, test case files, test tool files, and test report files. It can be used for reference."
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
            children: "Postman-Newman-demo"
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
            children: "├── Data // Test data folder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── testdata.csv // Test data file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Testcase // Test case folder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── APITestDemo.postman_collection.json // Test case file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Env // Test environment folder  "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── DemoEnv.postman_environment.json // Test environment file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Report // Test report folder"
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
            children: "    └── ..."
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "building-a-postman-api-automation-test-project-from-0-to-1",
      children: "Building a Postman API Automation Test Project from 0 to 1"
    }), "\n", createVNode(_components.p, {
      children: "Below, we will introduce how to build a Postman and Newman API automation test project from scratch, including test configuration, test cases, test environment, testing tools, and test reports."
    }), "\n", createVNode(_components.p, {
      children: ["You can refer to the demo project: ", createVNode(_components.a, {
        href: "https://github.com/Automation-Test-Starter/Postman-Newman-demo",
        children: "Postman-Newman-demo"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "create-a-new-project-folder",
      children: "Create a New Project Folder"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Postman-Newman-demo"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "project-initialization",
      children: "Project initialization"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " enter"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " project"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "cd"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Postman-Newman-demo"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " nodejs"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " project"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " initialization"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " init"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -y"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "install-dependencies",
      children: "Install dependencies"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Currently, the latest version of newman has some package compatibility issues reported by the html test, so we’re using version 5.1.2 here."
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " newman"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " library"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " newman@5.1.2--save-dev"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "writing-api-test-cases-in-postman",
      children: "Writing API Test Cases in Postman"
    }), "\n", createVNode(_components.h4, {
      id: "creating-a-collection-and-request-in-postman",
      children: "Creating a Collection and Request in Postman"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Open Postman, click the New button in the top left corner, select Collection, enter the name of the collection, click the Create Collection button to create a collection named “demo.”"
      }), "\n", createVNode(_components.li, {
        children: "In the collection, click the three dots in the top right corner, select Add Request, enter the name of the request, and click the Save button to create a request named “get-demo.” Add another request named “post-demo.”"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "editing-request-and-writing-test-cases",
      children: "Editing Request and Writing Test Cases"
    }), "\n", createVNode(_components.p, {
      children: "Refer to the interface documentation in the demoAPI.md file in the project folder to obtain information such as the URL, request method, request headers, and request body used by the “demo” requests."
    }), "\n", createVNode(_components.h5, {
      id: "get-demo",
      children: "get-demo"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["In the “get-demo” request, select the GET request method and enter the URL as ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "In the Headers section, add a header with Key as “Content-Type” and Value as “application/json.”"
      }), "\n", createVNode(_components.li, {
        children: "Under Tests, add the following script to verify the response result:"
      }), "\n"]
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
            children: "pm.test(\"res.status should be 200\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.response.to.have.status(200);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.body should be correct\", function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  var data = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.id).to.equal(1);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.title).to.contains('provident');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click the Send button to send the request and verify the response result."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112117P6poCX.png",
        alt: "2023112117P6poCX"
      })
    }), "\n", createVNode(_components.p, {
      children: "Confirm that the response result is correct, click the Save button to save the request."
    }), "\n", createVNode(_components.h5, {
      id: "post-demo",
      children: "post-demo"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["In the Request of the post-demo, select the POST request method and enter the URL as ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts",
          children: "https://jsonplaceholder.typicode.com/posts"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "In Headers, add a request header with Key as Content-Type and Value as application/json."
      }), "\n", createVNode(_components.li, {
        children: "In Body, select raw, select JSON format, and enter the following request body:"
      }), "\n"]
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
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    \"title\": \"foo\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    \"body\": \"bar\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    \"userId\": 1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Under Tests, add the following script to verify the response result:"
      }), "\n"]
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
            children: "pm.test(\"res.status should be 201\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.response.to.have.status(201);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.body should be correct\", function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  var data = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.id).to.equal(101);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.title).to.equal('foo');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112117x34eSN.png",
        alt: "2023112117x34eSN"
      })
    }), "\n", createVNode(_components.p, {
      children: "Confirm that the response result is correct, click the Save button to save the request."
    }), "\n", createVNode(_components.h3, {
      id: "configuring-test-environment-in-postman",
      children: "Configuring Test Environment in Postman"
    }), "\n", createVNode(_components.p, {
      children: "The following steps involve using the host of the API requests as environment variables for demonstration purposes."
    }), "\n", createVNode(_components.h4, {
      id: "adding-environment-variables",
      children: "Adding Environment Variables"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In the top right corner of Postman, click the gear icon, select Manage Environments, click the Add button, enter the environment name as “DemoEnv,” and click the Add button to create an environment named “DemoEnv.”"
      }), "\n", createVNode(_components.li, {
        children: ["Edit the environment variables, add a key named “host” with a value of ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com",
          children: "https://jsonplaceholder.typicode.com"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Click the Add button to save the environment variables."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "updating-requests",
      children: "Updating Requests"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In the “get-demo” request, update the URL to {{host}}/posts/1."
      }), "\n", createVNode(_components.li, {
        children: "In the “post-demo” request, update the URL to {{host}}/posts."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "verifying-environment-variables",
      children: "Verifying Environment Variables"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In the top right corner of Postman, click the gear icon, select DemoEnv to switch to the “DemoEnv” environment."
      }), "\n", createVNode(_components.li, {
        children: "Select the “get-demo” request, click the Send button to send the request, and verify the response result. After confirming the correctness of the response, click the Save button to save the request."
      }), "\n", createVNode(_components.li, {
        children: "Select the “post-demo” request, click the Send button to send the request, and verify the response result. After confirming the correctness of the response, click the Save button to save the request."
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "exporting-environment-variables-and-test-case-files",
      children: "Exporting Environment Variables and Test Case Files"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In the top right corner of Postman, click the gear icon, select Export, choose DemoEnv, and click the Export button to export the environment variables."
      }), "\n", createVNode(_components.li, {
        children: "Select the demo Collection containing the “get-demo” and “post-demo” requests, click the three dots in the top right corner, select Export, choose Collection v2.1, and click the Export button to export the test case file."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "adjusting-project-file-structure",
      children: "Adjusting Project File Structure"
    }), "\n", createVNode(_components.h4, {
      id: "creating-env-and-testcase-folders",
      children: "Creating Env and Testcase Folders"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In the project folder, create a folder named Env to store environment variable files."
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Env"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Env"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In the project folder, create a folder named Testcase to store test case files."
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Create"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Testcase"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " folder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Testcase"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Organizing Case and Environment Files"
    }), "\n", createVNode(_components.p, {
      children: "Place the exported environment variable files and test case files into the Env and Testcase folders within the project folder."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112117ePiBiv.png",
        alt: "2023112117ePiBiv"
      })
    }), "\n", createVNode(_components.h4, {
      id: "adjusting-the-packagejson-file",
      children: "Adjusting the package.json file"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In the package.json file, add the following script to run the test cases:"
      }), "\n"]
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
            children: "\"scripts\": {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    \"test\": \"newman run Testcase/demo.postman_collection.json -e Env/DemoEnv.postman_environment.json\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "running-test-cases",
      children: "Running Test Cases"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " test"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112117lt8FW9.png",
        alt: "2023112117lt8FW9"
      })
    }), "\n", createVNode(_components.h2, {
      id: "reference",
      children: "Reference"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/getting-started/introduction/",
          children: "Postman docs"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/",
          children: "newman docs"
        })
      }), "\n"]
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

const url = "src/blog/en/API-Automation-Testing/postman-tutorial-getting-started-and-building-your-own-project-from-0-to-1.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/postman-tutorial-getting-started-and-building-your-own-project-from-0-to-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/postman-tutorial-getting-started-and-building-your-own-project-from-0-to-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
