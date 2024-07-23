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
import { Separator } from "@/components/ui/separator"
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
        li: chunks => (
          <li key={key} className="flex items-start gap-x-2">
            <div className="mt-2 !h-[7px] !w-[7px] shrink-0 bg-accent" />
            {chunks}
          </li>
        ),
      }),
    }
  })

  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="uppercase">{t("Biography.subtitle")}</DialogTitle>
        <DialogDescription className="hidden">{t("Biography.subtitle")}</DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[400px] overflow-auto px-1">
        {readMoreItems.map((item, index) => (
          <div key={item.key}>
            <div className="my-4 flex items-start gap-x-2">
              {/* <div className="mt-2 !h-[8px] !w-[8px] shrink-0 bg-accent" /> */}
              <div className="w-[90px] whitespace-nowrap text-nowrap font-bold">{item.time}:</div>
              <ul className="flex flex-1 flex-col gap-y-2">{item.description}</ul>
            </div>
            {index !== readMoreItems.length - 1 && <Separator />}
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
