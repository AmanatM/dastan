import { unstable_setRequestLocale } from "next-intl/server"

import Hero from "@/components/sections/hero"
import { Companies } from "@/components/sections/companies"
import Biography from "@/components/sections/biography"
import FeaturesList from "@/components/sections/features"
import PublicationsSlider from "@/components/sections/publicationsSlider"
import ContactForm from "@/components/sections/contactForm"

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
      <ContactForm />
      {/* <Newsletter /> */}
    </div>
  )
}
