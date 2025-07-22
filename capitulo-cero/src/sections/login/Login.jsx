import { LoginUsersDesktop } from "../../components/login/desktop/Login"
import { LoginUsersMobile } from "../../components/login/mobile/Login"

export const Login = () => {
    return (
        <>
            <LoginUsersMobile />
            <LoginUsersDesktop />
        </>
    )
}