import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bruno API Automation Testing Tutorial: Building a Bruno API Automation Test project from 0 to 1",
  "description": "This blog post serves as a tutorial on Bruno API automation testing, guiding readers on constructing a Bruno API automation test project from scratch. The article provides detailed instructions on establishing the foundational structure of a test project, configuring the environment, and writing the first API test case. Through this tutorial, readers will progressively grasp the usage of the Bruno framework, building a comprehensive API automation test project from inception to completion. This process aims to enhance testing efficiency and maintainability.",
  "date": "2024-01-23T09:58:14.000Z",
  "author": "nao.deng",
  "tags": ["Bruno", "API Testing"],
  "categories": ["API automation testing", "Bruno"],
  "series": ["Bruno API Automation Testing Tutorial"],
  "cover": "./bruno-tutorial-building-your-own-project-from-0-to-1-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 3,
    "slug": "why-not-use-postman-and-insomnia",
    "text": "Why Not Use Postman and Insomnia?"
  }, {
    "depth": 3,
    "slug": "why-choose-bruno",
    "text": "Why Choose Bruno"
  }, {
    "depth": 2,
    "slug": "building-a-bruno-api-automation-test-project-from-0-to-1",
    "text": "Building a Bruno API Automation Test project from 0 to 1"
  }, {
    "depth": 3,
    "slug": "project-structure",
    "text": "Project Structure"
  }, {
    "depth": 3,
    "slug": "project-setup-preparation",
    "text": "Project Setup Preparation"
  }, {
    "depth": 4,
    "slug": "create-project-folder",
    "text": "Create Project Folder"
  }, {
    "depth": 4,
    "slug": "project-initialization",
    "text": "Project Initialization"
  }, {
    "depth": 4,
    "slug": "install-bruno-cli-dependencies",
    "text": "Install Bruno CLI Dependencies"
  }, {
    "depth": 3,
    "slug": "writing-api-test-cases-with-bruno",
    "text": "Writing API Test Cases with Bruno"
  }, {
    "depth": 4,
    "slug": "create-test-case-directory",
    "text": "Create Test Case Directory"
  }, {
    "depth": 4,
    "slug": "create-a-get-request-test-case",
    "text": "Create a GET Request Test Case"
  }, {
    "depth": 3,
    "slug": "adding-test-assertions-to-the-get-request",
    "text": "Adding Test Assertions to the GET Request"
  }, {
    "depth": 4,
    "slug": "using-brunos-built-in-assert-for-test-assertions",
    "text": "Using Bruno’s Built-in Assert for Test Assertions"
  }, {
    "depth": 4,
    "slug": "writing-test-assertions-using-javascript",
    "text": "Writing Test Assertions Using JavaScript"
  }, {
    "depth": 3,
    "slug": "creating-a-new-post-request-test-case",
    "text": "Creating a New POST Request Test Case"
  }, {
    "depth": 4,
    "slug": "adding-test-assertions-to-the-post-request",
    "text": "Adding Test Assertions to the Post Request"
  }, {
    "depth": 5,
    "slug": "using-brunos-built-in-assert-for-post-request-test-assertions",
    "text": "Using Bruno’s Built-in Assert for Post Request Test Assertions"
  }, {
    "depth": 5,
    "slug": "writing-test-assertions-using-javascript-for-the-post-request",
    "text": "Writing Test Assertions Using JavaScript for the Post Request"
  }, {
    "depth": 3,
    "slug": "running-two-test-cases-locally",
    "text": "Running Two Test Cases Locally"
  }, {
    "depth": 4,
    "slug": "environment-variable-configuration",
    "text": "Environment Variable Configuration"
  }, {
    "depth": 5,
    "slug": "creating-environment-variable-configuration-files",
    "text": "Creating Environment Variable Configuration Files"
  }, {
    "depth": 5,
    "slug": "using-environment-variables-in-test-cases",
    "text": "Using Environment Variables in Test Cases"
  }, {
    "depth": 5,
    "slug": "debugging-environment-variables",
    "text": "Debugging Environment Variables"
  }, {
    "depth": 4,
    "slug": "running-test-cases-from-the-command-line",
    "text": "Running Test Cases from the Command Line"
  }, {
    "depth": 5,
    "slug": "pre-check",
    "text": "Pre-check"
  }, {
    "depth": 5,
    "slug": "debugging-and-running-test-cases-from-the-command-line",
    "text": "Debugging and Running Test Cases from the Command Line"
  }, {
    "depth": 4,
    "slug": "generating-json-format-reports",
    "text": "Generating JSON Format Reports"
  }, {
    "depth": 4,
    "slug": "integration-into-cicd-processes",
    "text": "Integration into CI/CD Processes"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
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
    }), "\n", createVNode(_components.h3, {
      id: "why-not-use-postman-and-insomnia",
      children: "Why Not Use Postman and Insomnia?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Regarding Postman: In May 2023, Postman announced the gradual phasing out of the Scratch Pad model with offline capabilities. Most functions will be shifted to the cloud, requiring users to log in for access. (Limited functionality is available without logging in, but the extent of data upload to the cloud during testing, compromising security, remains uncertain.)"
      }), "\n", createVNode(_components.li, {
        children: "About Insomnia: With the release of version 8.0 on September 28, 2023, Insomnia intensified its reliance on the cloud. Users must log in to utilize the full functionality of Insomnia. The existing Scratch Pad features are restricted without login. (The security implications of potential data transmission to the cloud during testing without confirmation remain unclear.)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Therefore, an alternative solution that isolates API workspace data from third-party servers is necessary, with Bruno emerging as one feasible substitute."
    }), "\n", createVNode(_components.h3, {
      id: "why-choose-bruno",
      children: "Why Choose Bruno"
    }), "\n", createVNode(_components.p, {
      children: ["Official Documentation: ", createVNode(_components.a, {
        href: "https://github.com/usebruno/bruno/discussions/269",
        children: "https://github.com/usebruno/bruno/discussions/269"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Comparison with Postman: ", createVNode(_components.a, {
        href: "https://www.usebruno.com/compare/bruno-vs-postman",
        children: "https://www.usebruno.com/compare/bruno-vs-postman"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Open source, MIT License"
    }), "\n", createVNode(_components.p, {
      children: "Cross-platform support (Mac/Linux/Windows)"
    }), "\n", createVNode(_components.p, {
      children: "Offline client with no plans for cloud synchronization"
    }), "\n", createVNode(_components.p, {
      children: "Supports Postman/Insomnia script import (limited to API request scripts, excluding test scripts)"
    }), "\n", createVNode(_components.p, {
      children: ["Relatively active community, with a clear ", createVNode(_components.a, {
        href: "https://github.com/usebruno/bruno/discussions/384",
        children: "product development roadmap"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "building-a-bruno-api-automation-test-project-from-0-to-1",
      children: "Building a Bruno API Automation Test project from 0 to 1"
    }), "\n", createVNode(_components.p, {
      children: "This article focuses on leveraging Bruno’s features to construct an API automation test project from scratch."
    }), "\n", createVNode(_components.p, {
      children: ["For Bruno installation and basic usage, please refer to: ", createVNode(_components.a, {
        href: "https://github.com/naodeng/Bruno-API-Test-Starter/blob/main/README.md",
        children: "Introduction to using Bruno as a postman replacement"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "project-structure",
      children: "Project Structure"
    }), "\n", createVNode(_components.p, {
      children: "The structure of a Bruno API automation test project is as follows:"
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
            children: "Bruno-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── README.md // Project documentation file"
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
            children: "├── Testcase // Test case folder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── APITestDemo1.bru // Test case file 1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── APITestDemo2.bru // Test case file 2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── bruno.json // Bruno COLLECTION configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── environments // Different test environment folder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│       └── dev.bru // Test environment configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── Report // Test report files"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│       └── report.json // JSON format report file"
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
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "project-setup-preparation",
      children: "Project Setup Preparation"
    }), "\n", createVNode(_components.h4, {
      id: "create-project-folder",
      children: "Create Project Folder"
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
            children: " Bruno-demo"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "project-initialization",
      children: "Project Initialization"
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
            children: " Navigate"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " to"
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
            children: " Bruno-demo"
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
            children: " Initialize"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " the"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Node.js"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " project"
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
    }), "\n", createVNode(_components.h4, {
      id: "install-bruno-cli-dependencies",
      children: "Install Bruno CLI Dependencies"
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
            children: " Bruno"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " CLI"
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
            children: " @usebruno/cli"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --save-dev"
          })]
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Bruno CLI is the official command-line tool provided by Bruno. It allows easy execution of API collections through simple command-line commands. This tool facilitates testing APIs in different environments, automating testing workflows, and integrating API testing with continuous integration and deployment workflows."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "writing-api-test-cases-with-bruno",
      children: "Writing API Test Cases with Bruno"
    }), "\n", createVNode(_components.h4, {
      id: "create-test-case-directory",
      children: "Create Test Case Directory"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Run Bruno app to the homepage"
      }), "\n", createVNode(_components.li, {
        children: ["Create a COLLECTION named Testcase, and choose the project folder created above as the directory for the COLLECTION.\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/bkIvUi.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "create-a-get-request-test-case",
      children: "Create a GET Request Test Case"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click the ADD REQUEST button under the Testcase COLLECTION to create a new GET request."
      }), "\n", createVNode(_components.li, {
        children: ["Enter the request name as GetDemo and the request URL as ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/XYeiXB.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h3, {
      id: "adding-test-assertions-to-the-get-request",
      children: "Adding Test Assertions to the GET Request"
    }), "\n", createVNode(_components.h4, {
      id: "using-brunos-built-in-assert-for-test-assertions",
      children: "Using Bruno’s Built-in Assert for Test Assertions"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Click the Assert button under the GetDemo request to enter the test assertion editing page."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Enter Assertion 1: Response status code equals 200. Assertion 2: The title in the response body contains “provident.”\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/z86CB2.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Debugging Assertions: Click the Run button in the upper right corner to execute the assertions and check if the results meet expectations.\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/YkAbiG.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "writing-test-assertions-using-javascript",
      children: "Writing Test Assertions Using JavaScript"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click the Tests button under the GetDemo request to enter the test script editing page."
      }), "\n", createVNode(_components.li, {
        children: "Enter the script code, Assertion 1: Response status code equals 200. Assertion 2: The title in the response body contains “provident.”"
      }), "\n"]
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
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"res.status should be 200\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
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
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"res.body should be correct\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "contains"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'provident'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ubyRwj.png",
        alt: " "
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Debugging Assertions: Click the Run button in the upper right corner to execute the assertions and check if the results meet expectations.\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/3pAMDd.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "creating-a-new-post-request-test-case",
      children: "Creating a New POST Request Test Case"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Click the ADD REQUEST button under the Testcase COLLECTION to create a new POST request."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Enter the request name as PostDemo, and the request URL as ", createVNode(_components.a, {
            href: "https://jsonplaceholder.typicode.com/posts",
            children: "https://jsonplaceholder.typicode.com/posts"
          }), ".\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/3IP5B4.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Click the Body button under the newly created PostDemo request to enter the request body editing page."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Select the body type as JSON and enter the request body content:"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"title\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"foo\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bar\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"userId\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          })]
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
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/psbGLD.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "adding-test-assertions-to-the-post-request",
      children: "Adding Test Assertions to the Post Request"
    }), "\n", createVNode(_components.h5, {
      id: "using-brunos-built-in-assert-for-post-request-test-assertions",
      children: "Using Bruno’s Built-in Assert for Post Request Test Assertions"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Click the Assert button under the PostDemo request to enter the test assertion editing page."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Enter Assertion 1: Response status code equals 201. Assertion 2: The title in the response body equals “foo.”\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/oN8D5G.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Debugging Assertions: Click the Run button in the upper right corner to execute the assertions and check if the results meet expectations.\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/HKb4fn.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "writing-test-assertions-using-javascript-for-the-post-request",
      children: "Writing Test Assertions Using JavaScript for the Post Request"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click the Tests button under the PostDemo request to enter the test script editing page."
      }), "\n", createVNode(_components.li, {
        children: "Enter the script code, Assertion 1: Response status code equals 201. Assertion 2: The title in the response body equals “foo.”"
      }), "\n"]
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
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"res.status should be 200\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "201"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"res.body should be correct\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'foo'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Debugging Assertions: Click the Run button in the upper right corner to execute the assertions and check if the results meet expectations.\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/mkKIsE.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "running-two-test-cases-locally",
      children: "Running Two Test Cases Locally"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click the Run button under the Testcase COLLECTION to run all test cases."
      }), "\n", createVNode(_components.li, {
        children: "Confirm if the results meet expectations."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/CvfPIn.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "This concludes the writing and assertion of test cases for two interfaces."
    }), "\n", createVNode(_components.h4, {
      id: "environment-variable-configuration",
      children: "Environment Variable Configuration"
    }), "\n", createVNode(_components.p, {
      children: ["By reviewing the results of the two test cases, we found that the request addresses for both test cases are ", createVNode(_components.code, {
        children: "https://jsonplaceholder.typicode.com"
      }), ". If we need to run these two test cases in different testing environments, we need to modify the request addresses for both test cases. This could be tedious if there are many test cases. Bruno provides the functionality of environment variables, allowing us to configure request addresses in test cases as environment variables. This way, we only need to configure different environment variables in different testing environments to run test cases."]
    }), "\n", createVNode(_components.h5, {
      id: "creating-environment-variable-configuration-files",
      children: "Creating Environment Variable Configuration Files"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click the Environments button under the Testcase COLLECTION to enter the environment variable configuration page."
      }), "\n", createVNode(_components.li, {
        children: "Click the ADD ENVIRONMENT button in the upper right corner to create a new environment variable configuration file. Enter the name as dev and click the SAVE button to save the configuration file."
      }), "\n", createVNode(_components.li, {
        children: "Click the newly created dev environment variable configuration file to enter the environment variable configuration page."
      }), "\n", createVNode(_components.li, {
        children: ["Click the ADD VARIABLE button in the upper right corner to create a new environment variable. Enter the name as host and the value as ", createVNode(_components.code, {
          children: "https://jsonplaceholder.typicode.com"
        }), ". Click the SAVE button to save the environment variable."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/YDKvOr.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h5, {
      id: "using-environment-variables-in-test-cases",
      children: "Using Environment Variables in Test Cases"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click the GetDemo request under the Testcase COLLECTION to enter the GetDemo request editing page."
      }), "\n", createVNode(_components.li, {
        children: ["Modify the request address of the GetDemo request to ", createVNode(_components.code, {
          children: "&#123;&#123;host&#125;&#125;/posts/1"
        }), " and click the SAVE button to save the GetDemo request."]
      }), "\n", createVNode(_components.li, {
        children: "Click the PostDemo request under the Testcase COLLECTION to enter the PostDemo request editing page."
      }), "\n", createVNode(_components.li, {
        children: ["Modify the request address of the PostDemo request to ", createVNode(_components.code, {
          children: "&#123;&#123;host&#125;&#125;/posts"
        }), " and click the SAVE button to save the PostDemo request."]
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "debugging-environment-variables",
      children: "Debugging Environment Variables"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click the Environments button under the Testcase COLLECTION, select the dev environment variable."
      }), "\n", createVNode(_components.li, {
        children: "Click the RUN button in the upper right corner to run all test cases. Confirm if the results meet expectations."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/NfAX6z.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "This concludes the configuration and debugging of environment variables."
    }), "\n", createVNode(_components.h4, {
      id: "running-test-cases-from-the-command-line",
      children: "Running Test Cases from the Command Line"
    }), "\n", createVNode(_components.h5, {
      id: "pre-check",
      children: "Pre-check"
    }), "\n", createVNode(_components.p, {
      children: "We have set the storage directory for the test cases to the project folder created earlier. We need to check if the test case files and environment variable configuration files have been successfully created in the project folder."
    }), "\n", createVNode(_components.p, {
      children: "Currently, our project folder directory structure is as follows:"
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
            children: "Bruno-demo"
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
            children: "├── Testcase // Test case folder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── APITestDemo1.bru // Test case file 1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── APITestDemo2.bru // Test case file 2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── bruno.json // Bruno COLLECTION configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── environments // Different test environment folder"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│       └── dev.bru // Test environment configuration file"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── node_modules // Project dependencies"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "debugging-and-running-test-cases-from-the-command-line",
      children: "Debugging and Running Test Cases from the Command Line"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["In the Testcase folder under the project file, run the command ", createVNode(_components.code, {
          children: "bru run --env dev"
        }), " to run all test cases."]
      }), "\n", createVNode(_components.li, {
        children: "Confirm if the results meet expectations."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/iKnEYL.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h4, {
      id: "generating-json-format-reports",
      children: "Generating JSON Format Reports"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "In the Testcase folder under the project file, create a Report folder to store the test report files."
      }), "\n", createVNode(_components.li, {
        children: ["In the Testcase folder, run the command ", createVNode(_components.code, {
          children: "bru run --env dev --output Report/results.json"
        }), " to run all test cases."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/MM85y5.png",
        alt: " "
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Confirm that the test report file is generated successfully.\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/jnJHMQ.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "At this point, the construction of the Bruno API automation testing project is complete."
    }), "\n", createVNode(_components.h4, {
      id: "integration-into-cicd-processes",
      children: "Integration into CI/CD Processes"
    }), "\n", createVNode(_components.p, {
      children: ["For Bruno installation and basic usage, please refer to: ", createVNode(_components.a, {
        href: "https://github.com/Automation-Test-Starter/Bruno-API-Test-Starter/blob/main/README.md#cicd-integration",
        children: "Introduction to using Bruno as a postman replacement#CI/CD Integration"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Bruno Official Documentation ", createVNode(_components.a, {
          href: "https://docs.usebruno.com/",
          children: "https://docs.usebruno.com/"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Introduction to using Bruno as a postman replacement ", createVNode(_components.a, {
          href: "https://naodeng.com.cn/en/posts/api-automation-testing/introduction_of_bruno/",
          children: "https://naodeng.com.cn/en/posts/api-automation-testing/introduction_of_bruno/"
        })]
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

const url = "src/blog/en/API-Automation-Testing/bruno-tutorial-building-your-own-project-from-0-to-1.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/bruno-tutorial-building-your-own-project-from-0-to-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/API-Automation-Testing/bruno-tutorial-building-your-own-project-from-0-to-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
