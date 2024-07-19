"use client"
import { FADE_UP_ANIMATION_VARIANTS } from "@/config/motion-animations"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import clsx from "clsx"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const $headingContainer = cva("flex flex-col gap-3", {
  variants: {
    align: {
      center: "items-center self-center",
      left: "items-start self-start",
      right: "items-end self-end",
      none: "",
    },
  },
  defaultVariants: {
    align: "center",
  },
})

export type HeadingProps = {
  children: React.ReactNode
  subtitle?: React.ReactNode
  tag?: React.ReactNode
  className?: string
  title?: string
  align?: string | null
} & VariantProps<typeof $headingContainer>

export function Heading({ subtitle, className, tag, align = "center", ...props }: HeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  align = align ?? "center"
  const Comp = Slot

  if (align === "none") return null

  return (
    <div ref={ref}>
      <motion.div
        className={$headingContainer({ align, className })}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        viewport={{ root: ref }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {tag ? <Tag>{tag}</Tag> : null}
        {subtitle && (
          <motion.p
            className={clsx("max-w-screen-md text-pretty text-lg font-light text-muted-foreground md:text-xl", {
              "text-center": align === "center",
              "text-left": align === "left",
              "text-right": align === "right",
            })}
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className={clsx("flex max-w-[800px] flex-col justify-center gap-1", {
            "items-start self-start": align === "left",
            "items-center self-center": align === "center" || !align,
            "items-end self-end": align === "right",
          })}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <Comp
            className={clsx("text-pretty text-3xl font-medium md:text-4xl", {
              "text-center": align === "center",
              "text-left": align === "left",
              "text-right": align === "right",
            })}
            {...props}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export function Tag({
  className,
  children,
  asChild,
  ...props
}: React.AllHTMLAttributes<HTMLDivElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h3"

  return (
    <Comp
      className={cn(
        "flex min-h-7 items-center justify-center gap-2 rounded-full bg-muted pb-px text-sm font-medium text-muted-foreground md:text-base",
        "bg-gradient-to-l from-blue-600 to-violet-500 bg-clip-text text-sm font-medium text-transparent dark:from-blue-400 dark:to-violet-400",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
