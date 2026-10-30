import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { members } from "@/lib/site";
import MemberCard from "@/components/MemberCard";
import Link from "next/link";

export const metadata: Metadata = { title: "Our People", description: "Meet the people behind Karki Bandhu Construction and learn about their roles and approach." };

export default function MembersPage() {
  return <>
    <section className="container pb-16 pt-20 md:pb-24 md:pt-28">
      <p className="eyebrow">The people behind the work</p>
      <h1 className="display mt-7 max-w-5xl text-6xl md:text-8xl">Good work takes<br/><span className="gold italic">good people.</span></h1>
      <p className="mt-8 max-w-2xl text-sm leading-7 text-white/60 md:text-base">Construction is a team effort. Meet the people responsible for guiding projects, coordinating the details, and keeping the work moving.</p>
    </section>
    <section className="container pb-24">
      <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/15 pb-5"><div><p className="eyebrow">Meet the team</p><h2 className="display mt-4 text-4xl md:text-5xl">People. Purpose. Practice.</h2></div><span className="hidden text-[10px] uppercase tracking-[.15em] text-white/40 sm:block">{members.length} team profiles</span></div>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">{members.map(member => <MemberCard key={member.slug} member={member} showBio/>)}</div>
      <p className="mt-12 border-t border-white/10 pt-5 text-xs leading-6 text-white/35">Team profiles and photographs are illustrative demo content. Replace with approved biographies and real team photographs before publishing.</p>
    </section>
    <section className="section-pad bg-[#222520]"><div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow">Work with our team</p><h2 className="display mt-5 max-w-3xl text-5xl md:text-6xl">Every project starts with a conversation.</h2></div><Link href="/contact" className="btn">Contact the team <ArrowUpRight size={15}/></Link></div></section>
  </>;
}
