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
      projectId="madhu_50c74c4828114b289c0623acb9092ec0"
      backendUrl="https://madhu-ai-backend.onrender.com"
    />
  );
}