import { useNavigate } from "react-router-dom";
import { BurgerBTN, CloseBTN, Lupa } from "../../../assets/icons/header"
import { useState } from "react";
import toast from "react-hot-toast"
import { BooksMobile } from "../../Books/mobile/Books";


export const NavMobile = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate()

    const QueryBooks = () => {
        const [search, setSearch] = useState('');
        const handleSearchBooks = (e) => {
            e.preventDefault();

            const query = async () => {
                const response = await fetch(`http://localhost:3000/users/books/search?title=${search}`)

                const data = await response.json();

                if (!response.ok) {
                    toast.error(data.message);
                    return;
                }

                if (response.ok) {
                    navigate('/books', { state: data })
                }
            }

            query();
        }

        return (
            <form onSubmit={handleSearchBooks}

                className='w-full relative sm:w-1/4 h-10 rounded-2xl flex items-center  sm:text-sm'>
                <img src={Lupa} alt="Lupa" className='absolute pl-2 left-0' />

                <input type="text" placeholder="Buscar libros..."
                    className="border border-gray-300 px-8 py-1 w-full rounded-2xl h-full bg-[#F3E8DD]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit">Buscar</button>

            </form>
        )
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
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

    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <div className='flex sm:hidden z-20'>
            <ToggleBurger />
            <nav className={`fixed right-0 top-0 flex items-center w-full h-64 transform transition-all duration-500 ease-in-out bg-[#FFF8F0] 
            ${isOpen ? 'translate-y-16 ' : '-translate-y-full'}`}>
                <ul className='w-full h-full flex flex-col justify-center px-5 text-sm text-[#6C4A09]'>
                    <QueryBooks />
                    <li className='grow flex items-center'>Inicio</li>
                    <li className='grow flex items-center' >Libros</li>
                    <li className='grow flex items-center'>Autores</li>

                    <button onClick={goToLogin} className='flex grow items-center justify-center bg-[#D9822B]
                    rounded-2xl text-[#FFFFFF] mb-4'>
                        Iniciar sesión
                    </button>
                </ul>
            </nav>
        </div>
    )
}