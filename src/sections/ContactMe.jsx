export default function ContactMe({}) {
    return (
        <>
            <section id="contacMe" className="min-h-screen flex items-center justify-center flex-col gap-8 p-6">
                <h1 className="text-4xl md:text-6xl font-bold mt-32 lg:mt-0 text-center">Pogámonos en Contacto😊</h1>
                <div className="m-8 contact w-screen lg:w-[850] bg-gradient-to-t from-primary-pruple to-purple-500">
                    <form action="" method="post" className="flex flex-col p-8 gap-6 items-center">
                        <label className="text-xl font-semibold" htmlFor="name">Nombre:</label>
                        <input className="border-2 border-black rounded-2xl text-center p-2 shadow-md shadow-black focus:scale-110 transition-transform duration-200" type="text" name="name" id="name" required/>
                        <label className="text-xl font-semibold" htmlFor="email">Email:</label>
                        <input className="border-2 border-black rounded-2xl text-center p-2 shadow-md shadow-black focus:scale-110 transition-transform duration-200" type="email" name="email" id="email" required/>
                        <label className="text-xl font-semibold" htmlFor="message" >Mensaje:</label>
                        <textarea name="message" id="message" className="text-xlas border-2 border-black rounded-2xl text-center p-2 shadow-md shadow-black focus:scale-110 transition-transform duration-200" cols="30" rows="5" required></textarea>
                        <button type="submit" className="p-2 border-2 rounded-2xl hover:scale-125 transition-transform duration-200 shadow-md shadow-black">Enviar</button>
                    </form>
                </div>
            </section>
        </>
    )
}