import { ReactNode } from "react"
import "./globals.css"
import { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import PageTransitionEffect from "@/components/Transition"
import { Header } from "@/components/header"
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"

type Props = {
  children: ReactNode
}

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default async function RootLayout({ children }: Props) {
  const messages = await getMessages()
  const locale = await getLocale()
  console.log(locale)
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`} lang={locale}>
      <body className={`min-h-svh max-w-[100vw] font-sans`}>
        <PageTransitionEffect>{children}</PageTransitionEffect>
      </body>
    </html>
  )
}
