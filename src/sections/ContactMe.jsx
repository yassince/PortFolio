export default function ContactMe({}) {
    return (
        <>
            <section id="contacMe" className="min-h-screen flex items-center justify-center flex-col gap-8 p-6 bg-[url(/contactMe.webp)] bg-cover bg-no-repeat bg-center bg-fixed">
                <h1 className="text-4xl md:text-6xl font-bold mt-32 lg:mt-0 text-center">Pogámonos en Contacto😊</h1>
                <div className="m-8 contact w-screen lg:w-full rounded-xl bg-gradient-to-tr from-20% from-primary-color to-85% to-primary-color-4">
                    <form action="" method="post" className="flex flex-col p-8 gap-6 items-center">
                        <label className="text-xl font-semibold" htmlFor="name">Nombre:</label>
                        <input className="rounded-2xl text-center p-2 shadow-md shadow-black focus:scale-110 transition-transform duration-200 bg-white/65 text-primary-color-5 text-xl" type="text" name="name" id="name" required/>
                        <label className="text-xl font-semibold" htmlFor="email">Email:</label>
                        <input className="rounded-2xl text-center p-2 shadow-md shadow-black focus:scale-110 transition-transform duration-200 bg-white/65 text-primary-color-5 text-xl" type="email" name="email" id="email" required/>
                        <label className="text-xl font-semibold" htmlFor="message" >Mensaje:</label>
                        <textarea name="message" id="message" className="rounded-2xl text-center p-2 shadow-md shadow-black focus:scale-110 transition-transform duration-200 bg-white/65 text-primary-color-5 text-xl" cols="30" rows="5" required></textarea>
                        <button type="submit" className="p-4 rounded-2xl hover:scale-125 transition-transform duration-200 shadow-md shadow-black font-semibold">Enviar</button>
                    </form>
                </div>
            </section>
        </>
    )
}