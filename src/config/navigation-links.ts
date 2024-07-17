type MainNav = {
  titleKey: "bio" | "about" | "speaking" | "news" | "contact"
  href: string
}

export const mainNav: MainNav[] = [
  {
    titleKey: "bio",
    href: "#biography",
  },
  {
    titleKey: "about",
    href: "#about",
  },
  {
    titleKey: "speaking",
    href: "#speaking",
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
