import { Section } from "@/components/common/layout"
import Image from "next/image"

import portraitImg from "@public/images/portrait.webp"
import { Heading } from "@/components/common/heading"
import { ChatBubbleIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import ContactForm from "./_components/contactForm"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function ContactSection() {
  const t = useTranslations()

  const formText = {
    name: t("Contact.form.name"),
    email: t("Contact.form.email"),
    message: t("Contact.form.message"),
    submit: t("Contact.form.send"),
  }
  return (
    <Section container={"default"} className="grid w-full items-start gap-x-20 lg:grid-cols-2" id="contact">
      {/* Title */}
      <div className="flex flex-col gap-y-8 self-start">
        <Heading align={"left"} subtitle={t("Contact.tag")}>
          <h4 className="uppercase">{t("Contact.title")}</h4>
        </Heading>
        <div className="space-y-4">
          <Link className="flex items-center gap-x-2" href={"mailto:dastanabik@icloud.com"}>
            <EnvelopeClosedIcon className="h-5 w-5" /> <span>dastanabik@icloud.com</span>
          </Link>
          <Link className="flex items-center gap-x-2" href={"tel:+1 (628) 264-4246"}>
            <ChatBubbleIcon className="h-5 w-5" /> <span>+1 (628) 264-4246</span>
          </Link>
        </div>

        <blockquote className="relative">
          <div className="mt-3">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image className="h-11 w-11 rounded-full" src={portraitImg} alt="Dastan Abikov" />
              </div>
              <div className="ms-4 grow">
                <div className="font-semibold">{t("Global.name")}</div>
                <div className="text-xs text-muted-foreground">{t("Contact.role")}</div>
              </div>
            </div>
          </div>
        </blockquote>
      </div>

      <div className="flex flex-col gap-y-7">
        <ContactForm formText={formText} />
      </div>
    </Section>
  )
}
