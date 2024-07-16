"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useTransition, useState, useEffect } from "react"
import { locales } from "@/config"
import { useLocale } from "next-intl"
import { KGFlagIcon, RUFlagIcon, USFlagIcon } from "@/icons/flag-icons"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname, useRouter } from "@/navigation"

type Language = {
  name: string
  icon: JSX.Element
}

const languages: Record<string, Language> = {
  en: {
    name: "EN",
    icon: <USFlagIcon />,
  },
  ru: {
    name: "RU",
    icon: <RUFlagIcon />,
  },
  ky: {
    name: "KG",
    icon: <KGFlagIcon />,
  },
}

function LocaleSelector({ setNavOpened }: { setNavOpened?: (value: boolean) => void }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const [value, setValue] = useState(currentLocale)

  useEffect(() => {
    setValue(currentLocale)
  }, [currentLocale])

  function onSelectChange(nextLocale: "en" | "ru" | "ky") {
    startTransition(() => {
      router.replace(pathname, { scroll: false, locale: nextLocale })
      setValue(nextLocale)
      setNavOpened && setNavOpened(false)
    })
  }

  return (
    <Select onValueChange={onSelectChange} value={value} disabled={isPending}>
      <SelectTrigger className="!focus:ring-0 !selection:ring-0 border-none bg-transparent uppercase !ring-0">
        <SelectValue>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={value}
              className="flex items-center gap-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              {languages[value].icon} {languages[value].name}
            </motion.div>
          </AnimatePresence>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="!focus:ring-0 !ring-0">
        <SelectGroup>
          {locales.map(locale => (
            <SelectItem value={locale} key={locale} className="cursor-pointer uppercase">
              <div className="flex items-center gap-x-2">
                {languages[locale].icon} {languages[locale].name}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LocaleSelector
