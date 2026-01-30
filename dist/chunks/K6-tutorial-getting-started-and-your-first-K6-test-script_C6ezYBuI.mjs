import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "K6 Performance Testing Tutorial: Getting Started and Write your first k6 test script",
  "description": "This article will take you into the world of K6 performance testing. The blog post covers the introductory knowledge of K6 performance testing, environment setup steps, and how to write your first test script. Whether you are a beginner or an experienced performance testing professional, this tutorial will provide you with clear guidance to help you quickly get started with K6 and start building efficient performance testing scripts",
  "date": "2024-01-09T09:22:00.000Z",
  "author": "nao.deng",
  "tags": ["K6", "Performance Testing"],
  "categories": ["Performance Testing", "k6"],
  "series": ["K6 Performance Testing Tutorial"],
  "cover": "./K6-tutorial-getting-started-and-your-first-K6-test-script-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction-of-k6",
    "text": "Introduction of K6"
  }, {
    "depth": 2,
    "slug": "official-website-and-documentation",
    "text": "Official website and documentation"
  }, {
    "depth": 2,
    "slug": "installation",
    "text": "Installation"
  }, {
    "depth": 3,
    "slug": "installation-on-mac-systems",
    "text": "Installation on Mac systems"
  }, {
    "depth": 3,
    "slug": "windows-installation",
    "text": "Windows installation"
  }, {
    "depth": 3,
    "slug": "docker-installation",
    "text": "Docker installation"
  }, {
    "depth": 3,
    "slug": "installation-on-other-systems",
    "text": "Installation on other systems"
  }, {
    "depth": 3,
    "slug": "confirming-a-successful-k6-installation",
    "text": "Confirming a successful K6 installation"
  }, {
    "depth": 2,
    "slug": "first-k6-test-script",
    "text": "First k6 test script"
  }, {
    "depth": 3,
    "slug": "write-the-first-test-script",
    "text": "Write the first test script"
  }, {
    "depth": 4,
    "slug": "create-a-new-k6-performance-testing-project-directory-and-go-to",
    "text": "Create a new K6 performance testing project directory and go to"
  }, {
    "depth": 4,
    "slug": "create-a-file-named-demojs-for-writing-test-scripts",
    "text": "Create a file named demo.js for writing test scripts"
  }, {
    "depth": 4,
    "slug": "editing-test-scripts",
    "text": "Editing Test Scripts"
  }, {
    "depth": 4,
    "slug": "running-the-test-script",
    "text": "Running the Test Script"
  }, {
    "depth": 4,
    "slug": "check-the-test-results",
    "text": "Check the test results"
  }, {
    "depth": 4,
    "slug": "parsing-demo-test-script",
    "text": "Parsing demo test script"
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introduction-of-k6",
      children: "Introduction of K6"
    }), "\n", createVNode(_components.p, {
      children: "k6 is an open source tool for performance testing and load testing, primarily used to evaluate and validate the performance and stability of applications. Here are some key features and information about k6:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Open Source:"
          }), " k6 is a completely open source performance testing tool with code stored on GitHub. This means that users are free to access, use and modify the tool’s source code."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "JavaScript scripting:"
          }), " k6 uses the JavaScript language to write test scripts, which makes writing test cases relatively easy and more developer-friendly. Scripts can contain HTTP requests, WebSocket connections, script execution logic, and more."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Support for multiple protocols:"
          }), " k6 supports a variety of common protocols, including HTTP, WebSocket, Socket.IO, gRPC and so on, so it can be widely used in various types of applications. 4."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Distributed Testing:"
          }), " k6 has distributed testing capabilities, allowing tests to be run on multiple nodes to simulate a more realistic production environment load."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Real-time results and reports:"
          }), " k6 provides real-time results, including request response time, throughput, etc., and is able to generate detailed HTML reports to help users better understand the performance status of their applications."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Containerization Support:"
          }), " k6 adapts to containerized environments, can be easily integrated into CI/CD pipelines, and works with common container orchestration tools such as Kubernetes."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Plugin ecosystem:"
          }), " k6 supports plugins that allow users to extend its functionality to meet specific needs."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Active Community:"
          }), " Since k6 is an open source project, there is an active community that provides support, documentation, and examples to make it easier for users to get started and solve problems."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Overall, k6 is a flexible, powerful and easy-to-use performance testing tool for applications and systems of all sizes."
    }), "\n", createVNode(_components.h2, {
      id: "official-website-and-documentation",
      children: "Official website and documentation"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/",
          children: "Official website"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/docs/",
          children: "Official Documentation"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", createVNode(_components.h3, {
      id: "installation-on-mac-systems",
      children: "Installation on Mac systems"
    }), "\n", createVNode(_components.p, {
      children: "Mac systems can install k6 via Homebrew:"
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
            children: "brew"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " k6"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "windows-installation",
      children: "Windows installation"
    }), "\n", createVNode(_components.p, {
      children: "Windows systems can install k6 via Chocolatey:"
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
            children: "choco"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " k6"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Or you can install k6 via winget:"
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
            children: "winget"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " k6"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "docker-installation",
      children: "Docker installation"
    }), "\n", createVNode(_components.p, {
      children: "k6 can also be installed via Docker:"
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
            children: "docker"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " pull"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " grafana/k6"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "installation-on-other-systems",
      children: "Installation on other systems"
    }), "\n", createVNode(_components.p, {
      children: ["In addition to the above systems, K6 also supports Linux (Debian/Ubuntu/Fedora/CentOS), and can be installed by downloading the K6 binaries and K6 extensions, please refer to the [official documentation](", createVNode(_components.a, {
        href: "https://k6.io/docs/get-started/",
        children: "https://k6.io/docs/get-started/"
      }), " For details on how to install K6, please refer to the official documentation ()."]
    }), "\n", createVNode(_components.h3, {
      id: "confirming-a-successful-k6-installation",
      children: "Confirming a successful K6 installation"
    }), "\n", createVNode(_components.p, {
      children: "After the installation is complete, you can confirm that K6 has been installed successfully by using the following command:"
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
            children: "k6"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " version"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "If the installation was successful, the k6 version information will be displayed:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/QR8wKb.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h2, {
      id: "first-k6-test-script",
      children: "First k6 test script"
    }), "\n", createVNode(_components.h3, {
      id: "write-the-first-test-script",
      children: "Write the first test script"
    }), "\n", createVNode(_components.h4, {
      id: "create-a-new-k6-performance-testing-project-directory-and-go-to",
      children: "Create a new K6 performance testing project directory and go to"
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
            children: "mkdir"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " k6-demo"
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
            children: " k6-demo"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "create-a-file-named-demojs-for-writing-test-scripts",
      children: ["Create a file named ", createVNode(_components.code, {
        children: "demo.js"
      }), " for writing test scripts"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["A test script file can be created with the ", createVNode(_components.code, {
          children: "k6 new"
        }), " command:"]
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "k6"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " demo.js"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "You can also create a test script file called demo.js directly"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "touch"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " demo.js"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "editing-test-scripts",
      children: "Editing Test Scripts"
    }), "\n", createVNode(_components.p, {
      children: ["If the test script file is created with the ", createVNode(_components.code, {
        children: "k6 new"
      }), " command, a simple test script is automatically generated as shown below:"]
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
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " http "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6/http'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
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
            children: " { sleep } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'k6'"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " options"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // A number specifying the number of VUs to run concurrently."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  vus: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // A string specifying the total duration of the test run."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  duration: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'30s'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // The following section contains configuration options for execution of this"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // test script in Grafana Cloud."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // See https://grafana.com/docs/grafana-cloud/k6/get-started/run-cloud-tests-from-the-cli/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // to learn about authoring and running k6 test scripts in Grafana k6 Cloud."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // ext: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //   loadimpact: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     // The ID of the project to which the test is assigned in the k6 Cloud UI."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     // By default tests are executed in default project."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     projectID: \"\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     // The name of the test in the k6 Cloud UI."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     // Test runs with the same name will be grouped."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     name: \"demo.js\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //   }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // Uncomment this section to enable the use of Browser API in your tests."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // See https://grafana.com/docs/k6/latest/using-k6-browser/running-browser-tests/ to learn more"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // about using Browser API in your test scripts."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // scenarios: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //   // The scenario name appears in the result summary, tags, and so on."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //   // You can give the scenario any name, as long as each name in the script is unique."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //   ui: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     // Executor is a mandatory parameter for browser-based tests."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     // Shared iterations in this case tells k6 to reuse VUs to execute iterations."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     //"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     // See https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/ for other executor types."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     executor: 'shared-iterations',"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     options: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //       browser: {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //         // This is a mandatory parameter that instructs k6 to launch and"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //         // connect to a chromium-based browser, and use it to run UI-based"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //         // tests."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //         type: 'chromium',"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //       },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //     },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  //   },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  // }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// The function that defines VU logic."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// about authoring k6 scripts."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " default"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " function"
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
              color: "#E1E4E8"
            },
            children: "  http."
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
            children: "'https://test.k6.io'"
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
              color: "#B392F0"
            },
            children: "  sleep"
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
            children: ");"
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
      children: ["If the test script file was created directly, you can copy the above into the ", createVNode(_components.code, {
        children: "demo.js"
      }), " file."]
    }), "\n", createVNode(_components.h4, {
      id: "running-the-test-script",
      children: "Running the Test Script"
    }), "\n", createVNode(_components.p, {
      children: ["In the directory where the ", createVNode(_components.code, {
        children: "demo.js"
      }), " file is located, run the following command:"]
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
            children: "k6"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " demo.js"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "check-the-test-results",
      children: "Check the test results"
    }), "\n", createVNode(_components.p, {
      children: "If all is well, you will see output similar to the following:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/a4vK69.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "Contains the following information:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "execution:"
        }), " execution information, including start time, end time, duration, number of VUs, number of iterations, etc."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "scenarios:"
        }), " Scenario information, including scenario name, number of VUs, number of iterations, duration, average response time, throughput, and so on."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "http_reqs:"
        }), " HTTP request information, including request name, number of requests, number of failures, average response time, throughput, and so on."]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "parsing-demo-test-script",
      children: "Parsing demo test script"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "import http from 'k6/http';"
          }), ": import k6’s HTTP module, used to send HTTP request."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "import { sleep } from 'k6';"
          }), ": Import k6’s sleep method to wait for script execution."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "export const options = { ... }"
          }), ": Define the configuration items of the test script, including the number of VUs, duration, etc."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "vus: 10,"
          }), ": define the number of VUs to be 10 (specify the number of VUs running concurrently)."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "duration: '30s',"
          }), ": define the duration as 30 seconds (specify the total duration of the test run)."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "export default function() { ... }"
          }), ": defines the logic of the test script, including sending HTTP requests, executing waits, and so on."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "http.get('https://test.k6.io');"
          }), ": send a GET request to ", createVNode(_components.code, {
            children: "https://test.k6.io"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "sleep(1);"
          }), ": wait 1 second for execution."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The other comments can be ignored, they are about some advanced features of k6, which will be introduced later."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/docs/",
          children: "Official K6 documentation: https://k6.io/docs/"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/",
          children: "Official website: https://k6.io/"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/Automation-Test-Starter/K6-Performance-Test-starter",
          children: "K6 Performance Test quick starter: https://github.com/Automation-Test-Starter/K6-Performance-Test-starter/"
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

const url = "src/blog/en/Performance-Testing/K6-tutorial-getting-started-and-your-first-K6-test-script.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/K6-tutorial-getting-started-and-your-first-K6-test-script.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/K6-tutorial-getting-started-and-your-first-K6-test-script.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
