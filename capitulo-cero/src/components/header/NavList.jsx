import { useState } from "react";
import { NavDesktop } from './NavDesktop.jsx';
import { NavMobile } from './NavMobile.jsx';
export const NavList = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} />
            <NavDesktop />
        </>
    )
}