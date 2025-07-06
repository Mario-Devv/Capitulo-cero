import Reviews from '../Reviews.json'
import { ShowReviews } from '../ShowReviews'
import { useComments } from '../useComments'
import { Speak } from '../../../assets/icons/ourCommunity/index.js'


export const OurCommunity = () => {
    const firstThreeReviews = useComments(Reviews)
    return (
        <section className="px-4 pb-6 bg-gradient-to-r from-[#F3E8DD] to-[#FFF8F0]">
            <div className="flex flex-col items-center mb-2">
                <h2 className="text-2xl text-center text-[#3E2F1C] font-bold pb-2">
                    Nuestra comunidad
                </h2>
                <hr className="w-30 h-2 border-0 bg-[#D9822B] rounded-xl" />
                <p className="text-[#6F5841] mb-4 text-center mt-4">
                    Únete a miles de lectores apasionados que comparten su amor por la literatura en
                    español.
                </p>
            </div>

            <section>
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

                <div>
                    <h3>Únete a nuestra comunidad</h3>
                    <button>
                        Registrarse ahora
                    </button>
                    <p>
                        ¿Ya tienes cuenta?
                        <button>
                            Incia sesión
                        </button>
                    </p>
                </div>

            </section >
        </section>
    )
}