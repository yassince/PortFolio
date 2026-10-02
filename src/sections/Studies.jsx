"use client";

import CardStudies from "@/components/CardStudies";
import { studies } from "@/data/content";
import Reveal, { RevealList, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Studies() {
  return (
    <section
      id="studies"
      className="section-screen section-pad flex scroll-mt-24 flex-col items-center justify-center bg-[#070b12]"
    >
      <Reveal className="mb-8 w-full max-w-6xl md:mb-12">
        <p className="section-kicker mb-3">04 — Formación</p>
        <h2 className="section-title">Estudios</h2>
      </Reveal>
      <RevealList className="grid w-full max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {studies.map((item) => (
          <motion.div key={item.title} variants={revealItem}>
            <CardStudies
              title={item.title}
              date={item.date}
              institucion={item.institucion}
              current={item.current}
            >
              {item.text}
            </CardStudies>
          </motion.div>
        ))}
      </RevealList>
    </section>
  );
}
