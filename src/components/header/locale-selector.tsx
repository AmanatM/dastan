"use client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useTransition, useState, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { locales } from "@/config";
import { useLocale } from "next-intl";
import { KGFlagIcon, RUFlagIcon, USFlagIcon } from "@/icons/flag-icons";

type Language = {
  name: string;
  icon: JSX.Element;
};

const languages: Record<string, Language> = {
  en: {
    name: "English",
    icon: <USFlagIcon />,
  },
  ru: {
    name: "Русский",
    icon: <RUFlagIcon />,
  },
  kg: {
    name: "Кыргызча",
    icon: <KGFlagIcon />,
  },
};

function LocaleSelector() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [value, setValue] = useState(currentLocale);

  useEffect(() => {
    setValue(currentLocale);
  }, [currentLocale]);

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      const urlSegments = pathname.split("/").filter((segment) => segment !== currentLocale);
      router.replace(`/${nextLocale}/${urlSegments.join("/")}`, { scroll: false });
      setValue(nextLocale);
    });
  }

  return (
    <Select onValueChange={onSelectChange} value={value} disabled={isPending}>
      <SelectTrigger className="border-none outline-none bg-transparent uppercase">
        <SelectValue>
          <div className="flex items-center gap-x-2">
            {languages[value].icon} {value}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {locales.map((locale) => (
            <SelectItem value={locale} key={locale} className="uppercase cursor-pointer">
              <div className="flex items-center gap-x-2">
                {languages[locale].icon} {locale}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LocaleSelector;
