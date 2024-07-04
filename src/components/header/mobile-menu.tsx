"use client";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/config/navigation-links";
import { LogoIcon } from "@/app/icons/logo-icons";
import LocaleSelector from "./locale-selector";
import { Separator } from "../ui/separator";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

export function MobileMenu() {
  const [navOpened, setNavOpened] = useState(false);

  const toggleNav = () => {
    setNavOpened((prev) => !prev);
  };

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
          <HamburgerMenuIcon className={"w-[20px] h-[20px]"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-start !max-w-full w-full md:w-[500px]" id="main-menu">
        <div className="container mx-auto flex justify-between items-center w-full px-6">
          <Link href={"/"} className="mr-5 flex items-center w-[130px] md:w-auto">
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
        <div className="flex flex-row flex-wrap pt-4 space-y-2">
          {mainNav.map((link, index) => (
            <Link key={index} href={link.href} onClick={toggleNav} className={"w-full justify-start px-2"}>
              {link.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
