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

const SLUG = "smart-library-thermal"

export const meta: CaseStudyEntry["meta"] = {
  slug: SLUG,
  title: {
    en: "Smart Library Thermal-Perception System",
    zh: "Temperature · 图书馆智能温度感知系统",
  },
  tagline: {
    en: "A software × hardware IoT system that turns invisible thermal microclimates into visible information, letting library users find their most comfortable seat — built with ESP32 sensor mesh, dual-screen React frontend, AWS-hosted Python backend.",
    zh: "一个融合 IoT 硬件传感器、双端 Web 界面与云端架构的空间环境感知系统——通过用户调研驱动的迭代设计，把不可见的「热微气候」变成可看的信息，帮学生快速找到舒适的学习位置。",
  },
  highlight: {
    en: "Software + Hardware product co-design",
    zh: "亮点：软硬件产品协同交互设计",
  },
  overview: {
    type: {
      en: "Capstone (UQ DECO7285 Studio Two)",
      zh: "课程毕设（UQ DECO7285 Studio Two）",
    },
    period: { en: "2025 (~12 weeks)", zh: "2025 年（约 12 周）" },
    team: { en: "6 people", zh: "6 人团队" },
    stack: {
      en: "ESP32 + LED strip + physical buttons / React (large display + mobile) / Python backend / AWS",
      zh: "ESP32 温度传感器 + LED 灯带 + 物理按钮 / React 前端（大屏 + 移动端）/ Python 后端 / AWS 云部署",
    },
    grade: {
      en: "High Distinction (7/7 · max grade)",
      zh: "High Distinction（7/7，满分）",
    },
  },
  roles: {
    en: ["Team Leader", "Product Manager", "Project Manager", "Frontend Lead", "Product Design Lead"],
    zh: ["队长 Team Leader", "产品经理 PM", "项目经理 Project Manager", "前端负责人", "产品设计主导"],
  },
  github: [{ label: "Github Repo", href: "https://github.com/AllenLiu8888/temperature-map-app" }],
  toc: [
    { id: "why", num: "一", label: { en: "Why · Problem", zh: "Why · 背景与问题" } },
    { id: "process", num: "二", label: { en: "How · Process", zh: "How · 调研到 3 轮迭代" } },
    { id: "what", num: "三", label: { en: "What · Product", zh: "What · 系统架构" } },
    { id: "work", num: "四", label: { en: "My Work", zh: "我的工作" } },
    { id: "tech", num: "五", label: { en: "Tech Highlights", zh: "技术亮点" } },
    { id: "reflection", num: "六", label: { en: "Reflection", zh: "反思与收获" } },
  ],
}

function Content({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <CaseStudySection title="English summary">
        <ENStub
          slug={SLUG}
          summary="UQ DECO7285 capstone — a software × hardware IoT system addressing the invisible thermal microclimate problem in open library study spaces. ESP32 sensor mesh + dual-screen React frontend + Python/AWS backend. I led a 6-person team as Team Lead + PM + product design lead + frontend lead; the project earned a High Distinction (7/7, max grade). Key product call: after Contextual Inquiry revealed the library couldn't actually change room temperature, I redefined the button from a 'control tool' into a 'perception recorder' — flipping the entire product narrative."
          label={{
            badge: "Translation in progress",
            body: "I'm writing the full English case study. The Chinese version below is the canonical write-up — covering user research, three prototype iterations, two rounds of usability testing, the IoT/React/AWS stack, and reflections on cross-domain PM work.",
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
        <CaseImage src="/case-studies/smart-library-thermal/01-cover.jpg" caption="Temperature · 系统部署效果图" />

        <SubHeading label="问题">看不见的「热微气候」</SubHeading>
        <Paragraph>
          图书馆开放式学习空间存在明显的「热微气候」——同一楼层不同区域温差显著，有些角落过冷，有些位置闷热。学生花费大量时间反复换座试错，却无法在入馆时快速判断哪个区域更舒适。更重要的是，传统空调系统采用单一温控设定，无法满足不同人群的差异化需求（研究表明，温度对不同性别的认知表现影响存在差异）。
        </Paragraph>

        <SubHeading label="核心洞察">问题的本质不是「温度控制」</SubHeading>
        <Callout variant="insight">
          通过用户访谈和现场观察，我们发现：<strong>问题的本质不是「温度控制」，而是「温度信息不可见」。</strong>
          学生不需要调温度，他们需要的是在选座前就能「看见」温度——把不可见的环境差异变成可感知、可决策的信息。
        </Callout>

        <SubHeading label="我们的方案">软硬件一体的温度感知与反馈系统</SubHeading>
        <Paragraph>
          通过 IoT 传感器实时采集各区域温度，LED 灯带在物理空间中直观显示冷热状态，大屏在图书馆大厅展示整层温度热力图，学生扫码进入移动端查看详情并提交冷热反馈。让温度「可见」，让选座「有据可依」。
        </Paragraph>
        <CaseImage src="/case-studies/smart-library-thermal/02-architecture.png" caption="软硬件一体的感知反馈架构" />

        <SubHeading>目标用户</SubHeading>
        <DataTable
          headers={["用户群体", "特征", "核心需求"]}
          rows={[
            ["长时间学习的大学生", "日均图书馆学习 2-6 小时，对环境敏感", "快速找到温度舒适的座位"],
            ["图书馆运营管理方", "需要数据支撑设施决策", "根据有效反馈数据，优化空调策略"],
          ]}
        />

        <SubHeading>使用场景</SubHeading>
        <Paragraph>学生入馆选座、长时间学习期间的舒适度反馈、图书馆设施管理参考。</Paragraph>
      </CaseStudySection>

      <CaseStudySection id="process" num="二、" title="设计过程（How）——从用户调研到 3 轮迭代">
        <SubHeading label="01">用户调研 → 需求洞察</SubHeading>
        <Paragraph>
          <strong>调研方法：</strong>半结构化访谈 + 现场观察（Contextual Inquiry）
        </Paragraph>
        <Paragraph>对来自不同院系的学生进行深度访谈，了解他们在图书馆中的环境体验。关键发现：</Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>温度是影响学习体验最直接的因素</strong>，但用户缺乏感知渠道——「每次都是坐下来才知道冷不冷」
            </span>,
            "学生有各自的应对策略（带外套、换楼层），但都是「试错型」行为，缺乏信息支撑",
            "图书馆现有信息屏内容静态，缺乏实时性和交互性",
          ]}
        />
        <Paragraph>
          <strong>亲和图分析（Affinity Diagram）：</strong>将访谈数据编码归纳为三大主题——环境舒适度、学习氛围、空间设施需求。其中「温度不均且不可见」被识别为最核心的痛点。
        </Paragraph>
        <CaseImage src="/case-studies/smart-library-thermal/03-affinity-diagram.png" caption="亲和图分析过程" />

        <SubHeading label="02">问题定义 & 概念生成</SubHeading>
        <Callout variant="decision">
          基于调研洞察，确定核心问题陈述：<strong>「如何帮助用户在图书馆中主动感知环境温度，做出更舒适的选座决策？」</strong>
        </Callout>
        <Paragraph>
          团队头脑风暴产出 4 个方向：温度反馈系统、安静氛围提醒、遗失物提醒、Workshop 展示平台。经评估与导师反馈，选择
          <strong>智能温度感知与反馈系统</strong>——因为它最直接回应了调研中发现的核心用户需求。
        </Paragraph>

        <SubHeading label="Prototype 1">技术验证 & 概念收敛</SubHeading>
        <Paragraph>制作简易温度探测器，验证 ESP32 传感器 → LED 灯带 → Web 页面的数据通路是否可行。同时在 Figma 上完成初版界面设计。</Paragraph>
        <Callout variant="decision">
          <strong>关键转折点：</strong>最初设想用户通过按钮直接控制温度，但与图书馆管理方沟通后得知中央空调不支持个人调节。这让我们重新定义了按钮的角色——
          <strong>从「控制工具」转变为「感受记录」装置</strong>，用户通过按下红色 / 蓝色按钮表达「太热 / 太冷」，以数据形式参与环境感知。这一洞察直接塑造了产品的核心交互模式。
        </Callout>
        <Paragraph>
          <strong>发现的问题：</strong>LED 颜色在明亮环境中不易辨认；按钮功能语义不清晰。
        </Paragraph>
        <TwoCol>
          <CaseImage src="/case-studies/smart-library-thermal/04-prototype1-hardware.jpg" caption="Prototype 1 硬件探针" />
          <CaseImage src="/case-studies/smart-library-thermal/05-prototype1-figma.png" caption="Prototype 1 Figma 初版界面" />
        </TwoCol>

        <SubHeading label="Prototype 2">完整系统实现 & 正式用户测试</SubHeading>
        <Paragraph>目标是实现可运行的完整系统。</Paragraph>
        <Paragraph>
          <strong>技术实现：</strong>
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>前端：</strong>React 框架开发大屏端（展示温度热力图 + 用户反馈汇总）和移动端（扫码查看详情 + 提交反馈）
            </span>,
            <span key="2">
              <strong>硬件：</strong>组装 3 个传感器节点，1 个完整模块（含 LED + 物理按键），2 个数据采集节点
            </span>,
            <span key="3">
              <strong>后端：</strong>Python 构建，实现传感器数据实时同步至 Web 端
            </span>,
            <span key="4">
              <strong>架构升级：</strong>从本地服务器迁移到 AWS 云部署——解决了 ESP32 无法直接与云端通信的技术难题，重新设计了数据上传链路
            </span>,
          ]}
        />
        <Paragraph>
          <strong>用户测试（6 名长时间学习的学生）：</strong>
        </Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>Think-Aloud（思维出声）：</strong>用户边操作边说出想法，实时捕捉交互中的困惑
            </span>,
            <span key="2">
              <strong>Day Reconstruction（日重建）：</strong>用户在一天学习结束后回顾整体体验，获取跨时段的舒适度变化反馈
            </span>,
          ]}
        />
        <Paragraph>
          <strong>测试发现的 8 个核心问题：</strong>
        </Paragraph>
        <DataTable
          headers={["编号", "问题", "来源"]}
          rows={[
            ["1", "地图未展示完整楼层布局", "Think-Aloud"],
            ["2", "按钮操作不符合用户预期（以为能调温度）", "用户反馈"],
            ["3", "按钮颜色不清晰，无法区分冷热", "Think-Aloud"],
            ["4", "用户无法在地图上定位自己", "Day Reconstruction"],
            ["5", "二维码用途不清晰，缺乏引导文字", "Think-Aloud"],
            ["6", "反馈数字被误读为温度值", "用户反馈"],
            ["7", "LED 灯带缺乏颜色图例", "观察"],
            ["8", "移动端与大屏数据不同步", "技术测试"],
          ]}
        />
        <CaseImage src="/case-studies/smart-library-thermal/06-prototype2-system.png" caption="Prototype 2 完整系统部署" />

        <SubHeading label="Prototype 3">针对性迭代 & 最终交付</SubHeading>
        <Paragraph>基于用户测试结果，对影响最大的问题进行定向修复：</Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>反馈闭环强化：</strong>重写硬件控制代码，按下按钮后 LCD 屏幕即时显示「提交成功」，LED 灯带同步切换颜色，形成可见的反馈确认
            </span>,
            <span key="2">
              <strong>语义优化：</strong>将按钮重新设计为直观的红色（太热）和蓝色（太冷），一眼可理解
            </span>,
            <span key="3">
              <strong>信息层级优化：</strong>网页端加入解释文字和冷热图标，区分「反馈数量」和「温度数值」的视觉层级
            </span>,
            <span key="4">
              <strong>数据同步修复：</strong>修复 API 接入错误，确保大屏与移动端读取同一数据源
            </span>,
          ]}
        />
        <TwoCol>
          <CaseImage src="/case-studies/smart-library-thermal/07-prototype3-detail-a.png" caption="Prototype 3 大屏界面" />
          <CaseImage src="/case-studies/smart-library-thermal/08-prototype3-detail-b.png" caption="Prototype 3 移动端界面" />
        </TwoCol>
        <CaseImage src="/case-studies/smart-library-thermal/09-prototype3-final.png" caption="最终硬件 + 软件部署" />
      </CaseStudySection>

      <CaseStudySection id="what" num="三、" title="产品设计（What）">
        <SubHeading>系统架构</SubHeading>
        <Paragraph>系统由三个核心端构成，形成「感知—展示—反馈」的完整闭环：</Paragraph>
        <Callout variant="insight">
          <code className="block text-sm font-mono text-zinc-200 whitespace-pre">
{`硬件端（传感器 + LED + 按钮） → Python 后端（AWS 云） → Web 前端（大屏 + 移动端）`}
          </code>
        </Callout>

        <SubHeading>核心交互流程</SubHeading>
        <SubHeading label="01">入馆感知（大屏端）</SubHeading>
        <BulletList
          items={[
            "学生在图书馆大厅看到温度展示大屏，热力图直观展示各区域冷热分布",
            "汇总的用户反馈数据让温度信息更具可信度",
          ]}
        />

        <SubHeading label="02">深度查看（移动端）</SubHeading>
        <BulletList
          items={[
            "扫描二维码进入移动端页面，查看各区域详细温度数值",
            "可查看其他用户的冷热反馈数据，辅助选座决策",
          ]}
        />

        <SubHeading label="03">体验反馈（硬件端 + 移动端）</SubHeading>
        <BulletList
          items={[
            "在座位旁的硬件终端按下红 / 蓝按钮，表达「太热 / 太冷」",
            "移动端也可直接提交反馈，形成多渠道反馈入口",
            "反馈数据实时更新到大屏和移动端，形成数据闭环",
          ]}
        />

        <SubHeading label="04">运营参考（管理端）</SubHeading>
        <Paragraph>各区域温度趋势和用户反馈汇总，可为图书馆空调策略调整提供数据依据。</Paragraph>
      </CaseStudySection>

      <CaseStudySection id="work" num="四、" title="我的工作">
        <SubHeading label="Team Leader & PM">跨领域协调与项目管理</SubHeading>
        <Paragraph>作为 6 人团队的负责人，主导项目从调研到交付的全流程：</Paragraph>
        <BulletList
          items={[
            <span key="1">
              <strong>产品方向定义：</strong>在 4 个候选方案中，基于调研数据主导选择了温度感知方向，因为它最直接回应核心用户痛点
            </span>,
            <span key="2">
              <strong>跨领域协调：</strong>团队涉及硬件（ESP32 / 传感器 / 3D 打印外壳）、前端 Web、后端云服务三个技术域，我负责协调各模块的接口定义、开发节奏和联调计划
            </span>,
            <span key="3">
              <strong>用户测试组织：</strong>主导 2 轮用户测试的方案设计、参与者招募和结果分析，将测试发现转化为明确的迭代优先级
            </span>,
            <span key="4">
              <strong>任务分配与协调：</strong>根据组员擅长内容，分配任务，组织和主持会议
            </span>,
          ]}
        />

        <SubHeading label="产品设计主导">从调研到关键决策</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>用户调研与洞察提炼：</strong>主导半结构化访谈和现场观察，通过亲和图分析提炼出「温度不可见是核心痛点」这一关键洞察
            </span>,
            <span key="2">
              <strong>关键设计决策：</strong>推动按钮从「控制工具」到「感受记录」的功能重定义——这不是简单的功能调整，而是对产品核心价值的重新定义
            </span>,
            <span key="3">
              <strong>评估方法选择：</strong>选择 Think-Aloud（捕捉即时困惑）+ Day Reconstruction（捕捉长时段体验变化）的组合方法，匹配了图书馆「长时间停留」的场景特征
            </span>,
          ]}
        />

        <SubHeading label="前端开发">React 双端 + 架构迁移</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>双端前端架构：</strong>基于 React 构建大屏展示端和移动端两套界面，大屏端侧重热力图可视化，移动端侧重交互和反馈
            </span>,
            <span key="2">
              <strong>技术方案决策：</strong>评估团队能力后，推动 CSS 方案从 Sass 切换到 TailwindCSS，提升开发效率
            </span>,
            <span key="3">
              <strong>架构迁移：</strong>参与推动系统从本地服务器到 AWS 云端的架构升级，修改前端数据源配置，实现跨设备实时访问
            </span>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="tech" num="五、" title="技术亮点">
        <DataTable
          headers={["技术点", "实现方式", "解决的问题"]}
          rows={[
            [
              <strong key="1">IoT 数据采集</strong>,
              "ESP32 温度传感器 + 物理反馈按钮",
              "实时采集各区域温度，并在物理空间中直观展示冷热状态",
            ],
            [
              <strong key="2">双端 Web 界面</strong>,
              "React（大屏端 + 移动端）",
              "大屏提供全局视图吸引注意，移动端提供详情和反馈入口",
            ],
            [
              <strong key="3">云端部署</strong>,
              "Python 后端 + AWS",
              "从局域网到云端的架构升级，实现设备上电即可远程访问",
            ],
            [
              <strong key="4">多渠道反馈</strong>,
              "硬件按钮 + 移动端表单",
              "降低反馈门槛，硬件端「一按即达」，移动端「随时可提交」",
            ],
            [
              <strong key="5">三端通信</strong>,
              "后端 API 串联前端与硬件端",
              "优化用户体验的过程，减少交互的割裂感",
            ],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="reflection" num="六、" title="反思与收获">
        <SubHeading>做得好的地方</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>用户调研驱动设计：</strong>从访谈中提炼出「温度不可见」的核心洞察，确保产品方向与真实需求对齐，而非基于团队假设
            </span>,
            <span key="2">
              <strong>按钮功能的重新定义：</strong>当发现「控制温度」不可行时，没有放弃按钮设计，而是将其重新定义为「感受记录」——体现了设计思维中「约束即机会」的理念
            </span>,
            <span key="3">
              <strong>评估方法与场景匹配：</strong>选择 Think-Aloud + Day Reconstruction 的组合，精准匹配了图书馆长时段使用的场景特征，获得了更全面的用户反馈
            </span>,
            <span key="4">
              <strong>跨领域技术协调：</strong>作为 PM 协调硬件、前端、后端三个技术域的开发，确保各模块接口对齐、按时联调
            </span>,
          ]}
        />

        <SubHeading>可以改进的地方</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>硬件外壳的原型策略：</strong>过早投入 3D 打印，未先用低保真材料（纸盒 / 泡沫板）验证尺寸和装配，导致大量返工。教训是：
              <strong>物理原型同样需要从低保真开始</strong>
            </span>,
            <span key="2">
              <strong>展示前的风险管理：</strong>最终展示前一小时仍在调试硬件适配，反映了在「功能完善」和「外观精致」之间的优先级判断不够果断。在有限时间内，
              <strong>核心交互的稳定性永远优先于形式上的完整</strong>
            </span>,
            <span key="3">
              <strong>Prototype 3 评估不够充分：</strong>由于时间限制，Prototype 3 仅做了团队内部走查，未再组织正式用户测试。理想情况下应至少做一轮快速验证，但是在最终展览上也算是完成了最后一轮评估
            </span>,
          ]}
        />

        <SubHeading>对我的成长</SubHeading>
        <Callout variant="insight">
          这个项目让我深刻体会到<strong>产品经理在跨领域项目中的独特价值</strong>——不是成为每个技术域的专家，而是能够理解各域的语言和约束，在硬件、软件、用户需求之间找到最优的平衡点。从传感器的物理部署，到 Web 界面的信息架构，到云端的数据链路，每一个决策都需要同时考虑技术可行性、用户体验和项目时间成本。这种<strong>「全局视角下的权衡能力」</strong>是我在这个项目中最大的收获。
        </Callout>
      </CaseStudySection>
    </>
  )
}

const entry: CaseStudyEntry = { meta, Content }
export default entry
