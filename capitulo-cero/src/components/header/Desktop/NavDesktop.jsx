import { Lupa } from "../../../assets/icons/header/index.js"

const QueryBooks = () => {
    return (
        <div className='w-full sm:w-1/4 h-10 rounded-2xl flex items-center  sm:text-sm'>
            <img src={Lupa} alt="Lupa" className='absolute pl-2' />
            <input type="text" placeholder="Buscar libros..." className="border border-gray-300 px-8 py-1 w-full rounded-2xl h-full bg-[#F3E8DD]" />
        </div>
    )
}
export const NavDesktop = () => {
    return (
        <nav className='sm:flex justify-center hidden items-center sm:w-[80%] sm:gap-2 lg:gap-10 text-base'>
            <QueryBooks />
            <ul className='flex items-center sm:gap-10  sm:text-sm  text-[#6C4A09] text-lg'>
                <li className='hover:text-[#B14A0B] transition-all duration-500 ease-in-out cursor-pointer'>Inicio</li>
                <li className='hover:text-[#B14A0B] transition-all duration-500 ease-in-out cursor-pointer'>Libros</li>
                <li className='hover:text-[#B14A0B] transition-all duration-500 ease-in-out cursor-pointer'>Autores</li>
            </ul>
            <button className='flex items-center justify-center bg-[#D9822B]  sm:text-sm
                    rounded-2xl text-[#FFFFFF] w-40 h-10 cursor-pointer hover:bg-[#B14A0B] transition-all duration-500 ease-in-out'>
                Iniciar sesión
            </button>
        </nav>
    )
}