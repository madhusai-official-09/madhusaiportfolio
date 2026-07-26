"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { LuX } from "react-icons/lu";
import { useEffect } from "react";
import { Certificate } from "./certificates";

interface Props {
  certificate: Certificate | null;
  open: boolean;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  open,
  onClose,
}: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[100]
            bg-black/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-6
          "
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-6xl
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-surface
              shadow-2xl
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <h2 className="text-2xl font-bold text-text">
                  {certificate.title}
                </h2>

                <p className="text-primary">{certificate.issuer}</p>
              </div>

              <button
                onClick={onClose}
                className="
                  h-10
                  w-10
                  rounded-full
                  bg-primary/10
                  hover:bg-primary
                  transition
                  flex
                  items-center
                  justify-center
                "
              >
                <LuX className="text-xl" />
              </button>
            </div>

            {/* Certificate */}

            <div className="relative w-full h-[80vh] bg-white">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
