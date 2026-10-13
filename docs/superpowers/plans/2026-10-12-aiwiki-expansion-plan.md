# AI Wiki 扩充计划（调研与实施方案）

> 调研日期：2026-10-12。状态：待分批实施；本次只形成计划，尚未新增或修改 AI Wiki 正文。本文提出 50 个概念候选，不等于一次性发布承诺；正式开写前仍需做语义去重、来源复核和批次准入。

## 方案结论

- **建议扩充，但按 50 个“概念”规划，不按 50 篇文件理解。** 当前中英文各有 67 篇。若新增 50 个概念并保持双语，最终会新增最多 100 篇 Markdown 文件；建议先发布 15 个双语词条（30 篇），验收内容质量与维护流程后再决定后续批次。
- **把 50 个候选当作选题池。** 第一优先级应是能解释 AI 基础机制、RAG、Agent 工程、安全和 AI 测试的词条。偏通用媒体生成、机器人、内容溯源等主题与网站现有的 AI/Vibe Coding 定位距离更远，先进入候补池；仅在确认读者需求和站点边界后再排期。
- **先修内容方法，再扩数量。** 抽查发现部分中文页反复使用同一套“高级功能”“基础控制点”“流水线工位”泛化描述（分别出现在 38、28、38 篇中文词条中）。新增页面不应复用这些套句；每篇需用与概念贴合的机制解释、应用场景和失败边界来讲清楚。
- **发布前先做一轮存量更新。** 134 篇现有中英文文件的 `topic` 都是 `ai-vibe-coding`，`lastReviewedAt` 都是 `2026-03-02`。新主题不应未经判断全部沿用这一 topic；第一批同时抽查相邻旧条目的事实、来源和互链，再确定是否需要小范围修正。
- **给扩充内容建立轻量主题标记。** 建议新词条按主概念选用 `ai-foundations`、`retrieval-and-rag`、`multimodal-ai`、`ai-agents`、`ai-safety-quality` 之一，次级主题放入 `tags`；与 Vibe Coding 直接相关的现有条目继续使用 `ai-vibe-coding`。当前索引仍按字母展示，不必为这次扩充同时开发分类筛选。

## 目标与基线

- 把 AI Wiki 从“模型与开发工具名词”扩展为一套面向普通读者的 AI 科普图谱：读者能从模型如何学习、如何检索资料、如何处理多模态输入，继续读到 Agent 的实际执行方式、质量验证和风险边界。
- 当前 `src/content/aiwiki/en/` 与 `src/content/aiwiki/zh-cn/` 各有 67 篇，两个目录的文件名一一配对。以下 50 个候选均没有现存同名 slug；“相邻内容”列出需要交叉链接或明确边界的既有条目，不能把新文写成旧文的重复摘要。
- 扩充规模建议按 **50 个概念 × 2 种语言 = 最多 100 篇正文** 规划，分阶段发布。先完成编辑与去重，再决定是否全部采用；候选数不等于一次性发布承诺。
- 范围提醒：当前 AI Wiki 首页按字母列出词条并提供搜索，站点描述聚焦 AI 与 Vibe Coding。若未来要覆盖一般 AI 科普，可先通过清晰的词条导航与页面简介说明范围；分类筛选 UI 属于独立体验改动，不是本轮内容扩充的前置条件。

## 内容写法与一致性约定

以现有 AI Wiki 的词条详情为体例，而不是套用测试 Wiki 的 frontmatter。沿用 AI Wiki 已有字段：`title`、`titleEn` / `titleZh`、`slug`、`lang`、`summary`、`topic`、`aliases`、`tags`、`related`、`lastReviewedAt`。中英文使用相同 slug，事实、例子、适用边界、来源和相关条目保持一致；表达按语言重写，不逐句硬译。

正文沿用现有详情页的语气、双语组织和导航约定，但不照搬现有重复句式，也不强迫所有概念使用完全相同的小标题。可按主题选择：一句话定义 → 机制或流程示例 → 在开发、测试或产品中的应用 → 易混概念 → 局限与风险 → 相关条目和一手来源。每篇至少用一个具体场景回答“这是什么、AI 在这里做了什么、它不能保证什么”。先解释通用概念；标准、协议、厂商 API 只用于解释具体实现，不用单一厂商的宣传口径定义通用术语。

收录前用统一评分表评估：与 AI 开发/测试读者的相关性、和现有词条的区分度、能否用具体例子讲透、是否有可靠一手来源、后续维护成本。任何候选若主要靠改写现有页面才能成立，应优先扩充原页面或从新增名单移出。多模态和机器人类候选即使技术上有趣，也要先证明与站点受众直接相关。

## 50 个候选词条

### A. 模型如何学习与运行（12）

| # | 候选词条 / 暂定 slug | 科普重点 | 与现有条目的边界 | 一手来源 |
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

| # | 候选词条 / 暂定 slug | 科普重点 | 与现有条目的边界 | 一手来源 |
|---:|---|---|---|---|
| 13 | 向量搜索 / `vector-search` | 用向量相似度寻找语义相关内容，并与精确关键词匹配做直观比较。 | 与 `codebase-indexing-rag` 相邻；新文解释可复用的搜索机制。 | [Faiss 原始论文](https://arxiv.org/abs/1702.08734) |
| 14 | 向量数据库 / `vector-database` | 解释向量索引、相似度查询、元数据过滤分别解决什么问题；不把“有向量列”自动等同于完整 RAG。 | 与代码库 RAG 互链，不再复述其产品化场景。 | [The Faiss library](https://arxiv.org/abs/2401.08281) |
| 15 | 近似最近邻搜索（ANN）/ `approximate-nearest-neighbor` | 说明大规模向量查询为何常用近似索引，以及速度、内存、召回率如何权衡。 | 当前无同名条目；作为向量搜索/数据库的机制级补充。 | [Billion-scale similarity search with GPUs](https://arxiv.org/abs/1702.08734) |
| 16 | BM25 关键词检索 / `bm25` | 通过词频和文档频率解释经典关键词排序为何仍能找到型号、错误码和专有名词。 | 与新候选“混合检索”互链；避免把传统检索误写成过时技术。 | [Microsoft Research：Relevance weighting of search terms](https://www.microsoft.com/en-us/research/publication/relevance-weighting-of-search-terms/) |
| 17 | 混合检索 / `hybrid-search` | 展示关键词检索与向量检索并用的流程，以及精确词与语义词如何互补。 | 与 `codebase-indexing-rag` 相邻；RAG 页面讲应用闭环，本条讲候选召回。 | [Azure AI Search 混合搜索技术文档](https://learn.microsoft.com/en-us/azure/search/hybrid-search-overview)（只作为实现例子，不作为通用定义） |
| 18 | 检索重排 / `reranking` | 解释先快速召回、再对少量候选精排的两阶段流程和代价。 | 与 `codebase-indexing-rag` 相邻；不与 `graders` 的答案评分混淆。 | [ColBERT 原始论文](https://arxiv.org/abs/2004.12832) |
| 19 | 倒数排名融合（RRF）/ `reciprocal-rank-fusion` | 用两份不同搜索结果的排序清单解释如何融合名次，而不直接比较量纲不同的分数。 | 当前无同名条目；作为混合检索的独立算法补充。 | [Google Research：Reciprocal Rank Fusion](https://research.google/pubs/reciprocal-rank-fusion-outperforms-condorcet-and-individual-rank-learning-methods/) |
| 20 | 文档分块 / `document-chunking` | 说明长文档为何会被切成可检索单元，并用段落边界/代码函数举例展示分块策略的副作用。 | 与代码库 RAG 相邻；必须写明分块是系统设计选择，不存在对所有资料都最优的固定长度。 | [RAG 原始论文](https://arxiv.org/abs/2005.11401)；[检索实现示例](https://developers.openai.com/api/docs/guides/retrieval) |
| 21 | GraphRAG / `graphrag` | 解释知识图谱、关系和检索如何协作回答跨文档关系问题；用“谁与谁有关”而非只找相似段落举例。 | 与 `codebase-indexing-rag` 的 RAG 大类相邻；清楚说明它是一种架构路线，不是 RAG 的同义词。 | [Microsoft Research GraphRAG 项目与论文入口](https://www.microsoft.com/en-us/research/project/graphrag/) |
| 22 | 多模态检索增强生成 / `multimodal-rag` | 说明知识库含图像、音频或视频时，检索证据与生成回答如何跨模态配合；提示读者检查引用证据是否真支持结论。 | 与代码库文本 RAG 有边界差异；需链接 `embeddings`、`vector-search` 和 LLM 条目。 | [ImageBind](https://arxiv.org/abs/2305.05665)；[RAG 原始论文](https://arxiv.org/abs/2005.11401) |

### C. 图像、音频、视频与行动（8）

| # | 候选词条 / 暂定 slug | 科普重点 | 与现有条目的边界 | 一手来源 |
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

| # | 候选词条 / 暂定 slug | 科普重点 | 与现有条目的边界 | 一手来源 |
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

| # | 候选词条 / 暂定 slug | 科普重点 | 与现有条目的边界 | 一手来源 |
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

| 已有条目 | 相关候选 | 收录边界 |
|---|---|---|
| `large-language-models-llms`、`small-language-models-slms`、`gpt`、`llama`、`mistral-mixtral` | Token、Embedding、Transformer、预训练、MoE、量化、蒸馏、合成数据 | 现有模型词条保留为模型概览；新词条做机制解释与应用示例，概览只放短定义和内链。 |
| `direct-preference-optimization-dpo`、`reinforcement-fine-tuning-rft` | 指令微调、RLHF | 先校对现有 DPO/RFT 页的术语和训练阶段，再分别写 SFT/偏好对齐；不把所有后训练都叫 RLHF。 |
| `codebase-indexing-rag` | Embeddings、向量搜索/数据库、BM25、混合检索、重排、分块、GraphRAG、多模态 RAG | 现有页聚焦代码库索引场景；候选分别讲可迁移组件和其他数据形态。若现有页已覆盖到足够深度，就将其改为专题章节而非另建重复页。 |
| `agent-evals`、`graders`、`trace-grading` | 推理时计算、协议一致性测试、GenAI 可观测性、红队测试、蜕变测试 | 区分性能/结果评分、协议符合性、运行遥测、安全攻击面测试和基于不变量的测试。 |
| `multi-agent-orchestration`、`subagents`、`acp-agent-client-protocol`、`model-context-protocol-mcp` | A2A、Agent Card、MCP Apps/Tasks/Elicitation | 现有页解释基础概念；新文只在规范已明确、读者问题独立时收录。Agent Card 若无法形成独立科普深度，则并入 A2A。 |
| `human-in-the-loop`、`permission-policies-allowed-command-list`、`privacy-mode` | Agent 身份/授权、工具沙箱、过度代理权限、提示注入 | 用“主体—授权—执行隔离—用户确认—攻击输入”区分概念，不暗示增加提示规则即可保证安全。 |

候选 slug 是草案，应在实施前用现有 `slug`、`aliases`、正文标题和相关链接做第二轮语义去重；仅看文件名不够。若词条现有页面的覆盖已经满足读者任务，优先扩充原页并把它从 50 个“新增独立词条”中换出。

## 当前趋势快照（截至 2026-10-12）

1. **Agent 互操作进入标准化与身份治理议程。** NIST 于 2026-02-17 启动 AI Agent Standards Initiative，重点包含互操作协议、安全与身份/授权研究。[NIST 倡议页](https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative) 因此本计划新增 A2A、身份与授权，但不把某一家的 Agent 产品当成标准。
2. **MCP 正在从单一核心协议扩展到独立扩展。** 2026-07-28 版本引入无状态协议核心、认证强化及扩展框架；MCP Apps 有 2026-01-26 版本化规范；Tasks 页面对应 2026-07-28 且调研时标为 draft。[MCP 版本说明](https://blog.modelcontextprotocol.io/posts/2026-07-28/) [MCP Apps 规范](https://apps.extensions.modelcontextprotocol.io/specification/2026-01-26/apps.mdx) [Tasks 规范](https://tasks.extensions.modelcontextprotocol.io/specification/2026-07-28/tasks) 教学正文必须标明观察版本和成熟度，发布前重新确认，不能写成永恒定义。
3. **GenAI 可观测性约定仍是活跃规范工作。** OpenTelemetry 已将 GenAI 语义约定放在独立项目中；这一候选适合做“为什么要统一记录模型/工具调用”的科普，并将当前字段和成熟度放在带日期的侧栏中。[OpenTelemetry GenAI conventions](https://github.com/open-telemetry/semantic-conventions-genai)
4. **模型评估关注点不止得分，也包括评估诚信与风险。** NIST 2026 年公开材料将 Agent 评测中的解题污染和评分器被利用列为风险案例；网站现有 `agent-evals` 已谈数据污染，因此先扩展旧页或在新页中严守边界，不新增一个仅重复“测试集污染”的薄词条。[NIST：Cheating on AI Agent Evaluations](https://www.nist.gov/caissi/cheating-ai-agent-evaluations)

更新方式：趋势类内容记录规范名称、版本/状态、核对日期和来源；每季度检查协议与标准页面，稳定基础概念按年复核。新版本有重大兼容变化时，更新相关专题和互链，不按每个发布日期复制新词条。

## 实施建议与验收标准

### 分批落地

0. **存量校准（不新增条目）**：抽查 AI Wiki 全部中英文配对，核对受新词影响的定义、来源、`topic`、推荐链接和更新时间；重点复核 `ai-agent`、`model-context-protocol-mcp`、`prompt-caching` 等更新较快页面的版本化陈述；确定新主题标记，并记录当前完整性检查器的能力边界。
1. **试点批次（15 对 / 30 篇）**：从模型基础、检索/RAG、Agent 安全和 AI 测试中选最相关且互不重复的 15 个主题。优先覆盖 Token、Embedding、指令微调、量化、LoRA、向量搜索、混合检索、重排、分块、提示注入、Agent 授权/沙箱、红队或蜕变测试等方向；具体名单通过收录评分后冻结。先验证科普质量、双语审稿和推荐链接是否可持续。
2. **扩展批次（最多 15 对）**：试点通过后补齐高分的模型机制、GraphRAG、协议互操作、Agent 身份与观测等主题。每批先更新相邻旧条目的短定义和互链，再新增页面。
3. **候补批次（最多 20 对）**：剩余候选只有在相关性评分达标、资料有新意且维护成本可接受时才实施。通用图像/音频/视频、机器人和 C2PA 等泛 AI 主题优先在此复审；不为凑够 50 而发布。

### 每篇质量门槛

- **定义准确**：至少一个定义来源来自原始研究、正式规范或标准组织；产品文档只支撑它的具体实现案例。
- **易读易懂**：首屏先给直白定义与用途；通过一个具体流程或例子说明模型/系统做了什么，不堆术语，不夸大自治、正确率或安全性。
- **应用科普**：至少覆盖一个真实应用场景以及输入、处理、输出；AI 测试/开发用途应自然说明，而不是强行加营销式案例。
- **边界清晰**：解释失败模式、成本/质量权衡及人工/系统控制点；协议和正在演进的规范标注版本、状态、核对日期。
- **双语一致**：EN/ZH 同 slug、事实和来源一致；标题、摘要、示例、风险与 related 链接均逐项核对，不做逐句直译。
- **站内连接**：每篇至少链接 2 个有效的同语言 AI Wiki 条目；既有页面的标题或描述如只需补定义/互链，优先做局部更新。

### 交付检查

- 先完成候选词条语义去重和优先级审批，再创建双语内容文件；slug、别名、`related` 和中英文标题对照真实文件校验。
- 按站点 AI Wiki schema 编写，更新 `lastReviewedAt`，补一手来源。MCP/A2A/OWASP/NIST 等会变的页面注明所据版本。
- 先增强或补充 AI Wiki 内容校验：当前 `wiki:integrity:check` 会检查 AI Wiki 的标题/摘要字段、H1、重复 slug 和正文内链，但不检查 EN/ZH 配对是否齐全，也不核对 AI Wiki `related` frontmatter 是否指向存在的同语言条目；`seo:check` 会检查 AI Wiki `related` 和相关内链目标。`wiki:style:check` 当前只扫描测试 Wiki，不扫描 AI Wiki。补齐这几项后再把相应检查纳入批次门禁。
- 使用完整性/SEO 检查与 `npm run build` 验证内容元数据、双语配对、链接、路由和页面输出；抽查桌面与移动端详情页、搜索、侧栏与 related 导航。静态检查只能证明结构和链接等可机器验证项，不能代替双语事实审校和科普质量审稿。
- 交付时分别报告新增中英文条目数量、语义去重结果、内容检查/构建结果；不要把静态构建结果表述成线上可见或业务效果已验证。

## 调研与来源边界

本计划的概念定义优先引用提出方法的论文、研究机构或规范。对不断变化的 Agent 协议、MCP 扩展和 OpenTelemetry 语义约定，引用带版本的规范或维护方资料，并要求实施前再次核对。厂商实现文档（如检索分块、混合检索示例）只用于解释一种具体做法，不作为通用定义的唯一证据。所有来源本轮核对日期为 2026-10-12。
