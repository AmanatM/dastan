import { Newsletter } from "@/components/newsletter";
import { Companies } from "@/components/sections/companies";
import { FeaturesList } from "@/components/sections/features/features-list";
import { Hero } from "@/components/sections/hero";
import { HeroImage } from "@/components/sections/hero-image";
import { Testimonials } from "@/components/sections/testimonials";

import { featuresCardsList } from "@/config/home";
import { homeTestimonials } from "@/config/testimonials";
import { title } from "process";

export default function Home() {
  return (
    <div>
      <HeroImage />
      <Companies />
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
