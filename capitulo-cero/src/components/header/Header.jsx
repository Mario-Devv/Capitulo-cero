import { HeaderDesktop } from "./Desktop/HeaderDesktop.jsx"
import { HeaderMobile } from "./Mobile/HeaderMobile.jsx"



export const Header = () => {
    return (
        <>
            <HeaderMobile />
            <HeaderDesktop />
        </>
    )
}