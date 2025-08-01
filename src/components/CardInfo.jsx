import Image from "next/image"

export default function CardInfo({ title, children, ImageCard, tecnologias }) {
    return (
        <>
            <section className="p-8 rounded-2xl max-w-96 lg:max-w-[800px] gap-12 flex flex-col items-center justify-between overflow-hidden bg-white/65 shadow-xl shadow-primary-color-3">
                <div className="img min-h-80 flex items-center">
                    <Image
                        alt="Imagen de la card"
                        src={ImageCard}
                        width={500}
                        height={150}
                        className="rounded-2xl"
                    />
                </div>
                <h1 className="text-xl md:text-4xl font-bold text-center text-primary-color-5">{title}</h1>
                <p className="md:text-xl text-primary-color-4">{children}</p>
                <section className={`
                    ${!tecnologias ? 'hidden' : ''} 
                    tecnologias grid grid-cols-2 md:grid-cols-3 p-4 lg:flex lg:flex-row gap-4`
                }>
                    {tecnologias?.map((item) => {
                        return item
                    })}
                </section>
            </section>
        </>
    )
}