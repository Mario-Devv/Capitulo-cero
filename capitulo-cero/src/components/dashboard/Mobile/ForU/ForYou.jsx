import { Add } from "../../../../assets/icons/dashboard"

export const FourYouMobile = () => {
    return (
        <section>
            <div>
                <h3>Recomendados para ti</h3>
                <button>Ver más &gt;</button>
            </div>

            <div>
                {/* Imagen del libro */}
                <h4>Reina roja</h4>
                <p>Juan Gómez Jurado</p>
                <img src={Add} alt="" />
            </div>
            <button>Descubrir más libros</button>

        </section>
    )
}