import { Book } from "../../../assets/icons/header"
import { NavList } from "../NavList"

export const HeaderDesktop = () => {
    return (
        <header className="hidden w-full h-16 sm:flex items-center justify-between px-4 bg-[#FFF8F0] z-50 ">
            <div className="flex items-center sm:gap-2">
                <img src={Book} alt="Book Icon" />
                <h1 className="text-[#3E2F1C] font-bold text-lg sm:text-sm text-center">Capítulo Cero</h1>
            </div>
            <NavList />
        </header>
    )
}