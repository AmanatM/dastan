"use client"
import { type EmblaCarouselType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import * as React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { PublicationItem } from "./data"
import demoImage from "@public/images/testimonials/author.avif"
import { platform } from "os"
import { YoutubeIcon } from "@/icons/platform-icons"

export function Slider({ publications, children }: { publications: PublicationItem[]; children: React.ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      breakpoints: {
        640: {
          align: "center",
        },
      },
    },
    [WheelGesturesPlugin()],
  )

  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  const onPrevButtonClick = React.useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = React.useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="flex w-full flex-col gap-14">
      <div className="flex justify-between">
        {children}
        <div className="hidden gap-4 sm:flex">
          <Button
            aria-label="Previous testimonial"
            className="!h-auto rounded-full px-4 py-2"
            variant="secondary"
            onClick={onPrevButtonClick}
          >
            <ArrowLeftIcon className="size-6" />
          </Button>
          <Button
            aria-label="Next testimonial"
            className="!h-auto rounded-full !px-4 !py-2"
            variant="secondary"
            onClick={onNextButtonClick}
          >
            <ArrowRightIcon className="size-6" />
          </Button>
        </div>
      </div>
      <div ref={emblaRef} className="relative">
        <div className="relative flex h-full w-full gap-10 md:gap-0">
          {publications.map((item, index) => (
            <TesimonialCard key={index} item={item} />
          ))}
        </div>
        <div className="mt-4 flex w-full justify-center gap-2 md:hidden">
          {scrollSnaps.map((snap, index) => (
            <button
              key={snap}
              aria-label={`Testimonial ${String(index + 1)}`}
              className={cn(
                "group flex items-center justify-center rounded-full p-1",
                index === selectedIndex ? "bg-accent-500/50" : "",
              )}
              onClick={() => onDotButtonClick(index)}
            >
              <span
                className={cn(
                  "size-2 rounded-full",
                  index === selectedIndex ? "bg-accent-500" : "bg-surface-tertiary dark:bg-dark-surface-secondary",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function VainillaCard({ item }: { item: PublicationItem }) {
  return (
    <div className="min-w-0 max-w-full shrink-0 grow-0 basis-[min(540px,100%)] self-stretch md:pr-10">
      <article className="embla__slide dark:border-dark-border flex h-full w-full min-w-0 transform touch-pan-y touch-pinch-zoom select-none flex-col rounded-xl border border-border [backface-visibility:hidden] last:!visible">
        <div className="dark:border-dark-border flex flex-1 flex-col items-start gap-y-3 border-b border-border px-5 py-[18px] md:px-8 md:py-7">
          <h3 className="text-text-primary dark:text-dark-text-primary text-pretty text-xl font-normal leading-[135%] sm:text-2xl md:text-3xl">
            {item.title}
          </h3>
          <h5 className="text-base font-extralight md:text-lg">{item.subtitle}</h5>
        </div>
        <div className="flex items-center gap-4 pl-5">
          <div className="dark:border-dark-border flex flex-1 items-center gap-5 border-r border-border py-2">
            <div className="flex flex-1 flex-col">
              <p className="text-pretty text-sm text-muted-foreground md:text-base">
                {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </p>
            </div>
          </div>
          <div className="pr-5">
            <div className="w-[120px] p-5">
              <YoutubeIcon />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export const TesimonialCard = React.memo(
  VainillaCard,
  (prevProps, nextProps) =>
    prevProps.item.title === nextProps.item.title && prevProps.item.platform === nextProps.item.platform,
)
