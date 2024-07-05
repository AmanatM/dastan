"use client"

import { usePathname } from "@/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "next-intl"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useContext, useRef } from "react"

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {})
  const frozen = useRef(context).current

  if (!frozen) {
    return <>{props.children}</>
  }

  return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  // The `key` is tied to the url using the `usePathname` hook.
  const key = useLocale()

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransitionEffect
