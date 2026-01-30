import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "关于我的文章被抄袭的声明",
  "description": "这篇博文是关于我的文章被抄袭的声明。",
  "date": "2023-12-06T06:22:50.000Z",
  "author": "nao.deng",
  "tags": ["文章版权"],
  "categories": ["其他"],
  "series": ["其他"],
  "cover": "./article-plagiarism-statement-cover.png"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "亲爱的读者们，"
    }), "\n", createVNode(_components.p, {
      children: "最近，在搜索引擎上检查个人博客文章的收录情况时，我不得不向大家通报一件令人痛心的事情。我发现我的博客文章竟然被一位 CSDN 博主原封不动地抄袭复制到他的博客上，而且更令人遗憾的是，他并未注明出处。"
    }), "\n", createVNode(_components.p, {
      children: "对于这种不道德的行为，我感到愤怒和失望。我一直努力为大家提供原创、有价值的内容，而这样的抄袭行为是对我的辛勤努力和付出的严重不尊重。为了捍卫自己的权益，我认为有必要发布这篇声明，让大家了解事实真相。"
    }), "\n", createVNode(_components.p, {
      children: "首先，我要明确表示，我坚决反对一切形式的抄袭和侵权行为。我运营的博客是我的个人创作空间，我希望它能成为分享和交流的平台，而不是被他人肆意剽窃的对象。"
    }), "\n", createVNode(_components.p, {
      children: "在确认了 CSDN 博主的行为后，我深感遗憾，也决定采取一切必要的法律手段来维护自己的合法权益。同时，我呼吁所有博主和创作者共同努力，维护良好的创作环境，杜绝抄袭现象。"
    }), "\n", createVNode(_components.p, {
      children: "最后，我要感谢一直以来支持我的读者们。你们的支持是我创作的动力，也是我战胜困难的力量。我会继续为大家带来真实、有价值的内容。"
    }), "\n", createVNode(_components.p, {
      children: ["抄袭博客链接：", createVNode(_components.a, {
        href: "https://blog.csdn.net/2301_76387166?type=blog",
        children: "https://blog.csdn.net/2301_76387166?type=blog"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/H4Nwzj.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "我已经联系 CSDN 下架。"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "再次感谢大家的关注和支持。"
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

const url = "src/blog/zh-cn/Others/article-plagiarism-statement.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/article-plagiarism-statement.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/article-plagiarism-statement.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
