import { Heading } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@/navigation"

import { useLocale, useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

export default function NotFoundPage() {
  const t = useTranslations("notFound")
  const locale = useLocale()
  unstable_setRequestLocale(locale)

  return (
    <Section className="flex h-[calc(100vh-var(--header-height))] flex-col justify-center">
      <Link href={"/"} className={cn(buttonVariants())}>
        {t("goBack")}
      </Link>
    </Section>
  )
}
