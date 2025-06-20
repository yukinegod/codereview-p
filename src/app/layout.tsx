import type { Metadata } from 'next'
import { Wix_Madefor_Display } from 'next/font/google'
import './globals.css'
import { AuthModalRenderer } from '@/widgets/AuthPopupRenderer/ui/AuthModalRenderer'

const wixMadeforDisplay = Wix_Madefor_Display({
  variable: '--font-wix-madefor',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Codereview — Поиск работы и стажировок в IT',
  description:
    'Платформа для быстрого поиска IT-вакансий, подготовки к собеседованиям и автооткликов.',
  keywords: [
    'вакансии',
    'стажировки',
    'собеседование',
    'поиск работы',
    'IT',
    'Codereview',
  ],
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
  openGraph: {
    title: 'Codereview — IT-вакансии и стажировки',
    description:
      'Поиск работы, подготовка к собеседованиям, автоотклики — всё на одной платформе.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary',
    title: 'Codereview — IT-вакансии и стажировки',
    description:
      'Платформа для быстрого поиска работы и подготовки к собеседованиям.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru' className={`${wixMadeforDisplay.variable} antialiased`}>
      <body>
        <main>{children}</main>
        <AuthModalRenderer />
      </body>
    </html>
  )
}
