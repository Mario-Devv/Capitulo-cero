import { Book } from "../../assets/icons"
import { NavList } from "./NavList"

export const HeaderMobile = () => {
    return (
        <header className="flex w-full h-16 sm:hidden items-center justify-between px-4 bg-[#FFF8F0] z-50">
            <div className="flex items-center gap-2">
                <img src={Book} alt="Book Icon" />
                <h1 className="text-[#3E2F1C] font-bold text-lg">Capítulo Cero</h1>
            </div>
            <NavList />
        </header>
    )
}
