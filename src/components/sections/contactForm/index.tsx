import { Input } from "@/components/ui/input"
import { Section } from "@/components/common/layout"
import Image from "next/image"

import portraitImg from "@public/images/portrait.webp"
import { Heading } from "@/components/common/heading"
import { Textarea } from "@/components/ui/textarea"
import { ButtonFormSubmit } from "@/components/ui/button-form-loading"
import { ChatBubbleIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

export default function ContactForm() {
  return (
    <Section container={"default"} className="grid w-full items-start gap-x-20 lg:grid-cols-2" id="contact">
      {/* Title */}
      <div className="flex flex-col gap-y-8 self-start">
        <Heading align={"left"} subtitle={"Contact Me"}>
          <h4 className="uppercase">Get in touch with me</h4>
        </Heading>
        <div className="space-y-4">
          <div className="flex items-center gap-x-2">
            <EnvelopeClosedIcon className="h-5 w-5" /> <span>dastanabik@icloud.com</span>
          </div>
          <div className="flex items-center gap-x-2">
            <ChatBubbleIcon className="h-5 w-5" /> <span>+1 (628) 264-4246</span>
          </div>
        </div>

        <blockquote className="relative">
          <div className="mt-3">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image className="h-11 w-11 rounded-full" src={portraitImg} alt="Dastan Abikov" />
              </div>
              <div className="ms-4 grow">
                <div className="font-semibold">Dastan Abikov</div>
                <div className="text-xs text-muted-foreground">Investor | Serial entrepreneur</div>
              </div>
            </div>
          </div>
        </blockquote>
      </div>

      <div className="flex flex-col gap-y-7">
        <form>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <Input placeholder="Name" type="text" className="text-base" />
            <Input placeholder="Email" type="email" className="text-base" />
            <Textarea placeholder="Message" className="col-span-2 min-h-[150px] resize-none text-base" />

            <ButtonFormSubmit className="text-bases col-span-2 mt-3" variant={"default"} size={"lg"}>
              Send
            </ButtonFormSubmit>
          </div>
        </form>
      </div>
    </Section>
  )
}
