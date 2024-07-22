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

export function ReadMoreFund() {
  const t = useTranslations()
  return (
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="uppercase">Title</DialogTitle>
        <DialogDescription className="hidden">Subtitle</DialogDescription>
      </DialogHeader>

      <ScrollArea className="h-[400px] overflow-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis corporis obcaecati tempore quos
        voluptas ducimus nihil modi inventore officia corrupti, ut porro expedita, ex voluptate qui error odit! Quo.
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
