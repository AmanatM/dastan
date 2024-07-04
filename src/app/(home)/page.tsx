import { Heading } from "@/components/common/heading";
import { Section } from "@/components/common/layout";
import { Companies } from "@/components/sections/companies";
import { HeroImage } from "@/components/sections/hero-image";

import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ImageCarousel";
import Biography from "@/components/sections/biography";

export default function Home() {
  return (
    <div>
      <HeroImage />
      <Companies />

      <Biography />

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
