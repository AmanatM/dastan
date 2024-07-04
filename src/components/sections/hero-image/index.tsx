import ImageCarousel from "@/components/ImageCarousel";
import heroImage from "./hero.jpg";
import Image from "next/image";
import { MessageKeys, useFormatter, useTranslations } from "next-intl";

export function HeroImage() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row size-full">
        <div className="h-2/3 md:h-auto md:w-4/6 relative">
          <Image
            src={heroImage}
            alt="Dastan Abikov"
            placeholder="blur"
            fill
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="h-1/3 md:h-auto md:w-2/6 flex items-center justify-start md:p-20 p-4">
          <div className="flex flex-col items-start justify-center gap-x-2 gap-y-4">
            <h1 className="flex md:hidden font-bold text-3xl">{t("name")}</h1>
            {["Entrepreneur", "Investor", "Speaker", "Philanthropist"].map((item, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <div className="w-[8px] h-[8px] bg-accent"></div>
                <div>{t(`description.${index}` as `description.${0 | 1 | 2 | 3}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="absolute bottom-0 left-0 right-0 font-bold text-[11vw] text-center text-nowrap max-w-full hidden md:block">
        {t("name")}
      </h1>
    </section>
  );
}
