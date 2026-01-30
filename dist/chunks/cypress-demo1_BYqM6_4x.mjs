import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*more*/
/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Cypress UI 自动化测试框架学习（1）- 上手",
  "description": "文章介绍 Cypress UI 自动化测试框架学习（1）- 上手，Cypress 自动化测试框架的新手入门介绍",
  "date": "2022-05-05T00:00:00.000Z",
  "author": "nao.deng",
  "cover": "./cypress-demo1-cover.png",
  "tags": ["Cypress", "UI Testing"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "getting-started",
    "text": "Getting Started"
  }, {
    "depth": 3,
    "slug": "operating-system",
    "text": "Operating System"
  }, {
    "depth": 3,
    "slug": "before-started",
    "text": "Before Started"
  }, {
    "depth": 3,
    "slug": "started-and-run",
    "text": "Started and Run"
  }, {
    "depth": 3,
    "slug": "started-screenshot",
    "text": "Started Screenshot"
  }, {
    "depth": 2,
    "slug": "try-first-testscript",
    "text": "Try First Testscript"
  }, {
    "depth": 3,
    "slug": "testcase",
    "text": "Testcase"
  }, {
    "depth": 3,
    "slug": "testscript",
    "text": "Testscript"
  }, {
    "depth": 3,
    "slug": "run-screenshot",
    "text": "Run Screenshot"
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
      children: "下面的信息是对 Cypress 自动化测试框架的新手入门介绍。如果你想要学习更多关于 playwright 自动化测试框架的信息，请参阅它的文档。运行测试：打开测试界面，选择”运行测试”。下面会显示一个非常简单的测试画面。你可以选择任何一个测试项目。你可以通过键盘或者鼠标来调试测试。查看测试报告：在测试结束后，单击”查看测试报告”按钮。测试报告会显示在测试结束后的浏览器中。"
    }), "\n", "\n", createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "基于 JavaScript 的前端自动化测试工具，可以对浏览器中运行的任何内容进行快速、简单、可靠的测试"
    }), "\n", createVNode(_components.p, {
      children: "Cypress 是自集成的，提供了一套完整的端到端测试，无须借助其他外部工具，安装后即可快速地创建、编写、运行测试用例，且对每一步操作都支持回看"
    }), "\n", createVNode(_components.p, {
      children: "不同于其他只能测试 UI 层的前端测试工具，Cypress 允许编写所有类型的测试，覆盖了测试金字塔模型的所有测试类型【界面测试，集成测试，单元测试】"
    }), "\n", createVNode(_components.p, {
      children: ["Cypress 官网：", createVNode(_components.a, {
        href: "https://www.cypress.io/",
        children: "https://www.cypress.io/"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "下面以 MacOS 来进行介绍，其他系统可参考官网信息"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "operating-system",
      children: "Operating System"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "macOS 10.9 and above (64-bit only)"
      }), "\n", createVNode(_components.li, {
        children: "Node.js 12 or 14 and above"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "before-started",
      children: "Before Started"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "已安装好 node.js 和 npm"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqvntxlww1j30k406waau.jpg",
        alt: " "
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "已安装好 vs code 或者其他代码编辑器"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "started-and-run",
      children: "Started and Run"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Step1：通过 npm 新建项目"
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
            children: "# 新建项目文件夹"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ mkdir cypress-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# 进入项目文件夹"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ cd cypress-demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# npm项目环境准备"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm init"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Step2：安装 cypress"
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
            children: "# 项目安装cypress包"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm install cypress --save-dev"
          })
        })]
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Step3：运行 cypress 程序"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "若提示：npm ERR! missing script: cypress:open，可在项目根目录 package.json 文件的 scripts 下新增”cypress:open”: “cypress open”，保存后再次运行命令即可"
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
            children: "# 启动demo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm run cypress:open"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "started-screenshot",
      children: "Started Screenshot"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["运行截图\n", createVNode(_components.img, {
            src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqvsqw8ytcj323h0u0qp2.jpg",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["demo 用例执行截图\n", createVNode(_components.img, {
            src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqvsshqeflj31gl0u0nbf.jpg",
            alt: " "
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "try-first-testscript",
      children: "Try First Testscript"
    }), "\n", createVNode(_components.h3, {
      id: "testcase",
      children: "Testcase"
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
            children: "1.访问光谷社区主页http://www.guanggoo.com/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2.验证是否正确跳转到光谷社区页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "3.验证网页标题是否正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "4.点击登录按钮，验证正确跳转到登录页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "5.在登录页面输入用户名和输入密码"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "6.点击登录按钮，验证登录成功"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "testscript",
      children: "Testscript"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在项目 cypress/integration 下新建 demo 文件夹"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在 demo 文件夹下新建 demo-guanggoo.js"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "demo-guanggoo.js 编写测试脚本"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "脚本中账号密码需换成自己的账号密码"
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
            children: "describe('first testcase for cypress',function(){"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it('visit guanggoo homepage and login for guanggoo:',function(){"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        // 访问并登录光谷社区"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.visit('http://www.guanggoo.com/') //访问url"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.url().should('include','www.guanggoo.com')     //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.title().should('contain','光谷社区')  //验证页面 title 是否正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get(':nth-child(1) > .nav-collapse').click()   //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.url().should('include','login')  //验证正确跳转到登录页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#email') //根据 css 定位用户名输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        .type('dengnao.123@163.com')        //输入用户名"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#password') //根据 css 定位密码输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        .type('xxxxxxx')        //输入密码"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.btn-success').click()   //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "run-screenshot",
      children: "Run Screenshot"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行 cypress 程序"
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
            children: "# 启动"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "$ npm run cypress:open"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqvtcq43csj323f0u0qn9.jpg",
        alt: " "
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "页面上选择点击运行 demo-guanggoo.js 即可"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://tva1.sinaimg.cn/large/008i3skNgy1gqvtjib8jdj31g80u0e81.jpg",
        alt: " "
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行通过无报错，代表用例编写成功"
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

const url = "src/blog/zh-cn/Others/cypress-demo1.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
