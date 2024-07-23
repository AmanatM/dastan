import { Section } from "@/components/common/layout"

import { useTranslations } from "next-intl"

import { ButtonLink } from "@/components/ui/button-link"
import { ReaderIcon } from "@radix-ui/react-icons"

import { GlobeComponent } from "@/components/GlobeComponent"

export default function EconomicPlanSection() {
  const t = useTranslations("EconomicProgram")

  return (
    <Section container="default" id={"economicProgram"} className="!py-0 !pb-14">
      <div className="flex min-h-96 w-full max-w-full flex-col rounded-lg border-border p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
        <div className="flex flex-col justify-between gap-8 p-5 pt-6 md:flex-1 md:p-10">
          <div className="flex flex-col items-start gap-y-2 md:gap-y-5">
            <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
              {t("title")}
            </h5>
            <p className="font-normal text-secondary-foreground md:text-lg">{t("description")}</p>
          </div>

          <ButtonLink href={"/#contact"} size={"lg"} variant={"default"} className="gap-x-2 self-start text-lg">
            {t("button")} <ReaderIcon />
          </ButtonLink>
        </div>
        <figure className="-order-1 p-2 md:order-1 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
          <GlobeComponent />
        </figure>
      </div>
    </Section>
  )
}
