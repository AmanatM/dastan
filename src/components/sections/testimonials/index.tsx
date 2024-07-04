import { Slider } from "./slider";
import { Section } from "@/components/common/layout";
import { Heading } from "@/components/common/heading";

export type TestimonialItem = {
  quote: string;
  author: {
    image: {
      url: string;
      alt: string;
    };
    title: string;
    role: string;
    company: {
      title: string;
      image: {
        url: string;
        alt: string;
      };
    };
  };
};

export type TestimonialsSlider = {
  heading: {
    title: string;
    subtitle?: string;
    align: "center" | "left" | "right" | "none";
  };
  quotes: TestimonialItem[];
};

export function Testimonials({ heading, quotes }: TestimonialsSlider) {
  return (
    <div className="relative overflow-clip">
      <Section>
        <Slider quotes={quotes}>
          {heading.align === "none" ? (
            <div />
          ) : (
            <Heading className="self-stretch" {...heading}>
              <h4>{heading.title}</h4>
            </Heading>
          )}
        </Slider>
      </Section>
    </div>
  );
}
