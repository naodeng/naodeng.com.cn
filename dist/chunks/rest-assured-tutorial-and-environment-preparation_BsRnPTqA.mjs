import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "REST Assured API Automation Testing Tutorial: Getting Started and Setting Up Your Environment",
  "description": "a tutorial on REST Assured, focusing on getting started and preparing the environment to be built.",
  "date": "2023-11-01T08:24:49.000Z",
  "author": "nao.deng",
  "tags": ["RestAssured", "API Testing"],
  "series": ["REST Assured API Automation Testing Tutorial"],
  "cover": "./rest-assured-tutorial-and-environment-preparation-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction-of-restassured",
    "text": "Introduction of RestAssured"
  }, {
    "depth": 2,
    "slug": "project-structure",
    "text": "Project structure"
  }, {
    "depth": 3,
    "slug": "gradle-built-versions",
    "text": "Gradle-built versions"
  }, {
    "depth": 3,
    "slug": "maven-built-versions",
    "text": "Maven-built versions"
  }, {
    "depth": 2,
    "slug": "project-dependency",
    "text": "Project dependency"
  }, {
    "depth": 2,
    "slug": "syntax-example",
    "text": "Syntax Example"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
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
      id: "introduction-of-restassured",
      children: "Introduction of RestAssured"
    }), "\n", createVNode(_components.p, {
      children: "REST Assured is a Java testing framework for testing RESTful APIs that enables developers/testers to easily write and execute API tests. It is designed to make API testing simple and intuitive, while providing rich functionality and flexibility. The following are some of the key features and uses of REST Assured:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Initiating HTTP requests: REST Assured allows you to easily build and initiate HTTP GET, POST, PUT, DELETE and other types of requests. You can specify the request’s URL, headers, parameters, body, and other information."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Chained Syntax: REST Assured uses chained syntax to make test code more readable and easy to write. You can describe your test cases in a natural way without writing tons of code."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Assertions and Checksums: REST Assured provides a rich set of checksums that can be used to validate API response status codes, response bodies, response headers, and so on. You can add multiple assertions according to your testing needs."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Support for multiple data formats: REST Assured supports a variety of data formats, including JSON, XML, HTML, Text and so on. You can use appropriate methods to handle different formats of response data."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Integration with BDD (Behavior-Driven Development): REST Assured can be used in conjunction with BDD frameworks (such as Cucumber), allowing you to better describe and manage test cases."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Simulate HTTP Server: REST Assured also includes a simulation of an HTTP server, allowing you to simulate the behavior of an API for end-to-end testing."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Extensibility: REST Assured can be customized with plug-ins and extensions to meet specific testing needs."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Overall, REST Assured is a powerful and easy-to-use API testing framework that helps you easily perform RESTful API testing and provides many tools to verify the correctness and performance of an API. Whether you are a beginner or an experienced developer/tester, REST Assured is a valuable tool for quickly getting started with API automation testing."
    }), "\n", createVNode(_components.h2, {
      id: "project-structure",
      children: "Project structure"
    }), "\n", createVNode(_components.h3, {
      id: "gradle-built-versions",
      children: "Gradle-built versions"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- src"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - main"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - (The main source code of the application)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - api"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        - (REST Assured test code)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - UsersAPITest.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - ProductsAPITest.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        - TestConfig.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - TestConfig.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - resources"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - (configuration files, test data, etc.)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - (other project files and resources)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- build.gradle (Gradle project configuration file)"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In this example directory structure:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "src/test/java/api directory is used to hold REST Assured test classes, each of which typically involves tests for one or more related API endpoints. For example, UsersAPITest.java and ProductsAPITest.java could contain tests for user management and product management."
      }), "\n", createVNode(_components.li, {
        children: "The src/test/java/util directory can be used to store tool classes that are shared among tests, such as TestConfig.java for configuring REST Assured."
      }), "\n", createVNode(_components.li, {
        children: "The src/test/resources directory can contain test data files, configuration files, and other resources that can be used in tests."
      }), "\n", createVNode(_components.li, {
        children: "build.gradle is the gradle project’s configuration file, which is used to define the project’s dependencies, build configuration, and other project settings."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "maven-built-versions",
      children: "Maven-built versions"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- src"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - main"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - (The main source code of the application)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - api"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        - (REST Assured test code)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - UsersAPITest.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - ProductsAPITest.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        - util"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          - TestConfig.java"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - resources"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - (configuration files, test data, etc.)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - (other project files and resources)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "- pom.xml (Maven project configuration file)"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "In this example directory structure:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "src/test/java/api directory is used to hold REST Assured test classes, each of which typically involves tests for one or more related API endpoints. For example, UsersAPITest.java and ProductsAPITest.java could contain tests for user management and product management."
      }), "\n", createVNode(_components.li, {
        children: "The src/test/java/util directory can be used to store tool classes that are shared among tests, such as TestConfig.java for configuring REST Assured."
      }), "\n", createVNode(_components.li, {
        children: "The src/test/resources directory can contain test data files, configuration files, and other resources that can be used in the tests."
      }), "\n", createVNode(_components.li, {
        children: "pom.xml is a Maven project configuration file that is used to define project dependencies, build configurations, and other project settings."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "project-dependency",
      children: "Project dependency"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "JDK 1.8+, I’m using JDK 19"
      }), "\n", createVNode(_components.li, {
        children: "Gradle 6.0+ or Maven 3.0+, I’m using Gradle 8.44 and Maven 3.9.5"
      }), "\n", createVNode(_components.li, {
        children: "RestAssured 4.3.3+, I’m using the latest version 5.3.2"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "syntax-example",
      children: "Syntax Example"
    }), "\n", createVNode(_components.p, {
      children: "Here’s a simple example of RestAssured syntax that demonstrates how to perform a GET request and validate the response: First, make sure you have added a RestAssured dependency to your Gradle or Maven project."
    }), "\n", createVNode(_components.p, {
      children: "First, make sure you have added a RestAssured dependency to your Gradle or Maven project."
    }), "\n", createVNode(_components.p, {
      children: "Gradle dependency:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "groovy",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "dependency {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    implementation "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'io.rest-assured:rest-assured:5.3.1'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Maven dependency:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "xml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependency"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">io.rest-assured</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "groupId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">rest-assured</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "artifactId"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">5.3.1</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "version"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "dependency"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Next, create a test class and write the following code:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "java",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " io.restassured.RestAssured;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " io.restassured.response.Response;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " org.testng.annotations.Test;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " static"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " io.restassured.RestAssured.given;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " static"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " org.hamcrest.Matchers.equalTo;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " RestAssuredDemo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    @"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "Test"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " testGetRequest"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Set the base URI, using JSONPlaceholder as an example"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        RestAssured.baseURI "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"https://jsonplaceholder.typicode.com\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Send a GET request and save the response"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        Response response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " given"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "when"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "get"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"/posts/1\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "extract"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "response"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Print the JSON content of the response"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        System.out."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "println"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Response JSON: \""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "asString"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Verify that the status code is 200."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Validate that the status code is 200"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "statusCode"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// validate that the response has a status code of 200."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Validate a specific field value in the response"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"id\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equalTo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"quia et suscipit"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "suscipit recusandae consequuntur expedita et cum"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "reprehenderit molestiae ut ut quas totam"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "nostrum rerum est autem sunt rem eveniet architecto\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The above code executes a GET request to JSONPlaceholder’s ", createVNode(_components.code, {
        children: "/posts/1"
      }), " endpoint and validates the response with a status code and values for specific fields. You can modify the base URI and validation conditions to suit your needs."]
    }), "\n", createVNode(_components.p, {
      children: "In this example, we’re using the TestNG testing framework, but you can also use other testing frameworks such as JUnit. make sure your test classes contain the appropriate import statements and configure them appropriately as needed."
    }), "\n", createVNode(_components.p, {
      children: "This is a simple example of RestAssured syntax for performing a GET request and validating the response. You can build more complex test cases based on the needs of your project and the complexity of your API."
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

const url = "src/blog/en/API-Automation-Testing/rest-assured-tutorial-and-environment-preparation.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/rest-assured-tutorial-and-environment-preparation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/rest-assured-tutorial-and-environment-preparation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
