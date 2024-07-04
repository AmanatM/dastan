import { Heading } from "@/components/common/heading";
import { Section } from "@/components/common/layout";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <Section className="flex h-[calc(100vh-var(--header-height))] flex-col justify-center">
      <Heading subtitle="The page you're trying to access does not exist." tag="404">
        <h2>Page not found</h2>
      </Heading>
      <ButtonLink href="/">Go back to Homepage</ButtonLink>
    </Section>
  );
}
