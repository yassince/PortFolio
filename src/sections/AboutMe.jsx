import Profile from "../../public/Profile.webp"
import Image from "next/image";
import Link from "@/components/Link";

export default function AboutMe({ }) {
    return (
        <>
            <section id="aboutMe" className="presentation h-screen p-6 m-6 flex flex-col gap-10 overflow-hidden justify-center">
                <div className="cardInfo flex flex-col lg:flex-row justify-around gap-4">
                    <div className="Info-presentation gap-6 flex flex-col">
                        <h1 className="text-4xl md:text-6xl min-h-16">
                            Sobre Mi 👋
                        </h1>
                        <p className="max-w-4xl hover:tracking-wide transition-all duration-150 text-xl">
                            Soy un desarrollador web, que en este momento es buscando trabajo, me manejo en HTML, CSS, JavaScrip, Node.js, ansible entre otras muchas más tecnologias.
                            Soy una presona apasionada por la programación y me gusta la idea de construir un proyecto innovador desde cero.
                            Me considero una presona motivada, formal, puntual, con la capacidad de aprendizaje rápido.
                        </p>
                        <div className="contact flex flex-col md:flex-row justify-around max-w-2xs gap-4">
                            <Link href={'https://github.com/yassince'}>GitHub</Link>
                            <Link href={'https://es.linkedin.com/in/yassin-charrouf-errynda-73a208374'}>Linkedin</Link>
                        </div>
                    </div>
                    <div className="Image-presntation h-72 w-72 rounded-[100px] border border-button-header overflow-hidden">
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