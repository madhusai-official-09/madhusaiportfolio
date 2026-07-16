"use client";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Bonam Venkata Chalamayya Engineering College",
    company: "Bachelor of Technology in (CSE - AI & DS)",
    period: "2022-2026",
    logo: "/images/bvc.png",
    description:
      "Specialized in AI, ML, Data Science, and Deep Learning, with hands-on experience in Python and advanced data visualization using Power BI.",
    achievements: [
      "Published IJRASET Research Paper",
      "Completed 4 internships",
      "ServiceNow Certified System Administrator",
    ],
  },
  {
    role: "Sri Chaitanya Junior College",
    company:
      "Higher Secondary Education in MPC (Mathematics, Physics, Chemistry)",
    period: "2020-2022",
    logo: "/images/srichaitanya.jpg",
    description:
      "Pursued MPC (Physics, Chemistry, Mathematics) during intermediate college, where I developed strong analytical, logical, and problem-solving skills that support my technical and programming expertise.",
    achievements: ["Completed MPC", "Strong Mathematics foundation"],
  },
  {
    role: "Excelsior Model School",
    company: "Secondary Education in General Studies",
    period: "2019-2020",
    logo: "/images/schoollogo.jpg",
    description:
      "Completed primary and secondary education with focus on mathematics and science subjects.",
    achievements: ["SSC", "Excellent academic performance"],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="My"
            highlight="Education"
            badge="Education"
            description="A journey of continuous learning, academic excellence, and building a strong foundation in AI, Data Analytics, and Full Stack Development."
          />
        </motion.div>

        <div className="relative mt-14">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b animate-pulse from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
          />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"
                  animate={{
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                </motion.div>
                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(32, 178,166,0.18",
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500"
                  >
                    <div
                      className={`flex items-center gap-4 mb-5 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                      <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-md flex items-center justify-center">
                        <Image
                          src={exp.logo}
                          alt={exp.role}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-primary text-sm font-medium">
                        {exp.period}
                      </span>

                      <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                    </div>
                    <p className="text-primary/80 font-medium mt-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-400 mt-4 leading-7">
                      {exp.description}
                    </p>
                    <div className="mt-5">
                      <h4 className="text-primary text-sm font-semibold mb-3 uppercase tracking-wide">
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item) => (
                          <motion.li
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            key={item}
                            className={`flex items-center gap-2 text-sm text-gray-300 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                          >
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
