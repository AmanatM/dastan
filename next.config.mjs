import createNextIntlPlugin from "next-intl/plugin"

import bundleAnalyzer from "@next/bundle-analyzer"
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-avatar",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-icons",
      "@radix-ui/react-scroll-area",
      "@radix-ui/react-select",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
      "@vercel/analytics",
      "@vercel/speed-insights",
      "embla-carousel-autoplay",
      "embla-carousel-react",
      "embla-carousel-wheel-gestures",
      "vaul",
    ],
  },
}

export default withBundleAnalyzer(withNextIntl(nextConfig))
