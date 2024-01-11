---
author: "nao.deng"
title:  "UI 测试最佳实践的测试策略（二）：什么样的测试策略才更合理"
date:  "2024-01-10T17:05:44+08:00"
summary:  "这篇博文深入探讨 UI 测试最佳实践的测试策略（二），着重介绍了更为合理的测试策略。从避免追求完美主义、选择参考浏览器、发现 Bug 时的处理方式，到在修复之前编写测试、单个长的端到端测试与多个小的独立测试的选择，全面阐述了什么样的测试策略更为合理。无论是初学者还是经验丰富的测试专业人员，这篇博文都将为您提供实用的指导，帮助您制定更明智、高效的 UI 测试策略。点击链接，探索更合理的 UI 测试方法！"
ZHtags: ["测试策略"]
ZHcategories:  ["UI 测试", "测试策略"]
ZHseries: ["UI 测试最佳实践"]
ShowWordCount: true
---

文章由 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices) 内容翻译而来，大家有条件的话可以去 [UI 测试最佳实践项目](https://github.com/NoriSte/ui-testing-best-practices)阅读原文。

## 什么样的测试策略才更合理

上一篇文章讲到了不同的测试类型，以及它们的优缺点。在这篇文章中，我们将深入探讨什么样的测试策略才更为合理。
会从在开始阶段，避免追求完美主义，选择一个参考浏览器，发现了 bug？先编写测试，然后再着手修复，和单个长的端到端测试还是多个小的独立测试？等方面阐述了什么样的测试策略才更合理

### 在开始阶段，避免追求完美主义

测试真的改变了你的工作方式，但就像所有事情一样，需要一些经验才能真正发挥其威力。在一开始，务必避免完美主义的陷阱。为什么呢？

- 测试本质上就是小程序。完美主义可能会导致你在了解如何处理不同的测试上下文之前编写**非常复杂的测试**。

  复杂的测试是个大敌人，因为调试失败的测试比调试失败的应用程序更加困难。而且复杂的测试让你失去了测试实践本身的优势，浪费了很多时间，最终不可避免地会让你放弃。**如果你有这样的经历，不要气馁**，对很多测试初学者来说都是一样的（对我来说也是，这就是我开始写这个 repo 的原因 😊），不要害怕向同事或其他开发人员寻求帮助。

- 误报：完美主义导致很多误报。误报是指应用程序按预期工作，但测试失败的情况。

  **误报在一开始确实让人泄气**，因为你开始写测试是为了有一个盟友来检查应用程序状态... 但最终你却得到了另一个需要维护的应用程序，而测试并没有提供任何帮助。如果你发现自己在与误报作斗争，请停下来，重新学习，并寻求帮助！

- 测试的实用性：成功的测试在失败时直接指向问题。正确的断言和[确定性事件](/sections/generic-best-practices/await-dont-sleep.zh.md)使你的测试强大而且非常重要的是，它们在失败时是有用的。相反，过多的断言和检查可能会使你的测试因为无用而变得脆弱。

所谓完美主义是指检查每一个前端细节。在开始时，你的有限的测试经验不允许你有针对性地测试所有的交互。开始时，测试一些简单的事情，比如

- 页面是否正确加载？
- 菜单按钮是否正常工作？
- 用户是否能够填写表单并成功跳转到感谢页面？

而在开始阶段，不要过于关注测试一些诸如

- 条件数据加载
- 复杂的表单规则
- 无控制的（第三方）集成
- 元素选择器 等复杂的交互。

<br/>

为了避免陷入完美主义的陷阱，初学者的待办事项清单可以是：

1. 选择最简单的测试对象（对用户有用的东西）。
2. 从用户的角度考虑。记住**用户关心内容和功能**，而不关心选择器和内部应用程序状态。
3. 编写你的测试。
4. 运行测试多次以确保它的稳定性。
5. 当测试成功时，在前端应用程序中插入一个导致它失败的错误，然后检查测试是否失败。然后移除你故意插入的错误。
6. 以无头和非无头模式运行测试。
7. 根据你的经验（也问问同事），思考从你测试的内容的角度看，可能导致前端应用程序失败的原因是什么。
8. 模拟不同的前端故障（关闭服务器、插入其他错误）并检查测试是否提供足够的反馈，以了解哪里失败了。
9. 仅对两三种故障进行测试，记住你有限的经验可能导致你测试错误的东西。
10. 然后，转移到另一个测试对象并重复所有先前的步骤。

软件测试是一场奇妙的旅程，这个 repo 的目标是帮助你避免最常见的陷阱。

建议的流程只是可能方法之一。我知道一切都是主观的，请为每个建议提出请求以进行改进！

### 选择一个参考浏览器

每个人都关心跨浏览器测试。我们通常习惯在每个浏览器上手动测试所有内容，因为我们知道，不同浏览器之间存在许多差异。当我们开始评估合适的测试工具时，跨浏览器测试是一个重要的话题，也是你在考虑时可能首先想到的。但是不要担心：首先从功能测试和视觉测试分离开始，这是正确评估跨浏览器支持需求（也是选择正确测试工具的第一步）。视觉测试可以集成到每个测试工具中，感谢诸如 Applitools 和 Percy 这样的服务。

换句话说，不要仅仅基于跨浏览器支持来选择测试工具。以下是一些建议：

- **Selenium 和 Puppeteer 是通用的自动化工具**。它们可以用作测试工具（有许多插件和模块可帮助你实现），但它们并非专为测试而设计，因此它们缺少一些集成实用工具，这可能使测试编写更加简便。

- 只考虑 **Cypress、Playwright 和 TestCafé**，因为它们是专为**简化 UI 测试过程**而创建的工具。这些工具自动处理一半的最佳实践，而在测试中的一些方面，它们可能更符合你的需求。在 UI 测试方面，由于其

困难性，花些时间试验这些工具是值得的。

- 仔细思考你需要测试什么。如果你需要测试特定的移动能力，请选择 [TestCafé](https://testcafe.devexpress.com)，但如果你只需要测试表单和按钮是否正常工作，你在选择上就更加灵活。

- 查看 [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Command-Log)，这是使 Cypress 异于常人的工具，对于测试开发过程中非常有帮助。

- 研究 [Playwright 在调试方面的优势](https://playwright.dev/docs/trace-viewer-intro)。Playwright 非常快速稳定，最近其开发体验有了很大改进。

- 跨浏览器测试通常涉及到视觉测试（CSS 浏览器差异），但这与功能测试不同。视觉测试得益于许多专用插件和工具的支持。详细了解 [视觉测试对应的章节](../tools/visual-regression-testing.zh.md) [Applitools](https://applitools.com)，其中我们讨论了一些专用产品，这些产品可以与几乎所有测试工具集成，通过将被测试页面的快照上传到其服务器并进行呈现来进行工作。

你还可以在 [等待，不是休眠](/sections/generic-best-practices/await-dont-sleep.zh.md) 章节中了解各种测试工具之间的一些差异。

### 发现了 bug？先编写测试，然后再着手修复

所以，当你在前端应用程序中发现错误并已经进行了调试时，你可以系统地复现它，准备好修复它。以测试为导向的思维必须经历以下步骤：

1. 确定预期的行为。
2. 编写一个测试，旨在以正确的方式使用前端应用程序。
3. 测试必须失败，因为错误不允许用户完成任务。
4. 修复错误。
5. 检查测试现在是否通过。

为什么要采用这种方法？为什么要编写测试呢？我知道直接修复错误可能看起来更快，但请考虑以下几点：

- 通常情况下，你的测试工具比你更快地达到显示错误的应用程序状态（参见[使用测试工具作为主要开发工具](/sections/generic-best-practices/use-your-testing-tool-as-your-primary-development-tool.zh.md) 章节）。

- 有时你认为你能够系统地复现错误，但这并不总是正确的。编写一个揭示错误的测试可以确保你百分之百确定错误是可重现的，**排除了许多偏差变量**，如现有的会话、缓存、服务工作者、浏览器扩展、浏览器版本等，这些可能会影响你的信心。有时你可能会发现你并没有完全正确地识别错误。

- 与此同时，当测试通过了你的修复时，你确实知道你的解决方

案按预期工作。可能影响错误识别过程的相同变量可能会影响工作效果的虚假感觉。

- **有了测试，错误就可以永远修复了！** 测试将被执行成千上万次，让你对错误修复感到百分之百的信心。

- 成功的测试可以作为你所做工作的验证轨迹。

最后但同样重要的是：确保你编写的测试一开始是失败的！而且它之所以失败是因为有错误！

<br/>

测试不仅仅是为了重现错误并在视觉上检查它，而是必须在修复错误后获得积极的反馈。**与错误相关的测试如果一开始就没有失败，那真的非常危险**，因为你可能认为你做得很好，而实际上你从一开始就没有完全正确地重现错误。

作为一般规则：**破碎的流程必须有一个破碎的测试**，一个成功的测试必须与一个正常工作的应用程序相关联。

### 单个长的端到端测试还是多个小的独立测试？

在讨论对 CRUD 应用进行测试时，我们应该如何组织“创建”、“修改”和“删除”端到端（E2E）测试呢？

完整的选项列表如下：

1. **有三个小的 E2E 测试，依赖于执行顺序**（测试 B 假设测试 A 已运行）- 这是唯一的不良解决方案，我将解释原因。
2. **有三个小的 E2E 测试，独立于执行顺序**（测试 B 不受测试 A 是否运行的影响）- 从理论上讲，是最好的解决方案。但仍然需要大量样板代码，而且为了快速执行。
3. **有一个执行所有操作的扩展 E2E 测试** - 对于本文介绍的案例来说，这是一个很好的折中方案。

这取决于情况，我提到的大多数问题与 E2E 测试的隐含问题有关，这是我们应该尽量减少这类测试的强烈信号。作为前端工程师，我更喜欢投资时间编写无需服务器的测试，而不是 E2E 测试。继续阅读，你将了解原因。

<br/><br/>

#### 1 - 有三个小的 E2E 测试，依赖于执行顺序（测试 B 假设测试 A 已运行）

测试流程如下：

1. 开始（*应用程序状态为空*）
2. 测试 1: 创建实体
3. 测试 2: 修改实体
4. 测试 3: 删除实体
5. 结束（*应用程序状态为空*）

在这种情况下，这些测试不是独立的，而是依赖于执行顺序。为了测试 CRUD 流程，有三个主要测试："创建实体"、"修改实体"、"删除实体"。第二个测试（"修改实体"）假设在其启动时应用程序状态是正确的，因为它在 "创建实体" 之后运行。"删除实体" 也必须在 "修改实体" 之后运行，依此类推。

将多个测试耦合在一起是一种反模式，原因如下：

- **误报**：一旦一个测试失败，后续测试会连续失败。
- **难以调试**：由于不确定性较高，理解失败的根本原因更加复杂。测试失败是因为代码本身失败？还是因为先前测试的状态发生了变化？然后，当一个测试失败时，你必须调试两个测试。
- **难以调试**（再次）：开发人员会浪费大量时间，因为他们无法运行单个测试，也无法使用 `skip` 和 `only` 仅运行其中一部分测试。
- **难以重构**：测试无法移动到其他位置。如果测试代码变得太长、太复杂等，你无法将其移动到专用文件/目录中，因为它依赖于先前的测试。
- **难以阅读**：读者无法知道一个测试的作用，因为他们还必须了解先前的测试。你必须阅读两个测试，而不是一个，这是不好的。

我不建议以这种方式编写耦合的测试，但我想包含它们以确保您明白原因。

#### 2 - 设计三个小型端到端（E2E）测试，使其独立于执行顺序

为了确保每个测试的独立性，每个测试在运行前都应该创建所需的应用程序状态，然后在完成后进行清理。相较于原有的顺序（创建->修改->删除），前文提到的流程应该调整如下（*斜体* 表示与原有流程相比的新步骤）：

1. **开始**（*应用程序状态为空*）
2. **测试 1：创建实体**
   1. ***之前***：加载页面（*应用程序状态为空*）
   2. 创建实体
   3. ***之后***：删除*实体*（*应用程序状态为空*）
3. **测试 2：修改实体**
   1. ***之前***：通过 API 创建*实体*
   2. ***之前***：加载页面（*应用程序状态为空*）
   3. 修改实体
   4. ***之后***：通过 API 删除*实体*（*应用程序状态为空*）
4. **测试 3：删除实体**
   1. ***之前***：通过 API 创建*实体*
   2. ***之前***：加载页面（*应用程序状态为空*）
   3. 删除实体
   4. ***之后***：删除操作（*应用程序状态为空*）
5. **结束**（*应用程序状态为空*）

通过这种方式，每个测试都是相互独立的。需要注意的是，之前和之后的操作直接通过调用服务器 API 完成，因为通过 UI 完成这些操作将会很慢。然而，这种方法的问题在于**测试变得更加耗时**，因为每个测试都需要创建实体，并且每个测试都需要访问页面。当应用程序加载需要花费 10 秒钟时（Hasura 的控制台最初的情况），重新加载应用程序将成为一个问题。

为了确保测试既独立又高效，我们需要进一步改进上述流程：

- 充分利用前一个测试的应用状态。
- 同时，如果尚未运行测试，还需要创建所需的应用状态。

具体来说，流程如下（与前一章节相比，*斜体*表示新步骤）：

1. **开始**（*应用状态为空*）
2. **测试 1：** 创建实体
    1. ***之前***：*实体* 是否存在？
        1. *否：没问题！*
        2. *是：通过 API 删除实体*
    2. ***之前***：加载页面（*应用状态为空*）
    3. 创建实体
3. **测试 2：** 修改实体
    1. ***之前***：*实体* 是否存在？
        1. *是：没问题！*
        2. *否：通过 API 创建实体*
    2. ***之前***：*实体* 是否已包含测试即将进行的更改？
        1. *是：没问题！*
        2. *否：通过 API 修改实体*
    3. ***之前***：我们是否已经在正确的页面上？
        1. *是：没问题！*
        2. *否：加载页面*
    4. 修改实体
4. **测试 3：** 删除实体
    1. ***之前***：实体是否存在？
        1. *是：没问题！*
        2. *否：通过 API 创建实体*
    2. ***之前***：我们是否已经在正确的页面上？
        1. *是：没问题！*
        2. *否：加载页面*

5. 删除实体
6. **结束**（*应用状态为空*）

现在，如果你一次运行所有测试，每个测试都会利用之前测试的应用状态。如果只运行“修改实体”测试，它会创建所需的一切，然后运行测试本身。

现在我们既有测试的独立性又有测试的性能！很不错！

嗯... 你是否注意到我们需要编写大量代码？[cypress-data-session](https://github.com/bahmutov/cypress-data-session) 插件很方便，但存在两个问题：

1. 有很多与 cypress-data-session 相关的样板代码
2. 在 E2E 测试中，必须维护许多可能与主应用程序中使用的 API 调用不同步的 API 调用。

这是一个与 cypress-data-session 相关的样板代码示例（来自 Hasura Console 代码库）。

```ts
import { readMetadata } from '../services/readMetadata';
import { deleteHakunaMatataPermission } from '../services/deleteHakunaMatataPermission';

/**
 * Ensure the Action does not have the Permission.
 *
 * ATTENTION: if you get the "setup function changed for session..." error, simply close the
 * Cypress-controlled browser and re-launch the test file.
 */
export function hakunaMatataPermissionMustNotExist(
  settingUpApplicationState = true
) {
  cy.dataSession({
    name: 'hakunaMatataPermissionMustNotExist',

    // Without it, cy.dataSession run the setup function also the very first time, trying to
    // delete a Permission that does not exist
    init: () => true,

    // Check if the Permission exists
    validate: () => {
      Cypress.log({ message: '**--- Action check: start**' });

      return readMetadata().then(response => {
        const loginAction = response.body.actions?.find(
          action => action.name === 'login'
        );

        if (!loginAction || !loginAction.permissions) return true;

        const permission = loginAction.permissions.find(
          permission => permission.role === 'hakuna_matata'
        );

        // Returns true if the permission does not exist
        return !permission;
      });
    },

    preSetup: () =>
      Cypress.log({ message: '**--- The permission must be deleted**' }),

    // Delete the Permission
    setup: () => {
      deleteHakunaMatataPermission();

      if (settingUpApplicationState) {
        // Ensure the UI read the latest data if it were previously loaded
        cy.reload();
      }
    },
  });
}

```

以下是用于创建实体的 API 调用示例（来自 Hasura Console 代码库）。

```ts
/**
 * Create the Action straight on the server.
 */
export function createLoginAction() {
  Cypress.log({ message: '**--- Action creation: start**' });

  cy.request('POST', 'http://localhost:8080/v1/metadata', {
    type: 'bulk',
    source: 'default',
    args: [
      {
        type: 'set_custom_types',
        args: {
          scalars: [],
          input_objects: [
            {
              name: 'SampleInput',
              fields: [
                { name: 'username', type: 'String!' },
                { name: 'password', type: 'String!' },
              ],
            },
          ],
          objects: [
            {
              name: 'SampleOutput',
              fields: [{ name: 'accessToken', type: 'String!' }],
            },
            {
              name: 'LoginResponse',
              description: null,
              fields: [
                {
                  name: 'accessToken',
                  type: 'String!',
                  description: null,
                },
              ],
            },
            {
              name: 'AddResult',
              fields: [{ name: 'sum', type: 'Int' }],
            },
          ],
          enums: [],
        },
      },
      {
        type: 'create_action',
        args: {
          name: 'login',
          definition: {
            arguments: [
              {
                name: 'username',
                type: 'String!',
                description: null,
              },
              {
                name: 'password',
                type: 'String!',
                description: null,
              },
            ],
            kind: 'synchronous',
            output_type: 'LoginResponse',
            handler: 'https://hasura-actions-demo.glitch.me/login',
            type: 'mutation',
            headers: [],
            timeout: 25,
            request_transform: null,
          },
          comment: null,
        },
      },
    ],
  }).then(() => Cypress.log({ message: '**--- Action creation: end**' }));
}
```

因此，拥有独立的测试是至关重要的，但也伴随着一些成本。

这就是为什么，针对这个具体问题，我选择了最后一种选择...

#### 3 - 进行一次全面的端到端测试

优点：可以减少很多样板文件。

缺点：与测试一起工作变得更慢了（你不能再仅运行第三个测试了）

与我们需要编写的样板和需要维护的代码相比，将它们统一起来是值得的。毕竟，我正在处理的特定 CRUD 流程大约需要 20 秒。

1. 开始 (*应用程序状态为空*)
2. 测试：CRUD
   1. ***之前****：如果存在实体，则删除它（应用程序状态为空）*
   2. ***之前****：加载页面*
   3. 创建实体
   4. 修改实体
   5. 删除实体
   6. ***之后****：如果存在实体，则删除它（应用程序状态为空）*
3. 结束 (*应用程序状态为空*)

同时，这也使得 cypress-data-session 变得无用。因此，少了一个需要保持更新的依赖。

#### 结论

处理端到端测试很困难。处理真实数据、清除真实应用程序状态等都是有成本的。我知道端到端测试是唯一能够提供完整信心的测试，但作为一名前端工程师（请记住，我不是 QA 工程师），我更愿意使用无需服务器的测试。

#### 相关章节

- 🔗 [从金字塔的顶端着手构建测试！](/sections/beginners/top-to-bottom-approach.zh.md)
- 🔗 [把你的测试工具当作主要的开发工具来使用](/sections/generic-best-practices/use-your-testing-tool-as-your-primary-development-tool.zh.md)
<br/><br/>

*由 [NoriSte](https://github.com/NoriSte) 在 [dev.to](https://dev.to/noriste/decouple-the-back-end-and-front-end-test-through-contract-testing-112k)上进行了跨发表。*

## 参考资料

- UI 测试最佳实践项目:<https://github.com/NoriSte/ui-testing-best-practices>
- UI 测试最佳实践项目中文翻译:<https://github.com/naodeng/ui-testing-best-practices>
