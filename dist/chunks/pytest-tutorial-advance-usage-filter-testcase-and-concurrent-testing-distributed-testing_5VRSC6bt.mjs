import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Pytest 接口自动化测试教程：进阶用法 - 筛选测试用例执行，并发测试和分布式测试",
  "description": "聚焦于测试用例筛选、并发测试和分布式测试。学会如何有针对性地执行测试用例，提高测试效率。探索 Pytest 的并发测试特性，了解如何同时执行多个测试用例，缩短测试时间。",
  "date": "2023-11-20T07:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Pytest", "API Testing"],
  "categories": ["接口自动化测试", "Pytest"],
  "series": ["Pytest 接口自动化测试教程"],
  "cover": "./pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "进阶用法",
    "text": "进阶用法"
  }, {
    "depth": 3,
    "slug": "并发测试和分布式测试",
    "text": "并发测试和分布式测试"
  }, {
    "depth": 4,
    "slug": "pytest-xdist-功能介绍",
    "text": "pytest-xdist 功能介绍"
  }, {
    "depth": 4,
    "slug": "安装-pytest-xdist-依赖",
    "text": "安装 pytest-xdist 依赖"
  }, {
    "depth": 4,
    "slug": "并发运行测试用例示例",
    "text": "并发运行测试用例示例"
  }, {
    "depth": 5,
    "slug": "并发-3-个-worker-执行测试用例",
    "text": "并发 3 个 worker 执行测试用例"
  }, {
    "depth": 5,
    "slug": "并发-3-个-worker-执行测试用例并且每个-worker-都会打印测试用例的进度",
    "text": "并发 3 个 worker 执行测试用例，并且每个 worker 都会打印测试用例的进度"
  }, {
    "depth": 4,
    "slug": "分布式测试示例",
    "text": "分布式测试示例"
  }, {
    "depth": 5,
    "slug": "分布式测试每个节点运行一组测试",
    "text": "分布式测试，每个节点运行一组测试"
  }, {
    "depth": 5,
    "slug": "分布式测试每个节点运行一组测试并且每个-worker-都会打印测试用例的进度",
    "text": "分布式测试，每个节点运行一组测试，并且每个 worker 都会打印测试用例的进度"
  }, {
    "depth": 5,
    "slug": "分布式测试每个节点运行一组测试并且每个-worker-都会打印测试用例的进度同时打印测试日志的输出",
    "text": "分布式测试，每个节点运行一组测试，并且每个 worker 都会打印测试用例的进度，同时打印测试日志的输出"
  }, {
    "depth": 3,
    "slug": "筛选用例执行",
    "text": "筛选用例执行"
  }, {
    "depth": 4,
    "slug": "定义-pytest-标记",
    "text": "定义 Pytest 标记"
  }, {
    "depth": 4,
    "slug": "标记用例",
    "text": "标记用例"
  }, {
    "depth": 4,
    "slug": "筛选测试用例执行",
    "text": "筛选测试用例执行"
  }, {
    "depth": 2,
    "slug": "参考资料",
    "text": "参考资料"
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
      id: "进阶用法",
      children: "进阶用法"
    }), "\n", createVNode(_components.h3, {
      id: "并发测试和分布式测试",
      children: "并发测试和分布式测试"
    }), "\n", createVNode(_components.p, {
      children: "在日常的接口自动化测试过程中，需要并发执行测试用例，以提高测试效率。"
    }), "\n", createVNode(_components.p, {
      children: "有时候也需要引入分布式测试，以便在多台机器上同时运行测试用例，也能更好的提升测试效率。"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "pytest-xdist"
      }), " 是 Pytest 的一个插件，能提供了一些对应的功能，主要用于支持并发测试和分布式测试。"]
    }), "\n", createVNode(_components.h4, {
      id: "pytest-xdist-功能介绍",
      children: [createVNode(_components.code, {
        children: "pytest-xdist"
      }), " 功能介绍"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "并发执行测试"
          }), "："]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["使用 ", createVNode(_components.code, {
              children: "-n"
            }), " 选项：", createVNode(_components.code, {
              children: "pytest -n NUM"
            }), " 允许并发运行测试，其中 ", createVNode(_components.code, {
              children: "NUM"
            }), " 是并发 worker 的数量。这可以加速测试执行，特别是在拥有多个 CPU 内核的计算机上。"]
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
                children: "pytest"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " -n"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 3"
              }), createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "  # 启动 3 个并发 worker 执行测试"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "分布式测试"
          }), "："]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["使用 ", createVNode(_components.code, {
              children: "pytest --dist=loadscope"
            }), "：允许在多个节点上执行测试，通过分布式测试可以更快地完成测试运行。"]
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
                children: "pytest"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --dist=loadscope"
              })]
            })
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["使用 ", createVNode(_components.code, {
              children: "pytest --dist=each"
            }), "：每个节点运行一组测试，适用于分布式测试。"]
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
                children: "pytest"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " --dist=each"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "参数化测试和并发"
          }), "："]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["使用 ", createVNode(_components.code, {
              children: "pytest.mark.run"
            }), "：结合 ", createVNode(_components.code, {
              children: "pytest.mark.run"
            }), " 标记，可以选择在不同的进程或节点上运行具有不同标记的测试。"]
          }), "\n"]
        }), "\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "python",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "@pytest.mark.run"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "processes"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "2"
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
                  color: "#F97583"
                },
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " test_example"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "():"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "    pass"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "分布式环境设置"
          }), "："]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["使用 ", createVNode(_components.code, {
              children: "pytest_configure_node"
            }), "：可以在节点上运行测试之前进行配置。"]
          }), "\n"]
        }), "\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "python",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " pytest_configure_node"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(node):"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    node.slaveinput["
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'my_option'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " 'some value'"
              })]
            })]
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["使用 ", createVNode(_components.code, {
              children: "pytest_configure_node"
            }), "：可以在节点上运行测试之前进行配置。"]
          }), "\n"]
        }), "\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "python",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " pytest_configure_node"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(node):"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    node.slaveinput["
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'my_option'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "] "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "="
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " 'some value'"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "分布式测试环境销毁"
          }), "："]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["使用 ", createVNode(_components.code, {
              children: "pytest_configure_node"
            }), "：可以在节点上运行测试之后进行清理。"]
          }), "\n"]
        }), "\n", createVNode(_components.pre, {
          class: "astro-code github-dark",
          style: {
            backgroundColor: "#24292e",
            color: "#e1e4e8",
            overflowX: "auto"
          },
          tabindex: "0",
          "data-language": "python",
          children: createVNode(_components.code, {
            children: [createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "def"
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " pytest_configure_node"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(node):"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "    # 配置节点"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "    yield"
              })
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "    # 在节点上运行测试后执行清理"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "    print"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"Cleaning up after test run on node "
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "%s"
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\""
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " %"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " node.gateway.id)"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这些是 ", createVNode(_components.code, {
        children: "pytest-xdist"
      }), " 提供的一些功能，可以帮助您更有效地执行并发测试和分布式测试，以加速测试执行并提高效率。确保在使用前查阅 ", createVNode(_components.code, {
        children: "pytest-xdist"
      }), " 的文档以获取更详细的信息和用法示例。"]
    }), "\n", createVNode(_components.h4, {
      id: "安装-pytest-xdist-依赖",
      children: ["安装 ", createVNode(_components.code, {
        children: "pytest-xdist"
      }), " 依赖"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
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
            children: " pytest-xdist"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "并发运行测试用例示例",
      children: "并发运行测试用例示例"
    }), "\n", createVNode(_components.h5, {
      id: "并发-3-个-worker-执行测试用例",
      children: "并发 3 个 worker 执行测试用例"
    }), "\n", createVNode(_components.p, {
      children: "分别运行以下命令，查看测试用例的执行时长"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "并发执行"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -n"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/LKHRct.png",
        alt: "LKHRct"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "默认串行执行"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pytest"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5y442s.png",
        alt: "5y442s"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "串行执行耗时 9.81s"
      }), "，而", createVNode(_components.code, {
        children: "并发执行耗时 1.63s"
      }), "，可以看到并发执行测试用例可以大大提高测试效率。"]
    }), "\n", createVNode(_components.h5, {
      id: "并发-3-个-worker-执行测试用例并且每个-worker-都会打印测试用例的进度",
      children: "并发 3 个 worker 执行测试用例，并且每个 worker 都会打印测试用例的进度"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -n"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -v"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5krJia.png",
        alt: "5krJia"
      })
    }), "\n", createVNode(_components.p, {
      children: "测试结果中会打印测试进度，可以更好的了解测试用例的执行情况。"
    }), "\n", createVNode(_components.h4, {
      id: "分布式测试示例",
      children: "分布式测试示例"
    }), "\n", createVNode(_components.h5, {
      id: "分布式测试每个节点运行一组测试",
      children: "分布式测试，每个节点运行一组测试"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --dist=each"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/W1akqS.png",
        alt: "W1akqS"
      })
    }), "\n", createVNode(_components.p, {
      children: "分布式测试可以更快地完成测试运行。"
    }), "\n", createVNode(_components.h5, {
      id: "分布式测试每个节点运行一组测试并且每个-worker-都会打印测试用例的进度",
      children: "分布式测试，每个节点运行一组测试，并且每个 worker 都会打印测试用例的进度"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --dist=each"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -v"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/sMlawH.png",
        alt: "sMlawH"
      })
    }), "\n", createVNode(_components.p, {
      children: "测试结果中会打印测试进度，可以更好的了解测试用例的执行情况。"
    }), "\n", createVNode(_components.h5, {
      id: "分布式测试每个节点运行一组测试并且每个-worker-都会打印测试用例的进度同时打印测试日志的输出",
      children: "分布式测试，每个节点运行一组测试，并且每个 worker 都会打印测试用例的进度，同时打印测试日志的输出"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --dist=each"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -v"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --capture=no"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/RkNSDb.png",
        alt: "RkNSDb"
      })
    }), "\n", createVNode(_components.p, {
      children: "测试结果中会打印测试日志的输出，可以更好的了解测试用例的执行情况。"
    }), "\n", createVNode(_components.h3, {
      id: "筛选用例执行",
      children: "筛选用例执行"
    }), "\n", createVNode(_components.p, {
      children: "在日常的接口测试过程中，我们需要根据实际情况来选择性地执行测试用例，以提高测试效率。"
    }), "\n", createVNode(_components.p, {
      children: "一般我们使用 allure 测试报告的时候，可以使用 Allure 标签特性来进行筛选对应标签的的用例来执行测试，但 Pytest 框架不直接支持运行基于 Allure 标签的测试。所以可以使用 Pytest 标记来实现这一点。"
    }), "\n", createVNode(_components.p, {
      children: ["Pytest 提供 ", createVNode(_components.code, {
        children: "marks"
      }), "标记功能可以用来标记不同类型的测试用例，然后进行筛选对应类型的测试用例进行执行。"]
    }), "\n", createVNode(_components.p, {
      children: "大致流程为你可以用自定义标记（如 Regression/Smoke）来标记测试，然后使用 pytest 的 -m 选项只运行这些测试。"
    }), "\n", createVNode(_components.h4, {
      id: "定义-pytest-标记",
      children: "定义 Pytest 标记"
    }), "\n", createVNode(_components.p, {
      children: "编辑 pytest.ini 文件，添加以下内容：自定义标记的类型"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Regression:标记为回归测试的用例"
      }), "\n", createVNode(_components.li, {
        children: "Smoke:标记为冒烟测试的用例"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "ini",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "markers"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ="
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Regression: marks tests as Regression"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    Smoke: marks tests as Smoke"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "标记用例",
      children: "标记用例"
    }), "\n", createVNode(_components.p, {
      children: "操作步骤为："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "引入 pytest"
      }), "\n", createVNode(_components.li, {
        children: ["使用 ", createVNode(_components.code, {
          children: "@pytest.mark"
        }), " 标记测试用例"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "为做区分，这里新建测试用例文件，文件名为 test_demo_filter.py"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
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
            children: " pytest"
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
            children: " requests"
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
            children: " json"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " TestPytestMultiEnvDemo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    @pytest.mark.Regression"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  # mark the test case as regression"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test_get_demo_filter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, env_config, env_request_data, env_response_data):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        host "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_config["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"host\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        get_api "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_config["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"getAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        get_api_response_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_response_data["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"getAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # send request"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " requests.get(host"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "get_api)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # assert"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        assert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.status_code "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 200"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        assert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.json() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " get_api_response_data"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    @pytest.mark.Smoke"
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "  # mark the test case as smoke"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test_post_demo_filter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(self, env_config, env_request_data, env_response_data):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        host "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_config["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"host\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        post_api "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_config["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        post_api_request_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_request_data["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"make the request\""
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
            children: "        post_api_response_data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " env_response_data["
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"postAPI\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        # Your test code here"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        response "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " requests.post(host "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " post_api, "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "json"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "post_api_request_data)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"verify the response status code\""
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
              color: "#F97583"
            },
            children: "        assert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.status_code "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 201"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"verify the response data\""
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
              color: "#F97583"
            },
            children: "        assert"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " response.json() "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " post_api_response_data"
          })]
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "筛选测试用例执行",
      children: "筛选测试用例执行"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行 Regression 标记的测试用例"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Regression"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "这条命令告诉 pytest 只运行标有 Regression 的测试。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/d8dMGa.png",
        alt: "d8dMGa"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行 Smoke 标记的测试用例"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "shell",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pytest"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " Smoke"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "这条命令告诉 pytest 只运行标有 Smoke 的测试。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112014VOVT3v.png",
        alt: "2023112014VOVT3v"
      })
    }), "\n", createVNode(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["pytest-xdist 文档:", createVNode(_components.a, {
          href: "https://pytest-xdist.readthedocs.io/en/stable/",
          children: "https://pytest-xdist.readthedocs.io/en/stable/"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["pytest makers 文档:", createVNode(_components.a, {
          href: "https://docs.pytest.org/en/6.2.x/example/markers.html",
          children: "https://docs.pytest.org/en/6.2.x/example/markers.html"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["pytest 文档:", createVNode(_components.a, {
          href: "https://docs.pytest.org/en/6.2.x/",
          children: "https://docs.pytest.org/en/6.2.x/"
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

const url = "src/blog/zh-cn/API-Automation-Testing/pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/pytest-tutorial-advance-usage-filter-testcase-and-concurrent-testing-distributed-testing.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
