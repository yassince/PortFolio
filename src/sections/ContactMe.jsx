"use client";

import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const fieldClass =
  "rounded-xl border border-white/15 bg-white p-3 text-left text-base text-[#0c111a] outline-none ring-accent placeholder:text-slate-400 focus:ring-2";

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
    <section
      id="contacMe"
      className="relative flex min-h-screen scroll-mt-24 flex-col items-center justify-center gap-8 bg-[url(/ContactMe.webp)] bg-cover bg-fixed bg-center bg-no-repeat px-6 py-24"
    >
      <div className="absolute inset-0 bg-[#070b12]/70" />
      <div className="relative w-full max-w-xl text-center">
        <p className="section-kicker mb-3">06 — Contacto</p>
        <h2 className="text-4xl font-bold md:text-6xl">Pongámonos en contacto</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="relative flex w-full max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-black/50 p-8"
      >
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
        <label className="text-sm font-semibold" htmlFor="userMessage">
          Mensaje
        </label>
        <textarea
          name="userMessage"
          id="userMessage"
          className={fieldClass}
          rows="5"
          required
        />
        <input type="text" name="companyName" className="hidden" id="companyName" tabIndex={-1} autoComplete="off" />
        <button
          type="submit"
          disabled={sending}
          className="mt-2 rounded-xl bg-accent px-6 py-3 font-semibold text-[#0c111a] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Enviando…" : "Enviar"}
        </button>
      </form>
    </section>
  );
}
