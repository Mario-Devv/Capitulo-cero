import { Speak } from "../../../assets/icons/ourCommunity"
import { ShowReviews } from "../../../sections/ourcom/ShowReviews"

export const RecentReviewsMobile = () => {
    return (

        <div className='sm:hidden bg-[#FFFFFF] p-4 px-6 w-full flex flex-col gap-4  rounded-md border border-[#F3E8DD]'>
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