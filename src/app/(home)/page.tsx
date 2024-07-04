import { Heading } from "@/components/common/heading";
import { Section } from "@/components/common/layout";
import { Newsletter } from "@/components/newsletter";
import { Companies } from "@/components/sections/companies";
import { FeaturesList } from "@/components/sections/features/features-list";
import { Hero } from "@/components/sections/hero";
import { HeroImage } from "@/components/sections/hero-image";
import Image from "next/image";
import { Testimonials } from "@/components/sections/testimonials";

import { featuresCardsList } from "@/config/home";
import { homeTestimonials } from "@/config/testimonials";
import { title } from "process";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <div>
      <HeroImage />
      <Companies />

      <Section container={"default"} className="grid lg:grid-cols-2 gap-x-20 w-full items-center">
        <div>
          <ImageCarousel
            images={[
              {
                src: "/images/childhood.jpg",
                alt: "Dastan Abikov",
              },
              {
                src: "/images/childhood.jpg",
                alt: "Dastan Abikov",
              },
            ]}
          />
        </div>
        <div className="flex flex-col gap-y-7">
          <Heading subtitle={"BIOGRAPHY"} align={"left"}>
            <h4>
              <span className="text-accent">DASTAN ABIKOV</span>
              <br /> WAS BORN IN 1999
              <br /> IN KYRGYZ REPUBLIC
            </h4>
          </Heading>
          <div className="flex flex-col gap-y-3">
            {["Entrepreneur", "Investor", "Speaker", "Philanthropist"].map((item, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <div className="w-[8px] h-[8px] bg-accent" />
                <div>{item}</div>
              </div>
            ))}
          </div>
          <Button size={"lg"} className="self-start text-lg">
            Read More
          </Button>
        </div>
      </Section>

      {/* 
      <FeaturesList
        heading={{
          title: "Enhanced Team Communication",
          subtitle:
            "Simplify team discussions and collaboration with our efficient messaging features, enabling swift decision-making and project progress tracking.",
          tag: "Communication",
        }}
        featuresCardsList={featuresCardsList}
      />
      <Testimonials
        heading={{
          title: "What our clients say",
          subtitle: undefined,
          align: "center",
        }}
        quotes={homeTestimonials}
      />
      <Newsletter /> */}
    </div>
  );
}
