"use client"
import { Link } from "@/navigation"
import { MobileMenu } from "./mobile-menu"
import { LogoIcon } from "@/icons/logo-icons"
import SocialIcons from "./social-icons"
import LocaleSelector from "./locale-selector"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", latest => {
    setScrolled(latest > 300)
  })

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 flex w-full flex-col transition-all duration-300", // Added transition and duration classes
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-[linear-gradient(180deg,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_100%)]",
      )}
    >
      <div className="flex h-[--header-height]">
        <div className="container mx-auto flex w-full items-center justify-between px-6">
          <Link href={"/"} className="mr-5 flex w-[130px] items-center md:w-auto">
            <LogoIcon />
          </Link>

          <div className="flex items-center gap-x-8">
            <SocialIcons className="hidden md:flex" />
            <LocaleSelector />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
