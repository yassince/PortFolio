import CardInfo from "@/components/CardInfo";
import MiFuturo from "../../public/MiFuturo.webp"
import Astro from "@/svg/technology/Astro";
import Tailwind from "@/svg/technology/Tailwind";
import React from "@/svg/technology/React";
import Js from "@/svg/technology/Js";
import Html from "@/svg/technology/Html";

export default function Proyects({ }) {
    const iconsClass = 'hover:scale-110 transition-transform duration-300'
    return (
        <>
            <section id="proyects" className="min-h-screen flex justify-center items-center flex-col gap-8 p-6 bg-radial from-primary-color-3 from-20% to-primary-color-4 to-90%">
                <h1 className="text-6xl font-bold lg:mt-18">Proyectos</h1>
                <section className="proyects">
                    <div className="proyect flex flex-col gap-6 justify-center items-center">
                        <a href="http://github.com/yassince/MiFuturo" target="_blank" rel="noopener noreferrer">

                            <CardInfo
                                title={'MiFuturo'}
                                ImageCard={MiFuturo}
                                children={'MiFuturo es una aplicación web de banca digital que permite a los usuarios gestionar sus finanzas personales en línea. Desarrollada con Node.js, Express y Astro, ofrece funcionalidades como transferencias, consulta de movimientos y administración de tarjetas. Utiliza PostgreSQL como base de datos y sigue una arquitectura MVC clara. Está desplegada en línea para acceso público. Es un proyecto funcional con enfoque educativo y tecnológico.'}
                                tecnologias={[
                                    <Html
                                        height={'100px'}
                                        width={'100px'}
                                        className={iconsClass}
                                    />,
                                    <Js
                                        height={'100px'}
                                        width={'100px'}
                                        className={iconsClass}
                                    />,
                                    <React
                                        height={'100px'}
                                        width={'100px'}
                                        fill={'#61DAFB'}
                                        className={iconsClass}
                                    />,
                                    <Tailwind
                                        height={'100px'}
                                        width={'100px'}
                                        fill={'#38BDF8'}
                                        className={iconsClass}
                                    />,
                                    <Astro
                                        height={'100px'}
                                        width={'100px'}
                                        className={iconsClass}
                                    />

                                ]}
                            />
                        </a>
                    </div>
                </section>
            </section>
        </>
    )
}