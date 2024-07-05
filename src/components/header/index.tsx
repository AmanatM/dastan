"use client"
import { Link } from "@/navigation"
import { MobileMenu } from "./mobile-menu"
import { LogoIcon } from "@/icons/logo-icons"
import SocialIcons from "./social-icons"
import LocaleSelector from "./locale-selector"
import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export function Header() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  useEffect(() => {
    // Update animation controls based on whether the element is in view
    controls.start(isInView ? "initial" : "final")
  }, [])

  return (
    <>
      <motion.header
        className={cn(
          "fixed left-0 top-0 z-50 flex w-full flex-col bg-[linear-gradient(180deg,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_100%)] transition-all",
          // isInView && "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        )}
        initial="initial"
        animate={controls}
        variants={{
          initial: {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            transition: { duration: 0.3 },
          },
          final: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)",
            transition: { duration: 0.3 },
          },
        }}
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
      </motion.header>
      {/* Dummy element to detect scroll position */}
      <div ref={ref} className="transparent absolute bottom-[-300px]" />
    </>
  )
}
