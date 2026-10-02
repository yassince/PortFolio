"use client";

import GitHub from "@/svg/socialNetwork/GitHub";
import Linkedin from "@/svg/socialNetwork/Linkedin";
import ClientTypewriter from "@/components/ClientTypewriter";
import { profile } from "@/data/content";

const THANKS = [
  "Gracias por visitar mi portafolio",
  "Hecho con café y Blue Team mindset",
  "¿Hablamos de SOC, redes o desarrollo?",
  "Tu visita ya suma",
];

export default function Footer() {
  return (
    <footer className="relative z-10 shrink-0 border-t border-white/10 bg-[#070b12] px-4 py-3 text-white sm:px-8">
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-6">
        <p className="shrink-0 text-center text-sm font-semibold sm:text-base md:text-left">
          &copy; 2026 {profile.fullName}
        </p>
        <p className="footer-line min-h-6 min-w-0 flex-1 px-2 text-center text-sm text-white/80">
          <ClientTypewriter words={THANKS} delaySpeed={400} />
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center">
            <GitHub height="24px" width="24px" fill="white" className="transition hover:scale-110" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center">
            <Linkedin height="24px" width="24px" fill="white" className="transition hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
}
