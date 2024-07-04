"use client";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { mainNav } from "@/config/main-nav";

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
          <Menu size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between" id="main-menu">
        <div className="flex flex-row flex-wrap pt-4 space-y-2">
          <SheetTitle>Menu</SheetTitle>

          {mainNav.map((link, index) => (
            <Link
              key={index}
              href={link.href} // Convert UrlObject to string
              onClick={toggleNav}
              className={"w-full justify-start px-2"}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
