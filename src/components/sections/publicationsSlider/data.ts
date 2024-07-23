export type Platform = "YouTube" | "News"

export type PublicationItem = {
  key: "interviewYoutube" | "neoplaceArticle" | "sputnikArticle"
  link: string
  platform: Platform
  date: string
}
export const publications_data: PublicationItem[] = [
  {
    key: "interviewYoutube",
    platform: "YouTube",
    date: "Jun, 2017",
    link: "https://youtu.be/CVPNJuWYpQk?si=qbqi4rzuPkif4WV9",
  },
  {
    key: "neoplaceArticle",
    platform: "News",
    date: "April, 2024",
    link: "https://southeast.newschannelnebraska.com/story/50696287/neoplace-discovering-the-ultimate-nomadic-lifestyle",
  },
  {
    key: "sputnikArticle",
    platform: "News",
    date: "Dec, 2016",
    link: "https://ru.sputnik.kg/20161127/za-sutki-ya-zarabotal-500-dollarov-istoriya-uspekha-17-letnego-biznesmena-1030483603.html",
  },
]
