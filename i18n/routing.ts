import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['zh', 'en'],
  defaultLocale: 'zh',
  localePrefix: 'as-needed',
  // Always land on Chinese first. Without this, next-intl auto-redirects to /en
  // when the visitor's browser prefers English — but ZH is our primary audience.
  localeDetection: false,
})

export type Locale = (typeof routing.locales)[number]
