import { WelcomeDesktop } from "../../components/welcome/Desktop/WelcomeDesktop"
import { WelcomeMobile } from "../../components/welcome/Mobile/WelcomeMobile"


export const Welcome = () => {
    return (
        <>
            <WelcomeMobile />
            <WelcomeDesktop />
        </>
    )
} 