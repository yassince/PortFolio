import Button from "./Button"
export default function Header({ }) {
    return (
        <>
            <header className="p-6 flex flex-col md:flex-row justify-around items-baseline w-full gap-4 border border-button-header bg-gradient-to-b from-purple-400  to-button-header sticky top-0">
                <div className="logo font-bold text-4xl text-center w-full p-2 md:w-auto md:text-left md:text-6xl">
                    Yassin c.e
                </div>
                <nav className="navigation text-xl flex flex-col w-full md:w-auto items-center md:flex-row gap-4 ">
                    <Button texto={'Inicio'}/>
                    <Button texto={'Sobre Mi'}/>
                    <Button texto={'Contactame'}/>
                </nav>
            </header>
        </>
    )
}