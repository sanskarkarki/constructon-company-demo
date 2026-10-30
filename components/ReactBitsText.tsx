"use client";
/* React Bits-inspired split-text reveal: lightweight local implementation, no third-party runtime dependency. */
import { motion } from "framer-motion";
export default function ReactBitsText({ text, className = "" }: { text: string; className?: string }) {
  return <span className={className} aria-label={text} style={{ display: "inline-flex", flexWrap: "wrap", overflow: "hidden" }}>
    {text.split(" ").map((word, i) => <span key={`${word}-${i}`} style={{ display: "inline-flex", overflow: "hidden", marginRight: ".24em" }} aria-hidden="true">
      <motion.span initial={{ y: "110%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .72, delay: .16 + i * .075, ease: [0.22, 1, .36, 1] }}>{word}</motion.span>
    </span>)}
  </span>;
}
