import { ReactNode } from "react"
import "./globals.css"
import { Metadata } from "next"

type Props = {
  children: ReactNode
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children, params: { locale } }: Props) {
  return children
}
