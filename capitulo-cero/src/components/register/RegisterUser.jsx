import { useState } from "react"
import { useRegisterUser } from "../../hooks/sections/register/Register"
import { Book } from "../../assets/icons/header"
import { Toaster } from "react-hot-toast"

export const RegisterUserMobile = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { register } = useRegisterUser()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(email, password)
    }


    return (
        <section className="sm:hidden bg-[#FFF8F0] w-full h-dvh flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-[#F3E8DD] p-5 flex w-[80%] h-[90%] flex-col rounded-sm justify-center border" action="">
                <section className="w-full h-[20%] flex flex-col  items-center mb-6">
                    <img className="w-22" src={Book} alt='Libro' />
                    <h2 className="text-4xl font-bold text-[#6C4A09]">Capitulo cero</h2>
                </section>

                <div className="flex flex-col gap-4 mb-4 text-[#6C4A09]">
                    <div className="flex flex-col">
                        <label className="text-[#3E2F1C] font-bold text-xl" htmlFor="email">Introduce tu email</label>
                        <input className="rounded-sm px-4 py-2 border border-[#D9822B]"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#3E2F1C] font-bold text-xl" htmlFor="password">Introduce tu contraseña</label>
                        <input className="rounded-sm px-4 py-2 border border-[#D9822B]"
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                    <button className="bg-[#D9822B] p-4 rounded-xl text-[#FFFFFF]">
                        Iniciar sesión
                    </button>

                    <button className="bg-[#FFF8F0] border border-[#D9822B] p-4 rounded-xl text-[#6C4A09]">
                        ¿Olvidaste tu contraseña?
                    </button>
                </div>

                {/* <button onClick={goToRegister}>¿Nuevo por aquí? <span className="text-[#D9822B] font-bold ">¡Registrate, es gratis!</span></button> */}

                <Toaster position="top-center" reverseOrder={false} />
            </form>
        </section>
    )

}