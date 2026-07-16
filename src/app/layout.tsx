import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:["300","400","500","600","700","800"]
})
export const metadata: Metadata = {
  title: "Madhusai's Portfolio",
  description: "A portfolio website showcasing the work and projects of Madhusai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", poppins.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
