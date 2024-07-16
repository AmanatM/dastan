import { Section } from "@/components/common/layout"

import styles from "./companies.module.css"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { IlgeriLogo, KyrgyzFundLogo, QoorchaqLogo } from "./companies_logos"
import { companies } from "@/config/companies"

const companiesLogos = [
  {
    title: "Kyrgyz Fund",
    icon: KyrgyzFundLogo,
  },
  {
    title: "Qoorchaq",
    icon: QoorchaqLogo,
  },
  {
    title: "Ilgeri",
    icon: IlgeriLogo,
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
          {/* {companies.map(company => (
            <figure key={company.title} className="flex h-16 items-center px-2 py-3 lg:p-4">
              <company.icon />
            </figure>
          ))} */}
          {companies.map(company => (
            <figure key={company.image?.url ?? company.title} className="flex h-16 items-center px-2 py-3 lg:p-4">
              <Image alt={company.title} className="w-24 lg:w-32" height={20} src={company.image!.url} width={32} />
            </figure>
          ))}
        </div>
      </div>
    </Section>
  )
}
