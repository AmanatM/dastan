import { Section } from "@/components/common/layout"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { ReadMoreFund } from "./_components/readMore_Fund"

import { Dialog, DialogTrigger } from "@/components/ui/dialog"

import un_image from "@public/images/hero/un.jpg"
import professor_image from "@public/images/economic.jpg"
import economy_image from "@public/images/economic.jpg"
import { ExternalLinkIcon, Link1Icon } from "@radix-ui/react-icons"

const featuresCardsList = [
  {
    image: {
      src: professor_image,
      alt: "Kyrgyz fund program",
    },
    title: "Kyrgyz Fund Program",
    content:
      "A program for young entrepreneurs who want to start their own business. We provide you with the tools and resources you need to succeed.",
    link: "kyrgyzFund",
  },
  {
    image: {
      src: economy_image,
      alt: "Economic Development Program",
    },
    title: "Economic Development Program",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: "economicProgram",
  },
]

export default function FeaturesList() {
  const t = useTranslations()

  return (
    <Section container="default">
      <div className="flex flex-col gap-6">
        {featuresCardsList.map((card, index) => (
          <div
            key={card.title}
            id={card.link}
            className="dark:border-dark-border dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-full flex-col rounded-lg border border-border bg-card p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <Image
                src={card.image.src}
                className="dark:border-dark-border block aspect-video h-[200px] w-full rounded-lg border border-border object-cover md:h-full"
                height={374}
                width={560}
                alt={card.image.alt}
              />
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-y-5 md:gap-y-10">
                <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                  {card.title}
                </h5>
                <p className="text-text-secondary dark:text-dark-text-secondary font-normal md:text-lg">
                  {card.content}
                </p>
              </div>
              {index === 0 ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size={"lg"} className="self-start text-lg">
                      {t("Global.readMore")}
                    </Button>
                  </DialogTrigger>
                  <ReadMoreFund />
                </Dialog>
              ) : (
                <Button size={"lg"} className="flex gap-x-2 self-start text-lg">
                  {t("Global.readMore")} <ExternalLinkIcon />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
