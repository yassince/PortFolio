import Menu from "@/svg/Menu";
import Link from "../components/Link";
import { useState } from "react";
import Close from "@/svg/Close";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#aboutMe", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#studies", label: "Formación" },
  { href: "#proyects", label: "Proyectos" },
  { href: "#contacMe", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 z-20 flex w-full items-center justify-between gap-4 px-5 py-4 md:px-8">
      <a href="/" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
        Yassin C.E
      </a>
      <nav className="glass hidden items-center gap-1 rounded-full px-2 py-1 lg:flex">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
        className="relative z-30 flex h-12 w-12 items-center justify-center lg:hidden"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Close height="32px" width="32px" fill="white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu height="32px" width="32px" fill="white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      {open ? (
        <nav className="glass absolute left-4 right-4 top-20 z-20 flex flex-col items-center gap-2 rounded-2xl p-5 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="w-full rounded-xl py-3 text-center text-lg font-medium hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
