import { Link } from "@/navigation"

import { LogoIcon } from "@/icons/logo-icons"
import { mainNav } from "@/config/navigation-links"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations()
  const navigationItems = mainNav.map(item => t(`Navigation.nav_items.${item.titleKey}`))

  return (
    <footer className="border-t border-border py-16 text-muted-foreground">
      <div className="container mx-auto grid grid-flow-row place-items-start items-center gap-y-7 px-6 lg:grid-flow-col">
        <Link aria-label="Homepage" href="/" className="place-self-center">
          <LogoIcon />
        </Link>
        <nav className="flex flex-col gap-x-2 gap-y-3 self-center sm:flex-row sm:items-center sm:place-self-center md:gap-x-4 lg:gap-x-8">
          {mainNav.map((link, index) => (
            <Link
              key={link.titleKey}
              className="text-text-tertiary hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary px-2 font-light tracking-tight"
              href={link.href ?? "#"}
            >
              {navigationItems[index]}
            </Link>
          ))}
        </nav>
      </div>
      <p className="text-text-tertiary dark:text-dark-text-tertiary mt-20 text-pretty text-center text-sm">
        {t("Global.name")} © 2024 . {t("Footer.rightsReserved")}
      </p>
    </footer>
  )
}
