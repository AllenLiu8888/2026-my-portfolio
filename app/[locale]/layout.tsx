import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'
import '../globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    metadataBase: new URL('https://liuyikai.com'),
    title: {
      default: t('title'),
      template: '%s | Allen Liu',
    },
    description: t('description'),
    keywords: [
      'AI Product Manager',
      'Yikai Liu',
      'Allen Liu',
      '刘一开',
      'HCI',
      'University of Queensland',
      'Coze',
      'Dify',
      'Multi-Agent',
      'LLMOps',
    ],
    authors: [{ name: 'Allen Liu', url: 'https://liuyikai.com' }],
    creator: 'Allen Liu',
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://liuyikai.com',
      siteName: 'Allen Liu',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: locale === 'en' ? 'https://liuyikai.com' : `https://liuyikai.com/${locale}`,
      languages: {
        en: 'https://liuyikai.com',
        zh: 'https://liuyikai.com/zh',
      },
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
