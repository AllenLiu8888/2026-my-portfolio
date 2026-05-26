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
    en: "OpenClaw · Three-Tier Agent Stack",
    zh: "OpenClaw · 三层 Agent 架构",
  },
  tagline: {
    en: "My personal AI operating system — self-configured Skills across 7 domains, with Minimax-powered Nova triaging daily ops, HealthBot running my training plan, and Claude Code handling strategy and code. Built and run by me, every day.",
    zh: "我每天在用的个人 AI 操作系统——自配 Skills 覆盖 7 大场景，Minimax 驱动的 Nova 处理日常事务，HealthBot 跑健身计划，Claude Code 处理战略与代码。从 AI 工具使用者到工具链构建者的实际工程实践。",
  },
  highlight: {
    en: "104 Skills · 7 domains · daily-driven multi-agent system",
    zh: "亮点：104 Skills · 7 大场景 · 每日运转的多智能体系统",
  },
  overview: {
    type: { en: "Personal AI Infrastructure", zh: "个人 AI 基建" },
    period: { en: "2026.04 — Present (continuously evolving)", zh: "2026.04 — 至今（持续迭代）" },
    team: { en: "Solo (PM + Prompt Engineer + Architect)", zh: "独立设计与运维" },
    stack: {
      en: "OpenClaw + Claude Code + MiniMax M2 + Cron / Webhook / WeChat Push",
      zh: "OpenClaw + Claude Code + MiniMax M2 + Cron / Webhook / 微信推送",
    },
    grade: {
      en: "Daily-driven · continuously evolving since 2026.04",
      zh: "每日在用 · 自 2026.04 起持续迭代",
    },
  },
  roles: {
    en: ["Architect", "Prompt Engineer", "Operator", "Daily User"],
    zh: ["架构师", "Prompt 工程师", "运维", "重度用户"],
  },
  toc: [
    { id: "why", num: "一", label: { en: "Why · The Pain", zh: "Why · 一人创业的痛" } },
    { id: "what", num: "二", label: { en: "What · Three Tiers", zh: "What · 三层架构" } },
    { id: "how", num: "三", label: { en: "How · 7 Domains", zh: "How · 7 大场景演化" } },
    { id: "tech", num: "四", label: { en: "Tech · 104 Skills", zh: "Tech · 104 Skills 工程" } },
    { id: "impact", num: "五", label: { en: "Impact", zh: "实际效果" } },
    { id: "reflection", num: "六", label: { en: "Reflection", zh: "反思与收获" } },
  ],
}

function Content({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <CaseStudySection title="English summary">
        <ENStub
          slug={SLUG}
          summary="A three-tier personal AI ops stack: Nova (Minimax-powered secretary) triages daily tasks for cheap tokens, HealthBot runs my training plan via WeChat push, and Claude Code (Opus 4.7) handles strategic decisions and code. 104 self-configured OpenClaw Skills across 7 domains: content, health, career, finance, learning, automation, monitoring. Designed as a 'one-person company command center' — the clearest evidence of moving from AI tool user to tool-chain builder."
          label={{
            badge: "Translation in progress",
            body: "Chinese version below — covers the architectural rationale (cheap-tokens-for-ops + expensive-tokens-for-decisions), the seven operational domains, key skill examples, and what running it for a year taught me about agent design.",
            cta: "Read the full Chinese version",
            back: "Back to projects",
          }}
        />
      </CaseStudySection>
    )
  }

  return (
    <>
      <CaseStudySection id="why" num="一、" title="项目背景（Why）——一人创业的运维炸裂">
        <SubHeading label="问题">事务密度 vs 决策密度，错配</SubHeading>
        <Paragraph>
          作为一人公司运营者，我每天面临两类完全不同的工作：
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>高密度低复杂度事务：</strong>记健身数据、跟进社媒数据、整理待办、推送提醒——量大但单条都不需要 Opus 级别的推理
            </span>,
            <span key="2">
              <strong>低密度高复杂度决策：</strong>战略判断、内容创作、求职策略、复杂代码——量少但每一次都需要最强模型
            </span>,
          ]}
        />
        <Callout variant="insight">
          用同一个 Opus 跑两边代价巨大：成本爆炸 + 响应延迟。<strong>需要分层架构，让贵 token 只处理真正贵的决策。</strong>
        </Callout>

        <SubHeading label="目标">一套日常自动运转的 AI 操作系统</SubHeading>
        <Paragraph>
          设计原则：<strong>便宜 token 跑事务、贵 token 做决策、它们之间靠文件队列串联。</strong>
        </Paragraph>
      </CaseStudySection>

      <CaseStudySection id="what" num="二、" title="系统架构（What）——三层 Agent">
        <SubHeading label="Tier 1">Nova（秘书 / 前台）— 便宜 token</SubHeading>
        <DataTable
          headers={["维度", "配置"]}
          rows={[
            ["底层模型", "MiniMax M2.7"],
            ["角色定位", "秘书、前台、调度员"],
            ["职责范围", "记录健身数据、日程提醒、简单查询、收集复杂指令"],
            ["升级机制", "遇到复杂任务时，写入 inbox/ 文件夹交给上层"],
            ["触发方式", "定时 cron + 微信推送 + 主动查询"],
          ]}
        />

        <SubHeading label="Tier 2">HealthBot（垂直域 Agent）</SubHeading>
        <BulletList
          items={[
            "专门跑健身计划：训练日清单、饮食提醒、补剂时间",
            "每天定时通过 WeChat Channel 推送提醒到我手机",
            "数据写回 vault/Health/，由 Nova 汇总周报",
          ]}
        />

        <SubHeading label="Tier 3">Claude Code（CEO / COO）— 贵 token</SubHeading>
        <DataTable
          headers={["维度", "配置"]}
          rows={[
            ["底层模型", "Claude Opus 4.7（1M 上下文）"],
            ["角色定位", "战略决策、内容创作、复杂任务"],
            ["职责范围", "求职策略、产品决策、代码开发、数据分析"],
            ["调度方式", "定时扫描 inbox/、处理后结果写入 outbox/，下发任务到 agent-tasks/"],
            ["重要文件", "CLAUDE.md（系统全局指令）、IDENTITY.md（人设）、TOOLS.md（工具清单）"],
          ]}
        />

        <SubHeading>三层数据流</SubHeading>
        <Callout variant="insight">
          <code className="block text-sm font-mono text-zinc-200 whitespace-pre">
{`Nova（事件触发）
  ↓ 简单事务自处理 / 复杂任务写 inbox/
Claude Code（定时扫描 inbox/）
  ↓ 决策 / 创作 / 写 outbox/ + 分配 agent-tasks/
执行 Agent（小红书 / 抖音 / 视频）
  ↓ 跑完写 logs/`}
          </code>
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="how" num="三、" title="7 大场景演化（How）">
        <Paragraph>系统的 104 个 Skill 服务于 7 大场景，由日常使用倒推迭代：</Paragraph>
        <DataTable
          headers={["场景", "代表 Skill 类型", "举例"]}
          rows={[
            ["1. 内容运营", "小红书 / 抖音 / 朋友圈写作", "选题灵感、文案润色、封面设计指令"],
            ["2. 健康管理", "训练 / 饮食 / 体重", "训练日提醒、饮食偏差自动干预"],
            ["3. 求职助攻", "简历 / JD 分析 / 投递追踪", "JD 关键词提取、定制 Cover Letter 草稿"],
            ["4. 财务自动化", "记账 / 报销 / 月报", "支付截图自动归档"],
            ["5. 学习路径", "AI 工具评测 / 课程消化", "深度学习记录、AI 工具新版本评测"],
            ["6. 自动化编排", "Cron / Webhook / n8n", "定时数据采集、跨平台 webhook 串联"],
            ["7. 监控告警", "社媒数据 / 系统监控", "数据异常推送、关键指标日报"],
          ]}
        />

        <SubHeading label="设计原则">为什么是 OpenClaw 而不是 LangChain</SubHeading>
        <Paragraph>
          OpenClaw 的优势是<strong>面向个人重度使用者的轻量级 Skill 系统</strong>——单文件即一个 Skill、可热更新、跨场景互通。
          相比 LangChain 适合开发者构建 SaaS 产品，OpenClaw 更适合「自己用、自己改、每天迭代」的个人 ops 场景。
        </Paragraph>
      </CaseStudySection>

      <CaseStudySection id="tech" num="四、" title="Tech · 104 Skills 工程化">
        <SubHeading label="架构亮点">
          双 Mac Syncthing 同步 + 跨设备 Memory
        </SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>双 Mac 同步：</strong>Mac Mini（主开发）+ MBP（移动），通过 Syncthing 双向同步 4 个核心文件夹（vault/、mem/、inbox/、outbox/），无论在哪台机器都能继续工作
            </span>,
            <span key="2">
              <strong>跨设备 Memory：</strong>claude-mem 插件 + Gemini provider，让 Claude Code 在两台机器上共享长期记忆
            </span>,
            <span key="3">
              <strong>Vault as Source of Truth：</strong>所有项目知识 / 计划 / 偏好都写到 Obsidian vault，Agent 系统消费 vault 内容，单一信息源避免冲突
            </span>,
          ]}
        />

        <SubHeading label="工程细节">Skill 设计模式</SubHeading>
        <DataTable
          headers={["维度", "实践"]}
          rows={[
            ["命名", "动词起手（如 generate-xhs-post、analyze-jd-match）"],
            ["参数", "用 Markdown 写自然语言契约，避免 schema 锁死"],
            ["复用", "把通用工具（如「写朋友圈」）封装成可被多场景调用的 Skill"],
            ["权限", "每个 Skill 声明所需的文件读写范围，避免越权"],
            ["热更新", "改完保存即生效，不需要重启 Agent"],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="impact" num="五、" title="实际效果">
        <SubHeading>每日运转的实际效果</SubHeading>
        <BulletList
          items={[
            "Nova 承担大部分日常事务的接发与归档，让我可以专注于决策性工作",
            "Claude Code 每天处理战略 / 复杂代码任务，从「想到」到「做完」的延迟显著缩短",
            "HealthBot 接管健身打卡 + 饮食 / 训练提醒，达成率明显高于此前手动记录的阶段",
            "求职投递自动化：JD → 定制 Cover Letter 草稿的产出时间，从原先手写 30+ 分钟降到分钟级",
          ]}
        />

        <SubHeading>关键里程碑</SubHeading>
        <BulletList
          items={[
            "2026-04-14 · Agent V2 部署完成（Nova + HealthBot + Claude Code）",
            "2026-05-02 · 双 Mac Syncthing 同步上线，跨设备连贯工作流跑通",
            "2026-05-21 · 健身教练脱离后，GPT 副驾 + Nova + CC 三层接管，铁馆现场识别工作流上线",
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="reflection" num="六、" title="反思与收获">
        <SubHeading>核心收获</SubHeading>
        <Callout variant="insight">
          每天运维这套系统，让我对 AI Agent 的认知从「调 prompt 让它干活」转向<strong>「设计层级、设计数据流、设计失败恢复」</strong>。
          Agent 系统真正的难点很少在模型本身，而是在<strong>不同模型怎么协同、人在哪里介入、错了怎么恢复、贵 token 什么时候出场</strong>这些工程问题。
          这是「AI 工具使用者」和「AI 工具链构建者」之间最大的差距。
        </Callout>

        <SubHeading>对 AI PM 求职的意义</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>从「用 AI」到「设计 AI 系统」：</strong>这个项目让我能在面试中具体展示 AI PM 思维——分层、调度、Trade-off，而不是空谈
            </span>,
            <span key="2">
              <strong>真实场景驱动：</strong>每一个 Skill 都来自我自己每天的痛点，不是想象出来的 demo
            </span>,
            <span key="3">
              <strong>多模型协同的实战：</strong>横评 6 大主流模型并把它们真的部署到不同 Tier 上跑活，而不是只在 benchmark 上对比
            </span>,
          ]}
        />
      </CaseStudySection>
    </>
  )
}

const entry: CaseStudyEntry = { meta, Content }
export default entry
