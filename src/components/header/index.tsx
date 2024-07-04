import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

import { Circle } from "lucide-react";
import { mainNav } from "@/config/main-nav";
import { MobileMenu } from "./mobile-menu";
import { LogoIcon } from "@/app/icons/logo-icons";
import { cn } from "@/lib/utils";
import { ButtonLink } from "../ui/button-link";

export async function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 flex w-full flex-col border-b border-border bg-background">
      <div className="flex h-[--header-height]">
        <div className="container mx-auto grid w-full grid-cols-2 lg:grid-cols-header place-items-center content-center items-center px-6 first:*:justify-self-start">
          <Link href={"/"} className="mr-10 flex items-center">
            <LogoIcon />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {mainNav.map((link, index) => (
              <Link key={index} href={link.href} className="transition-colors hover:text-foreground/60">
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <div className="hidden items-center gap-2 justify-self-end lg:flex">
              <ButtonLink href={""} className={cn("w-full justify-start rounded-full px-3.5")}>
                Get Started
              </ButtonLink>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
