import { ReactNode } from "react"
import "./globals.css"
import { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import PageTransitionEffect from "@/components/Transition"
import { getMessages, unstable_setRequestLocale } from "next-intl/server"
import { NextIntlClientProvider, useLocale } from "next-intl"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

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

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default async function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <body className={`min-h-svh max-w-[100vw] font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <PageTransitionEffect>
            <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          </PageTransitionEffect>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
