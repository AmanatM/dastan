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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useTranslations } from "next-intl"

export function ReadMoreFund() {
  const t = useTranslations()
  return (
    <CredenzaContent className="max-w-2xl">
      <CredenzaHeader>
        <CredenzaTitle className="uppercase">Title</CredenzaTitle>
        <CredenzaDescription className="hidden">Subtitle</CredenzaDescription>
      </CredenzaHeader>
      <CredenzaBody>
        <ScrollArea className="h-[400px] overflow-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis corporis obcaecati tempore quos
          voluptas ducimus nihil modi inventore officia corrupti, ut porro expedita, ex voluptate qui error odit! Quo.
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CredenzaBody>
      <CredenzaFooter>
        <CredenzaClose asChild>
          <Button>{t("Global.close")}</Button>
        </CredenzaClose>
      </CredenzaFooter>
    </CredenzaContent>
  )
}
