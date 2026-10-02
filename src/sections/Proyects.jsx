"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import MiFuturo from "../../public/MiFuturo.webp";
import PassGen from "../../public/PassGen.png";
import { projects } from "@/data/content";
import Reveal, { RevealList, revealItem } from "@/components/Reveal";

const IMAGES = {
  mifuturo: MiFuturo,
  passgen: PassGen,
};

export default function Proyects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="proyects"
      className="section-screen section-pad flex scroll-mt-24 flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#1a2330] to-[#070b12] md:gap-10"
    >
      <Reveal className="w-full max-w-6xl">
        <p className="section-kicker">05 — Trabajo</p>
        <h2 className="section-title mt-2">Proyectos</h2>
      </Reveal>
      <RevealList className="flex w-full max-w-6xl flex-col gap-5 sm:gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            reduceMotion={reduceMotion}
          />
        ))}
      </RevealList>
    </section>
  );
}

function ProjectCard({ project, index, reduceMotion }) {
  const reversed = index % 2 === 1;

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={revealItem}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-accent/40 lg:flex-row ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="relative aspect-[16/10] w-full min-h-[9.5rem] overflow-hidden sm:min-h-[14rem] lg:aspect-auto lg:min-h-[16rem] lg:w-[48%]">
        <Image
          src={IMAGES[project.image]}
          alt={`Captura de ${project.title}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.06] group-active:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b12]/55 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-40" />
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition duration-700 ease-out group-hover:translate-x-full" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-4 text-left sm:gap-4 sm:p-6 md:p-8">
        <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">{project.title}</h3>
        <p className="max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base">{project.text}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition duration-300 group-hover:gap-2">
          Ver en GitHub
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </motion.a>
  );
}
