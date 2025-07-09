import { Data } from "./Footer"

const Mobile = () => {
    return (
        <footer className="sm:hidden bg-[#3E2F1C] p-4 pt-10 flex flex-col gap-5">
            <article className="flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                    {Data.icon &&
                        Data.icon.map(I => (
                            <img src={I.icon} alt={I.name} />
                        ))}
                    <h2 className="text-2xl font-bold text-[#FFFFFF]">
                        {Data.title}
                    </h2>
                </div>

                <p className="text-[#D1D5DB] text-sm mb-2">
                    {Data.description}
                </p>

                <div className="flex gap-2">
                    {Data.favicons &&
                        Data.favicons
                            .map(D => (
                                <img src={D.icon} alt={D.name} />
                            ))
                    }
                </div>
            </article>

            <article className="mt-4 flex flex-col gap-2">
                {
                    Data &&
                    Data.list
                        .map(D => (
                            <>
                                <h2 className="text-xl text-[#FFFFFF] font-bold">
                                    {D.title}
                                </h2>

                                <nav>
                                    <ul className="flex flex-col gap-3 text-sm 
                                    text-[#D1D5DB] mb-3">
                                        {
                                            D.elements &&
                                            D.elements.map(elements => (
                                                <li className="flex flex-col justify-center">
                                                    {elements}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            </>
                        ))
                }
            </article>

            <article className="mt-5 flex justify-center items-center w-full">
                <p className="w-full border-t-1 border-[#374151] py-10 text-[#9CA3AF] text-sm 
                ">
                    &copy; 2025 Capítulo cero. Todos los derechos reservados.
                </p>
            </article>
        </footer>
    )

}

const Desktop = () => {
    return (
        <footer className="hidden bg-[#3E2F1C] p-4 pt-10 sm:flex flex-row gap-5
        items-center justify-around">
            <article className="flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                    {Data.icon &&
                        Data.icon.map(I => (
                            <img src={I.icon} alt={I.name} />
                        ))}
                    <h2 className="text-2xl font-bold text-[#FFFFFF]">
                        {Data.title}
                    </h2>
                </div>

                <p className="text-[#D1D5DB] text-sm mb-2">
                    {Data.description}
                </p>

                <div className="flex gap-2">
                    {Data.favicons &&
                        Data.favicons
                            .map(D => (
                                <img src={D.icon} alt={D.name} />
                            ))
                    }
                </div>
            </article>

            <article className="mt-4 flex flex-row gap-12 items-center">
                {
                    Data &&
                    Data.list
                        .map(D => (
                            <>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl text-[#FFFFFF] font-bold">
                                        {D.title}
                                    </h2>

                                    <nav>
                                        <ul className="flex flex-col gap-3 text-base 
                                    text-[#D1D5DB] mb-3">
                                            {
                                                D.elements &&
                                                D.elements.map(elements => (
                                                    <li className="flex flex-col justify-center cursor-pointer">
                                                        {elements}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </>
                        ))
                }
            </article>

            <article className="mt-5 flex justify-center items-center ">
                <p className="w-full border-t-1 border-[#374151] py-10 text-[#9CA3AF] text-sm 
                ">
                    &copy; 2025 Capítulo cero. Todos los derechos reservados.
                </p>
            </article>
        </footer>
    )

}

export const Footer = () => {

    return (
        <>
            <Mobile />
            <Desktop />
        </>
    )
} 