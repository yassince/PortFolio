import Profile from "../../public/Profile.jpg";
import Image from "next/image";
import Link from "@/components/Link";
import GitHub from "@/svg/socialNetwork/GitHub";
import Linkedin from "@/svg/socialNetwork/Linkedin";
import { aboutHighlights, aboutParagraphs, profile } from "@/data/content";

export default function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center gap-12 overflow-hidden bg-gradient-to-b from-[#1a2330] to-[#070b12] px-6 py-24"
    >
      <div className="text-center">
        <p className="section-kicker mb-3">01 — Perfil</p>
        <h2 className="text-4xl font-bold md:text-6xl">Sobre mí</h2>
      </div>
      <div className="flex w-full max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full max-w-2xl flex-col gap-6">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-foreground/90 md:text-[1.2rem]">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 pt-1">
            {aboutHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
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
              <GitHub width={36} height={36} fill="white" />
            </Link>
            <Link
              href={profile.linkedin}
              className="rounded-2xl border border-white/10 bg-black/40 p-3 transition hover:scale-105 hover:border-accent/40 hover:bg-accent/15"
            >
              <Linkedin width={36} height={36} fill="white" />
            </Link>
          </div>
        </div>
        <div className="relative h-[240px] w-[240px] shrink-0 lg:h-[380px] lg:w-[380px]">
          <div className="absolute inset-4 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={Profile}
              alt="Retrato de Yassin Charrouf Errynda"
              fill
              sizes="(min-width: 1024px) 380px, 240px"
              className="object-cover object-[center_10%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
