import { Upp } from "../../../../assets/icons/dashboard"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export const ReadGoalsMobile = () => {
    const Progreso = () => {
        const value = 19;
        const maximo = 122
        const percentage = (value / maximo) * 100;

        return (
            <>
                <CircularProgressbar
                    value={percentage}
                    text={`${value} de ${maximo}`}
                    styles={buildStyles({
                        pathColor: '#D9822B',
                        textColor: '#3E2F1C',
                        trailColor: '#F3E8DD',
                        backgroundColor: '#3E2F1C',
                        textSize: '12px'
                    })}
                />
                <p>Has completado el <span>{percentage.toFixed(0)}%</span> de tu meta anual</p>

            </>

        )
    }

    return (
        <section className="bg-[#FFFFFF] border-1 my-4 p-4 border-[#F3E8DD] shadow-lg">
            <div>
                <div className="flex gap-2">
                    <img src={Upp} alt="" />
                    <h3 className="text-xl">Meta de lectura</h3>
                </div>
                <div>
                    <Progreso />
                    <button>Actualizar meta</button>
                </div>
            </div>
        </section>
    )
}