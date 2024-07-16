import { Section } from "@/components/common/layout"

import styles from "./companies.module.css"
import { cn } from "@/lib/utils"
import Image from "next/image"

import NeoplaceLogo from "@public/images/companies/neoplace.svg"
import QoorchaqLogo from "@public/images/companies/qoorchaq.svg"
import IlgeriLogo from "@public/images/companies/ilgeri.svg"
import KyrgyzfundLogo from "@public/images/companies/kyrgyzfund.svg"
import AalayLogo from "@public/images/companies/aalay.svg"
import PhantomLogo from "@public/images/companies/phantom.svg"

export const companies = [
  {
    title: "Neoplace",
    icon: NeoplaceLogo,
  },
  {
    title: "Qoorchaq",
    icon: QoorchaqLogo,
  },
  {
    title: "Ilgeri",
    icon: IlgeriLogo,
  },
  {
    title: "Kyrgyz Fund",
    icon: KyrgyzfundLogo,
  },
  {
    title: "Aalay Jiu Jitsu Team",
    icon: AalayLogo,
  },
  {
    title: "Phantom Car Rental",
    icon: PhantomLogo,
  },
]
export function Companies() {
  return (
    <Section container="full">
      {/* <h2 className="text-center tracking-tight text-dark-text-tertiary opacity-50">
        Join 4,000+ companies already growing
      </h2> */}
      <div
        className={cn("no-scrollbar flex max-w-full justify-start overflow-auto md:justify-center", styles.scrollbar)}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-transparent bg-gradient-to-r from-background xl:hidden" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-transparent bg-gradient-to-l from-background xl:hidden" />
        <div className={cn("flex shrink-0 items-center gap-4 px-6 lg:gap-6 lg:px-12", styles.scrollbar)}>
          {companies.map(company => (
            <figure key={company.title} className="flex h-16 items-center px-2 py-3 lg:p-4">
              <Image alt={company.title} className="w-24 lg:w-32" placeholder="empty" src={company.icon} />
            </figure>
          ))}
        </div>
      </div>
    </Section>
  )
}
