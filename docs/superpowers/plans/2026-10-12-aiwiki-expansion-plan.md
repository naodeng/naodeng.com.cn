# AI Wiki 扩充计划（实施与验收记录）

> 调研与复核日期：2026-10-12。状态：正文已完成；最终结构、链接、SEO 和构建检查以文末记录为准。

## 方案结论

- **本轮已按用户要求一次性完成新旧词条。** 对原有 67 组中英文条目做了结构与正文复核，新增 50 组双语词条，共 117 个概念、234 篇 Markdown 页面。
- **新增主题**覆盖模型基础机制、检索与 RAG、多模态、Agent 协作与安全、AI 质量工程。原有 67 个概念保留原主题与 slug；修订过时产品信息、无依据的量化承诺、重复模板和不准确的机制描述。
- **正文统一采用用户指定的 12 个章节。** 英文参考 ASD-STE100 的清晰表达原则：短句、单句表达一个主要意思、主动表达、术语一致。此处不宣称通过 ASD-STE100 合规认证，也不要求一般科普内容使用其受控词典。
- **双语按概念复核。** 中英文页面使用同一 slug，并保持定义、例子、风险边界、资源和相关词条在事实层面一致；表达按语言习惯撰写，不逐句硬译。
- **维护边界**：协议和产品页面说明具体实现及适用版本；通用词条不以单一厂商行为作定义。对 MCP Tasks 草案、模型生命周期等易变信息，正文标出版本或时间边界，并链接维护方资料。

## 目标与基线

- 把 AI Wiki 从“模型与开发工具名词”扩展为一套面向普通读者的 AI 科普图谱：读者能从模型如何学习、如何检索资料、如何处理多模态输入，继续读到 Agent 的实际执行方式、质量验证和风险边界。
- 调研基线中 `src/content/aiwiki/en/` 与 `src/content/aiwiki/zh-cn/` 各有 67 篇，两个目录的文件名一一配对。本轮实施的 50 个新增 slug 均与原有 67 个 slug 不重复；通过正文和相关词条边界进一步避免概念重叠。
- 本轮交付范围为 **117 个概念 × 2 种语言 = 234 篇正文**：完成既有 67 组复核，新增 50 组。章节、配对 slug 和 review 日期已对照；站内链接、SEO 与构建结果见文末。
- 范围提醒：当前 AI Wiki 首页按字母列出词条并提供搜索，站点描述聚焦 AI 与 Vibe Coding。若未来要覆盖一般 AI 科普，可先通过清晰的词条导航与页面简介说明范围；分类筛选 UI 属于独立体验改动，不是本轮内容扩充的前置条件。

## 内容写法与一致性约定

以现有 AI Wiki 的词条详情为体例，而不是套用测试 Wiki 的 frontmatter。沿用 AI Wiki 已有字段：`title`、`titleEn` / `titleZh`、`slug`、`lang`、`summary`、`topic`、`aliases`、`tags`、`related`、`lastReviewedAt`。中英文使用相同 slug，事实、例子、适用边界、来源和相关条目保持一致；表达按语言重写，不逐句硬译。

正文沿用 AI Wiki 的 frontmatter、配对 slug、详情页和导航约定。117 组词条都使用用户指定的 12 个二级标题；EN/ZH 标题、顺序和信息点逐项对应。以 ASD-STE100 的清晰写作原则作为英文表达参考：短句、每句一个主要意思、主动表达、同一概念使用同一术语。中文采用对应的简明表达。此处只借用写作原则，不宣称词条通过 ASD-STE100 合规认证，也不要求一般科普文章遵守其受控词典。具体场景须回答“这是什么、AI 在这里做了什么、它不能保证什么”。先解释通用概念；标准、协议和厂商 API 只说明具体实现，不以单一厂商口径定义通用术语。参照 [ASD-STE100 FAQ](https://www.asd-ste100.org/faq.html) 与 [Issue 9（2025-01）](https://www.asd-ste100.org/STE_downloads.html)。

新增词条按读者相关性、与存量内容的区分度、可解释性、可靠来源和维护成本复核。与旧页面相邻时，在正文和相关链接中写清边界；例如，Agent Card 解释 A2A 服务发现信息，A2A 条目解释服务间交互。多模态与机器人条目聚焦可迁移的概念和软件测试/开发场景，不将其扩展成产品目录。

## 本轮新增词条（50）

### A. 模型如何学习与运行（12）

| # | 词条 / slug | 科普重点 | 与现有条目的边界 | 一手来源 |
|---:|---|---|---|---|
| 1 | 分词与 Token / `tokenization` | 把一句话切成模型可处理的片段；用中英文、代码和数字说明切分为何影响输入长度与表达。 | LLM/SLM 词条已有提及；新文解释机制，并链接 `large-language-models-llms`、`small-language-models-slms`。 | [Hugging Face Tokenizers 文档](https://huggingface.co/docs/tokenizers/) |
| 2 | 向量嵌入 / `embeddings` | 把文本等输入映射成可比较的数值向量；强调“语义相近”不等于“内容为真”。 | 与 `codebase-indexing-rag` 相邻；本条解释通用表示，不重复代码库 RAG 流程。 | [Sentence-BERT 原始论文](https://arxiv.org/abs/1908.10084) |
| 3 | Transformer 与自注意力 / `transformer-self-attention` | 解释模型怎样在序列中关联不同位置的信息，用简短句子展示注意力的直观作用。 | `large-language-models-llms`、`reasoning-models` 属于应用/模型类型，不替代架构解释。 | [Attention Is All You Need](https://arxiv.org/abs/1706.03762) |
| 4 | 预训练 / `pretraining` | 解释基础模型如何从大量数据学习通用模式，以及“预训练模型”为什么不自动等于可靠助手。 | `large-language-models-llms`、`small-language-models-slms` 中有背景性提及；新文专讲训练阶段。 | [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) |
| 5 | 指令微调 / `instruction-tuning` | 说明用指令和示范样本训练模型遵循任务要求，并与继续预训练、偏好优化区分。 | 邻接 `direct-preference-optimization-dpo`、`reinforcement-fine-tuning-rft`；解释阶段不同，不重复算法条目。 | [Finetuned Language Models Are Zero-Shot Learners](https://arxiv.org/abs/2109.01652) |
| 6 | 人类反馈强化学习（RLHF）/ `rlhf` | 讲清示范、偏好比较、奖励信号如何参与训练；同时说明它不是事实正确性的保证。 | 邻接 DPO、RFT；明确比较训练目标，不混称为同一种算法。 | [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) |
| 7 | 混合专家模型（MoE）/ `mixture-of-experts` | 用“按问题分派专家”的比喻解释稀疏路由，以及总参数量与单次计算量的区别。 | `mistral-mixtral` 提到具体模型；新文讲架构概念并链接回去。 | [Switch Transformers](https://arxiv.org/abs/2101.03961) |
| 8 | 模型量化 / `model-quantization` | 解释降低参数数值精度如何减少存储/计算开销，以及质量、内存、速度的取舍。 | `small-language-models-slms`、`llama` 有简要提及；新文聚焦原理和选择边界。 | [GPTQ 原始论文](https://arxiv.org/abs/2210.17323) |
| 9 | LoRA 与参数高效微调 / `lora-peft` | 解释冻结主模型、训练小型低秩适配参数的思路，并与全量微调、量化区分。 | 当前 67 个 slug 无 LoRA/PEFT 专条；链接到模型及微调词条。 | [LoRA 原始论文](https://arxiv.org/abs/2106.09685) |
| 10 | 知识蒸馏 / `knowledge-distillation` | 通过教师与学生模型讲清能力迁移；与模型量化、剪枝区分。 | `small-language-models-slms`、`llama` 有背景提及；本条解释方法而非某个模型产品。 | [Distilling the Knowledge in a Neural Network](https://arxiv.org/abs/1503.02531) |
| 11 | 合成训练数据 / `synthetic-training-data` | 解释 AI 生成的数据如何成为训练样本，以及筛选、去重和错误放大的重要性。 | 现有独立 slug 未覆盖；与 `agent-evals` 中评测集的使用目的不同，避免把训练集和测试集混为一谈。 | [Self-Instruct](https://arxiv.org/abs/2212.10560) |
| 12 | 推理时计算扩展 / `test-time-compute` | 解释模型训练完成后如何在回答时投入更多搜索、采样或验证计算，以及质量、时延、成本之间的关系。 | 邻接 `reasoning-models`、`predicted-outputs`；新文讲推理阶段计算策略，不描述某产品的隐藏实现。 | [Scaling LLM Test-Time Compute Optimally](https://arxiv.org/abs/2408.03314) |

### B. 检索、搜索与知识依据（10）

| # | 词条 / slug | 科普重点 | 与现有条目的边界 | 一手来源 |
|---:|---|---|---|---|
| 13 | 向量搜索 / `vector-search` | 用向量相似度寻找语义相关内容，并与精确关键词匹配做直观比较。 | 与 `codebase-indexing-rag` 相邻；新文解释可复用的搜索机制。 | [Faiss 原始论文](https://arxiv.org/abs/1702.08734) |
| 14 | 向量数据库 / `vector-database` | 解释向量索引、相似度查询、元数据过滤分别解决什么问题；不把“有向量列”自动等同于完整 RAG。 | 与代码库 RAG 互链，不再复述其产品化场景。 | [The Faiss library](https://arxiv.org/abs/2401.08281) |
| 15 | 近似最近邻搜索（ANN）/ `approximate-nearest-neighbor` | 说明大规模向量查询为何常用近似索引，以及速度、内存、召回率如何权衡。 | 当前无同名条目；作为向量搜索/数据库的机制级补充。 | [Billion-scale similarity search with GPUs](https://arxiv.org/abs/1702.08734) |
| 16 | BM25 关键词检索 / `bm25` | 通过词频和文档频率解释经典关键词排序为何仍能找到型号、错误码和专有名词。 | 与“混合检索”互链；避免把传统检索误写成过时技术。 | [Microsoft Research：Relevance weighting of search terms](https://www.microsoft.com/en-us/research/publication/relevance-weighting-of-search-terms/) |
| 17 | 混合检索 / `hybrid-search` | 展示关键词检索与向量检索并用的流程，以及精确词与语义词如何互补。 | 与 `codebase-indexing-rag` 相邻；RAG 页面讲应用闭环，本条讲候选召回。 | [Azure AI Search 混合搜索技术文档](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview)（只作为实现例子，不作为通用定义） |
| 18 | 检索重排 / `reranking` | 解释先快速召回、再对少量候选精排的两阶段流程和代价。 | 与 `codebase-indexing-rag` 相邻；不与 `graders` 的答案评分混淆。 | [ColBERT 原始论文](https://arxiv.org/abs/2004.12832) |
| 19 | 倒数排名融合（RRF）/ `reciprocal-rank-fusion` | 用两份不同搜索结果的排序清单解释如何融合名次，而不直接比较量纲不同的分数。 | 当前无同名条目；作为混合检索的独立算法补充。 | [Google Research：Reciprocal Rank Fusion](https://research.google/pubs/reciprocal-rank-fusion-outperforms-condorcet-and-individual-rank-learning-methods/) |
| 20 | 文档分块 / `document-chunking` | 说明长文档为何会被切成可检索单元，并用段落边界/代码函数举例展示分块策略的副作用。 | 与代码库 RAG 相邻；必须写明分块是系统设计选择，不存在对所有资料都最优的固定长度。 | [RAG 原始论文](https://arxiv.org/abs/2005.11401)；[检索实现示例](https://developers.openai.com/api/docs/guides/retrieval) |
| 21 | GraphRAG / `graphrag` | 解释知识图谱、关系和检索如何协作回答跨文档关系问题；用“谁与谁有关”而非只找相似段落举例。 | 与 `codebase-indexing-rag` 的 RAG 大类相邻；清楚说明它是一种架构路线，不是 RAG 的同义词。 | [Microsoft Research GraphRAG 项目与论文入口](https://www.microsoft.com/en-us/research/project/graphrag/) |
| 22 | 多模态检索增强生成 / `multimodal-rag` | 说明知识库含图像、音频或视频时，检索证据与生成回答如何跨模态配合；提示读者检查引用证据是否真支持结论。 | 与代码库文本 RAG 有边界差异；需链接 `embeddings`、`vector-search` 和 LLM 条目。 | [ImageBind](https://arxiv.org/abs/2305.05665)；[RAG 原始论文](https://arxiv.org/abs/2005.11401) |

### C. 图像、音频、视频与行动（8）

| # | 词条 / slug | 科普重点 | 与现有条目的边界 | 一手来源 |
|---:|---|---|---|---|
| 23 | 视觉语言模型（VLM）/ `vision-language-model` | 说明同一模型怎样关联图像与文本，可用于图片问答、分类和视觉内容检索；不能把“看图”说成无误识别。 | 通用 LLM、GPT、Gemini 条目可能提到图像能力；本条解释任务与模型路线，不讲产品型号。 | [CLIP 原始论文](https://arxiv.org/abs/2103.00020) |
| 24 | 文档版面理解 / `document-understanding` | 通过表格、表单、发票等案例说明 AI 如何联合利用文字内容与页面布局。 | 现有通用 AI 条目未覆盖该专门任务；互链视觉语言模型。 | [LayoutLMv3](https://arxiv.org/abs/2204.08387) |
| 25 | 自动语音识别（ASR）/ `automatic-speech-recognition` | 解释从音频到转写文本的过程，以及口音、重叠说话和噪声对识别的影响。 | 当前无 ASR 专条；与 TTS 区分方向为“语音转文字”。 | [Whisper 原始论文](https://arxiv.org/abs/2212.04356) |
| 26 | 文本转语音（TTS）/ `text-to-speech` | 说明文字如何转换为语音，科普音色、韵律和说话人相似度，不写成具体语音产品指南。 | 与 ASR 相邻但方向相反；当前无独立条目。 | [VALL-E](https://arxiv.org/abs/2301.02111) |
| 27 | 音频语言模型 / `audio-language-model` | 解释模型怎样把声音当作可生成/理解的序列，覆盖音乐、环境音与语音任务的差别。 | 与通用 LLM 条目相邻；讲音频原生建模而非简单语音转录。 | [AudioLM](https://arxiv.org/abs/2209.03143) |
| 28 | 视频语言模型 / `video-language-model` | 展示模型如何结合多帧、时间顺序和语言回答视频问题，并说明抽帧会丢失什么信息。 | 当前无视频理解专条；与 VLM、视频生成互链。 | [Video-LLaVA](https://arxiv.org/abs/2311.10122) |
| 29 | 扩散模型 / `diffusion-model` | 用逐步去噪的过程解释图像生成；对比一次预测与多步迭代，不把“扩散”限定成图像。 | 当前无独立条目；提供图像生成、视频生成相关页面的基础。 | [Denoising Diffusion Probabilistic Models](https://arxiv.org/abs/2006.11239) |
| 30 | 视觉语言动作模型（VLA）/ `vision-language-action` | 说明模型如何把视觉观察和自然语言指令映射为机器人动作，并区分数字 Agent 与具身执行。 | 与 `ai-agent`、`multi-agent-orchestration` 不是同一范畴；本条讲现实环境中的感知与动作闭环。 | [RT-2](https://arxiv.org/abs/2307.15818) |

### D. Agent 互操作、安全执行与观测（10）

| # | 词条 / slug | 科普重点 | 与现有条目的边界 | 一手来源 |
|---:|---|---|---|---|
| 31 | Agent-to-Agent（A2A）协议 / `a2a-protocol` | 解释不同 Agent 系统怎样发现能力、交换消息并协作，同时说明协议互通不代表 Agent 彼此可信。 | 与 `multi-agent-orchestration`（内部如何协作）、`acp-agent-client-protocol`（客户端协议）、MCP（工具/数据连接）做对照。 | [A2A 官方规范 1.0.0](https://a2a-protocol.org/v1.0.0/specification/) |
| 32 | Agent Card / `agent-card` | 通过能力卡片说明远端 Agent 如何公开名称、能力、技能、端点与认证要求；讨论签名和信息披露边界。 | 属于 A2A 的发现机制；如篇幅不足，应并入 #31 而不是硬拆薄词条。 | [A2A 规范：Agent Discovery 1.0.0](https://a2a-protocol.org/v1.0.0/specification/) |
| 33 | MCP Apps 扩展 / `mcp-apps` | 讲解工具结果如何关联沙箱化交互界面，让助手能显示表单、图表或工作台。 | 是现有 `model-context-protocol-mcp` 的扩展专题；正文须标明扩展及规范日期。 | [MCP Apps 2026-01-26 规范](https://apps.extensions.modelcontextprotocol.io/specification/2026-01-26/apps.mdx) |
| 34 | MCP Tasks 扩展 / `mcp-tasks` | 用长时间生成报告、CI 作业说明任务句柄、轮询、取消和断线恢复的含义。 | 与 `asynchronous-agent-execution`、`background-agents` 相邻；解释协议任务对象而非 Agent 后台执行的一般模式。 | [MCP Tasks 当前草案](https://tasks.extensions.modelcontextprotocol.io/specification/draft/tasks)（调研时为 draft，发布前复查成熟度） |
| 35 | MCP Elicitation / `mcp-elicitation` | 解释服务器如何通过客户端请求用户补充信息或确认，并区分普通表单输入与敏感认证。 | 与 `human-in-the-loop` 相邻；本条限于 MCP 的协议交互，不重复通用审批原则。 | [MCP 2026-07-28 Elicitation 规范](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation) |
| 36 | AI Agent 身份 / `ai-agent-identity` | 解释自动化实体怎样被标识、区分于人类用户，并为操作审计建立可追溯主体。 | 与 `permission-policies-allowed-command-list`、`privacy-mode` 相关但独立；聚焦“谁在行动”。 | [NIST 软件与 AI Agent 身份及授权概念文件](https://www.nccoe.nist.gov/sites/default/files/2026-02/accelerating-the-adoption-of-software-and-ai-agent-identity-and-authorization-concept-paper.pdf) |
| 37 | Agent 授权与委托 / `agent-authorization` | 用“代表用户订票/读仓库”的例子解释作用域、时限、撤销与委托边界。 | 与身份、`human-in-the-loop`、命令许可条目互链；身份回答主体，授权回答可做什么。 | [NIST Agent Identity and Authorization](https://www.nccoe.nist.gov/sites/default/files/2026-02/accelerating-the-adoption-of-software-and-ai-agent-identity-and-authorization-concept-paper.pdf) |
| 38 | Agent 工具沙箱 / `agent-sandboxing` | 说明为何运行 AI 生成代码或调用高风险工具时要隔离文件、网络和凭据，并解释沙箱仍有边界。 | 与 `permission-policies-allowed-command-list` 互链；区分沙箱隔离与模型提示词约束。 | [NIST GenAI 风险框架](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)；[MCP 安全最佳实践](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices) |
| 39 | Agent 协议一致性测试 / `agent-protocol-conformance-testing` | 说明测试实现是否按协议要求交互，覆盖版本、错误、认证和异步任务等互通场景。 | 与 `agent-evals`、`graders` 不同：检查协议实现，而非模型任务质量。 | [A2A 规范：Interoperability Testing 1.0.0](https://a2a-protocol.org/v1.0.0/specification/) |
| 40 | GenAI 可观测性约定 / `genai-observability` | 说明怎样统一记录模型操作、工具调用、耗时与错误以定位工作流故障；指出记录输入/输出会带来隐私风险。 | 与 `trace-grading`、`agent-evals` 相邻；本条讲遥测标准，不再解释评分方法。 | [OpenTelemetry GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions-genai)（持续演进，标注调研时状态） |

### E. 信任、安全与 AI 质量工程（10）

| # | 词条 / slug | 科普重点 | 与现有条目的边界 | 一手来源 |
|---:|---|---|---|---|
| 41 | 提示注入 / `prompt-injection` | 用直接输入和藏在网页、邮件、文件里的间接指令展示攻击路径；说明检索到的文本也可能是恶意输入。 | 与 `privacy-mode`、命令许可和 HITL 相邻；不把提示词规则说成安全边界。 | [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final)；[OWASP Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) |
| 42 | 越狱攻击 / `jailbreak-attack` | 解释试图绕过模型安全行为的提示策略，并区分模型拒答绕过与 Agent 工具权限滥用。 | 与 `permission-policies-allowed-command-list` 是模型行为与系统权限两个层次。 | [OWASP LLM Top 10 2025](https://owasp.org/www-project-top-10-for-large-language-model-applications/) |
| 43 | 训练数据投毒 / `training-data-poisoning` | 说明攻击者如何污染训练数据或引入后门，以及为何数据来源、筛选和监控影响模型安全。 | 当前无安全威胁专条；和提示注入相邻但攻击阶段不同。 | [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final) |
| 44 | 模型隐私攻击 / `model-privacy-attacks` | 以成员推断、训练数据抽取等例子解释攻击者如何猜测或恢复训练信息。 | 与 `privacy-mode` 相邻；本条讲攻击机制与缓解，不替代本站隐私承诺说明。 | [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final) |
| 45 | AI 供应链攻击 / `ai-supply-chain-security` | 解释模型权重、数据集、微调适配器、依赖和工具链如何成为攻击面。 | 与通用代码供应链知识互链；聚焦 AI 资产及模型投毒/来源验证。 | [NIST Adversarial Machine Learning Taxonomy](https://csrc.nist.gov/pubs/ai/100/2/e2025/final) |
| 46 | 过度代理权限 / `excessive-agency` | 用一个低风险错误如何因权限太宽变成真实损失的例子说明最小权限、人工确认和可撤销性。 | 与 `ai-agent`、`human-in-the-loop`、权限规则相邻；不重复工具调用基础。 | [OWASP Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) |
| 47 | AI 红队测试 / `ai-red-teaming` | 介绍如何有计划地用对抗性输入寻找系统弱点，并把“发现问题”与“完成整改”分开记录。 | 与 `agent-evals`、`graders`、`trace-grading` 互链；侧重攻击面探索和风险发现。 | [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) |
| 48 | 模型卡与数据卡 / `model-and-data-cards` | 说明结构化记录模型用途、限制、数据来源和评估条件如何帮助使用者判断适配性。 | 当前没有模型/数据卡专条；不等同于产品营销页或模型排行榜。 | [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993)；[Data Cards](https://arxiv.org/abs/2204.01075) |
| 49 | 内容来源凭证（C2PA）/ `content-credentials-c2pa` | 解释数字签名如何记录媒体创建/修改来源，并强调“可验证来源”不等于“内容真实或可信”。 | 当前无内容来源专题；需链接生成式 AI 与媒体可信度条目（若未来新增）。 | [C2PA 2.4 技术规范（2026-04）](https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html) |
| 50 | AI 系统蜕变测试 / `metamorphic-testing-ai` | 通过输入变化与输出关系（如格式转换不应改变数值结论）测试没有唯一标准答案的 AI 系统。 | 与 `agent-evals` 相邻；本条讲测试预言机不足时的测试设计，不复述基准评分。 | [Testing and validating machine learning classifiers by metamorphic testing](https://doi.org/10.1016/j.jss.2010.11.920) |

## 重点去重与收录判断

| 已有条目 | 本轮相关词条 | 收录边界 |
|---|---|---|
| `large-language-models-llms`、`small-language-models-slms`、`gpt`、`llama`、`mistral-mixtral` | Token、Embedding、Transformer、预训练、MoE、量化、蒸馏、合成数据 | 现有模型词条保留为模型概览；新增词条做机制解释与应用示例，概览只放短定义和内链。 |
| `direct-preference-optimization-dpo`、`reinforcement-fine-tuning-rft` | 指令微调、RLHF | 已校对 DPO/RFT 条目的术语和训练阶段，并分别说明指令微调与偏好对齐；不把所有后训练都叫 RLHF。 |
| `codebase-indexing-rag` | Embeddings、向量搜索/数据库、BM25、混合检索、重排、分块、GraphRAG、多模态 RAG | 现有页聚焦代码库索引场景；新增词条分别讲可迁移组件和其他数据形态，并在正文说明与代码库 RAG 的边界。 |
| `agent-evals`、`graders`、`trace-grading` | 推理时计算、协议一致性测试、GenAI 可观测性、红队测试、蜕变测试 | 区分性能/结果评分、协议符合性、运行遥测、安全攻击面测试和基于不变量的测试。 |
| `multi-agent-orchestration`、`subagents`、`acp-agent-client-protocol`、`model-context-protocol-mcp` | A2A、Agent Card、MCP Apps/Tasks/Elicitation | 现有页解释基础概念；新增页面聚焦读者问题独立且有可靠来源的概念。Agent Card 单独解释 A2A 服务发现信息，并与 A2A 条目互链。 |
| `human-in-the-loop`、`permission-policies-allowed-command-list`、`privacy-mode` | Agent 身份/授权、工具沙箱、过度代理权限、提示注入 | 用“主体—授权—执行隔离—用户确认—攻击输入”区分概念，不暗示增加提示规则即可保证安全。 |

新增 slug 在实施时结合现有 `slug`、`aliases`、正文标题和相关链接完成了第二轮语义去重，不只依赖文件名。本轮最终收录 50 个新增独立词条；相邻概念在正文和相关链接中注明边界，没有用新词条重复已有页面的读者任务。

## 当前趋势快照（截至 2026-10-12）

1. **Agent 互操作进入标准化与身份治理议程。** NIST 于 2026-02-17 启动 AI Agent Standards Initiative，重点包含互操作协议、安全与身份/授权研究。[NIST 倡议页](https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative) 因此本轮新增 A2A、身份与授权条目，但不把某一家的 Agent 产品当成标准。
2. **MCP 正在从单一核心协议扩展到独立扩展。** 2026-07-28 版本引入无状态协议核心、认证强化及扩展框架；MCP Apps 有 2026-01-26 版本化规范；Tasks 页面对应 2026-07-28 且调研时标为 draft。[MCP 版本说明](https://blog.modelcontextprotocol.io/posts/2026-07-28/) [MCP Apps 规范](https://apps.extensions.modelcontextprotocol.io/specification/2026-01-26/apps.mdx) [Tasks 规范](https://tasks.extensions.modelcontextprotocol.io/specification/2026-07-28/tasks) 教学正文必须标明观察版本和成熟度，发布前重新确认，不能写成永恒定义。
3. **GenAI 可观测性约定仍是活跃规范工作。** OpenTelemetry 已将 GenAI 语义约定放在独立项目中；本轮新增页面解释统一记录模型/工具调用的作用，并把当前字段和成熟度放在带日期的正文中。[OpenTelemetry GenAI conventions](https://github.com/open-telemetry/semantic-conventions-genai)
4. **模型评估关注点不止得分，也包括评估诚信与风险。** NIST 2026 年公开材料将 Agent 评测中的解题污染和评分器被利用列为风险案例；本轮沿用现有 `agent-evals` 解释评测污染，不另建重复词条。[NIST：Cheating on AI Agent Evaluations](https://www.nist.gov/caissi/cheating-ai-agent-evaluations)

更新方式：趋势类内容记录规范名称、版本/状态、核对日期和来源；每季度检查协议与标准页面，稳定基础概念按年复核。新版本有重大兼容变化时，更新相关专题和互链，不按每个发布日期复制新词条。

## 实施建议与验收标准

### 本轮实施结果

1. **内容范围**：复核 67 个既有概念，并完成新增 50 个概念；每个概念均有英文和中文页面，共 234 篇正文。
2. **结构与双语审校**：所有正文使用同一组 12 个二级标题；以概念为单位核对定义、示例、边界、来源和相关链接。英文参考 ASD-STE100 的清晰表达原则，中文按自然表达重写。
3. **事实复核**：对模型生命周期、MCP/A2A 协议和服务商 API 等高变化内容检查维护方资料，并在正文保留版本或适用范围。
4. **质量复核**：除 slug 和章节顺序外，逐项复核定义、机制和应用示例的双语覆盖。对照复核发现并修正了 LLM、Agent 工作流、产物反馈、验证产物、轨迹评分、Agent Evals、Grader 和结构化输出中的信息遗漏或过度断言；完整性、SEO 与构建结果见下文。静态检查不等于事实审校或发布验证。
5. **后续维护**：A2A、MCP、OWASP、NIST 和 OpenTelemetry 等页面应在规范更新时复查；稳定基础概念按年复核。

### 每篇质量门槛

- **定义准确**：至少一个定义来源来自原始研究、正式规范或标准组织；产品文档只支撑它的具体实现案例。
- **易读易懂**：每篇按科普速读、概览、核心定义、背景与发展、工作机制、软件测试与开发中的应用、优势与局限、相近术语对比、实施建议、常见误区、FAQ、相关资源组织；先给直白定义与用途，用具体场景解释系统做了什么，不堆术语，不夸大自治、正确率或安全性。英语参考 ASD-STE100 的短句、主动语态、单句单点与术语一致原则；中文采用等效的清楚写法。
- **应用科普**：至少覆盖一个真实应用场景以及输入、处理、输出；AI 测试/开发用途应自然说明，而不是强行加营销式案例。
- **边界清晰**：解释失败模式、成本/质量权衡及人工/系统控制点；协议和正在演进的规范标注版本、状态、核对日期。
- **双语一致**：EN/ZH 同 slug、事实和来源一致；标题、摘要、定义、机制、示例、风险与 related 链接逐项核对，确保解释点和例子覆盖一致，不做逐句直译，也不以章节齐全代替内容深度审校。
- **站内连接**：每篇至少链接 2 个有效的同语言 AI Wiki 条目；既有页面的标题或描述如只需补定义/互链，优先做局部更新。

### 交付检查

- 同 slug 集合与章节顺序检查覆盖 117 组 EN/ZH 页面；每篇有 12 个指定二级标题，`lastReviewedAt` 为 `2026-10-12`。
- 新增 100 篇 Markdown 页面，分别是 50 篇英文和 50 篇中文；另外 134 篇既有正文有修改。
- `git diff --check` 已通过。`npm run wiki:integrity:check` 扫描 452 篇 Wiki/AI Wiki 页面（含 234 篇 AI Wiki），错误和警告均为 0。
- `npm run seo:check` 扫描 452 篇测试 Wiki、234 篇 AI Wiki 和 566 篇博客；标题/摘要缺失、重复标题、死链、无效 related 和孤立词条均为 0。全站有 51 条长摘要提示，AI Wiki 中为 0。
- `npm run build` 已通过：生成 3,477 个页面，SEO 构建检查通过，覆盖 2,523 个可索引页面和 2,523 个 sitemap URL。Astro 检查为 0 错误、0 警告、1 条不相关的未使用变量提示，位置在 Guild 页面。
- `wiki:style:check` 当前只扫描测试 Wiki，不是本轮 AI Wiki 文案门禁；ASD-STE100 可读性审校按用户要求人工执行。
- 静态检查只证明结构、链接和页面能构建，不代表生产部署、页面在线展示或业务效果已经验证。

## 调研与来源边界

词条优先链接原始论文、正式规范、标准组织或维护方资料。厂商文档用于说明该厂商的具体实现，不单独定义通用概念。协议和产品会变化，引用的日期或版本表示本轮核对边界；此记录不声称所有 234 篇的每个事实都经过逐句独立查证。
