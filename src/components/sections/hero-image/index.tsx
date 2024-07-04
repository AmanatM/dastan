import clsx from "clsx";

import { Avatar } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import Image from "next/image";

export function HeroImage() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="flex size-full">
        <div className="w-4/6 relative">
          <Image quality={80} src="/images/hero.jpg" fill={true} objectFit="cover" alt="" />
        </div>
        <div className="w-2/6 pt-[64px] flex items-center justify-start p-3 pl-20">
          <div className="flex flex-col items-start justify-center gap-x-2 gap-y-4">
            {["Entrepreneur", "Investor", "Speaker", "Philanthropist"].map((item, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <div className="w-[8px] h-[8px] bg-accent"></div>
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="absolute bottom-0 left-0 right-0 font-bold text-9xl text-center text-nowrap">DASTAN ABIKOV</h1>
    </section>
  );
}
