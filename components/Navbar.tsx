"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/services", label: "Services" }, { href: "/projects", label: "Projects" }, { href: "/members", label: "Our people" }, { href: "/contact", label: "Contact" }];
export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="relative z-50 border-b border-white/10 bg-[#171916]">
    <div className="container flex h-[82px] items-center justify-between gap-6">
      <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Karki Bandhu Construction home">
        <span className="flex h-10 w-10 items-center justify-center border border-[#c5a46d] font-serif text-xl text-[#c5a46d]">K</span>
        <span className="leading-tight"><span className="block text-[11px] font-bold tracking-[.16em]">KARKI BANDHU</span><span className="mt-1 block text-[9px] tracking-[.19em] text-white/50">CONSTRUCTION PVT. LTD.</span></span>
      </Link>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
        {links.map(link => <Link key={link.href} href={link.href} className={`text-[10px] uppercase tracking-[.13em] transition-colors hover:text-[#c5a46d] ${path === link.href || (link.href !== "/" && path.startsWith(link.href)) ? "text-[#c5a46d]" : "text-white/70"}`}>{link.label}</Link>)}
      </nav>
      <Link href="/contact" className="hidden items-center gap-3 border border-white/25 px-4 py-3 text-[10px] uppercase tracking-[.13em] transition-colors hover:border-[#c5a46d] hover:text-[#c5a46d] md:flex">Start a project <ArrowUpRight size={14}/></Link>
      <button className="flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </div>
    {open && <nav className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#171916] px-[18px] py-5 lg:hidden">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-xs uppercase tracking-[.15em]">{link.label}</Link>)}</nav>}
  </header>;
}
