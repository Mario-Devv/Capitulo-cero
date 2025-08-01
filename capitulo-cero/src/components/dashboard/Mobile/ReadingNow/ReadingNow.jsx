import { Book, Clock, WhiteBook } from "../../../../assets/icons/dashboard"
import { Portada, Portada1 } from "../../../../assets/Img/sections/Dashboard"

export const ReadingNowMobile = () => {
    return (
        <section className="flex flex-col bg-[#FFFFFF] border-1 border-[#F3E8DD]
            rounded-lg shadow-lg p-4">
            <div className="flex justify-around gap-4 pb-2">
                <img className="" src={Book} alt="Book" />
                <h3 className="text-[#3E2F1C] text-base font-bold">Leyendo actualmente</h3>
                <button className="text-sm text-[#D9822B]">Ver todos &gt;</button>
            </div>
            {/* Get books for user of the BBDD, Now I make the design  */}

            <div className="flex flex-col">
                <div className="h-[160px] pb-2">
                    <img className="w-full h-full object-cover" src={Portada1} alt="Libro_Test" />
                </div>

                <h4 className="text-[#3E2F1C] text-xl font-bold">El laberinto de los espíritus</h4>
                <p className="text-[#6F5841] text-lg">Carlos Ruiz Zafón</p>
            </div>
            {/* Make progress bar */}
            <div className="grid grid-cols-2 gap-1 mt-2">
                <p className="text-[#6F5841] text-sm">Progreso</p>
                <p className="flex justify-end text-[#D9822B] text-sm">50%</p>
                <progress className="w-full col-span-2 appearance-none 
                [&::-webkit-progress-bar]:bg-[#F3E8DD] 
                [&::-webkit-progress-value]:bg-[#D9822B]
                [&::-webkit-progress-value]:rounded-xl
                [&::-webkit-progress-bar]:rounded-xl
                h-2 mb-2"
                    value="50"
                    max="100">
                </progress>
            </div>

            <div className="flex justify-between  gap-2 my-4">
                <div className="flex gap-1 items-center">
                    <img src={Clock} alt="Reloj" />
                    <p className="text-[#6F5841]">Última lectura: <br /> hace 2 días</p>
                </div>
                <button className="bg-[#F3E8DD] p-2 text-sm text-[#6C4A09] rounded-xl">
                    Continuar leyendo
                </button>
            </div>

            {/* New BOOKs for examples */}
            <div className="flex flex-col mt-4">
                <div className="h-[160px] pb-2">
                    <img className="w-full h-full object-cover" src={Portada1} alt="Libro_Test" />
                </div>

                <h4 className="text-[#3E2F1C] text-xl font-bold">El laberinto de los espíritus</h4>
                <p className="text-[#6F5841] text-lg">Carlos Ruiz Zafón</p>
            </div>
            {/* Make progress bar */}
            <div className="grid grid-cols-2 gap-1 mt-2">
                <p className="text-[#6F5841] text-sm">Progreso</p>
                <p className="flex justify-end text-[#D9822B] text-sm">50%</p>
                <progress className="w-full col-span-2 appearance-none 
                [&::-webkit-progress-bar]:bg-[#F3E8DD] 
                [&::-webkit-progress-value]:bg-[#D9822B]
                [&::-webkit-progress-value]:rounded-xl
                [&::-webkit-progress-bar]:rounded-xl
                h-2 mb-2"
                    value="50"
                    max="100">
                </progress>
            </div>

            <div className="flex justify-between  gap-2 my-4">
                <div className="flex gap-1 items-center">
                    <img src={Clock} alt="Reloj" />
                    <p className="text-[#6F5841]">Última lectura: <br /> hace 2 días</p>
                </div>
                <button className="bg-[#F3E8DD] p-2 text-sm text-[#6C4A09] rounded-xl">
                    Continuar leyendo
                </button>
            </div>




            <button className="p-4 bg-[#D9822B] text-[#FFFFFF] flex items-center justify-center rounded-xl">
                <img src={WhiteBook} alt="Libro" />
                <p>Añadir nuevo libro</p>
            </button>
        </section>

    )
}