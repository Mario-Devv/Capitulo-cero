import { CharacteristicsJson } from './CharacteristicsJson.jsx'

export const Characteristics = () => {


    const CharacteristicsMobile = () => {

        return (
            <section className="px-4 pb-6 bg-gradient-to-r from-[#F3E8DD] to-[#FFF8F0]">
                <div className="flex flex-col items-center mb-2">
                    <h2 className="text-2xl text-center text-[#3E2F1C] font-bold">Características principales</h2>
                    <hr className="w-40 h-2 border-0 bg-[#D9822B] rounded-xl" />
                </div>

                <p className="text-[#6F5841] mb-4">
                    Capitulo cero ofrece todo lo que necesitas para descubrir, compartir y disfrutar libros
                    en español.
                </p>

                <div className="flex flex-col gap-3 item justify-center items-center w-full">
                    <CharacteristicsJson />
                </div>

            </section>
        )
    }
    return (
        <CharacteristicsMobile />
    )
}