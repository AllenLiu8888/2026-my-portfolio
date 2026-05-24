import {
  BulletList,
  Callout,
  CaseImage,
  CaseStudySection,
  DataTable,
  Paragraph,
  SubHeading,
} from "@/components/case-study/CaseStudySection"
import { ENStub } from "@/components/case-study/ENStub"
import type { CaseStudyEntry, Locale } from "@/lib/case-studies"

const SLUG = "digital-sales-map"

export const meta: CaseStudyEntry["meta"] = {
  slug: SLUG,
  title: {
    en: "Digital Sales Map · Chemical Sales Platform",
    zh: "Digital Sales Map · 化工销售数据管理系统",
  },
  tagline: {
    en: "Solo, 7-day end-to-end build for a chemical-trading company — research → React/Node full-stack → Aliyun ECS deployment. A Vibe-Coding practice in which I owned business understanding, spec, and QC; AI accelerated the code. National map drill-down, customer CRM, Excel batch import. Now in pilot use.",
    zh: "7 天内独立完成从需求调研到部署上线的全栈数据管理平台，利用 AI 辅助开发（Vibe Coding）为传统化工企业构建可视化销售管理工具，现已在内部试点团队使用。",
  },
  highlight: {
    en: "Solo end-to-end · research to production",
    zh: "亮点：独立完成需求调研到部署全流程",
  },
  overview: {
    type: {
      en: "TO B · Enterprise internal tool (real business)",
      zh: "企业内部工具（真实业务场景）",
    },
    period: {
      en: "~7 days (research → deployment)",
      zh: "约 7 天（从需求调研到部署上线）",
    },
    team: {
      en: "Solo (research · design · full-stack · DevOps)",
      zh: "1 人（独立完成全部工作：需求分析、产品设计、全栈开发、部署运维）",
    },
    stack: {
      en: "React + TypeScript + Tailwind + ECharts / Node.js + Express + Prisma + PostgreSQL / Nginx + PM2 + Aliyun ECS",
      zh: "React + TypeScript + TailwindCSS + ECharts（前端）/ Node.js + Express + Prisma + PostgreSQL（后端）/ Nginx + PM2 + 阿里云 ECS（部署）",
    },
    grade: {
      en: "Live · in pilot use by client's internal team",
      zh: "已上线 · 客户内部试点团队使用中",
    },
  },
  roles: {
    en: ["Product Manager", "Full-Stack Developer", "DevOps", "Vibe Coding Operator"],
    zh: ["产品经理", "全栈开发", "部署运维", "AI 辅助开发（Vibe Coding）"],
  },
  liveDemo: {
    label: "Live Demo · system.kaixingwuliu.com",
    href: "http://system.kaixingwuliu.com/",
  },
  github: [{ label: "Github Repo", href: "https://github.com/AllenLiu8888/digital-sales-system" }],
  toc: [
    { id: "why", num: "一", label: { en: "Why · Background", zh: "Why · 业务背景" } },
    { id: "research", num: "二", label: { en: "Research & Definition", zh: "需求调研 + 产品定义" } },
    { id: "vibe", num: "三", label: { en: "Vibe Coding", zh: "Vibe Coding 实践" } },
    { id: "what", num: "四", label: { en: "What · Product Design", zh: "What · 产品设计" } },
    { id: "timeline", num: "五", label: { en: "Timeline", zh: "项目时间线" } },
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
          summary="7-day solo end-to-end build for an anonymous chemical-trading client — covering 3 product lines (soda ash, urea, sodium bicarbonate) across 5 sales zones and 31 provinces. A Vibe-Coding practice: I owned the business interviews, the spec, the QC; AI accelerated the React + Node + Prisma + PostgreSQL build; I drove the Aliyun ECS deployment with Nginx + PM2 + GitHub Actions CI/CD. Live at system.kaixingwuliu.com, currently in pilot use."
          label={{
            badge: "Translation in progress",
            body: "Chinese version below — covers the business interviews, what Vibe Coding looks like when PM-driven, the system architecture, the 7-day timeline, the data-model decision that mattered most (1:N customer-region), and reflections on PM + AI collaboration.",
            cta: "Read the full Chinese version",
            back: "Back to projects",
          }}
        />
      </CaseStudySection>
    )
  }

  return (
    <>
      <CaseStudySection id="why" num="一、" title="项目背景（Why）">
        <CaseImage src="/case-studies/digital-sales-map/01-cover.png" caption="化工销售数据管理系统 · 全国销售地图概览" />

        <SubHeading label="业务场景">化工贸易企业，3 品类 / 5 销区 / 31 省市</SubHeading>
        <Paragraph>
          xx 化工企业（客户要求保密）是一家化工产品贸易公司，主营<strong>纯碱、尿素、小苏打</strong>三类产品，全国设有 5 个销售区域，覆盖 31 个省市，销售团队分布在不同大区。本次受邀协助制作可视化销区管理系统。
        </Paragraph>

        <SubHeading label="问题">Excel 表格管理的三大痛点</SubHeading>
        <Paragraph>
          公司的销售数据管理长期依赖 Excel 表格——客户信息、区域分配、销量统计全部靠手动维护的电子表格。随着业务增长，这种方式暴露出明显的痛点：
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>数据分散：</strong>不同销区的数据各自为政，没有统一视图，管理层难以快速了解全国业务全貌
            </span>,
            <span key="2">
              <strong>更新滞后：</strong>Excel 手动维护效率低，数据更新不及时，销区之间信息不对称
            </span>,
            <span key="3">
              <strong>可视化缺失：</strong>纯数字表格无法直观展示区域分布和销售热度，管理决策缺乏数据支撑
            </span>,
          ]}
        />

        <SubHeading label="核心判断">简单 &gt; 功能多，能用 &gt; 好看</SubHeading>
        <Callout variant="insight">
          这不是一个需要复杂功能的系统——业务方需要的是一个<strong>简单、直观、能快速上手</strong>的工具，把散落在 Excel 里的数据变成一张「看得见」的全国销售地图，同时保留他们熟悉的 Excel 导入方式作为数据录入通道。
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="research" num="二、" title="需求调研与产品定义（How）">
        <SubHeading label="业务调研">组织架构 + 数据特点 + 特殊业务规则</SubHeading>
        <Paragraph>与销售团队沟通后，梳理了现有的业务结构和数据流：</Paragraph>

        <SubHeading>组织架构</SubHeading>
        <BulletList
          items={[
            "全国分为 5 个销区，每个销区设大区经理 1 名",
            "销区下设业务经理、办公室 / 内勤、业务员",
            "每个省 / 市有对应的业务员负责，部分客户跨多个区域",
          ]}
        />

        <SubHeading>数据特点</SubHeading>
        <BulletList
          items={[
            "三类产品（纯碱 / 尿素 / 小苏打）各自独立管理客户",
            "一个客户可能在多个城市有业务，需要按城市分别记录销量",
            "销售团队习惯用 Excel 维护数据，任何新工具都需要兼容这一习惯",
          ]}
        />

        <SubHeading>特殊业务规则</SubHeading>
        <Callout variant="decision">
          内蒙古自治区按城市级别<strong>拆分归属两个不同销区</strong>（东部归销区三，西部归销区五）；部分客户只知道省份不知道具体城市，系统需要兼容这种「省级精度」的录入场景。
        </Callout>

        <SubHeading label="产品设计">6 个核心功能模块</SubHeading>
        <DataTable
          headers={["功能模块", "用户价值"]}
          rows={[
            ["全国销售地图", "一目了然看到全国各省 / 市的销售分布，颜色深浅代表销量大小"],
            ["省份下钻", "点击省份进入该省地图，查看各市的销售详情和客户列表"],
            ["三产品切换", "纯碱 / 尿素 / 小苏打一键切换，各自独立的数据视图"],
            ["客户管理后台", "增删改查客户信息，支持多地区关联、批量操作"],
            ["Excel 批量导入", "保留业务方熟悉的 Excel / CSV 工作方式，上传即可自动解析入库"],
            ["销区配色地图", "5 个销区用不同颜色标注，含业务员 hover 信息"],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="vibe" num="三、" title="AI 辅助开发实践（Vibe Coding）">
        <SubHeading label="为什么">PM 背景 + AI = 最高效的全栈交付方式</SubHeading>
        <Paragraph>作为一个产品经理背景的开发者，我选择用 AI 辅助开发（Vibe Coding）来完成这个项目。核心考虑是：</Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>时间约束极强：</strong>从需求确认到公司需要使用，只有约 1 周时间
            </span>,
            <span key="2">
              <strong>需求明确但技术面广：</strong>涉及地图可视化、前后端开发、数据库设计、服务器部署，单人全栈开发效率挑战大
            </span>,
            <span key="3">
              <strong>PM 的优势在于需求理解：</strong>我能精确描述「要什么」和「为什么」，AI 擅长快速生成「怎么做」的代码
            </span>,
          ]}
        />

        <SubHeading label="我的角色">Vibe Coding 不是「让 AI 写代码我什么都不做」</SubHeading>

        <SubHeading>需求侧（AI 做不到的）</SubHeading>
        <BulletList
          items={[
            "与业务方沟通，理解真实场景和痛点",
            "判断功能优先级——先做地图可视化和数据管理，设置页面等低优先级后做",
            "定义业务规则——如内蒙古拆分逻辑、客户多地区关联模型、产品类型映射",
          ]}
        />

        <SubHeading>产品设计侧</SubHeading>
        <BulletList
          items={[
            "定义交互流程——地图点击→信息面板→省份下钻→客户卡片→详情弹窗",
            "发现 AI 实现与需求的偏差并及时纠正——如「颜色应该填充在地图内而不是 hover 才显示」、「反馈数字被误显示为温度值」等",
            "把模糊的业务需求转化为精确的技术需求——「一个客户可能对应多个地区」→数据库的一对多关联模型设计",
          ]}
        />

        <SubHeading>质量控制侧</SubHeading>
        <BulletList
          items={[
            "手动测试每个功能，发现 AI 代码的 bug 并指导修复",
            "产品类型切换后客户列表未同步更新、批量删除功能异常等，都是我在测试中发现并推动修复的",
            "部署后的端到端验证——本地能跑 ≠ 服务器能跑，处理了大量 Prisma 配置、Nginx 反向代理、数据库连接等部署层面的问题",
          ]}
        />

        <SubHeading label="关键决策">开发过程中的判断时刻</SubHeading>
        <DataTable
          headers={["决策点", "背景", "我的判断"]}
          rows={[
            [
              "数据库从 SQLite 迁移到 PostgreSQL",
              "项目初期用 SQLite 快速验证，但上线需要生产级数据库",
              "数据量不大且都是演示数据，迁移成本低，果断切换",
            ],
            [
              "客户数据模型重构",
              "最初一个客户只能对应一个地区，业务方反馈一个客户可能在多城市有业务",
              "引入一对多关联（Customer → SalesCoverage），重构数据库 schema",
            ],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="what" num="四、" title="产品设计（What）">
        <SubHeading>系统架构</SubHeading>
        <Callout variant="insight">
          <code className="block text-sm font-mono text-zinc-200 whitespace-pre">
{`React 前端（ECharts 地图可视化）
       ↓
Node.js 后端（Express + Prisma ORM）
       ↓
PostgreSQL 数据库`}
          </code>
        </Callout>

        <SubHeading label="01">全国概览（Dashboard 首页）</SubHeading>
        <BulletList
          items={[
            "中国地图热力图，颜色深浅代表各省销量大小",
            "顶部产品切换（纯碱 / 尿素 / 小苏打），地图数据实时切换",
          ]}
        />
        <CaseImage src="/case-studies/digital-sales-map/02-dashboard.png" caption="全国概览 Dashboard 首页" />

        <SubHeading label="02">省份下钻 + 客户详情</SubHeading>
        <BulletList
          items={[
            "点击任意省份，地图切换为该省各市的地图",
            "信息面板显示该省销售汇总 + 客户列表卡片（按销量排序）",
            "点击客户卡片弹出详情弹窗（联系方式、备注、各地区销量明细）",
          ]}
        />
        <CaseImage src="/case-studies/digital-sales-map/03-province-drill-a.png" caption="省份下钻 · 该省客户列表" />
        <CaseImage src="/case-studies/digital-sales-map/04-customer-detail.png" caption="客户详情弹窗 · 多地区销量明细" />

        <SubHeading label="03">管理后台（Admin Panel）</SubHeading>
        <BulletList
          items={[
            "按产品类型分 Tab 管理客户数据（纯碱 / 尿素 / 小苏打）",
            "客户表格支持展开查看多地区子记录",
            "新增 / 编辑客户：省市联动下拉选择，支持添加多个地区",
            "批量操作：全选 / 多选 + 批量删除",
            "Excel / CSV 导入：上传文件自动解析，同名客户智能合并",
          ]}
        />
        <CaseImage src="/case-studies/digital-sales-map/05-admin-panel.png" caption="管理后台 · 客户表格 + 批量操作" />
        <CaseImage src="/case-studies/digital-sales-map/06-excel-import.png" caption="Excel / CSV 智能导入与字段映射" />
      </CaseStudySection>

      <CaseStudySection id="timeline" num="五、" title="项目时间线">
        <DataTable
          headers={["阶段", "时间", "工作内容"]}
          rows={[
            ["需求调研", "Day 1", "与销售团队沟通，收集销区划分、组织架构、数据格式等业务信息"],
            ["V1：销区地图", "Day 2", "完成基础中国地图 + 5 销区配色 + 销区信息面板 + 内蒙古城市级拆分"],
            ["V2：全栈系统", "Day 3-4", "搭建 Node.js 后端 + 数据库，实现客户管理 CRUD、地图热力图、省份下钻、产品切换"],
            ["V3：功能完善", "Day 5", "客户多地区关联重构、Excel 批量导入、批量删除、UI 美化"],
            ["部署上线", "Day 6-7", "阿里云 ECS 部署、Nginx 配置、子域名方案、PostgreSQL 迁移、CI/CD 配置"],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="tech" num="六、" title="技术实现亮点">
        <DataTable
          headers={["技术点", "实现方式", "解决的业务问题"]}
          rows={[
            [<strong key="1">中国地图可视化</strong>, "ECharts + 阿里 DataV GeoJSON", "直观展示全国销售分布，替代 Excel 数据表"],
            [<strong key="2">省份下钻</strong>, "动态加载省级 GeoJSON + 后端 API 联动", "支持从全国 → 省 → 市的逐级查看"],
            [<strong key="3">客户多地区模型</strong>, "Prisma 一对多关联（Customer → SalesCoverage）", "支持一个客户在多个城市有业务的真实场景"],
            [<strong key="4">Excel 智能导入</strong>, "Multer + xlsx.js + 自动 adcode 映射", "保留业务方熟悉的 Excel 工作方式，同名客户自动合并"],
            [<strong key="5">生产级部署</strong>, "Nginx 反向代理 + PM2 进程管理 + GitHub Actions CI/CD", "子域名访问、后端自动重启、push 自动部署"],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="reflection" num="七、" title="反思与收获">
        <SubHeading>做得好的地方</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>极快的需求 → 上线闭环：</strong>7 天内从调研到上线，且系统已投入实际使用。这得益于：① 需求理解精准，没有做多余功能；② AI 辅助开发极大提升了编码效率；③ 遇到问题快速决策
            </span>,
            <span key="2">
              <strong>业务理解驱动产品设计：</strong>内蒙古城市级拆分、客户多地区关联、Excel 导入等功能都来自对真实业务场景的深入理解，而非技术驱动
            </span>,
            <span key="3">
              <strong>Vibe Coding 的正确姿势：</strong>AI 辅助开发的核心不是「不写代码」，而是让 PM 把更多精力放在需求理解、产品判断和质量控制上。AI 生成代码，我负责「对不对」和「好不好」
            </span>,
          ]}
        />

        <SubHeading>可以改进的地方</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>部署经验不足：</strong>部署阶段花了较多时间处理 Nginx 配置、Prisma 在 Linux 上的二进制兼容、数据库连接等问题。如果有更多 DevOps 经验，部署可以更高效
            </span>,
            <span key="2">
              <strong>缺少正式的用户测试：</strong>由于时间紧迫，直接交付给业务方使用，没有组织正式的可用性测试。后续可以收集使用反馈进行迭代
            </span>,
            <span key="3">
              <strong>数据安全与权限：</strong>当前系统没有用户登录和权限管理，所有人都可以修改数据。作为内部工具可以接受，但如果用户范围扩大需要加入权限控制
            </span>,
          ]}
        />

        <SubHeading>对我的成长</SubHeading>
        <Callout variant="insight">
          这个项目让我验证了一个重要的认知：<strong>产品经理 + AI 辅助开发是一个非常高效的组合。</strong>
          PM 的核心能力——理解业务、定义需求、做取舍判断——在 AI 时代不仅没有被替代，反而变得更加重要。因为 AI 能写出代码，但它不知道该写什么代码、为谁写、以及写出来的东西对不对。这正是 PM 的不可替代价值。
          <br />
          <br />
          同时，<strong>具备技术理解力的 PM 在与 AI 协作时效率远高于纯技术背景的开发者</strong>——因为我能同时从业务和技术两个视角审视 AI 的输出。
        </Callout>
      </CaseStudySection>
    </>
  )
}

const entry: CaseStudyEntry = { meta, Content }
export default entry
