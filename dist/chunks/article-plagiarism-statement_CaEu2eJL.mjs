import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Declaration Regarding Plagiarism of My Articles",
  "description": "This blog post is a statement on the plagiarism of my articles.",
  "date": "2023-12-06T06:22:50.000Z",
  "author": "nao.deng",
  "tags": ["Article copyright"],
  "categories": ["Others"],
  "series": ["Others"],
  "cover": "./article-plagiarism-statement-cover.png"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    img: "img",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Dear readers,"
    }), "\n", createVNode(_components.p, {
      children: "Recently, while checking the indexing status of my personal blog articles on search engines, I regret to inform you about a disheartening discovery. I found that my blog articles were blatantly plagiarized by a CSDN blogger who not only copied them verbatim but also failed to provide proper attribution."
    }), "\n", createVNode(_components.p, {
      children: "I am angered and disappointed by this unethical behavior. I have consistently strived to deliver original and valuable content to all of you, and such plagiarism is a severe disrespect to my hard work and dedication. To protect my rights, I find it necessary to issue this declaration to ensure everyone is aware of the facts."
    }), "\n", createVNode(_components.p, {
      children: "Firstly, I want to make it clear that I vehemently oppose all forms of plagiarism and infringement. My blog is my personal creative space, intended to be a platform for sharing and communication rather than a target for unauthorized appropriation."
    }), "\n", createVNode(_components.p, {
      children: "Upon confirming the actions of the CSDN blogger, I feel deep regret and have decided to take all necessary legal measures to safeguard my legitimate rights. Simultaneously, I call upon all bloggers and creators to collaborate in maintaining a positive creative environment and eradicating instances of plagiarism."
    }), "\n", createVNode(_components.p, {
      children: "Lastly, I want to express my gratitude to all the readers who have supported me throughout. Your support fuels my creativity and empowers me to overcome challenges. I will continue to deliver authentic and valuable content for all of you."
    }), "\n", createVNode(_components.p, {
      children: ["Plagiarized article link:", createVNode(_components.a, {
        href: "https://blog.csdn.net/2301_76387166?type=blog",
        children: "https://blog.csdn.net/2301_76387166?type=blog"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/H4Nwzj.png",
        alt: " "
      })
    }), "\n", createVNode(_components.p, {
      children: "I have contacted CSDN to take it down."
    }), "\n", createVNode(_components.p, {
      children: "Thank you once again for your attention and support."
    }), "\n", createVNode(_components.p, {
      children: "Sincerely."
    })]
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

const url = "src/blog/en/Others/article-plagiarism-statement.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Others/article-plagiarism-statement.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/en/Others/article-plagiarism-statement.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
