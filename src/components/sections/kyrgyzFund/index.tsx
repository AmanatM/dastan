import { Heading } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import ImageCarousel from "@/components/ImageCarousel"
import { Button } from "@/components/ui/button"

import { useTranslations } from "next-intl"
import ReadMore from "./_components/ReadMore"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

import slider1 from "@public/images/biography/childhood.jpg"
import slider2 from "@public/images/biography/certificate.jpg"

export default function KyrgyzFund() {
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
        <Heading align={"left"}>
          <h4>Kyrgyz fund program</h4>
        </Heading>
        <div className="flex flex-col gap-y-3">
          A program for young entrepreneurs who want to start their own business. We provide you with the tools and
          resources you need to succeed.
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"} className="self-start text-lg">
              Read More
            </Button>
          </DialogTrigger>
          <ReadMore />
        </Dialog>
      </div>
    </Section>
  )
}
