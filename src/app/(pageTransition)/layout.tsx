import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import PageTransitionEffect from "@/components/Transition"

import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "arial", "sans-serif"],
  preload: true,
})

export default function PageTransitionLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className={cn("min-h-svh max-w-[100vw]")}>
        <PageTransitionEffect>{children}</PageTransitionEffect>
        <Toaster richColors={true} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
