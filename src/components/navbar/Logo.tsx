import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center">
      <h1 className="font-display text-3xl tracking-[0.15em] text-white transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,.45)]">
        MADHUSAI
      </h1>
    </Link>
  );
}