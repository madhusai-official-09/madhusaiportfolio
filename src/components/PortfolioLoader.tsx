"use client";

import { useEffect, useState } from "react";
import LatticeLoader from "@/components/LatticeLoader";
import "./PortfolioLoader.css";

export default function PortfolioLoader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Keep the intro loader visible briefly so the animation is noticeable.
    const fadeTimer = window.setTimeout(() => setFade(true), 1500);
    const hideTimer = window.setTimeout(() => setVisible(false), 1950);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`portfolio-loader-screen${fade ? " portfolio-loader-screen--fade" : ""}`}
      aria-label="Loading portfolio"
      aria-busy={!fade}
    >
      <div className="portfolio-loader-content">
        <LatticeLoader
          label="INITIALIZING PORTFOLIO"
          status="working"
          pattern="orbit"
          grid={4}
          shape="square"
          color="#f4f4f5"
          doneColor="#ef4444"
          cellSize={9}
          gap={3}
          fontSize={11}
          step={80}
          idleOpacity={0.16}
          glow
          glowColor="#ef4444"
          showTimer={false}
        />
        <p className="portfolio-loader-caption">MADHUSAI · PORTFOLIO</p>
      </div>
    </div>
  );
}
