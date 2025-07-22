import toast from "react-hot-toast"

export function useRegisterUser() {


    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:3000/users/register/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            if (!response.ok) {
                toast.success(response.message||'Usuario creado correctamente')
                return
            }

            
        } catch (err) {
            console.error('Error en el servidor', err)
        }
    }

    return { register }
}
