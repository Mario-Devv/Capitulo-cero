import { Bell, Search } from "../../../../assets/icons/dashboard"
import { user } from "../../../../assets/Img/sections/Dashboard"


export const WelcomeMobile = ({ username }) => {
    return (
        <>
            <section className="flex items-center gap-2">
                {/* Image User */}
                <div className="w-[25%]">
                    <img className="w-16 h-16 object-cover rounded-full" src={user} alt="usuario" />
                </div>
                <div className="w-[75%]flex flex-col w-full gap-4 items-center">
                    <h2 className="text-[#3E2F1C] font-bold text-2xl">
                        ¡Bienvenido {username}!
                    </h2>
                    {/* Add reading target for the user in BBDD */}
                    <p className="text-[#6F5841]">
                        <span className="text-[#D9822B]">
                            12 de 30 &nbsp;
                        </span>
                        libros leidos este año
                    </p>
                </div>
            </section>

            <section className="py-4 flex gap-5 items-center justify-center">
                <button className="bg-[#FFFFFF] border-1 border-[#F3E8DD] rounded-full p-2">
                    <img src={Bell} alt="Notifications" />
                </button>

                <form className="relative flex items-center">
                    <img className="absolute left-2" src={Search} alt="Search" />
                    <input
                        type="text"
                        placeholder="Buscar en mi biblioteca"
                        className="w-full border-1 h-10 rounded-2xl px-6 pl-8 bg-[#FFF8F0] text-[#6F5841] focus:outline-none border-[#F3E8DD] focus:ring-1 focus:ring-[#D9822B] text-sm"
                    />
                    {/* Add the books in the localstorage, for more dinamic, not add button for seach, the query should be seen on the screen */}
                </form>
            </section>
        </>
    )
}