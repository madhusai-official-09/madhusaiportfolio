"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import CertificateCard from "@/components/certificates/CertificateCard";
import CertificateModal from "@/components/certificates/CertificateModal";
import {
  certificates,
  Certificate,
} from "@/components/certificates/certificates";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CertificatesSection() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />

      </div>

      <div className="w-[92%] max-w-7xl mx-auto">

        {/* Heading */}
        <SectionHeader title="My"
        highlight="Certificates"
        badge="Certifications"
        description="Industry certifications, cloud training, virtual internships
            and professional programs that strengthened my skills in
            Full Stack Development, Artificial Intelligence and Cloud
            Computing."/>


        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {certificates.map((certificate, index) => (

            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              onClick={() => setSelected(certificate)}
            />

          ))}

        </div>

      </div>

      {/* Modal */}

      <CertificateModal
        open={selected !== null}
        certificate={selected}
        onClose={() => setSelected(null)}
      />

    </section>
  );
}