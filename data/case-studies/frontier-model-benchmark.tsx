import {
  BulletList,
  Callout,
  CaseStudySection,
  DataTable,
  Paragraph,
  SubHeading,
} from "@/components/case-study/CaseStudySection"
import { ENStub } from "@/components/case-study/ENStub"
import type { CaseStudyEntry, Locale } from "@/lib/case-studies"

const SLUG = "frontier-model-benchmark"

export const meta: CaseStudyEntry["meta"] = {
  slug: SLUG,
  title: {
    en: "Frontier-Model Benchmark Dashboard",
    zh: "五大模型横评 Dashboard",
  },
  tagline: {
    en: "Hands-on comparison of Claude / ChatGPT / Gemini / DeepSeek / GLM / MiniMax across six dimensions, mapped to real product decisions I've made. Not a leaderboard — one usage story per model.",
    zh: "对 Claude / ChatGPT / Gemini / DeepSeek / GLM / MiniMax 6 大模型做编程 / 中文 / Agent 调度 / 长文本 / 多模态 / 成本 6 维实测对比。不是排行榜——每个模型一个真实使用故事，对应我做过的具体产品决策。",
  },
  highlight: {
    en: "Decision-oriented benchmark, not score-oriented",
    zh: "亮点：决策导向的横评，不是分数导向",
  },
  overview: {
    type: { en: "Personal benchmark dashboard", zh: "个人决策框架 + 公开 Notion 看板" },
    period: { en: "2026.02 — Present (continuously updated)", zh: "2026.02 — 至今（持续更新）" },
    team: { en: "Solo", zh: "独立完成" },
    stack: {
      en: "Notion · Custom test prompts · Real-task evaluation",
      zh: "Notion 看板 · 自建测试 prompt 集 · 真实任务实测",
    },
    grade: {
      en: "Public dashboard, used for daily model selection",
      zh: "公开看板，作为日常模型选型依据",
    },
  },
  roles: {
    en: ["Analyst", "Decision Framework Designer", "Writer"],
    zh: ["分析师", "决策框架设计者", "内容产出"],
  },
  toc: [
    { id: "why", num: "一", label: { en: "Why · Decisions", zh: "Why · 不是排行榜" } },
    { id: "framework", num: "二", label: { en: "What · 6 Dimensions", zh: "What · 6 维框架" } },
    { id: "how", num: "三", label: { en: "How · Method", zh: "How · 方法论" } },
    { id: "findings", num: "四", label: { en: "Findings", zh: "关键发现" } },
    { id: "reflection", num: "五", label: { en: "Reflection", zh: "反思与收获" } },
  ],
}

function Content({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <CaseStudySection title="English summary">
        <ENStub
          slug={SLUG}
          summary="A decision-oriented benchmark covering Claude (Opus / Sonnet), ChatGPT (5), Gemini (2.5), DeepSeek (V3), GLM (4.5), and MiniMax (M2). Six dimensions: coding, Chinese reasoning, agent orchestration, long-context, multimodal, cost-per-task. Critically, each model gets one real usage story from my OpenClaw stack — the dashboard is built to answer 'which model should I deploy for this task right now', not 'who's the best overall'."
          label={{
            badge: "Translation in progress",
            body: "Chinese version below covers the rationale (why most public benchmarks are useless for product decisions), the 6-dimension framework, my evaluation methodology, and key findings from running the same test suite quarterly.",
            cta: "Read the full Chinese version",
            back: "Back to projects",
          }}
        />
      </CaseStudySection>
    )
  }

  return (
    <>
      <CaseStudySection id="why" num="一、" title="为什么做这件事（Why）">
        <SubHeading label="问题">公开 benchmark 解决不了实际选型</SubHeading>
        <Paragraph>
          作为 AI 重度使用者，我每天面对的问题不是「哪个模型最聪明」，而是<strong>「我现在要做这件具体的事，该用哪个模型」</strong>。
          公开的 MMLU、HumanEval、Chatbot Arena 等 benchmark 解答不了这个问题，原因有三：
        </Paragraph>
        <BulletList
          items={[
            "测试任务跟我的实际场景脱节（学术任务 vs 一人公司运营任务）",
            "只给排名不给权衡（这个领先 0.5 分代表什么？）",
            "不计成本（Opus 任务做完成本是 Sonnet 的 5 倍，啥时候值得？）",
          ]}
        />

        <SubHeading label="目标">建立一套个人决策框架</SubHeading>
        <Callout variant="insight">
          目标不是出一个排行榜，而是<strong>「下一次我要做 X 类任务时，我能在 30 秒内决定用哪个模型」</strong>。
          所以这个 dashboard 是<strong>决策导向</strong>的——每一个模型在每一维度旁边都对应一个我亲身经历的具体使用故事。
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="framework" num="二、" title="6 维评测框架（What）">
        <Paragraph>基于我一人公司场景中真实遇到的任务，我定义了 6 个评测维度：</Paragraph>
        <DataTable
          headers={["维度", "代表任务", "为什么这个维度"]}
          rows={[
            ["编程能力", "多文件代码生成、调试、重构", "OpenClaw + 网站开发的核心场景"],
            ["中文推理", "小红书文案、朋友圈写作、Cover Letter 润色", "国内内容运营 + 求职的核心"],
            ["Agent 调度", "多步骤工作流、Tool calling、Function 选择", "构建多智能体系统的关键能力"],
            ["长文本", "长文档总结、跨多文件代码理解", "Vault 内容消费 + 代码库理解"],
            ["多模态", "图片理解、UI 截图反推、PDF 解析", "简历分析、Bug 截图诊断"],
            ["单次任务成本", "完成一个标准任务的 token 消耗 × 单价", "影响是否值得用顶级模型"],
          ]}
        />

        <SubHeading label="参评模型">6 大主流前沿</SubHeading>
        <DataTable
          headers={["模型", "我的部署位置", "主要用途"]}
          rows={[
            ["Claude Opus 4.7 / Sonnet", "OpenClaw Tier 3（贵 token）", "战略 + 代码 + 内容"],
            ["ChatGPT-5", "对照组 + 多模态场景", "图像理解、文案备选"],
            ["Gemini 2.5", "对照组 + 长文本场景", "长文档总结"],
            ["DeepSeek V3 / R1", "对照组 + 中文推理", "国内场景成本敏感任务"],
            ["GLM 4.5 / Z1（智谱）", "对照组 + 国内 Agent / Function calling", "国内 Tool-use 任务、中文 Agent 调度"],
            ["MiniMax M2", "OpenClaw Tier 1（Nova 秘书）", "事务调度 + 国内 API 友好"],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="how" num="三、" title="评测方法论（How）">
        <SubHeading label="原则 1">真实任务，不造测试集</SubHeading>
        <Paragraph>
          所有测试任务来自我<strong>当周真实遇到的工作</strong>——重构 OpenClaw 的某个 Skill、给某个 JD 写定制简历、解析一份 PDF 简历。
          这保证测试结果直接映射到我会做的决策上。
        </Paragraph>

        <SubHeading label="原则 2">同任务跑多模型，盲读结果</SubHeading>
        <Paragraph>
          每个测试任务交给所有 6 个模型，先不看哪个是哪个，盲读评分（1-5 分），最后揭晓。
          这避免品牌偏好（比如对 Claude 的偏爱）影响判断。
        </Paragraph>

        <SubHeading label="原则 3">记录单次成本</SubHeading>
        <Paragraph>
          每次测试记录 input token + output token，按官方定价折算单次任务成本。然后看「质量分 / 成本」性价比。
        </Paragraph>

        <SubHeading label="原则 4">季度复测</SubHeading>
        <Paragraph>
          模型版本更新频繁（Opus 4.5 → 4.7 短短几个月），所以每季度跑一次同样的任务集，看相对位次变化。
        </Paragraph>
      </CaseStudySection>

      <CaseStudySection id="findings" num="四、" title="关键发现（部分）">
        <Callout variant="tip">
          以下结论基于我 2026 年 Q1-Q2 的实测。具体数据 + 完整使用故事在公开 Notion 看板。这里只摘选 5 条最有决策价值的结论。
        </Callout>

        <SubHeading label="01">编程任务：Opus 是天花板，但 Sonnet 的性价比是甜点</SubHeading>
        <Paragraph>
          复杂多文件重构 Opus 明显胜出，但日常 80% 的代码任务 Sonnet 完成度足够，成本是 Opus 的 1/5。我现在的策略：默认 Sonnet，遇到「这个我自己都没把握的难题」才切 Opus。
        </Paragraph>

        <SubHeading label="02">中文推理：DeepSeek + Claude 双甜点</SubHeading>
        <Paragraph>
          DeepSeek 在中文表达自然度上明显领先英语原生模型，且成本极低。Claude 在「品味判断」（什么文案更打动人）上仍是天花板。我的小红书文案策略：DeepSeek 起草，Claude 终审。
        </Paragraph>

        <SubHeading label="03">Agent 调度：Claude Sonnet 仍是最稳的</SubHeading>
        <Paragraph>
          Tool calling 的正确率、函数选择的合理性、错误处理的优雅度，Claude Sonnet 在我的测试中最稳定。这是 OpenClaw 主力调度层选 Claude Code 的核心理由。
        </Paragraph>

        <SubHeading label="04">长文本：Gemini 2.5 在 100K+ 场景明显领先</SubHeading>
        <Paragraph>
          一次性吃下整本书 / 大型代码库时 Gemini 2.5 的「关键信息回忆率」最高。Claude 的 1M 上下文实战中也很强，但在 100-500K 区间 Gemini 性价比更优。
        </Paragraph>

        <SubHeading label="05">国内任务：MiniMax M2 是被低估的低层调度首选</SubHeading>
        <Paragraph>
          国内 API、低延迟、单价便宜，作为 Nova 秘书层的底座非常稳。中文表达不如 DeepSeek 但作为「事务调度」绝对够用——这是 OpenClaw Tier 1 选 MiniMax 的根本原因。
        </Paragraph>
      </CaseStudySection>

      <CaseStudySection id="reflection" num="五、" title="反思与收获">
        <SubHeading>方法论上的收获</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>「不要只看分数」是反复验证的：</strong>每次有新模型出来，公开 benchmark 排第一的模型在我的实际任务里经常不如老模型——分数和真实性价比经常错位
            </span>,
            <span key="2">
              <strong>盲测的价值：</strong>我对 Claude 的偏好真实存在，盲测帮我反复纠正这个偏差
            </span>,
            <span key="3">
              <strong>季度复测的必要性：</strong>模型版本迭代太快，半年前的结论可能完全失效
            </span>,
          ]}
        />

        <SubHeading>对 AI PM 思维的塑造</SubHeading>
        <Callout variant="insight">
          做这件事让我对「AI PM 该懂什么」有了一个具体的标准：<strong>不是知道每个模型的参数和 benchmark 排名，而是面对一个具体任务能在 30 秒内给出「用什么模型、估算多少成本、为什么是它」的决策。</strong>
          这才是真正能在团队里加价值的能力——而不是看公开排行榜复读。
        </Callout>
      </CaseStudySection>
    </>
  )
}

const entry: CaseStudyEntry = { meta, Content }
export default entry
