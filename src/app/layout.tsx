import type { Metadata } from "next";

import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { localesConfig } from "@/i18n";

export const metadata: Metadata = {
  title: "Dastan Abikov",
  description: "Dastan Abikov",
  icons: {
    icon: "/favicon.svg",
  },
};

export function generateStaticParams() {
  return localesConfig.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
      lang={locale}
    >
      <body className={`min-h-svh max-w-[100vw] font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
