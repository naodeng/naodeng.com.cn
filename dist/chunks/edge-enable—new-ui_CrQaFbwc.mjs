import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "新技术分享：Mac OS 下 edge 浏览器开启新 UI",
  "description": "文章介绍 Mac OS 下 edge 浏览器开启新 UI",
  "date": "2023-02-15T00:00:00.000Z",
  "author": "nao.deng",
  "cover": "./edge-enable—new-ui-cover.png",
  "tags": ["Best Practices"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "打开 edge 浏览器"
      }), "\n", createVNode(_components.li, {
        children: ["在地址栏输入命令\n", createVNode(_components.code, {
          children: "edge://flags/"
        })]
      }), "\n", createVNode(_components.li, {
        children: "在 flags 的页面输入 11 进行搜索"
      }), "\n", createVNode(_components.li, {
        children: "在搜索结果下选择“Show Windows 11 visual effects in title bar and toolbar”将状态变更为启用"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://raw.githubusercontent.com/waitnoww/hexoblogimg/aceda0b251c09e0527f5491c1b516a02c7464b4e/img1/WX20230215-221108%402x.png",
        alt: "img"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "重启浏览器，即可看到新的 edge 浏览器 UI"
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

const url = "src/blog/zh-cn/Others/edge-enable%E2%80%94new-ui.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/edge-enable—new-ui.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/edge-enable—new-ui.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
