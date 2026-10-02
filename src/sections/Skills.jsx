"use client";

import Html from "@/svg/technology/Html";
import Js from "@/svg/technology/Js";
import ReactIcon from "@/svg/technology/React";
import Tailwind from "@/svg/technology/Tailwind";
import Astro from "@/svg/technology/Astro";
import Node from "@/svg/technology/Node";
import Ansible from "@/svg/technology/Ansible";
import Java from "@/svg/technology/Java";
import Php from "@/svg/technology/Php";
import { skillGroups } from "@/data/content";
import Reveal, { RevealList, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";

const ICONS = {
  HTML: <Html height="28px" width="28px" />,
  JavaScript: <Js height="28px" width="28px" />,
  React: <ReactIcon height="28px" width="28px" fill="#61DAFB" />,
  "Tailwind CSS": <Tailwind height="28px" width="28px" fill="#38BDF8" />,
  Astro: <Astro height="28px" width="28px" />,
  "Node.js": <Node height="28px" width="28px" />,
  Java: <Java height="28px" width="28px" />,
  PHP: <Php height="28px" width="28px" />,
  Ansible: <Ansible height="28px" width="28px" fill="red" />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-screen section-pad relative flex scroll-mt-24 flex-col items-center justify-center gap-8 bg-[url(/Skill.webp)] bg-cover bg-center bg-no-repeat text-white md:gap-12"
    >
      <div className="absolute inset-0 bg-[#070b12]/80" />
      <Reveal className="relative w-full max-w-5xl text-center">
        <p className="section-kicker mb-3">02 — Stack</p>
        <h2 className="section-title">Habilidades y tecnologías</h2>
      </Reveal>
      <RevealList className="relative grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={revealItem}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-6"
          >
            <h3 className="mb-4 border-b border-accent/40 pb-2 text-lg font-bold sm:text-2xl">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {group.items.map((name) => (
                <div
                  key={name}
                  className="flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium sm:px-3 sm:py-2 sm:text-sm"
                >
                  {ICONS[name]}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </RevealList>
    </section>
  );
}
