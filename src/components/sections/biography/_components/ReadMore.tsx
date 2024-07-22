import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useTranslations } from "next-intl"

function ReadMore() {
  const t = useTranslations()
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="uppercase">{t("Biography.subtitle")}</DialogTitle>
        <DialogDescription className="hidden">{t("Biography.subtitle")}</DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[400px] overflow-auto">
        <div className="space-y-3 p-3">
          <p>{t("Biography.readMore.paragraph1")}</p>
          <p>{t("Biography.readMore.paragraph2")}</p>
          <p>{t("Biography.readMore.paragraph3")}</p>
          <p>{t("Biography.readMore.paragraph4")}</p>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <DialogFooter>
        <DialogClose asChild>
          <Button>{t("Global.close")}</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}

export default ReadMore
