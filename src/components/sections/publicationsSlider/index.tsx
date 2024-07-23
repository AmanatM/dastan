import { Slider } from "./slider"
import { Section } from "@/components/common/layout"
import { Heading } from "@/components/common/heading"
import { publications_data } from "./data"
import { useTranslations } from "next-intl"

export default function PublicationsSlider() {
  const t = useTranslations("News")

  return (
    <div className="relative overflow-clip" id="news">
      <Section>
        <Slider publications={publications_data}>
          <Heading className="self-stretch">
            <h4 className="uppercase">{t("title")}</h4>
          </Heading>
        </Slider>
      </Section>
    </div>
  )
}
