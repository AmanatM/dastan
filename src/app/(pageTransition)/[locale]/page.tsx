import { unstable_setRequestLocale } from "next-intl/server"
import dynamic from "next/dynamic"

import Hero from "@/components/sections/hero"
import { Companies } from "@/components/sections/companies"

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  const Biography = dynamic(() => import("@/components/sections/biography"))
  const FeaturesList = dynamic(() => import("@/components/sections/features"))
  const PublicationsSlider = dynamic(() => import("@/components/sections/publicationsSlider"))

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
