import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

export default function CatchAllPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  notFound()
}
