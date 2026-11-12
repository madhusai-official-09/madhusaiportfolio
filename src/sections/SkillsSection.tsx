"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import OrbitImages from "@/components/OrbitImages";

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
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) setScreenSize("mobile");
      else if (window.innerWidth < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const orbitSettings = {
    mobile: { radiusX: 430, radiusY: 210, itemSize: 92, height: "clamp(330px, 105vw, 430px)", centerWidth: "w-[190px]" },
    tablet: { radiusX: 460, radiusY: 235, itemSize: 100, height: "clamp(400px, 58vw, 560px)", centerWidth: "w-[230px]" },
    desktop: { radiusX: 460, radiusY: 250, itemSize: 108, height: "clamp(460px, 54vw, 680px)", centerWidth: "w-[300px]" },
  }[screenSize];

  const orbitCenter = (
    <motion.div
      key={activeSkill.name}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`relative ${orbitSettings.centerWidth} max-w-[78vw] rounded-2xl border border-primary/30 bg-black/90 p-2.5 text-center shadow-[0_0_45px_rgba(255,0,0,0.18)] backdrop-blur-2xl sm:rounded-3xl sm:p-3 lg:p-5`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-primary/5" />
      <div className="relative z-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background shadow-[0_0_25px_rgba(255,0,0,0.12)] sm:h-14 sm:w-14 lg:h-20 lg:w-20">
          <Image
            src={activeSkill.icon}
            alt={activeSkill.name}
            width={40}
            height={40}
            unoptimized
          />
        </div>
        <h2 className="mt-2 text-lg font-bold text-text sm:mt-3 sm:text-xl lg:mt-4 lg:text-2xl">{activeSkill.name}</h2>
        <p className="mt-1 font-medium text-primary">{activeSkill.category}</p>
        <p className="mt-2 text-xs leading-5 text-gray-400 sm:mt-3 sm:text-sm sm:leading-6">{activeSkill.desc}</p>
        <div className="mt-3 border-t border-border pt-3 sm:mt-4 sm:pt-4 lg:mt-5">
          <h4 className="mb-2 text-xs font-semibold text-primary sm:mb-3 sm:text-sm">
            Related Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {activeSkill.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[10px] text-primary sm:px-3 sm:text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-3 text-[10px] text-gray-500 sm:mt-4 sm:text-xs">Click an orbiting skill to explore</p>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto w-[90%] max-w-6xl space-y-12">
        <SectionHeader
          title="My"
          highlight="Skills"
          badge="Expertise"
          description="Technologies I use to build modern AI, Data Analytics, and Full Stack applications."
        />

        <div className="relative mt-12 lg:mt-16">
          <div className="w-full overflow-hidden">
            <OrbitImages
              images={skills.map((skill) => ({ src: skill.icon, alt: skill.name }))}
              shape="ellipse"
              baseWidth={1400}
              radiusX={orbitSettings.radiusX}
              radiusY={orbitSettings.radiusY}
              width="100%"
              height={orbitSettings.height}
              itemSize={orbitSettings.itemSize}
              duration={42}
              direction="normal"
              fill
              depth={0.72}
              itemRadius="18px"
              shadow={0.65}
              hoverScale={1.18}
              hoverSpeed={0.22}
              draggable
              clickToFront
              intro
              showPath
              pathColor="rgba(255, 35, 35, 0.28)"
              pathWidth={1.5}
              pathDash={5}
              onItemClick={(index) => setActiveSkill(skills[index])}
              centerContent={orbitCenter}
              className="mx-auto max-w-6xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
