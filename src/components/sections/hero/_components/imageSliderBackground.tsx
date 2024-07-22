"use client"
import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import useEmblaCarousel from "embla-carousel-react"
import { StaticImageData } from "next/image"
import Image from "next/image"

type PropType = {
  images: {
    src: StaticImageData
    alt: string
  }[]
  options?: EmblaOptionsType
}

const ImageSliderBackground = ({ images, options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 }), Fade()])

  return (
    <div className="h-4/5 w-full select-none overflow-hidden md:h-full" ref={emblaRef}>
      <div className="relative flex h-full w-full">
        {images.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0 flex-grow-0">
            <div className="absolute inset-0 z-10 bg-black/30"></div>
            <Image
              src={image.src}
              alt={image.alt}
              placeholder="blur"
              priority={index === 0}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSliderBackground
