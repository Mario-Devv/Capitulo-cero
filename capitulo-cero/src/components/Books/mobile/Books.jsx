import { useLocation } from "react-router-dom";


export const BooksMobile = ({ Books }) => {
    const location = useLocation();
    const books = location.state || Books;

    return (
        <>
            <h1>Libros encontrados:</h1>
            <ul>
                {books &&
                    books.map((book) => (
                        <>
                            <li key={book.id}>{book.title}</li>
                            <li>{book.auth}</li>
                            <img src={book.image} alt={book.title} />
                        </>
                    ))}
            </ul>
        </>
    )
}