import { useEffect, useState } from "react"

export const Dashboard = () =>{
    const [username, setUserName] = useState('')
    
    useEffect (() =>{
        const getUser = localStorage.getItem('username')    

        setUserName(getUser)
    }, [])

    return (
        <h2>Bienvenido {username}</h2>
    )
}