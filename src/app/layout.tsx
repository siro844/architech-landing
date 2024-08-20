import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArchiTech Landing Page",
  description: "Celebrate the joy of design with a platform tailored to help architects create and refine their floorplans, turning visions into reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}