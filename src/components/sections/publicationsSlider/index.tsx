import { Slider } from "./slider"
import { Section } from "@/components/common/layout"
import { Heading } from "@/components/common/heading"
import { publications_data } from "./data"
import { useTranslations } from "next-intl"

export default function PublicationsSlider() {
  const t = useTranslations("News")

  const publications = publications_data.map(publications => {
    return {
      ...publications,
      title: t(`publications.${publications.key}.title`),
      description: t(`publications.${publications.key}.description`),
      date: t(`publications.${publications.key}.date`),
    }
  })

  return (
    <div className="relative overflow-clip" id="news">
      <Section>
        <Slider publications={publications}>
          <Heading className="self-stretch">
            <h4 className="uppercase">{t("title")}</h4>
          </Heading>
        </Slider>
      </Section>
    </div>
  )
}
