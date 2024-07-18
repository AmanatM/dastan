import { useTranslations } from "next-intl"

import { FADE_UP_ANIMATION_VARIANTS } from "@/config/motion-animations"

import { MotionDiv, MotionH1 } from "@/components/motion"
import ImageSliderBackground from "./_components/imageSliderBackground"

import heroImage from "@public/images/hero/hero.jpg"
import heroImage2 from "@public/images/un.jpeg"
import { cn } from "@/lib/utils"

const sliderImages = [
  {
    src: heroImage,
    alt: "Hero image",
  },
  {
    src: heroImage2,
    alt: "Hero image",
  },
]
export default function Hero() {
  const t = useTranslations()

  return (
    <section className="relative h-screen">
      <div className="flex size-full flex-col md:flex-row">
        <ImageSliderBackground images={sliderImages} />

        <div
          className={cn(
            "absolute bottom-0 right-0 flex w-full items-center justify-start bg-background/60 p-1 py-5 text-center md:h-full md:w-2/6 md:p-6",
            "backdrop-blur-2xl backdrop-brightness-125 backdrop-saturate-100 zoom-in-150 supports-[backdrop-filter]:bg-background/40",
          )}
        >
          <MotionDiv
            className="flex w-full flex-col items-start justify-center gap-y-4"
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
            <MotionH1
              className="flex self-center text-nowrap text-center text-[11vw] font-bold uppercase md:hidden"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              {t("Global.name")}
            </MotionH1>

            {["Entrepreneur", "Investor", "Speaker", "Diplomat", "Philanthropist"].map((item, index) => (
              <div key={index} className="flex items-center gap-x-2 px-4 text-left">
                <div className="!h-[8px] !w-[8px] shrink-0 bg-accent"></div>
                <div>{t(`Hero.description.${index}` as `Hero.description.${0 | 1 | 2 | 3}`)}</div>
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>

      <MotionDiv
        className="absolute -bottom-2 left-0 right-0 hidden max-w-full text-nowrap text-center font-bold uppercase md:block"
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
