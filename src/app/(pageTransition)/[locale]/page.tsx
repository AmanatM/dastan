import { Companies } from "@/components/sections/companies"

import Biography from "@/components/sections/biography"
import { unstable_setRequestLocale } from "next-intl/server"
import { Newsletter } from "@/components/newsletter"
import PublicationsSlider from "@/components/sections/publicationsSlider"
import Hero from "@/components/sections/hero"
import { FeaturesList } from "@/components/sections/features"

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  return (
    <div>
      <Hero />
      <Companies />
      <Biography />

      <FeaturesList />
      <PublicationsSlider
        heading={{
          title: "NEWS & PUBLICATIONS",
          subtitle: undefined,
          align: "center",
        }}
      />
      {/* <Newsletter /> */}
    </div>
  )
}
