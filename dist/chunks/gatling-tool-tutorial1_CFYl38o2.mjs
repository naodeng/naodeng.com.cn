import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Gatling Performance Testing Tutorial: Getting Started",
  "description": "This article describes how to get started with the performance testing tool gatling, how to set up the environment, and how to get the official demo up and running.",
  "date": "2023-10-24T09:44:53.000Z",
  "author": "nao.deng",
  "tags": ["Gatling", "Performance Testing"],
  "series": ["Gatling Performance Testing Tutorial"],
  "cover": "./gatling-tool-tutorial1-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "gatling-introduction",
    "text": "Gatling Introduction"
  }, {
    "depth": 2,
    "slug": "environment-setup",
    "text": "Environment setup"
  }, {
    "depth": 3,
    "slug": "vscode--gradle--scala-version",
    "text": "VSCode + Gradle + Scala Version"
  }, {
    "depth": 4,
    "slug": "preparation",
    "text": "Preparation"
  }, {
    "depth": 4,
    "slug": "install-plugins",
    "text": "install plugins"
  }, {
    "depth": 4,
    "slug": "official-demo-initialization--debugging",
    "text": "official demo initialization & debugging"
  }, {
    "depth": 3,
    "slug": "vscode--maven--scala-version",
    "text": "VSCode + Maven + Scala version"
  }, {
    "depth": 4,
    "slug": "preparation-1",
    "text": "Preparation"
  }, {
    "depth": 4,
    "slug": "install-plugins-1",
    "text": "install plugins"
  }, {
    "depth": 4,
    "slug": "official-demo-initialization--debugging-1",
    "text": "Official demo initialization & debugging"
  }, {
    "depth": 3,
    "slug": "idea--gradle--scala-version",
    "text": "IDEA + Gradle + Scala version"
  }, {
    "depth": 3,
    "slug": "idea--maven--scala-version",
    "text": "IDEA + Maven + Scala version"
  }];
}
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
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
      id: "gatling-introduction",
      children: "Gatling Introduction"
    }), "\n", createVNode(_components.p, {
      children: "Gatling is an open source tool for performance and load testing, especially for testing web applications. It is a high-performance tool based on the Scala programming language for simulating and measuring the performance of applications under different loads."
    }), "\n", createVNode(_components.p, {
      children: "Here are some of the key features and benefits of Gatling:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Based on Scala programming language: Gatling’s test scripts are written in Scala, which makes it a powerful programming tool that allows users to write complex test scenarios and logic."
      }), "\n", createVNode(_components.li, {
        children: "High Performance: Gatling is designed as a high performance load testing tool. It uses non-blocking I/O and an asynchronous programming model that is capable of simulating large numbers of concurrent users to better mimic real-world load situations."
      }), "\n", createVNode(_components.li, {
        children: "Easy to learn and use: Although Gatling’s test scripts are written in Scala, its DSL (Domain Specific Language) is very simple and easy to learn. Even if you are not familiar with Scala, you can quickly learn how to create test scripts."
      }), "\n", createVNode(_components.li, {
        children: "Rich Features: Gatling provides a rich set of features, including request and response processing, data extraction, conditional assertions, performance report generation, and more. These features enable you to create complex test scenarios and perform comprehensive evaluation of application performance."
      }), "\n", createVNode(_components.li, {
        children: "Multi-Protocol Support: In addition to HTTP and HTTPS, Gatling supports other protocols such as WebSocket, JMS, and SMTP, making it suitable for testing a wide range of different types of applications."
      }), "\n", createVNode(_components.li, {
        children: "Real-time results analysis: Gatling provides real-time performance data and graphical reports during test runs to help you quickly identify performance issues."
      }), "\n", createVNode(_components.li, {
        children: "Open source and active community: Gatling is an open source project with an active community that constantly updates and improves the tool."
      }), "\n", createVNode(_components.li, {
        children: "CI/CD Integration Support: Gatling can be integrated with CI/CD tools such as Jenkins to perform performance testing in continuous integration and continuous delivery processes."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Overall, Gatling is a powerful performance testing tool for testing a wide range of application types, helping development teams identify and resolve performance issues to ensure consistent performance and scalability of applications in production environments."
    }), "\n", createVNode(_components.h2, {
      id: "environment-setup",
      children: "Environment setup"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Since I’m a macbook user, I’ll use the macbook demo as an example in the introduction, but windows users can refer to it on their own."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "vscode--gradle--scala-version",
      children: "VSCode + Gradle + Scala Version"
    }), "\n", createVNode(_components.h4, {
      id: "preparation",
      children: "Preparation"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Development tool: VSCode"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Install Gradle version >= 6.0, I am using Gradle 8.44."]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Install JDK version >= 8, I use JDK 19"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "install-plugins",
      children: "install plugins"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " VSCode search for Scala (Metals) plugin for installation"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " VSCode search for Gradle for Java plugin for installation"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "official-demo-initialization--debugging",
      children: "official demo initialization & debugging"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "We will use the official demo project for initialization and debugging first, and then we will introduce how to create your own project later."
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Clone the official demo project"
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " git@github.com:gatling/gatling-gradle-plugin-demo-scala.git"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Open the cloned official demo project with VSCode."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Open the project’s Terminal window with VSCode and execute the following command"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "gradle"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " build"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-build.png",
        alt: "readme-build"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Run the demo in the project"
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
            children: "gradle"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " gatlingRun"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Viewing the results of a command line run"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report.png",
        alt: "readme-report"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click on the html report link in the command line report and open it with your browser to view the detailed report information"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report1.png",
        alt: "readme-report1"
      })
    }), "\n", createVNode(_components.h3, {
      id: "vscode--maven--scala-version",
      children: "VSCode + Maven + Scala version"
    }), "\n", createVNode(_components.h4, {
      id: "preparation-1",
      children: "Preparation"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Development tool: VSCode"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " Install Maven, I use Maven 3.9.5"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " JDK version >= 8, I use JDK 19"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "install-plugins-1",
      children: "install plugins"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " VSCode search for Scala (Metals) plugins to install"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " VSCode search for Maven for Java plugins to install"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "official-demo-initialization--debugging-1",
      children: "Official demo initialization & debugging"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "We will use the official demo project for initialization and debugging first, and then we will introduce how to create your own project."
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Clone the official demo project"
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
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " git@github.com:gatling/gatling-maven-plugin-demo-scala.git"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Use VSCode to open the cloned official demo project."
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Open the Terminal window of this project with VSCode and execute the following command to run the demo in the project"
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
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "mvn"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " gatling:test"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Viewing the results of a command line run"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report2.png",
        alt: "readme-report2"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Click on the html report link in the command line report and open it with your browser to view the detailed report information"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/readme-report1.png",
        alt: "readme-report1"
      })
    }), "\n", createVNode(_components.h3, {
      id: "idea--gradle--scala-version",
      children: "IDEA + Gradle + Scala version"
    }), "\n", createVNode(_components.p, {
      children: "This is similar to the VSCode version, so I won’t repeat it here."
    }), "\n", createVNode(_components.p, {
      children: "The differences are as follows:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "IDEA searches for Scala plugins to install"
      }), "\n", createVNode(_components.li, {
        children: "New way to run: right click and select Engine.scala file in the project directory, select Run ‘Engine’ to run the demo (you need to press enter to confirm the run)."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "idea--maven--scala-version",
      children: "IDEA + Maven + Scala version"
    }), "\n", createVNode(_components.p, {
      children: "This is similar to the VSCode version, so I won’t repeat it here."
    }), "\n", createVNode(_components.p, {
      children: "The differences are as follows:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "IDEA searches for Scala plugins to install"
      }), "\n", createVNode(_components.li, {
        children: "New way to run: right-click the Engine.scala file in the project directory and select Run ‘Engine’ to run the demo (you need to press enter to confirm during the run)."
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

const url = "src/blog/en/Performance-Testing/gatling-tool-tutorial1.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/gatling-tool-tutorial1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Performance-Testing/gatling-tool-tutorial1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
