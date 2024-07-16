import { Heading } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import ImageCarousel from "@/components/ImageCarousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import slider1 from "./images/childhood.jpg"
import slider2 from "./images/certificate.jpg"
import { useTranslations } from "next-intl"
import {
  Credenza,
  CredenzaTrigger,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaDescription,
  CredenzaBody,
  CredenzaFooter,
  CredenzaClose,
} from "@/components/ui/credenza"
import { ScrollArea } from "@/components/ui/scroll-area"

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
        <Credenza>
          <CredenzaTrigger asChild>
            <Button size={"lg"} className="self-start text-lg">
              {t("Global.readMore")}
            </Button>
          </CredenzaTrigger>
          <ReadMoreContent />
        </Credenza>
      </div>
    </Section>
  )
}

function ReadMoreContent() {
  const t = useTranslations()
  return (
    <CredenzaContent className="max-w-2xl">
      <CredenzaHeader>
        <CredenzaTitle className="uppercase">{t("Biography.subtitle")}</CredenzaTitle>
        <CredenzaDescription className="hidden">{t("Biography.subtitle")}</CredenzaDescription>
      </CredenzaHeader>
      <CredenzaBody>
        <ScrollArea className="flex h-[400px] max-h-[80vh] w-full">
          <div className="space-y-3">
            <p>{t("Biography.readMore.paragraph1")}</p>
            <p>{t("Biography.readMore.paragraph2")}</p>
            <p>{t("Biography.readMore.paragraph3")}</p>
            <p>{t("Biography.readMore.paragraph4")}</p>
          </div>
        </ScrollArea>
      </CredenzaBody>
      <CredenzaFooter>
        <CredenzaClose asChild>
          <Button>{t("Global.close")}</Button>
        </CredenzaClose>
      </CredenzaFooter>
    </CredenzaContent>
  )
}
