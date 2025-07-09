
import { EnjoyOurCommDesktop } from "./Desktop/EnjoyOurComm"
import { RecentReviewsDesktop } from "./Desktop/RecentReviews"
import { EnjoyOurCommMobile } from "./mobile/EnjoyOurComm"
import { RecentReviewsMobile } from "./mobile/RecentReviews"

export const RecentReviews = () => {
    return (
        <>
            {/* Mobile v */}
            <RecentReviewsMobile />
            <EnjoyOurCommMobile />

            {/* Desktop V */}
            <RecentReviewsDesktop />
            <EnjoyOurCommDesktop />
        </>
    )
}


