import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Pytest 接口自动化测试教程：入门介绍和环境搭建准备",
  "description": "包括入门介绍和环境搭建准备。在博客中，读者将了解什么是 Pytest 以及如何开始使用它来进行 API 测试。",
  "date": "2023-11-13T10:11:15.000Z",
  "author": "nao.deng",
  "tags": ["Pytest", "API Testing"],
  "categories": ["接口自动化测试", "Pytest"],
  "series": ["Pytest 接口自动化测试教程"],
  "cover": "./pytest-tutorial-getting-started-and-own-environment-preparation-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "介绍",
    "text": "介绍"
  }, {
    "depth": 3,
    "slug": "pytest-介绍",
    "text": "Pytest 介绍"
  }, {
    "depth": 3,
    "slug": "python-虚拟环境介绍",
    "text": "python 虚拟环境介绍"
  }, {
    "depth": 2,
    "slug": "项目依赖",
    "text": "项目依赖"
  }, {
    "depth": 2,
    "slug": "项目目录结构",
    "text": "项目目录结构"
  }, {
    "depth": 2,
    "slug": "参考",
    "text": "参考"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    input: "input",
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
      id: "介绍",
      children: "介绍"
    }), "\n", createVNode(_components.h3, {
      id: "pytest-介绍",
      children: "Pytest 介绍"
    }), "\n", createVNode(_components.p, {
      children: "Pytest 是一个流行的 Python 测试框架，用于编写、组织和运行各种类型的自动化测试。它提供了丰富的功能，使您能够轻松编写和管理测试用例，以及生成详细的测试报告。以下是 Pytest 的一些主要特点和优势："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "简单和易用"
          }), "：Pytest 的设计使得编写测试用例变得简单且易于理解。您可以使用 Python 的标准 ", createVNode(_components.code, {
            children: "assert"
          }), " 语句来编写测试断言，而不需要学习新的断言语法。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "自动发现测试用例"
          }), "：Pytest 可以自动发现和运行项目中的测试用例，而不需要显式配置测试套件。测试用例文件可以命名为 ", createVNode(_components.code, {
            children: "test_*.py"
          }), " 或 ", createVNode(_components.code, {
            children: "*_test.py"
          }), "，或使用特定的测试函数命名规范。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "丰富的插件生态系统"
          }), "：Pytest 可以通过插件扩展其功能。有许多第三方插件可用，以满足不同测试需求，如 Allure 报告、参数化、覆盖率分析等。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "参数化测试"
          }), "：Pytest 支持参数化测试，允许您运行相同的测试用例多次，但使用不同的参数。这可以减少代码重复，提高测试覆盖率。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "异常和故障定位"
          }), "：Pytest 提供详细的错误和异常信息，有助于您更容易地定位和解决问题。它还提供详细的回溯（traceback）信息。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "并行测试执行"
          }), "：Pytest 支持并行执行测试用例，提高了测试执行的速度，特别是在大型项目中。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "多种报告格式"
          }), "：Pytest 支持多种测试报告格式，包括终端输出、JUnit XML、HTML 报告和 Allure 报告等。这些报告可以帮助您可视化测试结果。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "命令行选项"
          }), "：Pytest 提供了丰富的命令行选项，以定制测试运行的行为，包括过滤、重试、覆盖率分析等。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "集成性"
          }), "：Pytest 可以与其他测试框架和工具（如 Selenium、Django、Flask 等）以及持续集成系统（如 Jenkins、Travis CI 等）轻松集成。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "活跃的社区"
          }), "：Pytest 拥有一个活跃的社区，有广泛的文档和教程可供学习和参考。您还可以在社区中获得支持和解决问题。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "总之，Pytest 是一个强大且灵活的测试框架，适用于各种规模和类型的项目。它的易用性、自动化能力以及丰富的插件使它成为 Python 测试领域的首选工具之一。"
    }), "\n", createVNode(_components.p, {
      children: ["官方网站：", createVNode(_components.a, {
        href: "https://docs.pytest.org/en/latest/",
        children: "https://docs.pytest.org/en/latest/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "python-虚拟环境介绍",
      children: "python 虚拟环境介绍"
    }), "\n", createVNode(_components.p, {
      children: "Python 虚拟环境（Virtual Environment）是一种机制，用于在单个 Python 安装中创建和管理多个隔离的开发环境。虚拟环境有助于解决不同项目之间的依赖冲突问题，确保每个项目都能够使用其独立的 Python 包和库，而不会相互干扰。以下是如何创建和使用 Python 虚拟环境的步骤："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "安装虚拟环境工具"
          }), ":\n在开始之前，确保您已安装 Python 的虚拟环境工具。在 Python 3.3 及更高版本中，", createVNode(_components.code, {
            children: "venv"
          }), " 模块已经内置，可以使用它来创建虚拟环境。如果您使用较旧版本的 Python，您可以安装 ", createVNode(_components.code, {
            children: "virtualenv"
          }), " 工具。"]
        }), "\n", createVNode(_components.p, {
          children: ["对于 Python 3.3+，", createVNode(_components.code, {
            children: "venv"
          }), " 工具已内置，无需额外安装。"]
        }), "\n", createVNode(_components.p, {
          children: ["对于 Python 2.x，可以使用以下命令安装 ", createVNode(_components.code, {
            children: "virtualenv"
          }), " 工具："]
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
                children: "pip"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " install"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " virtualenv"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "创建虚拟环境"
          }), ":\n打开终端，移动到您希望创建虚拟环境的目录，并运行以下命令以创建虚拟环境："]
        }), "\n", createVNode(_components.p, {
          children: ["使用 ", createVNode(_components.code, {
            children: "venv"
          }), "（适用于 Python 3.3+）："]
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
                children: "python"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -m"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " venv"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " myenv"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["使用 ", createVNode(_components.code, {
            children: "virtualenv"
          }), "（适用于 Python 2.x）："]
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
                children: "virtualenv"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " myenv"
              })]
            })
          })
        }), "\n", createVNode(_components.p, {
          children: ["在上述命令中，", createVNode(_components.code, {
            children: "myenv"
          }), " 是虚拟环境的名称，您可以自定义名称。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "激活虚拟环境"
          }), ":\n要开始使用虚拟环境，需要激活它。在不同的操作系统中，激活命令略有不同："]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "在 macOS 和 Linux 上："
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
                      color: "#79B8FF"
                    },
                    children: "source"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#9ECBFF"
                    },
                    children: " myenv/bin/activate"
                  })]
                })
              })
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "在 Windows 上（使用 Command Prompt）："
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
                  children: createVNode(_components.span, {
                    style: {
                      color: "#B392F0"
                    },
                    children: "myenv\\Scripts\\activate"
                  })
                })
              })
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "在 Windows 上（使用 PowerShell）："
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
                      color: "#79B8FF"
                    },
                    children: "."
                  }), createVNode(_components.span, {
                    style: {
                      color: "#E1E4E8"
                    },
                    children: "\\"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#9ECBFF"
                    },
                    children: "myenv"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#E1E4E8"
                    },
                    children: "\\"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#9ECBFF"
                    },
                    children: "Scripts"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#E1E4E8"
                    },
                    children: "\\"
                  }), createVNode(_components.span, {
                    style: {
                      color: "#9ECBFF"
                    },
                    children: "Activate.ps1"
                  })]
                })
              })
            }), "\n"]
          }), "\n"]
        }), "\n", createVNode(_components.p, {
          children: "一旦虚拟环境激活，您会在终端提示符前看到虚拟环境的名称，表示您已进入虚拟环境。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "在虚拟环境中安装依赖"
          }), ":\n在虚拟环境中，您可以使用 ", createVNode(_components.code, {
            children: "pip"
          }), " 安装项目所需的任何 Python 包和库，这些依赖将与该虚拟环境关联。例如："]
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
                children: "pip"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " install"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " requests"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "使用虚拟环境"
          }), ":\n在虚拟环境中工作时，您可以运行 Python 脚本和使用安装在虚拟环境中的包。这确保了您的项目在独立的环境中运行，不会与全局 Python 安装产生冲突。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "退出虚拟环境"
          }), ":\n要退出虚拟环境，只需在终端中运行以下命令："]
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
              children: createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "deactivate"
              })
            })
          })
        }), "\n", createVNode(_components.p, {
          children: "这将使您返回到全局 Python 环境。"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "通过使用虚拟环境，您可以在不同项目之间维护干净的依赖关系，并确保项目的稳定性和隔离性。这是 Python 开发中的一个良好实践。"
    }), "\n", createVNode(_components.h2, {
      id: "项目依赖",
      children: "项目依赖"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "需提前安装好以下环境"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " python, demo 版本为 v3.11.6"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "大家安装 python3.x 以上的版本即可"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "项目目录结构",
      children: "项目目录结构"
    }), "\n", createVNode(_components.p, {
      children: "以下为一个 Pytest 接口自动化测试项目的目录结构示例："
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "后续 demo 项目会引入 allure 报告，所以会多出一个 allure-report 目录"
      }), "\n"]
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
            children: "Pytest-allure-demo/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── tests/                  # 存放测试用例文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── test_login.py       # 示例测试用例文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── test_order.py       # 示例测试用例文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   └── ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── data/                   # 存放测试数据文件（如 JSON、CSV 等）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── dev_test_data.json      # 开发环境测试数据文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── prod_test_data.json      # 生产环境测试数据文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── config/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── dev_config.json  # 开发环境配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── prod_config.json  # 生产环境配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    │   ├── ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── conftest.py             # Pytest 的全局配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── pytest.ini              # Pytest 配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    ├── requirements.txt        # 项目依赖项文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    └── allure-report/          # 存放 Allure 报告"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "参考",
      children: "参考"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Pytest: ", createVNode(_components.a, {
          href: "https://docs.pytest.org/en/latest/",
          children: "https://docs.pytest.org/en/latest/"
        })]
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

const url = "src/blog/zh-cn/API-Automation-Testing/pytest-tutorial-getting-started-and-own-environment-preparation.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/pytest-tutorial-getting-started-and-own-environment-preparation.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/pytest-tutorial-getting-started-and-own-environment-preparation.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
