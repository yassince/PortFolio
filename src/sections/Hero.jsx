"use client";

import ArrowDown from "@/svg/ArrowDown";
import ClientTypewriter from "@/components/ClientTypewriter";
import { scrollToHash } from "@/lib/scrollToHash";
import { heroTagline, heroWords, profile } from "@/data/content";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="hero-screen relative z-0 flex flex-col items-center justify-center gap-3 px-4 pb-10 pt-24 sm:gap-5 sm:px-6"
    >
      <div className="absolute inset-0 bg-[url(/Hero.webp)] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-[#070b12]" />
      <motion.p
        className="relative section-kicker"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        {profile.role}
      </motion.p>
      <motion.h1
        className="hero-title relative min-h-[2.6em] w-full max-w-[min(100%,40rem)] px-1 text-center text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]"
        initial={reduce ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.08 }}
      >
        <ClientTypewriter words={heroWords} delaySpeed={500} cursor />
      </motion.h1>
      <motion.p
        className="relative max-w-xl px-1 text-center text-[0.95rem] leading-relaxed text-white/85 sm:text-lg md:max-w-2xl md:text-2xl"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease, delay: 0.16 }}
      >
        {heroTagline}
      </motion.p>
      <motion.a
        href="#aboutMe"
        onClick={(event) => {
          event.preventDefault();
          scrollToHash("#aboutMe");
        }}
        className="relative z-10 mt-3 inline-flex min-h-11 min-w-11 items-center justify-center sm:mt-4"
        aria-label="Ir a sobre mí"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.28 }}
      >
        <ArrowDown
          height="40px"
          width="40px"
          fill="white"
          className="transition hover:scale-110"
        />
      </motion.a>
    </section>
  );
}
