import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "UI 测试最佳实践的服务通信测试：检验请求和响应负载，测试监控",
  "description": "这篇博文深入探讨了 UI 测试最佳实践中的服务通信测试，重点关注请求和响应负载的验证以及测试监控。读者将学到如何有效检验 UI 与服务之间的请求和响应负载，以确保系统交互的正确性和可靠性。博文还介绍了在 UI 测试中如何进行监控，以及监测服务通信过程中的性能和可用性。通过这些实践，读者能够更全面地覆盖 UI 测试中的服务通信方面，提高测试的全面性和准确性，确保系统的正常运行。",
  "date": "2024-01-21T09:06:44.000Z",
  "author": "nao.deng",
  "tags": ["UI Testing", "Best Practices"],
  "categories": ["UI 测试", "服务通信测试"],
  "series": ["UI 测试最佳实践"],
  "cover": "./UI-Testing-best-practice-server-communication-testing-test-the-request-and-response-payloads-and-monitoring-tests-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "检验请求和响应负载",
    "text": "检验请求和响应负载"
  }, {
    "depth": 3,
    "slug": "一段简要说明",
    "text": "一段简要说明"
  }, {
    "depth": 2,
    "slug": "对-xhr-请求进行断言的完整示例",
    "text": "对 XHR 请求进行断言的完整示例"
  }, {
    "depth": 2,
    "slug": "测试监控",
    "text": "测试监控"
  }, {
    "depth": 3,
    "slug": "一段简要说明-1",
    "text": "一段简要说明"
  }, {
    "depth": 2,
    "slug": "cypress-示例",
    "text": "Cypress 示例"
  }, {
    "depth": 2,
    "slug": "参考资料",
    "text": "参考资料"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
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
    children: [createVNode(_components.p, {
      children: ["文章由 ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices",
        children: "UI 测试最佳实践项目"
      }), " 内容翻译而来，大家有条件的话可以去 ", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices",
        children: "UI 测试最佳实践项目"
      }), "阅读原文。"]
    }), "\n", createVNode(_components.h2, {
      id: "检验请求和响应负载",
      children: "检验请求和响应负载"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接:", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/server-communication-testing/test-request-and-response-payload.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/server-communication-testing/test-request-and-response-payload.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "一段简要说明",
      children: "一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: "前端应用因与后端通信不协调而导致停止工作的频率有多高？"
    }), "\n", createVNode(_components.p, {
      children: "前端应用和后端应用之间存在一份合同，你始终需要测试合同是否得到遵守。每一次前后端应用之间的通信都由以下几个方面定义："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "请求的 URL"
      }), "\n", createVNode(_components.li, {
        children: "所使用的 HTTP 动词（GET、POST 等）"
      }), "\n", createVNode(_components.li, {
        children: "请求的有效负载和标头：前端应用发送给后端应用的数据"
      }), "\n", createVNode(_components.li, {
        children: "响应的有效负载、标头和状态：后端应用发送回前端应用的数据"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "你需要对所有这些方面进行测试，更广义地说，你需要等待每个相关的 AJAX 请求，为什么呢？"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "相关的 XHR 请求是你正在测试的应用程序流程的一部分"
      }), "\n", createVNode(_components.li, {
        children: "即使 XHR 请求不是你正在测试的流程的一部分，它对达到期望的 UI 状态也可能是相关的"
      }), "\n", createVNode(_components.li, {
        children: ["等待 XHR 请求可以使你的测试更为健壮，参见", createVNode(_components.a, {
          href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/generic-best-practices/await-dont-sleep.zh.md",
          children: "等待，不要休眠"
        }), "章节及其", createVNode(_components.a, {
          href: "https://github.com/naodeng/ui-testing-best-practices/blob/master/sections/generic-best-practices/await-dont-sleep.zh.md#XHR-%E8%AF%B7%E6%B1%82%E7%AD%89%E5%BE%85",
          children: "XHR 请求等待"
        }), "部分"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "在现有的测试工具中，完全等待和检查 XHR 请求并不那么常见，目前 Cypress 提供了最全面的检查支持。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "请注意：以下所有示例均基于 Cypress，它目前提供了最佳的 XHR 测试支持。"
      })
    }), "\n", createVNode(_components.h2, {
      id: "对-xhr-请求进行断言的完整示例",
      children: "对 XHR 请求进行断言的完整示例"
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
            children: "// ask Cypress to intercept every XHR request made to a URL ending with `/authentication`"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "intercept"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"POST\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"**/authentication\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"authentication-xhr\""
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// ... your test actions..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wait"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"@authentication-xhr\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "interception"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
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
            children: "  // request headers assertion"
          })
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
            children: "(interception.request.headers).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "property"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Content-Type\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"application/json\""
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
              color: "#6A737D"
            },
            children: "  // request payload assertions"
          })
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
            children: "(interception.request.body).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "property"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"username\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"admin\""
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
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(interception.request.body).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "property"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"password\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"asupersecretpassword\""
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
              color: "#6A737D"
            },
            children: "  // status assertion"
          })
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
            children: "(interception.response.statusCode).to."
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
              color: "#6A737D"
            },
            children: "  // response headers assertions"
          })
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
            children: "(interception.response.body).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "property"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"access-control-allow-origin\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"*\""
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
              color: "#6A737D"
            },
            children: "  // response payload assertions"
          })
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
            children: "(interception.response.body).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "property"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"token\""
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
      children: "在下面的章节中，我们将详细讨论 XHR 请求的不同特征。"
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "验证 XHR 请求的 URL"
      }), createVNode(_components.p, {
        children: ["在 Cypress 中，用于请求的 URL 是通过", createVNode(_components.code, {
          children: "cy.intercept"
        }), "调用定义的。你可能需要检查 URL 的查询字符串。"]
      }), createVNode(_components.pre, {
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
              children: "// ask Cypress to intercept every XHR request made to a URL ending with `/authentication`"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "intercept"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"**/authentication**\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "as"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"authentication-xhr\""
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
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ... your test actions..."
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "wait"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"@authentication-xhr\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "then"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "interception"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " =>"
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
              children: "  // query string assertion"
            })
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
              children: "(interception.request.url).to."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "contain"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"username=admin\""
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
              children: "  expect"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(interception.request.url).to."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "contain"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"password=asupersecretpassword\""
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
      }), createVNode(_components.p, {
        children: ["请注意，当你需要对多个主题进行断言时，Cypress 的", createVNode(_components.code, {
          children: "then => expect"
        }), "语法非常有帮助（例如，URL 和状态）。如果你只需要对单个主题进行断言，可以使用更具表现力的", createVNode(_components.code, {
          children: "should"
        }), "语法。"]
      }), createVNode(_components.pre, {
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
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "wait"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"@authentication-xhr\""
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
              children: "  ."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "its"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"url\""
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
              children: "  ."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "should"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"contain\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"username=admin\""
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
              children: "  ."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "and"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"contain\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"password=asupersecretpassword\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          })]
        })
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "XHR 请求的方法"
      }), createVNode(_components.p, {
        children: ["在 Cypress 中，请求使用", createVNode(_components.code, {
          children: "cy.intercept"
        }), "函数定义。你可以通过指定它来定义要拦截的请求类型。"]
      }), createVNode(_components.pre, {
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
              children: "// the most compact `cy.intercept` call, the GET method is implied"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "intercept"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"**/authentication\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "as"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"authentication-xhr\""
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
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// method can be explicitly defined"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "intercept"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"POST\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"**/authentication\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "as"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"authentication-xhr\""
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
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// the extended `cy.intercept` call is available too"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "intercept"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  method: "
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
                color: "#E1E4E8"
              },
              children: "  url: "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"**/authentication\""
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "})."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "as"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"authentication-xhr\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          })]
        })
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "验证 XHR 请求的 payload 和 headers"
      }), createVNode(_components.p, {
        children: "对 XHR 请求的 payload 和 headers 进行断言允许你立即获得有关糟糕的 XHR 请求原因的详细反馈。必须在每个 XHR 请求上进行检查，以确保一切都正确地表示了测试执行的 UI 操作。"
      }), createVNode(_components.pre, {
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
              children: "// ask Cypress to intercept every XHR request made to a URL ending with `/authentication`"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "intercept"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"POST\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"**/authentication\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "as"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"authentication-xhr\""
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
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ... your test actions..."
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "wait"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"@authentication-xhr\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "then"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "interception"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " =>"
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
              children: "  // request headers assertion"
            })
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
              children: "(interception.request.headers).to.have."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "property"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Content-Type\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"application/json\""
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
                color: "#6A737D"
              },
              children: "  // request payload assertions"
            })
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
              children: "(interception.request.body).to.have."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "property"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"username\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"admin\""
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
              children: "  expect"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(interception.request.body).to.have."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "property"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"password\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"asupersecretpassword\""
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
      })]
    }), "\n", createVNode("details", {
      children: [createVNode("summary", {
        children: "验证 XHR 请求响应的 payload, headers 和 status"
      }), createVNode(_components.p, {
        children: "响应必须百分之百符合前端应用的预期，否则可能向用户展示意料之外的状态。响应断言在完整的端到端测试中很有用，但在 UI 集成测试中则无关紧要（TODO：链接到集成测试页面）。"
      }), createVNode(_components.pre, {
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
              children: "// ask Cypress to intercept every XHR request made to a URL ending with `/authentication`"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "intercept"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"POST\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"**/authentication\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "as"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"authentication-xhr\""
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
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ... your test actions..."
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "cy."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "wait"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"@authentication-xhr\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "then"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "intercept"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: " =>"
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
              children: "  // status assertions"
            })
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
              children: "(intercept.response.statusCode).to."
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
                color: "#6A737D"
              },
              children: "  // response headers assertions"
            })
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
              children: "(intercept.response.body).to.have."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "property"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"access-control-allow-origin\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"*\""
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
                color: "#6A737D"
              },
              children: "  // response payload assertions"
            })
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
              children: "(intercept.response.body).to.have."
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "property"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"token\""
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
      })]
    }), "\n", createVNode(_components.h2, {
      id: "测试监控",
      children: "测试监控"
    }), "\n", createVNode(_components.p, {
      children: ["原文链接：:", createVNode(_components.a, {
        href: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/server-communication-testing/monitoring-tests.md",
        children: "https://github.com/NoriSte/ui-testing-best-practices/blob/master/sections/server-communication-testing/monitoring-tests.md"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "一段简要说明-1",
      children: "一段简要说明"
    }), "\n", createVNode(_components.p, {
      children: ["随着前端期望的提高，服务器和服务的复杂性也在增加。前端应用需要变得越来越快：代码拆分、懒加载、Brotli 压缩等性能优化解决方案已成为标准。还有一些令人惊叹的解决方案，如基于机器学习和分析数据的代码拆分和资源预加载。此外，JAMstack 站点生成器可用于避免手动管理许多性能优化，但它们的配置和构建过程可能会破坏", createVNode(_components.strong, {
        children: "已经测试过的功能"
      }), "。"]
    }), "\n", createVNode(_components.p, {
      children: "有很多我们一旦测试过就认为理所当然的功能，但它们并非无法回归，可能会导致灾难。例如："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "sitemap.xml"
        }), " 和 ", createVNode(_components.code, {
          children: "robots.txt"
        }), " 的爬行配置（通常每个环境都不同）"]
      }), "\n", createVNode(_components.li, {
        children: "使用 Brotli/gzip 提供的资产：错误的内容编码可能会破坏站点的所有功能"
      }), "\n", createVNode(_components.li, {
        children: "针对静态或动态资产的不同配置的缓存管理"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "这些问题可能看起来很明显，但比你想象的更微妙。如果你关心用户体验，就应该保持监控，因为通常在发现问题时已经为时过晚。我知道不能监控所有事物，但是测试应用的次数越多，测试就越能成为首要的质量检查工具。"
    }), "\n", createVNode(_components.p, {
      children: "监控测试也可以与 E2E 测试集成（毕竟，它们只是简单的 E2E 测试），但将它们保持分开可以帮助你在需要时运行它们。上述大多数事项与 DevOps 相关，有了超快的监控测试，您可以获得即时而专注的反馈。"
    }), "\n", createVNode(_components.h2, {
      id: "cypress-示例",
      children: "Cypress 示例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "缓存监控测试示例"
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " urls"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  staging: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://staging.example.com\""
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
              color: "#E1E4E8"
            },
            children: "  production: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"https://example.com\""
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
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " shouldNotBeCached"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "xhr"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wrap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(xhr)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "its"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"headers.cache-control\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"equal\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"public,max-age=0,must-revalidate\""
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
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " shouldBeCached"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "xhr"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wrap"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(xhr)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "its"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"headers.cache-control\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"equal\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"public,max-age=31536000,immutable\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// extract the main JS file from the source code of the page"
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
              color: "#B392F0"
            },
            children: " getMainJsUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " pageSource"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"/app-56a3f6cb9e6156c82be6.js\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "context"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Site monitoring'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  context"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'The HTML should not be cached'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "request"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(url)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(shouldNotBeCached)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"staging\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(urls.staging))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"production\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(urls.production))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  context"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'The static assets should be cached'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "request"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(url)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "its"
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
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getMainJsUrl)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "appUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "appUrl)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(cy.request)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(shouldBeCached)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'staging'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(urls.staging))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'production'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(urls.production))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "内容编码监控测试示例"
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
            children: "context"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'The Brotli-compressed assets should be served with the correct content encoding'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
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
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: " url"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "request"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(url)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "its"
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
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(getMainJsUrl)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "then"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "appUrl"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " =>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "request"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({url: url "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " appUrl, headers: {"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Accept-Encoding\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"br\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}})"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "its"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"headers.content-encoding\""
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
            children: "      ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"equal\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"br\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'staging'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(urls.staging))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'production'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(urls.production))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "抓取监测测试示例"
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
            children: "context"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'The robots.txt file should disallow the crawling of the staging site and allow the production one'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
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
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "content"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    cy."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "request"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "url"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}/robots.txt`"
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
            children: "      ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "its"
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
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "      ."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "should"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"contain\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", content)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'staging'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(urls.staging, "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Disallow: /\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  it"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'production'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(urls.production, "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Allow: /\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "))"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["由", createVNode(_components.a, {
          href: "https://github.com/NoriSte",
          children: "NoriSte"
        }), " 在 ", createVNode(_components.a, {
          href: "https://dev.to/noriste/the-concept-of-monitoring-tests-4l5j",
          children: "dev.to"
        }), " 和 ", createVNode(_components.a, {
          href: "https://medium.com/@NoriSte/the-concept-of-monitoring-tests-d7cb5af514e5",
          children: "Medium"
        }), "进行联合发表。"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "参考资料",
      children: "参考资料"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["UI 测试最佳实践项目:", createVNode(_components.a, {
          href: "https://github.com/NoriSte/ui-testing-best-practices",
          children: "https://github.com/NoriSte/ui-testing-best-practices"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["UI 测试最佳实践项目中文翻译:", createVNode(_components.a, {
          href: "https://github.com/naodeng/ui-testing-best-practices",
          children: "https://github.com/naodeng/ui-testing-best-practices"
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

const url = "src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-server-communication-testing-test-the-request-and-response-payloads-and-monitoring-tests.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-server-communication-testing-test-the-request-and-response-payloads-and-monitoring-tests.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/UI-Automation-Testing/UI-Testing-best-practice-server-communication-testing-test-the-request-and-response-payloads-and-monitoring-tests.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
