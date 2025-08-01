import GitHub from "@/svg/socialNetwork/GitHub";
import Linkedin from "@/svg/socialNetwork/Linkedin";
import { Typewriter } from "react-simple-typewriter";

export default function Footer({ }) {
    const mensajesDeAgradecimiento = [
        "Gracias por visitar mi portafolio ✨",
        "¡Gracias por llegar hasta aquí!",
        "Hecho con ❤️ y mucho café",
        "Gracias por tu tiempo 🙌",
        "¡Nos vemos pronto! 👋",
        "Tu visita significa mucho 😊",
        "Gracias por echarle un vistazo a mi trabajo",
        "¿Te gustó? ¡Hablemos!",
        "Esto es solo el comienzo 🚀",
        "Gracias por tu interés 🧠",
        "¡Gracias por explorar mi mundo digital!",
        "Tu atención ya es un regalo 🎁",
        "Espero que hayas disfrutado el recorrido",
        "¡Gracias por estar aquí!",
        "Si leíste hasta el final, eres genial 😄",
    ];
    return (
        <>
            <footer className="footer bg-primary-pruple p-8 text-white flex gap-2.5 flex-col justify-between bg-gradient-to-r from-20% from-primary-color to-85% to-primary-color-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-right text-xl md:text-3xl lg:text-4xl font-bold">
                        &copy; 2025 Yassin Charrouf Errynda
                    </div>
                    <div className="flex flex-row gap-4 justify-center items-center md:mr-10">
                        <a
                            href="https://github.com/yassince"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHub
                                height={'50px'}
                                width={'50px'}
                                fill={'white'}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yassin-charrouf-errynda-73a208374"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin
                                height={'50px'}
                                width={'50px'}
                                fill={'white'}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                        </a>
                    </div>
                </div>
                <p className="text-center min-h-8 text-2xl">
                    <Typewriter
                        words={mensajesDeAgradecimiento}
                        loop={true}
                        delaySpeed={200}
                    />
                </p>
            </footer>

        </>
    )
}
