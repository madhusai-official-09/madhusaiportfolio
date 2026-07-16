"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

type Skill = {
  name: string;
  icon: string;
  category: string;
  desc: string;
  tech: string[];
  x: string;
  y: string;
};

const skills: Skill[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
    desc: "Modern UI Library",
    tech: ["Next.js", "TypeScript", "Tailwind", "HTML", "CSS"],
    x: "22%",
    y: "12%",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Programming",
    desc: "AI & Backend",
    tech: ["FastAPI", "OpenCV", "YOLO", "Pandas"],
    x: "74%",
    y: "12%",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
    desc: "NoSQL Database",
    tech: ["Atlas", "Mongoose", "Aggregation"],
    x: "8%",
    y: "36%",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
    desc: "Relational Database",
    tech: ["MySQL", "SQLite"],
    x: "84%",
    y: "40%",
  },
  {
    name: "Power BI",
    icon: "https://img.icons8.com/color/96/power-bi.png",
    category: "Analytics",
    desc: "Business Intelligence",
    tech: ["DAX", "Power Query", "Dashboard"],
    x: "86%",
    y: "64%",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
    desc: "React Framework",
    tech: ["SSR", "API Routes"],
    x: "60%",
    y: "84%",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps",
    desc: "Container Platform",
    tech: ["Compose", "Images"],
    x: "24%",
    y: "84%",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
    desc: "Version Control",
    tech: ["GitHub", "Branches"],
    x: "10%",
    y: "64%",
  },
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    category: "Cloud",
    desc: "Cloud Platform",
    tech: ["App Service", "Storage"],
    x: "44%",
    y: "86%",
  },
  {
    name: "Tailwind",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    category: "Frontend",
    desc: "CSS Framework",
    tech: ["Responsive", "Utility CSS"],
    x: "74%",
    y: "74%",
  },
];

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<Skill>(skills[0]);

  const particles = [
  { id: 0, left: "12%", top: "18%", delay: 0.1, duration: 4 },
  { id: 1, left: "26%", top: "65%", delay: 0.8, duration: 5 },
  { id: 2, left: "38%", top: "12%", delay: 1.4, duration: 4.5 },
  { id: 3, left: "52%", top: "82%", delay: 0.6, duration: 5.2 },
  { id: 4, left: "68%", top: "20%", delay: 1.2, duration: 4.8 },
  { id: 5, left: "84%", top: "56%", delay: 0.3, duration: 5 },
  { id: 6, left: "92%", top: "32%", delay: 1.6, duration: 4.6 },
  { id: 7, left: "18%", top: "86%", delay: 0.9, duration: 5.4 },
];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
      <div className="w-[90%] max-w-6xl mx-auto space-y-12">
        <SectionHeader
          title="My"
          highlight="Skills"
          badge="Expertise"
          description="Technologies I use to build modern AI, Data Analytics, and Full Stack applications."
        />

        <div className="relative mt-12 lg:mt-16">
          <div className="relative mx-auto hidden h-[760px] w-full max-w-6xl lg:block">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
            <div className="absolute left-1/2 top-1/2 h-560px w-560px -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />

            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="absolute left-1/2 top-1/2 z-30 w-330px -translate-x-1/2 -translate-y-1/2 rounded-4xl border border-primary/30 bg-surface/80 p-8 shadow-[0_0_50px_rgba(32,178,166,0.18)] backdrop-blur-xl lg:w-380px"
            >
              <div className="absolute inset-0 rounded-4xl bg-primary/5 blur-3xl" />
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.08 }}
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-background"
                >
                  <Image
                    src={activeSkill.icon}
                    alt={activeSkill.name}
                    width={58}
                    height={58}
                    unoptimized
                  />
                </motion.div>

                <h2 className="mt-6 text-3xl font-bold text-text">
                  {activeSkill.name}
                </h2>
                <p className="mt-2 font-medium text-primary">
                  {activeSkill.category}
                </p>
                <p className="mt-5 leading-7 text-gray-400">
                  {activeSkill.desc}
                </p>

                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="mb-4 font-semibold text-primary">
                    Related Technologies
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {activeSkill.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-8 text-sm text-gray-500">
                  Click any skill orb to explore more
                </p>
              </div>
            </motion.div>

            {skills.map((skill, index) => (
              <motion.button
                key={skill.name}
                type="button"
                aria-pressed={activeSkill.name === skill.name}
                onClick={() => setActiveSkill(skill)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { delay: index * 0.06 },
                  y: {
                    repeat: Infinity,
                    duration: 5 + index * 0.3,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.12, rotate: 4, y: -12 }}
                whileTap={{ scale: 0.96 }}
                style={{ left: skill.x, top: skill.y }}
                className={`absolute flex h-24 w-24 flex-col items-center justify-center rounded-2xl border bg-surface/90 backdrop-blur-lg transition-all duration-300 xl:h-28 xl:w-28 ${
                  activeSkill.name === skill.name
                    ? "border-primary bg-primary/10 shadow-[0_0_40px_rgba(32,178,166,0.35)]"
                    : "border-border bg-surface/70 hover:border-primary"
                }`}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  unoptimized
                />
                <span className="mt-2 text-sm font-semibold">{skill.name}</span>
              </motion.button>
            ))}

            {particles.map((particle) => (
              <motion.span
                key={particle.id}
                className="absolute h-1.5 w-1.5 rounded-full bg-primary/50"
                style={{ left: particle.left, top: particle.top }}
                animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.7, 1] }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          <div className="mt-10 lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-primary/25 bg-surface/80 p-6 shadow-[0_0_35px_rgba(32,178,166,0.12)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-background">
                  <Image
                    src={activeSkill.icon}
                    alt={activeSkill.name}
                    width={38}
                    height={38}
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text">
                    {activeSkill.name}
                  </h3>
                  <p className="text-sm text-primary">{activeSkill.category}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {activeSkill.desc}
              </p>
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <motion.button
                  key={skill.name}
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveSkill(skill)}
                  className={`rounded-2xl border p-4 text-center transition ${
                    activeSkill.name === skill.name
                      ? "border-primary bg-primary/10"
                      : "border-border bg-surface"
                  }`}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={28}
                      height={28}
                      unoptimized
                    />
                  </div>
                  <span className="mt-3 block text-sm font-medium">
                    {skill.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
