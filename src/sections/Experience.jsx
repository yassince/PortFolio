import CardInfo from "@/components/CardInfo";
import kyndryl from "../../public/kyndryl.webp";
import regenerati from "../../public/pcregenerati.webp";
import { experience } from "@/data/content";

const IMAGES = {
  kyndryl,
  regenerati,
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center bg-primary-color-4 px-6 py-24"
    >
      <p className="section-kicker mb-3">03 — Trayectoria</p>
      <h2 className="mb-12 text-center text-4xl font-bold md:text-6xl">Experiencia</h2>
      <div className="grid w-full max-w-6xl grid-cols-1 items-stretch justify-items-center gap-10 lg:grid-cols-2">
        {experience.map((job) => (
          <CardInfo
            key={job.title}
            title={job.title}
            ImageCard={IMAGES[job.image]}
            imageFit="contain"
          >
            {job.text}
          </CardInfo>
        ))}
      </div>
    </section>
  );
}
