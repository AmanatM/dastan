import { unstable_setRequestLocale } from "next-intl/server"

import Hero from "@/components/sections/hero"
import { Companies } from "@/components/sections/companies"
import Biography from "@/components/sections/biography"
import PublicationsSlider from "@/components/sections/publicationsSlider"
import ContactForm from "@/components/sections/contactForm"
import KyrgyzFund from "@/components/sections/kyrgyzFund"
import EconomicPlanSection from "@/components/sections/economicProgram"

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  return (
    <div>
      <Hero />
      <Biography />
      <Companies />
      <KyrgyzFund />
      <EconomicPlanSection />
      <PublicationsSlider />
      <ContactForm />
    </div>
  )
}
