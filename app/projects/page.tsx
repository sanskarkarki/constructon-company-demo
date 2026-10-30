"use client";
import { useMemo, useState } from "react";
import type { Metadata } from "next";
import { projects } from "@/lib/site";
import ProjectCard from "@/components/ProjectCard";
const categories = ["All", ...Array.from(new Set(projects.map(p => p.type)))];
export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter(p => p.type === active), [active]);
  return <>
    <section className="container pb-12 pt-20 md:pb-16 md:pt-28"><p className="eyebrow">Selected projects</p><h1 className="display mt-7 max-w-5xl text-6xl md:text-8xl">The work speaks<br/><span className="gold italic">for itself.</span></h1><p className="mt-8 max-w-xl text-sm leading-7 text-white/60">A selection of residential, commercial, and civil work. Each project begins with a clear purpose and is shaped by the people who will use it.</p></section>
    <section className="container pb-24"><div className="mb-10 flex flex-wrap gap-2 border-b border-white/15 pb-5">{categories.map(cat=><button key={cat} onClick={()=>setActive(cat)} className={`border px-4 py-3 text-[9px] uppercase tracking-[.14em] transition-colors ${active === cat ? "border-[#c5a46d] bg-[#c5a46d] text-[#171916]" : "border-white/20 text-white/60 hover:border-[#c5a46d] hover:text-[#c5a46d]"}`}>{cat}</button>)}</div><div className="grid gap-x-7 gap-y-12 md:grid-cols-2">{filtered.map(p=><ProjectCard key={p.slug} project={p}/>)}</div><p className="mt-12 text-xs text-white/35">Portfolio shown for demonstration purposes. Replace sample projects, imagery, locations, and statuses with verified company information before publishing.</p></section>
  </>;
}
