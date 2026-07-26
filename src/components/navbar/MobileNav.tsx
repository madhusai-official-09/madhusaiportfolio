"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuDownload,
  LuX,
} from "react-icons/lu";

import { navLinks } from "./Navbar";

interface MobileNavProps {
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
}

const sidebarVariants: Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 25,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function MobileNav({
  navOpen,
  setNavOpen,
}: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <AnimatePresence>
      {navOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setNavOpen(false)}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md lg:hidden"
          />

          {/* Sidebar */}
          <motion.aside
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed
              right-0
              top-0
              z-50
              h-screen
              w-[82%]
              max-w-sm
              overflow-hidden
              border-l
              border-white/10
              bg-linear-to-br
              from-[#0f172a]
              via-[#111827]
              to-[#020617]
              backdrop-blur-2xl
              shadow-[0_0_60px_rgba(0,0,0,.35)]
              lg:hidden
            "
          >
            {/* Gradient Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.18),transparent_45%)]" />

            {/* Floating Glow 1 */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                x: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
              }}
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
            />

            {/* Floating Glow 2 */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
              }}
              className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"
            />

            {/* Close Button */}
            <button
              onClick={() => setNavOpen(false)}
              className="absolute right-6 top-6 z-20 rounded-full border border-border bg-background/40 p-2 backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-primary hover:text-white"
            >
              <LuX size={22} />
            </button>

            <div className="relative z-10 flex h-full flex-col justify-between py-20">
              {/* Navigation */}
              <ul className="space-y-3 px-8">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={itemVariants}
                    whileHover={{
                      x: 10,
                      scale: 1.03,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setNavOpen(false)}
                      className={`group relative flex items-center justify-center overflow-hidden rounded-xl py-4 text-lg font-semibold transition-all duration-300 ${
                        pathname === link.href
                          ? "bg-primary text-white shadow-lg shadow-primary/20"
                          : "hover:bg-primary/10"
                      }`}
                    >
                      <span className="absolute inset-0 scale-x-0 rounded-xl bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 transition-transform duration-300 group-hover:scale-x-100" />

                      <span className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom */}
              <motion.div
                variants={itemVariants}
                className="space-y-8 px-8"
              >
                {/* Resume Button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                  <LuDownload />
                  Resume
                </a>

                {/* Social Icons */}
                <div className="flex justify-center gap-6">
                  {[
                    {
                      icon: LuGithub,
                      href: "https://github.com/madhusai-official-09",
                    },
                    {
                      icon: LuLinkedin,
                      href: "https://www.linkedin.com/in/pitani-madhusayi/",
                    },
                    {
                      icon: LuMail,
                      href: "mailto:madhusaipitani95@gmail.com",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          y: -8,
                          scale: 1.2,
                          rotate: 8,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/40 backdrop-blur-md transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_30px_rgba(59,130,246,.35)]"
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Footer */}
                <motion.p
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="text-center text-xs text-muted-foreground"
                >
                  Designed & Built by{" "}
                  <span className="font-semibold text-primary">
                    MadhuSai
                  </span>
                </motion.p>
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}