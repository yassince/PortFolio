import ArrowDown from "@/svg/ArrowDown"
import { Typewriter } from "react-simple-typewriter"

export default function Hero({ }) {
    return (
        <>
            <section id="inicio" className=" z-0 fade-in min-h-screen flex items-center justify-center flex-col gap-6 transition-all duration-500 ease-in">
                <h1 className="font-semibold text-2xl md:text-6xl text-center min-h-16">
                    <Typewriter
                        words={['Desarrollador Web FullStack', 'Apasionado por la programación']}
                        loop={true}
                        delaySpeed={500}
                        cursorBlinking="|"
                    />
                </h1>
                <span className="italic text-xl font-bold text-center">Apasionado por construir experiencias web intuitivas y modernas.</span>
                <a href="#aboutMe">
                    <ArrowDown
                        height={'50px'}
                        width={'50px'}
                        fill={'white'}
                        className={'animate-bounce transition-transform ease-in z-10'}
                    ></ArrowDown>
                </a>
            </section>
        </>
    )
}