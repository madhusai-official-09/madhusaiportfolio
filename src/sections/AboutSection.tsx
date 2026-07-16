"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuCode, LuDatabase, LuRocket } from "react-icons/lu";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 overflow-hidden relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* leftside */}
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{
              rotate: -2,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl"
            />
            <div className="w-[85%] h-[85%] relative">
              <Image
                fill
                src="/images/profilepics.png"
                alt="About me"
                className="z-10 object-cover rounded-xl"
                priority
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 450px"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* rightside */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-border inline-block">
            About Me
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text leading-tight"
          >
            I build scalable and user-focused web applications
          </motion.h2>

          <p className="font-body text-zinc-400 max-w-xl ">
            Alongside web development, I have hands-on experience in Artificial
            Intelligence, Machine Learning, Data Analytics, and Computer Vision.
            I continuously explore new technologies and enjoy solving real-world
            problems through clean code, automation, and intuitive user
            experiences.
          </p>
          <p className="font-body text-zinc-400 max-e-xl">
            over time, I&apos;ve worked with tools like TypeScript,Mongodb, and
            modern UI systems to create projects that are both functional and
            production-ready.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="p-4 rounded-xl bg-surface border border-border text-center"
            >
              <LuCode className="mx-auto mb-2 text-primary w-6 h-6" />
              <p className="font-body text-zinc-400 text-sm">Fullstack Development</p>
            </motion.div>
            <div className="p-4 rounded-xl bg-surface border border-border text-center">
              <LuDatabase className="mx-auto mb-2 text-primary w-6 h-6" />
              <p className="text-text text-sm">AI & Data Analytics</p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border text-center">
              <LuRocket className="mx-auto mb-2 text-primary w-6 h-6" />
              <p className="text-text text-sm">Fast & Scalable Solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
