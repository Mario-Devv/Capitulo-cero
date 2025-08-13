import { useState } from "react";
import { Upp } from "../../../../assets/icons/dashboard"
import {Progress} from './Progress.jsx'
export const ReadGoalsMobile = () => {
    const [goals, setGoals] = useState(false)
    const [value, setValue] = useState(19);
    const [maximo, setMaximo] = useState(50);
    const percentage = (value / maximo) * 100;

    return (
        <section className="bg-[#FFFFFF] border-1 my-4 p-4 border-[#F3E8DD] shadow-lg">
            <div>
                <div className="flex gap-2">
                    <img src={Upp} alt="" />
                    <h3 className="text-xl">Meta de lectura</h3>
                </div>
                <div className="py-4">
                    <Progress goals={goals} maximo={maximo} percentage={percentage} setGoals={setGoals} setMaximo={setMaximo} 
                    setValue={setValue} value={value}
                    />
                </div>
            </div>
        </section>
    )
}