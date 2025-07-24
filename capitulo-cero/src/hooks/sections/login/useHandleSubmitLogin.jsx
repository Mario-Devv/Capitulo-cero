import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export function useLogin() {
    const navigate = useNavigate()

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:3000/users/login/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            if (!response.ok) {
                console.log('Respuesta fallida:', data.message)
                toast.error(data.message || 'Credenciales incorrectas')
                return
            }


            localStorage.setItem('token', data.token)

            const getUserName = data.user.username

            const transform = getUserName.charAt(0).toUpperCase() + getUserName.slice(1).toLowerCase()


            localStorage.setItem('username', transform)

            navigate('/dashboard')
        } catch (err) {
            toast.error('No se pudo conectar al servidor')
            console.error('[Login Error]:', err)
        }
    }

    return { login }
}
