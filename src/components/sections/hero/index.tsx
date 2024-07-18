import Image from "next/image"
import { useTranslations } from "next-intl"

import { FADE_UP_ANIMATION_VARIANTS } from "@/config/motion-animations"

import heroImage from "@public/images/hero/hero.jpg"
import { MotionDiv, MotionH1 } from "@/components/motion"

export default function Hero() {
  const t = useTranslations()

  return (
    <section className="relative h-screen ">
      <div className="flex size-full flex-col md:flex-row">
        <div className="relative h-full md:w-full">
          <Image
            src={heroImage}
            alt={t("Global.name")}
            priority
            placeholder="blur"
            fill
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="flex items-center text-center justify-start p-4 py-8 bottom-0 md:h-full w-full md:w-2/6 md:p-20 absolute right-0 bg-background/95 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60">
          <MotionDiv
            className="flex flex-col items-start justify-center gap-y-4 w-full"
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <MotionH1 className="flex font-bold md:hidden text-[10vw] uppercase text-nowrap text-center self-center" variants={FADE_UP_ANIMATION_VARIANTS}>
              {t("Global.name")}
            </MotionH1>

            {["Entrepreneur", "Investor", "Speaker", "Diplomat", "Philanthropist"].map((item, index) => (
              <div key={index} className="flex items-center text-left gap-x-2 px-4">
                <div className="!h-[8px] !w-[8px] shrink-0 bg-accent"></div>
                <div>{t(`Hero.description.${index}` as `Hero.description.${0 | 1 | 2 | 3}`)}</div>
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>

      <MotionDiv
        className="absolute bottom-0 left-0 right-0 hidden max-w-full text-nowrap text-center font-bold uppercase md:block"
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <MotionH1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-[11vw]">
          {t("Global.name")}
        </MotionH1>
      </MotionDiv>
    </section>
  )
}
