"use client"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import Link from "next/link"
import { mainNav } from "@/config/navigation-links"
import { LogoIcon } from "@/icons/logo-icons"
import LocaleSelector from "./locale-selector"
import { Separator } from "../ui/separator"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useTranslations } from "next-intl"

export function MobileMenu() {
  const [navOpened, setNavOpened] = useState(false)

  const toggleNav = () => {
    setNavOpened(prev => !prev)
  }

  const t = useTranslations("Navigation")

  return (
    <Sheet open={navOpened} onOpenChange={toggleNav}>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          className="hover:bg-transparent"
          variant="ghost"
          aria-controls="main-menu"
          aria-expanded={navOpened}
          aria-label="Toggle main menu"
        >
          <HamburgerMenuIcon className={"h-[20px] w-[20px]"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full !max-w-full flex-col justify-start md:w-[500px]" id="main-menu">
        <div className="container mx-auto flex w-full items-center justify-between px-6">
          <Link href={"/"} className="mr-5 flex w-[130px] items-center md:w-auto">
            <LogoIcon />
          </Link>

          <div className="flex items-center gap-x-8">
            <LocaleSelector />
          </div>
          <SheetClose asChild>
            <Button size={"icon"} className="hover:bg-transparent" variant="ghost">
              <Cross1Icon />
            </Button>
          </SheetClose>
        </div>
        <Separator />
        <div className="flex flex-row flex-wrap space-y-4 pt-4">
          {mainNav.map((link, index) => (
            <Link key={index} href={link.href} onClick={toggleNav} className={"w-full justify-start px-2"}>
              {t(link.titleKey as "home" | "bio" | "about" | "speaking" | "news" | "contact")}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
