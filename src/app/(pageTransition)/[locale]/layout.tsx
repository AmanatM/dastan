import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { unstable_setRequestLocale } from "next-intl/server"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { locales } from "@/config"
import { ReactNode } from "react"

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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main className="min-h-[calc(100svh-var(--header-height))]">
        <div vaul-drawer-wrapper="" className="bg-background">
          {children}
        </div>
      </main>
      <Footer />
    </NextIntlClientProvider>
  )
}
