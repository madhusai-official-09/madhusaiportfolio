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
      projectId="madhu_b20ba81a7fd04e2cb51ab0bdebc33272"
      backendUrl="https://madhu-ai-backend.onrender.com"
    />
  );
}