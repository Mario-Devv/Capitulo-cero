import { Star, Oclock } from "../../../../assets/icons/dashboard"

export const ActivityMobile = () => {
    return (
        <section className="bg-[#FFFFFF] border-1 my-4 p-4 border-[#F3E8DD] shadow-lg">
            <div className="flex justify-between mb-2">
                <div className="flex gap-2">
                    <img src={Oclock} alt="Icono reloj" />
                    <h3 className="text-xl text-[#3E2F1C]">Actividad reciente</h3>
                </div>
                <button className="text-sm text-[#D9822B]">Ver historial &gt;</button>
            </div>

            <div className="flex flex-col">
                {/* different icons depending on the condition */}
                <div className="flex items-center gap-2 mb-4">
                    <img className="bg-[#FFF8F0] p-2 rounded-full" src={Star} alt="" />
                    <p className="text-sm">Creaste una reseña "La casa de los espíritus" de Isabel Allende</p>
                    <p className="text-sm">Hace 2 días</p>
                </div>

                <div className="flex pl-10 mb-4">
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                </div>
                <div className="pl-10 border-b border-[#F3E8DD] pb-4">
                    {/* Next step is create it with useState */}
                    <p className="text-sm line-clamp-3 mb-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore adipisci, alias earum quasi porro distinctio exercitationem quas? Similique, mollitia. Quo tempora cumque sit sed a, quis doloremque fugiat praesentium ea.
                        Consectetur delectus iusto, illo reprehenderit voluptatum nemo quo repellendus. Fuga ratione id vero quia minus aliquid quas ipsam! Ducimus assumenda quidem excepturi itaque animi! Aspernatur porro iusto libero aliquid enim?
                        Rem quod libero ipsam voluptatem officia maxime excepturi qui optio dolor deleniti eos animi cupiditate est reiciendis voluptatum, laborum enim adipisci sit odit! Repellat, quisquam quasi! Cum quis fugit dolorum.
                    </p>
                    <button className="text-sm text-[#D9822B]">Editar reseña</button>
                </div>

            </div>
        </section>
    )
}