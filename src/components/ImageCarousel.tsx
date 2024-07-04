"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
  delay?: number;
  className?: string;
};

function ImageCarousel({ images, delay = 10000, className }: ImageCarouselProps) {
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
      className={cn("size-full", className)}
    >
      <CarouselContent className="h-[400px]">
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative size-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill={true}
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
