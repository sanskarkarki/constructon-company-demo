import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { projects } from "@/lib/site";
type Project = (typeof projects)[number];
export default function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return <Link href={`/projects/${project.slug}`} className="group block" data-reveal>
    <div className={`relative overflow-hidden bg-[#262923] ${compact ? "aspect-[4/3]" : "aspect-[4/3]"}`} data-image-reveal>
      <Image src={project.image} alt={project.name} fill sizes="(max-width: 700px) 100vw, 50vw" className="image-cover transition-transform duration-700 group-hover:scale-[1.045]" />
      <span className="absolute left-4 top-4 z-10 bg-[#171916]/80 px-3 py-2 text-[9px] uppercase tracking-[.15em] text-[#c5a46d]">{project.status}</span>
      <span className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center border border-white/60 bg-black/10 transition-all group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d] group-hover:text-[#171916]"><ArrowUpRight size={17}/></span>
    </div>
    <div className="mt-5 flex items-start justify-between gap-4"><div><p className="mb-2 text-[9px] uppercase tracking-[.18em] text-[#c5a46d]">{project.type} <span className="mx-2 text-white/30">/</span> {project.year}</p><h3 className="font-serif text-2xl font-normal tracking-tight md:text-3xl">{project.name}</h3><p className="mt-2 text-xs text-white/45">{project.location}</p></div><span className="pt-1 text-xs text-white/35">{project.number}</span></div>
  </Link>;
}
