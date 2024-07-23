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
  const messages = useMessages() as IntlMessages

  const keys = Object.keys(messages.Biography.readMore) as Array<keyof typeof messages.Biography.readMore>

  const readMoreItems = keys.map(key => {
    return {
      key,
      time: t(`Biography.readMore.${key}.time`),
      description: t.rich(`Biography.readMore.${key}.description`, {
        li: chunks => <li>{chunks}</li>,
      }),
    }
  })

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="uppercase">{t("Biography.subtitle")}</DialogTitle>
        <DialogDescription className="hidden">{t("Biography.subtitle")}</DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[400px] overflow-auto">
        {readMoreItems.map(item => (
          <div key={item.key} className="my-4 flex items-start gap-x-2">
            <div className="mt-2 !h-[8px] !w-[8px] shrink-0 bg-accent" />
            <div className="w-[90px] whitespace-nowrap text-nowrap font-bold">{item.time}:</div>

            <ul className="flex flex-1 list-disc flex-col gap-y-1">{item.description}</ul>
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
