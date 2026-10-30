import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
export default function Footer() {
  return <footer className="border-t border-white/10 bg-[#131512]">
    <div className="container py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1.2fr_.8fr]">
        <div><p className="eyebrow">Have a project in mind?</p><h2 className="display mt-6 max-w-xl text-5xl md:text-7xl">Let’s build something <span className="gold italic">lasting.</span></h2><Link href="/contact" className="btn mt-8">Talk to our team <ArrowUpRight size={16}/></Link></div>
        <div className="grid grid-cols-2 gap-8 md:justify-self-end md:pt-4">
          <div><p className="mb-5 text-[10px] uppercase tracking-[.2em] text-white/40">Explore</p><div className="flex flex-col gap-4 text-sm text-white/75"><Link href="/about">About us</Link><Link href="/services">Our services</Link><Link href="/projects">Selected work</Link><Link href="/contact">Contact</Link></div></div>
          <div><p className="mb-5 text-[10px] uppercase tracking-[.2em] text-white/40">Get in touch</p><div className="flex flex-col gap-4 text-sm text-white/75"><a href="mailto:hello@karkibandhu.com">Email us <MoveUpRight className="inline" size={13}/></a><a href="tel:+9779800000000">+977 9800000000</a><p>Nepal</p></div></div>
        </div>
      </div>
      <div className="rule my-12"/>
      <div className="flex flex-col justify-between gap-3 text-[10px] uppercase tracking-[.12em] text-white/40 md:flex-row"><span>© {new Date().getFullYear()} Karki Bandhu Construction Pvt. Ltd.</span><span>Built with care. Designed to endure.</span></div>
    </div>
  </footer>;
}
