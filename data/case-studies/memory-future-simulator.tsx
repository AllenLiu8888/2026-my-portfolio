import {
  BulletList,
  Callout,
  CaseImage,
  CaseStudySection,
  DataTable,
  Paragraph,
  Quote,
  SubHeading,
  TwoCol,
} from "@/components/case-study/CaseStudySection"
import { ENStub } from "@/components/case-study/ENStub"
import type { CaseStudyEntry, Locale } from "@/lib/case-studies"

const SLUG = "memory-future-simulator"

export const meta: CaseStudyEntry["meta"] = {
  slug: SLUG,
  title: {
    en: "Navigating the Future of Memory",
    zh: "Navigating the Future of Memory · 记忆未来模拟器",
  },
  tagline: {
    en: "An LLM + RAG-powered multiplayer collaborative narrative installation. Players join a shared virtual world, make collective decisions, and explore the ethical edges of memory technology.",
    zh: "基于 LLM + RAG 的多人协作叙事模拟装置——玩家加入同一虚拟社会，集体决策，探索记忆技术的伦理边界。",
  },
  highlight: {
    en: "Hardware × Frontend × LLM hybrid interactive installation",
    zh: "亮点：融合前后端 + LLM 端的交互装置",
  },
  overview: {
    type: {
      en: "Capstone (UQ DECO3801/7381) · TO C product",
      zh: "有固定方的 TO C 项目开发（UQ DECO3801/7381）",
    },
    period: {
      en: "Aug 2025 — Oct 2025 (~12 weeks)",
      zh: "2025 年 8 月 — 2025 年 10 月（约 12 周）",
    },
    team: { en: "6 people", zh: "6 人团队" },
    stack: {
      en: "React + Vite + TailwindCSS / Django + PostgreSQL / Local LLM + RAG + FAISS",
      zh: "React + Vite + TailwindCSS / Django + PostgreSQL / 本地 LLM + RAG + FAISS 向量数据库",
    },
    grade: {
      en: "Distinction (6/7) · Team review: Exceeds Expectations",
      zh: "Distinction（6/7），团队阶段评估获 Exceeds Expectations",
    },
  },
  roles: {
    en: ["Team Leader", "Product Manager", "Project Manager", "Frontend Dev", "UX Designer"],
    zh: ["队长 Team Leader", "产品经理 Product Manager", "项目经理 Project Manager", "前端负责人 Frontend dev", "UX 设计师 UX Designer"],
  },
  github: [
    { label: "Github Repo", href: "https://github.com/AllenLiu8888/nazala-frontend" },
  ],
  toc: [
    { id: "why", num: "一", label: { en: "Why · Background", zh: "Why · 背景与用户" } },
    { id: "what", num: "二", label: { en: "What · Product Design", zh: "What · 产品设计" } },
    { id: "iteration", num: "三", label: { en: "Iteration · 3 Sprints", zh: "迭代过程" } },
    { id: "how", num: "四", label: { en: "How · My Work", zh: "How · 我的工作" } },
    { id: "impact", num: "五", label: { en: "Impact · Exhibition", zh: "展览与效果" } },
    { id: "tech", num: "六", label: { en: "Tech Highlights", zh: "技术亮点" } },
    { id: "reflection", num: "七", label: { en: "Reflection", zh: "反思与收获" } },
  ],
}

function Content({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <CaseStudySection title="English summary">
        <ENStub
          slug={SLUG}
          summary="A capstone team-led installation that turns memory-ethics from a lecture into a lived experience. Players scan a QR code to join a 5-year virtual society, face LLM-generated events with RAG-backed worldbuilding, vote on choices, and watch their decisions reshape four social attributes in real time. I led a 6-person team across PM, frontend, and UX; we shipped a deployable installation and earned a Distinction (6/7) with an 'Exceeds Expectations' team review."
          label={{
            badge: "Translation in progress",
            body: "I'm currently writing the full English case study. The Chinese version below is the canonical write-up — over 5,000 words covering the brief, three Sprints of iteration, two rounds of user testing, the LLM/RAG architecture, exhibition outcomes, and reflections.",
            cta: "Read the full Chinese version",
            back: "Back to projects",
          }}
        />
      </CaseStudySection>
    )
  }

  return (
    <>
      <CaseStudySection id="why" num="一、" title="项目背景 & 目标用户（Why）">
        <SubHeading label="问题">真实存在的伦理真空</SubHeading>
        <Paragraph>
          随着脑机接口和神经科学的发展，记忆操控技术正逐步从科幻走向现实——在未来，记忆可以被存储、编辑、交易甚至删除。然而，社会对其伦理边界缺乏深入讨论。传统教育方式多为单向传输，难以让公众深度参与思考。
        </Paragraph>

        <SubHeading label="机会">从「讨论」到「亲身经历」</SubHeading>
        <Paragraph>
          课题导师提出了一个思辨性设计命题（Speculative Design Brief）：能否用<strong>交互式的、参与式的方式</strong>，让人们不是在「讨论」记忆伦理，而是在<strong>亲身经历</strong>中感受选择的后果？
        </Paragraph>

        <SubHeading label="我们的方案">多人协作叙事模拟器</SubHeading>
        <Paragraph>
          打造一个多人协作叙事模拟器——玩家扫码加入同一个虚拟世界，在 5 年的时间跨度里，共同面对记忆技术引发的社会事件，集体做出选择，实时看到选择对社会属性的影响。不是「看」一个故事，而是「活」在一个故事里。
        </Paragraph>

        <SubHeading>目标用户</SubHeading>
        <DataTable
          headers={["用户群体", "特征", "核心需求"]}
          rows={[
            ["大学生 / 研究生（18-30）", "好奇心强、数字原生代", "沉浸且互动性强的反思性体验"],
            ["桌游爱好者 / 科幻迷（20-40）", "重视逻辑深度和策略性", "超越纯娱乐的思辨型游戏体验"],
          ]}
        />

        <SubHeading>使用场景</SubHeading>
        <Paragraph>互动科技展览、高校课堂教学辅助、线下社交聚会。</Paragraph>
      </CaseStudySection>

      <CaseStudySection id="what" num="二、" title="产品设计（What）">
        <SubHeading>系统架构</SubHeading>
        <Paragraph>系统由四个核心组件构成一个三端的结构：</Paragraph>
        <Callout variant="insight">
          <code className="block text-sm font-mono text-zinc-200 whitespace-pre">
{`前端：玩家手机端 + 大屏展示端 （React）
后端：后端（Django）运行在服务器端
AI 端：LLM + RAG 运行在服务器端`}
          </code>
        </Callout>

        <SubHeading>核心功能模块</SubHeading>

        <SubHeading label="01">扫码入场 & 等待匹配</SubHeading>
        <BulletList
          items={[
            "玩家扫描二维码进入游戏，选择角色头像",
            "后端通过 Django 管理 Session 初始化，检测到 3-5 名玩家后自动开始游戏",
          ]}
        />
        <TwoCol>
          <CaseImage src="/case-studies/memory-future-simulator/01-scan-join-1.png" caption="扫码入场界面（手机端）" />
          <CaseImage src="/case-studies/memory-future-simulator/02-scan-join-2.png" caption="等待匹配大屏" />
        </TwoCol>

        <SubHeading label="02">事件生成 & 集体决策（核心循环）</SubHeading>
        <BulletList
          items={[
            "每一轮，AI 模块基于当前世界状态 + RAG 检索的世界观语料，生成一段叙事事件和 4 个选项",
            "大屏展示事件背景和社会属性的实时数值变化",
            "手机端展示 4 张选项卡片 + 倒计时，玩家讨论后各自做出选择",
            "系统统计所有玩家选择，计算对四大社会属性的影响，驱动下一轮叙事",
          ]}
        />
        <TwoCol>
          <CaseImage src="/case-studies/memory-future-simulator/03-event-narrative.png" caption="事件叙事大屏" />
          <CaseImage src="/case-studies/memory-future-simulator/04-mobile-options.png" caption="手机端选项卡片" />
        </TwoCol>

        <SubHeading label="03">社会属性可视化</SubHeading>
        <BulletList
          items={[
            "四大属性：自主控制 / 记忆平等 / 技术管控 / 社会凝聚",
            "大屏通过雷达图 + 数值动态变化实时展示，配合生成式音效营造沉浸氛围",
          ]}
        />

        <SubHeading label="04">人格结果生成（类 MBTI）</SubHeading>
        <BulletList
          items={[
            "10 轮结束后，系统根据每位玩家的历史选择倾向，生成个性化人格标签",
            "例如：「记忆哨兵」（Memory Sentinel）、「自主创新者」（Autonomous Innovator）等 6 种人格",
            "玩家可以分享和讨论彼此的人格结果，进一步激发反思",
          ]}
        />
        <CaseImage src="/case-studies/memory-future-simulator/05-mbti-result.png" caption="MBTI 风格人格结果界面" />

        <SubHeading label="05">历史时间线回顾</SubHeading>
        <Paragraph>手机端提供可展开 / 折叠的时间线组件，回顾每一轮的事件、选择和世界状态变化。</Paragraph>
        <CaseImage src="/case-studies/memory-future-simulator/06-timeline-review.png" caption="时间线回顾组件" />

        <SubHeading label="06">结局生成</SubHeading>
        <Paragraph>AI 根据 10 轮的全局数据，生成一段关于这个世界最终走向的叙事总结，在大屏上展示。</Paragraph>
        <CaseImage src="/case-studies/memory-future-simulator/07-ending.png" caption="结局叙事生成大屏" />
      </CaseStudySection>

      <CaseStudySection id="iteration" num="三、" title="迭代过程——从概念验证到展览交付">
        <SubHeading label="Sprint 1">框架搭建 → 基础功能（第 4-7 周）</SubHeading>
        <Paragraph>
          <strong>目标：</strong>验证技术可行性，搭建前后端框架，实现基础交互流程。
        </Paragraph>
        <BulletList
          items={[
            "前端完成 React + Vite 框架搭建和组件库骨架，后端完成 Django API 路由与 PostgreSQL 数据库初始化",
            "AI 模块完成 API 集成测试，故事库扩展至 10,000 条句子（用于 RAG 检索）",
            "UI/UX 完成设计风格指南、交互草图和用户旅程地图",
            "团队定义了前后端 JSON 数据格式规范，确保各模块可以并行开发",
          ]}
        />
        <Callout variant="decision">
          <strong>关键技术决策：</strong>评估团队在前置课程中的技术经验后，决定从最初规划的 Sass 切换到{" "}
          <strong>TailwindCSS</strong>，提升了响应式开发效率。
        </Callout>

        <SubHeading label="第 1 轮用户测试">发现核心问题</SubHeading>
        <Paragraph>
          在基础功能可运行后，组织了 <strong>5 名用户的 Think-Aloud 可用性测试</strong>。这轮测试暴露了大量问题，成为后续迭代的核心驱动力：
        </Paragraph>
        <SubHeading>① UI / 交互层面</SubHeading>
        <BulletList
          items={[
            "用户倾向于忽视手机端界面，缺乏明确的「该你选择了」的提示",
            "游戏进行中的状态提示不清楚，用户容易错过操作窗口",
          ]}
        />
        <SubHeading>② 叙事内容层面（最严重）</SubHeading>
        <BulletList
          items={[
            "背景故事与游戏内事件缺乏连贯性——各轮之间的叙事断裂",
            "生成的选项与对应事件不相关——玩家选择后感觉「答非所问」",
            "故事内容出现重复和逻辑错误，破坏沉浸感",
            "各轮生成的内容长度不一致，体验不稳定",
          ]}
        />
        <SubHeading>③ 游戏机制层面</SubHeading>
        <BulletList
          items={[
            "10 轮太长——用户明确建议减少至 5 轮",
            "四大社会属性的影响规则不透明——玩家不确定自己的选择如何影响世界状态",
            "整体概念偏抽象，新玩家需要较长时间理解",
          ]}
        />
        <SubHeading>④ 技术层面</SubHeading>
        <BulletList items={["移动端偶发加载失败，导致部分用户无法完成选择"]} />

        <SubHeading label="Sprint 2">核心问题修复 → 完整集成（第 7-9 周）</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>叙事质量提升：</strong>优化 LLM 提示词（Prompt Engineering），将「世界生成」和「问题生成」合并为单一 LLM 调用，解决了内容不一致和 JSON 输出格式错误的问题。在 28 核 CPU 上测试，响应时间显著降低
            </span>,
            <span key="2">
              <strong>RAG 检索优化：</strong>完善 FAISS 向量数据库的世界观语料库，增强叙事与世界观设定的一致性，减少 LLM 幻觉
            </span>,
            <span key="3">
              <strong>多人同步完善：</strong>实现完整的多人逻辑，大屏与手机端数据实时同步
            </span>,
            <span key="4">
              <strong>UI 打磨：</strong>加入动画过渡、音效设计、图标设计，增强沉浸体验
            </span>,
            <span key="5">
              <strong>交互提示强化：</strong>在手机端增加更明确的选择提示，解决用户「不知道该操作」的问题
            </span>,
          ]}
        />

        <SubHeading label="第 2 轮用户测试">验证改进效果</SubHeading>
        <Paragraph>组织第 2 轮 Think-Aloud 测试（5 名用户）：</Paragraph>
        <SubHeading>✅ 已解决</SubHeading>
        <BulletList
          items={[
            "故事生成和空白选项出错的问题",
            "叙事连贯性显著提升，选项与事件的关联性增强",
            "移动端交互提示更清晰",
          ]}
        />
        <SubHeading>⏳ 仍需优化（纳入后续迭代）</SubHeading>
        <BulletList
          items={[
            "属性变化的可感知度仍然不够（用户仍反馈「不确定选择的影响」）",
            "大屏界面样式仍可继续增强",
          ]}
        />

        <SubHeading label="Sprint 3">最终优化 → 展览交付（第 9-11 周）</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>LLM 性能最终优化：</strong>合并调用模式稳定运行，确保展览现场的响应速度
            </span>,
            <span key="2">
              <strong>伦理设计完善：</strong>参考 CMU《设计伦理 AI 体验检查清单》进行自评，在界面中融入伦理反思引导
            </span>,
            <span key="3">
              <strong>展览准备：</strong>完善电梯演讲脚本，制作演示视频和用户指南，进行最终排练
            </span>,
            <span key="4">
              <strong>大屏可视化打磨：</strong>雷达图动态效果、数值变化动画的最终调整
            </span>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="how" num="四、" title="我的工作（How）">
        <SubHeading label="项目管理">Project Manager</SubHeading>
        <Paragraph>作为 6 人团队的 PM，我负责项目从立项到交付的全流程管理：</Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Sprint 规划与进度追踪：</strong>使用 Jira 管理 3 个 Sprint 周期，每周六线下例会 + 每日 Slack 异步 Stand-up
            </span>,
            <span key="2">
              <strong>Tutor 沟通主要对接人：</strong>作为团队与课程导师之间的核心沟通桥梁
            </span>,
            <span key="3">
              <strong>关键技术决策推动：</strong>评估团队技能后决定从 Sass 切换到 TailwindCSS，提高了开发效率
            </span>,
            <span key="4">
              <strong>团队协作工具迭代：</strong>初期推动 Jira，后调整为 Jira + Slack 双轨制，并在反思中认识到应更快适应团队实际节奏
            </span>,
            <span key="5">
              <strong>角色分配与协调：</strong>根据成员技能矩阵分配前后端和 AI 模块的开发任务
            </span>,
          ]}
        />

        <SubHeading label="产品设计">Product & UX Designer</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>需求分析与产品定义：</strong>基于课题 Brief，主导产品方向的定义——从「静态教育工具」转向「多人协作叙事模拟器」
            </span>,
            <span key="2">
              <strong>用户调研：</strong>研究现有方案（澳洲 National Science Week、QBI 课程、OECD 神经伦理指南等），发现市场缺乏「让用户亲身做出选择并看到后果」的互动式产品
            </span>,
            <span key="3">
              <strong>交互流程设计：</strong>设计了 Entry → Decision → Feedback → Cycle → Conclusion 的五阶段用户体验流程
            </span>,
            <span key="4">
              <strong>用户测试主导：</strong>组织了 2 轮可用性测试（Think-Aloud Protocol），各 5 名用户参与
            </span>,
          ]}
        />

        <SubHeading label="前端开发">Frontend Dev</SubHeading>
        <BulletList
          items={[
            "基于 React + Vite + TailwindCSS 构建前端项目",
            "负责开场界面、游戏结局界面、宣传视频页面的设计与开发",
            "参与雷达图、数值动态变化的前端展示实现",
            "项目后期负责全前端的 Debug 和交互体验优化",
            "拍摄并剪辑了项目宣传视频",
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="impact" num="五、" title="展览与效果">
        <SubHeading>展览数据</SubHeading>
        <Paragraph>项目于 2025 年 10 月在 UQ 校内展览中进行了全天公开展示：</Paragraph>
        <DataTable
          headers={["指标", "数据"]}
          rows={[
            ["展览时长", "全天（8:30 - 20:30，约 10 小时有效展示时间）"],
            ["单次体验时长", "约 20 分钟 / 轮"],
            ["每轮参与人数", "3-5 人"],
            [<span key="x"><strong>预估总体验人次</strong></span>, <strong key="y">80-120 人次</strong>],
          ]}
        />

        <SubHeading>展览方式</SubHeading>
        <BulletList
          items={[
            "我作为主讲人向来访者介绍项目背景和玩法",
            "组员轮换介绍，我同时担任 NPC 角色参与游戏，引导用户完成体验",
            "通过实际参与的方式让访客快速上手，降低理解门槛",
          ]}
        />

        <SubHeading>用户反馈</SubHeading>
        <BulletList
          items={[
            "大多数体验者给出正向评价，认为概念新颖、体验「很酷」",
            "类 MBTI 人格结果是最受欢迎的设计——用户对自己的人格标签非常感兴趣，主动与其他玩家分享讨论",
            "部分用户反馈希望选项对世界属性的影响更加可感知",
          ]}
        />

        <SubHeading>导师 / 评委评价</SubHeading>
        <Quote source="产品文档评分（Distinction）">
          Part A provides a clear and structured overview of the product's functions and design, with relatively clear visualisation and evaluation.
        </Quote>
        <Quote source="代码实现评分（Distinction）">
          The implementation is relatively robust and innovative, connecting multiple systems into a complete, locally runnable AI-driven interactive experience. It effectively delivers the intended Narrative-Driven Interaction and Generative Scenario Engine.
        </Quote>
        <Quote source="团队评估（Exceeds Expectations）">
          Overall progress is strong; core features are mostly done. Team roles are clear, and members understand each other's work and progress.
        </Quote>
        <Quote source="个人 PM 评价">
          As project manager, knows what self and other members are doing.
        </Quote>

        <CaseImage src="/case-studies/memory-future-simulator/08-exhibition.jpg" caption="UQ 校内展览全天公开展出现场" />
      </CaseStudySection>

      <CaseStudySection id="tech" num="六、" title="技术亮点">
        <DataTable
          headers={["技术点", "实现方式", "解决的问题"]}
          rows={[
            [
              <strong key="1">本地 LLM 叙事生成</strong>,
              "Qwen2.5:14B-Instruct + Ollama 本地部署",
              "避免依赖云端 API，保证展览现场的稳定性和隐私合规",
            ],
            [
              <strong key="2">RAG 知识检索</strong>,
              "FAISS 向量数据库 + BGE-M3 Embedding + 自建世界观语料库",
              "保持叙事一致性，减少 LLM 幻觉，让设计师可通过语料库控制叙事方向",
            ],
            [
              <strong key="3">多人实时同步</strong>,
              "Django 后端 + WebSocket",
              "支持 3-5 名玩家同时在线决策，实时同步游戏状态",
            ],
            [
              <strong key="4">双端交互</strong>,
              "大屏（数据可视化 + 叙事）+ 手机端（选择 + 历史回顾）",
              "创造「共同注视大屏 + 各自手机操作」的社交体验",
            ],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="reflection" num="七、" title="反思与收获">
        <SubHeading>做得好的地方</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>产品概念到落地的完整闭环：</strong>从思辨性设计 Brief 到可体验的多人交互产品，3 个月内完成从 0 到 1
            </span>,
            <span key="2">
              <strong>跨职能协作：</strong>作为 PM 同时参与产品设计和前端开发，能在需求、设计、实现之间快速沟通和决策
            </span>,
            <span key="3">
              <strong>用户测试驱动迭代：</strong>2 轮用户测试的反馈直接推动了产品关键改进
            </span>,
          ]}
        />

        <SubHeading>可以改进的地方</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>展览表达：</strong>展览环节获得 Credit 而非 Distinction，导师反馈指出团队 presentation 时「缺乏对产品目的和功能的清晰上下文」，成员间有时互相打断。这让我认识到产品 demo 的「讲」和「做」同样重要
            </span>,
            <span key="2">
              <strong>PM 工具的推行：</strong>初期推动 Jira 使用时遇到阻力，应更早识别团队的实际协作习惯并做出适应性调整
            </span>,
            <span key="3">
              <strong>选择反馈的可感知度：</strong>用户测试中多次反馈「不确定自己的选择造成了什么影响」，这是产品核心体验的薄弱环节
            </span>,
          ]}
        />

        <SubHeading>对我的成长</SubHeading>
        <Callout variant="insight">
          这个项目让我第一次真正体验了从 0 到 1 带领团队交付产品的全过程。作为 PM，最大的学习是：<strong>好的项目管理不是让团队按你的方式工作，而是找到团队自然的节奏并在其中建立结构。</strong>这也是我决定走产品经理方向的重要转折点——我发现自己最享受的不是写代码本身，而是「发现一个真实的问题，设计一个方案，带着团队把它做出来」的整个过程。
        </Callout>
      </CaseStudySection>
    </>
  )
}

const entry: CaseStudyEntry = { meta, Content }
export default entry
