import Link from "./Link"
export default function Header({ }) {
    return (
        <>
            <header className="p-6 flex flex-col md:flex-row justify-around items-baseline w-full gap-4 sticky top-0">
                <div className="logo font-bold text-4xl text-center w-full p-2 md:w-auto md:text-left md:text-6xl">
                    Yassin c.e
                </div>
                <nav className="navigation hidden md:flex text-xl flex-col w-auto items-center md:flex-row gap-4">
                    <Link href={'#inicio'}>Inicio</Link>
                    <Link href={'#aboutMe'}>Sobre Mi</Link>
                    <Link href={'#expirience'}>Experiencia</Link>
                    <Link href={'#proyects'}>Proyectos</Link>
                    <Link href={'#contacMe'}>Contactame</Link>
                </nav>
            </header>
        </>
    )
}