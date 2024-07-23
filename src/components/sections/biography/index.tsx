import { Heading } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import ImageCarousel from "@/components/ImageCarousel"

import { useTranslations } from "next-intl"

import slider1 from "@public/images/biography/childhood.jpg"
import slider2 from "@public/images/biography/childhood-2.jpeg"

import slider3 from "@public/images/biography/certificate.jpg"
import slider4 from "@public/images/biography/professor.jpeg"

type ShortFactKeys = `Biography.shortFacts.${number}.${"time" | "description"}`
export default function Biography() {
  const t = useTranslations()

  const shortFacts = [1, 2, 3, 4, 5] as const
  const secondPart = [6, 7, 8, 9, 10] as const

  return (
    <Section container={"default"} id="biography" className="gap-y-14">
      <div className="relative grid w-full flex-col items-center gap-10 gap-x-20 py-0 md:grid-cols-2">
        <ImageCarousel
          className="h-[300px] md:h-[500px]"
          images={[
            {
              img: slider1,
              alt: "",
            },
            {
              img: slider2,
              alt: "",
            },
          ]}
        />

        <div className="flex flex-col gap-y-7">
          <Heading subtitle={t("Biography.subtitle")} align={"left"}>
            <h4>
              <span className="uppercase text-accent">{t("Global.name")}</span>
              <br /> {t("Biography.title")}
            </h4>
          </Heading>
          <div className="flex flex-col gap-y-3">
            {shortFacts.map((fact, index) => (
              <div key={index} className="flex items-start gap-x-2">
                <div className="mt-2 !h-[8px] !w-[8px] shrink-0 bg-accent" />
                <div>
                  <span className="font-bold">{t(`Biography.shortFacts.${fact}.time`)} </span>
                  {t(`Biography.shortFacts.${fact}.description`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative grid w-full flex-col items-center gap-10 gap-x-20 md:grid-cols-2">
        <div className="order-1 flex flex-col gap-y-7 md:order-first">
          <div className="flex flex-col gap-y-3">
            {secondPart.map((fact, index) => (
              <div key={index} className="flex items-start gap-x-2">
                <div className="mt-2 !h-[8px] !w-[8px] shrink-0 bg-accent" />
                <div>
                  <span className="font-bold">{t(`Biography.shortFacts.${fact}.time`)} </span>
                  {t(`Biography.shortFacts.${fact}.description`)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <ImageCarousel
          className="h-[300px] md:h-[500px]"
          images={[
            {
              img: slider3,
              alt: "",
            },
            {
              img: slider4,
              alt: "",
            },
          ]}
        />
      </div>
    </Section>
  )
}
