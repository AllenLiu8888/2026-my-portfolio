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

const SLUG = "openclaw-agent-stack"

export const meta: CaseStudyEntry["meta"] = {
  slug: SLUG,
  title: {
    en: "From Jarvis to Routing — How I Actually Use Agents",
    zh: "从 Jarvis 到「路由」——我对 Agent 的理解",
  },
  tagline: {
    en: "I wanted a Jarvis-style butler to run my life. After trying nearly every model as its 'brain,' I realized today's agents aren't omniscient assistants — they're routers that solve specific problems in specific scenarios. This is the three-tier setup I actually run, and what it taught me.",
    zh: "我本想做一个像 Jarvis 一样的全能管家。试遍了市面上几乎所有模型当「脑子」之后，我想明白了：现阶段的 Agent 不是全知全能的助理，而是一个在具体场景里解决具体问题的「路由」。这是我每天真实在跑的三层架构，以及它教会我的事。",
  },
  highlight: {
    en: "Agents work best as scenario-bound routers, not omniscient butlers",
    zh: "核心结论：现阶段的 Agent 是场景化的「路由」，不是全能管家",
  },
  overview: {
    type: { en: "Personal AI Practice & Reflection", zh: "个人 AI 实践与思考" },
    period: { en: "2026 — ongoing exploration", zh: "2026 — 持续探索中" },
    team: { en: "Solo exploration", zh: "个人探索" },
    stack: {
      en: "OpenClaw (mobile entry) + shared local vault + Claude Code (Codex as assist)",
      zh: "OpenClaw（移动端入口）+ 共享本地 vault + Claude Code（Codex 辅助）",
    },
    grade: {
      en: "Daily-driven · still being refined",
      zh: "每日在用 · 仍在打磨",
    },
  },
  roles: {
    en: ["Explorer", "Builder", "Daily User"],
    zh: ["探索者", "搭建者", "重度用户"],
  },
  toc: [
    { id: "why", num: "一", label: { en: "Why · The Manual Workflow", zh: "Why · 手动工作流的痛" } },
    { id: "jarvis", num: "二", label: { en: "Trying to Build a Jarvis", zh: "想做一个 Jarvis（然后碰壁）" } },
    { id: "insight", num: "三", label: { en: "What an Agent Really Is", zh: "Agent 到底是什么" } },
    { id: "stack", num: "四", label: { en: "How I Run It Now", zh: "我现在怎么用" } },
    { id: "next", num: "五", label: { en: "What's Next", zh: "接下来在做的" } },
  ],
}

function Content({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <CaseStudySection title="English summary">
        <ENStub
          slug={SLUG}
          summary="I came back to China and spent a stretch studying AI, with a pile of real personal needs I wanted to solve with it: weight control, health, job applications, learning, resume work. My old workflow — Notion as the main system, TickTick for todos, Flomo for fragments — was all manual upkeep. When agents arrived I tried to build a Jarvis-style butler with OpenClaw, tried nearly every model as its brain, and learned that today's agents can't be omniscient. The real lesson: an agent is best understood as a router that solves a specific problem inside a specific scenario, given a brain, a scenario-specific knowledge base, and an SOP. This is the three-tier setup I actually run today."
          label={{
            badge: "Translation in progress",
            body: "The Chinese version below walks through my original manual workflow, the attempt to build a Jarvis (and why it hit a wall), what I now think an agent really is — a scenario-bound router — the three-tier setup I run today, and what I'm building next.",
            cta: "Read the full Chinese version",
            back: "Back to projects",
          }}
        />
      </CaseStudySection>
    )
  }

  return (
    <>
      <CaseStudySection id="why" num="一、" title="背景（Why）——一套全靠手动维护的工作流">
        <Paragraph>
          这不是一个创业故事。背景很简单：我回国之后有一段时间在专门研究 AI，手里攒了一批真实的个人需求，想看看能不能用 AI 把它们接管下来——体重控制、健康管理、简历投递、AI 学习、做简历，都是我每天真在做的事。
        </Paragraph>

        <SubHeading label="Agent 之前">三个工具，全靠手动</SubHeading>
        <Paragraph>在 Agent 时代之前，我的工作流是三件套各管一摊：</Paragraph>
        <DataTable
          headers={["工具", "角色", "我手动做的事"]}
          rows={[
            ["Notion", "主系统 · 规划管理", "每天手动维护那张大板"],
            ["滴答清单", "To-Do List", "每天手动维护待办"],
            ["Flomo", "碎片知识收集", "随手把想法、知识一条条录进去"],
          ]}
        />
        <Callout variant="insight">
          这套东西本身没问题，问题在于<strong>全是手工活</strong>：板要自己维护、碎片要自己录、todo 要自己排。维护成本一上来，系统就会慢慢荒掉。
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="jarvis" num="二、" title="第一次尝试：想做一个 Jarvis">
        <Paragraph>
          Agent 时代来的时候，我是那种愿意试、想跟上、想拿新工具提效的人。一个很自然的念头是：能不能用 Agent 把上面那套手动工作流整个接管掉，做一个像钢铁侠那个 Jarvis 一样的全能管家——我说一句，后面的事它全办了。
        </Paragraph>
        <Paragraph>
          2026 年初 OpenClaw 上市了——因为它的 logo 长得像只龙虾，国内大家都叫它「龙虾」🦞。我在它上面配了一个属于自己的 Agent，取名 <strong>Nova</strong>，就拿 Nova 来试这个想法。那段时间我几乎每天都在研究新的 Skill 装到 Nova 上、每天用，目标很明确：把它做成我的全职助理。
        </Paragraph>

        <SubHeading label="碰壁">先以为是脑子不行，于是试遍了模型</SubHeading>
        <Paragraph>
          现实是，它干得并不好。一开始我以为是脑子不够强，于是几乎把能当「脑子」的模型试了个遍：国内从 DeepSeek、智谱 GLM 换到 MiniMax，国外再到 Gemini、Claude。
        </Paragraph>
        <Paragraph>
          换下来有两个结论。第一，<strong>模型确实影响很大</strong>，好脑子和差脑子的差距是真实的；第二，<strong>好模型也真贵</strong>，不是堆最贵的就一定划算。（光是「给 Nova 挑脑子」这件事，后来单独长成了另一个项目——我的<strong>前沿模型横评</strong>。）
        </Paragraph>
        <Callout variant="insight">
          但最关键的发现不在模型本身：<strong>至少现阶段，Agent 做不到全知全能的 Jarvis。</strong>这不是换个更强的脑子就能解决的——是方向问题，不是马力问题。想通这一点，我才真正开始重新理解 Agent。
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="insight" num="三、" title="那 Agent 到底是什么（我现在的理解）">
        <Paragraph>这一段是我整个折腾下来最想说的部分。</Paragraph>

        <SubHeading label="结论一">别把 Agent 当 Jarvis</SubHeading>
        <Paragraph>
          现阶段的 Agent 不是全知全能的 Jarvis。你越想让一个 Agent「什么都会」，它越容易出错、越容易幻觉。正确的用法是反过来：<strong>把 Agent 放进一个「具体场景」，让它解决这个场景里的「具体问题」。</strong>道理也不玄——模型的幻觉在开放、宽泛的问题上最严重，把问题收进一个有知识库、有 SOP 的窄场景里，等于提前给它划好了护栏。
        </Paragraph>

        <SubHeading label="结论二">一个能干活的 Agent 怎么搭</SubHeading>
        <Paragraph>我现在搭一个 Agent 的配方是三样东西：</Paragraph>
        <DataTable
          headers={["要素", "作用"]}
          rows={[
            ["底层模型（脑子）", "决定推理和表达的下限，影响很大但不是全部"],
            ["这个场景的知识库", "把它需要知道的事实喂给它，减少幻觉"],
            ["从场景提炼的 SOP / 需求", "把「该怎么做」固定下来，降低出错率"],
          ]}
        />
        <Callout variant="decision">
          脑子 + 场景知识库 + SOP，三样配齐，Agent 就能在<strong>这一个具体场景里</strong>，以更低的出错率和更少的幻觉，把具体问题办好。范围越收得住，它越靠谱。
        </Callout>

        <SubHeading label="结论三">合格的 Agent 更像一个「路由」</SubHeading>
        <Paragraph>
          再往上抽象一层：现在一个合格的 Agent，更像一个<strong>路由</strong>。它真正解决的，是「传统 workflow 没法用自然语言交互」这个问题。
        </Paragraph>
        <Callout variant="insight">
          <code className="block text-sm font-mono text-zinc-200 whitespace-pre">
{`你用自然语言对 Agent 说话
  ↓
Agent 做路由判断（这事该交给谁）
  ↓
调用某个具体 Skill / 执行某个具体 Workflow
  ↓
拿到结果，返还给 Agent
  ↓
Agent 像人一样，把结果讲给你听`}
          </code>
        </Callout>
        <Paragraph>
          说白了，这跟业界讲的 function calling / tool use 是一回事，只是我更习惯把它想成「路由」：以前的 workflow 能干活但不会说话，你得按它的规矩点按钮；现在 Agent 补上了「用自然语言进、用自然语言出」这一层。中间真正干活的，还是那些被定义好的具体 Skill 和 Workflow。
        </Paragraph>
      </CaseStudySection>

      <CaseStudySection id="stack" num="四、" title="我现在怎么用（真实在跑的三层架构）">
        <Paragraph>
          想明白「别让一个 Agent 什么都干」之后，我就改了打法：把主力工作重心切回 <strong>Claude Code</strong>（复杂任务和代码），<strong>Codex</strong> 在旁边打辅助；Nova 不再硬撑全能助理，退回它真正擅长的位置——一个从手机端下达指令、记录信息的入口。
        </Paragraph>
        <Paragraph>
          整套系统拆成三层，关键是<strong>三层共用同一份底层 vault</strong>——这是它们能协同的前提。
        </Paragraph>

        <SubHeading label="第一层 · 入口">Nova（我跑在 OpenClaw / 龙虾 上的 Agent）</SubHeading>
        <BulletList
          items={[
            "主要在手机端，让我随时随地下达指令、记录信息",
            "做的是记录类的活：每日事项提醒、提醒哪件还没做、记录今天要做的事、记录想法、记录知识、记录身体数据",
            "遇到它办不了的复杂任务，就把任务丢进 Inbox 文件夹，交给上层",
          ]}
        />

        <SubHeading label="第二层 · 共享底座">所有 Agent 共用的同一份本地知识库 / 记忆（vault）</SubHeading>
        <BulletList
          items={[
            "手机端记录的信息和指令，都进入这份共享记忆",
            "它是唯一信息源，谁要用就从这里读，谁有更新就往这里写",
            "正因为底座是同一个，上下两层才能对得上、接得住",
          ]}
        />

        <SubHeading label="第三层 · 复杂任务处理">Claude Code</SubHeading>
        <BulletList
          items={[
            "每天扫描 Inbox 文件夹，发现该它处理的复杂任务就执行",
            "复杂任务 / 代码 / 决策性的活归它，Codex 在旁边打辅助",
            "处理完写回 vault，闭环回到共享底座",
          ]}
        />

        <Callout variant="insight">
          <code className="block text-sm font-mono text-zinc-200 whitespace-pre">
{`Nova（手机入口）
  ↓ 记录类直接处理 / 复杂任务写进 Inbox
共享 vault（同一份底层记忆）
  ↓ 信息与指令的唯一信息源
Claude Code（每天扫描 Inbox）
  ↓ 处理复杂任务，结果写回 vault`}
          </code>
        </Callout>
        <Paragraph>
          这套东西没有一个「全能脑」，每一层只做自己擅长的事，靠同一个 vault 串起来。它不漂亮，但每天真在用——这恰恰是前面那个结论的落地：不追求一个 Jarvis，而是让每一层都待在自己能干好的那个窄场景里。
        </Paragraph>
      </CaseStudySection>

      <CaseStudySection id="next" num="五、" title="接下来在做的">
        <Paragraph>
          最近我在研究 Dify 和扣子（Coze），想顺着「场景化」这个思路，做几个真正放进具体场景里的 Agent。
        </Paragraph>
        <Paragraph>
          比如，我正在给这个作品集网站做一个 Chatbot——一个了解我全部信息的「数字分身」，访客想了解我的时候，可以直接和它对话，而不用一页页翻。它就是上面那套理解的一次小实践：一个具体场景、一份关于我的知识库、一组该怎么答的规则。
        </Paragraph>
        <Callout variant="tip">还在做，敬请期待。</Callout>
      </CaseStudySection>
    </>
  )
}

const entry: CaseStudyEntry = { meta, Content }
export default entry
