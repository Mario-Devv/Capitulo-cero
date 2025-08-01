import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';



export const NavMobile = () => {
    return (
        <>
            <section>
                <Swiper
                    className=' w-full h-14  whitespace-nowrap text-[#6F5841] 
                    border-b border-[#F3E8DD] mb-4'
                    slidesPerView={2}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                >
                    <SwiperSlide >
                        <p className='flex items-center justify-center h-full'>
                            Inicio
                        </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <p className='flex items-center justify-center h-full'>
                            Leyendo actualmente
                        </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <p className='flex items-center justify-center h-full'>
                            Quiero leer
                        </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <p className='flex items-center justify-center h-full'>
                            Terminados
                        </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <p className='flex items-center justify-center h-full'>
                            Mis reseñas
                        </p>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}