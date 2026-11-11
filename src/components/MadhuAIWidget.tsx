"use client";

import dynamic from "next/dynamic";
import "madhu-ai/style.css";

const MadhuAIWidget = dynamic(
  () => import("madhu-ai").then((mod) => mod.MadhuAIWidget),
  { ssr: false },
);

export default function PortfolioMadhuAI() {
  return (
    <MadhuAIWidget
      projectId="madhu_f6552a818cb84b5994615101a44a21c2"
      backendUrl="https://madhu-ai-backend.onrender.com"
    />
  );
}
