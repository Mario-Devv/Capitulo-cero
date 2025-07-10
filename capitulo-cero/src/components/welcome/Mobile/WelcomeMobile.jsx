import { Book1, Book2, Book3 } from '../../../assets/Img/sections/welcome/Books.js'
import { People, Lupa } from '../../../assets/icons/sections/welcome/icons.js'

export const WelcomeMobile = () => {
    return (
        <section className="bg-gradient-to-r from-[#F3E8DD] to-[#FFF8F0] sm:hidden flex flex-col pt-20 pb-4 px-4 ">

            <div>
                <h2 className='font-bold text-2xl flex flex-col justify-center mb-1 text-[#3E2F1C] z-50'>
                    Descubre tu próxima
                    <span className='text-[#D9822B]'> aventura literaria</span>
                </h2>

            </div>

            <div
                className='
                flex
                justify-start
                items-start
                flex-col
                text-[#6F5841]
                '
            >

                <p>La literatura te llama</p>
                <p>Descubre, guarda y comparte las historias que marcarán tu camino como lector.</p>
            </div>

            <div className='flex flex-col mt-4 gap-5 '>
                <button className='bg-[#D9822B] h-12 rounded-xl text-[#FFFFFF] flex flex-row items-center justify-center px-2 gap-2'>
                    <img src={Lupa} alt="Lupa" />
                    Explorar libros
                </button>
                <button className='flex items-center justify-center gap-2
                border-1 border-[#D9822B] h-12 rounded-xl text-[#6C4A09]'>
                    <img src={People} alt="Comunidad" />
                    Unirse a la comunidad
                </button>
            </div>

            <div className='relative flex justify-center items-center mt-8 w-full h-[320px] sm:h-[360px] md:h-[400px]'>
                {/* Libro central */}
                <span className='absolute border-8 rounded-2xl border-white bg-white'>
                    <img className='rounded-xl' src={Book1} alt="Libro-welcome1" />
                </span>

                {/* Libro izquierdo rotado */}
                <span className='absolute -rotate-12 border-8 rounded-2xl border-white bg-white transform -translate-x-20 -translate-y-6'>
                    <img className='rounded-xl' src={Book2} alt="Libro-welcome2" />
                </span>

                {/* Libro derecho rotado */}
                <span className='absolute rotate-12 border-8 rounded-2xl border-white bg-white transform translate-x-20 translate-y-6'>
                    <img className='rounded-xl' src={Book3} alt="Libro-welcome3" />
                </span>
            </div>

        </section>
    )
}