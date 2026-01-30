import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "接口测试简介",
  "description": "文章介绍接口测试的简介，类型和工具",
  "date": "2023-04-20T00:00:00.000Z",
  "author": "nao.deng",
  "tags": ["API Testing"],
  "categories": ["接口测试", "测试工具"],
  "series": ["测试理论指南"],
  "cover": "./Introduction_of_API_Test-cover.png"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "什么是-api",
    "text": "什么是 API?"
  }, {
    "depth": 3,
    "slug": "什么是-api-测试",
    "text": "什么是 API 测试？"
  }, {
    "depth": 3,
    "slug": "api-测试与测试四象限",
    "text": "API 测试与测试四象限"
  }, {
    "depth": 3,
    "slug": "api-测试与测试金字塔",
    "text": "API 测试与测试金字塔"
  }, {
    "depth": 3,
    "slug": "api-测试类型",
    "text": "API 测试类型"
  }, {
    "depth": 3,
    "slug": "api-测试步骤",
    "text": "API 测试步骤"
  }, {
    "depth": 3,
    "slug": "api-功能测试设计",
    "text": "API 功能测试设计"
  }, {
    "depth": 3,
    "slug": "api-非功能测试设计",
    "text": "API 非功能测试设计"
  }, {
    "depth": 3,
    "slug": "api-测试工具",
    "text": "API 测试工具"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "什么是-api",
      children: "什么是 API?"
    }), "\n", createVNode(_components.p, {
      children: "API:应用程序接口（全称：application programming interface），缩写为 API，是一种计算接口，它定义多个软件中介之间的交互，以及可以进行的调用（call）或请求（request）的种类，如何进行调用或发出请求，应使用的数据格式，应遵循的惯例等。它还可以提供扩展机制，以便用户可以通过各种方式对现有功能进行不同程度的扩展。一个 API 可以是完全定制的，针对某个组件的，也可以是基于行业标准设计的以确保互操作性。通过信息隐藏，API 实现了模块化编程，从而允许用户实现独立地使用接口。"
    }), "\n", createVNode(_components.h3, {
      id: "什么是-api-测试",
      children: "什么是 API 测试？"
    }), "\n", createVNode(_components.p, {
      children: ["接口测试是", createVNode(_components.a, {
        href: "https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%B5%8B%E8%AF%95",
        children: "软件测试"
      }), "的一种，它包括两种测试类型：狭义上指的是直接针对", createVNode(_components.a, {
        href: "https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%8F%A3",
        children: "应用程序接口"
      }), "（下面使用缩写 API 指代，其中文简称为接口）的功能进行的测试；广义上指", createVNode(_components.a, {
        href: "https://zh.wikipedia.org/wiki/%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95",
        children: "集成测试"
      }), "中，通过调用 API 测试整体的功能完成度、可靠性、安全性与性能等指标。"]
    }), "\n", createVNode(_components.p, {
      children: "API Best Practice:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "API 定义遵循 RESTFUL API 风格，语意化的 URI 定义，准确的 HTTP 状态码，通过 API 的定义就可以知道资源间的关系"
      }), "\n", createVNode(_components.li, {
        children: "配有详细且准确的 API 文档（如 Swagger 文档）"
      }), "\n", createVNode(_components.li, {
        children: ["对外的 API 可以包含版本号以快速迭代（如 ", createVNode(_components.a, {
          href: "https://thoughtworks.com/v1/users/%EF%BC%89",
          children: "https://thoughtworks.com/v1/users/）"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "api-测试与测试四象限",
      children: "API 测试与测试四象限"
    }), "\n", createVNode(_components.p, {
      children: "测试四象限中不同象限的测试，其测试目的跟测试策略也不同，API 测试主要位于第二、第四象限"
    }), "\n", createVNode(_components.h3, {
      id: "api-测试与测试金字塔",
      children: "API 测试与测试金字塔"
    }), "\n", createVNode(_components.p, {
      children: "API 测试在测试金子塔中处于一个相对靠上的位置，主要站在系统、服务边界来测试功能和业务逻辑，执行时机是在服务完成构建、部署到测试环境之后再执行、验证。"
    }), "\n", createVNode(_components.h3, {
      id: "api-测试类型",
      children: "API 测试类型"
    }), "\n", createVNode(_components.p, {
      children: "功能测试"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "正确性测试"
      }), "\n", createVNode(_components.li, {
        children: "异常处理"
      }), "\n", createVNode(_components.li, {
        children: "内部逻辑"
      }), "\n", createVNode(_components.li, {
        children: "……"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "非功能测试"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "性能"
      }), "\n", createVNode(_components.li, {
        children: "安全"
      }), "\n", createVNode(_components.li, {
        children: "……"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "api-测试步骤",
      children: "API 测试步骤"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "发送请求"
      }), "\n", createVNode(_components.li, {
        children: "得到响应"
      }), "\n", createVNode(_components.li, {
        children: "验证响应结果"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "api-功能测试设计",
      children: "API 功能测试设计"
    }), "\n", createVNode(_components.p, {
      children: "设计理论"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "正面"
      }), "\n", createVNode(_components.li, {
        children: "负面"
      }), "\n", createVNode(_components.li, {
        children: "异常处理"
      }), "\n", createVNode(_components.li, {
        children: "内部逻辑"
      }), "\n", createVNode(_components.li, {
        children: "……"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "测试方法"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "等价类划分"
      }), "\n", createVNode(_components.li, {
        children: "边界值"
      }), "\n", createVNode(_components.li, {
        children: "错误推断"
      }), "\n", createVNode(_components.li, {
        children: "……"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "api-非功能测试设计",
      children: "API 非功能测试设计"
    }), "\n", createVNode(_components.p, {
      children: "安全测试"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "随机测试"
      }), "\n", createVNode(_components.li, {
        children: "SQL 注入"
      }), "\n", createVNode(_components.li, {
        children: "XSS"
      }), "\n", createVNode(_components.li, {
        children: "……"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "性能测试"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "性能瓶颈"
      }), "\n", createVNode(_components.li, {
        children: "稳定性测试"
      }), "\n", createVNode(_components.li, {
        children: "……"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "api-测试工具",
      children: "API 测试工具"
    }), "\n", createVNode(_components.p, {
      children: "API 请求工具"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "CURL"
      }), "\n", createVNode(_components.li, {
        children: "Soap UI"
      }), "\n", createVNode(_components.li, {
        children: "Postman"
      }), "\n", createVNode(_components.li, {
        children: "Swagger UI"
      }), "\n", createVNode(_components.li, {
        children: "……"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Http proxy 工具"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Fiddler"
      }), "\n", createVNode(_components.li, {
        children: "Charles"
      }), "\n", createVNode(_components.li, {
        children: "……"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "API 性能测试工具"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "ab(apache bench)"
      }), "\n", createVNode(_components.li, {
        children: "Jmeter"
      }), "\n", createVNode(_components.li, {
        children: "……"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
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

const url = "src/blog/zh-cn/API-Automation-Testing/Introduction_of_API_Test.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/Introduction_of_API_Test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/API-Automation-Testing/Introduction_of_API_Test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
