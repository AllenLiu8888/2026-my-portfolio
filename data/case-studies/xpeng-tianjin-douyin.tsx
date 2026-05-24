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

const SLUG = "xpeng-tianjin-douyin"

export const meta: CaseStudyEntry["meta"] = {
  slug: SLUG,
  title: {
    en: "XPENG · Tianjin Airport Store Douyin Matrix",
    zh: "小鹏汽车 · 天津空港店抖音矩阵",
  },
  tagline: {
    en: "Solo content strategy + execution for XPENG North China Zone 2: +13,000 precision followers in 2 months for the Tianjin Airport showroom, plus brand IPs co-led across 4 provinces.",
    zh: "小鹏汽车华北二区的获客内容策略——独立完成脚本 + 拍摄 + 剪辑，天津空港店账号 2 个月精准涨粉 1.3W+，同期协作「来了就是鹏友」「日落咖啡馆」「周末有艺思」三大品牌 IP 在津 / 鲁 / 冀 / 辽落地。",
  },
  highlight: {
    en: "Marketing × content × ops · single-person playbook delivered at zone scale",
    zh: "亮点：市场 × 内容 × 运营一人闭环 · 单店打法复制到全二区",
  },
  overview: {
    type: { en: "Auto OEM marketing operations", zh: "新能源车主机厂区域市场运营" },
    period: { en: "2021.06 — 2022.12 (18 months)", zh: "2021.06 — 2022.12（18 个月）" },
    team: { en: "Solo for Tianjin Airport account · cross-functional for brand IPs", zh: "独立负责天津空港店账号 · 协同推进品牌 IP" },
    stack: {
      en: "Douyin / Xiaohongshu · FCPX + DaVinci Resolve · Sony / iPhone shoot",
      zh: "抖音 / 小红书 · FCPX + DaVinci Resolve · 索尼 / iPhone 拍摄",
    },
    grade: {
      en: "+13K followers in 2mo · 12 cities covered · Tianjin & Shenyang auto show ownership",
      zh: "2 月 +1.3W 粉 · 12 城覆盖 · 天津 A 级 / 沈阳 B 级车展独立对接",
    },
  },
  roles: {
    en: ["Regional Marketing Lead", "Content Operator", "Videographer / Editor", "Event Lead"],
    zh: ["区域市场主管", "内容运营", "视频拍摄 / 剪辑", "活动负责人"],
  },
  toc: [
    { id: "why", num: "一", label: { en: "Why · The Brief", zh: "Why · 任务背景" } },
    { id: "what", num: "二", label: { en: "What · 3 Pillars", zh: "What · 三大支柱" } },
    { id: "how", num: "三", label: { en: "How · 2-Month Push", zh: "How · 2 月增长执行" } },
    { id: "impact", num: "四", label: { en: "Impact", zh: "成果数据" } },
    { id: "reflection", num: "五", label: { en: "Reflection · Transit to PM", zh: "Reflection · 转型 AI PM" } },
  ],
}

function Content({ locale }: { locale: Locale }) {
  if (locale === "en") {
    return (
      <CaseStudySection title="English summary">
        <ENStub
          slug={SLUG}
          summary="18 months at XPENG Motors as Regional Marketing Lead for North China Zone 2, covering Tianjin / Shandong / Hebei / Liaoning. Owned the Tianjin Airport showroom's Douyin matrix solo (script + shoot + edit) — +13,000 precision followers in 2 months. Co-led brand IPs: 'Pengyou Club' (customer community), 'Sunset Café' (test-drive funnel), 'Weekend Arts' (cross-industry collab). Lead contact for Tianjin Auto Show (A-tier) and Shenyang Auto Show (B-tier)."
          label={{
            badge: "Translation in progress",
            body: "Chinese version below covers the EV market landscape, my 3-pillar growth strategy, the 2-month execution timeline, and the transferable skills that now feed into my AI PM career transition.",
            cta: "Read the full Chinese version",
            back: "Back to projects",
          }}
        />
      </CaseStudySection>
    )
  }

  return (
    <>
      <CaseStudySection id="why" num="一、" title="任务背景（Why）">
        <SubHeading label="行业大盘">2021 新能源车获客难</SubHeading>
        <Paragraph>
          2021-2022 年是新能源车在华北市场跑马圈地的关键期。<strong>试驾转化率是核心 KPI</strong>，但传统 4S 店思路（电话邀约 + 路边广告）对年轻潜客几乎无效。
          总部要求各门店探索社交媒体获客打法，作为华北二区的市场主管，我负责把<strong>「内容获客」</strong>这件事在天津空港店从 0 跑出一套可复用的方法。
        </Paragraph>

        <SubHeading label="挑战">3 个真实约束</SubHeading>
        <BulletList
          items={[
            "店内没有专业内容团队——脚本、拍摄、剪辑都要市场主管自己上",
            "总部品牌话术保守，需要在合规前提下做出年轻人愿意看的内容",
            "天津空港店地理位置偏，自然客流弱，必须靠线上把人「钓」到店里",
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="what" num="二、" title="三大支柱（What）">
        <SubHeading label="支柱 1">账号定位：让算法看懂「我是谁」</SubHeading>
        <Paragraph>
          天津空港店账号定位为<strong>「天津小鹏车主真实生活」</strong>——不是品牌官号、不是销售号，而是「身边那个开小鹏的朋友」。这个定位让算法在「天津 + 新能源车 + 25-40 岁」标签下精准推送，避免无效曝光。
        </Paragraph>

        <SubHeading label="支柱 2">内容矩阵：3 类内容协同</SubHeading>
        <DataTable
          headers={["内容类型", "占比", "目标"]}
          rows={[
            ["真实车主故事", "40%", "建立信任 + 长尾搜索流量"],
            ["天津本地用车场景", "35%", "提高同城精准转化"],
            ["新车 / 改款 / 活动信息", "25%", "服务现有粉丝 + 引导到店"],
          ]}
        />

        <SubHeading label="支柱 3">品牌 IP 三联打：协同二区落地</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>「来了就是鹏友」（车主社群 IP）：</strong>线下车主聚会 + 线上社群运营，把成交客户变成自来水
            </span>,
            <span key="2">
              <strong>「日落咖啡馆」（试驾漏斗 IP）：</strong>「来店试驾就请你喝咖啡」的轻量入口，降低决策门槛
            </span>,
            <span key="3">
              <strong>「周末有艺思」（异业合作 IP）：</strong>跟天津本地咖啡馆 / 书店 / 摄影工作室联动，把品牌植入到年轻人的周末生活里
            </span>,
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="how" num="三、" title="2 月增长执行（How）">
        <SubHeading label="Week 1-2">冷启动：测内容方向</SubHeading>
        <BulletList
          items={[
            "一周内拍 + 剪 5 条不同类型视频（车主访谈 / 用车场景 / 改装介绍 / 试驾路线 / 活动预告）",
            "观察 48 小时数据：哪类内容互动率高、哪类完播率高",
            "结论：「天津本地车主真实故事」类完播率最高，「同城用车攻略」类互动率最高",
          ]}
        />

        <SubHeading label="Week 3-4">收敛 + 加速</SubHeading>
        <BulletList
          items={[
            "把内容方向收敛到「真实车主 + 本地用车」两条主线，删掉低效类型",
            "保持每周 4-5 条更新频率，培养算法对账号的预期",
            "出现第一条「小爆款」（5W+ 播放），分析爆款规律：开头 3 秒 + 本地化场景 + 真人出镜",
          ]}
        />

        <SubHeading label="Week 5-8">复制爆款 + 线下转化</SubHeading>
        <BulletList
          items={[
            "把爆款公式（3 秒钩子 + 本地场景 + 车主真人）做成模板，批量产出",
            "在评论区主动回复 + 引导到店：「评论区留言『试驾』，私信送日落咖啡馆体验券」",
            "上线 8 周后：粉丝从 ~1K 增长到 1.4W+，到店试驾转化率提升 30%",
          ]}
        />

        <Callout variant="decision">
          <strong>关键决策：</strong>第 3 周时总部建议加入更多「新车配置介绍」类官方内容，但我用 Week 1-2 的数据说服总部——
          这类内容的互动率比「真实车主故事」低 4 倍。坚持本地化定位才是这个账号的护城河。
        </Callout>
      </CaseStudySection>

      <CaseStudySection id="impact" num="四、" title="成果数据">
        <DataTable
          headers={["维度", "数据"]}
          rows={[
            ["天津空港店账号涨粉", "+13,000（2 个月精准粉，地域 / 年龄 / 兴趣三重精准）"],
            ["到店试驾转化率提升", "+30%（同期对比，12 个城市平均）"],
            ["品牌 IP 落地", "「来了就是鹏友」「日落咖啡馆」「周末有艺思」3 大 IP 在 4 省落地"],
            ["大型展会", "天津车展（A 级）、沈阳车展（B 级）独立对接 + 现场执行"],
            ["月均活动产出", "4 销售促转 + 4 保客维系 + 1 异业合作"],
            ["内容 SOP 沉淀", "形成可复用的「天津空港爆款方法论」，被二区其他城市复用"],
          ]}
        />
      </CaseStudySection>

      <CaseStudySection id="reflection" num="五、" title="反思与转型 AI PM">
        <SubHeading>这段经历给我的产品思维</SubHeading>
        <BulletList
          items={[
            <span key="1">
              <strong>用户研究是终极武器：</strong>「真实车主故事」打败「官方配置介绍」靠的不是审美，是真实理解了潜客在抖音上想看什么
            </span>,
            <span key="2">
              <strong>数据驱动决策的勇气：</strong>有数据后敢于在总部面前坚持自己的判断，这个肌肉记忆现在做 AI PM 同样有用
            </span>,
            <span key="3">
              <strong>从 0 到可复制 SOP 的能力：</strong>不是做一次爆款，是把「为什么爆」拆出来变成方法论让别人也能用——这是产品经理最核心的能力之一
            </span>,
          ]}
        />

        <SubHeading>为什么从市场转 AI PM</SubHeading>
        <Callout variant="insight">
          18 个月小鹏经历让我看清两件事：
          <br /><br />
          1. 我对「用户为什么会做某个决定」的好奇心远大于「这个季度卖出多少辆车」——这是 PM 思维而非 sales 思维
          <br /><br />
          2. 在数字化原生场景里，<strong>「懂技术的 PM」比「懂市场的 PM」更能影响产品形态</strong>——这是我去 UQ 读交互设计硕士、并最终聚焦 AI PM 的根本原因
        </Callout>

        <SubHeading>这段经历对 AI PM 求职的意义</SubHeading>
        <Paragraph>
          很多 AI PM 候选人没做过「真把东西卖出去」的事。我有 18 个月在真实业务压力下做 0→1 增长的经验，这让我做 AI 产品时<strong>本能地关心「这玩意儿到底有谁会用、为什么会用、用了愿意付钱吗」</strong>，而不是只关注模型能力的炫技。
        </Paragraph>
      </CaseStudySection>
    </>
  )
}

const entry: CaseStudyEntry = { meta, Content }
export default entry
