import GitHub from "@/svg/socialNetwork/GitHub";
import Linkedin from "@/svg/socialNetwork/Linkedin";
import { Typewriter } from "react-simple-typewriter";
import { profile } from "@/data/content";

const THANKS = [
  "Gracias por visitar mi portafolio",
  "Hecho con café y Blue Team mindset",
  "¿Hablamos de SOC, redes o desarrollo?",
  "Tu visita ya suma",
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 bg-gradient-to-r from-primary-color to-primary-color-4 px-8 py-10 text-white">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-lg font-semibold md:text-2xl">
          &copy; {new Date().getFullYear()} {profile.fullName}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHub height="40px" width="40px" fill="white" className="transition hover:scale-110" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin height="40px" width="40px" fill="white" className="transition hover:scale-110" />
          </a>
        </div>
      </div>
      <p className="min-h-8 text-center text-lg text-white/80">
        <Typewriter words={THANKS} loop delaySpeed={400} />
      </p>
    </footer>
  );
}
