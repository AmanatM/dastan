import { Heading } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@/navigation"
import { useTranslations } from "next-intl"

export default function NotFound() {
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
