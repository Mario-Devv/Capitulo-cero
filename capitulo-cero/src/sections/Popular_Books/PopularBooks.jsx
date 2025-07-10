import { Save, Start } from '../../assets/icons/sections/popularBooks/index.js'
import { PopularBooksDesktop } from '../../components/popular_books/Desktop/PopularBooksDesktop.jsx'
import { PopularBooksMobile } from '../../components/popular_books/Mobile/PopularBooksMobile.jsx'



export const PopularBooks = () => {

    return (
        <>
            <PopularBooksMobile />
            <PopularBooksDesktop />
        </>
    )
}