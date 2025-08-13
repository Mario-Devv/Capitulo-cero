import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HandleTargets } from './HandleTargets';

export const Progress = ( {percentage, value, maximo, goals, setGoals, setMaximo, setValue}) => {

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-40">
                <CircularProgressbar
                    value={percentage}
                    text={`${value} de ${maximo}`}
                    styles={buildStyles({
                        pathColor: '#D9822B',
                        textColor: '#3E2F1C',
                        trailColor: '#F3E8DD',
                        backgroundColor: '#3E2F1C',
                        textSize: '12px',

                    })}
                />
            </div>
            <p className="text-[#6F5841]">Has completado el <span className="text-[#D9822B]">{percentage.toFixed(0)}%</span> de tu meta anual</p>


            <button onClick={() => { setGoals(!goals) }} className="border-1 border-[#D9822B] text-[#D9822B] w-full py-4 rounded-lg">Actualizar meta</button>

            <HandleTargets setGoals={setGoals} goals={goals} maximo={maximo} setMaximo={setMaximo} setValue={setValue} value={value} />

        </div>

    )
}