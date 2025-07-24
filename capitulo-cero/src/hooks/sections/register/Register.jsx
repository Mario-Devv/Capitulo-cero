import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function useRegisterUser() {

    const navigate = useNavigate()

    const register = async (email, user, password) => {
        try {
            const response = await fetch('http://localhost:3000/users/register/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email, username: user ,password })
            })

            const data = await response.json()

            if (!response.ok) {
                toast.error(data.message)
                return
            }

            if (response.ok) {
                toast.success('Usuario creado correctamente')
            }

            navigate('/login')

        } catch (err) {
            console.error('Error en el servidor', err)
        }
    }

    return { register }
}
