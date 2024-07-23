"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import { mainNav } from "@/config/navigation-links"
import { LogoIcon } from "@/icons/logo-icons"
import LocaleSelector from "./locale-selector"
import { Separator } from "../ui/separator"
import { Cross1Icon, ExternalLinkIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Link } from "@/navigation"
import SocialIcons from "./social-icons"

export function MobileMenu({ navigationItems, navMeta }: any) {
  const [navOpened, setNavOpened] = useState(false)

  const toggleNav = () => {
    setNavOpened(prev => !prev)
  }

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
      <SheetContent
        removeCloseIcon
        className="flex w-full !max-w-full flex-col justify-start md:w-[500px]"
        id="main-menu"
      >
        <SheetHeader className="hidden">
          <SheetTitle>{navMeta.title}</SheetTitle>
          <SheetDescription>{navMeta.description}</SheetDescription>
        </SheetHeader>
        <div className="container mx-auto flex w-full items-center justify-between px-4">
          <Link href={"/"} className="mr-5 flex w-[130px] items-center md:w-auto">
            <LogoIcon />
          </Link>

          <div className="flex items-center gap-x-8">
            <LocaleSelector setNavOpened={setNavOpened} />
            <SheetClose asChild>
              <Button size={"icon"} className="hover:bg-transparent" variant="ghost">
                <Cross1Icon className={"h-[20px] w-[20px]"} />
              </Button>
            </SheetClose>
          </div>
        </div>
        <Separator />
        <div className="flex flex-row flex-wrap space-y-4 pt-4">
          {mainNav.map((link, index) => (
            <Link
              key={index}
              href={"/" + link.href}
              onClick={toggleNav}
              prefetch={false}
              className={"w-full justify-start px-2"}
            >
              {navigationItems[index]}
            </Link>
          ))}
          <Link
            href={"https://cv.dastanabikov.com/"}
            target="_blank"
            prefetch={false}
            className={"flex w-full items-center justify-start px-2 text-muted-foreground"}
          >
            Business Card
            <ExternalLinkIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <SheetFooter className="mt-6 !justify-start px-2">
          <SocialIcons />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
