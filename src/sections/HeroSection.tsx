"use client";
import DotGrid from "@/components/hero/background";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { LuArrowRight, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-30 py-10"
    >
      {/* background glow*/}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />

      {/* background */}
      <div className="inset-0 absolute">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2F293A"
          activeColor="#20b2a6"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      {/* content */}
      <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/*leftside */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-hero text-7xl md:text-9xl lg:text-6xl font-bold mb-4 text-text/90">
            Hi, I'm{" "}
            <span className="text-primary/70">
              Pitani MadhuSayi Krishna M P Rao
            </span>
          </h1>
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm border border-border">
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
          <p className="text-gray-400 max-w-lg tracking-wide">
            Full-Stack Developer | AI & Data Analytics Enthusiast crafting
            responsive web applications, intelligent systems, and data-driven
            solutions with modern technologies like Next.js, React, TypeScript,
            Python, and MongoDB.
          </p>

          <motion.div
            className="flex items-center gap-3 pt-2"
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
                boxShadow: "0 0 25px rgba(59,130,246,0.6)",
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
                boxShadow: "0 0 25px rgba(59,130,246,0.6)",
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
                boxShadow: "0 0 25px rgba(59,130,246,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full
             bg-primary/25 text-white"
            >
              <LuMail size={24} />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 pt-2"
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
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-74 h-74 md:w-80 md:h-80 rounded-full bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/*image glow*/}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <Image
              fill
              src="/images/profilepics.png"
              alt="profile"
              priority
              className="z-10 object-cover rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
