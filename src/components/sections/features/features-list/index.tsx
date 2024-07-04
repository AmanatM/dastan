import { Heading, HeadingProps } from "@/components/common/heading"
import { Section } from "@/components/common/layout"
import { CheckIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { list } from "postcss"

export type FeatureCardItem = {
  title: string
  description: string
  image: {
    alt: string
    url: string
  }
  list?: {
    title: string
  }[]
}

type FeatureCard = {
  heading: {
    title: string
    subtitle: string
    tag: string
  }
  featuresCardsList: FeatureCardItem[]
}

export function FeaturesList({ featuresCardsList, heading }: FeatureCard) {
  return (
    <Section container="default">
      <Heading subtitle={heading.subtitle}>
        <h4>{heading.title}</h4>
      </Heading>
      <div className="flex flex-col gap-6">
        {featuresCardsList.map(card => (
          <article
            key={card.title}
            className="dark:border-dark-border dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border bg-card p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <Image
                src={card.image.url}
                className="dark:border-dark-border block aspect-video h-[200px] w-full rounded-lg border border-border object-cover md:h-full"
                height={374}
                width={560}
                alt={card.image.alt}
              />
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                  {card.title}
                </h5>
                <p className="text-text-secondary dark:text-dark-text-secondary font-normal md:text-lg">
                  {card.description}
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {card.list?.map(listItem => (
                  <li
                    key={listItem.title}
                    className="text-text-secondary dark:text-dark-text-secondary flex items-center gap-4 font-normal"
                  >
                    <span className="bg-surface-tertiary dark:bg-dark-surface-tertiary flex size-6 items-center justify-center rounded-full">
                      <CheckIcon className="text-text-tertiary dark:text-dark-text-tertiary" />
                    </span>
                    {listItem.title}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
