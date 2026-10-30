import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { members } from "@/lib/site";
type Member = (typeof members)[number];

export default function MemberCard({ member, showBio = false }: { member: Member; showBio?: boolean }) {
  return <article className="group" data-reveal>
    <Link href={`/members/${member.slug}`} className="block">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#292c26]" data-image-reveal>
        <Image src={member.image} alt={member.name} fill sizes="(max-width: 700px) 80vw, 25vw" className="image-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
        <span className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center border border-white/60 bg-black/20 transition-colors group-hover:border-[#c5a46d] group-hover:bg-[#c5a46d] group-hover:text-[#171916]"><ArrowUpRight size={16}/></span>
      </div>
    </Link>
    <div className="mt-4 flex items-start justify-between gap-3">
      <div><h3 className="font-serif text-2xl">{member.name}</h3><p className="mt-1 text-[9px] uppercase tracking-[.16em] text-[#c5a46d]">{member.designation}</p>
      {showBio && <p className="mt-4 text-sm leading-7 text-white/55">{member.summary}</p>}</div>
      <span className="mt-1 text-xs text-white/35">↗</span>
    </div>
  </article>;
}
