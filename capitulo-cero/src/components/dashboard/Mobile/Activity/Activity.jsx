import { Star } from "../../../../assets/icons/dashboard"

export const ActivityMobile = () => {
    return (
        <section>
            <div>
                <h3>Actividad reciente</h3>
                <button>Ver historial &gt;</button>
            </div>

            <div>
                {/* different icons depending on the condition */}
                <img src={Star} alt="" />
                <p>Creaste una reseña "La casa de los espíritus" de Isabel Allende</p>
                <p>Hace 2 días</p>
                <button>Editar reseña</button>
            </div>
        </section>
    )
}