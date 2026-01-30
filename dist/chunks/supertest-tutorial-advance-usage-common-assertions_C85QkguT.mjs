import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "SuperTest 接口自动化测试教程：进阶用法 - 常用断言",
  "description": "聚焦于 Supertest 的高级用法，特别关注常用断言。您将学习如何使用这些断言来验证 API 响应，包括状态码、响应内容、和响应头部等。",
  "date": "2023-11-08T09:38:34.000Z",
  "author": "nao.deng",
  "tags": ["Supertest", "API Testing"],
  "categories": ["接口自动化测试", "REST Assured"],
  "series": ["REST Assured 接口自动化测试教程"],
  "cover": "./supertest-tutorial-advance-usage-common-assertions-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "常用断言",
    "text": "常用断言"
  }, {
    "depth": 3,
    "slug": "supertest-的内置断言",
    "text": "SuperTest 的内置断言"
  }, {
    "depth": 3,
    "slug": "chai-的常用断言",
    "text": "CHAI 的常用断言"
  }, {
    "depth": 3,
    "slug": "jest-的常用断言",
    "text": "Jest 的常用断言"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
    children: [createVNode(_components.h2, {
      id: "常用断言",
      children: "常用断言"
    }), "\n", createVNode(_components.p, {
      children: "下面会一次介绍一下 SuperTest,CHAI 和 Jest 常用的断言。"
    }), "\n", createVNode(_components.h3, {
      id: "supertest-的内置断言",
      children: "SuperTest 的内置断言"
    }), "\n", createVNode(_components.p, {
      children: ["Supertest 是基于", createVNode(_components.a, {
        href: "https://github.com/ladjs/superagent",
        children: "SuperAgent"
      }), " 构建的一个更高级的库，所以 Supertest 可以很轻松的使用 SuperAgent 的 HTTP 断言。"]
    }), "\n", createVNode(_components.p, {
      children: "示例如下："
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
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(status[, fn]) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//断言响应状态代码。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(status, body[, fn]) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 断言响应状态代码和正文。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(body[, fn]) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 用字符串、正则表达式或解析后的正文对象断言响应正文文本。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(field, value[, fn]) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 用字符串或正则表达式断言标题字段值。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "res"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {}) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 传递一个自定义断言函数。它将得到要检查的响应对象。如果检查失败，则抛出错误。"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "chai-的常用断言",
      children: "CHAI 的常用断言"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "相等性断言（Equality Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证实际值是否等于期望值。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual).to.deep."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证实际值和期望值是否深度相等，适用于对象和数组比较。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "eql"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 与 deep.equal 一样，用于深度相等的比较。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "包含性断言（Inclusion Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "include"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证数组是否包含指定的值。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(string).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "include"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(substring) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证字符串是否包含指定的子字符串。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(object).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "include"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(key) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证对象是否包含指定的键。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "类型断言（Type Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual).to.be."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(type) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证实际值的类型是否等于指定类型。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual).to.be."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "an"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(type) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 与 to.be.a 一样，用于类型断言。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual).to.be.an."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "instanceof"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(constructor) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证实际值是否是指定构造函数的实例。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "真假性断言（Truthiness Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value).to.be.true "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否为真。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value).to.be.false "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否为假。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value).to.exist "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否存在，非 null 和非 undefined。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "长度断言（Length Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "length"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(length) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证数组的长度是否等于指定长度。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(string).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "lengthOf"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(length) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证字符串的长度是否等于指定长度。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "空值断言（Empty Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array).to.be.empty "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证数组是否为空。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(string).to.be.empty "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证字符串是否为空。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "范围断言（Range Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value).to.be."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "within"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(min, max) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否在指定的范围内。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value).to.be."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "above"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(min) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否大于指定值。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value).to.be."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "below"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(max) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否小于指定值。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "异常断言（Exception Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(fn).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "throw"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(error) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证函数是否抛出指定类型的异常。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(fn).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "throw"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(message) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证函数是否抛出包含指定消息的异常。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "存在性断言（Existence Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(object).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "property"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(key) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证对象是否包含指定属性。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array).to.have."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "members"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(subset) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证数组是否包含指定的成员。"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["更多 chai 的断言，请查看", createVNode(_components.a, {
        href: "https://www.chaijs.com/api/assert/",
        children: "https://www.chaijs.com/api/assert/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "jest-的常用断言",
      children: "Jest 的常用断言"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "相等性断言（Equality Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证实际值是否严格等于期望值。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toEqual"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证实际值和期望值是否深度相等，适用于对象和数组比较。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "不相等性断言"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual).not."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证实际值与期望值不相等。"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "包含性断言（Inclusion Assertions）"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toContain"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证数组是否包含指定的值。"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "类型断言（Type Assertions）"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(actual)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeTypeOf"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证实际值的类型是否等于指定类型。"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "真假性断言（Truthiness Assertions）"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeTruthy"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否为真。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeFalsy"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否为假。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "异步断言"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "await"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(promise).resolves."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(expected) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证异步操作是否成功完成并返回与期望值匹配的结果。"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "异常断言"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(fn)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toThrow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(error) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证函数是否抛出指定类型的异常。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(fn)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toThrow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(message) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证函数是否抛出包含指定消息的异常。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "范围断言"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeGreaterThanOrEqual"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(min) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否大于或等于指定的最小值。"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(value)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toBeLessThanOrEqual"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(max) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证值是否小于或等于指定的最大值。"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "对象属性断言"
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
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(object)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toHaveProperty"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(key, value) "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 验证对象是否包含指定属性，并且该属性的值等于指定值。"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["更多 Jest 的断言，请查看", createVNode(_components.a, {
        href: "https://jestjs.io/docs/expect",
        children: "https://jestjs.io/docs/expect"
      })]
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

const url = "src/blog/zh-cn/API-Automation-Testing/supertest-tutorial-advance-usage-common-assertions.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/supertest-tutorial-advance-usage-common-assertions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/supertest-tutorial-advance-usage-common-assertions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
