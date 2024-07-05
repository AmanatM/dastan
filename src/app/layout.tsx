import { ReactNode } from "react"
import "./globals.css"
import { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import PageTransitionEffect from "@/components/Transition"
import { unstable_setRequestLocale } from "next-intl/server"
import { locales } from "@/config"

type Props = {
  children: ReactNode
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <body className={`min-h-svh max-w-[100vw] font-sans`}>
        <PageTransitionEffect>{children}</PageTransitionEffect>
      </body>
    </html>
  )
}
