import createNextIntlPlugin from "next-intl/plugin"

import bundleAnalyzer from "@next/bundle-analyzer"
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default withBundleAnalyzer(withNextIntl(nextConfig))
