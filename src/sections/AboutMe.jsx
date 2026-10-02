import Profile from "../../public/Profile.jpg";
import Image from "next/image";
import Link from "@/components/Link";
import GitHub from "@/svg/socialNetwork/GitHub";
import Linkedin from "@/svg/socialNetwork/Linkedin";
import { aboutHighlights, aboutParagraphs, profile } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="section-screen section-pad flex scroll-mt-24 flex-col items-center justify-center gap-8 overflow-x-clip bg-gradient-to-b from-[#1a2330] to-[#070b12] md:gap-12"
    >
      <Reveal className="text-center">
        <p className="section-kicker mb-3">01 — Perfil</p>
        <h2 className="section-title">Sobre mí</h2>
      </Reveal>
      <div className="flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <Reveal className="relative size-[9.5rem] shrink-0 sm:size-56 md:size-64 lg:order-2 lg:size-[20rem]">
          <div className="absolute inset-4 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={Profile}
              alt="Retrato de Yassin Charrouf Errynda"
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 256px, (min-width: 640px) 224px, 152px"
              className="object-cover object-[center_10%]"
            />
          </div>
        </Reveal>
        <Reveal className="flex w-full max-w-2xl flex-col gap-5 lg:order-1">
          {aboutParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-[0.95rem] leading-relaxed text-foreground/90 sm:text-lg md:text-[1.15rem]"
            >
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 pt-1">
            {aboutHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <Link
              href={profile.github}
              className="rounded-2xl border border-white/10 bg-black/40 p-3 transition hover:scale-105 hover:border-accent/40 hover:bg-accent/15"
            >
              <GitHub width={32} height={32} fill="white" />
            </Link>
            <Link
              href={profile.linkedin}
              className="rounded-2xl border border-white/10 bg-black/40 p-3 transition hover:scale-105 hover:border-accent/40 hover:bg-accent/15"
            >
              <Linkedin width={32} height={32} fill="white" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
