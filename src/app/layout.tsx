import type { Metadata } from "next";
import {
  Poppins,
  Geist, Black_Ops_One, JetBrains_Mono, Trocchi,Kalam,Gloria_Hallelujah,Notable,Doto,Pixelify_Sans,Abril_Fatface,} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

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

const subheading = Trocchi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-subheading",
});

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto"
});

const accentBold = Notable({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-accent-bold",
});

const body = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-body",
});

const handwritten = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwritten",
});

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-kalam",
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
      className={`${hero.variable} ${heading.variable} ${body.variable} ${ui.variable} ${subheading.variable} ${doto.variable} ${accentBold.variable} ${handwritten.variable} ${kalam.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
