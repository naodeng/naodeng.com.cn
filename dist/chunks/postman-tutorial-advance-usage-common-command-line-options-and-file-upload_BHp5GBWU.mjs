import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Postman 接口自动化测试教程：进阶用法 - 常用命令行选项，文件上传场景和 SSL 证书场景",
  "description": "这篇博文深度挖掘 Postman 接口自动化测试的进阶用法，集中讨论常用命令行选项、文件上传场景和 SSL 证书场景。学会如何运用常用命令行选项优化测试流程，解决文件上传和 SSL 证书等特殊场景的测试挑战",
  "date": "2023-11-27T04:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Postman", "API Testing"],
  "categories": ["接口自动化测试", "Postman"],
  "series": ["Postman 接口自动化测试教程"],
  "cover": "./postman-tutorial-advance-usage-common-command-line-options-and-file-upload-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "进阶用法",
    "text": "进阶用法"
  }, {
    "depth": 3,
    "slug": "文件上传场景",
    "text": "文件上传场景"
  }, {
    "depth": 3,
    "slug": "newman-常用命令行选项",
    "text": "Newman 常用命令行选项"
  }, {
    "depth": 4,
    "slug": "基本命令",
    "text": "基本命令"
  }, {
    "depth": 4,
    "slug": "输出和报告",
    "text": "输出和报告"
  }, {
    "depth": 4,
    "slug": "其他选项",
    "text": "其他选项"
  }, {
    "depth": 3,
    "slug": "ssl-证书配置",
    "text": "SSL 证书配置"
  }, {
    "depth": 4,
    "slug": "使用单个-ssl-客户端证书",
    "text": "使用单个 SSL 客户端证书"
  }, {
    "depth": 4,
    "slug": "使用多个-ssl-客户端证书",
    "text": "使用多个 SSL 客户端证书"
  }, {
    "depth": 4,
    "slug": "trusted-ca-证书",
    "text": "Trusted CA 证书"
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
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "进阶用法",
      children: "进阶用法"
    }), "\n", createVNode(_components.p, {
      children: "以下会介绍 Postman 和 Newman 的一些进阶用法，包括常用命令行选项、文件上传场景和 SSL 证书场景。"
    }), "\n", createVNode(_components.h3, {
      id: "文件上传场景",
      children: "文件上传场景"
    }), "\n", createVNode(_components.p, {
      children: "在 postman 和 newman 做接口自动化时，文件上传可以通过 form-data 的方式来实现。"
    }), "\n", createVNode(_components.p, {
      children: "文件必须存在于当前工作目录中。请求的 “src “属性中也必须包含文件名。"
    }), "\n", createVNode(_components.p, {
      children: "在此集合中，当前工作目录中应包含名为 “demo.txt” 的文件。"
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
            children: "    \"info\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"file-upload\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    \"item\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "            \"request\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "                \"url\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://postman-echo.com/post\""
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
            children: "                \"method\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"POST\""
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
            children: "                \"body\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "                    \"mode\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"formdata\""
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
            children: "                    \"formdata\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "                            \"key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"file\""
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
            children: "                            \"type\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"file\""
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
            children: "                            \"enabled\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
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
            children: "                            \"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"demo.txt\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                    ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "                }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "            }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ]"
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
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "注意：调整文件上传的路径，确保文件存在路径在项目根目录下存在或者使用绝对路径"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "newman-常用命令行选项",
      children: "Newman 常用命令行选项"
    }), "\n", createVNode(_components.p, {
      children: "newman 是一个命令行工具，可以使用它来运行 postman 集合。newman 提供了许多选项，可以在运行集合时使用这些选项。"
    }), "\n", createVNode(_components.p, {
      children: "以下是一些常用的 newman 命令行选项的介绍和示例："
    }), "\n", createVNode(_components.h4, {
      id: "基本命令",
      children: "基本命令"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "newman run <collection>"
            }), "："]
          }), " 用于运行 Postman 集合。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-e, --environment <environment>"
            }), "："]
          }), " 指定环境文件。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -e"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " environment.json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-g, --globals <globals>"
            }), "："]
          }), " 指定全局变量文件。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -g"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " globals.json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-d, --iteration-data <data>"
            }), "："]
          }), " 指定数据文件，用于数据驱动测试。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -d"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " data-file.csv"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "输出和报告",
      children: "输出和报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-r, --reporters <reporters>"
            }), "："]
          }), " 指定报告器，可以生成多个报告，如 ", createVNode(_components.code, {
            children: "cli"
          }), "、", createVNode(_components.code, {
            children: "json"
          }), "、", createVNode(_components.code, {
            children: "html"
          }), " 等。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -r"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " cli,json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--reporter-json-export <file>"
            }), "："]
          }), " 将测试结果导出为 JSON 文件。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporters"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporter-json-export"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " output.json"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--reporter-html-export <file>"
            }), "："]
          }), " 将测试结果导出为 HTML 文件。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporters"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " html"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporter-html-export"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " output.html"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--reporter-html-template <file>"
            }), "："]
          }), " 使用自定义 HTML 模板生成 HTML 报告。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporters"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " html"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --reporter-html-template"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " custom-template.hbs"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "其他选项",
      children: "其他选项"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-h, --help"
            }), "："]
          }), " 显示帮助信息，列出所有命令行选项。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --help"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-v, --version"
            }), "："]
          }), " 显示 Newman 版本信息。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --version"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "-x, --suppress-exit-code"
            }), "："]
          }), " 在运行失败时，不返回非零的退出代码。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -x"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--delay-request <ms>"
            }), "："]
          }), " 设置请求之间的延迟时间，以模拟实际场景。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --delay-request"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1000"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--timeout <ms>"
            }), "："]
          }), " 设置请求的超时时间。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --timeout"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 5000"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--no-color"
            }), "："]
          }), " 禁用控制台输出的颜色。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --no-color"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: [createVNode(_components.code, {
              children: "--bail"
            }), "："]
          }), " 在第一个失败的测试时停止运行。"]
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
                children: "newman"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " run"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " collection.json"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --bail"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这只是一些常见的 Newman 命令行选项。你可以通过运行 ", createVNode(_components.code, {
        children: "newman run --help"
      }), " 查看所有可用选项以及它们的描述。根据你的测试需求，你可能需要调整和组合这些选项。"]
    }), "\n", createVNode(_components.h3, {
      id: "ssl-证书配置",
      children: "SSL 证书配置"
    }), "\n", createVNode(_components.p, {
      children: "客户端证书是传统身份验证机制的替代方案。这些允许用户使用公共证书和验证证书所有权的可选私钥向服务器发出经过身份验证的请求。在某些情况下，私钥也可能受到秘密密码的保护，从而提供额外的身份验证安全层。"
    }), "\n", createVNode(_components.p, {
      children: "Newman 通过以下 CLI 选项支持 SSL 客户端证书："
    }), "\n", createVNode(_components.h4, {
      id: "使用单个-ssl-客户端证书",
      children: "使用单个 SSL 客户端证书"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "直接在 newman 命令后面根据证书的实际情况添加以下选项即可"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "--ssl-client-cert"
          }), "\n参数后跟着公共客户端证书文件的路径。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "--ssl-client-key"
          }), "\n参数后跟着客户端私钥的路径（可选）。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.code, {
            children: "--ssl-client-passphrase"
          }), "\n参数后跟着用于保护私有客户端密钥的秘密密码（可选）。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "使用多个-ssl-客户端证书",
      children: "使用多个 SSL 客户端证书"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "适用于每次运行需要支持多个证书的情况"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "--ssl-client-cert-list"
        }), "\nSSL 客户端证书列表配置文件（JSON 格式）的路径。"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "参考示例/ssl-client-cert-list.json。"
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
            children: "["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"domain1\""
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
            children: "        \"matches\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://test.domain1.com/*\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://www.domain1/*\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"./client.domain1.key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"cert\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"./client.domain1.crt\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"passphrase\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"changeme\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    },"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"name\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"domain2\""
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
            children: "        \"matches\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://domain2.com/*\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "],"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"./client.domain2.key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"cert\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": {"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\"src\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"./client.domain2.crt\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "},"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        \"passphrase\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"changeme\""
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
            children: "]"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "另外这种 json 配置也适用于不同证书不同环境的情况，根据 matches 匹配不同的环境和域名。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "备注：此选项允许根据 URL 或主机名设置不同的 SSL 客户端证书。此选项优先于 —ssl-client-cert、 —ssl-client-key 和 —ssl-client-passphrase 选项。如果列表中没有匹配的 URL，这些选项将用作后备选项。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "trusted-ca-证书",
      children: "Trusted CA 证书"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "适用于需要信任自定义 CA 证书的情况"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "如果不想使用 —insecure 选项，可以像这样提供额外的可信 CA 证书："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "--ssl-extra-ca-certs"
        }), "\n参数后跟着保存一个或多个 PEM 格式可信 CA 证书的文件路径的列表。"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "参考文档",
      children: "参考文档"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Postman 官方文档:", createVNode(_components.a, {
          href: "https://learning.postman.com/docs/getting-started/introduction/",
          children: "https://learning.postman.com/docs/getting-started/introduction/"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Newman 官方文档:", createVNode(_components.a, {
          href: "https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options",
          children: "https://github.com/postmanlabs/newman?tab=readme-ov-file#command-line-options"
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

const url = "src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-common-command-line-options-and-file-upload.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-common-command-line-options-and-file-upload.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-common-command-line-options-and-file-upload.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
