import { ReactNode } from "react"
import "./globals.css"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import PageTransitionEffect from "@/components/Transition"
import { cn } from "@/lib/utils"

import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-sans",
})

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
export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html className={`scroll-smooth ${fontSans.variable} font-sans`}>
      <body className={cn("min-h-svh max-w-[100vw]")}>
        <PageTransitionEffect>{children}</PageTransitionEffect>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
