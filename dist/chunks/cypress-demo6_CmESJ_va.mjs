import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "Cypress UI 自动化测试框架学习（6）- 用例编辑和脚本录制工具 Cypress Studio 介绍",
  "description": "文章介绍 UI 自动化测试框架学习（6）- 用例编辑和脚本录制工具 Cypress Studio 介绍",
  "date": "2022-05-13T00:00:00.000Z",
  "author": "nao.deng",
  "cover": "./cypress-demo6-cover.png",
  "tags": ["Cypress", "UI Testing"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "概述",
    "text": "概述"
  }, {
    "depth": 2,
    "slug": "使用-cypress-studio",
    "text": "使用 Cypress Studio"
  }, {
    "depth": 3,
    "slug": "扩展测试",
    "text": "扩展测试"
  }, {
    "depth": 4,
    "slug": "第-1-步---运行用例",
    "text": "第 1 步 - 运行用例"
  }, {
    "depth": 4,
    "slug": "第-2-步---启动-cypress-studio",
    "text": "第 2 步 - 启动 Cypress Studio"
  }, {
    "depth": 4,
    "slug": "第-3-步---与应用程序交互",
    "text": "第 3 步 - 与应用程序交互"
  }, {
    "depth": 4,
    "slug": "生成的测试代码",
    "text": "生成的测试代码"
  }, {
    "depth": 3,
    "slug": "添加新测试",
    "text": "添加新测试"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Cypress Studio 提供了一种在测试运行程序中生成测试的可视化方法，通过记录与被测应用程序的交互。支持.click（）、.type（）、.check（）、.uncheck（）和.select（）Cypress 命令，这些命令将在与 Cypress Studio 内部的 DOM 交互时生成测试代码"
    }), "\n", createVNode(_components.p, {
      children: "通过阅读文章你会学到什么："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "如何使用 Cypress Studio 以交互方式扩展测试"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "如何使用 Cypress Studio 以交互方式添加新测试"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Cypress Studio 通过记录与"
      }), " 被测应用程序的交互，提供了一种在 Test Runner 中生成测试的可视化方式。"]
    }), "\n", createVNode(_components.p, {
      children: ["支持、", createVNode(_components.code, {
        children: ".click()"
      }), "、", createVNode(_components.code, {
        children: ".type()"
      }), "、和 Cypress 命令 ", createVNode(_components.code, {
        children: ".check()"
      }), " ，并在与 Cypress Studio 内部的 DOM 交互时生成测试代码。您还可以通过右键单击要断言的元素来生成断言。 ", createVNode(_components.code, {
        children: ".uncheck()"
      }), " ", createVNode(_components.code, {
        children: ".select()"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "使用-cypress-studio",
      children: "使用 Cypress Studio"
    }), "\n", createVNode(_components.p, {
      children: ["Cypress Studio 是一项实验性功能，可以通过将 experimentalStudio 属性添加到您的配置文件来启用（ ", createVNode(_components.code, {
        children: "cypress.json"
      }), " 默认情况下）。"]
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
            children: "{ \"experimentalStudio\": true}"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Cypress Real World App (RWA) 是一个开源项目，它实现了一个支付应用程序，以展示 Cypress 测试方法、模式和工作流程的实际使用情况。下面将使用它来演示 Cypress Studio 的功能。"
    }), "\n", createVNode(_components.h3, {
      id: "扩展测试",
      children: "扩展测试"
    }), "\n", createVNode(_components.p, {
      children: "您可以扩展任何预先存在的测试，或者通过使用以下测试脚手架在您的 integrationFolder（默认情况下）中创建一个新测试来开始。"
    }), "\n", createVNode(_components.h4, {
      id: "第-1-步---运行用例",
      children: "第 1 步 - 运行用例"
    }), "\n", createVNode(_components.p, {
      children: "我们将使用 Cypress Studio 执行“新交易”用户流程。首先，启动 Test Runner 并运行在上一步中创建的用例。"
    }), "\n", createVNode(_components.p, {
      children: "[image:F5CF37A4-27C0-4A6A-82DA-52C19191EB41-665-000000B8AF4F75E1/640.jpeg]"
    }), "\n", createVNode(_components.h4, {
      id: "第-2-步---启动-cypress-studio",
      children: "第 2 步 - 启动 Cypress Studio"
    }), "\n", createVNode(_components.p, {
      children: "测试完成运行后，将鼠标悬停在命令日志中的测试上以显示“Add commands to Test”按钮。"
    }), "\n", createVNode(_components.p, {
      children: "单击“Add Commands to Test”将启动 Cypress Studio。"
    }), "\n", createVNode(_components.p, {
      children: "Cypress Studio 直接与 命令日志集成。"
    }), "\n", createVNode(_components.p, {
      children: "[image:7C04963F-638B-492C-B6D1-0C2C6FD31021-665-000000B8AF4F2B69/_640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: ["Cypress 将自动执行所有挂钩和当前存在的测试代码，然后可以从该点开始扩展测试（例如，我们登录到 ", createVNode(_components.code, {
        children: "beforeEach"
      }), " 块内的应用程序）。"]
    }), "\n", createVNode(_components.p, {
      children: "接下来，Test Runner 将单独执行测试，并在测试中的最后一条命令后暂停。"
    }), "\n", createVNode(_components.p, {
      children: "[image:E57D4269-75B6-49C2-9EC7-CB2BA527070D-665-000000B8AF4ECFAF/__640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "现在，我们可以开始更新测试以在用户之间创建新事务。"
    }), "\n", createVNode(_components.h4, {
      id: "第-3-步---与应用程序交互",
      children: "第 3 步 - 与应用程序交互"
    }), "\n", createVNode(_components.p, {
      children: "要记录操作，请开始与应用程序交互。在这里，我们将单击标题右侧的“新建”按钮，结果我们将看到我们的单击记录在命令日志中。"
    }), "\n", createVNode(_components.p, {
      children: "[image:B55CC01A-E8EF-4B70-9687-CC8A6423AD9A-665-000000B8AF4E893E/___640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "接下来，我们可以开始输入我们想要支付的用户名。"
    }), "\n", createVNode(_components.p, {
      children: "[image:F647E6CB-2456-4602-84CB-B37B2B313DCF-665-000000B8AF4E4B07/____640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "一旦我们看到名字出现在结果中，我们想要添加一个断言来确保我们的搜索功能正常工作。右键单击用户名将弹出一个菜单，我们可以从中添加断言以检查元素是否包含正确的文本（用户名）。"
    }), "\n", createVNode(_components.p, {
      children: "[image:F347B11C-142A-4EFC-821F-9B3F36B68119-665-000000B8AF4E15D4/_____640.jpeg]\n然后，我们可以单击该用户以进入下一个屏幕。我们将通过单击并输入金额和描述输入来完成交易表格。"
    }), "\n", createVNode(_components.p, {
      children: "[image:1A5CFBED-CD31-4912-90A1-960E05992DC7-665-000000B8AF4DE240/______640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "注意命令日志中生成的命令。"
    }), "\n", createVNode(_components.p, {
      children: "现在是时候完成交易了。您可能已经注意到，在我们输入输入之前，“支付”按钮已被禁用。为了确保我们的表单验证正常工作，让我们添加一个断言以确保启用“支付”按钮。"
    }), "\n", createVNode(_components.p, {
      children: "[image:F3E5EBF7-FB37-4A50-AF65-607939F664F0-665-000000B8AF4DAF00/_______640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "最后，我们将单击“支付”按钮，并显示我们新交易的确认页面。"
    }), "\n", createVNode(_components.p, {
      children: "[image:AFF8F1D8-4FDC-42DF-BEEA-EDB769B0588A-665-000000B8AF4D783F/________640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "要放弃交互，请单击“取消”按钮退出 Cypress Studio。如果对与应用程序的交互感到满意，请单击“保存命令”，测试代码将保存到您的规范文件中。或者，您可以选择“复制”按钮以将生成的命令复制到剪贴板。"
    }), "\n", createVNode(_components.h4, {
      id: "生成的测试代码",
      children: "生成的测试代码"
    }), "\n", createVNode(_components.p, {
      children: "查看我们的测试代码，我们可以看到在点击“Save Commands”后测试更新了我们在 Cypress Studio 中记录的操作。"
    }), "\n", createVNode(_components.h3, {
      id: "添加新测试",
      children: "添加新测试"
    }), "\n", createVNode(_components.p, {
      children: ["您可以通过单击我们定义的块上的“Add New Test”来向任何现有 ", createVNode(_components.code, {
        children: "describe"
      }), " 或块添加新测试。 ", createVNode(_components.code, {
        children: "context "
      }), " ", createVNode(_components.code, {
        children: " describe"
      })]
    }), "\n", createVNode(_components.p, {
      children: "[image:0A8CA77E-9AEF-45B9-9B70-F15C01983DFF-665-000000B8AF4D4166/_________640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "我们被启动到 Cypress Studio 并可以开始与我们的应用程序交互以生成测试。"
    }), "\n", createVNode(_components.p, {
      children: "对于此测试，我们将添加一个新的银行帐户。我们的互动如下："
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "点击左侧导航中的“银行账户”"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "[image:02219635-D587-4A52-BD45-738DA52F08E2-665-000000B8AF4D0E28/__________640.jpeg]"
    }), "\n", createVNode(_components.ol, {
      start: "2",
      children: ["\n", createVNode(_components.li, {
        children: "点击银行账户页面上的“创建”按钮"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "[image:42C66725-A8B3-4ED6-9472-C0A0FF5AB64A-665-000000B8AF4CD946/___________640.jpeg]"
    }), "\n", createVNode(_components.ol, {
      start: "3",
      children: ["\n", createVNode(_components.li, {
        children: "填写银行账户信息"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "[image:2E4443DE-C9A6-4D7A-84BB-6E6A5AA3F476-665-000000B8AF4CA262/____________640.jpeg]"
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: "点击“保存”按钮"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "[image:655AAC92-065E-438E-B62C-145A771AD889-665-000000B8AF4C6D6F/_____________640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "要放弃交互，请单击“取消”按钮退出 Cypress Studio。"
    }), "\n", createVNode(_components.p, {
      children: "如果对与应用程序的交互感到满意，请单击“保存命令”，提示将询问测试名称。单击“保存测试”，测试将保存到文件中。"
    }), "\n", createVNode(_components.p, {
      children: "[image:A9CFD28A-A32C-42B5-97D7-7BD34A46D85F-665-000000B8AF4C390B/______________640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "保存后，该文件将在 Cypress 中再次运行。"
    }), "\n", createVNode(_components.p, {
      children: "[image:560BE965-9C4C-4E9A-A17F-4992200B053B-665-000000B8AF4BF3D8/_______________640.jpeg]"
    }), "\n", createVNode(_components.p, {
      children: "最后，查看我们的测试代码，我们可以看到点击“Save Commands”后测试更新了我们在 Cypress Studio 中记录的操作。"
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

const url = "src/blog/zh-cn/Others/cypress-demo6.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo6.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Others/cypress-demo6.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
