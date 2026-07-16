"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/project/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

const projects = [
  {
    title: "Smart Restaurant Management System Using QR Code",
    description:
      "A full-stack restaurant management web application that enables customers to scan a QR code placed on each table to access the digital menu, place orders, and track order status in real time. The system includes an admin dashboard for managing menu items, tables, and customer orders, providing a seamless, contactless dining experience. Built with modern web technologies, it features a responsive UI, secure backend APIs, and MongoDB database integration.",
    image: "/images/srm.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "MongoDB",
      "REST API",
      "Vercel",
    ],
    liveURL: "https://smart-resturant-using-qr-latest.vercel.app/",
    githubURL:
      "https://github.com/madhusai-official-09/smart-resturant-using-qr-latest.git",
  },
  {
    title: "Real-Time Object Detection Using Python",
    description:
      "A real-time object detection system that uses a webcam to identify and track multiple objects with high accuracy using the YOLO (You Only Look Once) deep learning model. The application captures live video frames, performs real-time inference, draws bounding boxes with class labels and confidence scores, and streams detection results through a FastAPI backend. Designed for high performance and low latency, the project demonstrates practical applications of computer vision in surveillance, automation, and smart monitoring systems.",
    image: "/images/rtd.png",
    tags: [
      "Python",
      "YOLO",
      "Ultralytics",
      "OpenCV",
      "Deep Learning",
      "FastAPI",
      "NumPy",
      "Machine Learning",
      "Docker",
      "Uvicorn",
    ],
    liveURL: "https://frontend-v3kp.vercel.app/",
    githubURL:
      "https://github.com/madhusai-official-09/real-time-object-detection-frontend.git",
  },
  {
    title: "Vendor Performance Dashboard",
    description:
      "A business intelligence dashboard developed using Python, SQL, Excel, and Power BI to analyze vendor sales, purchases, profitability, inventory turnover, and vendor contribution.",
    image: "/images/vp.png",
    tags: [
      "Python",
      "Pandas",
      "Numpy",
      "SQL",
      "PowerBI",
      "Excel",
      "Data Analysis",
    ],
    githubURL:
      "https://github.com/madhusai-official-09/Vendor_Performance_Dashboard.git",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 relative">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10"
      />
      <div className="w-[90%] max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Some of my recent"
            highlight="work"
            badge="Projects"
            description="A collection of real-world projects showcasing my expertise in Full-Stack Development, Artificial Intelligence, Computer Vision, and Data Analytics."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} key={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
