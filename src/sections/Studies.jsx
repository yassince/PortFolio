import CardInfo from "@/components/CardInfo";
import CardStudies from "@/components/CardStudies";

export default function Studies({ }) {
    return (
        <>
            <section className="min-h-screen flex justify-center items-center flex-col ">
            <h1 className="text-6xl font-bold text-center md:mb-28 mt-12 md:mt-0">Estudios</h1>
                <section className="studies m-6 p-6 flex flex-col w-full lg:flex-row justify-center items-center lg:space-x-10 gap-4">
                    <CardStudies
                        title={'Desarrollo de Aplicaciones Web'}
                        date={'2023 - 2025'}
                        institucion={'I.E.S Francisco Javier de Burgos'}
                        children={'Curso orientado al desarrollo de aplicaciones web, abarcando tanto el front-end como el back-end. Se trabajan lenguajes como JavaScript, Java y PHP, así como frameworks y herramientas modernas como Bootstrap, Tailwind CSS y Laravel.'}
                    />
                    <CardStudies
                        title={'Sistemas Microinformáticos y Redes'}
                        date={'2021 - 2023'}
                        institucion={'I.E.S Francisco Javier de Burgos'}
                        children={'Curso enfocado en el mantenimiento y la reparación de equipos informáticos, así como en la instalación, configuración y gestión de redes locales y sistemas operativos.'}
                    />
                </section>
            </section>
        </>
    )
}