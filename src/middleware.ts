import createMiddleware from "next-intl/middleware"
import { localePrefix, defaultLocale, locales, pathnames } from "./config"

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
})

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",

    // // Enable a redirect to a matching locale at the root
    // "/",

    // // Set a cookie to remember the previous locale for
    // // all requests that have a locale prefix
    // "/(ru|en|ky)/:path*",

    // // Enable redirects that add missing locales
    // // (e.g. `/pathnames` -> `/en/pathnames`)
    // "/((?!_next|_vercel|.*\\..*).*)",
  ],
}
