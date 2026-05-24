import Link from "next/link"
import { ArrowRight, Github, Heart, Linkedin, Mail, MessageCircle, Phone } from "lucide-react"
import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"

import { Button } from "@/components/ui/button"
import { ProjectsGrid } from "@/components/projects-grid"
import { SkillsGrid } from "@/components/skills-grid"
import { Timeline } from "@/components/timeline"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

type Skill = { name: string; level: number }
type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
}

function ContactRow({
  icon: Icon,
  label,
  value,
  note,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  note?: string
  href?: string
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-purple-400" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm text-zinc-500">{label}</div>
        <div className="font-medium break-all leading-snug mt-0.5">{value}</div>
        {note && <div className="text-xs text-zinc-500 mt-1">{note}</div>}
      </div>
    </div>
  )
  if (href) {
    const external = href.startsWith("http")
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block rounded-lg -mx-2 px-2 py-1 hover:bg-zinc-800/40 transition-colors"
      >
        {inner}
      </a>
    )
  }
  return inner
}

export default async function Portfolio({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <PortfolioContent />
}

function PortfolioContent() {
  const t = useTranslations()
  const skills = t.raw("skills.items") as Skill[]
  const projects = t.raw("projects.items") as Project[]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">{t("hero.eyebrow")}</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block mb-3 md:mb-4">{t("hero.greeting")}</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {t("hero.name")}
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">{t("hero.tagline")}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    {t("hero.viewProjects")}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
                >
                  {t("hero.contactMe")}
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/AllenLiu8888" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/allen-yikailiu/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:18547172459@163.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("about.title")} subtitle={t("about.subtitle")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Allen Liu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">{t("about.status")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">{t("about.bio1")}</p>
                <p className="text-lg text-zinc-300 mt-4">{t("about.bio2")}</p>
                <p className="text-lg text-zinc-300 mt-4">{t("about.bio3")}</p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t("about.labels.name")}</div>
                    <div className="font-medium">{t("about.values.name")}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t("about.labels.email")}</div>
                    <div className="font-medium">{t("about.values.email")}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t("about.labels.location")}</div>
                    <div className="font-medium">{t("about.values.location")}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t("about.labels.availability")}</div>
                    <div className="font-medium text-green-500">{t("about.values.availability")}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download="刘一开-Yikai-Liu-Resume.pdf">
                      {t("about.downloadResume")}
                    </a>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />

          <SkillsGrid
            skills={skills}
            defaultVisible={12}
            showMoreLabel={t("skills.showMore")}
            showLessLabel={t("skills.showLess")}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("projects.title")} subtitle={t("projects.subtitle")} />

          <ProjectsGrid
            projects={projects}
            defaultVisible={6}
            detailsLabel={t("projects.details")}
            codeLabel={t("projects.code")}
            showMoreLabel={t("projects.showMore")}
            showLessLabel={t("projects.showLess")}
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("experience.title")} subtitle={t("experience.subtitle")} />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mt-16">
            {/* Direct Contact card */}
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">{t("contact.directTitle")}</h3>
              <div className="space-y-5">
                <ContactRow
                  icon={Mail}
                  label={t("contact.labels.email")}
                  value={t("contact.values.email")}
                  href={`mailto:${t("contact.values.email")}`}
                />
                <ContactRow
                  icon={MessageCircle}
                  label={t("contact.labels.wechat")}
                  value={t("contact.values.wechat")}
                  note={t("contact.values.wechatNote")}
                />
                <ContactRow
                  icon={Phone}
                  label={t("contact.labels.phoneCN")}
                  value={t("contact.values.phoneCN")}
                  href={`tel:${t("contact.values.phoneCN").replace(/\s/g, "")}`}
                />
                <ContactRow
                  icon={Phone}
                  label={t("contact.labels.phoneAU")}
                  value={t("contact.values.phoneAU")}
                />
              </div>
            </GlassmorphicCard>

            {/* Online Presence card */}
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">{t("contact.onlineTitle")}</h3>
              <div className="space-y-5">
                <ContactRow
                  icon={Linkedin}
                  label={t("contact.labels.linkedin")}
                  value={t("contact.values.linkedin")}
                  href={`https://${t("contact.values.linkedin")}`}
                />
                <ContactRow
                  icon={Github}
                  label={t("contact.labels.github")}
                  value={t("contact.values.github")}
                  href={`https://${t("contact.values.github")}`}
                />
                <ContactRow
                  icon={Heart}
                  label={t("contact.labels.xiaohongshu")}
                  value={t("contact.values.xiaohongshu")}
                />
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">{t("contact.statusTitle")}</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>{t("contact.statusText")}</span>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="text-white">{t("nav.brandFirst")}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{t("nav.brandSecond")}</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              {t("footer.copyright", { year: new Date().getFullYear() })} {t("footer.tagline")}
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/AllenLiu8888" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/allen-yikailiu/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:18547172459@163.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
