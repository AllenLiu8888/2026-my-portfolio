import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://liuyikai.com'),
  title: {
    default: 'Allen Liu (Yikai Liu) — AI Product Manager',
    template: '%s | Allen Liu',
  },
  description:
    'AI Product Manager · UQ HCI Master · Ex-XPENG · Building multi-agent workflows with Coze, Dify, and Claude.',
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
    title: 'Allen Liu — AI Product Manager',
    description:
      'AI Product Manager · UQ HCI Master · Ex-XPENG · Building multi-agent workflows.',
    url: 'https://liuyikai.com',
    siteName: 'Allen Liu',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allen Liu — AI Product Manager',
    description:
      'AI Product Manager · UQ HCI Master · Ex-XPENG · Multi-agent workflows.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}
