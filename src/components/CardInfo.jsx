import Image from "next/image";

export default function CardInfo({ title, children, ImageCard, tecnologias, imageFit = "cover" }) {
  return (
    <article className="mx-auto flex h-full w-full flex-col items-center gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_50px_-28px_rgba(0,0,0,0.8)] transition duration-300 hover:border-accent/40">
      {ImageCard ? (
        <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl bg-black/25">
          <Image
            alt={title || "Imagen del proyecto o experiencia"}
            src={ImageCard}
            width={640}
            height={400}
            className={`h-full w-full rounded-xl ${imageFit === "contain" ? "object-contain p-4" : "object-cover"}`}
          />
        </div>
      ) : null}
      <h3 className="text-xl font-bold text-white md:text-3xl">{title}</h3>
      <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/85 md:text-base">
        {children}
      </p>
      {tecnologias?.length ? (
        <div className="flex flex-wrap justify-center gap-2">
          {tecnologias.map((item) => item)}
        </div>
      ) : null}
    </article>
  );
}
