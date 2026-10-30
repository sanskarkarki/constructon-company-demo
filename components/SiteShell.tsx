"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function SiteShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduce ? null : new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9 });
    let raf = 0;
    const tick = (time: number) => { lenis?.raf(time); raf = requestAnimationFrame(tick); };
    if (lenis) raf = requestAnimationFrame(tick);
    const onScroll = () => ScrollTrigger.update();
    lenis?.on("scroll", onScroll);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { y: 32, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((el) => {
        gsap.fromTo(el, { clipPath: "inset(8% 8% 8% 8%)", scale: 1.06 }, {
          clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.25, ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <div className="site-shell"><Navbar />{children}<Footer /></div>;
}
