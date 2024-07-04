import { Newsletter } from "@/components/newsletter";
import { Companies } from "@/components/sections/companies";
import { FeaturesList } from "@/components/sections/features/features-list";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";

import { featuresCardsList } from "@/config/home";
import { homeTestimonials } from "@/config/testimonials";
import { title } from "process";

export default function Home() {
  return (
    <div>
      <Hero
        heading={{
          title: "GoEngine - Your Partner in Digital Success",
          subtitle: "GoEngine accelerates your business with top-tier digital solutions. ",
        }}
        customersText="10k+ happy customers"
        actionButtons={[
          { href: "#", type: "secondary", label: "See Services" },
          { href: "#", type: "primary", label: "Work With Us" },
        ]}
      />
      <Companies />

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
      <Newsletter />
    </div>
  );
}
