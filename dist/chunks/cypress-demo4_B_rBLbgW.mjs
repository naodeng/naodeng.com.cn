import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*more*/
/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Cypress UI 自动化测试框架学习（4）- 数据驱动，方法封装参数化和测试框架",
  "description": "文章介绍如何去使用 cypress 的数据驱动方法封装参数化和测试框架",
  "date": "2022-05-11T00:00:00.000Z",
  "author": "nao.deng",
  "cover": "./cypress-demo4-cover.png",
  "tags": ["Cypress", "UI Testing"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "测试数据驱动",
    "text": "测试数据驱动"
  }, {
    "depth": 3,
    "slug": "js-格式测试数据驱动",
    "text": "js 格式测试数据驱动"
  }, {
    "depth": 4,
    "slug": "简介",
    "text": "简介"
  }, {
    "depth": 4,
    "slug": "使用方法",
    "text": "使用方法"
  }, {
    "depth": 5,
    "slug": "新建测试数据-js-文件",
    "text": "新建测试数据 js 文件"
  }, {
    "depth": 5,
    "slug": "编写测试用例",
    "text": "编写测试用例"
  }, {
    "depth": 5,
    "slug": "运行测试用例",
    "text": "运行测试用例"
  }, {
    "depth": 3,
    "slug": "fixture-测试数据驱动介绍",
    "text": "fixture 测试数据驱动介绍"
  }, {
    "depth": 4,
    "slug": "简介-1",
    "text": "简介"
  }, {
    "depth": 4,
    "slug": "使用方法-1",
    "text": "使用方法"
  }, {
    "depth": 5,
    "slug": "新建测试数据-json-文件",
    "text": "新建测试数据 json 文件"
  }, {
    "depth": 5,
    "slug": "编写测试用例-1",
    "text": "编写测试用例"
  }, {
    "depth": 5,
    "slug": "运行测试用例-1",
    "text": "运行测试用例"
  }, {
    "depth": 2,
    "slug": "方法封装参数化",
    "text": "方法封装参数化"
  }, {
    "depth": 3,
    "slug": "简介-2",
    "text": "简介"
  }, {
    "depth": 3,
    "slug": "使用介绍",
    "text": "使用介绍"
  }, {
    "depth": 4,
    "slug": "登录参数化登录封装",
    "text": "登录参数化登录封装"
  }, {
    "depth": 5,
    "slug": "代码编写",
    "text": "代码编写"
  }, {
    "depth": 4,
    "slug": "代码使用",
    "text": "代码使用"
  }, {
    "depth": 4,
    "slug": "进入首页方法封装",
    "text": "进入首页方法封装"
  }, {
    "depth": 5,
    "slug": "代码编写-1",
    "text": "代码编写"
  }, {
    "depth": 4,
    "slug": "代码使用-1",
    "text": "代码使用"
  }, {
    "depth": 2,
    "slug": "测试框架介绍",
    "text": "测试框架介绍"
  }, {
    "depth": 3,
    "slug": "简介-3",
    "text": "简介"
  }, {
    "depth": 3,
    "slug": "语法介绍",
    "text": "语法介绍"
  }, {
    "depth": 4,
    "slug": "describe",
    "text": "describe()"
  }, {
    "depth": 4,
    "slug": "context",
    "text": "context()"
  }, {
    "depth": 4,
    "slug": "it",
    "text": "it()"
  }, {
    "depth": 4,
    "slug": "before",
    "text": "before()"
  }, {
    "depth": 4,
    "slug": "beforeeach",
    "text": "beforeEach()"
  }, {
    "depth": 4,
    "slug": "aftereach",
    "text": "afterEach()"
  }, {
    "depth": 4,
    "slug": "after",
    "text": "after()"
  }, {
    "depth": 4,
    "slug": "only",
    "text": ".only()"
  }, {
    "depth": 4,
    "slug": "skip",
    "text": ".skip()"
  }, {
    "depth": 3,
    "slug": "参考网址",
    "text": "参考网址"
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
      children: "下面的信息是自动化测试框架学习第四篇数据驱动方法封装参数化和测试框架的介绍。\n在自动化测试框架学习中，有很多方法可以用来驱动测试框架。例如，数据驱动方法封装参数化和测试框架。这两个方法都可以将测试框架的数据处理和预设环境等现有模型结合起来。这样就可以方便地开发、测试和运行新的测试框架。"
    }), "\n", "\n", createVNode(_components.h2, {
      id: "测试数据驱动",
      children: "测试数据驱动"
    }), "\n", createVNode(_components.h3, {
      id: "js-格式测试数据驱动",
      children: "js 格式测试数据驱动"
    }), "\n", createVNode(_components.h4, {
      id: "简介",
      children: "简介"
    }), "\n", createVNode(_components.p, {
      children: "数据以 js 格式存储，使用 js 的 import 方法导入使用"
    }), "\n", createVNode(_components.h4, {
      id: "使用方法",
      children: "使用方法"
    }), "\n", createVNode(_components.h5, {
      id: "新建测试数据-js-文件",
      children: "新建测试数据 js 文件"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例：在项目的 cypress/integration 文件夹下新建 testData 目录，然后在该目录下创建一个 js 文件，示例文件名为：testLogin.data.js"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "testLogin.data.js 示例代码如下："
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "export const testLoginUserEmail = ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        summary: \"正确邮箱账号登录验证\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        username:\"dengnao.123@163.com\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        password:\"xxxx\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "export const testLoginUserId = ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        summary: \"正确id账号登录验证\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        username:\"waitnoww\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        password:\"xxxx\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "export const testLoginUserMobilephone = ["
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        summary: \"正确手机号账号登录验证\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        username:\"18888139031\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        password:\"xxxx\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "]"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "编写测试用例",
      children: "编写测试用例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在项目 cypress/integration 文件夹下新建 js 测试用例文件，示例文件名为：testLogin_guanggoo_data_by_js.js"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码如下："
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "import {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "testLoginUserEmail,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "testLoginUserId,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "testLoginUserMobilephone"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "} from \"./testData/testLogin.data\";"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// 测试用例"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "describe(\"光谷社区登录验证\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    // 执行用例执行用例之前先进入首页"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    beforeEach(function () {"
          })
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
            children: "        cy.url().should('include', 'www.guanggoo.com') //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.title().should('contain', '光谷社区') //验证页面 title 是否正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    //正确邮箱账号登录"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it(testLoginUserEmail[0].summary, function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.url().should('include', 'login') //验证正确跳转到登录页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#email') //根据 css 定位用户名输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(testLoginUserEmail[0].username) //输入邮箱用户名"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#password') //根据 css 定位密码输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(testLoginUserEmail[0].password) //输入密码"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.btn-success').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.ui-header > .username')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }),"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    //正确ID账号登录"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it(testLoginUserId[0].summary, function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.url().should('include', 'login') //验证正确跳转到登录页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#email') //根据 css 定位用户名输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(testLoginUserId[0].username) //输入ID用户名"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#password') //根据 css 定位密码输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(testLoginUserId[0].password) //输入密码"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.btn-success').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.ui-header > .username')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }),"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    //正确手机账号登录"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it(testLoginUserMobilephone[0].summary, function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.url().should('include', 'login') //验证正确跳转到登录页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#email') //根据 css 定位用户名输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(testLoginUserMobilephone[0].username) //输入手机号用户名"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#password') //根据 css 定位密码输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(testLoginUserMobilephone[0].password) //输入密码"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.btn-success').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.ui-header > .username')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        // 执行用例执行用例之后清除登录信息"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        afterEach(function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            // 清除cookies"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            cy.clearCookies()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "运行测试用例",
      children: "运行测试用例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行脚本：npm run cypress:open"
      }), "\n", createVNode(_components.li, {
        children: "点击运行 testLogin_guanggoo_data_by_js.js 用例"
      }), "\n", createVNode(_components.li, {
        children: "查看运行结果 (测试数据能正常获取到)"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "fixture-测试数据驱动介绍",
      children: "fixture 测试数据驱动介绍"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["fixture 数据驱动方式是 cypress 框架推荐的方法，支持的格式也很多，如.json/txt/html/jpg/gif/mp3/zip 等，具体可参考：", createVNode(_components.a, {
          href: "https://docs.cypress.io/api/commands/fixture",
          children: "https://docs.cypress.io/api/commands/fixture"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "简介-1",
      children: "简介"
    }), "\n", createVNode(_components.p, {
      children: "Cypress 使用 cypress/fixture 目录存放 json 文件数据，cy.fixture() 加载测试数据，如果不指定文件路径，默认从 cypress/fixtures 文件下去查找，也可以自己设置文件路径"
    }), "\n", createVNode(_components.h4, {
      id: "使用方法-1",
      children: "使用方法"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "以 json 格式读取举例介绍"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "新建测试数据-json-文件",
      children: "新建测试数据 json 文件"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例：在项目的 cypress/fixtures 文件夹下新建一个 json 文件，示例文件名为：testLoginData.json"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "testLoginData.json 示例代码如下（账号密码记得换成自己的）："
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"testLoginUserEmail\": {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"summary\": \"正确邮箱账号登录验证\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"username\": \"dengnao.123@163.com\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"password\": \"xxxx\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "},"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"testLoginUserId\": {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"summary\": \"正确 id 账号登录验证\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"username\": \"waitnoww\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"password\": \"xxxx\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "},"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"testLoginUserMobilephone\": {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"summary\": \"正确手机号账号登录验证\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"username\": \"18888889031\","
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "\"password\": \"xxxx\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "编写测试用例-1",
      children: "编写测试用例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在项目 cypress/integration 文件夹下新建 js 测试用例文件，示例文件名为：testLogin_guanggoo_data_by_fixture.js"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码如下："
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
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "describe(\"光谷社区登录验证\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    // 执行用例执行用例之前先进入首页"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    beforeEach(function () {"
          })
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
            children: "        cy.url().should('include', 'www.guanggoo.com') //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.title().should('contain', '光谷社区') //验证页面 title 是否正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        // 获取测试数据"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.fixture('testLoginData.json').as('loginData')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    //正确邮箱账号登录"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it(\"正确邮箱账号登录验证\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.url().should('include', 'login') //验证正确跳转到登录页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#email') //根据 css 定位用户名输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(this.loginData.testLoginUserEmail.username) //输入邮箱用户名"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#password') //根据 css 定位密码输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(this.loginData.testLoginUserEmail.password) //输入密码"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.btn-success').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.ui-header > .username')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }),"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    //正确ID账号登录"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it(\"正确id账号登录验证\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.url().should('include', 'login') //验证正确跳转到登录页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#email') //根据 css 定位用户名输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(this.loginData.testLoginUserId.username) //输入ID用户名"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#password') //根据 css 定位密码输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(this.loginData.testLoginUserId.password) //输入密码"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.btn-success').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.ui-header > .username')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    }),"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    //正确手机账号登录"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it(\"正确手机号账号登录验证\", function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.url().should('include', 'login') //验证正确跳转到登录页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#email') //根据 css 定位用户名输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(this.loginData.testLoginUserMobilephone.username) //输入手机号用户名"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('#password') //根据 css 定位密码输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .type(this.loginData.testLoginUserMobilephone.password) //输入密码"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.btn-success').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.get('.ui-header > .username')"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        // 执行用例执行用例之后清除登录信息"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        afterEach(function () {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            // 清除cookies"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "            cy.clearCookies()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        })"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "运行测试用例-1",
      children: "运行测试用例"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行脚本：npm run cypress:open"
      }), "\n", createVNode(_components.li, {
        children: "点击运行 testLogin_guanggoo_data_by_fixture.js 用例"
      }), "\n", createVNode(_components.li, {
        children: "查看运行结果 (测试数据能正常获取到)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "方法封装参数化",
      children: "方法封装参数化"
    }), "\n", createVNode(_components.h3, {
      id: "简介-2",
      children: "简介"
    }), "\n", createVNode(_components.p, {
      children: "cypress 框架提供了一个 commands.js 可以自定义各种命令，用来封装各种通用方法，参数化方法，常用脚本等；"
    }), "\n", createVNode(_components.p, {
      children: "将常用的通用方法如登录方法在 cypress/support/commands.js 中编写完成之后，与 cy.get()/cy.visit() 一样，可以直接用 cy.xxx() 形式调用，非常方便，减少维护成本"
    }), "\n", createVNode(_components.h3, {
      id: "使用介绍",
      children: "使用介绍"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "示例会介绍常用的参数化登录命令和进入首页命令"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "登录参数化登录封装",
      children: "登录参数化登录封装"
    }), "\n", createVNode(_components.h5, {
      id: "代码编写",
      children: "代码编写"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "打开 cypress/support/commands.js 文件"
      }), "\n", createVNode(_components.li, {
        children: "输入如下代码："
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
            children: "Cypress.Commands.add(\"login\",(username,password) => {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.clearCookies() //清除 cookies,保证页面为未登录状态"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.visit('http://www.guanggoo.com/') //访问 url"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.url().should('include', 'www.guanggoo.com') //验证目标 url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.title().should('contain', '光谷社区') //验证页面 title 是否正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.url().should('include', 'login') //验证正确跳转到登录页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.get('#email') //根据 css 定位用户名输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: ".type(username) //输入参数化的用户名"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.get('#password') //根据 css 定位密码输入框"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: ".type(password) //输入参数化的密码"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.get('.btn-success').click() //点击登录按钮"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.get(':nth-child(2) > .nav-collapse').should('contain', '设置') //验证登录成功回到首页，设置按钮展示正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "代码使用",
      children: "代码使用"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在测试用例中可直接进行方法调用 cy.login(username,password) 换成自己的账号密码进行登录操作了"
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
            children: "cy.login(\"dengnao.123@163.com\",\"xxxx\")"
          })
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "进入首页方法封装",
      children: "进入首页方法封装"
    }), "\n", createVNode(_components.h5, {
      id: "代码编写-1",
      children: "代码编写"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "打开 cypress/support/commands.js 文件"
      }), "\n", createVNode(_components.li, {
        children: "输入如下代码："
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
            children: "Cypress.Commands.add(\"initHomePage\",() => {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.visit('http://www.guanggoo.com/') //访问 url"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.url().should('include', 'www.guanggoo.com') //验证目标 url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.title().should('contain', '光谷社区') //验证页面 title 是否正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "代码使用-1",
      children: "代码使用"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在测试用例中可直接进行方法调用 cy.initHomePage() 即可进入首页"
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
            children: "cy.initHomePage()"
          })
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "测试框架介绍",
      children: "测试框架介绍"
    }), "\n", createVNode(_components.h3, {
      id: "简介-3",
      children: "简介"
    }), "\n", createVNode(_components.p, {
      children: "Cypress 框架采用了 Mocha 框架的语法，故 Mocha 框架的测试语法可在 cypress 上直接使用"
    }), "\n", createVNode(_components.h3, {
      id: "语法介绍",
      children: "语法介绍"
    }), "\n", createVNode(_components.h4, {
      id: "describe",
      children: "describe()"
    }), "\n", createVNode(_components.p, {
      children: "定义测试套件，里面还可以定义多个 context 或 it"
    }), "\n", createVNode(_components.h4, {
      id: "context",
      children: "context()"
    }), "\n", createVNode(_components.p, {
      children: "定义测试套件，是 describe() 的别名，可以替代 describe"
    }), "\n", createVNode(_components.h4, {
      id: "it",
      children: "it()"
    }), "\n", createVNode(_components.p, {
      children: "定义测试用例"
    }), "\n", createVNode(_components.h4, {
      id: "before",
      children: "before()"
    }), "\n", createVNode(_components.p, {
      children: "在一个测试套件中的所有测试用例之前执行，设置一些运行 testcase 的前置条件"
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
            children: "// runs once before the first test in this block"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "beforeeach",
      children: "beforeEach()"
    }), "\n", createVNode(_components.p, {
      children: "在每个测试用例之前执行"
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
            children: "        cy.url().should('include', 'www.guanggoo.com') //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        cy.title().should('contain', '光谷社区') //验证页面 title 是否正确"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    })"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "aftereach",
      children: "afterEach()"
    }), "\n", createVNode(_components.p, {
      children: "在每个测试用例之后执行，可以执行清除数据等操作"
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
            children: "// 清除 cookies"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "cy.clearCookies()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "})"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "after",
      children: "after()"
    }), "\n", createVNode(_components.p, {
      children: "在一个测试套件中的所有测试用例之后执行"
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
            children: "// runs once after the last test in this block"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "only",
      children: ".only()"
    }), "\n", createVNode(_components.p, {
      children: "设置只执行某个 testcase/testsuite"
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
            children: "describe.only('#indexOf()', function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// ..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "skip",
      children: ".skip()"
    }), "\n", createVNode(_components.p, {
      children: "设置跳过执行某个 testcase/testsuite"
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
            children: "describe('#indexOf()', function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "it.skip('should return -1 unless present', function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "// this test will not be run"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    it('should return the index when present', function() {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      // this test will be run"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "参考网址",
      children: "参考网址"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://docs.cypress.io/guides/references/bundled-tools#Mocha",
          children: "https://docs.cypress.io/guides/references/bundled-tools#Mocha"
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

const url = "src/blog/zh-cn/Others/cypress-demo4.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
