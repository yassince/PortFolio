import Menu from "@/svg/Menu"
import Link from "../components/Link"
import { useState } from "react"
import Close from "@/svg/Close"
import { AnimatePresence, motion } from "framer-motion"

export default function Header({ }) {
    const [open, setOpen] = useState(false)
    const [animation, setAnimation] = useState('')

    const ChangeState = () => {
        if (open) {
            setAnimation('slide-out')
            setTimeout(() => {
                setOpen(false)
            }, '300');
        } else {
            setAnimation('slide-in')
            setOpen(true)
        }
    }

    return (
        <>
            <header className={`flex flex-row justify-around items-baseline w-full gap-4 md:gap-2 lg:gap-4 top-0 z-20 p-8 absolute transition-colors ease-in-out`}>
                <div className="logo font-bold text-voodoo-50 text-4xl p-2 text-left lg:text-4xl">
                    <a href="/">
                        Yassin C.E
                    </a>
                </div>
                <nav className="navigation hidden lg:flex text-xl flex-col w-auto items-center md:flex-row gap-4">
                    <Link 
                        href={'#inicio'}
                        className={'rounded-2xl p-4 text-xl font-bold bg-primary-color-2 hover:bg-primary-color-3/15 transition-colors ease-in duration-300'}
                    >Inicio</Link>
                    <Link 
                        href={'#aboutMe'}
                        className={'rounded-2xl p-4 text-xl font-bold bg-primary-color-2 hover:bg-primary-color-3/15 transition-colors ease-in duration-300'}    
                    >Sobre Mi</Link>
                    <Link 
                        href={'#experience'}
                        className={'rounded-2xl p-4 text-xl font-bold bg-primary-color-2 hover:bg-primary-color-3/15 transition-colors ease-in duration-300'}    
                    >Experiencia</Link>
                    <Link 
                        href={'#proyects'}
                        className={'rounded-2xl p-4 text-xl font-bold bg-primary-color-2 hover:bg-primary-color-3/15 transition-colors ease-in duration-300'}
                    >Proyectos</Link>
                    <Link 
                        href={'#contacMe'}
                        className={'rounded-2xl p-4 text-xl font-bold bg-primary-color-2 hover:bg-primary-color-3/15 transition-colors ease-in duration-300'}    
                    >Contactame</Link>
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
                                        className="absolute top-10 right-8"
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
                                        className="absolute top-10 right-8"
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
                <nav className={`${open ? 'absolute' : 'hidden'} ${animation} z-20 top-30 p-6 w-full flex flex-col gap-6 lg:hidden min-h-32 items-center justify-center rounded-b-2xl bg-gradient-to-b from-5% to-45% from-transparent to-black`}>
                    <Link 
                        href={'#inicio'}
                        className={'border-b-4 border-voodoo-200 text-2xl font-bold hover:scale-75 transition-transform ease-in duration-300'}
                    >Inicio</Link>
                    <Link 
                        href={'#aboutMe'}
                        className={'border-b-4 border-voodoo-200 text-2xl font-bold hover:scale-75 transition-transform ease-in duration-300'}    
                    >Sobre Mi</Link>
                    <Link 
                        href={'#experience'}
                        className={'border-b-4 border-voodoo-200 text-2xl font-bold hover:scale-75 transition-transform ease-in duration-300'}
                    >Experiencia</Link>
                    <Link 
                        href={'#proyects'}
                        className={'border-b-4 border-voodoo-200 text-2xl font-bold hover:scale-75 transition-transform ease-in duration-300'}    
                    >Proyectos</Link>
                    <Link 
                        href={'#contacMe'}
                        className={'border-b-4 border-voodoo-200 text-2xl font-bold hover:scale-75 transition-transform ease-in duration-300'}
                    >Contactame</Link>
                </nav>
            </header>
        </>
    )
}