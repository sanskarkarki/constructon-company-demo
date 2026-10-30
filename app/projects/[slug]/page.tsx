import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, MapPin, CalendarDays, Layers3 } from "lucide-react";
import { projects } from "@/lib/site";
import type { Metadata } from "next";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return { title: project?.name ?? "Project", description: project?.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.findIndex(item => item.slug === slug) + 1) % projects.length];

  return <>
    <section className="container pb-12 pt-16 md:pb-16 md:pt-24">
      <Link href="/projects" className="mb-12 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.15em] text-white/55 hover:text-[#c5a46d]"><ArrowLeft size={14}/> All projects</Link>
      <p className="eyebrow">{project.type} / {project.year}</p>
      <h1 className="display mt-6 max-w-5xl text-5xl md:text-8xl">{project.name}</h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">{project.description}</p>
      <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-5">
        <span className="flex items-center gap-2 text-xs text-white/65"><MapPin size={14} className="text-[#c5a46d]"/>{project.location}</span>
        <span className="flex items-center gap-2 text-xs text-white/65"><CalendarDays size={14} className="text-[#c5a46d]"/>{project.year}</span>
        <span className="flex items-center gap-2 text-xs text-white/65"><Layers3 size={14} className="text-[#c5a46d]"/>{project.status}</span>
      </div>
    </section>
    <div className="relative h-[360px] md:h-[650px]" data-image-reveal><Image src={project.image} alt={`${project.name} architectural project`} fill priority sizes="100vw" className="image-cover"/></div>
    <section className="section-pad">
      <div className="container grid gap-12 md:grid-cols-[.7fr_1.3fr]">
        <aside className="h-fit md:sticky md:top-8">
          <p className="eyebrow">Project at a glance</p><h2 className="display mt-5 text-4xl md:text-5xl">The details behind the build.</h2>
          <div className="mt-8 border-t border-white/15">{[["Project type",project.type],["Location",project.location],["Year",project.year],["Status",project.status]].map(([label,value])=><div key={label} className="grid grid-cols-[110px_1fr] gap-4 border-b border-white/15 py-4"><span className="text-[9px] uppercase tracking-[.14em] text-white/40">{label}</span><span className="text-sm text-white/80">{value}</span></div>)}</div>
        </aside>
        <div className="space-y-12">
          <article data-reveal><p className="eyebrow">01 / Overview</p><h2 className="display mt-5 text-4xl md:text-5xl">The project brief.</h2><p className="mt-6 text-sm leading-8 text-white/65">{project.overview}</p></article>
          <article className="border-t border-white/15 pt-9" data-reveal><p className="eyebrow">02 / The challenge</p><h2 className="display mt-5 text-4xl md:text-5xl">What needed to work.</h2><p className="mt-6 text-sm leading-8 text-white/65">{project.challenge}</p></article>
          <article className="border-t border-white/15 pt-9" data-reveal><p className="eyebrow">03 / Our approach</p><h2 className="display mt-5 text-4xl md:text-5xl">How the work is considered.</h2><p className="mt-6 text-sm leading-8 text-white/65">{project.approach}</p></article>
          <article className="border-t border-white/15 pt-9" data-reveal><p className="eyebrow">04 / Scope of work</p><h2 className="display mt-5 text-4xl md:text-5xl">What the project covers.</h2><ul className="mt-6 space-y-4">{project.scope.map(item=><li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/75"><Check size={16} className="mt-1 shrink-0 text-[#c5a46d]"/>{item}</li>)}</ul></article>
          <article className="border-t border-white/15 pt-9" data-reveal><p className="eyebrow">05 / Materials & considerations</p><h2 className="display mt-5 text-4xl md:text-5xl">Chosen for purpose.</h2><p className="mt-5 text-sm leading-8 text-white/60">This section explains the material palette and practical considerations. Final specifications must be based on actual drawings, site conditions, and approved schedules.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{project.materials.map((item,index)=><div key={item} className="border border-white/15 p-4"><span className="text-[9px] tracking-[.16em] text-[#c5a46d]">MATERIAL / 0{index+1}</span><p className="mt-3 text-sm">{item}</p></div>)}</div></article>
          <article className="border-t border-white/15 pt-9" data-reveal><p className="eyebrow">06 / Outcome</p><h2 className="display mt-5 text-4xl md:text-5xl">The intended result.</h2><p className="mt-6 text-sm leading-8 text-white/65">{project.outcome}</p></article>
          <div className="border border-[#c5a46d]/30 bg-[#222520] p-5 md:p-6"><p className="text-[10px] uppercase tracking-[.16em] text-[#c5a46d]">Portfolio note</p><p className="mt-3 text-xs leading-6 text-white/45">{project.disclaimer}</p></div>
          <div className="border-t border-white/15 pt-9"><p className="eyebrow">Have a similar brief?</p><h2 className="display mt-5 text-4xl md:text-5xl">Let’s talk through the details.</h2><p className="mt-4 text-sm leading-7 text-white/55">Every site and client brief is different. Start a conversation to discuss the scope, constraints, and priorities of your project.</p><Link href="/contact" className="btn mt-7">Discuss a project <ArrowUpRight size={15}/></Link></div>
        </div>
      </div>
    </section>
    <Link href={`/projects/${next.slug}`} className="block border-t border-white/10 bg-[#222520] py-12 transition-colors hover:bg-[#292c26] md:py-16"><div className="container flex items-end justify-between gap-5"><div><p className="eyebrow">Next project</p><h2 className="display mt-4 text-3xl md:text-5xl">{next.name}</h2></div><ArrowUpRight size={25} className="mb-1 shrink-0 text-[#c5a46d]"/></div></Link>
  </>;
}
