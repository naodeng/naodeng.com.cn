import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*more*/
/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Cypress UI 自动化测试框架学习（2）- 测试报告",
  "description": "文章介绍 Cypress UI 自动化测试框架学习如何去使用不同格式的 cypress 自动化测试报告模版",
  "date": "2022-05-09T00:00:00.000Z",
  "author": "nao.deng",
  "cover": "./cypress-demo2-cover.png",
  "tags": ["Cypress", "UI Testing"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "写在前面",
    "text": "写在前面"
  }, {
    "depth": 2,
    "slug": "前置准备工作",
    "text": "前置准备工作"
  }, {
    "depth": 2,
    "slug": "常用报告类型",
    "text": "常用报告类型"
  }, {
    "depth": 3,
    "slug": "spec-格式报告",
    "text": "spec 格式报告"
  }, {
    "depth": 3,
    "slug": "dot-格式报告",
    "text": "Dot 格式报告"
  }, {
    "depth": 3,
    "slug": "json-格式报告",
    "text": "json 格式报告"
  }, {
    "depth": 3,
    "slug": "list-格式报告",
    "text": "List 格式报告"
  }, {
    "depth": 3,
    "slug": "nyan-格式报告",
    "text": "NYAN 格式报告"
  }, {
    "depth": 2,
    "slug": "高大上报告类型",
    "text": "高大上报告类型"
  }, {
    "depth": 3,
    "slug": "mochawesome-格式报告",
    "text": "Mochawesome 格式报告"
  }, {
    "depth": 3,
    "slug": "allure-格式报告",
    "text": "allure 格式报告"
  }, {
    "depth": 3,
    "slug": "dashboard-格式报告",
    "text": "Dashboard 格式报告"
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
    img: "img",
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
      children: "下面的信息是介绍 cypress 自动化测试框架学习第 3 篇的测试报告的内容\n主要介绍一下如何去使用不同格式的 cypress 自动化测试报告模版"
    }), "\n", "\n", createVNode(_components.h2, {
      id: "写在前面",
      children: "写在前面"
    }), "\n", createVNode(_components.p, {
      children: "由于 Cypress 测试报告是建立在 Mocha 测试报告之上的，这意味着任何为 Mocha 构建的报告程序都可以与 Cypress 一起使用。"
    }), "\n", createVNode(_components.p, {
      children: ["以下是内置的 Mocha 测试类型列表（Cypress 也同样支持）：", createVNode(_components.a, {
        href: "https://mochajs.org/#reporters",
        children: "https://mochajs.org/#reporters"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "前置准备工作",
      children: "前置准备工作"
    }), "\n", createVNode(_components.p, {
      children: "在 package.json 文件的 scripts 模块加入了如下脚本：“cypress:run”:“cypress run”，便于后面生成报告"
    }), "\n", createVNode(_components.p, {
      children: "不同运行脚本的区别："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "cypress run：是以无头浏览器模式跑测试用例文件夹下的所有测试用例"
      }), "\n", createVNode(_components.li, {
        children: "cypress open：会打开测试用例集的界面，需要手动运行"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "常用报告类型",
      children: "常用报告类型"
    }), "\n", createVNode(_components.h3, {
      id: "spec-格式报告",
      children: "spec 格式报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行命令"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm run cypress:run --reporter=spec"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["报告截图\n", createVNode(_components.img, {
          src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqx2v3ihu9j31ka0eojtc.jpg",
          alt: ""
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "dot-格式报告",
      children: "Dot 格式报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "前置：在 cypress.json 文件新增”reporter”: “dot”信息"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "运行方式："
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm run cypress:run"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["报告截图\n", createVNode(_components.img, {
          src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqy74s99hij30qo0800t5.jpg",
          alt: ""
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "json-格式报告",
      children: "json 格式报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "前置：在 cypress.json 文件新增”reporter”: “json”信息"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "运行方式："
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm run cypress:run"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["报告截图\n", createVNode(_components.img, {
          src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqy6zo6iu9j30u00u644f.jpg",
          alt: ""
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "list-格式报告",
      children: "List 格式报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "前置：在 cypress.json 文件新增”reporter”: “list”信息"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "运行方式："
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm run cypress:run"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["报告截图\n", createVNode(_components.img, {
          src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqy78or4xhj30v80by76y.jpg",
          alt: ""
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "nyan-格式报告",
      children: "NYAN 格式报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "前置：在 cypress.json 文件新增”reporter”: “nyan”信息"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "运行方式："
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm run cypress:run"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "报告截图"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqy7cxd155j30my09mq3k.jpg",
        alt: ""
      })
    }), "\n", createVNode(_components.h2, {
      id: "高大上报告类型",
      children: "高大上报告类型"
    }), "\n", createVNode(_components.h3, {
      id: "mochawesome-格式报告",
      children: "Mochawesome 格式报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "前置：安装 Mocha、Mochawesome 至项目中"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "npm install --save-dev mocha"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "npm install --save-dev mochawesome"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在 cypress.json 文件新增”reporter”: “mochawesome”信息"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "运行命令"
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
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm run cypress:run"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "报告截图"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqy7w33bfsj31xd0u0q78.jpg",
        alt: ""
      })
    }), "\n", createVNode(_components.h3, {
      id: "allure-格式报告",
      children: "allure 格式报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "前置：安装 allure（推荐使用 brew 安装）"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ brew install allure"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在 cypress.json 文件新增如下信息"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    \"reporter\": \"junit\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    \"reporterOptions\": {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        \"mochaFile\": \"results/test_report_[hash].xml\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        \"toConsole\": true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行命令"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm run cypress:run"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "生成报告"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ allure serve results"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "报告截图"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqy9t4vp9xj31p80u044v.jpg",
        alt: ""
      })
    }), "\n", createVNode(_components.h3, {
      id: "dashboard-格式报告",
      children: "Dashboard 格式报告"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["待完善，参考资料：", createVNode(_components.a, {
          href: "https://docs.cypress.io/guides/dashboard/introduction#Features",
          children: "https://docs.cypress.io/guides/dashboard/introduction#Features"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行命令"
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "npx cypress run --record --key 7aaee33b-f67b-4993-8d6c-2c392a1bd1c8"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "报告截图"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqya4w0n7xj31op0u0do2.jpg",
        alt: " "
      })
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

const url = "src/blog/zh-cn/Others/cypress-demo2.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo2.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
