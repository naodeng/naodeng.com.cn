import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "postman 替换工具 bruno 使用介绍",
  "description": "文章介绍 postman 替换工具 Bruno 的新手入门介绍，如何迁移 postman 脚本到 Bruno",
  "date": "2023-10-17T03:31:43.000Z",
  "author": "nao.deng",
  "tags": ["Bruno", "API Testing"],
  "categories": ["接口自动化测试", "Bruno"],
  "series": ["Bruno 教程"],
  "cover": "./Introduction_of_bruno-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "为什么选择-bruno",
    "text": "为什么选择 bruno"
  }, {
    "depth": 2,
    "slug": "安装-bruno",
    "text": "安装 bruno"
  }, {
    "depth": 2,
    "slug": "客户端使用入门",
    "text": "客户端使用入门"
  }, {
    "depth": 3,
    "slug": "默认主界面",
    "text": "默认主界面"
  }, {
    "depth": 3,
    "slug": "api-请求集",
    "text": "API 请求集"
  }, {
    "depth": 4,
    "slug": "创建-api-请求集",
    "text": "创建 API 请求集"
  }, {
    "depth": 4,
    "slug": "打开-api-请求集",
    "text": "打开 API 请求集"
  }, {
    "depth": 4,
    "slug": "导入-api-collection",
    "text": "导入 API collection"
  }, {
    "depth": 4,
    "slug": "本地运行-api-collection",
    "text": "本地运行 API collection"
  }, {
    "depth": 4,
    "slug": "导出-api-请求集",
    "text": "导出 API 请求集"
  }, {
    "depth": 3,
    "slug": "api-请求",
    "text": "API 请求"
  }, {
    "depth": 4,
    "slug": "新建-api-请求",
    "text": "新建 API 请求"
  }, {
    "depth": 4,
    "slug": "编辑-api-请求",
    "text": "编辑 API 请求"
  }, {
    "depth": 4,
    "slug": "运行-api-请求",
    "text": "运行 API 请求"
  }, {
    "depth": 4,
    "slug": "api-请求生成代码",
    "text": "API 请求生成代码"
  }, {
    "depth": 3,
    "slug": "编写-api-请求测试脚本",
    "text": "编写 API 请求测试脚本"
  }, {
    "depth": 4,
    "slug": "api-请求-assert",
    "text": "API 请求 Assert"
  }, {
    "depth": 5,
    "slug": "assert-介绍",
    "text": "Assert 介绍"
  }, {
    "depth": 5,
    "slug": "assert-示例",
    "text": "Assert 示例"
  }, {
    "depth": 6,
    "slug": "assert-status-code-为-200",
    "text": "Assert status code 为 200"
  }, {
    "depth": 6,
    "slug": "assert-repsponse-body-符合预期",
    "text": "Assert repsponse body 符合预期"
  }, {
    "depth": 5,
    "slug": "调试-assert",
    "text": "调试 Assert"
  }, {
    "depth": 4,
    "slug": "api-请求-tests",
    "text": "API 请求 Tests"
  }, {
    "depth": 5,
    "slug": "tests-介绍",
    "text": "Tests 介绍"
  }, {
    "depth": 5,
    "slug": "tests-示例",
    "text": "Tests 示例"
  }, {
    "depth": 6,
    "slug": "验证-status-code-为-200",
    "text": "验证 status code 为 200"
  }, {
    "depth": 6,
    "slug": "assert-repsponse-body-符合预期-1",
    "text": "Assert repsponse body 符合预期"
  }, {
    "depth": 5,
    "slug": "调试-tests",
    "text": "调试 Tests"
  }, {
    "depth": 4,
    "slug": "环境变量",
    "text": "环境变量"
  }, {
    "depth": 5,
    "slug": "创建环境变量",
    "text": "创建环境变量"
  }, {
    "depth": 5,
    "slug": "环境变量-demo",
    "text": "环境变量 demo"
  }, {
    "depth": 5,
    "slug": "使用环境变量",
    "text": "使用环境变量"
  }, {
    "depth": 3,
    "slug": "测试脚本接口自动化",
    "text": "测试脚本接口自动化"
  }, {
    "depth": 4,
    "slug": "前置条件",
    "text": "前置条件"
  }, {
    "depth": 4,
    "slug": "接口自动化项目-demo",
    "text": "接口自动化项目 demo"
  }, {
    "depth": 3,
    "slug": "接入-ci",
    "text": "接入 CI"
  }, {
    "depth": 4,
    "slug": "接入-github-action",
    "text": "接入 github action"
  }, {
    "depth": 4,
    "slug": "测试报告---todo",
    "text": "测试报告---TODO"
  }, {
    "depth": 3,
    "slug": "bruno-更多用法---todo",
    "text": "bruno 更多用法---TODO"
  }, {
    "depth": 3,
    "slug": "postman-脚本迁移",
    "text": "Postman 脚本迁移"
  }, {
    "depth": 4,
    "slug": "api-请求集迁移",
    "text": "API 请求集迁移"
  }, {
    "depth": 4,
    "slug": "环境变量迁移",
    "text": "环境变量迁移"
  }, {
    "depth": 4,
    "slug": "测试脚本迁移参考",
    "text": "测试脚本迁移参考"
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
    h6: "h6",
    hr: "hr",
    img: "img",
    input: "input",
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
      id: "为什么选择-bruno",
      children: "为什么选择 bruno"
    }), "\n", createVNode(_components.p, {
      children: ["官方说明：", createVNode(_components.a, {
        href: "https://github.com/usebruno/bruno/discussions/269",
        children: "https://github.com/usebruno/bruno/discussions/269"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["与 postman 的对比：", createVNode(_components.a, {
        href: "https://www.usebruno.com/compare/bruno-vs-postman",
        children: "https://www.usebruno.com/compare/bruno-vs-postman"
      })]
    }), "\n", createVNode(_components.p, {
      children: "开源，MIT License"
    }), "\n", createVNode(_components.p, {
      children: "客户端全平台支持 (Mac/linux/Windows)"
    }), "\n", createVNode(_components.p, {
      children: "离线客户端，无云同步功能计划"
    }), "\n", createVNode(_components.p, {
      children: "支持 Postman/insomina 脚本导入（只能导入 API 请求脚本，无法导入测试脚本）"
    }), "\n", createVNode(_components.p, {
      children: ["社区相对活跃，", createVNode(_components.a, {
        href: "https://github.com/usebruno/bruno/discussions/384",
        children: "产品开发路线图"
      }), "清晰"]
    }), "\n", createVNode(_components.h2, {
      id: "安装-bruno",
      children: "安装 bruno"
    }), "\n", createVNode(_components.p, {
      children: ["Download link: ", createVNode(_components.a, {
        href: "https://www.usebruno.com/downloads",
        children: "https://www.usebruno.com/downloads"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Mac 电脑推荐 brew 命令下载"
    }), "\n", createVNode(_components.p, {
      children: ["​    ", createVNode(_components.code, {
        children: "brew install Bruno"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "客户端使用入门",
      children: "客户端使用入门"
    }), "\n", createVNode(_components.h3, {
      id: "默认主界面",
      children: "默认主界面"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//homepage.png",
        alt: "homepage"
      })
    }), "\n", createVNode(_components.h3, {
      id: "api-请求集",
      children: "API 请求集"
    }), "\n", createVNode(_components.h4, {
      id: "创建-api-请求集",
      children: "创建 API 请求集"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "首页点击‘Create Collection’链接，打开创建 API 请求集的弹窗"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "弹窗上依次输入"
        }), "\n", createVNode(_components.p, {
          children: "Name: 输入 API 请求集的名字"
        }), "\n", createVNode(_components.p, {
          children: "Location：输入想要保存 API 请求集文件的文件夹路径 (建议选择此项目所在路径)"
        }), "\n", createVNode(_components.p, {
          children: "Folder Name：可输入 API 请求集名字（会在刚才选择的路径下创建一个对应名字的文件夹）"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "点击 Create 按钮即可完成 API 请求集的创建，并展示在界面上 (左侧 请求集列表会展示新建的 API 请求集的信息)"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//create-collection.png",
        alt: "create-collection"
      })
    }), "\n", createVNode(_components.h4, {
      id: "打开-api-请求集",
      children: "打开 API 请求集"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "首页点击‘Open Collection’链接，打开选择已有的 bruno 格式的 API 请求集文件夹"
      }), "\n", createVNode(_components.li, {
        children: "点击 open 即可完成选择，并展示在界面上 (左侧 collection 列表会展示选择的 API 请求集信息)"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "导入-api-collection",
      children: "导入 API collection"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "首页点击‘Import Collection’链接，打开导入 API collection 的弹窗 (支持 Bruno/Postman/Insomnia 的导入)"
      }), "\n", createVNode(_components.li, {
        children: "弹窗上选择对应格式的的链接，再选在已存在的对应格式的文件路径"
      }), "\n", createVNode(_components.li, {
        children: "点击 open 即可完成选择，并展示在界面上 (左侧 collection 列表会展示选择的 API collection 信息)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//import-collection.png",
        alt: "import-collection"
      })
    }), "\n", createVNode(_components.h4, {
      id: "本地运行-api-collection",
      children: "本地运行 API collection"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在主界面左侧 collection 列表选择想要运行的 API 请求集"
      }), "\n", createVNode(_components.li, {
        children: "在菜单上选择 Run，右侧界面会打开 Runner tab，会展示所选择 API 请求集里面 requests 的一些信息"
      }), "\n", createVNode(_components.li, {
        children: "点击 Run Collection 按钮即可本地运行 (运行完界面上会展示允许结果)"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "导出-api-请求集",
      children: "导出 API 请求集"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在主界面左侧 collection 列表选择想要运行的 API 请求集，右键打开菜单"
      }), "\n", createVNode(_components.li, {
        children: "在菜单上选择 Export，再选择想要导出文件的路径即可完成导出 (导出文件也是为 json 格式)"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "api-请求",
      children: "API 请求"
    }), "\n", createVNode(_components.h4, {
      id: "新建-api-请求",
      children: "新建 API 请求"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "前置条件：已经创建了 API 请求集 (参考上面的创建 API 请求集)"
      }), "\n", createVNode(_components.li, {
        children: "在主界面左侧 collection 列表选择想要新建 API 请求的 API 请求集"
      }), "\n", createVNode(_components.li, {
        children: "在菜单上选择 New Request，右侧界面会打开 Request tab，会展示所选择 API 请求集里面 requests 的一些信息"
      }), "\n", createVNode(_components.li, {
        children: "在 new Request 窗口上先选择请求类型：HTTP/GraphQL"
      }), "\n", createVNode(_components.li, {
        children: "依次输入\nName: 输入 API 请求的名字\nURL：输入 API 请求的 URL\nMethod：选择 API 请求的 Method"
      }), "\n", createVNode(_components.li, {
        children: "点击 Create 按钮即可完成 API 请求的创建，并展示在界面上 (左侧 请求集列表会展示新建的 API 请求的信息)"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "编辑-api-请求",
      children: "编辑 API 请求"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "然后可以根据 API 请求类型再来编辑请求的不同字段\nBody：输入 API 请求的 Body"
        }), "\n", createVNode(_components.p, {
          children: "Headers：输入 API 请求的 Headers"
        }), "\n", createVNode(_components.p, {
          children: "Params：输入 API 请求的 Params"
        }), "\n", createVNode(_components.p, {
          children: "Auth：输入 API 请求的 Auth"
        }), "\n", createVNode(_components.p, {
          children: "Vars：输入 API 请求的 Vars"
        }), "\n", createVNode(_components.p, {
          children: "Script：输入 API 请求的 Script"
        }), "\n", createVNode(_components.p, {
          children: "Assert：输入 API 请求的 Assert"
        }), "\n", createVNode(_components.p, {
          children: "Tests：输入 API 请求的 Tests"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "点击 Save 按钮即可完成 API 请求的编辑，并展示在界面上 (左侧 请求集列表会展示编辑的 API 请求的信息)"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "运行-api-请求",
      children: "运行 API 请求"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)"
      }), "\n", createVNode(_components.li, {
        children: "在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求"
      }), "\n", createVNode(_components.li, {
        children: "点击 API url 编辑框后的向右按钮即可完成 API 请求的运行，并展示在界面上 (右侧 Request tab 会展示运行的 API 请求的信息)"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "api-请求生成代码",
      children: "API 请求生成代码"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)"
      }), "\n", createVNode(_components.li, {
        children: "在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求"
      }), "\n", createVNode(_components.li, {
        children: "菜单右键选择 Generate Code，再选择想要生成代码的语言"
      }), "\n", createVNode(_components.li, {
        children: "Generate Code 窗口即可展示不同语言的请求代码"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "编写-api-请求测试脚本",
      children: "编写 API 请求测试脚本"
    }), "\n", createVNode(_components.h4, {
      id: "api-请求-assert",
      children: "API 请求 Assert"
    }), "\n", createVNode(_components.h5, {
      id: "assert-介绍",
      children: "Assert 介绍"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "打开任意的 API 请求，切换到 Assert tab"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Assert tab 会展示 API 请求的 Assert 信息"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Assert 用来判断 API 请求的返回结果是否符合预期"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Expr：输入预期结果的表达式，可以是 API 请求的返回结果的某个字段的值，可输入两种类型：Status Code 和 Response Body\nStatus Code：判断 API 请求的返回状态码是否符合预期  (默认为 200)\nResponse Body：判断 API 请求的返回结果是否符合预期 (默认为 true)"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Operator：输入预期结果的验证方式。支持多种判断方式：Equal 和 Not Equal 等\nEqual：判断 API 请求的返回结果是否等于预期结果\nNot Equal：判断 API 请求的返回结果是否不等于预期结果"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Value：输入预期结果的值，支持两种预期结果的输入方式：Static 和 Dynamic\nStatic：输入预期结果的静态值\nDynamic：输入预期结果的动态值，可以是 API 请求的返回结果的某个字段的值"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "assert-示例",
      children: "Assert 示例"
    }), "\n", createVNode(_components.h6, {
      id: "assert-status-code-为-200",
      children: "Assert status code 为 200"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["以 ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), " 为例 (该 API 请求返回的结果为：", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), ") 我想验证该 API 请求的返回结果的 status 是否为 200，"]
      }), "\n", createVNode(_components.li, {
        children: "打开该 API 请求，切换到 Assert tab"
      }), "\n", createVNode(_components.li, {
        children: "依次输入如下信息\nExpr: res.status\nOperator：Equal\nValue：200"
      }), "\n"]
    }), "\n", createVNode(_components.h6, {
      id: "assert-repsponse-body-符合预期",
      children: "Assert repsponse body 符合预期"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["以 ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), " 为例 (该 API 请求返回的结果为：", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), ") 我想验证该 API 请求的返回结果的 repsponse body 是否符合预期"]
      }), "\n", createVNode(_components.li, {
        children: "打开该 API 请求，切换到 Assert tab"
      }), "\n", createVNode(_components.li, {
        children: "Assert1 依次输入如下信息\nExpr: res.body.id\nOperator：Equal\nValue：1"
      }), "\n", createVNode(_components.li, {
        children: "Assert2 依次输入如下信息\nExpr: res.body.title\nOperator：contains\nValue：provident"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "调试-assert",
      children: "调试 Assert"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)，也按照 demo 编写了对应的 Assert"
      }), "\n", createVNode(_components.li, {
        children: "在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求"
      }), "\n", createVNode(_components.li, {
        children: "点击 API url 编辑框后的向右按钮即可完成 API 请求的运行，并展示在界面上 (右侧 Request tab 会展示运行的 API 请求的信息)"
      }), "\n", createVNode(_components.li, {
        children: "切换到 Tests tab，会展示 API 请求的 Tests 信息，里面也会包括请求的 Assert 信息"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//assert-demo.png",
        alt: "assert-demo"
      })
    }), "\n", createVNode(_components.h4, {
      id: "api-请求-tests",
      children: "API 请求 Tests"
    }), "\n", createVNode(_components.h5, {
      id: "tests-介绍",
      children: "Tests 介绍"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "打开任意的 API 请求，切换到 Tests tab"
      }), "\n", createVNode(_components.li, {
        children: "Tests tab 会展示 API 请求的 Tests 信息"
      }), "\n", createVNode(_components.li, {
        children: "Tests 用来编写 API 请求的测试脚本，目前较好支持 javascript 语言"
      }), "\n", createVNode(_components.li, {
        children: "Tests 里面可以编写多个测试脚本，每个测试脚本都可以单独运行"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "tests-示例",
      children: "Tests 示例"
    }), "\n", createVNode(_components.h6, {
      id: "验证-status-code-为-200",
      children: "验证 status code 为 200"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["以 ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), " 为例 (该 API 请求返回的结果为：", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), ") 我想验证该 API 请求的返回结果的 status 是否为 200，"]
      }), "\n", createVNode(_components.li, {
        children: "打开该 API 请求，切换到 Tests tab"
      }), "\n", createVNode(_components.li, {
        children: "输入如下脚本"
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
            children: "\"res.status should be 200\""
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
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
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()).to."
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
        })]
      })
    }), "\n", createVNode(_components.h6, {
      id: "assert-repsponse-body-符合预期-1",
      children: "Assert repsponse body 符合预期"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["以 ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), " 为例 (该 API 请求返回的结果为：", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com/posts/1",
          children: "https://jsonplaceholder.typicode.com/posts/1"
        }), ") 我想验证该 API 请求的返回结果的 repsponse body 是否符合预期"]
      }), "\n", createVNode(_components.li, {
        children: "打开该 API 请求，切换到 Tests tab"
      }), "\n", createVNode(_components.li, {
        children: "输入如下脚本"
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
            children: "\"res.body should be correct\""
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
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
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
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
            children: "1"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "contains"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'provident'"
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
      id: "调试-tests",
      children: "调试 Tests"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)，也按照 demo 编写了对应的 Tests"
      }), "\n", createVNode(_components.li, {
        children: "在主界面左侧 collection 列表选择想要编辑 API 请求的 API 请求集，再选中想要编辑的 API 请求"
      }), "\n", createVNode(_components.li, {
        children: "点击 API url 编辑框后的向右按钮即可完成 API 请求的运行，并展示在界面上 (右侧 Request tab 会展示运行的 API 请求的信息)"
      }), "\n", createVNode(_components.li, {
        children: "切换到 Tests tab，会展示 API 请求的 Tests 信息，里面也会包括请求的 Tests 信息"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//tests-demo.png",
        alt: "tests-demo"
      })
    }), "\n", createVNode(_components.h4, {
      id: "环境变量",
      children: "环境变量"
    }), "\n", createVNode(_components.h5, {
      id: "创建环境变量",
      children: "创建环境变量"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)"
      }), "\n", createVNode(_components.li, {
        children: "选择想要创建环境变量的 API 请求"
      }), "\n", createVNode(_components.li, {
        children: "点击页面右上角的‘No Environment’链接（默认为 No Environment），选择菜单中的 configure 按钮即可打开环境变量管理弹窗（支持创建新的环境变量和导入已有的环境变量）"
      }), "\n", createVNode(_components.li, {
        children: "弹窗上点击 Create Environment 按钮，输入环境变量的名字，点击 create 按钮即可创建环境变量"
      }), "\n", createVNode(_components.li, {
        children: "然后在弹窗上点击 Add Variable 按钮，输入环境变量的 key 和 value，点击 Save 按钮即可添加环境变量"
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "环境变量-demo",
      children: "环境变量 demo"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["需求：创建一个 demo 环境变量，里面包含一个 key 为 host，value 为 ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com",
          children: "https://jsonplaceholder.typicode.com"
        }), " 的环境变量"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "选择想要创建环境变量的 API 请求"
      }), "\n", createVNode(_components.li, {
        children: "点击页面右上角的‘No Environment’链接（默认为 No Environment），选择菜单中的 configure 按钮即可打开环境变量管理弹窗"
      }), "\n", createVNode(_components.li, {
        children: "弹窗上点击 Create Environment 按钮，输入环境变量的名字 demo，点击 create 按钮即可创建环境变量 demo"
      }), "\n", createVNode(_components.li, {
        children: ["选择 demo 环境变量，然后在页面上点击 Add Variable 按钮，输入环境变量的 key 为 host，value 为 ", createVNode(_components.a, {
          href: "https://jsonplaceholder.typicode.com",
          children: "https://jsonplaceholder.typicode.com"
        }), " ，点击 Save 按钮即可添加环境变量"]
      }), "\n", createVNode(_components.li, {
        children: ["如下图所示\n", createVNode(_components.img, {
          src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//env-intro.png",
          alt: "env-intro"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h5, {
      id: "使用环境变量",
      children: "使用环境变量"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "前置条件：已经创建了 API 请求集和 API 请求 (参考上面的创建 API 请求集和新建 API 请求)，也创建了 demo 环境变量"
      }), "\n", createVNode(_components.li, {
        children: "选择想要使用环境变量的 API 请求"
      }), "\n", createVNode(_components.li, {
        children: "点击页面右上角的‘No Environment’链接（默认为 No Environment），选择菜单中的 demo 按钮即可使用 demo 环境变量"
      }), "\n", createVNode(_components.li, {
        children: "然后在 API 请求的 URL 变更为输入 {{host}}/posts/1 即可使用环境变量"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "测试脚本接口自动化",
      children: "测试脚本接口自动化"
    }), "\n", createVNode(_components.h4, {
      id: "前置条件",
      children: "前置条件"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 已创建了 API 请求集（示例名为:api-collects）"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 已创建了 API 请求（示例名为:api request1）"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 已创建了环境变量（示例名为:demo）"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 也为 API 请求编写了 assert 或者 tests 脚本"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "接口自动化项目-demo",
      children: "接口自动化项目 demo"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 安装 node.js"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 安装 npm"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 新建项目文件夹（示例名为:bruno-test）"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 项目文件夹下执行 npm init 将项目初始化为 npm 项目"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 安装 @usebruno/cli 依赖 (脚本为：npm install @usebruno/cli)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 打开保存 API 请求集的文件夹目录，将 api-collects 目录下的所有文件都复制到 bruno-test 项目目录下下"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 项目目录如下所示"]
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
              color: "#E1E4E8"
            },
            children: "bruno"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "test   "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//项目主文件夹"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  api request1.bru "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//api 请求"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  enviroments "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//环境变量"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    demo.bru"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  bruno.json"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  node_modules "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//node 包依赖"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  package-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "lock.json"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  package.json "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "//npm 项目配置文件"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 运行接口自动化脚本"]
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
              color: "#E1E4E8"
            },
            children: "bruno run "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "--"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "env demo"
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "运行结果如下"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//cli-demo.png",
        alt: "cli-demo"
      })
    }), "\n", createVNode(_components.h3, {
      id: "接入-ci",
      children: "接入 CI"
    }), "\n", createVNode(_components.h4, {
      id: "接入-github-action",
      children: "接入 github action"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "以 github action 为例，其他 CI 工具类似"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 前置准备：在项目 package.json 文件中添加如下脚本"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"test\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"bru run --env demo\""
          })]
        })
      })
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 在项目根目录下创建 .github/workflows 文件夹"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 在 .github/workflows 文件夹下创建 main.yml 文件"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " main.yml 文件内容如下"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "yaml",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "bruno cli CI"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "  push"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "    branches"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": [ "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "main"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "  pull_request"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "    branches"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": [ "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "main"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "jobs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "  run_bruno_api_test"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "    runs-on"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "ubuntu-latest"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "    steps"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    - "
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "uses"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "actions/checkout@v3"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    - "
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "run"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "npm install"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    - "
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "name"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "run tests"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "      run"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "npm run test"
          })]
        })]
      })
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 提交代码到 github，会自动触发 github action"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " 查看 github action 运行结果，如图示例："]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//cli-demo1.png",
        alt: "cli-demo1"
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["可拉取本项目代码进行参考：", createVNode(_components.a, {
          href: "https://github.com/dengnao-tw/Bruno-API-Test-Starter",
          children: "https://github.com/dengnao-tw/Bruno-API-Test-Starter"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "测试报告---todo",
      children: "测试报告---TODO"
    }), "\n", createVNode(_components.h3, {
      id: "bruno-更多用法---todo",
      children: "bruno 更多用法---TODO"
    }), "\n", createVNode(_components.h3, {
      id: "postman-脚本迁移",
      children: "Postman 脚本迁移"
    }), "\n", createVNode(_components.h4, {
      id: "api-请求集迁移",
      children: "API 请求集迁移"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在首页点击‘Import Collection’链接，打开导入 API collection 的弹窗"
      }), "\n", createVNode(_components.li, {
        children: "点击选择 Postman Collection 的链接，再选在已存在的 Postman 请求集文件路径"
      }), "\n", createVNode(_components.li, {
        children: "即可导入 Postman 的请求集"
      }), "\n", createVNode(_components.li, {
        children: ["但是目前只支持导入 API 请求，无法导入测试脚本，如图所示（但不影响请求调用）\n", createVNode(_components.img, {
          src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//postman1.png",
          alt: "postman1"
        }), "\n", createVNode(_components.img, {
          src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//bruno1.png",
          alt: "bruno1"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "环境变量迁移",
      children: "环境变量迁移"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "在首页选择刚才导入的 Postman 请求"
      }), "\n", createVNode(_components.li, {
        children: "点击页面右上角的‘No Environment’链接（默认为 No Environment），选择菜单中的 configure 按钮即可打开环境变量管理弹窗"
      }), "\n", createVNode(_components.li, {
        children: "点击‘Import Environment’链接，打开导入 Environment 的弹窗"
      }), "\n", createVNode(_components.li, {
        children: "点击选择 Postman Environment 的链接，再选在已存在的 Postman 环境变量文件路径"
      }), "\n", createVNode(_components.li, {
        children: ["即可导入 Postman 的环境变量\n", createVNode(_components.img, {
          src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//postman2.png",
          alt: "postman2"
        }), "\n", createVNode(_components.img, {
          src: "https://github.com/dengnao-tw/Bruno-API-Test-Starter/raw/main/readme_pictures//bruno2.png",
          alt: "bruno2"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "测试脚本迁移参考",
      children: "测试脚本迁移参考"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "两个工具测试脚本的语法存在一部分差异，需要手动修改"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Postman 测试脚本语法参考：", createVNode(_components.a, {
          href: "https://learning.postman.com/docs/writing-scripts/test-scripts/",
          children: "https://learning.postman.com/docs/writing-scripts/test-scripts/"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Postman 测试脚本示例"
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
            children: "\"res.status should be 200\""
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
            children: "  pm.response.to.have."
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
            children: "\"res.body should be correct\""
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
              color: "#F97583"
            },
            children: "  var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " data "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
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
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
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
            children: "1"
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
            children: "  pm."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "contains"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'provident'"
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
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Bruno 测试脚本语法参考：", createVNode(_components.a, {
          href: "https://docs.usebruno.com/testing/introduction.html",
          children: "https://docs.usebruno.com/testing/introduction.html"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Bruno 测试脚本示例"
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
            children: "\"res.status should be 200\""
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
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
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getStatus"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()).to."
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
          class: "line",
          children: [createVNode(_components.span, {
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
            children: "\"res.body should be correct\""
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
              color: "#F97583"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " res."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getBody"
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
              color: "#B392F0"
            },
            children: "  expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.id).to."
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
            children: "1"
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
            children: "expect"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(data.title).to."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "contains"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'provident'"
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

const url = "src/blog/zh-cn/API-Automation-Testing/Introduction_of_bruno.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/Introduction_of_bruno.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/Introduction_of_bruno.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
