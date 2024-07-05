import { Companies } from "@/components/sections/companies"
import { HeroImage } from "@/components/sections/hero-image"

import Biography from "@/components/sections/biography"
import { unstable_setRequestLocale } from "next-intl/server"

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  return (
    <div>
      <HeroImage />
      <Companies />

      <Biography />

      {/* 
      <FeaturesList
        heading={{
          title: "Enhanced Team Communication",
          subtitle:
            "Simplify team discussions and collaboration with our efficient messaging features, enabling swift decision-making and project progress tracking.",
          tag: "Communication",
        }}
        featuresCardsList={featuresCardsList}
      />
      <Testimonials
        heading={{
          title: "What our clients say",
          subtitle: undefined,
          align: "center",
        }}
        quotes={homeTestimonials}
      />
      <Newsletter /> */}
    </div>
  )
}
