import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://shopscrest.com"),
  title: {
    default: "ShopsCrest | Shopping Guides for Daily Essentials",
    template: "%s | ShopsCrest"
  },
  description:
    "ShopsCrest publishes shopping notes for electronics, apparel, skincare, home goods, travel essentials, and daily lifestyle products.",
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=8", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.svg?v=8", type: "image/svg+xml" },
      { url: "/assets/shopscrest-mark.svg?v=8", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico?v=8",
    apple: "/assets/shopscrest-mark.svg?v=8"
  },
  alternates: {
    canonical: "https://shopscrest.com"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="shopscrest-site-owner" content="shopscrest.com" />
        <meta name="verify-admitad" content="55fe10f140" />
        <link rel="icon" href="/favicon.ico?v=8" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.ico?v=8" />
        <link rel="icon" href="/favicon.svg?v=8" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/shopscrest-mark.svg?v=8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
