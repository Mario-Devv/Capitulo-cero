import { Check, Person } from "../../../assets/icons/ourCommunity"

export const EnjoyOurCommDesktop = () => {
    return (
        <div className='hidden bg-[#3E2F1C] p-4 px-6 w-full sm:flex flex-col gap-4  rounded-md border border-[#F3E8DD] text-[#FFFFFF]'>
            <div className='flex flex-row items-center gap-2'>
                <img src={Person} alt="Person Icon" />
                <h3 className='text-lg'>Únete a nuestra comunidad</h3>
            </div>
            <p className='text-sm'>
                Crea tu cuenta gratuita para disfrutar de
                todas las ventajas de nuestra comunidad
                literaria:
            </p>

            <nav>
                <ul className='flex flex-col gap-7 text-sm'>
                    <li className='flex gap-2 items-center'>
                        <img className='bg-[#D9822B] rounded-full w-7 h-7 p-1' src={Check} alt="Check icon" />
                        Guarda tus libros favoritos y crea listas
                        personalizadas
                    </li>

                    <li className='flex gap-2 items-center'>
                        <img className='bg-[#D9822B] rounded-full w-7 h-7 p-1' src={Check} alt="Check icon" />

                        Comparte tus opiniones y reseñas con
                        otros lectores
                    </li>

                    <li className='flex gap-2 items-center'>
                        <img className='bg-[#D9822B] rounded-full w-7 h-7 p-1' src={Check} alt="Check icon" />

                        Descubre recomendaciones
                        personalizadas
                    </li>

                    <li className='flex gap-2 items-center'>
                        <img className='bg-[#D9822B] rounded-full w-7 h-7 p-1' src={Check} alt="Check icon" />

                        Conecta con otros amantes de la
                        literatura en español
                    </li>
                </ul>
            </nav>
            <button className='w-full bg-[#D9822B] h-12 rounded-lg my-4'>
                Registrarse ahora
            </button>

            <p className='flex items-center justify-center gap-3 pb-2'>
                ¿Ya tienes cuenta?
                <button className='text-[#D9822B]'>
                    Incia sesión
                </button>
            </p>
        </div>
    )
}
