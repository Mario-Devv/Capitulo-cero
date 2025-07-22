import { useState } from "react"
import { Book } from "../../../assets/icons/header"
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useLogin } from "../../../hooks/sections/login/useHandleSubmitLogin"

export const LoginUsersDesktop = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const goToRegister = () => {
        navigate('/register')
    }

    const { login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }


    return (
        <section className="sm:flex bg-[#FFF8F0] w-full h-dvh hidden flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-[#F3E8DD] p-5 grid grid-cols-2 w-[80%] h-[90%] flex-col rounded-sm  border" action="">
                <section className="w-full flex flex-col justify-center  items-center mb-6">
                    <img className="w-22" src={Book} alt='Libro' />
                    <h2 className="text-4xl font-bold text-[#6C4A09]">Capitulo cero</h2>
                </section>

                <div className="flex flex-col gap-4 mb-4 text-[#6C4A09] justify-center">
                    <div className="flex flex-col" >
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

                    <div className="flex flex-col gap-2 mb-4">
                        <button className="bg-[#D9822B] hover:bg-[#B14A0B] transition-all duration-300 ease-in-out p-4 cursor-pointer rounded-xl text-[#FFFFFF]">
                            Iniciar sesión
                        </button>

                        <button className="bg-[#FFF8F0] border border-[#D9822B] hover:bg-[#F3E8DD] transition-all duration-300 ease-in-out cursor-pointer p-4 rounded-xl text-[#6C4A09]">
                            ¿Olvidaste tu contraseña?
                        </button>
                    </div>
                    <button onClick={goToRegister}>¿Nuevo por aquí? <span className="text-[#D9822B] font-bold hover:underline transition-all duration-300 ease-in-out cursor-pointer">¡Registrate, es gratis!</span></button>

                </div>




                <Toaster position="top-center" reverseOrder={false} />
            </form>
        </section>
    )
}