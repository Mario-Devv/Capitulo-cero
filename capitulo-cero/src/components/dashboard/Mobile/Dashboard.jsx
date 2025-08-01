import { useEffect, useState } from "react"
import { Add, Bell, Star, Upp } from "../../../assets/icons/dashboard"

import { WelcomeMobile } from "./welcome/Welcome";
import { NavMobile } from "./Nav/Nav";
import { ReadingNowMobile } from "./ReadingNow/ReadingNow";
import { ActivityMobile } from "./Activity/Activity";
import { ReadGoalsMobile } from "./ReadGoals/ReadGoals";
import { FourYouMobile } from "./ForU/ForYou";

export const DashboardMobile = () => {
    const [username, setUserName] = useState('')

    useEffect(() => {
        const getUser = localStorage.getItem('username')

        setUserName(getUser)
    }, [])

    return (
        <article className="bg-[#FFF8F0] w-full p-4">
            <WelcomeMobile username={username} />

            <NavMobile />

            {/* Left side */}
            <ReadingNowMobile />

            <ActivityMobile />

            {/* Right side */}
            <ReadGoalsMobile />

            <FourYouMobile />
        </article>
    )
}