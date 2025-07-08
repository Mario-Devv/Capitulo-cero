import Reviews from './Reviews.json'
import { ShowReviews } from './ShowReviews.jsx'
import { Check, Person, Speak } from '../../assets/icons/ourCommunity/index.js'


export const OurCommunity = () => {

    const RecentReviews = () => {
        return (

            <div className=' bg-[#FFFFFF] p-4 px-6 w-full flex flex-col gap-4  rounded-md border border-[#F3E8DD]'>
                <div className='flex gap-2'>
                    <img
                        src={Speak} alt="Icono comentario"
                    />
                    <h3 className='text-xl font-bold text-[#3E2F1C]'>
                        Reseñas recientes
                    </h3>
                </div>

                <ShowReviews />
                <button className='w-full h-12 border border-[#D9822B] 
                    text-[#D9822B] rounded-sm'>
                    Ver más reseñas
                </button>
            </div>

        )
    }

    const EnjoyOurComm = () => {
        return (
            <div className='bg-[#3E2F1C] p-4 px-6 w-full flex flex-col gap-4  rounded-md border border-[#F3E8DD] text-[#FFFFFF]'>
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

    return (
        <section className="px-4 pb-6 bg-gradient-to-r from-[#F3E8DD] to-[#FFF8F0]">
            <div className="flex flex-col items-center mb-2">
                <h2 className="text-2xl text-center text-[#3E2F1C] font-bold py-2 pt-4 ">
                    Nuestra comunidad
                </h2>
                <hr className="w-30 h-2 border-0 bg-[#D9822B] rounded-xl" />
                <p className="text-[#6F5841] mb-4 text-center mt-4">
                    Únete a miles de lectores apasionados que comparten su amor por la literatura en
                    español.
                </p>
            </div>

            <section className='flex flex-col gap-7'>
                <RecentReviews />
                <EnjoyOurComm />
            </section >
        </section>
    )
}