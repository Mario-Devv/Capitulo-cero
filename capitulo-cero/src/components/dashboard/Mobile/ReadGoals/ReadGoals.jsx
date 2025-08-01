import { Upp } from "../../../../assets/icons/dashboard"

export const ReadGoalsMobile = () => {
    return (
        <section>
            <div>
                <img src={Upp} alt="" />
                <h3>Meta de lectura</h3>
                <div>
                    <span>
                        <p>12</p>
                        <p>de 30</p>
                    </span>

                    <p>Has completado el <span>40%</span> de tu meta anual</p>

                    <button>Actualizar meta</button>
                </div>
            </div>
        </section>
    )
}