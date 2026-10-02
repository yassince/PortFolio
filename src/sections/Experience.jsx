"use client";

import { experience } from "@/data/content";
import Reveal, { RevealList, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-screen section-pad flex scroll-mt-24 flex-col items-center justify-center gap-8 bg-primary-color-4 md:gap-10"
    >
      <Reveal className="w-full max-w-6xl">
        <p className="section-kicker">03 — Trayectoria</p>
        <h2 className="section-title mt-2">Experiencia</h2>
      </Reveal>
      <RevealList className="flex w-full max-w-6xl flex-col gap-4 sm:gap-6">
        {experience.map((job) => (
          <motion.article
            key={job.title}
            variants={revealItem}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left sm:p-6 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent sm:text-sm">
              {job.company}
            </p>
            <h3 className="mt-2 text-lg font-bold leading-snug text-white sm:text-xl lg:text-2xl">
              {job.title}
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-foreground/85 md:text-base">
              {job.text}
            </p>
          </motion.article>
        ))}
      </RevealList>
    </section>
  );
}
