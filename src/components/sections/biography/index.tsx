import { Heading } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import ImageCarousel from "@/components/ImageCarousel"
import { Button } from "@/components/ui/button"

import slider1 from "./images/childhood.jpg"
import slider2 from "./images/certificate.jpg"
import { useTranslations } from "next-intl"
import ReadMore from "./_components/ReadMore"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

export default function Biography() {
  const t = useTranslations()

  const shortFacts = [
    t("Biography.short_facts.0"),
    t("Biography.short_facts.1"),
    t("Biography.short_facts.2"),
    t("Biography.short_facts.3"),
    t("Biography.short_facts.4"),
  ]

  return (
    <Section container={"default"} className="grid w-full items-center gap-x-20 md:grid-cols-2" id="biography">
      <ImageCarousel
        className="h-[500px]"
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
    </Section>
  )
}
