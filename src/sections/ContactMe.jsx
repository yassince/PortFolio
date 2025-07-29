import emailjs from 'emailjs-com';
import { useRef } from 'react';


export default function ContactMe({ }) {
    const formRef = useRef();

    const handleSubmint = (e) => {
        e.preventDefault();

        const honeyPot = e.target['companyName'].value;
        if (honeyPot) return;
        emailjs
            .sendForm(
                'service_7hzcniw',
                'template_t7qpxtm',
                formRef.current,
                'M4bhQFulnpj1h714I'
            )
            .then(
                () => {
                    alert('Mensaje enviado correctamente 😊')
                    formRef.current.reset()
                },
                (error) => {
                    alert('Hubo un problema al enviar 😞')
                }
            );
    }



    return (
        <>
            <section id="contacMe" className="min-h-screen flex items-center justify-center flex-col gap-8 p-6 bg-[url(/ContactMe.webp)] bg-cover bg-no-repeat bg-center bg-fixed">
                <h1 className="text-4xl md:text-6xl font-bold mt-32 lg:mt-0 text-center">Pogámonos en Contacto😊</h1>
                <div className="m-8 contact w-screen lg:w-full rounded-xl bg-gradient-to-tr from-20% from-primary-color to-85% to-primary-color-4">
                    <form
                        onSubmit={handleSubmint}
                        ref={formRef}
                        className="flex flex-col p-8 gap-6 items-center"
                    >
                        <label className="text-xl font-semibold" htmlFor="userName">Nombre:</label>
                        <input className="rounded-2xl text-center p-2 shadow-md shadow-black focus:scale-110 transition-transform duration-200 bg-white/65 text-primary-color-5 text-xl" type="text" name="userName" id="name" required />
                        <label className="text-xl font-semibold" htmlFor="userEmail">Email:</label>
                        <input className="rounded-2xl text-center p-2 shadow-md shadow-black focus:scale-110 transition-transform duration-200 bg-white/65 text-primary-color-5 text-xl" type="email" name="userEmail" id="email" required />
                        <label className="text-xl font-semibold" htmlFor="userMessage" >Mensaje:</label>
                        <textarea name="userMessage" id="message" className="rounded-2xl text-center p-2 shadow-md shadow-black focus:scale-110 transition-transform duration-200 bg-white/65 text-primary-color-5 text-xl" cols="30" rows="5" required></textarea>

                        {/* This input is for spam or bots */}
                        <input type="text" name="companyName" className="hidden" id="companyName" />

                        <button type="submit" className="p-4 rounded-2xl hover:scale-125 transition-transform duration-200 shadow-md shadow-black font-semibold">Enviar</button>
                    </form>
                </div>
            </section>
        </>
    )
}