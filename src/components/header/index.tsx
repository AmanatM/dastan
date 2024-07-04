import Link from "next/link";

import { MobileMenu } from "./mobile-menu";
import { LogoIcon } from "@/icons/logo-icons";
import SocialIcons from "./social-icons";
import LocaleSelector from "./locale-selector";

export async function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full flex-col bg-[linear-gradient(180deg,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_100%)]">
      <div className="flex h-[--header-height]">
        <div className="container mx-auto flex justify-between items-center w-full px-6">
          <Link href={"/"} className="mr-5 flex items-center w-[130px] md:w-auto">
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
  );
}
