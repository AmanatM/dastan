import { Heading } from "@/components/common/heading";
import { Section } from "@/components/common/layout";
import ImageCarousel from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";

import bioImage from "./childhood.jpg";

function Biography() {
  return (
    <Section container={"default"} className="grid lg:grid-cols-2 gap-x-20 w-full items-center">
      <div className="h-[300px]">
        <ImageCarousel
          images={[
            {
              img: bioImage,
              alt: "Dastan Abikov",
            },
            {
              img: bioImage,
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
  );
}

export default Biography;
