import { Save, Start } from '../../assets/icons/sections/popularBooks/index.js'
import { PopularBooksDesktop } from './PopularBooksDesktop.jsx'
import { PopularBooksMobile } from './PopularBooksMobile.jsx'


export const PopularBooks = () => {

    return (
        <>
            <PopularBooksMobile />
            <PopularBooksDesktop />
        </>
    )
}