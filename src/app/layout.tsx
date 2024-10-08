import { ReactNode } from "react"
import { Metadata } from "next"

import "./globals.css"

type Props = {
  children: ReactNode
}

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children
}
