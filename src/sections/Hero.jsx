import { Typewriter } from "react-simple-typewriter"
export default function Hero({}){
    return(
        <>
            <section id="inicio" className="min-h-screen flex items-center justify-center flex-col gap-6">
                <h1 className="font-semibold text-2xl md:text-6xl border-b-3 border-primary-pruple text-center min-h-16">
                    <Typewriter
                        words={['Desarrollador Web FullStack', 'Apasionado por la programación']}
                        loop={true}
                        delaySpeed={150}
                        cursorBlinking="|"
                    />
                </h1>
                <span className="italic text-xl font-bold">Apasionado por construir experiencias web intuitivas y modernas.</span>
            </section>
        </>
    )
}