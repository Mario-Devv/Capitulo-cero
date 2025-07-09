
import { RecentReviews } from '../../components/ourcom/OurCommunity.jsx'


export const OurCommunity = () => {

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

            <section className='flex flex-col sm:flex-row gap-7'>
                <RecentReviews />
            </section>
        </section>
    )
}