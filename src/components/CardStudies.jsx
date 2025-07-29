export default function CardStudies({title, institucion, date, children}){
    return(
        <>
            <section className="card-studies rounded-2xl bg-primary-color-3 p-6 flex flex-col gap-3 max-w-[550px] min-h-[350px] shadow-md shadow-primary-color-3 lg:hover:scale-115 transition-transform ease-in-out duration-200 lg:hover:-translate-y-[50px]">
                <h1 className="text-2xl font-bold md:text-4xl text-primary-color-5">{title}</h1>
                <span className="text-xl font-semibold italic text-primary-color-4">{institucion}</span>
                <span className="italic text-primary-color-4 font-semibold">{date}</span>
                <p className="text-primary-color-4">{children}</p>
            </section>
        </>
    )
}