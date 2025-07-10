import Books from '../../../../data/popular_books/Books.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../../Carrusel/stylebtn.css'

import { Save, Start } from '../../../../assets/icons/sections/popularBooks';

export const BooksCarruselMobile = () => {
    return (
        <>
            <Swiper
                modules={[FreeMode, Pagination, Navigation, Autoplay]}
                spaceBetween={20}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    }
                }}
                slidesPerView={1}
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
                speed={1000}
            >


                {Books.items.map(e => (
                    <SwiperSlide>
                        <div key={e.id} className='flex flex-col h-[376px] bg-[#FFFFFF] rounded-xl'>
                            <div className='flex justify-end w-full h-[70%] overflow-hidden z-50'>
                                <img className='absolute m-2 p-1.5 rounded-full bg-[#FFFFFF] shadow-lg shadow-black' src={Save} alt="Save Icon" />
                                < img className='w-full h-full object-cover rounded-xl' src={e.volumeInfo.imageLinks.smallThumbnail} alt={e.volumeInfo.title || "Libro"} />
                            </div>

                            <div className='h-[30%] p-4'>
                                <h3 className='text-[#3E2F1C] font-bold text-lg'>
                                    {e.volumeInfo.title}
                                </h3>
                                {e.volumeInfo.authors ? (
                                    <p className='text-[#6F5841] text-sm'>{e.volumeInfo.authors[0]}</p>
                                ) : (<p>No se ha encontrado autor</p>)}
                            </div>

                            <div className='flex flex-row justify-between px-4 pb-5 gap-1 '>
                                {e.volumeInfo.averageRating ? (
                                    <span className='flex gap-2'>
                                        <img src={Start} alt="Reviews icon" />
                                        <p className='text-[#3E2F1C]'>{e.volumeInfo.averageRating}</p>
                                    </span>
                                ) : (
                                    <p className='text-[#3E2F1C]'>Sin reseñas</p>
                                )}

                                <button className='text-[#D9822B]'>Ver detalles</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}