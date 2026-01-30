import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Postman 接口自动化测试教程：进阶用法 - 集成 CI/CD 和 Github action，接入 allure 测试报告",
  "description": "Postman 接口自动化测试的进阶应用，专注于 CI/CD 和 GitHub Actions 的集成，以及 Allure 测试报告的接入。学习如何将 Postman 测试无缝整合到 CI/CD 流程中，通过 GitHub Actions 实现自动化测试。此外，了解如何集成 Allure 测试报告框架，生成详尽的测试结果报告",
  "date": "2023-11-22T09:37:00.000Z",
  "author": "nao.deng",
  "tags": ["Postman", "API Testing", "CI/CD", "Allure"],
  "categories": ["接口自动化测试", "Postman"],
  "series": ["Postman 接口自动化测试教程"],
  "cover": "./postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "进阶用法",
    "text": "进阶用法"
  }, {
    "depth": 3,
    "slug": "输出-html-测试报告",
    "text": "输出 html 测试报告"
  }, {
    "depth": 4,
    "slug": "安装-newman-reporter-htmlextra-依赖包",
    "text": "安装 newman-reporter-htmlextra 依赖包"
  }, {
    "depth": 4,
    "slug": "调整-packagejson",
    "text": "调整 package.json"
  }, {
    "depth": 4,
    "slug": "运行测试用例输出-html-报告",
    "text": "运行测试用例输出 html 报告"
  }, {
    "depth": 4,
    "slug": "输出多种格式的测试报告",
    "text": "输出多种格式的测试报告"
  }, {
    "depth": 3,
    "slug": "cicd-持续集成",
    "text": "CI/CD 持续集成"
  }, {
    "depth": 4,
    "slug": "接入-github-action",
    "text": "接入 github action"
  }, {
    "depth": 3,
    "slug": "集成-allure-测试报告",
    "text": "集成 allure 测试报告"
  }, {
    "depth": 4,
    "slug": "安装-allure-测试报告依赖",
    "text": "安装 allure 测试报告依赖"
  }, {
    "depth": 4,
    "slug": "调整-packagejson-中输出-allure-测试报告的脚本",
    "text": "调整 package.json 中输出 allure 测试报告的脚本"
  }, {
    "depth": 4,
    "slug": "调整-postman-测试用例",
    "text": "调整 Postman 测试用例"
  }, {
    "depth": 4,
    "slug": "运行测试用例输出-allure-报告",
    "text": "运行测试用例输出 allure 报告"
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
      children: "以下会介绍 Postman 和 Newman 的一些进阶用法，包括测试数据、测试脚本、测试报告和测试报告集成等。\n也会介绍如何将 Postman 和 Newman 集成到 CI/CD 流程中，以实现自动化测试。"
    }), "\n", createVNode(_components.h3, {
      id: "输出-html-测试报告",
      children: "输出 html 测试报告"
    }), "\n", createVNode(_components.p, {
      children: ["demo 会以集成", createVNode(_components.a, {
        href: "https://github.com/DannyDainton/newman-reporter-htmlextra",
        children: "newman-reporter-htmlextra"
      }), "为例，介绍如何输出 html 测试报告。"]
    }), "\n", createVNode(_components.h4, {
      id: "安装-newman-reporter-htmlextra-依赖包",
      children: "安装 newman-reporter-htmlextra 依赖包"
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " newman-reporter-htmlextra"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --save-dev"
          })]
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "注意：目前 newman 最新 V6 版本在 html 测试报告的一些包兼容性上有问题，所以这里使用 5.1.2 版本"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "调整-packagejson",
      children: "调整 package.json"
    }), "\n", createVNode(_components.p, {
      children: "在 package.json 文件中，更新测试测试脚本，用于运行测试用例并输出 html 测试报告："
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
            children: "\"test\": \"newman run Testcase/demo.postman_collection.json -e Env/DemoEnv.postman_environment.json -r htmlextra --reporter-htmlextra-export ./Report/Postman-newman-demo-api-testing-report.html\""
          })
        })
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "指定输出 html 测试报告的路径为 Report/Postman-newman-demo-api-testing-report.html"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "运行测试用例输出-html-报告",
      children: "运行测试用例输出 html 报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行测试用例"
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
            children: " npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " test"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "检查报告文件"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112211zs7xCl.png",
        alt: "2023112211zs7xCl"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "浏览器打开报告文件"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112211IHIUzV.png",
        alt: "2023112211IHIUzV"
      })
    }), "\n", createVNode(_components.h4, {
      id: "输出多种格式的测试报告",
      children: "输出多种格式的测试报告"
    }), "\n", createVNode(_components.p, {
      children: "前面的配置是输出 html 格式的测试报告，如果想要输出多种格式的测试报告，如命令行 cli 的报告，可以在 package.json 文件中添加以下脚本："
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
            children: "\"test\": \"newman run Testcase/demo.postman_collection.json -e Env/DemoEnv.postman_environment.json -r cli,htmlextra --reporter-htmlextra-export ./Report/Postman-newman-demo-api-testing-report.html\""
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "再次运行测试用例，可以看到在 Report 文件夹下，除了 html 格式的测试报告，还有 cli 格式的测试报告。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/202311221109B7Fg.png",
        alt: "202311221109B7Fg"
      })
    }), "\n", createVNode(_components.h3, {
      id: "cicd-持续集成",
      children: "CI/CD 持续集成"
    }), "\n", createVNode(_components.p, {
      children: "将接口自动化测试的代码集成到 CI/CD 流程中，可以实现自动化测试，提高测试效率。"
    }), "\n", createVNode(_components.h4, {
      id: "接入-github-action",
      children: "接入 github action"
    }), "\n", createVNode(_components.p, {
      children: "以 github action 为例，其他 CI 工具类似"
    }), "\n", createVNode(_components.p, {
      children: ["可参考 demo：", createVNode(_components.a, {
        href: "https://github.com/Automation-Test-Starter/Postman-Newman-demo",
        children: "https://github.com/Automation-Test-Starter/Postman-Newman-demo"
      })]
    }), "\n", createVNode(_components.p, {
      children: "创建.github/workflows 目录：在你的 GitHub 仓库中，创建一个名为 .github/workflows 的目录。这将是存放 GitHub Actions 工作流程文件的地方。"
    }), "\n", createVNode(_components.p, {
      children: "创建工作流程文件：在.github/workflows 目录中创建一个 YAML 格式的工作流程文件，例如 postman.yml。"
    }), "\n", createVNode(_components.p, {
      children: "编辑 postman.yml 文件：将以下内容复制到文件中"
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
            children: "name: RUN Postman API Test CI"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "on:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  push:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    branches: [ \"main\" ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pull_request:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    branches: [ \"main\" ]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "jobs:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  RUN-Postman-API-Test:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    runs-on: ubuntu-latest"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    strategy:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      matrix:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        node-version: [ 18.x]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    steps:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - uses: actions/checkout@v3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Use Node.js ${{ matrix.node-version }}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        uses: actions/setup-node@v3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        with:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          node-version: ${{ matrix.node-version }}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          cache: 'npm'"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Installation of related packages"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        run: npm ci"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: RUN SuperTest API Testing"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        run: npm test"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Archive Postman test report"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        uses: actions/upload-artifact@v3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        with:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          name: Postman-test-report"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          path: Report"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Upload Postman report to GitHub"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        uses: actions/upload-artifact@v3"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        with:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          name: Postman-test-report"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          path: Report"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "提交代码：将 postman.yml 文件添加到仓库中并提交。"
      }), "\n", createVNode(_components.li, {
        children: "查看测试报告：在 GitHub 中，导航到你的仓库。单击上方的 Actions 选项卡，然后单击左侧的 RUN-Postman-API-Test 工作流。你应该会看到工作流正在运行，等待执行完成，就可以查看结果。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112213AFVWZe.png",
        alt: "2023112213AFVWZe"
      })
    }), "\n", createVNode(_components.h3, {
      id: "集成-allure-测试报告",
      children: "集成 allure 测试报告"
    }), "\n", createVNode(_components.p, {
      children: "allure 是一个轻量级的、灵活的、多语言支持的测试报告工具，可以生成各种各样的测试报告，包括饼图、柱状图、曲线图等，可以方便地查看测试结果。"
    }), "\n", createVNode(_components.h4, {
      id: "安装-allure-测试报告依赖",
      children: "安装 allure 测试报告依赖"
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
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " newman-reporter-allure"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --save-dev"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "调整-packagejson-中输出-allure-测试报告的脚本",
      children: "调整 package.json 中输出 allure 测试报告的脚本"
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
            children: "\"test\": \"newman run Testcase/demo.postman_collection.json -e Env/DemoEnv.postman_environment.json -r cli,allure --reporter-allure-export ./allure-results\""
          })
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "调整-postman-测试用例",
      children: "调整 Postman 测试用例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "调整 get-demo 的 Tests 脚本，添加以下脚本，用于生成 allure 测试报告："
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
            children: "// @allure.label.suite=postman-new-api-testing-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.story=\"Verify-the-get-api-return-correct-data\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.owner=\"naodeng\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.tag=\"GETAPI\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.status should be 200\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.response.to.have.status(200);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.body should be correct\", function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  var data = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.id).to.equal(1);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.title).to.contains('provident');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "调整 post-demo 的 Tests 脚本，添加以下脚本，用于生成 allure 测试报告："
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
            children: "// @allure.label.suite=postman-new-api-testing-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.story=\"Verify-the-post-api-return-correct-data\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.owner=\"naodeng\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// @allure.label.tag=\"POSTAPI\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.status should be 201\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.response.to.have.status(201);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pm.test(\"res.body should be correct\", function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  var data = pm.response.json();"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.id).to.equal(101);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  pm.expect(data.title).to.equal('foo');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "保存更改后的 postman 测试用例，重新导出测试用例文件并替换原来的测试用例文件。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "运行测试用例输出-allure-报告",
      children: "运行测试用例输出 allure 报告"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行测试用例"
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
            children: " npm"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " run"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " test"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "会在项目文件夹下生成 allure-results 文件夹，里面包含了测试用例的执行结果。"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112213YUMTwz.png",
        alt: "2023112213YUMTwz"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "预览 allure 测试报告"
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
            children: "allure"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " serve"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2023112214Aa77VG.png",
        alt: "2023112214Aa77VG"
      })
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
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/DannyDainton/newman-reporter-htmlextra",
          children: "newman-reporter-htmlextra"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.npmjs.com/package/newman-reporter-allure",
          children: "newman-reporter-allure"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://docs.github.com/cn/actions",
          children: "github action 官方文档"
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

const url = "src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/postman-tutorial-advance-usage-integration-html-report-and-allure-report-integration-github-action.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
