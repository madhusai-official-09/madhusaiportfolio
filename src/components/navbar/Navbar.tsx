"use client";

import { useEffect, useState, useRef } from "react";
import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { motion, AnimatePresence } from "framer-motion";


export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [showBatman, setShowBatman] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    //return a clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(pointer:fine)");

    setIsDesktop(media.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/40 backdrop-blur-2xl border-b border-white/10" : "bg-transparent"}`}
      >
        <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex items-center justify-between">
          {/* logo */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (isDesktop) setShowBatman(true);
            }}
            onMouseLeave={() => {
              if (isDesktop) setShowBatman(false);
            }}
          >
            <Logo />

            <AnimatePresence>
              {showBatman && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-[110%] left-0 w-[360px] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl backdrop-blur-xl z-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 pointer-events-none" />

                  <video
                    ref={videoRef}
                    src="/Batman.mp4"
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/*desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_35px_rgba(0,0,0,.35)]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <LinkButton
              variant="outline"
              iconPosition="left"
              icon={LuDownload}
              rounded
              text="Resume"
              href="/public/Resume Madhusayi DA.pdf"
              download
            />
          </div>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="font-ui uppercase tracking-wide z-50 lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 text-text hover:border-primary hover:text-primary transition"
          >
            {navOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>
      </nav>

      <MobileNav navOpen={navOpen} />
    </>
  );
}
