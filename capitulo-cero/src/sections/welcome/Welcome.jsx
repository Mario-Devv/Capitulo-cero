import { WelcomeDesktop } from "./WelcomeDesktop"
import { WelcomeMobile } from "./WelcomeMobile"

export const Welcome = () => {
    return (
        <>
            <WelcomeMobile />
            <WelcomeDesktop />
        </>
    )
} 