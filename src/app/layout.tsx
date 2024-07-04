import type { Metadata } from "next";

import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "GoEngine | Digital Agency for Web Development, SEO, and Marketing",
  description:
    "GoEngine - Your partner in digital success. We offer comprehensive digital solutions including website development, SEO optimization, and digital marketing to help your business thrive online.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`min-h-svh max-w-[100vw] font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
