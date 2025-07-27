import Profile from "../../public/Profile.webp"
import Image from "next/image";
import Link from "@/components/Link";

export default function AboutMe({ }) {
    return (
        <>
            <section id="aboutMe" className="presentation min-h-screen p-6 m-6 flex flex-col gap-10 overflow-hidden justify-center">
                <div className="cardInfo flex flex-col lg:flex-row justify-around gap-4 items-center">
                    <div className="Info-presentation gap-6 flex flex-col">
                        <h1 className="text-4xl md:text-6xl min-h-16">
                            Sobre Mi 👋
                        </h1>
                        <p className="max-w-4xl md:hover:tracking-wide transition-all duration-150 text-xl">
                            Soy un desarrollador web apasionado por crear soluciones innovadoras desde cero. Me destaco por ser una persona formal, motivada, puntual y con una gran capacidad de aprendizaje. Estoy en búsqueda de oportunidades profesionales donde pueda seguir creciendo y aportar valor con mi trabajo.
                        </p>
                        <div className="contact flex flex-col md:flex-row justify-around max-w-2xl gap-4 text-center">
                            <Link href={'https://github.com/yassince'}>GitHub</Link>
                            <Link href={'https://es.linkedin.com/in/yassin-charrouf-errynda-73a208374'}>Linkedin</Link>
                        </div>
                    </div>
                    <div className="Image-presentation h-72 w-72 rounded-[100px] border border-button-header overflow-hidden flex items-center justify-center">
                        <Image
                            src={Profile}
                            height={350}
                            width={300}
                            alt="Profile image"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}