import { BurgerBTN, CloseBTN, Lupa } from "../../assets/icons"

export const NavMobile = ({ isOpen, setIsOpen }) => {
    const QueryBooks = () => {
        return (
            <div className='w-full sm:w-1/4 h-10 rounded-2xl flex items-center  sm:text-sm'>
                <img src={Lupa} alt="Lupa" className='absolute pl-2' />
                <input type="text" placeholder="Buscar libros..." className="border border-gray-300 px-8 py-1 w-full rounded-2xl h-full bg-[#F3E8DD]" />
            </div>
        )
    }
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(!isOpen);
    }

    const ToggleBurger = () => {
        return (

            isOpen
                ? (
                    <button onClick={closeMenu} className='z-50 '>
                        <img src={CloseBTN} alt="Close BTN" />
                    </button>
                ) : (
                    <button onClick={toggleMenu}>
                        <img src={BurgerBTN} alt="Burger BTN" />
                    </button>
                )

        )
    }

    return (
        <div className='flex sm:hidden'>
            <ToggleBurger />
            <nav className={`fixed right-0 top-0 flex items-center w-full h-64 transform transition-all duration-500 ease-in-out bg-[#FFF8F0] -z-10
            ${isOpen ? 'translate-y-16 ' : '-translate-y-full'}`}>
                <ul className='w-full h-full flex flex-col justify-center px-5 text-sm text-[#6C4A09]'>
                    <QueryBooks />
                    <li className='grow flex items-center'>Inicio</li>
                    <li className='grow flex items-center' >Libros</li>
                    <li className='grow flex items-center'>Autores</li>

                    <button className='flex grow items-center justify-center bg-[#D9822B]
                    rounded-2xl text-[#FFFFFF] mb-4'>
                        Iniciar sesión
                    </button>
                </ul>
            </nav>
        </div>
    )
}