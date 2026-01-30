import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*more*/
/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Playwright 自动化框架入门",
  "description": "文章介绍 playwright 自动化测试框架的新手入门介绍",
  "date": "2023-01-18T00:00:00.000Z",
  "author": "nao.deng",
  "cover": "./playwright-get-started-cover.png",
  "tags": ["自动化测试", "Playwright"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "安装-install",
    "text": "安装 Install"
  }, {
    "depth": 3,
    "slug": "非-vs-code-编辑器安装",
    "text": "非 VS Code 编辑器安装"
  }, {
    "depth": 3,
    "slug": "vs-code-编辑器安装",
    "text": "VS Code 编辑器安装"
  }, {
    "depth": 2,
    "slug": "运行测试-run-test",
    "text": "运行测试 Run test"
  }, {
    "depth": 3,
    "slug": "vs-code-运行",
    "text": "VS Code 运行"
  }, {
    "depth": 4,
    "slug": "通过-playwright-test-for-vscode-插件运行",
    "text": "通过 Playwright Test for VSCode 插件运行"
  }, {
    "depth": 4,
    "slug": "测试文件运行",
    "text": "测试文件运行"
  }, {
    "depth": 3,
    "slug": "命令行运行",
    "text": "命令行运行"
  }, {
    "depth": 2,
    "slug": "调试-debug",
    "text": "调试 Debug"
  }, {
    "depth": 3,
    "slug": "命令行调试",
    "text": "命令行调试"
  }, {
    "depth": 3,
    "slug": "vs-code-调试",
    "text": "VS code 调试"
  }, {
    "depth": 4,
    "slug": "通过-playwright-test-for-vscode-插件调试",
    "text": "通过 Playwright Test for VSCode 插件调试"
  }, {
    "depth": 4,
    "slug": "测试文件运行-1",
    "text": "测试文件运行"
  }, {
    "depth": 2,
    "slug": "测试报告-test-report",
    "text": "测试报告 Test report"
  }];
}
function _createMdxContent(props) {
  const _components = {
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
    children: [createVNode(_components.p, {
      children: "下面的信息是对 playwright 自动化测试框架的新手入门介绍。如果你想要学习更多关于 playwright 自动化测试框架的信息，请参阅它的文档。运行测试：打开测试界面，选择”运行测试”。下面会显示一个非常简单的测试画面。你可以选择任何一个测试项目。你可以通过键盘或者鼠标来调试测试。查看测试报告：在测试结束后，单击”查看测试报告”按钮。测试报告会显示在测试结束后的浏览器中。"
    }), "\n", "\n", createVNode(_components.h2, {
      id: "安装-install",
      children: "安装 Install"
    }), "\n", createVNode(_components.h3, {
      id: "非-vs-code-编辑器安装",
      children: "非 VS Code 编辑器安装"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "新建项目文件"
      }), "\n", createVNode(_components.li, {
        children: "使用命令行工具进入新建的项目文件夹"
      }), "\n", createVNode(_components.li, {
        children: ["输入命令进行项目初始化\n", createVNode(_components.code, {
          children: "npm init playwright@latest"
        })]
      }), "\n", createVNode(_components.li, {
        children: "按照提示进行项目初始化"
      }), "\n", createVNode(_components.li, {
        children: "安装完成后的目录结构为"
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
            children: "playwright.config.ts //playwright.config.ts的配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "package.json //node项目的配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "package-lock.json //node项目的配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "tests/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "example.spec.ts //测试demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "tests-examples/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "demo-todo-app.spec.ts //todo app的测试demo"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "vs-code-编辑器安装",
      children: "VS Code 编辑器安装"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "新建项目文件"
      }), "\n", createVNode(_components.li, {
        children: "使用 VS Code 编辑器打开新建的项目文件夹"
      }), "\n", createVNode(_components.li, {
        children: "在 VS Code 编辑器安装 Playwright Test for VSCode 插件"
      }), "\n", createVNode(_components.li, {
        children: "然后在 VS Code 编辑器的命令面板上输入"
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
            children: "Install Playwright"
          })
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "按照提示进行项目初始化"
      }), "\n", createVNode(_components.li, {
        children: "安装完成后的目录结构为"
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
            children: "playwright.config.ts //playwright.config.ts的配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "package.json //node项目的配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "package-lock.json //node项目的配置文件"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "tests/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "example.spec.ts //测试demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "tests-examples/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "demo-todo-app.spec.ts //todo app的测试demo"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "运行测试-run-test",
      children: "运行测试 Run test"
    }), "\n", createVNode(_components.h3, {
      id: "vs-code-运行",
      children: "VS Code 运行"
    }), "\n", createVNode(_components.h4, {
      id: "通过-playwright-test-for-vscode-插件运行",
      children: "通过 Playwright Test for VSCode 插件运行"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "通过 VS Code 打开项目文件后"
      }), "\n", createVNode(_components.li, {
        children: "点击 VS Code 左侧的 Testing(漏斗) 按钮"
      }), "\n", createVNode(_components.li, {
        children: "Testing 页面下会展示所有的 demo 测试用例"
      }), "\n", createVNode(_components.li, {
        children: ["点击绿色三角形就可以运行 demo 测试用例了\n", createVNode(_components.code, {
          children: "可以点击是否选中'show browser'来控制是否无头浏览器运行用例和打开浏览器运行用例"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "测试文件运行",
      children: "测试文件运行"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "通过 VS Code 打开项目文件后"
      }), "\n", createVNode(_components.li, {
        children: "点击打开 demo 测试文件"
      }), "\n", createVNode(_components.li, {
        children: "点击测试块旁边的绿色三角形"
      }), "\n", createVNode(_components.li, {
        children: "就可以运行测试来运行单个测试"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "命令行运行",
      children: "命令行运行"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "运行所有测试"
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
                children: "npx playwright test"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "运行单个测试文件"
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
                children: "npx playwright test landing-page.spec.ts"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "运行一组测试文件"
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
                children: "npx playwright test tests/todo-page/ tests/landing-page/"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["运行文件名中有", createVNode(_components.code, {
            children: "landing"
          }), "或", createVNode(_components.code, {
            children: "login"
          }), "的文件"]
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
                children: "npx playwright test landing login"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "运行带有标题的测试"
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
                children: "npx playwright test -g \"add a todo item\""
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在引导模式 (打开浏览器) 下运行测试"
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
                children: "npx playwright test landing-page.spec.ts --headed"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在特定项目上运行测试"
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
                children: "npx playwright test landing-page.ts --project=chromium"
              })
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "调试-debug",
      children: "调试 Debug"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "由于 Playwright 在 Node.js 中运行，您可以使用您选择的调试器对其进行调试，例如使用"
      }), "console.log", createVNode(_components.code, {
        children: "或在您的 IDE 内部或直接在 VS 代码中使用[VS 代码扩展](https://playwright.dev/docs/getting-started-vscode)。Playwright 带有[Playwright Inspector](https://playwright.dev/docs/debug#playwright-inspector)，它允许您单步执行 Playwright API 调用，查看他们的调试日志并探索[选择器](https://playwright.dev/docs/selectors)。"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "命令行调试",
      children: "命令行调试"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "调试所有测试："
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
                children: "npx playwright test --debug"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "调试一个测试文件："
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
                children: "npx playwright test example.spec.ts --debug"
              })
            })
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["从", createVNode(_components.code, {
            children: "test(.."
          }), "定义的行号调试测试："]
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
                children: "npx playwright test example.spec.ts:42 --debug"
              })
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "vs-code-调试",
      children: "VS code 调试"
    }), "\n", createVNode(_components.h4, {
      id: "通过-playwright-test-for-vscode-插件调试",
      children: "通过 Playwright Test for VSCode 插件调试"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "通过 VS Code 打开项目文件后"
      }), "\n", createVNode(_components.li, {
        children: "点击 VS Code 左侧的 Testing(漏斗) 按钮"
      }), "\n", createVNode(_components.li, {
        children: "Testing 页面下会展示所有的 demo 测试用例"
      }), "\n", createVNode(_components.li, {
        children: ["点击第二个运行按钮就可以调试 demo 测试用例了\n", createVNode(_components.code, {
          children: "可以之前在想要调试的测试脚本文件中提前打一些断点"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "测试文件运行-1",
      children: "测试文件运行"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "通过 VS Code 打开项目文件后"
      }), "\n", createVNode(_components.li, {
        children: "点击打开 demo 测试文件"
      }), "\n", createVNode(_components.li, {
        children: "选中测试代码块，然后右键选择 debug test 就可以调试测试用例了"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "测试报告-test-report",
      children: "测试报告 Test report"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "命令行输入如下命令，就可以打开 html 版本的测试报告"
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
            children: "npx playwright show-report"
          })
        })
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

const url = "src/blog/zh-cn/Others/playwright-get-started.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/playwright-get-started.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/playwright-get-started.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
