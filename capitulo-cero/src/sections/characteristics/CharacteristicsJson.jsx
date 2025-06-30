import { Data } from './Data.js'

export const CharacteristicsJson = () => {


    return (

        Data.map(e => (
            <div className="bg-[#FFFFFF] w-full h-60 rounded-xl shadow shadow-black/50 flex flex-col p-4 gap-2">
                <span className="block">
                    <img className="rounded-full bg-[#FFF8F0] p-2" src={e.favicon} alt={e.title} />
                </span>
                <h3 className="text-xl font-bold text-[#3E2F1C]">{e.title}</h3>
                <p className="text-[#6F5841]">{e.text}</p>
            </div>
        ))

    )
}