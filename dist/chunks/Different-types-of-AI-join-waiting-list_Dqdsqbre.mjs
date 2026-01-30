import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "不同类型 AI 申请加入等待列表入口",
  "description": "文章介绍国内外不同类型 AI 申请加入等待列表的方法",
  "date": "2023-03-22T00:00:00.000Z",
  "author": "nao.deng",
  "cover": "./Different-types-of-AI-join-waiting-list-cover.png",
  "tags": ["AI in Testing"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "google-bard",
    "text": "Google Bard"
  }, {
    "depth": 2,
    "slug": "百度文心一言",
    "text": "百度文心一言"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "google-bard",
      children: "Google Bard"
    }), "\n", createVNode(_components.p, {
      children: "Google Bard 进入公开测试版。测试申请中~~~"
    }), "\n", createVNode(_components.p, {
      children: ["申请链接：", createVNode(_components.a, {
        href: "https://bard.google.com/",
        children: "https://bard.google.com/"
      })]
    }), "\n", createVNode(_components.p, {
      children: "谷歌发布 Bard，这是其在创建人工智能竞赛中的竞争对手推出 ChatGPT 之后的放的大招。"
    }), "\n", createVNode(_components.p, {
      children: "经过多年的谨慎开发，这家互联网巨头将授予用户访问聊天机器人的权限，以追逐竞争对手 OpenAI 和微软的引人注目的首次亮相之后的惊艳表现。"
    }), "\n", createVNode(_components.h2, {
      id: "百度文心一言",
      children: "百度文心一言"
    }), "\n", createVNode(_components.p, {
      children: "百度于 3 月 16 日正式公布大语言模型“文心一言”，这是一款基于人工智能技术的智能对话系统，可进行语义理解、智能问答和情感交流等多种形式的对话。"
    }), "\n", createVNode(_components.p, {
      children: "3 月 16 日起，首批用户即可通过邀请测试码在文心一言官网体验产品，后续将陆续开放给更多用户。\n此外，百度智能云即将面向企业客户开放文心一言 API 接口调用服务。"
    }), "\n", createVNode(_components.p, {
      children: "3 月 16 日起正式开放预约，搜索“百度智能云”进入官网，可申请加入文心一言云服务测试。"
    }), "\n", createVNode(_components.p, {
      children: ["申请链接：", createVNode(_components.a, {
        href: "https://yiyan.baidu.com/welcome",
        children: "https://yiyan.baidu.com/welcome"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["合作申请链接：", createVNode(_components.a, {
        href: "https://cloud.baidu.com/survey_summit/wenxin.html?track=C856571",
        children: "https://cloud.baidu.com/survey_summit/wenxin.html?track=C856571"
      })]
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

const url = "src/blog/zh-cn/Others/Different-types-of-AI-join-waiting-list.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/Different-types-of-AI-join-waiting-list.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/Different-types-of-AI-join-waiting-list.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
