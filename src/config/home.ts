import { FeatureCardItem } from "@/components/sections/features/features-list";

export const featuresCardsList: FeatureCardItem[] = [
  {
    title: "Enhanced Team Communication",
    description:
      "Simplify team discussions and collaboration with our efficient messaging features, enabling swift decision-making and project progress tracking.",
    image: {
      alt: "Enhanced Team Communication",
      url: "/images/home/features-1.avif",
    },

    list: [
      {
        title: "Real-time Messaging",
      },
      {
        title: "File Sharing",
      },
      {
        title: "Task Assignment",
      },
      {
        title: "Project Tracking",
      },
    ],
  },
  {
    title: "Integrated Task Management",
    description:
      "Enhance communication by integrating discussions directly with tasks. This feature allows team members to collaborate more effectively by linking conversations to specific projects or tasks.",
    image: {
      alt: "Integrated Task Management",
      url: "/images/home/features-2.avif",
    },
  },
];
