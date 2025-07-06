import { useMemo } from "react";

export function useComments(reviews) {
    return useMemo(() => {
        const formatReviews = reviews.flatMap(book =>
            book.reviews.map(review => ({
                ...review,
                bookTitle: book.bookTitle
            }))
        )

        return formatReviews.slice(0, 3)

    }, [reviews])
}

