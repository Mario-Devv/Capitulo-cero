import { RegisterUserDesktop } from "../../components/register/Desktop/RegisterUser"
import { RegisterUserMobile } from "../../components/register/mobile/RegisterUser"

export const Register = () => {
    return (
        <>
        <RegisterUserMobile />
        <RegisterUserDesktop />
        </>
    )
}