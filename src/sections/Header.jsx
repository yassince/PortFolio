"use client";

import Menu from "@/svg/Menu";
import Close from "@/svg/Close";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#aboutMe", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#studies", label: "Formación" },
  { href: "#proyects", label: "Proyectos" },
  { href: "#contacMe", label: "Contacto" },
];

function scrollToHash(hash) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }
  }, []);

  const goTo = (event, href) => {
    event.preventDefault();
    setOpen(false);
    scrollToHash(href);
    history.replaceState(null, "", href);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070b12]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#inicio" onClick={(e) => goTo(e, "#inicio")} className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Yassin C.E
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 lg:flex" aria-label="Secciones">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => goTo(e, item.href)}
              className="rounded-full px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
          className="relative z-30 flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                <Close height="28px" width="28px" fill="white" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                <Menu height="28px" width="28px" fill="white" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-white/10 bg-[#070b12]/95 px-4 py-3 lg:hidden"
          aria-label="Menú móvil"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => goTo(e, item.href)}
              className="rounded-xl px-4 py-3 text-center text-base font-medium text-white hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
