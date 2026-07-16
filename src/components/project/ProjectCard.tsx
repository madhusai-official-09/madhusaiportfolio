import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuGithub } from "react-icons/lu";

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
    <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-surface border border-border transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_35px_rgba(32,178,166,0.18)]">
      {/* image */}
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          width={1280}
          height={720}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      {/* contant */}
      <div className="p-6 flex flex-col flex-1 gap-5">
        <h3 className="text-xl font-semibold text-text group-hover:text-primary transition">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-7 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 ">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background transition"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* links */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
          {liveURL && (
            <Link
              href={liveURL}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-primary transition"
            >
              <LuExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Live
            </Link>
          )}
          {githubURL && (
            <Link
              href={githubURL}
              target="_blank"
              className="flex items-center gap-1 text-sm text-text-muted hover:text-primary transition"
            >
              <LuGithub className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Github
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
