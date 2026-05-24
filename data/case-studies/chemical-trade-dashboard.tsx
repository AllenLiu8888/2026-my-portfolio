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

const SLUG = "chemical-trade-dashboard"

export const meta: CaseStudyEntry["meta"] = {
  slug: SLUG,
  title: {
    en: "Chemical-Trade Sales Dashboard",
    zh: "化工销售区域数据管理系统",
  },
  tagline: {
    en: "Solo PM + full-stack build for a chemical trading company covering 5 sales zones and 31 provinces. 7-day sprint from user research → architecture → deployment.",
    zh: "化工贸易企业（主营纯碱 / 尿素 / 小苏打）的第一个全国销售统一可视化看板——独立 PM + 全栈开发，7 天从需求调研、架构设计到 React / Node / PostgreSQL 全栈上线试点。",
  },
  highlight: {
    en: "0→1 in 7 days, solo PM + full-stack delivery",
    zh: "亮点：7 天独立 PM + 全栈 0→1 上线",
  },
  overview: {
    type: {
      en: "TO B · Enterprise internal tool",
      zh: "TO B · 企业内部系统",
    },
    period: { en: "7-day sprint (2026)", zh: "7 天 Sprint（2026 年）" },
    team: { en: "Solo (PM + Frontend + Backend + DB)", zh: "独立完成（PM + 前端 + 后端 + 数据库）" },
    stack: {
      en: "React + Vite + TailwindCSS / Node.js + Express / PostgreSQL / Excel parsing",
      zh: "React + Vite + TailwindCSS / Node.js + Express / PostgreSQL / Excel 解析",
    },
    grade: { en: "Deployed · in trial use", zh: "已部署 · 试点运行中" },
  },
  roles: {
    en: ["Product Manager", "Full-Stack Developer", "UI Designer"],
    zh: ["产品经理", "全栈开发", "UI 设计师"],
  },
  toc: [
    { id: "why", num: "一", label: { en: "Why · Pain", zh: "Why · 业务痛点" } },
    { id: "what", num: "二", label: { en: "What · Modules", zh: "What · 三大模块" } },
    { id: "how", num: "三", label: { en: "How · 7-Day Sprint", zh: "How · 7 天 Sprint" } },
    { id: "tech", num: "四", label: { en: "Tech Decisions", zh: "技术亮点" } },
    { id: "reflection", num: "五", label: { en: "Reflection", zh: "反思与收获" } },
  ],
}

function Content({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <CaseStudySection title="English summary">
        <ENStub
          slug={SLUG}
          summary="A 7-day solo build for a chemical trading company that needed its first unified national sales view. I owned the full loop: user interviews with the GM + 3 sales managers, system architecture, React/Node/PostgreSQL implementation, and deployment. Output: heatmap drill-down across 5 sales zones / 31 provinces, customer CRM, Excel-import data validation. Live in trial use."
          label={{
            badge: "Translation in progress",
            body: "The Chinese version below is the canonical write-up — covering the business pain point, the three core modules, the 7-day execution plan, key tech decisions, and what I learned from solo 0→1 delivery.",
            cta: "Read the full Chinese version",
            back: "Back to projects",
          }}
        />
      </CaseStudySection>
    )
  }

  return (
    <>
      <Callout variant="tip">
        ⚠️ 本案例为 <strong>Claude Code 基于简历事实整理的初稿</strong>。具体的业主访谈引述、上线指标、用户名称等细节等待 Yikai 补充修正后再公开。
      </Callout>

      <CaseStudySection id="why" num="一、" title="项目背景 & 业务痛点（Why）">
        <SubHeading label="客户">化工贸易企业，5 销区 / 31 省市</SubHeading>
        <Paragraph>
          客户是一家主营<strong>纯碱、尿素、小苏打</strong>等大宗化工品的贸易企业，覆盖华北、华东、华南等 5 个销售区域、31 个省市，下辖区域经理 + 客户经理两级销售团队。
        </Paragraph>

        <SubHeading label="痛点">3 个真实问题</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>看不见全国销售全景：</strong>各销区独立维护 Excel，总部需要的「全国某月某品类销量分布」要等周五人工汇总，决策滞后 5-7 天
            </span>,
            <span key="2">
              <strong>客户档案散乱：</strong>客户联系方式、年度成交记录、回款情况分散在区域经理的微信 / Excel / 邮件里，新人接手要重新追问
            </span>,
            <span key="3">
              <strong>Excel 导入易出错：</strong>区域经理每月报送的 Excel 格式不统一（合并单元格、空行、列名差异），人工清洗占用大量行政时间
            </span>,
          ]}
        />

        <SubHeading label="洞察">不是「做大系统」，是「做对一个看板」</SubHeading>
        <Callout variant="insight">
          调研后我判断：客户不需要一个臃肿的 ERP，需要的是<strong>一个能在 5 秒内看见全国销售分布的看板 + 一个能正确吃下 Excel 的导入工具</strong>。
          范围一旦收敛到这两件事，7 天交付就是可行的。
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="what" num="二、" title="产品设计（What）——三大模块">
        <SubHeading label="01">销售热力地图（核心模块）</SubHeading>
        <BulletList
          items={[
            "全国地图 + 省级钻取：默认显示销售额热力分布，点击省份下钻到该省客户列表",
            "时间维度切换：年 / 季 / 月 三档时间筛选 + 同比环比对比",
            "品类维度切换：纯碱 / 尿素 / 小苏打 三品类独立 + 总量视图",
            "销区分组：5 个销区可单独筛选 + 跨销区对比",
          ]}
        />

        <SubHeading label="02">客户管理后台（CRM）</SubHeading>
        <BulletList
          items={[
            "客户档案：公司名、联系人、销区归属、品类偏好、年度采购规模",
            "成交记录时间线：每笔订单时间、品类、金额、回款状态",
            "导出能力：按销区 / 品类 / 时间筛选后一键导出 Excel",
          ]}
        />

        <SubHeading label="03">Excel 批量导入 + 校验</SubHeading>
        <BulletList
          items={[
            "兼容区域经理上报的常见 Excel 格式（合并单元格 / 空行 / 列序异常）",
            "导入前预览：解析后展示前 20 行让用户确认列映射",
            "校验报错可定位：行号 + 字段 + 错因（如「第 17 行客户名为空」）",
            "支持原文件再下载，方便用户修正后重传",
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="how" num="三、" title="执行过程（How）——7 天 Sprint">
        <DataTable
          headers={["Day", "重点", "产出"]}
          rows={[
            ["1", "需求调研", "和总经理 + 3 位销区经理访谈，确认 3 大痛点；输出范围文档"],
            ["2", "数据建模 + 原型", "PostgreSQL schema（客户 / 订单 / 销区 / 用户表）+ Figma 主要页面线框"],
            ["3", "后端 API + 导入工具", "Node.js + Express 搭基础 API；优先做 Excel 解析 + 校验链路"],
            ["4", "前端框架 + 热力地图", "React + Vite + Tailwind 起架；接入 ECharts 完成热力地图省级钻取"],
            ["5", "CRM 模块 + 数据联调", "客户列表 + 时间线，串通前后端，处理边界情况"],
            ["6", "用户验收 + 修复", "邀请总经理走一遍核心流程，记录问题；当晚集中修复 12 个细节"],
            ["7", "部署 + 文档", "服务器部署 + 数据备份策略 + 简短使用手册，交付试点"],
          ]}
        />

        <Callout variant="decision">
          <strong>关键决策：</strong>第 6 天的用户验收发现 Excel 列名识别策略太严格——区域经理实际使用的列名差异远超我预期。当晚我重写了字段映射逻辑，从「严格匹配列名」改为「智能识别 + 用户确认」，把容错性大幅提升。这是 7 天 Sprint 里最重要的一次设计修正。
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="tech" num="四、" title="技术亮点">
        <DataTable
          headers={["技术点", "选型理由", "解决的问题"]}
          rows={[
            [
              <strong key="1">React + Vite</strong>,
              "Vite 起步快、HMR 流畅，7 天工期里能省下大量编译等待时间",
              "前端迭代效率",
            ],
            [
              <strong key="2">ECharts 热力地图</strong>,
              "成熟的中国地图省级 GeoJSON + 钻取交互内置",
              "省级下钻 + 销售额热力可视化",
            ],
            [
              <strong key="3">Node.js + Express</strong>,
              "JavaScript 全栈，独立开发时上下文切换成本最低",
              "API 服务 + Excel 解析中间层",
            ],
            [
              <strong key="4">PostgreSQL</strong>,
              "对 JSON 字段 + 复杂查询的支持优于 MySQL，适合销售订单这种半结构化数据",
              "客户档案 + 订单数据存储",
            ],
            [
              <strong key="5">Excel 智能列映射</strong>,
              "基于关键词模糊匹配 + 用户预览确认",
              "兼容区域经理上报的非标 Excel 格式",
            ],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="reflection" num="五、" title="反思与收获">
        <SubHeading>做得好的地方</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>需求收敛果断：</strong>没有掉进「做大系统」的陷阱，第一天就把范围卡死在「看板 + 导入」两件事，7 天才有可能交付
            </span>,
            <span key="2">
              <strong>用户验收前置：</strong>第 6 天就让总经理走一遍核心流程，留出当晚集中修复时间——比 Day 7 才发现问题主动得多
            </span>,
            <span key="3">
              <strong>容错性设计修正：</strong>Excel 列名映射从「严格」改「智能」，这一个判断决定了系统能否在销区经理手里真正用起来
            </span>,
          ]}
        />

        <SubHeading>可以改进的地方</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>前期需求访谈样本偏少：</strong>3 位销区经理覆盖度不够，上线后又遇到一些边缘场景（如跨销区客户归属问题）。如果有第 0 天做更多访谈，可以早点暴露
            </span>,
            <span key="2">
              <strong>移动端没排上：</strong>区域经理外出拜访时常用手机查客户档案，但 7 天里我把移动端 deprioritize 了——这是已知的下一版本优先事项
            </span>,
          ]}
        />

        <SubHeading>对我的成长</SubHeading>
        <Callout variant="insight">
          这是我第一次<strong>真正在客户场景下做 0→1 全闭环交付</strong>，证明我能从需求访谈一直走到代码上线。
          更重要的是验证了一件事：<strong>「PM 是不是真的懂技术」会直接决定产品决策的速度和质量。</strong>
          当我在用户验收时听到「Excel 列名不一样」的反馈，我能立刻判断「这是字段映射的问题」、估算「重写要 2 小时」、当晚就修复——
          这是我比纯产品出身的 PM 在 0→1 场景下最大的优势。
        </Callout>
      </CaseStudySection>
    </>
  )
}

const entry: CaseStudyEntry = { meta, Content }
export default entry
