import CardStudies from "@/components/CardStudies";
import { studies } from "@/data/content";

export default function Studies() {
  return (
    <section
      id="studies"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center px-6 py-24"
    >
      <p className="section-kicker mb-3">04 — Formación</p>
      <h2 className="mb-12 text-center text-4xl font-bold md:text-6xl">Estudios</h2>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {studies.map((item) => (
          <CardStudies
            key={item.title}
            title={item.title}
            date={item.date}
            institucion={item.institucion}
            current={item.current}
          >
            {item.text}
          </CardStudies>
        ))}
      </div>
    </section>
  );
}
