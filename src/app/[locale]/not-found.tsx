import { Heading } from "@/components/common/heading";
import { Section } from "@/components/common/layout";
import { ButtonLink } from "@/components/ui/button-link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <Section className="flex h-[calc(100vh-var(--header-height))] flex-col justify-center">
      <Heading subtitle="404">
        <h2>{t("title")}</h2>
      </Heading>
      <ButtonLink href="/">{t("goBack")}</ButtonLink>
    </Section>
  );
}
