import Menu from "@/svg/Menu"
import Link from "./Link"
import { useState } from "react"
import Close from "@/svg/Close"
import { AnimatePresence, motion } from "framer-motion"
export default function Header({ }) {
    const [open, setOpen] = useState(false)
    const [animation, setAnimation] = useState('')

    const ChangeState = () => {
        if(open){
            setAnimation('slide-out')
            setTimeout(() => {
                setOpen(false)
            }, '300');
        }else{
            setAnimation('slide-in')
            setOpen(true)
        }
    }

    return (
        <>
            <header className="p-6 flex flex-row justify-around items-baseline w-full gap-4 md:gap-2 lg:gap-4 sticky top-0 z-20">
                <div className="logo font-bold text-4xl text-center w-full p-2 md:w-auto md:text-left lg:text-6xl">
                    Yassin c.e
                </div>
                <nav className="navigation hidden lg:flex text-xl flex-col w-auto items-center md:flex-row gap-4">
                    <Link href={'#inicio'}>Inicio</Link>
                    <Link href={'#aboutMe'}>Sobre Mi</Link>
                    <Link href={'#experience'}>Experiencia</Link>
                    <Link href={'#proyects'}>Proyectos</Link>
                    <Link href={'#contacMe'}>Contactame</Link>
                </nav>
                <button onClick={ChangeState} className="transition-transform ease-in flex items-center justify-center">
                    <AnimatePresence>
                        {
                            open ?
                                (
                                    <motion.div
                                        key={'close'}
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: .3 }}
                                        className="absolute top-6 right-8"
                                    >
                                        <Close
                                            height={'50px'}
                                            width={'50px'}
                                            className={`lg:hidden`}
                                            fill={'white'}
                                        ></Close>
                                    </motion.div>
                                )
                                :
                                (
                                    <motion.div
                                        key={'menu'}
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: .5 }}
                                        className="absolute top-6 right-8"
                                    >
                                        <Menu
                                            height={'50px'}
                                            width={'50px'}
                                            fill={'white'}
                                            className={'lg:hidden'}
                                        ></Menu>
                                    </motion.div>
                                )
                        }
                    </AnimatePresence>
                </button>
                <nav className={`${open ? 'absolute' : 'hidden'} ${animation} z-20 top-26 p-6 w-full flex flex-col gap-4 lg:hidden min-h-full items-center justify-center`}>
                    <Link href={'#inicio'}>Inicio</Link>
                    <Link href={'#aboutMe'}>Sobre Mi</Link>
                    <Link href={'#experience'}>Experiencia</Link>
                    <Link href={'#proyects'}>Proyectos</Link>
                    <Link href={'#contacMe'}>Contactame</Link>
                </nav>
            </header>
        </>
    )
}