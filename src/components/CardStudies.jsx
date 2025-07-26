export default function CardStudies({title, institucion, date, children}){
    return(
        <>
            <section className="card-studies rounded-2xl bg-secundary-purple p-6 flex flex-col gap-3 max-w-[550px] min-h-80">
                <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
                <span className="text-xl font-semibold italic">{institucion}</span>
                <span className="italic">{date}</span>
                <p>{children}</p>
            </section>
        </>
    )
}