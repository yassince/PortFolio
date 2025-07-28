import ArrowDown from "@/svg/ArrowDown"
import { Typewriter } from "react-simple-typewriter"
import Header from "./Header"

export default function Hero({ }) {
    return (
        <>
            <section id="inicio" className="z-0 fade-in min-h-screen flex items-center justify-center flex-col gap-8 transition-all duration-500 ease-in bg-[url(/Hero.webp)] bg-cover bg-no-repeat">
                <Header />
                <h1 className="font-semibold text-2xl md:text-6xl lg:text-8xl text-center min-h-16 lg:min-h-24 text-voodoo-50">
                    <Typewriter
                        words={['Desarrollador Web FullStack', 'Apasionado por la programación']}
                        loop={true}
                        delaySpeed={500}
                        cursorBlinking="|"
                    />
                </h1>
                <span className="italic text-xl lg:text-3xl font-bold text-center text-voodoo-50">Apasionado por construir experiencias web intuitivas y modernas.</span>
                <a href="#aboutMe">
                    <ArrowDown
                        height={'50px'}
                        width={'50px'}
                        fill={'white'}
                        className={'animate-bounce transition-transform ease-in z-10 hover:scale-125 duration-300'}
                    ></ArrowDown>
                </a>
            </section>
        </>
    )
}