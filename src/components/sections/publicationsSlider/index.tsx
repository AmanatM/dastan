import { Slider } from "./slider"
import { Section } from "@/components/common/layout"
import { Heading } from "@/components/common/heading"
import { publications_data } from "./data"

type Props = {
  heading: {
    title: string
    subtitle?: string
    align: "center" | "left" | "right" | "none"
  }
}

export default function PublicationsSlider({ heading }: Props) {
  return (
    <div className="relative overflow-clip">
      <Section>
        <Slider publications={publications_data}>
          {heading.align === "none" ? (
            <div />
          ) : (
            <Heading className="self-stretch" {...heading}>
              <h4>{heading.title}</h4>
            </Heading>
          )}
        </Slider>
      </Section>
    </div>
  )
}
