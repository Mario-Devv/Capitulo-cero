
import { NavList } from "./NavList"
import { Book } from "../../assets/icons"
import { HeaderDesktop } from "./HeaderDesktop.jsx"
import { HeaderMobile } from "./HeaderMobile.jsx"



export const Header = () => {
    return (
        <>
            <HeaderMobile />
            <HeaderDesktop />
        </>
    )
}