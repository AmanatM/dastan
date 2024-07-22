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
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle className="uppercase">Title</DialogTitle>
        <DialogDescription className="hidden">Subtitle</DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[400px] overflow-auto">
        <div className="space-y-3 p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate possimus nam illo itaque ex mollitia. Ad
          distinctio quia qui, asperiores voluptas eaque incidunt unde atque fuga. Voluptates ipsum sequi itaque?
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <DialogFooter>
        <DialogClose asChild>
          <Button>Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}

export default ReadMore
