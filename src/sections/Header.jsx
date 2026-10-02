"use client";

import Menu from "@/svg/Menu";
import Close from "@/svg/Close";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToHash } from "@/lib/scrollToHash";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#aboutMe", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#experience", label: "Experiencia" },
  { href: "#studies", label: "Formación" },
  { href: "#proyects", label: "Proyectos" },
  { href: "#contacMe", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    }
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (event, href) => {
    event.preventDefault();
    setOpen(false);
    scrollToHash(href);
    try {
      history.replaceState(null, "", href);
    } catch (err) {
      window.location.hash = href;
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070b12] pt-[env(safe-area-inset-top,0px)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-8">
        <a
          href="#inicio"
          onClick={(e) => goTo(e, "#inicio")}
          className="min-w-0 truncate text-lg font-semibold tracking-tight text-white sm:text-2xl md:text-3xl"
        >
          Yassin C.E
        </a>
        <nav
          className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/5 px-1.5 py-1 xl:flex"
          aria-label="Secciones"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => goTo(e, item.href)}
              className="rounded-full px-2.5 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
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
          className="relative z-30 flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full text-white hover:bg-white/10 xl:hidden"
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
          className="max-h-[min(80dvh,calc(100dvh-4.5rem))] overflow-y-auto border-t border-white/10 bg-[#070b12]/98 px-3 py-3 xl:hidden"
          aria-label="Menú móvil"
        >
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-1 sm:grid-cols-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => goTo(e, item.href)}
                className="rounded-xl px-4 py-3.5 text-center text-base font-medium text-white hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
