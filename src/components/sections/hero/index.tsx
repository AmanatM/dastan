import clsx from "clsx";

import { Avatar } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";

type HeroProps = {
  heading: {
    title: string;
    subtitle: string;
  };
  customersText?: string;
  actionButtons: {
    href: string;
    type: "primary" | "secondary";
    label: string;
  }[];
};

type AvatarProps = {
  src: string;
  alt: string;
};
const avatarList: AvatarProps[] = [
  {
    src: "/images/avatars/avatar-1.avif",
    alt: "Avatar 1",
  },
  {
    src: "/images/avatars/avatar-2.avif",
    alt: "Avatar 2",
  },
  {
    src: "/images/avatars/avatar-3.avif",
    alt: "Avatar 3",
  },
];

export function Hero({ heading, customersText = "10k+ happy customers", actionButtons }: HeroProps) {
  return (
    <section className="relative h-[calc(630px-var(--header-height))] overflow-hidden">
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border dark:border-dark-border">
        {/* Decorations */}
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex h-full items-center justify-center border-x border-border dark:border-dark-border" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      {/* --- */}
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-primary/40 blur-[200px]" />
      {/* <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden  aspect-square w-[32vw] rounded-full bg-primary/40 opacity-50 blur-[100px]  md:block" /> */}
      {/* <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden  aspect-square w-[30vw] rounded-full bg-primary opacity-50 blur-[100px] md:block" /> */}
      {/* --- */}
      <div className="relative z-10 flex flex-col divide-y divide-border pt-[35px] dark:divide-dark-border">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center gap-2 !border !border-b-0 border-border px-4 py-2 dark:border-dark-border">
            <div className={clsx("flex -space-x-3 rtl:space-x-reverse")}>
              {avatarList.map(({ alt, src }) => (
                <Image
                  key={alt}
                  alt={alt}
                  src={src}
                  width={28}
                  height={28}
                  className="rounded-full border-2 border-background"
                />
              ))}
            </div>

            <p className="text-sm tracking-tight text-muted-foreground">{customersText}</p>
          </div>
        </div>
        <div>
          <div className="mx-auto flex h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <h1 className="gradient-text max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-text-primary dark:text-dark-text-primary md:tracking-[-2.16px]">
              {heading.title}
            </h1>
            <h2 className="text-md max-w-2xl text-pretty text-center text-muted-foreground md:text-lg">
              {heading.subtitle}
            </h2>
          </div>
        </div>
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
            {actionButtons.map(({ href, type, label }, index) => (
              <ButtonLink
                href={href}
                key={index}
                className={cn(
                  "!h-14 flex-col items-center justify-center rounded-none !text-base",
                  type === "primary"
                    ? "flex w-full"
                    : "text-foreground max-w-sm:!border-x-0 flex w-full !border-x !border-y-0 border-border !bg-transparent backdrop-blur-xl transition-colors duration-150 hover:!bg-black/5 dark:border-dark-border dark:hover:!bg-white/5"
                )}
                name="cta_click"
              >
                {label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
