import { BooksCarruselMobile } from "./Carrusel/CarruselMobile.jsx"

export const PopularBooksMobile = () => {
    return (
        <section className='sm:hidden bg-[#F3E8DD] px-4 pt-5'>
            <div className='flex flex-col justify-center gap-3 mb-5'>
                <h2 className='text-[#3E2F1C] text-2xl font-bold'>Libros populares</h2>
                <p className='text-[#6F5841] text-base'>
                    Descubre los libros más leídos por nuestra comunidad
                </p>

            </div>

            <div >
                <BooksCarruselMobile />
            </div>

            <button className='w-full h-full my-7 p-4 bg-[#D9822B] text-[#FFFFFF] rounded-lg'>
                Explorar más libros
            </button>


        </section>
    )
}