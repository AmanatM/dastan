"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: {
    img: StaticImageData;
    alt: string;
  }[];
  delay?: number;
  className?: string;
};

function ImageCarousel({ images, delay = 10000, className }: ImageCarouselProps) {
  const plugin = React.useRef(Autoplay({ delay: delay, stopOnInteraction: true }));

  return (
    <Carousel
      opts={{
        loop: true,
        duration: 500,
      }}
      plugins={[plugin.current]}
      className={cn("", className)}
    >
      <CarouselContent className="relative">
        {images.map((image, index) => (
          <CarouselItem key={index} className=" aspect-square w-full">
            <Image
              src={image.img}
              alt={image.alt}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ImageCarousel;
