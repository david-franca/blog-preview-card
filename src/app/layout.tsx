import type { Metadata, Viewport } from "next";
import "./globals.css";

import { fonts } from "./fonts";

export const metadata: Metadata = {
  title: "Blog preview card",
  description:
    "This is a solution to the Blog preview card challenge on Frontend Mentor.",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4D04E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.figtree.variable}>{children}</body>
    </html>
  );
}
