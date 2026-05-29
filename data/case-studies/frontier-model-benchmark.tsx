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
    en: "Frontier-Model Notes: Picking a Brain for My Agent",
    zh: "前沿模型横评：给我的 Agent 挑「脑子」",
  },
  tagline: {
    en: "An ongoing, hands-on log of testing Claude / GPT / Gemini / DeepSeek / MiniMax / GLM — both the base models and each vendor's own chatbot/agent products — to find the right brain for Nova (my agent on OpenClaw), and to learn which brain fits which scene. Not a leaderboard; a usage diary that keeps getting updated.",
    zh: "一份持续更新的实测记录：把 Claude / GPT / Gemini / DeepSeek / MiniMax / 智谱 GLM 的底层模型，以及各家自己的 chatbot / Agent 产品都用过一遍，目的是给我跑在 OpenClaw（logo 像龙虾、国内都叫它龙虾）上的 Agent —— Nova 找最合适的「脑子」，并搞清楚不同场景该用哪个脑子。不是排行榜，是一份还在写的使用日记。",
  },
  highlight: {
    en: "A living usage log, not a one-time scorecard",
    zh: "亮点：活文档式的使用记录，不是一次性定稿",
  },
  overview: {
    type: { en: "Living usage log + personal selection notes", zh: "活文档式使用记录 + 私人选型笔记" },
    period: { en: "2025 — Present (continuously updated)", zh: "2025 — 至今（持续更新中）" },
    team: { en: "Solo", zh: "独立完成" },
    stack: {
      en: "OpenClaw routing layer · vendor chatbots & agents · real daily tasks",
      zh: "OpenClaw 调用层 · 各家 chatbot/Agent 产品 · 日常真实任务",
    },
    grade: {
      en: "Keeps evolving; drives which brain I route to for each task",
      zh: "持续记录中，决定我每类任务用哪个脑子",
    },
  },
  roles: {
    en: ["Heavy user", "Model-selection note-taker", "Writer"],
    zh: ["重度使用者", "选型记录者", "内容产出"],
  },
  toc: [
    { id: "why", num: "一", label: { en: "Why · Find a Brain", zh: "Why · 给 Nova 找脑子" } },
    { id: "framework", num: "二", label: { en: "What · Dimensions", zh: "What · 评测维度" } },
    { id: "how", num: "三", label: { en: "How · Method", zh: "How · 方法论" } },
    { id: "models", num: "四", label: { en: "Usage Stories", zh: "各模型使用故事" } },
    { id: "findings", num: "五", label: { en: "Findings", zh: "关键发现" } },
    { id: "reflection", num: "六", label: { en: "Reflection", zh: "反思与边界" } },
  ],
}

function Content({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <CaseStudySection title="English summary">
        <ENStub
          slug={SLUG}
          summary="An ongoing log of testing frontier models — Claude, GPT, Gemini, DeepSeek, MiniMax, and Zhipu GLM — not just as raw models but through each vendor's own chatbot and agent products. The goal started practical: find the right brain to wire into Nova, my agent running on OpenClaw, and learn which model fits which scene. I compare context handling, multimodality, cost, hard-task quality, response speed, and specific generation skills (image / video / voice / text). It's a living document, not a finished scorecard — and it's honest about its limits: I never benchmarked coding on purpose (I leave coding to Gemini and Claude), and ~80% of my use is Chinese, so I didn't deliberately compare Chinese vs. English."
          label={{
            badge: "Translation in progress",
            body: "The Chinese version below covers the motivation, the evaluation dimensions and their boundaries, my (admittedly informal) methodology, a real usage history for each model, and the findings I keep revising.",
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
        <SubHeading label="起因">给 Nova 找最合适的「脑子」</SubHeading>
        <Paragraph>
          我做这件事最开始的动机很实际：OpenClaw（logo 像龙虾、国内都叫它龙虾）上跑着我的 Agent —— Nova，我得给 Nova 接一个底层模型当「脑子」。
          但不同任务对脑子的要求不一样，所以我开始一个一个去试每个模型的边界——
          <strong>到底哪个脑子最合适，以及不同场景下该换哪个脑子。</strong>
        </Paragraph>
        <Paragraph>
          试着试着就铺开了。我不只测底层模型，也大量用各家自己的 Agent / Chatbot 产品：
          Gemini 的 chatbot、Claude 的 chatbot / Claude Code / Co-worker、OpenAI 的 ChatGPT / GPT Image / Sora 2、
          Grok、DeepSeek、MiniMax（多模态）、智谱 GLM。这份东西就慢慢长成了一份选型笔记。
        </Paragraph>

        <Callout variant="insight">
          这不是一篇定稿的横评，而是一份<strong>持续体验、不断更新的活文档</strong>。
          模型大版本更新很快，我每用出新的体感就回来改。所以下面的结论都标着「目前」——
          它们是某个时间点上我自己信得过的判断，不是终审。
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="framework" num="二、" title="评测维度（What）">
        <Paragraph>我关心的不是跑分，而是真正影响我「这件事用谁」的几个维度：</Paragraph>
        <DataTable
          headers={["维度", "我在意什么"]}
          rows={[
            ["上下文能力", "能不能一次吃下长文档 / 大代码库，关键信息记得住"],
            ["多模态能力", "图片、PDF、音视频理解得怎么样"],
            ["任务成本", "完成一个任务实际花多少（订阅 Plan + token 用量两头看）"],
            ["复杂任务处理", "硬骨头任务的完成度和逻辑严密程度"],
            ["回复速度", "日常交互的体感快慢"],
            ["具体生成场景", "图片生成 / 视频生成 / 语音生成 / 文本生成各自的能力"],
          ]}
        />

        <SubHeading label="诚实标注">这套维度的边界 / 局限</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>没有专门测编程能力。</strong>我的编程主要交给 Gemini 和 Claude，所以没把「写代码」当成一个独立维度去横向对比，下面任何关于编程的判断都只是顺带的体感。
            </span>,
            <span key="2">
              <strong>没有刻意对比中英文差异。</strong>我大约 80% 是中文使用场景，所以没有专门做中英文能力的对照测试——英文场景的结论我自己也不敢打包票。
            </span>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="how" num="三、" title="评测方法论（How）">
        <SubHeading label="原则 1">用各家自己的产品，随机切换</SubHeading>
        <Paragraph>
          我经常直接用各家自己的 Agent / Chatbot 产品，而且是随机切换：遇到一个任务，
          我会<strong>同时让 4~5 个不同家的 Agent 一起跑</strong>，把结果摆在一起对比。
          这种比法不严谨，但它贴近我真实的使用方式。
        </Paragraph>

        <SubHeading label="原则 2">基本都给 Nova 当过脑子</SubHeading>
        <Paragraph>
          这些模型基本都接进过 OpenClaw、给 Nova 当脑子整体体验过一段时间——不是只在 chatbot 里聊两句，
          而是真的挂上去当调用层的脑子用过，所以对它们当「Agent 底座」时的脾气有体感。
        </Paragraph>

        <SubHeading label="原则 3">成本两头看</SubHeading>
        <Paragraph>
          成本对比我分两头：一头看各家的<strong>订阅 Plan</strong>划不划算，
          一头看<strong>token 的实际用量</strong>。每个我都用过一段时间，花了多少心里有数，
          所以不是拍脑袋，但也没做成精确的电子表格。
        </Paragraph>

        <Callout variant="tip">
          方法论本身就有局限：随机切换 + 体感打分，没有盲测、没有固定测试集、没有可复现的分数。
          它对「我该用谁」足够用，但不该被当成客观 benchmark 引用。
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="models" num="四、" title="各模型的使用故事">
        <Paragraph>
          下面是我和每个模型的真实使用历史，按我用得多到少大致排。版本号和时间线参考公开资料补全，
          和我个人体感冲突的地方我会标出来。
        </Paragraph>

        <SubHeading label="Claude">从 3.5 一直用到 4.8</SubHeading>
        <Paragraph>
          我从 Claude 3.5 一路用到现在的 4.8（3.5 Sonnet 约 2024-06，4 系列约 2025-05，
          Opus 4.5 约 2025-11，4.8 约 2026-05）。Opus 系列在我手里是<strong>复杂任务的天花板</strong>，
          硬骨头任务交给它最放心。这也是 Nova 主力调度层最后落在 Claude 的原因。
        </Paragraph>

        <SubHeading label="GPT">从 GPT-3 用到 5.5</SubHeading>
        <Paragraph>
          GPT 我用得最久，从最早的 GPT-3 一直用到现在的 GPT-5.5（GPT-4 约 2023-03，
          GPT-5 约 2025-08，5.5 约 2026-04）。它是<strong>均衡型选手</strong>，
          我需要碰想法、聊思路的时候会找它。语音对话体验是我用过里最丝滑的。
          它最新的 GPT Image 生图我觉得是目前最强的之一。
        </Paragraph>

        <SubHeading label="Gemini">2.5 接触，Gemini 3 起大规模用</SubHeading>
        <Paragraph>
          我从 Gemini 2.5（约 2025-03）开始接触，但真正大规模用是 Gemini 3（约 2025-11）之后。
          它的 <strong>Nano Banana Pro 生图能力很强</strong>（约 2025-11-20 发布），有段时间我甚至全切到 Gemini。
          另一个现实原因是：Gemini 在国外几家里价格相对便宜，所以很长一段时间我的 token 都走 Google。
          它的长文本 / 超长上下文也很能打，前端开发能力很强。
        </Paragraph>

        <SubHeading label="DeepSeek">从第一版就开始用</SubHeading>
        <Paragraph>
          我从 DeepSeek 很早的版本就开始用了。被广泛讨论「疑似蒸馏 OpenAI」的其实是 <strong>V3</strong>
          （约 2024-12 发布，当时有用户发现它偶尔自称 ChatGPT，随后 R1 约 2025-01 发布把讨论推到高峰）——
          补一句事实：DeepSeek 官方从未承认对主力模型做过蒸馏，这至今是业界质疑而非定论。
          DeepSeek 最大的优点就是<strong>真便宜</strong>，文本推理也不错；
          缺点是多模态做得不好，所以我用它的频次不如国外几家。
        </Paragraph>

        <SubHeading label="MiniMax">M2.5 到 M2.7 长期挂在 Nova 上</SubHeading>
        <Paragraph>
          MiniMax 整体做得不错，我抢到过它的 Coding Plan，把它<strong>长期挂在 Nova 上用过一段时间</strong>，
          M2.5（约 2026-02）到 M2.7（约 2026-03）都用过。我觉得 <strong>M2.7 被低估了</strong>：
          作为调用层的脑子，它回答有逻辑、清晰、不笨。它也是我多模态场景里会用的一家。
        </Paragraph>

        <SubHeading label="智谱 GLM">了解有限</SubHeading>
        <Paragraph>
          这一条我得诚实标注<strong>了解有限</strong>。GLM 我用得相对少，
          据说 GLM-5.1（约 2026-03）很厉害，但我用下来觉得一般；它的 Coding Plan 很难抢、我没抢到，
          只充了点钱做测试，所以谈不上深入了解。这里的判断仅供参考。
        </Paragraph>
      </CaseStudySection>

      <CaseStudySection id="findings" num="五、" title="关键发现（持续修订中）">
        <Callout variant="tip">
          下面是我目前的判断清单，结合公开资料和自己的体感写。它会随着新版本和新体验增删——
          我自己也还在 review，所以请把它当「当前快照」而不是结论。
        </Callout>

        <BulletList
          items={[
            <span key="1">
              <strong>Opus 系列是能力天花板</strong>，尤其复杂任务。公开 benchmark 也佐证它在第一梯队（SWE-bench Verified 八成上下），但和 GPT-5.5 互有胜负，不是绝对第一。
            </span>,
            <span key="2">
              <strong>Gemini 的长文本 / 超长上下文非常强</strong>，属于第一梯队；不过 1M 上下文如今已是多家共有，说它「领先之一」准，说「独家最长」不准。
            </span>,
            <span key="3">
              <strong>Gemini 3 的前端开发能力很强</strong>，这点公开榜单（WebDev Arena 居首）和我体感一致——尽管编程不是我专门测的维度。
            </span>,
            <span key="4">
              <strong>最新的 GPT Image 是目前最强的图片生成之一</strong>，部分 Arena 排名居首；但 Nano Banana Pro 在照片级真实感上也很能打，说「最强」要看具体榜单 / 维度。
            </span>,
            <span key="5">
              <strong>MiniMax M2.7 被低估</strong>，作为调用层的脑子回答有逻辑、清晰；它的智能指数在同档里偏高，逻辑/推理覆盖不错。
            </span>,
            <span key="6">
              <strong>GPT 是均衡型</strong>，需要碰想法、聊思路时我会找它；它的语音对话体验是我用过里最丝滑的（基于 GPT-4o 的端到端音频，不是那种按一句转一句的老式语音）。
            </span>,
            <span key="7">
              <strong>语音生成 / 语音交互这块，Gemini 和 GPT 都不错。</strong>
            </span>,
            <span key="8">
              <strong>成本上各有甜点：</strong>Gemini 在国外几家里相对便宜，很长一段时间我的 token 都走 Google；DeepSeek 是真便宜的那一档；Opus 这类顶配最贵，所以我只把它用在硬骨头任务上，日常不舍得堆。
            </span>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="reflection" num="六、" title="反思与边界">
        <SubHeading>这份记录的局限</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>方法不严谨：</strong>随机切换 + 体感对比，没有盲测和固定测试集，结论是我个人信得过的判断，不是客观分数。
            </span>,
            <span key="2">
              <strong>覆盖有偏：</strong>编程没专门测（交给 Gemini 和 Claude），约 80% 是中文场景所以没刻意比中英文——这两块的判断要打折看。
            </span>,
            <span key="3">
              <strong>会过期：</strong>模型迭代太快（Opus 半年里就走了好几个小版本），所以这是活文档，旧结论我会回来改。
            </span>,
          ]}
        />

        <SubHeading>对我自己的价值</SubHeading>
        <Callout variant="insight">
          做这件事最大的收获，是我面对一个具体任务时，能凭手上的体感快速决定
          <strong>「这件事接哪个脑子、大概什么成本量级、为什么是它」</strong>。
          对一个想做 AI PM 的人来说，这种「贴着真实任务做选型」的判断力，比复读公开排行榜有用得多。
        </Callout>
      </CaseStudySection>
    </>
  )
}

const entry: CaseStudyEntry = { meta, Content }
export default entry
