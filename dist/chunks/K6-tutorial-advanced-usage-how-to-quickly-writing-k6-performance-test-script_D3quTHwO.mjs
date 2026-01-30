import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D4o_drMZ.mjs';
import 'clsx';

/*markdownlint-disable MD045*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD033*/
/*markdownlint-disable MD045*/
const frontmatter = {
  "title": "K6 性能测试教程 - 进阶用法：如何快速编写 K6 性能测试脚本",
  "description": "这篇博文深入介绍了在进行 K6 性能测试时，除了传统的 JavaScript 编写脚本方式外，还介绍了 K6 提供的多种快捷方式。首先，通过 K6 提供的 Test Builder 测试生成器工具，读者能够轻松快捷地生成性能测试脚本，简化了脚本编写过程。其次，博文介绍了使用 K6 Recorder 录制器的方法，通过录制操作生成脚本，省去手动编写的步骤。最后，读者还能了解到使用浏览器开发者工具获取 HAR 文件，并通过 har-to-k6 工具将其转换为 K6 脚本的技巧。通过本文，读者将更全面地了解 K6 性能测试工具的灵活性和多样化的脚本编写方式。",
  "date": "2024-01-19T05:10:00.000Z",
  "author": "nao.deng",
  "tags": ["K6", "Performance Testing"],
  "categories": ["性能测试", "k6"],
  "series": ["K6 性能测试教程"],
  "cover": "./K6-tutorial-advanced-usage-how-to-quickly-writing-k6-performance-test-script-cover.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "如何快速编写-k6-性能测试脚本",
    "text": "如何快速编写 K6 性能测试脚本"
  }, {
    "depth": 3,
    "slug": "使用-k6-提供的-test-builder-测试生成器工具来编写脚本",
    "text": "使用 K6 提供的 Test builder 测试生成器工具来编写脚本"
  }, {
    "depth": 4,
    "slug": "安装-test-builder-测试生成器",
    "text": "安装 Test builder 测试生成器"
  }, {
    "depth": 4,
    "slug": "如何使用-test-builder-测试生成器",
    "text": "如何使用 Test builder 测试生成器"
  }, {
    "depth": 4,
    "slug": "获取-test-builder-测试生成器生成的脚本",
    "text": "获取 Test builder 测试生成器生成的脚本"
  }, {
    "depth": 4,
    "slug": "运行-test-builder-测试生成器生成的脚本",
    "text": "运行 Test builder 测试生成器生成的脚本"
  }, {
    "depth": 4,
    "slug": "其他-test-builder-测试生成器的功能",
    "text": "其他 Test builder 测试生成器的功能"
  }, {
    "depth": 3,
    "slug": "使用-k6-recorder-录制器录制脚本",
    "text": "使用 K6 Recorder 录制器录制脚本"
  }, {
    "depth": 4,
    "slug": "安装-k6-recorder-录制器",
    "text": "安装 K6 Recorder 录制器"
  }, {
    "depth": 4,
    "slug": "如何使用-k6-recorder-录制器",
    "text": "如何使用 K6 Recorder 录制器"
  }, {
    "depth": 3,
    "slug": "使用浏览器开发者工具和-har-to-k6-工具生成-k6-脚本",
    "text": "使用浏览器开发者工具和 har-to-k6 工具生成 K6 脚本"
  }, {
    "depth": 4,
    "slug": "可以获取-har-文件的浏览器和工具",
    "text": "可以获取 HAR 文件的浏览器和工具"
  }, {
    "depth": 4,
    "slug": "如何使用浏览器开发者工具获取-har-文件",
    "text": "如何使用浏览器开发者工具获取 HAR 文件"
  }, {
    "depth": 4,
    "slug": "使用-har-to-k6-进行转换-har-文件",
    "text": "使用 har-to-k6 进行转换 HAR 文件"
  }, {
    "depth": 2,
    "slug": "参考文档",
    "text": "参考文档"
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
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "如何快速编写-k6-性能测试脚本",
      children: "如何快速编写 K6 性能测试脚本"
    }), "\n", createVNode(_components.p, {
      children: "我们除了可以使用 JavaScript 编写 K6 性能测试脚本外，K6 还提供了多种快捷的方式来编写性能测试脚本。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1.使用 K6 提供的 Test builder 测试生成器工具来编写脚本"
      }), "\n", createVNode(_components.li, {
        children: "2.使用 K6 Recorder 录制器录制脚本"
      }), "\n", createVNode(_components.li, {
        children: "3.使用 浏览器开发者工具获取 HAR 文件后使用 har-to-k6 工具将 HAR 文件转换为 K6 脚本"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "下面将分别介绍这三种方式。"
    }), "\n", createVNode(_components.h3, {
      id: "使用-k6-提供的-test-builder-测试生成器工具来编写脚本",
      children: "使用 K6 提供的 Test builder 测试生成器工具来编写脚本"
    }), "\n", createVNode(_components.p, {
      children: "k6 的 Test builder 测试生成器提供了一个图形界面，可根据您的输入生成 k6 测试脚本。然后，您可以复制测试脚本并从 CLI 运行测试。"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["Test builder 测试生成器目前还是一个实验性的功能，可能会在未来的版本中发生变化。大家可以查看官方文档：", createVNode(_components.a, {
          href: "https://k6.io/docs/using-k6/test-builder/",
          children: "https://k6.io/docs/using-k6/test-builder/"
        }), "获取更多信息"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "安装-test-builder-测试生成器",
      children: "安装 Test builder 测试生成器"
    }), "\n", createVNode(_components.p, {
      children: "Test builder 不需要安装，它是 Grafana Cloud k6 提供的一个功能，可以在浏览器中使用。"
    }), "\n", createVNode(_components.p, {
      children: "需要注册一个 Grafana Cloud k6 账号，然后登录 Grafana Cloud。"
    }), "\n", createVNode(_components.p, {
      children: "如何进入 Test builder 测试生成器界面："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "登录进入 Grafana Cloud 首页"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/66TXQ3.png",
        alt: " "
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "依次点击左侧菜单栏上的 Testing & synthetics--->Performance--->Projects"
      }), "\n", createVNode(_components.li, {
        children: ["然后选择 default project 或者新建一个 project，进入到项目的详情页面\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/Ynx49y.png",
          alt: " "
        })]
      }), "\n", createVNode(_components.li, {
        children: ["点击页面上的 Start testing 按钮，然后再选择页面下的 Test builder，进入到 Test builder 测试生成器界面\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/GgzyK7.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "提醒：由于 Test builder 测试生成器是 Grafana Cloud 上登录进行使用，可能 Grafana Cloud 存储一些敏感数据，所以建议大家不要在生产环境中使用 Test builder 测试生成器。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "如何使用-test-builder-测试生成器",
      children: "如何使用 Test builder 测试生成器"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["1.在 Test builder 测试生成器界面，点击 Scenario_1 下的 Options 按钮进入到配置页面，配置测试场景的基本信息，如下图所示：\n", createVNode(_components.img, {
          src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/JvABl9.png",
          alt: " "
        })]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "可以看到场景配置页面提供了多种配置选项，可以根据自己的需求进行配置场景名称，执行器类型和不同的 UV 配置。"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["2.在 Test builder 测试生成器界面，点击 Scenario_1 下的 Requests 按钮进入到 Requests 管理页面，如下图所示：\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ohtOQD.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["3.点击页面下的 Request 按钮进入添加请求页面，如下图所示：\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/BFSEME.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["4.在添加请求页面，输入请求的 URL 地址，再根据实际情况添加请求的 headers 或请求的 body 或检查点等参数，然后点击页面上的 Create 按钮，完成性能场景的配置，如下图所示：\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/inCNCz.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "获取-test-builder-测试生成器生成的脚本",
      children: "获取 Test builder 测试生成器生成的脚本"
    }), "\n", createVNode(_components.p, {
      children: "在 Test builder 测试生成器界面，点击页面上的 Script 按钮，页面就会展示出 Test builder 测试生成器生成的脚本，如下图所示："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/rh3Qfr.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "可以看到 Test builder 测试生成器生成的脚本，是一个完整的 K6 测试脚本，可以直接复制到本地，然后使用 k6 运行该脚本。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "运行-test-builder-测试生成器生成的脚本",
      children: "运行 Test builder 测试生成器生成的脚本"
    }), "\n", createVNode(_components.p, {
      children: "在 Test builder 测试生成器界面，点击页面上的 Run Test 按钮，页面就会展示出 Test builder 测试生成器生成的脚本的运行结果，如下图所示："
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/yFuEyu.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "可以看到 Test builder 测试生成器生成的脚本运行的很详细的测试结果信息。"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "其他-test-builder-测试生成器的功能",
      children: "其他 Test builder 测试生成器的功能"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "也支持导入 HAR 文件生成测试脚本"
      }), "\n", createVNode(_components.li, {
        children: "也支持多个 scenario 场景的配置和一个 scenario 场景的多个请求的配置"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["更多关于 Test builder 测试生成器的内容，请参考官方文档：", createVNode(_components.a, {
        href: "https://grafana.com/docs/grafana-cloud/k6/author-run/test-builder/",
        children: "https://grafana.com/docs/grafana-cloud/k6/author-run/test-builder/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "使用-k6-recorder-录制器录制脚本",
      children: "使用 K6 Recorder 录制器录制脚本"
    }), "\n", createVNode(_components.p, {
      children: "K6 Recorder 录制器是 K6 提供的一个浏览器扩展程序，可以在浏览器中录制用户与 Web 应用程序的交互，并将其转换为 k6 测试脚本。"
    }), "\n", createVNode(_components.h4, {
      id: "安装-k6-recorder-录制器",
      children: "安装 K6 Recorder 录制器"
    }), "\n", createVNode(_components.p, {
      children: "K6 Recorder 录制器是一个浏览器扩展程序，可以在 Chrome 或 Firefox 中使用。您可以从 Chrome Web Store 或 Firefox Add-ons 页面安装它。"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Chrome Web Store 安装地址：", createVNode(_components.a, {
            href: "https://chrome.google.com/webstore/detail/grafana-k6-browser-record/fbanjfonbcedhifbgikmjelkkckhhidl",
            children: "https://chrome.google.com/webstore/detail/grafana-k6-browser-record/fbanjfonbcedhifbgikmjelkkckhhidl"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Firefox Add-ons 安装地址：", createVNode(_components.a, {
            href: "https://addons.mozilla.org/en-US/firefox/addon/grafana-k6-browser-recorder/",
            children: "https://addons.mozilla.org/en-US/firefox/addon/grafana-k6-browser-recorder/"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "安装完成后，就可以在浏览器中使用 K6 Recorder 录制器了。"
    }), "\n", createVNode(_components.h4, {
      id: "如何使用-k6-recorder-录制器",
      children: "如何使用 K6 Recorder 录制器"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: "在浏览器上点击打开 k6 Recorder 录制器扩展。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "2",
          children: ["\n", createVNode(_components.li, {
            children: "选择保存自动生成的脚本的位置。"
          }), "\n"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "要将其保存在本地计算机上，请选择”我不想在云中保存测试”(后面的例子我选择的这个选项)。"
          }), "\n", createVNode(_components.li, {
            children: ["要将其保存到任何 Grafana Cloud k6 项目中，请选择“登录”。\n", createVNode(_components.img, {
              src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/yj75Ef.png",
              alt: " "
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "3",
          children: ["\n", createVNode(_components.li, {
            children: ["选择保存脚本位置后，在当前浏览器选项卡输入测试网站地址，点击选择开始录制按钮以开始录制当前浏览器选项卡。\n", createVNode(_components.img, {
              src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/6NjHGS.png",
              alt: " "
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/KFMDWX.png",
        alt: " "
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "图中我打开了谷歌的首页并点击了搜索框，输入了 123，然后点击了搜索按钮，"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "4",
          children: ["\n", createVNode(_components.li, {
            children: "点击了 k6 Recorder 录制器的停止录制按钮停止录制。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "5",
          children: ["\n", createVNode(_components.li, {
            children: "将录制的文件取名保存在本地（我这里取名为 record-demo.har）。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "6",
          children: ["\n", createVNode(_components.li, {
            children: ["使用 har-to-k6 工具将 HAR 文件转换为 K6 脚本。\n", createVNode(_components.img, {
              src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/2nRtpW.png",
              alt: " "
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["har-to-k6 工具是一个命令行工具，可以将 HAR 文件转换为 k6 脚本。需要先通过 ", createVNode(_components.code, {
          children: "npm install -g har-to-k6"
        }), "安装 har-to-k6 工具，然后通过 ", createVNode(_components.code, {
          children: "har-to-k6 record-demo.har -O record-demo.js"
        }), "命令将 HAR 文件转换为 K6 脚本。"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "7",
          children: ["\n", createVNode(_components.li, {
            children: ["转换后的 K6 脚本部分截图如下所示：\n", createVNode(_components.img, {
              src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/ldC2kl.png",
              alt: " "
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "8",
          children: ["\n", createVNode(_components.li, {
            children: "大家可以根据自己的需求对转换后的 K6 脚本进行修改，然后使用 k6 运行该脚本。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "9",
          children: ["\n", createVNode(_components.li, {
            children: ["使用 k6 运行转换后的 K6 脚本，查看运行结果。\n", createVNode(_components.img, {
              src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/jUpYWj.png",
              alt: " "
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["更多关于 K6 Recorder 录制器的内容，请参考官方文档：", createVNode(_components.a, {
        href: "https://grafana.com/docs/k6/latest/using-k6/test-authoring/create-tests-from-recordings/using-the-browser-recorder/",
        children: "https://grafana.com/docs/k6/latest/using-k6/test-authoring/create-tests-from-recordings/using-the-browser-recorder/"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "使用浏览器开发者工具和-har-to-k6-工具生成-k6-脚本",
      children: "使用浏览器开发者工具和 har-to-k6 工具生成 K6 脚本"
    }), "\n", createVNode(_components.p, {
      children: "除了我们可以使用 K6 Recorder 录制器来录制脚本外，我们还可以使用浏览器开发者工具获取测试请求的 HAR 文件，然后使用 har-to-k6 工具转换 HAR 文件来生成 K6 脚本。"
    }), "\n", createVNode(_components.h4, {
      id: "可以获取-har-文件的浏览器和工具",
      children: "可以获取 HAR 文件的浏览器和工具"
    }), "\n", createVNode(_components.p, {
      children: "我们可以根据实际情况选择一个工具来记录 HAR 文件。市面上的很多浏览器和工具可以以 HAR 格式导出 HTTP 流量。大家常用的是："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Chrome 浏览器"
      }), "\n", createVNode(_components.li, {
        children: "Firefox 浏览器"
      }), "\n", createVNode(_components.li, {
        children: "Microsoft Edge 浏览器"
      }), "\n", createVNode(_components.li, {
        children: "Charles 代理抓包工具 (HTTP proxy/recorder)"
      }), "\n", createVNode(_components.li, {
        children: "Fiddler 代理抓包工具 (HTTP proxy/recorder)"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "如何使用浏览器开发者工具获取-har-文件",
      children: "如何使用浏览器开发者工具获取 HAR 文件"
    }), "\n", createVNode(_components.p, {
      children: "下面是使用 Chrome 浏览器开发者工具获取测试请求 HAR 文件例子："
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "在 Chrome 中打开新的隐身窗口。 （可以排除登录 cookies 等干扰信息）。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "打开 Chrome 开发者工具（按 F12）。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "选择网络选项卡 Network。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "检查和确认录音按钮（圆形按钮）是否已激活（红色）。"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["如果想要记录多个连续的页面加载，请选中“保留日志”复选框。\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/1RDeqJ.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["输入测试网站的 URL（如 ", createVNode(_components.a, {
            href: "https://www.google.com/",
            children: "https://www.google.com/"
          }), "），然后开始执行和后续模拟用户执行的操作（如输入 123 进行搜索）。"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["完成后，在 Chrome 开发人员工具中，右键单击 URL 并选择“将内容另存为 HAR”。\n", createVNode(_components.img, {
            src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/WBsOXl.png",
            alt: " "
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "选择保存 HAR 文件的位置并重命名（如 har-demo），然后点击保存按钮，完成 HAR 文件的保存。"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "使用-har-to-k6-进行转换-har-文件",
      children: "使用 har-to-k6 进行转换 HAR 文件"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: "安装 har-to-k6 工具"
          }), "\n"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["通过 ", createVNode(_components.code, {
              children: "npm install -g har-to-k6"
            }), "命令安装 har-to-k6 工具。"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "2",
          children: ["\n", createVNode(_components.li, {
            children: "使用 har-to-k6 工具将 HAR 文件转换为 K6 脚本"
          }), "\n"]
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["通过 ", createVNode(_components.code, {
              children: "har-to-k6 har-demo.har -O har-demo.js"
            }), "命令将 HAR 文件转换为 K6 脚本。\n", createVNode(_components.img, {
              src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/UIKobM.png",
              alt: " "
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "3",
          children: ["\n", createVNode(_components.li, {
            children: ["转换后的 K6 脚本部分截图如下所示：\n", createVNode(_components.img, {
              src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/1OWWG0.png",
              alt: " "
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "4",
          children: ["\n", createVNode(_components.li, {
            children: "大家可以根据自己的需求对转换后的 K6 脚本进行修改，然后使用 k6 运行该脚本。"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ol, {
          start: "5",
          children: ["\n", createVNode(_components.li, {
            children: ["使用 k6 运行转换后的 K6 脚本，查看运行结果。\n", createVNode(_components.img, {
              src: "https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/9BLD7D.png",
              alt: " "
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["更多关于 HAR 文件的内容，请参考官方文档：", createVNode(_components.a, {
        href: "https://grafana.com/docs/k6/latest/using-k6/test-authoring/create-tests-from-recordings/using-the-har-converter/",
        children: "https://grafana.com/docs/k6/latest/using-k6/test-authoring/create-tests-from-recordings/using-the-har-converter/"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "参考文档",
      children: "参考文档"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/docs/",
          children: "K6 文档："
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://k6.io/",
          children: "k6 官方网站："
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://github.com/Automation-Test-Starter/K6-Performance-Test-starter",
          children: "K6 性能测试快速启动项目："
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

const url = "src/blog/zh-cn/Performance-Testing/K6-tutorial-advanced-usage-how-to-quickly-writing-k6-performance-test-script.mdx";
const file = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/K6-tutorial-advanced-usage-how-to-quickly-writing-k6-performance-test-script.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nao.deng/Desktop/AwsomeCode/naodeng.com.cn/src/blog/zh-cn/Performance-Testing/K6-tutorial-advanced-usage-how-to-quickly-writing-k6-performance-test-script.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
