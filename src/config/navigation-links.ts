type MainNav = {
  titleKey: "bio" | "kyrgyzFund" | "scholarshipProgramm" | "economicProgram" | "news" | "contact"
  href: string
}

export const mainNav: MainNav[] = [
  {
    titleKey: "bio",
    href: "#biography",
  },
  {
    titleKey: "kyrgyzFund",
    href: "#kyrgyzFund",
  },
  {
    titleKey: "scholarshipProgramm",
    href: "#scholarshipProgram",
  },
  {
    titleKey: "economicProgram",
    href: "#economicProgram",
  },
  {
    titleKey: "news",
    href: "#news",
  },
  {
    titleKey: "contact",
    href: "#contact",
  },
]
