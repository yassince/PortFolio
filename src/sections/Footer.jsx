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
    <footer className="relative z-10 shrink-0 border-t border-white/10 bg-transparent px-4 py-3 text-white sm:px-8 sm:py-4">
      <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
        <p className="text-center text-sm font-semibold sm:text-base md:text-left md:text-lg">
          &copy; 2026 {profile.fullName}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex min-h-10 min-w-10 items-center justify-center">
            <GitHub height="26px" width="26px" fill="white" className="transition hover:scale-110" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex min-h-10 min-w-10 items-center justify-center">
            <Linkedin height="26px" width="26px" fill="white" className="transition hover:scale-110" />
          </a>
        </div>
      </div>
      <p className="footer-line mt-2 min-h-6 px-1 text-center text-sm text-white/80">
        <ClientTypewriter words={THANKS} delaySpeed={400} />
      </p>
    </footer>
  );
}
