import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Postman 接口自动化测试教程：进阶用法 - 常用的测试脚本和常用的第三方包用法示例",
  "description": "深入研究 Postman 接口自动化测试的高级用法，专注于常用的测试脚本和第三方包示例。探讨如何编写强大的测试脚本，涵盖各种测试场景，并介绍一些常用的第三方包，优化测试流程。",
  "date": "2023-11-23T09:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Postman", "API Testing"],
  "categories": ["接口自动化测试", "Postman"],
  "series": ["Postman 接口自动化测试教程"],
  "cover": "./postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "进阶用法",
    "text": "进阶用法"
  }, {
    "depth": 3,
    "slug": "常用测试脚本",
    "text": "常用测试脚本"
  }, {
    "depth": 4,
    "slug": "响应测试脚本",
    "text": "响应测试脚本"
  }, {
    "depth": 4,
    "slug": "请求前脚本",
    "text": "请求前脚本"
  }, {
    "depth": 3,
    "slug": "测试脚本中可用的第三方库",
    "text": "测试脚本中可用的第三方库"
  }, {
    "depth": 4,
    "slug": "chaijs-断言库方法",
    "text": "chai.js 断言库方法"
  }, {
    "depth": 5,
    "slug": "1-安装-chai",
    "text": "1. 安装 Chai"
  }, {
    "depth": 5,
    "slug": "2-使用-bdd-风格断言",
    "text": "2. 使用 BDD 风格断言"
  }, {
    "depth": 5,
    "slug": "3-使用-tdd-风格断言",
    "text": "3. 使用 TDD 风格断言"
  }, {
    "depth": 5,
    "slug": "4-chai-支持的一些常用断言",
    "text": "4. Chai 支持的一些常用断言"
  }, {
    "depth": 4,
    "slug": "使用-cheerio-操作-html-文件",
    "text": "使用 cheerio 操作 HTML 文件"
  }, {
    "depth": 4,
    "slug": "使用-tv4-来验证-json-schema",
    "text": "使用 tv4 来验证 JSON Schema"
  }, {
    "depth": 4,
    "slug": "生成-uuid",
    "text": "生成 uuid"
  }, {
    "depth": 5,
    "slug": "1-安装-uuid-模块",
    "text": "1. 安装 uuid 模块"
  }, {
    "depth": 5,
    "slug": "2-生成-uuid",
    "text": "2. 生成 UUID"
  }, {
    "depth": 5,
    "slug": "示例",
    "text": "示例"
  }, {
    "depth": 4,
    "slug": "使用-xml2js-将-xml-转换为-javascript-对象",
    "text": "使用 xml2js 将 XML 转换为 JavaScript 对象"
  }, {
    "depth": 4,
    "slug": "常用工具函数-util",
    "text": "常用工具函数 util"
  }, {
    "depth": 5,
    "slug": "1-utilguid---生成全局唯一标识符guid",
    "text": "1. util.guid() - 生成全局唯一标识符（GUID）"
  }, {
    "depth": 5,
    "slug": "2-utiltimestamp---获取当前时间戳",
    "text": "2. util.timestamp() - 获取当前时间戳"
  }, {
    "depth": 5,
    "slug": "3-utilrandomintmin-max---生成指定范围内的随机整数",
    "text": "3. util.randomInt(min, max) - 生成指定范围内的随机整数"
  }, {
    "depth": 5,
    "slug": "4-utilunixtimestamp---获取当前时间戳unix-时间戳秒",
    "text": "4. util.unixTimestamp() - 获取当前时间戳（Unix 时间戳，秒）"
  }, {
    "depth": 5,
    "slug": "5-utilencodebase64str-和-utildecodebase64base64str---base64-编码和解码",
    "text": "5. util.encodeBase64(str) 和 util.decodeBase64(base64Str) - Base64 编码和解码"
  }, {
    "depth": 5,
    "slug": "6-utileachobj-callback---遍历对象或数组",
    "text": "6. util.each(obj, callback) - 遍历对象或数组"
  }, {
    "depth": 5,
    "slug": "注意事项",
    "text": "注意事项"
  }, {
    "depth": 4,
    "slug": "stream-流操作",
    "text": "stream 流操作"
  }, {
    "depth": 5,
    "slug": "1-读取流readable-streams",
    "text": "1. 读取流（Readable Streams）："
  }, {
    "depth": 5,
    "slug": "2-写入流writable-streams",
    "text": "2. 写入流（Writable Streams）："
  }, {
    "depth": 5,
    "slug": "3-转换流transform-streams",
    "text": "3. 转换流（Transform Streams）："
  }, {
    "depth": 4,
    "slug": "定时器-timers",
    "text": "定时器 timers"
  }, {
    "depth": 5,
    "slug": "1-settimeout---延时执行",
    "text": "1. setTimeout - 延时执行"
  }, {
    "depth": 5,
    "slug": "2-setinterval---定时执行重复操作",
    "text": "2. setInterval - 定时执行重复操作"
  }, {
    "depth": 5,
    "slug": "3-在-postman-中使用",
    "text": "3. 在 Postman 中使用"
  }, {
    "depth": 4,
    "slug": "时间处理-events",
    "text": "时间处理 events"
  }, {
    "depth": 5,
    "slug": "1-创建事件发射器",
    "text": "1. 创建事件发射器"
  }, {
    "depth": 5,
    "slug": "2-定义事件处理函数",
    "text": "2. 定义事件处理函数"
  }, {
    "depth": 5,
    "slug": "3-注册事件处理函数",
    "text": "3. 注册事件处理函数"
  }, {
    "depth": 5,
    "slug": "4-触发事件",
    "text": "4. 触发事件"
  }, {
    "depth": 5,
    "slug": "示例-1",
    "text": "示例"
  }, {
    "depth": 2,
    "slug": "参考文档",
    "text": "参考文档"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    hr: "hr",
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
    }), "\n", createVNode(_components.p, {
      children: "以下会介绍 Postman 和 Newman 的一些进阶用法，包括常用测试响应测试脚本，测试前置脚本和常用的测试脚本可用的第三方包等。"
    }), "\n", createVNode(_components.h3, {
      id: "常用测试脚本",
      children: "常用测试脚本"
    }), "\n", createVNode(_components.p, {
      children: "Postman 提供了测试脚本功能，可以使用 JavaScript 编写脚本来验证 API 的响应和行为。这些脚本可以在请求的“Tests”标签下添加，分为请求前脚本（Pre-request Script）和响应后脚本（Tests）两个部分。下面是一些常用的 Postman 和 Newman 测试脚本："
    }), "\n", createVNode(_components.h4, {
      id: "响应测试脚本",
      children: "响应测试脚本"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "状态码检查："
          })
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
                children: "pm."
              }), createVNode(_components.span, {
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
                children: "\"Status code is 200\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm.response.to.have."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "status"
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
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "响应时间检查："
          })
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
                children: "pm."
              }), createVNode(_components.span, {
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
                children: "\"Response time is less than 200ms\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(pm.response.responseTime).to.be."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "below"
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
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "响应体 JSON 格式检查："
          })
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
                children: "pm."
              }), createVNode(_components.span, {
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
                children: "\"Response body is a valid JSON\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm.response.to.be.json;"
              })
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
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "响应体字段值检查："
          })
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
                children: "pm."
              }), createVNode(_components.span, {
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
                children: "\"Response body contains expected value\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "json"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "().key).to."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "eql"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"expectedValue\""
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
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "响应体数组长度检查："
          })
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
                children: "pm."
              }), createVNode(_components.span, {
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
                children: "\"Response body array has correct length\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "json"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "().arrayKey).to.have."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "lengthOf"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "3"
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
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "响应体属性存在性检查："
          })
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
                children: "pm."
              }), createVNode(_components.span, {
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
                children: "\"Response body has required properties\""
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
                children: " () {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "json"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "()).to.have."
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
                children: "\"key\""
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
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "请求前脚本",
      children: "请求前脚本"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "动态设置请求参数："
          })
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
                  color: "#E1E4E8"
                },
                children: "pm.variables."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "set"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"dynamicVariable\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"dynamicValue\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "使用全局变量设置请求头："
          })
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
                  color: "#E1E4E8"
                },
                children: "pm.request.headers."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "add"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "({ key: "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Authorization'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", value: pm.globals."
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
                children: "'authToken'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ") });"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "生成随机数并设置为变量："
          })
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
                children: " randomNumber"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "floor"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(Math."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "random"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "() "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "*"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " 1000"
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
                  color: "#E1E4E8"
                },
                children: "pm.variables."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "set"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"randomNumber\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", randomNumber);"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "签名生成或加密等操作："
          })
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
                children: "// 示例：使用 CryptoJS 进行 HMAC SHA256 签名"
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
                  color: "#79B8FF"
                },
                children: " CryptoJS"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " require"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'crypto-js'"
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
                  color: "#F97583"
                },
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " secretKey"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " 'yourSecretKey'"
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
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " message"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: " 'dataToSign'"
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
                children: "const"
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: " signature"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " CryptoJS."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "HmacSHA256"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(message, secretKey)."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "toString"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(CryptoJS.enc.Base64);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "pm.variables."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "set"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"signature\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", signature);"
              })]
            })]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "测试脚本中可用的第三方库",
      children: "测试脚本中可用的第三方库"
    }), "\n", createVNode(_components.p, {
      children: ["提供的 require 方法允许您使用沙箱内置库模块。下面列出了个人常用的可用库和示例\n更多可用的库可以在", createVNode(_components.a, {
        href: "https://learning.postman.com/docs/writing-scripts/script-references/postman-sandbox-api-reference/#using-external-libraries",
        children: "这里"
      }), "找到"]
    }), "\n", createVNode(_components.h4, {
      id: "chaijs-断言库方法",
      children: "chai.js 断言库方法"
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 的测试脚本中，你可以使用 Chai 断言库来编写断言，以验证你的 API 响应是否符合预期。Chai 提供了多种断言风格，包括 BDD（Behavior Driven Development）、TDD（Test Driven Development）等。以下是一些基本的 Chai 使用方法："
    }), "\n", createVNode(_components.h5, {
      id: "1-安装-chai",
      children: "1. 安装 Chai"
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 的脚本环境中，你无需单独安装 Chai，因为 Postman 默认已经内置了 Chai。"
    }), "\n", createVNode(_components.h5, {
      id: "2-使用-bdd-风格断言",
      children: "2. 使用 BDD 风格断言"
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 的 “Tests” 部分中，你可以使用 Chai 的 BDD 风格断言，例如："
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
            children: "// 引入 Chai 库"
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
              color: "#79B8FF"
            },
            children: " chai"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'chai'"
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
            children: "// 使用 BDD 风格断言"
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
              color: "#79B8FF"
            },
            children: " expect"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chai.expect;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 示例：验证响应状态码为 200"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: "'Status code is 200'"
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
              color: "#B392F0"
            },
            children: "    expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.response.code).to."
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 示例：验证响应体是 JSON"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pm."
          }), createVNode(_components.span, {
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
            children: "'Response body is JSON'"
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
              color: "#B392F0"
            },
            children: "    expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.response.headers."
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
            children: "'Content-Type'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "include"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'application/json'"
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
    }), "\n", createVNode(_components.h5, {
      id: "3-使用-tdd-风格断言",
      children: "3. 使用 TDD 风格断言"
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
            children: "// 引入 Chai 库"
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
              color: "#79B8FF"
            },
            children: " chai"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'chai'"
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
            children: "// 使用 TDD 风格断言"
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
              color: "#79B8FF"
            },
            children: " assert"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chai.assert;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 示例：使用 assert 断言响应状态码为 200"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "assert."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "equal"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(pm.response.code, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Status code should be 200'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "4-chai-支持的一些常用断言",
      children: "4. Chai 支持的一些常用断言"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "相等性："
          })
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
                children: "(expected);"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "包含："
          })
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
                children: "(actual).to."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "include"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(expected);"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "类型检查："
          })
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
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'string'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "大于/小于："
          })
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
                children: "above"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(expected);"
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
                children: "below"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(expected);"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "空/非空："
          })
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
                children: "(actual).to.be.null;"
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
                children: "(actual).to.not.be.null;"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "深度相等性："
          })
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
                children: "(expected);"
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["以上只是 Chai 断言库的一些基本用法，你可以根据需要使用更多的断言方法和组合。Chai 提供了丰富的断言功能，可以满足各种测试需求。更多详细信息，请查阅 Chai 的官方文档：", createVNode(_components.a, {
        href: "https://www.chaijs.com/",
        children: "Chai Documentation"
      }), "。"]
    }), "\n", createVNode(_components.h4, {
      id: "使用-cheerio-操作-html-文件",
      children: "使用 cheerio 操作 HTML 文件"
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 中，Cheerio 是一个基于 jQuery 的库，用于在服务器端操作 HTML 文档。它允许你使用类似于 jQuery 的语法来选择和操作 HTML 元素，非常适用于解析和提取 HTML 页面中的信息。在 Postman 中，你可以使用 Cheerio 库进行 HTML 响应的解析。以下是 Cheerio 在 Postman 中的基本用法："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "安装 Cheerio："
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "由于 Postman 使用的是 Node.js 运行时环境，你可以通过在 Postman 的脚本中安装 Cheerio 来使用它。在请求的 “Pre-request Script” 或 “Tests” 部分，可以使用以下方式安装 Cheerio："
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 安装 Cheerio"
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
                  color: "#79B8FF"
                },
                children: " cheerio"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " require"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'cheerio'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "使用 Cheerio 解析 HTML："
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "在请求的 “Tests” 部分中，你可以使用 Cheerio 解析 HTML。以下是一个简单的例子："
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 从响应中获取 HTML 内容"
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
                  color: "#79B8FF"
                },
                children: " htmlContent"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "text"
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
                children: "// 使用 Cheerio 解析 HTML"
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
                  color: "#79B8FF"
                },
                children: " $"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " cheerio."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "load"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(htmlContent);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 示例：从 HTML 中提取标题文本"
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
                  color: "#79B8FF"
                },
                children: " titleText"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " $"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'title'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ")."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "text"
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
                  color: "#E1E4E8"
                },
                children: "console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Title:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", titleText);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 示例：从 HTML 中提取所有链接的 href 属性"
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
                  color: "#79B8FF"
                },
                children: " links"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " [];"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "$"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'a'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ")."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "each"
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
                children: " () {"
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
                  color: "#79B8FF"
                },
                children: " link"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " $"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "this"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ")."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "attr"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'href'"
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
                  color: "#E1E4E8"
                },
                children: "    links."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "push"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(link);"
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
                  color: "#E1E4E8"
                },
                children: "console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Links:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", links);"
              })]
            })]
          })
        }), "\n", createVNode(_components.p, {
          children: ["在上述例子中，", createVNode(_components.code, {
            children: "cheerio.load(htmlContent)"
          }), " 用于加载 HTML 内容，并使用类似于 jQuery 的语法来选择和操作元素。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "注意事项："
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Cheerio 主要用于解析静态 HTML，对于使用 JavaScript 动态生成的内容，可能无法正常获取。在这种情况下，你可能需要考虑使用 Puppeteer 或其他支持 JavaScript 执行的工具。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这只是 Cheerio 在 Postman 中的基本用法。你可以根据具体的需求使用 Cheerio 提供的各种选择器和方法。请查阅 Cheerio 的官方文档以获取更详细的信息：", createVNode(_components.a, {
        href: "https://cheerio.js.org/",
        children: "Cheerio Documentation"
      }), "。"]
    }), "\n", createVNode(_components.h4, {
      id: "使用-tv4-来验证-json-schema",
      children: "使用 tv4 来验证 JSON Schema"
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 中，tv4 是一个 JSON Schema 验证库，用于验证 JSON 数据是否符合给定的 JSON Schema。JSON Schema 是一种描述 JSON 数据结构的规范，它定义了 JSON 对象的属性、类型和其他约束。"
    }), "\n", createVNode(_components.p, {
      children: "以下是在 Postman 中使用 tv4 进行 JSON Schema 验证的基本步骤："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "安装 tv4 库："
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "由于 Postman 使用的是 Node.js 运行时环境，你可以通过在 Postman 的脚本中安装 tv4 来使用它。在请求的 “Pre-request Script” 或 “Tests” 部分，你可以使用以下方式安装 tv4："
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 安装 tv4"
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
                  color: "#79B8FF"
                },
                children: " tv4"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " require"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'tv4'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "定义 JSON Schema："
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "在 Postman 中，你可以在请求的 “Pre-request Script” 或 “Tests” 部分定义 JSON Schema。JSON Schema 可以作为一个 JavaScript 对象进行定义。以下是一个简单的例子："
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 定义 JSON Schema"
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
                  color: "#79B8FF"
                },
                children: " jsonSchema"
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
                  color: "#9ECBFF"
                },
                children: "    \"type\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"object\""
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
                  color: "#9ECBFF"
                },
                children: "    \"properties\""
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
                  color: "#9ECBFF"
                },
                children: "        \"name\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": { "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"type\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"string\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " },"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "        \"age\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": { "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"type\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"number\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " }"
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
                  color: "#9ECBFF"
                },
                children: "    \"required\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ": ["
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"name\""
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "\"age\""
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
                  color: "#E1E4E8"
                },
                children: "};"
              })
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "使用 tv4 进行验证："
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "在请求的 “Tests” 部分，你可以使用 tv4 对 JSON 数据进行验证。以下是一个简单的例子："
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 获取响应的 JSON 数据"
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
                  color: "#79B8FF"
                },
                children: " jsonResponse"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "json"
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
                children: "// 使用 tv4 进行 JSON Schema 验证"
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
                  color: "#79B8FF"
                },
                children: " isValid"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " tv4."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "validate"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(jsonResponse, jsonSchema);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 检查验证结果"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "pm."
              }), createVNode(_components.span, {
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
                children: "'JSON is valid according to the schema'"
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
                  color: "#E1E4E8"
                },
                children: "    pm."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "expect"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(isValid).to.be.true;"
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
          children: ["在上述例子中，", createVNode(_components.code, {
            children: "tv4.validate(jsonResponse, jsonSchema)"
          }), " 用于验证 ", createVNode(_components.code, {
            children: "jsonResponse"
          }), " 是否符合 ", createVNode(_components.code, {
            children: "jsonSchema"
          }), " 定义的规范。验证结果存储在 ", createVNode(_components.code, {
            children: "isValid"
          }), " 变量中，然后使用 ", createVNode(_components.code, {
            children: "pm.test"
          }), " 来检查验证结果。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这只是 tv4 在 Postman 中的基本用法。你可以根据实际需求，定义更复杂的 JSON Schema，并使用 tv4 的其他功能进行更灵活的验证。请查阅 tv4 的官方文档以获取更详细的信息：", createVNode(_components.a, {
        href: "https://github.com/geraintluff/tv4",
        children: "tv4 Documentation"
      }), "。"]
    }), "\n", createVNode(_components.h4, {
      id: "生成-uuid",
      children: "生成 uuid"
    }), "\n", createVNode(_components.p, {
      children: ["在 Postman 中，你可以使用 ", createVNode(_components.code, {
        children: "uuid"
      }), " 模块来生成 UUID（Universally Unique Identifier），也被称为 GUID。以下是在 Postman 中使用 ", createVNode(_components.code, {
        children: "uuid"
      }), " 模块的基本用法："]
    }), "\n", createVNode(_components.h5, {
      id: "1-安装-uuid-模块",
      children: ["1. 安装 ", createVNode(_components.code, {
        children: "uuid"
      }), " 模块"]
    }), "\n", createVNode(_components.p, {
      children: ["在 Postman 的 “Pre-request Script” 或 “Tests” 部分，你可以使用以下方式安装 ", createVNode(_components.code, {
        children: "uuid"
      }), " 模块："]
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
            children: "// 安装 uuid 模块"
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
              color: "#79B8FF"
            },
            children: " uuid"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'uuid'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "2-生成-uuid",
      children: "2. 生成 UUID"
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
            children: "// 生成 UUID"
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
              color: "#79B8FF"
            },
            children: " generatedUUID"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " uuid."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "v4"
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
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Generated UUID:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", generatedUUID);"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["在上述例子中，", createVNode(_components.code, {
        children: "uuid.v4()"
      }), " 用于生成一个基于随机数的 UUID。你可以在 Postman 脚本中使用生成的 UUID，例如将其设置为请求头或参数的值。"]
    }), "\n", createVNode(_components.h5, {
      id: "示例",
      children: "示例"
    }), "\n", createVNode(_components.p, {
      children: "以下是一个在 Postman “Pre-request Script” 中生成 UUID 并设置为请求头的示例："
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
            children: "// 安装 uuid 模块"
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
              color: "#79B8FF"
            },
            children: " uuid"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'uuid'"
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
            children: "// 生成 UUID"
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
              color: "#79B8FF"
            },
            children: " generatedUUID"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " uuid."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "v4"
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
            children: "// 设置请求头"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "pm.request.headers."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({ key: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'X-Request-ID'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", value: generatedUUID });"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["在上述例子中，", createVNode(_components.code, {
        children: "X-Request-ID"
      }), " 是一个常见的请求头，用于标识请求的唯一性。生成的 UUID 被设置为这个请求头的值，以确保每个请求都有唯一的标识。"]
    }), "\n", createVNode(_components.p, {
      children: ["请注意，Postman 在运行脚本时会自动执行安装依赖项的步骤，无需手动安装 ", createVNode(_components.code, {
        children: "uuid"
      }), " 模块。"]
    }), "\n", createVNode(_components.h4, {
      id: "使用-xml2js-将-xml-转换为-javascript-对象",
      children: "使用 xml2js 将 XML 转换为 JavaScript 对象"
    }), "\n", createVNode(_components.p, {
      children: ["在 Postman 中，", createVNode(_components.code, {
        children: "xml2js"
      }), " 是一个用于将 XML 转换为 JavaScript 对象的库。在 Postman 的脚本中，你可以使用 ", createVNode(_components.code, {
        children: "xml2js"
      }), " 来处理 XML 响应并将其转换为易于处理的 JavaScript 对象。以下是在 Postman 中使用 ", createVNode(_components.code, {
        children: "xml2js"
      }), " 的基本步骤："]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "安装 xml2js 库："
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["由于 Postman 使用的是 Node.js 运行时环境，你可以通过在 Postman 的脚本中安装 ", createVNode(_components.code, {
              children: "xml2js"
            }), " 来使用它。在请求的 “Pre-request Script” 或 “Tests” 部分，你可以使用以下方式安装 ", createVNode(_components.code, {
              children: "xml2js"
            }), "："]
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 安装 xml2js"
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
                  color: "#79B8FF"
                },
                children: " xml2js"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: " require"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'xml2js'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ");"
              })]
            })]
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "解析 XML 响应："
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["获取 XML 响应后，你可以使用 ", createVNode(_components.code, {
              children: "xml2js"
            }), " 将其解析为 JavaScript 对象。以下是一个简单的例子："]
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 获取响应的 XML 内容"
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
                  color: "#79B8FF"
                },
                children: " xmlContent"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " pm.response."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "text"
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
                children: "// 使用 xml2js 解析 XML"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "xml2js."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "parseString"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "(xmlContent, "
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "function"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " ("
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "err"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", "
              }), createVNode(_components.span, {
                style: {
                  color: "#FFAB70"
                },
                children: "result"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ") {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "    if"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " (err) {"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "        console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "error"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Error parsing XML:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", err);"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: "        return"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ";"
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
              class: "line"
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "    // result 是解析后的 JavaScript 对象"
              })
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "    console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Parsed XML:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", result);"
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
          children: ["在上述例子中，", createVNode(_components.code, {
            children: "xml2js.parseString(xmlContent, function (err, result) {...}"
          }), " 用于异步地解析 XML 内容。解析后的 JavaScript 对象存储在 ", createVNode(_components.code, {
            children: "result"
          }), " 中。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.strong, {
            children: "处理解析后的 JavaScript 对象："
          })
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "一旦你获得了解析后的 JavaScript 对象，你就可以按照普通的 JavaScript 对象处理方式访问和操作它的属性。"
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
              children: createVNode(_components.span, {
                style: {
                  color: "#6A737D"
                },
                children: "// 示例：访问解析后的 JavaScript 对象的属性"
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
                  color: "#79B8FF"
                },
                children: " value"
              }), createVNode(_components.span, {
                style: {
                  color: "#F97583"
                },
                children: " ="
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: " result.root.element["
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "].subelement["
              }), createVNode(_components.span, {
                style: {
                  color: "#79B8FF"
                },
                children: "0"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "]._;"
              })]
            }), "\n", createVNode(_components.span, {
              class: "line",
              children: [createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "console."
              }), createVNode(_components.span, {
                style: {
                  color: "#B392F0"
                },
                children: "log"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: "("
              }), createVNode(_components.span, {
                style: {
                  color: "#9ECBFF"
                },
                children: "'Value from parsed XML:'"
              }), createVNode(_components.span, {
                style: {
                  color: "#E1E4E8"
                },
                children: ", value);"
              })]
            })]
          })
        }), "\n", createVNode(_components.p, {
          children: ["在上述例子中，", createVNode(_components.code, {
            children: "result.root.element[0].subelement[0]._"
          }), " 是一个访问解析后对象属性的示例。具体的结构取决于你的 XML 结构。"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["这只是 ", createVNode(_components.code, {
        children: "xml2js"
      }), " 在 Postman 中的基本用法。你可以根据实际需求使用 ", createVNode(_components.code, {
        children: "xml2js"
      }), " 的其他功能，例如设置解析选项，处理命名空间等。请查阅 ", createVNode(_components.code, {
        children: "xml2js"
      }), " 的官方文档以获取更详细的信息：", createVNode(_components.a, {
        href: "https://github.com/Leonidas-from-XIV/node-xml2js",
        children: "xml2js Documentation"
      }), "。"]
    }), "\n", createVNode(_components.h4, {
      id: "常用工具函数-util",
      children: "常用工具函数 util"
    }), "\n", createVNode(_components.p, {
      children: ["在 Postman 中，", createVNode(_components.code, {
        children: "util"
      }), " 是一个全局对象，提供了一些常用的实用工具函数，可以在 Postman 脚本中使用。以下是一些常见的 ", createVNode(_components.code, {
        children: "util"
      }), " 对象的用法："]
    }), "\n", createVNode(_components.h5, {
      id: "1-utilguid---生成全局唯一标识符guid",
      children: ["1. ", createVNode(_components.code, {
        children: "util.guid()"
      }), " - 生成全局唯一标识符（GUID）"]
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
            children: "// 生成一个全局唯一标识符"
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
              color: "#79B8FF"
            },
            children: " uniqueId"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "guid"
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
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Unique ID:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", uniqueId);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "2-utiltimestamp---获取当前时间戳",
      children: ["2. ", createVNode(_components.code, {
        children: "util.timestamp()"
      }), " - 获取当前时间戳"]
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
            children: "// 获取当前时间戳（毫秒）"
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
              color: "#79B8FF"
            },
            children: " timestamp"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "timestamp"
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
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Timestamp:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", timestamp);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "3-utilrandomintmin-max---生成指定范围内的随机整数",
      children: ["3. ", createVNode(_components.code, {
        children: "util.randomInt(min, max)"
      }), " - 生成指定范围内的随机整数"]
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
            children: "// 生成 1 到 100 之间的随机整数"
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
              color: "#79B8FF"
            },
            children: " randomInt"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "randomInt"
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
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Random Integer:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", randomInt);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "4-utilunixtimestamp---获取当前时间戳unix-时间戳秒",
      children: ["4. ", createVNode(_components.code, {
        children: "util.unixTimestamp()"
      }), " - 获取当前时间戳（Unix 时间戳，秒）"]
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
            children: "// 获取当前时间戳（秒）"
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
              color: "#79B8FF"
            },
            children: " unixTimestamp"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "unixTimestamp"
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
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Unix Timestamp:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", unixTimestamp);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "5-utilencodebase64str-和-utildecodebase64base64str---base64-编码和解码",
      children: ["5. ", createVNode(_components.code, {
        children: "util.encodeBase64(str)"
      }), " 和 ", createVNode(_components.code, {
        children: "util.decodeBase64(base64Str)"
      }), " - Base64 编码和解码"]
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
            children: "// Base64 编码"
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
              color: "#79B8FF"
            },
            children: " encodedString"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "encodeBase64"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Hello, World!'"
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
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Encoded String:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", encodedString);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Base64 解码"
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
              color: "#79B8FF"
            },
            children: " decodedString"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "decodeBase64"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(encodedString);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Decoded String:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", decodedString);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "6-utileachobj-callback---遍历对象或数组",
      children: ["6. ", createVNode(_components.code, {
        children: "util.each(obj, callback)"
      }), " - 遍历对象或数组"]
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
            children: "// 遍历数组"
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
              color: "#79B8FF"
            },
            children: " array"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "];"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "each"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(array, "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "index"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`Index ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "index"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}: ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}`"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 遍历对象"
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
              color: "#79B8FF"
            },
            children: " obj"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { a: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", b: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", c: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " };"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "util."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "each"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(obj, "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "key"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "`Key ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "key"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}: ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}`"
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
    }), "\n", createVNode(_components.h5, {
      id: "注意事项",
      children: "注意事项"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["在 Postman 脚本中，可以通过 ", createVNode(_components.code, {
          children: "util"
        }), " 对象直接调用这些实用工具函数。"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "util"
        }), " 对象提供的这些方法能够简化在 Postman 脚本中的一些常见任务，如生成随机数、处理时间戳等。"]
      }), "\n", createVNode(_components.li, {
        children: "请注意查阅 Postman 的官方文档，因为 Postman 会不断更新和改进其脚本环境，可能会引入新的实用工具函数。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "stream-流操作",
      children: "stream 流操作"
    }), "\n", createVNode(_components.p, {
      children: "在 Node.js 中使用流（Streams）通常用于处理大量的数据，可以有效地降低内存占用并提高性能。以下是一些在 Node.js 中使用流的基本用法，可以参考这些方法来处理数据或文件。"
    }), "\n", createVNode(_components.h5, {
      id: "1-读取流readable-streams",
      children: ["1. ", createVNode(_components.strong, {
        children: "读取流（Readable Streams）："
      })]
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
            children: " fs"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'fs'"
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
            children: "// 创建可读流"
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
              color: "#79B8FF"
            },
            children: " readableStream"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " fs."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "createReadStream"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'input.txt'"
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
            children: "// 设置编码（如果是文本文件）"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setEncoding"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'utf-8'"
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
            children: "// 处理数据"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'data'"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "chunk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Received chunk:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", chunk);"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 处理结束"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'end'"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Stream ended.'"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 处理错误"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'error'"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "err"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Error:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", err);"
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
    }), "\n", createVNode(_components.h5, {
      id: "2-写入流writable-streams",
      children: ["2. ", createVNode(_components.strong, {
        children: "写入流（Writable Streams）："
      })]
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
            children: " fs"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'fs'"
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
            children: "// 创建可写流"
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
              color: "#79B8FF"
            },
            children: " writableStream"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " fs."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "createWriteStream"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'output.txt'"
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
            children: "// 写入数据"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Hello, World!"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\\n"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'"
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
              color: "#E1E4E8"
            },
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "write"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Another line.'"
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
            children: "// 结束写入"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "end"
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
            children: "// 处理结束"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'finish'"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Write completed.'"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 处理错误"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "writableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'error'"
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
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "err"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Error:'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", err);"
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
    }), "\n", createVNode(_components.h5, {
      id: "3-转换流transform-streams",
      children: ["3. ", createVNode(_components.strong, {
        children: "转换流（Transform Streams）："
      })]
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
              color: "#E1E4E8"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Transform"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'stream'"
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
            children: "// 创建转换流"
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
              color: "#79B8FF"
            },
            children: " myTransform"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Transform"
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
              color: "#B392F0"
            },
            children: "    transform"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "chunk"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "encoding"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "callback"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // 转换数据"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " transformedData"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " chunk."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toString"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "toUpperCase"
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
              color: "#79B8FF"
            },
            children: "        this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "push"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(transformedData);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        callback"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
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
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 管道连接读取流、转换流和写入流"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "readableStream."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pipe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(myTransform)."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "pipe"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(writableStream);"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["这只是 Node.js 中使用流的一些基本用法。在 Postman 中，你可以在请求的脚本中使用这些方法，例如 “Pre-request Script” 或 “Tests” 部分，通过 Node.js 运行环境来执行这些脚本。请注意，Node.js 中的流 API 可以更复杂，例如通过使用 ", createVNode(_components.code, {
        children: "pipeline"
      }), " 函数来处理多个流的连接。"]
    }), "\n", createVNode(_components.h4, {
      id: "定时器-timers",
      children: "定时器 timers"
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 中，你可以使用 Node.js 的定时器功能来处理定时任务或延时执行的操作。以下是一些基本的 Node.js 定时器的用法，这些用法可以在 Postman 的脚本中使用。"
    }), "\n", createVNode(_components.h5, {
      id: "1-settimeout---延时执行",
      children: ["1. ", createVNode(_components.code, {
        children: "setTimeout"
      }), " - 延时执行"]
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
            children: "// 延时执行操作"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setTimeout"
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
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Delayed operation.'"
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
              color: "#E1E4E8"
            },
            children: "}, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 2000 毫秒（2 秒）"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "2-setinterval---定时执行重复操作",
      children: ["2. ", createVNode(_components.code, {
        children: "setInterval"
      }), " - 定时执行重复操作"]
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
            children: "// 定时执行重复操作"
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
              color: "#79B8FF"
            },
            children: " intervalId"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " setInterval"
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
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Repeated operation.'"
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
              color: "#E1E4E8"
            },
            children: "}, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 3000 毫秒（3 秒）"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 取消定时执行"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// clearInterval(intervalId);"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "3-在-postman-中使用",
      children: "3. 在 Postman 中使用"
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 中，你可以在 “Pre-request Script” 或 “Tests” 部分中使用这些定时器。例如，在 “Tests” 部分中延时执行操作："
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
            children: "// 在 \"Tests\" 部分延时执行操作"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setTimeout"
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
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Delayed operation in Tests.'"
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
              color: "#E1E4E8"
            },
            children: "}, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "); "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 2000 毫秒（2 秒）"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "请注意，在 Postman 的 “Pre-request Script” 或 “Tests” 部分执行的代码是在 Node.js 环境中运行的，因此你可以使用 Node.js 支持的大多数功能，包括定时器。"
    }), "\n", createVNode(_components.p, {
      children: ["在以上例子中，", createVNode(_components.code, {
        children: "setTimeout"
      }), " 会在指定的延时后执行一次操作，而 ", createVNode(_components.code, {
        children: "setInterval"
      }), " 会在每隔指定的时间间隔后执行一次操作。在 Postman 中，你可以根据实际需求使用这些定时器功能。"]
    }), "\n", createVNode(_components.h4, {
      id: "时间处理-events",
      children: "时间处理 events"
    }), "\n", createVNode(_components.p, {
      children: ["在 Postman 的脚本环境中，你可以使用 Node.js 的 ", createVNode(_components.code, {
        children: "events"
      }), " 模块来处理事件。", createVNode(_components.code, {
        children: "events"
      }), " 模块提供了 ", createVNode(_components.code, {
        children: "EventEmitter"
      }), " 类，该类可以用于定义和触发事件。以下是在 Postman 中使用 Node.js 的 ", createVNode(_components.code, {
        children: "events"
      }), " 模块的一些基本用法："]
    }), "\n", createVNode(_components.h5, {
      id: "1-创建事件发射器",
      children: "1. 创建事件发射器"
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
            children: " EventEmitter"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'events'"
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " myEmitter"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventEmitter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "2-定义事件处理函数",
      children: "2. 定义事件处理函数"
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
            children: "// 定义事件处理函数"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " myEventHandler"
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
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Event handled.'"
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
    }), "\n", createVNode(_components.h5, {
      id: "3-注册事件处理函数",
      children: "3. 注册事件处理函数"
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
            children: "// 注册事件处理函数"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "myEmitter."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'myEvent'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", myEventHandler);"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "4-触发事件",
      children: "4. 触发事件"
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
            children: "// 触发事件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "myEmitter."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "emit"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'myEvent'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "示例-1",
      children: "示例"
    }), "\n", createVNode(_components.p, {
      children: "在 Postman 的脚本环境中，你可以使用事件来实现异步操作的回调或处理。以下是一个简单的例子，演示如何在异步操作完成后触发事件："
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
            children: " EventEmitter"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'events'"
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " myEmitter"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EventEmitter"
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
            children: "// 模拟异步操作"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " performAsyncOperation"
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
              color: "#B392F0"
            },
            children: "    setTimeout"
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
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Async operation completed.'"
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
            children: "        // 触发事件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        myEmitter."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "emit"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'asyncOperationComplete'"
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
              color: "#E1E4E8"
            },
            children: "    }, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2000"
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
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 注册事件处理函数"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "myEmitter."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'asyncOperationComplete'"
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
              color: "#E1E4E8"
            },
            children: "    console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Handling async operation completion.'"
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
            children: "    // 这里可以执行异步操作完成后的处理逻辑"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// 执行异步操作"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "performAsyncOperation"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["在上述例子中，", createVNode(_components.code, {
        children: "performAsyncOperation"
      }), " 函数模拟了一个异步操作，当该操作完成时，通过 ", createVNode(_components.code, {
        children: "myEmitter.emit"
      }), " 触发了 ", createVNode(_components.code, {
        children: "asyncOperationComplete"
      }), " 事件。在事件处理函数中，你可以编写处理异步操作完成后的逻辑。"]
    }), "\n", createVNode(_components.p, {
      children: "请注意，在 Postman 的脚本中，异步操作的执行方式可能受到限制，因此在实际使用中需要谨慎考虑。"
    }), "\n", createVNode(_components.h2, {
      id: "参考文档",
      children: "参考文档"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/getting-started/introduction/",
          children: "Postman 官方文档"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/",
          children: "newman 官方文档"
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

const url = "src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-common-test-scripts-and-commonly-used-third-party-packages.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
