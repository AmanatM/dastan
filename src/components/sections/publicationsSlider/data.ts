export type Platform = "YouTube" | "News"
export type PublicationItem = {
  title: string
  subtitle?: string
  link: string
  platform: Platform
  date: string
}

export const publications_data: PublicationItem[] = [
  {
    title: "Interview in Kyrgyz language to the #1 channel (KTRK)",
    subtitle: "Interview in Kyrgyz language to the #1 channel (KTRK)",
    platform: "YouTube",
    date: "Jun, 2017",
    link: "https://youtu.be/CVPNJuWYpQk?si=qbqi4rzuPkif4WV9",
  },
  {
    title: "Neoplace: Discovering the Ultimate Nomadic Lifestyle",
    subtitle: "Neoplace revolutionizes the modern-day nomadic lifestyle with innovative solutions.",
    platform: "News",
    date: "April, 2024",
    link: "https://southeast.newschannelnebraska.com/story/50696287/neoplace-discovering-the-ultimate-nomadic-lifestyle",
  },
  {
    title: "The 17-Year-Old Entrepreneur Who Earned $500 a Day",
    subtitle: "The businessman was interviewed by Sputnik Kyrgyzstan correspondent Asel Minbaeva.",
    platform: "News",
    date: "Dec, 2016",
    link: "https://ru.sputnik.kg/20161127/za-sutki-ya-zarabotal-500-dollarov-istoriya-uspekha-17-letnego-biznesmena-1030483603.html",
  },
]
