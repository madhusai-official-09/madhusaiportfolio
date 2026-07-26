"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { Certificate } from "./certificates";

interface Props {
  certificate: Certificate;
  onClick: () => void;
  index: number;
}

export default function CertificateCard({
  certificate,
  onClick,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div
        className="
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-surface
        transition-all
        duration-300
        group-hover:border-primary
        group-hover:shadow-[0_20px_60px_rgba(0,255,180,0.25)]
      "
      >
        {/* Certificate Image */}

        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="
              object-contain
              bg-white p-3 
              rounded-xl
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          {/* Overlay */}

          <div
            className="
            absolute
            inset-0
            bg-black/0
            group-hover:bg-black/35
            transition-all
            duration-300
            flex
            items-center
            justify-center
          "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="
                opacity-0
                group-hover:opacity-100
                px-5
                py-3
                rounded-full
                bg-primary
                text-white
                flex
                items-center
                gap-2
                font-medium
              "
            >
              View Certificate
              <LuArrowUpRight />
            </motion.div>
          </div>
        </div>

        {/* Content */}

        <div className="p-5 space-y-2">
          <h3 className="text-xl font-bold text-text">
            {certificate.title}
          </h3>

          <p className="text-primary font-medium">
            {certificate.issuer}
          </p>

          <p className="text-sm text-zinc-400">
            {certificate.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
}