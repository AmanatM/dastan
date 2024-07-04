"use client";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useTransition, useState, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { locales } from "@/config";
import { useLocale } from "next-intl";

function LocaleSelector() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();

  const [value, setValue] = useState(currentLocale);

  useEffect(() => {
    setValue(currentLocale);
  }, [currentLocale]);

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      const urlSegments = pathname.split("/").filter((segment) => segment !== currentLocale);
      router.replace(`/${nextLocale}/${urlSegments.join("/")}`);
      setValue(nextLocale);
    });
  }

  return (
    <Select onValueChange={onSelectChange} value={value}>
      <SelectTrigger className="border-none outline-none bg-transparent uppercase">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {locales.map((locale) => (
            <SelectItem value={locale} key={locale} className="uppercase">
              {locale}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LocaleSelector;
