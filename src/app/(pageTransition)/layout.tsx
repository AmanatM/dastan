import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import PageTransitionEffect from "@/components/Transition"

export default function PageTransitionLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <body className={`min-h-svh max-w-[100vw] font-sans`}>
        <PageTransitionEffect>{children}</PageTransitionEffect>
      </body>
    </html>
  )
}
