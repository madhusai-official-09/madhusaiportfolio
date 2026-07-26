"use client";
import DotGrid from "@/components/hero/background";
import LinkButton from "@/components/ui/LinkButton";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { LuArrowRight, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { Doto, Gloria_Hallelujah } from "next/font/google";
import Lanyard from "@/components/Lanyard";

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
});

const handwritten = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwritten",
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-28 md:pt-32 pb-16"
    >
      {/* background glow*/}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

      {/* background */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,.15),transparent_70%)]" />
      <div className="inset-0 absolute">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2F293A"
          activeColor="#ef4444"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      {/* content */}
      <div className="relative z-10 w-[92%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-24 xl:gap-24">
        {/*leftside */}
        <motion.div
          className="space-y-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-handwritten font-bold leading-[1.05] text-center lg:text-left">
            <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              Hi, I'm
            </span>

            <span
              className="
      block
      mt-2
      text-primary
      text-4xl
      sm:text-5xl
      md:text-5xl
      lg:text-6xl
      xl:text-6xl
      wrap-break-word
    "
            >
              Pitani MadhuSai
            </span>
          </h1>
          <div className="font-doto font-bold inline-flex items-center justify-center mx-auto lg:mx-0 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm border border-border">
            <Typewriter
              options={{
                strings: [
                  "• Full-Stack Developer",
                  "• AI/ML Engineer",
                  "• Data Analyst",
                  "• Python Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 70,
              }}
            />
          </div>
          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 leading-8 tracking-wide">
            Full-Stack Developer | AI & Data Analytics Enthusiast crafting
            responsive web applications, intelligent systems, and data-driven
            solutions with modern technologies like Next.js, React, TypeScript,
            Python, and MongoDB.
          </p>

          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://linkedin.com/in/pitanimadhusayi"
              target="_blank"
              whileHover={{
                y: -6,
                scale: 1.15,
                boxShadow: "0 0 25px rgba(239,68,68,.45)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full
             bg-primary/25 text-white"
            >
              <LuLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/madhusai-official-09"
              target="_blank"
              whileHover={{
                y: -6,
                scale: 1.15,
                boxShadow: "0 0 25px rgba(239,68,68,.45)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full
             bg-primary/25 text-white"
            >
              <LuGithub size={24} />
            </motion.a>
            <motion.a
              href="mailto:22221a4545@gmail.com"
              target="_blank"
              whileHover={{
                y: -6,
                scale: 1.15,
                boxShadow: "0 0 25px rgba(239,68,68,.45)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full
             bg-primary/25 text-white"
            >
              <LuMail size={24} />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <LinkButton
              text="Get in touch"
              href="#contact"
              rounded
              icon={LuArrowRight}
            />
            <LinkButton
              text="View Projects"
              href="#projects"
              rounded
              variant="outline"
            />
          </motion.div>
        </motion.div>
        {/*rightside */}
        <motion.div
          className="flex justify-center items-center w-full mt-10 lg:mt-0 min-h-["
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative flex items-center justify-center"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/*image glow*/}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-primary/15 blur-[120px]"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <Lanyard
              position={[0, 0, 22]}
              gravity={[0, -30, 0]}
              frontImage="/images/id-front.png"
              backImage="/images/id-back.png"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
