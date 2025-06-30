import { Lupa } from "../../assets/icons/header"
import { People } from "../../assets/icons/sections/welcome/icons"
import { Book1, Book2, Book3 } from "../../assets/Img/sections/welcome/Books"

export const WelcomeDesktop = () => {
    return (
        <section className="min-h-[50dvh] bg-gradient-to-r from-[#F3E8DD] to-[#FFF8F0] hidden sm:flex flex-row pt-20 px-10">
            <div className="flex flex-col grow w-1/2 ">
                <h2 className='font-bold sm:text-4xl md:text-5xl flex flex-col justify-center mb-3 text-[#3E2F1C]'>
                    Descubre tu próxima<span className='text-[#D9822B]'> aventura literaria</span>
                </h2>

                <div className='flex justify-start items-start flex-col text-[#6F5841] md:text-xl sm:text-base'>
                    <p>La literatura te llama</p>
                    <p>Descubre, guarda y comparte las historias que marcarán tu camino como lector.</p>
                </div>

                <div className='flex flex-row mt-8 gap-5 sm:flex-col md:flex-row '>
                    <button className='bg-[#D9822B] h-[50px] rounded-xl text-[#FFFFFF] flex flex-row items-center justify-center p-4 gap-2 hover:bg-[#B14A0B] transition-all duration-300 ease-in-out cursor-pointer'>
                        <img src={Lupa} alt="Lupa" />
                        Explorar libros
                    </button>
                    <button className='flex items-center justify-center gap-2 border-1 border-[#D9822B] h-[50px] rounded-xl text-[#6C4A09] p-4 hover:bg-[#F3E8DD] transition-all duration-300 ease-in-out cursor-pointer'>
                        <img src={People} alt="Comunidad" />
                        Unirse a la comunidad
                    </button>
                </div>
            </div>

            <div className='flex relative pl-4 mt-8 grow w-1/2 justify-center'>
                <div className='relative flex items-center justify-center w-full max-w-md h-[300px]'>
                    {/* Libro central */}
                    <div className='absolute border-8 rounded-2xl border-white bg-white'>
                        <img className='rounded-xl ' src={Book1} alt="Libro-welcome1" />
                    </div>

                    {/* Libro izquierdo (rotado) */}
                    <div className='absolute -rotate-12 left-5 -top-5 z-10 border-8 rounded-2xl border-white bg-white'>
                        <img className='rounded-xl ' src={Book2} alt="Libro-welcome2" />
                    </div>

                    {/* Libro derecho (rotado) */}
                    <div className='absolute rotate-12 -right-0 top-10 z-10 border-8 rounded-2xl border-white bg-white'>
                        <img className='rounded-xl ' src={Book3} alt="Libro-welcome3" />
                    </div>
                </div>
            </div>

        </section>
    )
}