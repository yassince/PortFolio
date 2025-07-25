import CardInfo from "@/components/CardInfo";
import kyndryl from "../../public/kyndryl.webp"
import regenerati from "../../public/pcregenerati.webp"

export default function Experience({}){
    return(
        <>
            <section id="experience" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-primary-pruple to-black">
                <h1 className="text-6xl font-bold mt-32 lg:mt-0">Experiencia</h1>
                <section className="work grid grid-cols-1 lg:grid-cols-2 gap-40 m-16">
                    <CardInfo
                        title={'Junior Equipo Industrialización'}
                        ImageCard={kyndryl}
                        children={'Formé parte de un equipo de industrialización en la que mi funcion erá la creación y prueba de artefactos mediante Ansible.\nLa prueba de los artefactos mediante AWX o en maquinas virtuales como Vagrant, VMware, Molecule, VirtualBox, etc.\nTambién creamos entronos de prueba con Kubernetes para la realización de pruebas básicas como deploy, gestion de pods, gestion de los mismos desde interfaz gráfica o desde linea de comandos, entre otras muchas más'}
                    />
                    <CardInfo
                        title={'Tecnico repacación y mantenimiento de equipos informáticos'}
                        ImageCard={regenerati}
                        children={'En este puesto de encargaba del mantenimiento preventivo y correctivo de los equipos informaticos, tanto de parte de hardware con el software. Mis funciones erán mantenimiento de cada componenete del equipo informatico y después la instalación de SO y configuración del mismo.\nTambién me encarbada de la preparación física y lógica de los equipos.'}
                    />
                </section>
            </section>
        </>
    )
}