export default function CardStudies({ title, institucion, date, children, current }) {
  return (
    <article className="relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-2 hover:border-accent/40">
      {current ? (
        <span className="absolute right-4 top-4 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent">
          En curso
        </span>
      ) : null}
      <h3 className="pr-20 text-2xl font-bold text-white md:text-3xl">{title}</h3>
      <p className="text-sm font-medium text-accent">{institucion}</p>
      <p className="text-sm italic text-muted">{date}</p>
      <p className="text-sm leading-relaxed text-foreground/85 md:text-base">{children}</p>
    </article>
  );
}
