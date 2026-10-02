import ArrowDown from "@/svg/ArrowDown";
import { Typewriter } from "react-simple-typewriter";
import { heroTagline, heroWords, profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="fade-in relative z-0 flex min-h-screen flex-col items-center justify-center gap-6 bg-[url(/Hero.webp)] bg-cover bg-center bg-no-repeat px-4 pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-[#070b12]" />
      <p className="relative section-kicker">{profile.role}</p>
      <h1 className="relative min-h-16 text-center text-3xl font-semibold tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] md:min-h-24 md:text-6xl lg:text-7xl">
        <Typewriter words={heroWords} loop delaySpeed={500} cursorBlinking="|" />
      </h1>
      <p className="relative max-w-2xl text-center text-lg text-white/85 md:text-2xl">
        {heroTagline}
      </p>
      <a
        href="#aboutMe"
        className="relative z-10 mt-4"
        aria-label="Ir a sobre mí"
      >
        <ArrowDown
          height="44px"
          width="44px"
          fill="white"
          className="animate-bounce transition hover:scale-110"
        />
      </a>
    </section>
  );
}
