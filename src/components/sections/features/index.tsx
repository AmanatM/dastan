import { Section } from "@/components/common/layout"
import Image from "next/image"

import un_image from "@public/images/un.jpeg"
import professor_image from "@public/images/professor.jpeg"

const featuresCardsList = [
  {
    image: {
      src: professor_image,
      alt: "Kyrgyz fund program",
    },
    title: "Kyrgyz Fund Program",
    content:
      "A program for young entrepreneurs who want to start their own business. We provide you with the tools and resources you need to succeed.",
  },
  {
    image: {
      src: un_image,
      alt: "United Nations",
    },
    title: "United Nations Speakers",
    content:
      "We have a team of United Nations speakers who are experts in their fields and can provide you with the best advice on how to achieve your goals.",
  },
]

export default function FeaturesList() {
  return (
    <Section container="default">
      {/* <Heading tag={"Subtitle"}>
        <h4>{"Title"}</h4>
      </Heading> */}

      <div className="flex flex-col gap-6">
        {featuresCardsList.map(card => (
          <article
            key={card.title}
            className="dark:border-dark-border dark:bg-dark-surface-secondary flex min-h-96 w-full max-w-full flex-col rounded-lg border border-border bg-card p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <Image
                src={card.image.src}
                className="dark:border-dark-border block aspect-video h-[200px] w-full rounded-lg border border-border object-cover md:h-full"
                height={374}
                width={560}
                alt={card.image.alt}
              />
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-y-5">
                <h5 className="text-text-primary dark:text-dark-text-primary text-2xl font-medium md:text-3xl">
                  {card.title}
                </h5>
                <p className="text-text-secondary dark:text-dark-text-secondary font-normal md:text-lg">
                  {card.content}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
