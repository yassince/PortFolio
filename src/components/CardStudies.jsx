export default function CardStudies({ title, institucion, date, children, current }) {
  return (
    <article className="relative flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.8)] transition duration-300 hover:border-accent/40 sm:p-6 lg:hover:-translate-y-2">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="min-w-0 flex-1 text-lg font-bold leading-snug text-white sm:text-2xl lg:text-[1.7rem]">
          {title}
        </h3>
        {current ? (
          <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent">
            En curso
          </span>
        ) : null}
      </div>
      <p className="text-sm font-medium text-accent">{institucion}</p>
      <p className="text-sm italic text-muted">{date}</p>
      <p className="text-sm leading-relaxed text-foreground/85 md:text-base">{children}</p>
    </article>
  );
}
