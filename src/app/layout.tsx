import type { Metadata } from 'next'
import { Wix_Madefor_Display } from 'next/font/google'
import './globals.css'

const wixMadeforDisplay = Wix_Madefor_Display({
  variable: '--font-wix-madefor',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Codereview',
  description: 'none',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${wixMadeforDisplay.variable} antialiased w-screen h-screen`}
    >
      <body>{children}</body>
    </html>
  )
}
