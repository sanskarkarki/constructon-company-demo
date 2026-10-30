import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { members } from "@/lib/site";
import type { Metadata } from "next";

export function generateStaticParams() { return members.map(member => ({ slug: member.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = members.find(item => item.slug === slug);
  return { title: member?.name ?? "Team member", description: member?.summary };
}
export default async function MemberDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = members.find(item => item.slug === slug);
  if (!member) notFound();
  return <>
    <section className="container pb-12 pt-16 md:pb-16 md:pt-24"><Link href="/members" className="mb-12 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.15em] text-white/55 hover:text-[#c5a46d]"><ArrowLeft size={14}/> All team members</Link><p className="eyebrow">Meet the team</p><h1 className="display mt-6 text-6xl md:text-8xl">{member.name}</h1><p className="mt-5 text-xs uppercase tracking-[.2em] text-[#c5a46d]">{member.designation}</p></section>
    <section className="section-pad bg-[#222520]"><div className="container grid items-start gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-20">
      <div className="relative aspect-[4/5] overflow-hidden" data-image-reveal><Image src={member.image} alt={member.name} fill priority sizes="(max-width: 700px) 100vw, 45vw" className="image-cover object-top"/></div>
      <div className="pt-2" data-reveal><p className="eyebrow">Role & approach</p><h2 className="display mt-5 text-4xl md:text-6xl">A thoughtful approach to every detail.</h2><p className="mt-7 text-base leading-8 text-white/65">{member.bio}</p><div className="mt-10 border-t border-white/15 pt-6"><p className="mb-5 text-[10px] uppercase tracking-[.18em] text-white/40">Areas of focus</p><ul className="space-y-4">{member.focus.map(item=><li key={item} className="flex items-center gap-3 text-sm text-white/80"><span className="flex h-6 w-6 items-center justify-center border border-[#c5a46d]/50 text-[#c5a46d]"><Check size={13}/></span>{item}</li>)}</ul></div><Link href="/contact" className="btn mt-9">Get in touch <ArrowUpRight size={15}/></Link></div>
    </div></section>
    <section className="container py-12"><p className="text-xs leading-6 text-white/35">This is a demonstration profile. Confirm the individual’s role, biography, and permission to publish their photograph before launch.</p></section>
  </>;
}
