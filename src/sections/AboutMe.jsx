import Profile from "../../public/Profile.webp"
import Image from "next/image";
import Link from "@/components/Link";
import GitHub from "@/svg/socialNetwork/GitHub";
import Linkedin from "@/svg/socialNetwork/Linkedin";

export default function AboutMe({ }) {
    return (
        <>
            <section id="aboutMe" className="min-h-screen p-4 flex flex-col gap-6 overflow-hidden justify-center items-center bg-gradient-to-b from-15% to-100% from-primary-color-3 to-primary-color-4">
                <h1 className="text-4xl md:text-6xl min-h-16 lg:text-8xl font-bold">
                    Sobre Mi 👋
                </h1>
                <div className="presentation flex flex-col lg:flex-row justify-between items-center gap-2">
                    <p className="text-3xl lg:text-3xl max-w-6xl lg:w-xl p-2 flex flex-col items-center gap-10">
                        Soy un desarrollador web apasionado por crear soluciones innovadoras desde cero. Me destaco por ser una persona formal, motivada, puntual y con una gran capacidad de aprendizaje. Estoy en búsqueda de oportunidades profesionales donde pueda seguir creciendo y aportar valor con mi trabajo.
                        <div className="contact flex flex-col md:flex-row justify-center max-w-2xl gap-8 text-center">
                            <Link
                                href={'https://github.com/yassince'}
                                className={'p-4 bg-primary-color-4 rounded-2xl text-2xl hover:scale-110 transition-transform duration-300 ease-in-out'}
                            >
                                <GitHub width={50} height={50} fill={'white'}/>
                            </Link>
                            <Link
                                className={'p-4 bg-primary-color-4 rounded-2xl text-2xl hover:scale-110 transition-transform duration-300 ease-in-out'}
                                href={'https://es.linkedin.com/in/yassin-charrouf-errynda-73a208374'}
                            >
                                <Linkedin width={50} height={50} fill={'white'}/>
                            </Link>
                        </div>
                    </p>
                    <div className="img_profile border-2 rounded-full overflow-hidden bg-gradient-to-b from-transparent to-black w-[200] lg:w-[400]">
                        <Image
                            src={Profile}
                            alt="Profile image"
                            height={400}
                            width={400}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}