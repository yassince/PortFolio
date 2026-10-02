import emailjs from "emailjs-com";
import { useRef } from "react";

export default function ContactMe() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.companyName.value) return;

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
      );
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
        className="relative flex w-full max-w-xl flex-col gap-4 rounded-2xl border border-white/10 bg-black/50 p-8"
      >
        <label className="text-sm font-semibold" htmlFor="name">
          Nombre
        </label>
        <input
          className="rounded-xl border border-white/10 bg-white/90 p-3 text-center text-primary-color-5"
          type="text"
          name="userName"
          id="name"
          required
        />
        <label className="text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-xl border border-white/10 bg-white/90 p-3 text-center text-primary-color-5"
          type="email"
          name="userEmail"
          id="email"
          required
        />
        <label className="text-sm font-semibold" htmlFor="message">
          Mensaje
        </label>
        <textarea
          name="userMessage"
          id="message"
          className="rounded-xl border border-white/10 bg-white/90 p-3 text-center text-primary-color-5"
          rows="5"
          required
        />
        <input type="text" name="companyName" className="hidden" id="companyName" tabIndex={-1} autoComplete="off" />
        <button
          type="submit"
          className="mt-2 rounded-xl bg-accent px-6 py-3 font-semibold text-primary-color-4 transition hover:scale-[1.02]"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
