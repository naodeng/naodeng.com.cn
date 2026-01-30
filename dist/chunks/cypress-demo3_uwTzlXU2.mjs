import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*more*/
/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Cypress UI 自动化测试框架学习（3）- 元素定位，操作和断言",
  "description": "文章介绍如何去使用 cypress 的元素定位、操作和断言",
  "date": "2022-05-10T00:00:00.000Z",
  "author": "nao.deng",
  "cover": "./cypress-demo3-cover.png",
  "tags": ["Cypress", "UI Testing"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "元素定位",
    "text": "元素定位"
  }, {
    "depth": 3,
    "slug": "常用元素定位",
    "text": "常用元素定位"
  }, {
    "depth": 4,
    "slug": "id-定位",
    "text": "#id 定位"
  }, {
    "depth": 4,
    "slug": "class-定位",
    "text": ".class 定位"
  }, {
    "depth": 4,
    "slug": "name-定位",
    "text": "name 定位"
  }, {
    "depth": 3,
    "slug": "常用定位方式",
    "text": "常用定位方式"
  }, {
    "depth": 4,
    "slug": "get",
    "text": ".get()"
  }, {
    "depth": 4,
    "slug": "contains",
    "text": ".contains()"
  }, {
    "depth": 4,
    "slug": "within",
    "text": ".within()"
  }, {
    "depth": 4,
    "slug": "cypress",
    "text": "Cypress.$"
  }, {
    "depth": 3,
    "slug": "框架自带可视化自助元素定位",
    "text": "框架自带可视化自助元素定位"
  }, {
    "depth": 2,
    "slug": "元素常用操作",
    "text": "元素常用操作"
  }, {
    "depth": 3,
    "slug": "click",
    "text": ".click()"
  }, {
    "depth": 3,
    "slug": "typevalue",
    "text": ".type(value)"
  }, {
    "depth": 3,
    "slug": "clear",
    "text": ".clear()"
  }, {
    "depth": 3,
    "slug": "submit",
    "text": ".submit()"
  }, {
    "depth": 3,
    "slug": "dbclickrightclick",
    "text": ".dbclick()/.rightclick()"
  }, {
    "depth": 3,
    "slug": "select",
    "text": ".select()"
  }, {
    "depth": 3,
    "slug": "checkuncheck",
    "text": ".check()/.uncheck()"
  }, {
    "depth": 3,
    "slug": "focusblur",
    "text": ".focus()/.blur()"
  }, {
    "depth": 2,
    "slug": "断言",
    "text": "断言"
  }, {
    "depth": 3,
    "slug": "bdd-断言",
    "text": "BDD 断言"
  }, {
    "depth": 4,
    "slug": "断言类型",
    "text": "断言类型"
  }, {
    "depth": 5,
    "slug": "should",
    "text": ".should()："
  }, {
    "depth": 5,
    "slug": "expect",
    "text": ".expect()："
  }, {
    "depth": 4,
    "slug": "常用断言",
    "text": "常用断言"
  }, {
    "depth": 3,
    "slug": "tdd-断言",
    "text": "TDD 断言"
  }, {
    "depth": 4,
    "slug": "断言类型-1",
    "text": "断言类型"
  }, {
    "depth": 5,
    "slug": "assert",
    "text": ".assert()："
  }, {
    "depth": 4,
    "slug": "常用断言-1",
    "text": "常用断言"
  }, {
    "depth": 3,
    "slug": "常用断言-2",
    "text": "常用断言"
  }, {
    "depth": 4,
    "slug": "针对长度length的断言",
    "text": "针对长度（length）的断言"
  }, {
    "depth": 4,
    "slug": "针对类class的断言",
    "text": "针对类（Class）的断言"
  }, {
    "depth": 4,
    "slug": "针对值value断言",
    "text": "针对值（Value）断言"
  }, {
    "depth": 4,
    "slug": "针对文本内容text-content的断言",
    "text": "针对文本内容（Text Content）的断言"
  }, {
    "depth": 4,
    "slug": "针对元素可见与否visibility的断言",
    "text": "针对元素可见与否（Visibility）的断言"
  }, {
    "depth": 4,
    "slug": "针对元素存在与否existence的断言",
    "text": "针对元素存在与否（Existence）的断言"
  }, {
    "depth": 4,
    "slug": "针对元素状态的status的断言",
    "text": "针对元素状态的（status）的断言"
  }, {
    "depth": 4,
    "slug": "针对-css-的断言",
    "text": "针对 CSS 的断言"
  }, {
    "depth": 2,
    "slug": "运行出错问题记录",
    "text": "运行出错问题记录"
  }, {
    "depth": 4,
    "slug": "运行-npm-run-cypressopen-报错提示-no-version-of-cypress-is-installed",
    "text": "运行 npm run cypress:open 报错，提示 No version of Cypress is installed"
  }, {
    "depth": 5,
    "slug": "报错截图如下",
    "text": "报错截图如下："
  }, {
    "depth": 5,
    "slug": "修复方式",
    "text": "修复方式"
  }, {
    "depth": 5,
    "slug": "原因",
    "text": "原因"
  }, {
    "depth": 4,
    "slug": "运行-npm-run-cypressopen-报错提示-cypress-verification-timed-out",
    "text": "运行 npm run cypress:open 报错，提示 Cypress verification timed out"
  }, {
    "depth": 5,
    "slug": "报错截图如下-1",
    "text": "报错截图如下："
  }, {
    "depth": 5,
    "slug": "修复方式-1",
    "text": "修复方式"
  }, {
    "depth": 5,
    "slug": "原因-1",
    "text": "原因"
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "下面的信息是对于框架学习第 3 篇的介绍。在该篇文章中，我们学习了如何使用元素定位、操作和断言。该框架可以帮助用户定位相关的元素，并且可以帮助用户进行操作。这些操作可以帮助用户断言事件。"
    }), "\n", "\n", createVNode(_components.h2, {
      id: "元素定位",
      children: "元素定位"
    }), "\n", createVNode(_components.p, {
      children: "谈到 UI 自动化测试，不管是 web 端还是移动端，页面元素的各种操作在编写测试脚本时都会涉及，如果想写出高通过率和高健壮性的自动化测试用例，必须要确保正确高效的页面元素识别和使用。"
    }), "\n", createVNode(_components.p, {
      children: "cypress 框架除了支持常用的元素定位，还提供了好用的 JQuery css 选择器。"
    }), "\n", createVNode(_components.p, {
      children: "下面会介绍常用的元素定位方法，常用的定位方式，以及框架自带可视化自助元素定位方法"
    }), "\n", createVNode(_components.h3, {
      id: "常用元素定位",
      children: "常用元素定位"
    }), "\n", createVNode(_components.h4, {
      id: "id-定位",
      children: "#id 定位"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：通过元素的 id 属性来定位"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "前提：定位的元素 css 样式须存在 id 属性且唯一"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//元素前端代码示例 <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"\" class=\"form-control\">"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["示例代码\n", createVNode(_components.code, {
          children: "cy.get('#email')"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "class-定位",
      children: ".class 定位"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：通过元素的 class 属性来定位"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "前提：定位的元素 css 样式存在 class 属性且唯一"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//元素前端代码示例 <a class=\"navbar-brand\" href=\"/\"><img width=\"150\" height=\"28\" border=\"0\" align=\"default\" alt=\"光谷社区\" src=\"http://cdn.guanggoo.com//static/images/guanggoonew.png\" /></a>"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "示例代码"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get('.navbar-brand')"
      })
    }), "\n", createVNode(_components.h4, {
      id: "name-定位",
      children: "name 定位"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：通过元素 name 定位"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["前提：定位的元素 css 样式存在 name 属性且唯一\n", createVNode(_components.code, {
            children: "//元素前端代码示例 <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"\" class=\"form-control\">"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get('input[name=\"email\"]')"
      })
    }), "\n", createVNode(_components.h3, {
      id: "常用定位方式",
      children: "常用定位方式"
    }), "\n", createVNode(_components.h4, {
      id: "get",
      children: ".get()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "描述：使用 get() 定位元素，定位元素用 CSS selectors，跟 jQuery 一样"
      }), "\n", createVNode(_components.li, {
        children: "示例代码"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get('#email')"
      })
    }), "\n", createVNode(_components.h4, {
      id: "contains",
      children: ".contains()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：可以使用 cy.contains（）根据元素的内容找到元素"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.contains(‘value’) cy.get(‘div[name=“div_name”]’).contains(‘value’)"
      })
    }), "\n", createVNode(_components.h4, {
      id: "within",
      children: ".within()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：可以在特定的 DOM 元素中找到元素"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get('.query-form').within(() => { cy.get('input:first').should('have.attr', 'placeholder', 'Email') cy.get('input:last').should('have.attr', 'placeholder', 'Password') })"
      })
    }), "\n", createVNode(_components.h4, {
      id: "cypress",
      children: "Cypress.$"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：Cypress 也提供了 JQuery 选择器，调用 Cypress.$(‘button’）会自动在您的窗口中查询元素。换句话说，Cypress 会自动将文档设置为您当前通过 cy.visit() 导航到的任何内容，这是从开发人员工具调试时同步查询元素的好方法。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "Cypress.$(selector) // other proxied jQuery methods Cypress.$.Event Cypress.$.Deferred Cypress.$.ajax Cypress.$.get Cypress.$.getJSON Cypress.$.getScript Cypress.$.post"
      })
    }), "\n", createVNode(_components.h3, {
      id: "框架自带可视化自助元素定位",
      children: "框架自带可视化自助元素定位"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1.前提：demo 代码已经跑起来 (运行脚本：npm run cypress:open)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601152305.png",
        alt: ""
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "2.点击运行调试用例，进入定位元素对应的页面"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601152419.png",
        alt: ""
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "3.在页面上选择瞄准镜标识（open selector playground）"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "4.选择页面上的元素区域，元素的定位信息就会展示在定位信息展示区域，点击复制就可使用"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601152904.png",
        alt: ""
      })
    }), "\n", createVNode(_components.h2, {
      id: "元素常用操作",
      children: "元素常用操作"
    }), "\n", createVNode(_components.h3, {
      id: "click",
      children: ".click()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：单击"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get('.btn-success').click()"
      })
    }), "\n", createVNode(_components.h3, {
      id: "typevalue",
      children: ".type(value)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：输入内容"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["示例代码\n", createVNode(_components.code, {
            children: " "
          }), "cy.get(‘input[name=“username”]’).type(‘", createVNode(_components.a, {
            href: "mailto:dengnao.123@163.com",
            children: "dengnao.123@163.com"
          }), "’)“"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "clear",
      children: ".clear()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：清空输入内容"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get(‘[type=“text”]’).clear()"
      })
    }), "\n", createVNode(_components.h3, {
      id: "submit",
      children: ".submit()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：提交表单"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get(‘.ant-input’).submit()"
      })
    }), "\n", createVNode(_components.h3, {
      id: "dbclickrightclick",
      children: ".dbclick()/.rightclick()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：鼠标双击操作/鼠标右击操作"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get('.menu').rightclick() // 鼠标右击 .menu 菜单元素"
      })
    }), "\n", createVNode(_components.h3, {
      id: "select",
      children: ".select()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["描述：针对 ", createVNode(_components.code, {
            children: "<select>"
          }), " 元素选择一个选项"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get('color').select('red') // 颜色选项中选择红色"
      })
    }), "\n", createVNode(_components.h3, {
      id: "checkuncheck",
      children: ".check()/.uncheck()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：单选或多选进行勾选/取消选中 (反选)"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get('[type=\"checkbox\"]').check() // 对 checkbox 进行选中操作 cy.get('[type=\"checkbox\"]').uncheck() // 对 checkbox 进行取消选中操作"
      })
    }), "\n", createVNode(_components.h3, {
      id: "focusblur",
      children: ".focus()/.blur()"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：对选项进行聚焦/失焦操作"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get(‘input[name=“username”]’).focus() //对于用户名输入框进行聚焦操作"
      })
    }), "\n", createVNode(_components.h2, {
      id: "断言",
      children: "断言"
    }), "\n", createVNode(_components.h3, {
      id: "bdd-断言",
      children: "BDD 断言"
    }), "\n", createVNode(_components.h4, {
      id: "断言类型",
      children: "断言类型"
    }), "\n", createVNode(_components.h5, {
      id: "should",
      children: ".should()："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：创建断言，断言会自动重试，直到它们通过或超时。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "cy.get(‘.ant-checkbox).should(‘be.checked’)"
      })
    }), "\n", createVNode(_components.h5, {
      id: "expect",
      children: ".expect()："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：预期结果"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "expect(name).to.not.equal(‘dengnao.123@163.com’)"
      })
    }), "\n", createVNode(_components.h4, {
      id: "常用断言",
      children: "常用断言"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["可参考官网文档:", createVNode(_components.a, {
          href: "https://docs.cypress.io/guides/references/assertions#BDD-Assertions",
          children: "https://docs.cypress.io/guides/references/assertions#BDD-Assertions"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601161229.png",
        alt: ""
      })
    }), "\n", createVNode(_components.h3, {
      id: "tdd-断言",
      children: "TDD 断言"
    }), "\n", createVNode(_components.h4, {
      id: "断言类型-1",
      children: "断言类型"
    }), "\n", createVNode(_components.h5, {
      id: "assert",
      children: ".assert()："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "描述：断言"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "示例代码"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "assert.equal(3,3,’vals equal’)"
      })
    }), "\n", createVNode(_components.h4, {
      id: "常用断言-1",
      children: "常用断言"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["可参考官网文档:", createVNode(_components.a, {
          href: "https://docs.cypress.io/guides/references/assertions#TDD-Assertions",
          children: "https://docs.cypress.io/guides/references/assertions#TDD-Assertions"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601161926.png",
        alt: ""
      })
    }), "\n", createVNode(_components.h3, {
      id: "常用断言-2",
      children: "常用断言"
    }), "\n", createVNode(_components.h4, {
      id: "针对长度length的断言",
      children: "针对长度（length）的断言"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//重试，直到找到 3 个匹配的<li.selected>     cy.get('li.selected').should('have.length',3)"
      })
    }), "\n", createVNode(_components.h4, {
      id: "针对类class的断言",
      children: "针对类（Class）的断言"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//重试，直到 input 元素没有类被 disabled 为止（或者超时为止）     cy.get('from').fijd('input').should('not.have.class','disabled')"
      })
    }), "\n", createVNode(_components.h4, {
      id: "针对值value断言",
      children: "针对值（Value）断言"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//重试，直到 textarea 的值为‘iTesting’     cy.get('textarea').should('have.value','iTesting')"
      })
    }), "\n", createVNode(_components.h4, {
      id: "针对文本内容text-content的断言",
      children: "针对文本内容（Text Content）的断言"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: " //重试，直到这个 span 不包含“click me”字样 cy.get('a').parent('span.help').should('not.contain','click me') //重试，直到这个 span 包含“click me”字样 cy.get('a').parent('span.help').should('contain','click me')"
      })
    }), "\n", createVNode(_components.h4, {
      id: "针对元素可见与否visibility的断言",
      children: "针对元素可见与否（Visibility）的断言"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//重试，直到这个 button 是可为止 cy.get('button').should('be.visible')"
      })
    }), "\n", createVNode(_components.h4, {
      id: "针对元素存在与否existence的断言",
      children: "针对元素存在与否（Existence）的断言"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//重试，直到 id 为 loading 的 spinner 不在存在 cy.get('#loading').should('not.exist')"
      })
    }), "\n", createVNode(_components.h4, {
      id: "针对元素状态的status的断言",
      children: "针对元素状态的（status）的断言"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//重试，直到这个 radio button 是选中状态     cy.get('：radio').should('be.checked')"
      })
    }), "\n", createVNode(_components.h4, {
      id: "针对-css-的断言",
      children: "针对 CSS 的断言"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//重试，直到 completed 这个类有匹配的 css 为止     cy.get('.completed').should('have.css','text-decoration','line-through')"
      })
    }), "\n", createVNode(_components.h2, {
      id: "运行出错问题记录",
      children: "运行出错问题记录"
    }), "\n", createVNode(_components.h4, {
      id: "运行-npm-run-cypressopen-报错提示-no-version-of-cypress-is-installed",
      children: "运行 npm run cypress:open 报错，提示 No version of Cypress is installed"
    }), "\n", createVNode(_components.h5, {
      id: "报错截图如下",
      children: "报错截图如下："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601150230.png",
        alt: ""
      })
    }), "\n", createVNode(_components.h5, {
      id: "修复方式",
      children: "修复方式"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "//项目根目录下运行如下命令即可解决 ./node_modules/.bin/cypress install"
      })
    }), "\n", createVNode(_components.h5, {
      id: "原因",
      children: "原因"
    }), "\n", createVNode(_components.p, {
      children: "电脑使用过清理软件，安装的 cypress 缓存信息被删除了，重新安装就好"
    }), "\n", createVNode(_components.h4, {
      id: "运行-npm-run-cypressopen-报错提示-cypress-verification-timed-out",
      children: "运行 npm run cypress:open 报错，提示 Cypress verification timed out"
    }), "\n", createVNode(_components.h5, {
      id: "报错截图如下-1",
      children: "报错截图如下："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/waitnoww/hexoblogimg/master/img/20210601151647.png",
        alt: ""
      })
    }), "\n", createVNode(_components.h5, {
      id: "修复方式-1",
      children: "修复方式"
    }), "\n", createVNode(_components.p, {
      children: "重新运行 npm run cypress:open 尝试即可"
    }), "\n", createVNode(_components.h5, {
      id: "原因-1",
      children: "原因"
    }), "\n", createVNode(_components.p, {
      children: "电脑 cypress 验证超时了，一般重新操作即可恢复"
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

const url = "src/blog/zh-cn/Others/cypress-demo3.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
