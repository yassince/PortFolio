import CardInfo from "@/components/CardInfo";
import MiFuturo from "../../public/MiFuturo.webp";
import PassGen from "../../public/PassGen.png";
import { projects } from "@/data/content";

const IMAGES = {
  mifuturo: MiFuturo,
  passgen: PassGen,
};

export default function Proyects() {
  return (
    <section
      id="proyects"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center gap-10 bg-gradient-to-b from-[#1a2330] to-[#070b12] px-6 py-24"
    >
      <p className="section-kicker">05 — Trabajo</p>
      <h2 className="text-4xl font-bold md:text-6xl">Proyectos</h2>
      <div className="grid w-full max-w-6xl grid-cols-1 items-stretch justify-items-center gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full w-full flex-col items-center"
          >
            <CardInfo title={project.title} ImageCard={IMAGES[project.image]}>
              {project.text}
            </CardInfo>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
