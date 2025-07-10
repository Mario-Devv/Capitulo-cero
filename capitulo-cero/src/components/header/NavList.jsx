import { useState } from "react";
import { NavDesktop } from './Desktop/NavDesktop.jsx';
import { NavMobile } from './Mobile/NavMobile.jsx';
export const NavList = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
            <NavDesktop />
        </>
    )
}