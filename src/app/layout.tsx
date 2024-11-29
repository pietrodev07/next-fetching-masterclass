import "./globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { siteConfig } from "@/config/site";
import { Bricolage_Grotesque } from "next/font/google";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  keywords: siteConfig.keywords,
  description: siteConfig.description,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
