import { Section } from "@/components/common/layout"
import Image from "next/image"

import { useTranslations } from "next-intl"

import economy_image from "@public/images/hero/hero-un.jpeg"
import { ButtonLink } from "@/components/ui/button-link"
import { Pencil2Icon } from "@radix-ui/react-icons"
import { GlobeDemo } from "../economicProgram/_components/GlobeDemo"

export default function KyrgyzFundSection() {
  const t = useTranslations("KyrgyzFund")

  return (
    <Section container="default" id={"kyrgyzFund"}>
      <div className="dark:border-dark-border dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-full flex-col rounded-lg border border-border bg-card p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16">
        <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
          <Image
            src={economy_image}
            className="dark:border-dark-border block aspect-video h-[200px] w-full rounded-lg border border-border object-cover md:h-full"
            height={374}
            width={560}
            alt={"Kyrgyz Economic Fund"}
          />
        </figure>
        <div className="flex flex-col justify-between gap-8 p-5 pt-6 md:flex-1 md:p-10">
          <div className="flex flex-col items-start gap-y-2 md:gap-y-5">
            <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
              {t("title")}
            </h5>
            <p className="font-normal text-secondary-foreground md:text-lg">{t("description")}</p>
          </div>

          <ButtonLink href={"/#contact"} size={"lg"} variant={"default"} className="gap-x-2 self-start text-lg">
            {t("button")} <Pencil2Icon />
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
