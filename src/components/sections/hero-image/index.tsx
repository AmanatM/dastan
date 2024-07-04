import ImageCarousel from "@/components/ImageCarousel"
import heroImage from "./hero.jpg"
import Image from "next/image"
import { MessageKeys, useFormatter, useTranslations } from "next-intl"

export function HeroImage() {
  const t = useTranslations()

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="flex size-full flex-col md:flex-row">
        <div className="relative h-2/3 md:h-auto md:w-4/6">
          <Image
            src={heroImage}
            alt={t("Global.name")}
            placeholder="blur"
            fill
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="flex h-1/3 items-center justify-start p-4 md:h-auto md:w-2/6 md:p-20">
          <div className="flex flex-col items-start justify-center gap-x-2 gap-y-4">
            <h1 className="flex text-3xl font-bold md:hidden">{t("Global.name")}</h1>
            {["Entrepreneur", "Investor", "Speaker", "Philanthropist"].map((item, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <div className="h-[8px] w-[8px] bg-accent"></div>
                <div>{t(`Hero.description.${index}` as `Hero.description.${0 | 1 | 2 | 3}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="absolute bottom-0 left-0 right-0 hidden max-w-full text-nowrap text-center text-[11vw] font-bold uppercase md:block">
        {t("Global.name")}
      </h1>
    </section>
  )
}
