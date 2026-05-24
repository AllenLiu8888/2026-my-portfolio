"use client"

import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"
import { Globe } from "lucide-react"

import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

export function LocaleSwitcher() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const nextLocale = locale === "en" ? "zh" : "en"

  const handleSwitch = () => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      disabled={isPending}
      className="text-zinc-400 hover:text-white hover:bg-zinc-700/50 px-2 gap-1"
      aria-label={`Switch to ${routing.locales.find((l) => l === nextLocale)}`}
    >
      <Globe className="h-3.5 w-3.5" />
      <span className="text-xs font-medium">{t("switchLocale")}</span>
    </Button>
  )
}
