"use client"
import { Button } from "@/components/ui/button"
import {
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaDescription,
  CredenzaBody,
  CredenzaFooter,
  CredenzaClose,
} from "@/components/ui/credenza"
import { useTranslations } from "next-intl"

function ReadMore() {
  const t = useTranslations()
  return (
    <CredenzaContent className="max-w-2xl">
      <CredenzaHeader>
        <CredenzaTitle className="uppercase">{t("Biography.subtitle")}</CredenzaTitle>
        <CredenzaDescription className="hidden">{t("Biography.subtitle")}</CredenzaDescription>
      </CredenzaHeader>
      <CredenzaBody>
        <div className="h-[400px] overflow-auto">
          <div className="space-y-3 p-3">
            <p>{t("Biography.readMore.paragraph1")}</p>
            <p>{t("Biography.readMore.paragraph2")}</p>
            <p>{t("Biography.readMore.paragraph3")}</p>
            <p>{t("Biography.readMore.paragraph4")}</p>
          </div>
          {/* <ScrollBar orientation="horizontal" /> */}
        </div>
      </CredenzaBody>
      <CredenzaFooter>
        <CredenzaClose asChild>
          <Button>{t("Global.close")}</Button>
        </CredenzaClose>
      </CredenzaFooter>
    </CredenzaContent>
  )
}

export default ReadMore
