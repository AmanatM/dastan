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
import { useMessages, useTranslations } from "next-intl"

function ReadMore() {
  const t = useTranslations()

  const messages = useMessages()
  const keys = Object.keys(messages.Biography.readMore)

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="uppercase">{t("Biography.subtitle")}</DialogTitle>
        <DialogDescription className="hidden">{t("Biography.subtitle")}</DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[400px] overflow-auto">
        {keys.map(key => (
          <div key={key} className="my-2 flex items-start gap-x-2">
            <div className="mt-2 !h-[8px] !w-[8px] shrink-0 bg-accent" />
            <div className="w-[90px] whitespace-nowrap text-nowrap font-bold">
              {t(`Biography.readMore.${key}.time`)}:
            </div>

            <div className="flex flex-1 flex-col gap-y-1">
              <p>{t(`Biography.readMore.${key}.description`)}</p>
            </div>
          </div>
        ))}

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
