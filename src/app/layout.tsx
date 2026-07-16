import type { Metadata } from "next";
import {
  Poppins,
  Geist, Black_Ops_One, JetBrains_Mono, Pixelify_Sans,Abril_Fatface,} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";

const hero = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hero",
});

const heading = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-body",
});

const ui = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "Madhusai's Portfolio",
  description:
    "A portfolio website showcasing the work and projects of Madhusai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hero.variable} ${heading.variable} ${body.variable} ${ui.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
