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
  const t = await getTranslations({ locale, namespace: "Global" })

  return {
    title: t("name"),
  }
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
      <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
