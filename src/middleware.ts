import createMiddleware from "next-intl/middleware";
import { localesConfig } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales: localesConfig,

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|en)/:path*"],
};
