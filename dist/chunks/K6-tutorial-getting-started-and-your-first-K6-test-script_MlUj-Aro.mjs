import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "K6 性能测试教程：入门介绍，环境搭建和编写第一个 K6 测试脚本",
  "description": "这篇文章将带您进入 K6 性能测试的世界。博文内容涵盖了 K6 性能测试的入门知识、环境搭建步骤，以及如何编写您的第一个测试脚本。无论您是初学者还是有经验的性能测试专业人员，这篇教程都将为您提供清晰的指导，帮助您快速上手 K6，并开始构建高效的性能测试脚本",
  "date": "2024-01-09T09:22:00.000Z",
  "author": "nao.deng",
  "tags": ["K6", "Performance Testing"],
  "categories": ["性能测试", "K6"],
  "series": ["K6 性能测试教程"],
  "cover": "./K6-tutorial-getting-started-and-your-first-K6-test-script-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "什么是-k6",
    "text": "什么是 K6"
  }, {
    "depth": 2,
    "slug": "官方网站及文档",
    "text": "官方网站及文档"
  }, {
    "depth": 2,
    "slug": "安装",
    "text": "安装"
  }, {
    "depth": 3,
    "slug": "mac-系统安装",
    "text": "Mac 系统安装"
  }, {
    "depth": 3,
    "slug": "windows-系统安装",
    "text": "Windows 系统安装"
  }, {
    "depth": 3,
    "slug": "docker-安装",
    "text": "Docker 安装"
  }, {
    "depth": 3,
    "slug": "其他系统安装",
    "text": "其他系统安装"
  }, {
    "depth": 3,
    "slug": "确认-k6-安装成功",
    "text": "确认 K6 安装成功"
  }, {
    "depth": 2,
    "slug": "第一个-k6-测试脚本",
    "text": "第一个 K6 测试脚本"
  }, {
    "depth": 3,
    "slug": "编写第一个测试脚本",
    "text": "编写第一个测试脚本"
  }, {
    "depth": 4,
    "slug": "新建一个-k6-性能测试项目目录并进入",
    "text": "新建一个 K6 性能测试项目目录并进入"
  }, {
    "depth": 4,
    "slug": "创建一个名为-demojs-的文件用于编写测试脚本",
    "text": "创建一个名为 demo.js 的文件，用于编写测试脚本"
  }, {
    "depth": 4,
    "slug": "编辑测试脚本",
    "text": "编辑测试脚本"
  }, {
    "depth": 4,
    "slug": "运行测试脚本",
    "text": "运行测试脚本"
  }, {
    "depth": 4,
    "slug": "查看测试结果",
    "text": "查看测试结果"
  }, {
    "depth": 4,
    "slug": "解析-demo-测试脚本",
    "text": "解析 demo 测试脚本"
  }, {
    "depth": 2,
    "slug": "参考文档",
    "text": "参考文档"
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
    hr: "hr",
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
      id: "什么是-k6",
      children: "什么是 K6"
    }), "\n", createVNode(_components.p, {
      children: "k6 是一款用于性能测试和负载测试的开源工具，主要用于评估和验证应用程序的性能和稳定性。以下是关于 k6 的一些主要特点和信息："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "开源性："
          }), " k6 是一款完全开源的性能测试工具，代码存储在 GitHub 上。这意味着用户可以自由访问、使用和修改工具的源代码。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "JavaScript 编写脚本："
          }), " k6 使用 JavaScript 语言编写测试脚本，这使得编写测试用例相对简单，并且对于开发人员而言更加友好。脚本可以包含 HTTP 请求、WebSocket 连接、脚本执行逻辑等。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "支持多种协议："
          }), " k6 支持多种常见的协议，包括 HTTP、WebSocket、Socket.IO、gRPC 等，使其可以广泛应用于各种类型的应用程序。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "分布式测试："
          }), " k6 具有分布式测试的能力，允许在多个节点上运行测试，从而模拟更真实的生产环境负载。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "实时结果和报告："
          }), " k6 提供实时结果，包括请求响应时间、吞吐量等，并能够生成详细的 HTML 报告，帮助用户更好地理解应用程序的性能状况。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "容器化支持："
          }), " k6 适应容器化环境，可以轻松集成到 CI/CD 流水线中，并与常见的容器编排工具（如 Kubernetes）配合使用。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "插件生态系统："
          }), " k6 支持插件，用户可以通过插件扩展其功能，满足特定需求。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "活跃的社区："
          }), " 由于 k6 是一个开源项目，拥有一个积极的社区，提供支持、文档和示例，使用户更容易上手和解决问题。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "总体而言，k6 是一个灵活、强大且易于使用的性能测试工具，适用于各种规模的应用程序和系统。"
    }), "\n", createVNode(_components.h2, {
      id: "官方网站及文档",
      children: "官方网站及文档"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/",
          children: "官方网站"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/docs/",
          children: "官方文档"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "安装",
      children: "安装"
    }), "\n", createVNode(_components.h3, {
      id: "mac-系统安装",
      children: "Mac 系统安装"
    }), "\n", createVNode(_components.p, {
      children: "Mac 系统可以通过 Homebrew 安装 k6："
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
      id: "windows-系统安装",
      children: "Windows 系统安装"
    }), "\n", createVNode(_components.p, {
      children: "Windows 系统可以通过 Chocolatey 安装 k6："
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
      children: "或者通过 winget 安装 k6："
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
      id: "docker-安装",
      children: "Docker 安装"
    }), "\n", createVNode(_components.p, {
      children: "k6 也可以通过 Docker 安装："
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
      id: "其他系统安装",
      children: "其他系统安装"
    }), "\n", createVNode(_components.p, {
      children: ["K6 除了支持上述系统外，还支持 Linux（Debian/Ubuntu/Fedora/CentOS），也支持下载 K6 二进制文件和 K6 扩展进行安装，具体安装方式请参考", createVNode(_components.a, {
        href: "https://k6.io/docs/get-started/installation",
        children: "官方文档"
      }), "。"]
    }), "\n", createVNode(_components.h3, {
      id: "确认-k6-安装成功",
      children: "确认 K6 安装成功"
    }), "\n", createVNode(_components.p, {
      children: "安装完成后，可以通过以下命令确认 k6 是否安装成功："
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
      children: "如果安装成功，会显示 k6 的版本信息："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/QR8wKb.png",
        alt: " "
      })
    }), "\n", createVNode(_components.h2, {
      id: "第一个-k6-测试脚本",
      children: "第一个 K6 测试脚本"
    }), "\n", createVNode(_components.h3, {
      id: "编写第一个测试脚本",
      children: "编写第一个测试脚本"
    }), "\n", createVNode(_components.h4, {
      id: "新建一个-k6-性能测试项目目录并进入",
      children: "新建一个 K6 性能测试项目目录并进入"
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
      id: "创建一个名为-demojs-的文件用于编写测试脚本",
      children: ["创建一个名为 ", createVNode(_components.code, {
        children: "demo.js"
      }), " 的文件，用于编写测试脚本"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["可以通过 ", createVNode(_components.code, {
          children: "k6 new"
        }), " 命令创建一个测试脚本文件："]
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
        children: "也可以直接创建一个名为 demo.js 的测试脚本文件"
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
      id: "编辑测试脚本",
      children: "编辑测试脚本"
    }), "\n", createVNode(_components.p, {
      children: ["如果是通过 ", createVNode(_components.code, {
        children: "k6 new"
      }), " 命令创建的测试脚本文件，会自动生成一个简单的测试脚本，如下所示："]
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
      children: ["如果是直接创建的测试脚本文件，可以将上述内容复制到 ", createVNode(_components.code, {
        children: "demo.js"
      }), " 文件中。"]
    }), "\n", createVNode(_components.h4, {
      id: "运行测试脚本",
      children: "运行测试脚本"
    }), "\n", createVNode(_components.p, {
      children: ["在 ", createVNode(_components.code, {
        children: "demo.js"
      }), " 文件所在目录下，运行以下命令："]
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
      id: "查看测试结果",
      children: "查看测试结果"
    }), "\n", createVNode(_components.p, {
      children: "如果一切正常，会看到类似如下的输出："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/a4vK69.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "包含以下信息："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "execution:"
        }), " 执行信息，包括开始时间、结束时间、持续时间、VU 数量、迭代次数等。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "scenarios:"
        }), " 场景信息，包括场景名称、VU 数量、迭代次数、持续时间、平均响应时间、吞吐量等。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "http_reqs:"
        }), " HTTP 请求信息，包括请求名称、请求数量、失败数量、平均响应时间、吞吐量等。"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "解析-demo-测试脚本",
      children: "解析 demo 测试脚本"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "import http from 'k6/http';"
          }), "：导入 k6 的 HTTP 模块，用于发送 HTTP 请求。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "import { sleep } from 'k6';"
          }), "：导入 k6 的 sleep 方法，用于执行脚本等待。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "export const options = { ... }"
          }), "：定义测试脚本的配置项，包括 VU 数量、持续时间等。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "vus: 10,"
          }), "：定义 VU 数量为 10（指定并发运行的 VU 数量）。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "duration: '30s',"
          }), "：定义持续时间为 30 秒（指定测试运行总持续时间）。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "export default function() { ... }"
          }), "：定义测试脚本的逻辑，包括发送 HTTP 请求、执行等待等。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "http.get('https://test.k6.io');"
          }), "：发送一个 GET 请求到 ", createVNode(_components.code, {
            children: "https://test.k6.io"
          }), "。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "sleep(1);"
          }), "：执行等待 1 秒。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "其他注释内容可以忽略，这些内容是关于 k6 的一些高级功能，后续会介绍。"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "参考文档",
      children: "参考文档"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/docs/",
          children: "K6 文档："
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/",
          children: "k6 官方网站："
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/Automation-Test-Starter/K6-Performance-Test-starter",
          children: "K6 性能测试快速启动项目："
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["欢迎关注软件测试同学的公众号“", createVNode(_components.strong, {
        children: "软件测试同学"
      }), "”，原创 QA 技术文章第一时间推送。"]
    }), "\n", "\n", "\n", createVNode("div", {
      style: "text-align: center",
      children: createVNode("img", {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112015'QR Code for 公众号.jpg",
        style: "width: 100px;"
      })
    }), "\n", "\n"]
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

const url = "src/blog/zh-cn/Performance-Testing/K6-tutorial-getting-started-and-your-first-K6-test-script.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/K6-tutorial-getting-started-and-your-first-K6-test-script.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/K6-tutorial-getting-started-and-your-first-K6-test-script.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
