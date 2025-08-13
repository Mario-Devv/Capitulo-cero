export const HandleTargets = ({ setGoals, setValue, setMaximo, maximo, value, goals, handleGoals }) => {

    const removeValue = () => setValue(prev => prev > 0 ? prev - 1 : 0);
    const addValue = () => setValue(prev => prev < maximo ? prev + 1 : maximo)
    const addMax = () => setMaximo(prev => prev + 1)
    const removeMax = () => setMaximo(prev => prev > value ? prev - 1 : maximo)

    return (

        goals ? (
            <form className="flex flex-col" onSubmit={handleGoals}>
                <div className="flex flex-col justify-center items-center text-[#6F5841] mt-2">
                    <p className="flex flex-col justify-center items-center">
                        Libros leidos actualmente  <span className="text-[#D9822B]">{value} libros</span>
                    </p>
                    <div className="my-2 flex gap-3">
                        <button className="bg-[#D9822B] text-[#FFFFFF] p-3 rounded-lg"
                            type="button"
                            onClick={addValue}>
                            +
                        </button>

                        <button className="bg-[#F3E8DD] text-[#6C4A09] p-3 rounded-lg"
                            type="button"
                            onClick={removeValue}>
                            -
                        </button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center text-[#6F5841] mt-2">
                    <p className="flex flex-col justify-center items-center">
                        Objetivo de lectura<span className="text-[#D9822B]">{maximo} libros</span>
                    </p>
                    <div className="my-2 flex gap-3">
                        <button className="bg-[#D9822B] text-[#FFFFFF] p-3 rounded-lg"
                            type="button"
                            onClick={addMax}>
                            +
                        </button>

                        <button className="bg-[#F3E8DD] text-[#6C4A09] p-3 rounded-lg"
                            type="button"
                            onClick={removeMax}>
                            -
                        </button>
                    </div>
                </div>

            </form>

        ) : (
            null
        )

    )
}
