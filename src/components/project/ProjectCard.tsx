"use client";

import Link from "next/link";
import { LuExternalLink, LuGithub, LuArrowLeft } from "react-icons/lu";
import TiltedCard from "@/components/TiltedCard";

interface ProjectCardProps {
  title: string;
  description: string;
  liveURL?: string;
  githubURL: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  liveURL,
  githubURL,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <div className="w-full">
      <div className="group relative w-full">
        <TiltedCard
          imageSrc={image}
          altText={title}
          captionText={title}
          containerWidth="100%"
          containerHeight="420px"
          imageWidth="100%"
          imageHeight="100%"
          rotateAmplitude={5}
          scaleOnHover={1.015}
          glare={0.18}
          glareColor="#ffffff"
          shadow={0.25}
          parallax={0.25}
          showTooltip={false}
          intro={false}
          radius={22}
          perspective={1100}
          smoothness={0.75}
          gyroscope={false}
          flipOnClick={true}
          backContent={
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-white/15 bg-zinc-950/65 p-5 text-white backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_40px_rgba(0,0,0,0.3)] sm:p-6">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-500/10 blur-3xl" />
              <div className="relative z-10 mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                  Project overview
                </span>
              </div>

              <h3 className="relative z-10 line-clamp-2 text-base font-semibold leading-snug text-white sm:text-lg">
                {title}
              </h3>

              <p className="relative z-10 mt-3 line-clamp-5 text-xs leading-relaxed text-white/70 sm:text-[13px]">
                {description}
              </p>

              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] text-white/70"
                  >
                    {tag}
                  </span>
                ))}
                {tags.length > 6 && (
                  <span className="rounded-full border border-red-400/20 bg-red-500/10 px-2.5 py-1 text-[10px] text-red-300">
                    +{tags.length - 6}
                  </span>
                )}
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                {liveURL ? (
                  <Link
                    href={liveURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-red-300 sm:text-sm"
                  >
                    <LuExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                ) : (
                  <span />
                )}

                {githubURL && (
                  <Link
                    href={githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-red-300 sm:text-sm"
                  >
                    <LuGithub className="h-4 w-4" />
                    GitHub
                  </Link>
                )}
              </div>

              <div className="pointer-events-none absolute bottom-1.5 left-1/2 flex -translate-x-1/2 items-center gap-1 text-[9px] text-white/30">
                <LuArrowLeft className="h-3 w-3" />
                Click to flip back
              </div>
            </div>
          }
        >
          {/* Bottom glass overlay; image is sized to fill the card */}
          <div className="absolute inset-x-0 bottom-0 z-10 rounded-b-[22px] border-t border-white/15 bg-black/35 px-5 py-4 backdrop-blur-md sm:px-6">
            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0">
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-white drop-shadow sm:text-base">
                  {title}
                </h3>
                <p className="mt-1.5 text-[11px] text-white/60 sm:text-xs">
                  Click to view details
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] text-white/75 backdrop-blur-lg">
                Flip ↻
              </span>
            </div>
          </div>
        </TiltedCard>
      </div>
    </div>
  );
}
