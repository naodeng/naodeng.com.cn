import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Cypress UI 自动化测试框架学习（5）- 命令大全",
  "description": "文章介绍 UI 自动化测试框架学习（5）- 命令大全",
  "date": "2022-05-12T00:00:00.000Z",
  "author": "nao.deng",
  "cover": "./cypress-demo5-cover.png",
  "tags": ["Cypress", "UI Testing"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "cypress-ui-自动化测试框架学习5--命令大全",
    "text": "Cypress UI 自动化测试框架学习（5）- 命令大全"
  }, {
    "depth": 3,
    "slug": "命令大全",
    "text": "命令大全"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "cypress-ui-自动化测试框架学习5--命令大全",
      children: "Cypress UI 自动化测试框架学习（5）- 命令大全"
    }), "\n", createVNode(_components.h3, {
      id: "命令大全",
      children: "命令大全"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "and：创建断言"
      }), "\n", createVNode(_components.li, {
        children: "as：创建别名"
      }), "\n", createVNode(_components.li, {
        children: "blur：失去焦点"
      }), "\n", createVNode(_components.li, {
        children: "check：选中 check 或者 radio"
      }), "\n", createVNode(_components.li, {
        children: "children：获取一组 DOM 元素中每个元素的子元素"
      }), "\n", createVNode(_components.li, {
        children: "clear：清除 input 或者 textarea 的值"
      }), "\n", createVNode(_components.li, {
        children: "clearCookie：清除特定的浏览器 cookie"
      }), "\n", createVNode(_components.li, {
        children: "clearCookies：清除浏览器的所有 cookie"
      }), "\n", createVNode(_components.li, {
        children: "clearLocalStorage：清除 localstorage 的数据"
      }), "\n", createVNode(_components.li, {
        children: "click：点击 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "clock：覆盖全局与时间相关的函数"
      }), "\n", createVNode(_components.li, {
        children: "closest：获取与选择器匹配的第一个 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "contains：获取包含文本的 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "dblclick：双击 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "debug：设置调试器并记录上一个命令产生的内容"
      }), "\n", createVNode(_components.li, {
        children: ["document：获取 ", createVNode(_components.code, {
          children: "window.document"
        }), " 对象"]
      }), "\n", createVNode(_components.li, {
        children: "each：迭代数组结构"
      }), "\n", createVNode(_components.li, {
        children: "end：结束一系列命令"
      }), "\n", createVNode(_components.li, {
        children: "eq：在元素数组中获取特定索引的 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "exec：执行系统命令"
      }), "\n", createVNode(_components.li, {
        children: "filter：获取特定选择器匹配的元素"
      }), "\n", createVNode(_components.li, {
        children: "find：查找特定选择器的特定后代元素"
      }), "\n", createVNode(_components.li, {
        children: "first：获取一组 DOM 元素中的第一个 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "fixture：加载文件中的数据集"
      }), "\n", createVNode(_components.li, {
        children: "focus：使一个 DOM 元素获取焦点"
      }), "\n", createVNode(_components.li, {
        children: "focused：获取当前获取焦点的 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "get：通过选择器或者别名获取一个或者多个 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "getCookie：获取浏览器的特定 cookie"
      }), "\n", createVNode(_components.li, {
        children: "getCookies：获取浏览器的所有 cookie"
      }), "\n", createVNode(_components.li, {
        children: "go：前进或者后退"
      }), "\n", createVNode(_components.li, {
        children: "hash：获取当前页面地址的哈希值"
      }), "\n", createVNode(_components.li, {
        children: ["hover：", createVNode(_components.strong, {
          children: "不存在这个命令"
        })]
      }), "\n", createVNode(_components.li, {
        children: "invoke：在前边生成的主题上调用函数"
      }), "\n", createVNode(_components.li, {
        children: "its：获取前边生成的主题的属性值"
      }), "\n", createVNode(_components.li, {
        children: "last：获取一组 DOM 元素的最后一个 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: ["location：获取活动页面的 ", createVNode(_components.code, {
          children: "window.location"
        }), " 对象"]
      }), "\n", createVNode(_components.li, {
        children: "log：打印 cypress 日志信息"
      }), "\n", createVNode(_components.li, {
        children: "next：获取紧接的下一个兄弟 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "nextAll：获取所有兄弟 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "nextUntil：获取一组匹配的 DOM 元素中的每个后续兄弟元素，不包括提供的元素"
      }), "\n", createVNode(_components.li, {
        children: "not：过滤 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "parent：获取父元素"
      }), "\n", createVNode(_components.li, {
        children: "parents：获取所有的父元素"
      }), "\n", createVNode(_components.li, {
        children: "parentsUntil：获取所有的父元素，不包括提供的元素"
      }), "\n", createVNode(_components.li, {
        children: "pause：暂停执行 cypress 命令"
      }), "\n", createVNode(_components.li, {
        children: "prev：获取前一个兄弟节点"
      }), "\n", createVNode(_components.li, {
        children: "prevAll：获取前边的所有兄弟节点"
      }), "\n", createVNode(_components.li, {
        children: "prevUntil：获取前边所有的兄弟节点，不包括提供的元素"
      }), "\n", createVNode(_components.li, {
        children: "readFile：读取文件内容"
      }), "\n", createVNode(_components.li, {
        children: "reload：重新加载页面"
      }), "\n", createVNode(_components.li, {
        children: "request：发送 HTTP 请求"
      }), "\n", createVNode(_components.li, {
        children: "root：获取页面根节点"
      }), "\n", createVNode(_components.li, {
        children: "route：管理网络请求的行为"
      }), "\n", createVNode(_components.li, {
        children: "screenshot：生成截图"
      }), "\n", createVNode(_components.li, {
        children: "scrollIntoView：将元素滚动到视图中"
      }), "\n", createVNode(_components.li, {
        children: "scrollTo：滚动到特定位置"
      }), "\n", createVNode(_components.li, {
        children: "select：选择 select 中的 option"
      }), "\n", createVNode(_components.li, {
        children: ["server：启动服务器开始讲响应路由到 ", createVNode(_components.code, {
          children: "cy.route()"
        }), " 和 ", createVNode(_components.code, {
          children: "cy.request()"
        })]
      }), "\n", createVNode(_components.li, {
        children: "setCookie：设置浏览器 cookie"
      }), "\n", createVNode(_components.li, {
        children: ["should：创建断言，同 ", createVNode(_components.code, {
          children: "and()"
        })]
      }), "\n", createVNode(_components.li, {
        children: "siblings：获取兄弟 DOM 元素"
      }), "\n", createVNode(_components.li, {
        children: "spread：将数组扩展为多个参数"
      }), "\n", createVNode(_components.li, {
        children: "spy：包装方法，记录函数的调用和参数"
      }), "\n", createVNode(_components.li, {
        children: "stub：替换函数，记录其用法并控制其行为"
      }), "\n", createVNode(_components.li, {
        children: "submit：提交一个表单"
      }), "\n", createVNode(_components.li, {
        children: ["task：通过 ", createVNode(_components.code, {
          children: "task"
        }), " 插件，在 Node.js 中执行代码"]
      }), "\n", createVNode(_components.li, {
        children: "then：使用上一个命令产生的结果"
      }), "\n", createVNode(_components.li, {
        children: "tick：移动时间"
      }), "\n", createVNode(_components.li, {
        children: ["title：获取活动页面的 ", createVNode(_components.code, {
          children: "document.title"
        })]
      }), "\n", createVNode(_components.li, {
        children: "trigger：触发 DOM 元素上的事件"
      }), "\n", createVNode(_components.li, {
        children: "type：给 DOM 元素输入内容"
      }), "\n", createVNode(_components.li, {
        children: "uncheck：取消选中复选框"
      }), "\n", createVNode(_components.li, {
        children: "url：获取当前活动页面的 URL"
      }), "\n", createVNode(_components.li, {
        children: "viewport：控制应用程序的屏幕大小和方向"
      }), "\n", createVNode(_components.li, {
        children: "visit：访问远程 URL"
      }), "\n", createVNode(_components.li, {
        children: "wait：等待方法"
      }), "\n", createVNode(_components.li, {
        children: ["window：获取当前活动窗口的 ", createVNode(_components.code, {
          children: "window"
        }), " 对象"]
      }), "\n", createVNode(_components.li, {
        children: "within：将后续命令限制在此元素内"
      }), "\n", createVNode(_components.li, {
        children: ["wrap：产生传递给 ", createVNode(_components.code, {
          children: ".wrap()"
        }), " 的对象"]
      }), "\n", createVNode(_components.li, {
        children: "writeFile：写入指定内容到文件"
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

const url = "src/blog/zh-cn/Others/cypress-demo5.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo5.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo5.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
