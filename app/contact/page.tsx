"use client";
import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project enquiry — ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nProject type: ${data.get("type")}\nEstimated budget: ${data.get("budget") || "Not provided"}\n\nProject details:\n${data.get("message")}`);
    window.location.href = `mailto:hello@karkibandhu.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <>
    <section className="container pb-14 pt-20 md:pb-20 md:pt-28"><p className="eyebrow">Start a conversation</p><h1 className="display mt-7 max-w-5xl text-6xl md:text-8xl">Tell us what<br/>you’re <span className="gold italic">building.</span></h1><p className="mt-8 max-w-xl text-sm leading-7 text-white/60 md:text-base">Share a little about your plans. We’ll use the details to start a more useful conversation about your project.</p></section>
    <section className="section-pad bg-[#222520]"><div className="container grid gap-14 md:grid-cols-[.75fr_1.25fr]">
      <aside><p className="eyebrow">Contact details</p><h2 className="display mt-5 text-4xl md:text-5xl">Good projects begin with a conversation.</h2><div className="mt-10 space-y-7">{[{icon:Mail,label:"Email",value:"hello@karkibandhu.com",href:"mailto:hello@karkibandhu.com"},{icon:Phone,label:"Phone",value:"+977 9800000000",href:"tel:+9779800000000"},{icon:MapPin,label:"Based in",value:"Nepal",href:""}].map(item=><div key={item.label} className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-[#c5a46d]"><item.icon size={17}/></span><div><p className="text-[9px] uppercase tracking-[.18em] text-white/40">{item.label}</p>{item.href ? <a href={item.href} className="mt-2 block text-sm hover:text-[#c5a46d]">{item.value}</a> : <p className="mt-2 text-sm">{item.value}</p>}</div></div>)}</div><p className="mt-10 max-w-sm text-xs leading-6 text-white/35">Contact details are demo placeholders. Replace them with the company’s verified business information before launch.</p></aside>
      <form onSubmit={submit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2"><label className="block"><span className="mb-3 block text-[10px] uppercase tracking-[.16em] text-white/55">Your name *</span><input required name="name" autoComplete="name" placeholder="Full name" className="w-full border border-white/20 bg-transparent px-4 py-4 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-[#c5a46d]"/></label><label className="block"><span className="mb-3 block text-[10px] uppercase tracking-[.16em] text-white/55">Email address *</span><input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="w-full border border-white/20 bg-transparent px-4 py-4 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-[#c5a46d]"/></label></div>
        <div className="grid gap-6 sm:grid-cols-2"><label className="block"><span className="mb-3 block text-[10px] uppercase tracking-[.16em] text-white/55">Phone number</span><input name="phone" autoComplete="tel" placeholder="+977" className="w-full border border-white/20 bg-transparent px-4 py-4 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-[#c5a46d]"/></label><label className="block"><span className="mb-3 block text-[10px] uppercase tracking-[.16em] text-white/55">Project type *</span><select required name="type" defaultValue="" className="w-full border border-white/20 bg-[#222520] px-4 py-4 text-sm text-white/75 outline-none focus:border-[#c5a46d]"><option value="" disabled>Select a project type</option><option>Residential</option><option>Commercial</option><option>Civil works</option><option>Renovation</option><option>Other</option></select></label></div>
        <label className="block"><span className="mb-3 block text-[10px] uppercase tracking-[.16em] text-white/55">Estimated budget</span><select name="budget" defaultValue="" className="w-full border border-white/20 bg-[#222520] px-4 py-4 text-sm text-white/75 outline-none focus:border-[#c5a46d]"><option value="">Choose if known</option><option>Under NPR 2 million</option><option>NPR 2–10 million</option><option>NPR 10–50 million</option><option>NPR 50 million+</option><option>Not decided yet</option></select></label>
        <label className="block"><span className="mb-3 block text-[10px] uppercase tracking-[.16em] text-white/55">Tell us about the project *</span><textarea required name="message" rows={5} placeholder="Location, scope, timeline, and anything else we should know..." className="w-full resize-y border border-white/20 bg-transparent px-4 py-4 text-sm outline-none transition-colors placeholder:text-white/25 focus:border-[#c5a46d]"/></label>
        <button type="submit" className="btn w-full sm:w-auto">Prepare enquiry email <ArrowUpRight size={15}/></button>
        {sent && <p role="status" className="flex items-center gap-2 text-xs leading-6 text-[#c5a46d]"><Check size={15}/> Your email app should open with the enquiry prepared. Send it there to complete the process.</p>}
        <p className="text-[10px] leading-5 text-white/35">This demo form uses your device’s email application. It does not store or send submissions to a server.</p>
      </form>
    </div></section>
  </>;
}
