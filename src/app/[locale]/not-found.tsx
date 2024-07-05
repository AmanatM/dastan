import { Section } from "@/components/common/layout"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@/navigation"

import { useTranslations } from "next-intl"

export default function NotFoundPage() {
  const t = useTranslations("notFound")

  return (
    <Section className="flex h-[calc(100vh-var(--header-height))] flex-col justify-center">
      <Link href={"/"} className={cn(buttonVariants())}>
        {t("goBack")}
      </Link>
    </Section>
  )
}
