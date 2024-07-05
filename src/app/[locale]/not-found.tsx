import { Heading } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@/navigation"

import { useLocale, useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

export default function NotFoundPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  const t = useTranslations("notFound")

  return (
    <Section className="flex h-[calc(100vh-var(--header-height))] flex-col justify-center">
      <Heading subtitle="404">
        <h2>{t("title")}</h2>
      </Heading>
      <Link href={"/"} className={cn(buttonVariants())}>
        {t("goBack")}
      </Link>
    </Section>
  )
}
