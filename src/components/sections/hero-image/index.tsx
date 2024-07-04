import clsx from "clsx";

import { Avatar } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";

export function HeroImage() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row size-full">
        <div className="h-3/6 lg:h-auto lg:w-4/6 relative">
          <Image quality={80} src="/images/hero.jpg" fill={true} objectFit="cover" alt="" />
        </div>
        <div className="h-3/6 lg:h-auto lg:w-2/6 flex items-center justify-start lg:p-20 p-4">
          <div className="flex flex-col items-start justify-center gap-x-2 gap-y-4">
            <h1 className="flex lg:hidden font-bold text-3xl">DASTAN ABIKOV</h1>
            {["Entrepreneur", "Investor", "Speaker", "Philanthropist"].map((item, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <div className="w-[8px] h-[8px] bg-accent"></div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="absolute bottom-0 left-0 right-0 font-bold text-[170px] text-center text-nowrap max-w-full hidden lg:block">
        DASTAN ABIKOV
      </h1>
    </section>
  );
}
