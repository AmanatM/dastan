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

function ImageCarousel({ images, delay = 3000, className }: ImageCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: delay,
        }),
      ]}
    >
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative">
            <div className={cn("relative", className)}>
              <Image
                src={image.img}
                alt={image.alt}
                placeholder="blur"
                // fill
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ImageCarousel;
