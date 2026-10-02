"use client";

import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { profile } from "@/data/content";
import Reveal from "@/components/Reveal";

const fieldClass =
  "min-h-11 w-full rounded-xl border border-white/15 bg-white p-3 text-left text-base text-[#0c111a] outline-none ring-accent placeholder:text-slate-400 focus:ring-2";

export default function ContactMe() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.companyName.value || sending) return;

    setSending(true);
    emailjs
      .sendForm("service_7hzcniw", "template_t7qpxtm", formRef.current, "M4bhQFulnpj1h714I")
      .then(
        () => {
          alert("Mensaje enviado correctamente");
          formRef.current.reset();
        },
        () => {
          alert("Hubo un problema al enviar. Prueba de nuevo o escríbeme por LinkedIn.");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-5 sm:px-6">
      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-12">
        <Reveal className="text-center lg:text-left">
          <p className="section-kicker">06 — Contacto</p>
          <h2 className="section-title mt-2">Pongámonos en contacto</h2>
          <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-foreground/85 sm:text-base lg:mx-0">
            Si buscas un perfil SOC junior o quieres hablar de un proyecto, escríbeme. Contesto.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm lg:justify-start md:text-base">
            <a href={`mailto:${profile.email}`} className="break-all font-medium text-accent hover:underline">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-white/85 hover:text-white">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-white/85 hover:text-white">
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal className="w-full">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="grid min-w-0 grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-[#0c111a]/70 p-4 text-left shadow-[0_24px_80px_-32px_rgba(46,230,200,0.35)] backdrop-blur-md sm:grid-cols-2 sm:p-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold" htmlFor="userName">
                Nombre
              </label>
              <input
                className={fieldClass}
                type="text"
                name="userName"
                id="userName"
                autoComplete="name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold" htmlFor="userEmail">
                Email
              </label>
              <input
                className={fieldClass}
                type="email"
                name="userEmail"
                id="userEmail"
                autoComplete="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className="text-sm font-semibold" htmlFor="userMessage">
                Mensaje
              </label>
              <textarea name="userMessage" id="userMessage" className={fieldClass} rows="4" required />
            </div>
            <input type="text" name="companyName" className="hidden" id="companyName" tabIndex={-1} autoComplete="off" />
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={sending}
                className="min-h-11 w-full touch-manipulation rounded-xl bg-accent px-8 py-3 font-semibold text-[#0c111a] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {sending ? "Enviando…" : "Enviar"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
