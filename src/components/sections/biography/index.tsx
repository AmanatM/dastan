import { Heading } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import ImageCarousel from "@/components/ImageCarousel"

import { useTranslations } from "next-intl"

import slider1 from "@public/images/biography/childhood.jpg"
import slider2 from "@public/images/biography/childhood-2.jpeg"

import { Button } from "@/components/ui/button"
import ReadMore from "./_components/ReadMore"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

export default function Biography() {
  const t = useTranslations()

  const shortFacts = [
    t("Biography.shortFacts.0"),
    t("Biography.shortFacts.1"),
    t("Biography.shortFacts.2"),
    t("Biography.shortFacts.3"),
    t("Biography.shortFacts.4"),
  ]

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
                <div>{fact}</div>
              </div>
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"lg"} className="self-start text-lg">
                {t("Global.readMore")}
              </Button>
            </DialogTrigger>
            <ReadMore />
          </Dialog>
        </div>
      </div>
    </Section>
  )
}
