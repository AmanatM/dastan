"use client"
import { Heading } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import ImageCarousel from "@/components/ImageCarousel"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import slider1 from "./images/childhood.jpg"
import slider2 from "./images/certificate.jpg"
import { useTranslations } from "next-intl"
import { AnimatePresence, motion } from "framer-motion"

function Biography() {
  const t = useTranslations()
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
          <motion.h4>
            <span className="uppercase text-accent">{t("Global.name")}</span>
            <br /> {t("Biography.title")}
          </motion.h4>
        </Heading>
        <div className="flex flex-col gap-y-3">
          {["Entrepreneur", "Investor", "Speaker", "Philanthropist"].map((item, index) => (
            <div key={index} className="flex items-center gap-x-2">
              <div className="h-[8px] w-[8px] bg-accent" />
              <div>{item}</div>
            </div>
          ))}
        </div>
        <Button size={"lg"} className="self-start text-lg">
          Read More
        </Button>
      </div>
    </Section>
  )
}

export default Biography
