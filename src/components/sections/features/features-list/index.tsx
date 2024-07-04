import { Heading, HeadingProps } from "@/components/common/heading";
import { Section } from "@/components/common/layout";
import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { list } from "postcss";

export type FeatureCardItem = {
  title: string;
  description: string;
  image: {
    alt: string;
    url: string;
  };
  list?: {
    title: string;
  }[];
};

type FeatureCard = {
  heading: {
    title: string;
    subtitle: string;
    tag: string;
  };
  featuresCardsList: FeatureCardItem[];
};

export function FeaturesList({ featuresCardsList, heading }: FeatureCard) {
  return (
    <Section container="default">
      <Heading subtitle={heading.subtitle} tag={heading.tag}>
        <h4>{heading.title}</h4>
      </Heading>
      <div className="flex flex-col gap-6">
        {featuresCardsList.map((card) => (
          <article
            key={card.title}
            className="flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border bg-card p-px dark:border-dark-border dark:bg-dark-surface-secondary sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <Image
                src={card.image.url}
                className="block aspect-video h-[200px] w-full rounded-lg border border-border object-cover dark:border-dark-border md:h-full"
                height={374}
                width={560}
                alt={card.image.alt}
              />
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-2xl font-medium text-text-primary dark:text-dark-text-primary md:text-3xl">
                  {card.title}
                </h5>
                <p className="font-normal text-text-secondary dark:text-dark-text-secondary md:text-lg">
                  {card.description}
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {card.list?.map((listItem) => (
                  <li
                    key={listItem.title}
                    className="flex items-center gap-4 font-normal text-text-secondary dark:text-dark-text-secondary"
                  >
                    <span className="flex size-6 items-center justify-center rounded-full bg-surface-tertiary dark:bg-dark-surface-tertiary">
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
  );
}
