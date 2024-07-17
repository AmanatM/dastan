import { MessageKeys, useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import { unstable_setRequestLocale } from "next-intl/server"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { locales } from "@/config"
import { ReactNode } from "react"
import { mainNav } from "@/config/navigation-links"

type Props = {
  children: ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations("Navigation")

  const navigationItems = mainNav.map(item => t(`nav_items.${item.titleKey}`))
  const navMeta = {
    title: t("meta.title"),
    description: t("meta.description"),
  }

  return (
    <>
      <Header navigationItems={navigationItems} navMeta={navMeta} />
      <main className="min-h-[calc(100svh-var(--header-height))]">
        <div vaul-drawer-wrapper="" className="bg-background">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
