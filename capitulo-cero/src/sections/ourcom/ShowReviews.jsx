import Reviews from '../../data/ourcom/Reviews.json'
import { useComments } from '../../hooks/sections/ourcom/useComments.jsx'


export const ShowReviews = () => {
    const firstThreeReviews = useComments(Reviews)

    return (
        firstThreeReviews && (
            firstThreeReviews
                .map(w => (
                    <article>
                        <div className='flex items-center gap-3 '>
                            <img
                                className='rounded-full w-10 h-10'
                                src={w.avatar}
                                alt={w.name || 'Foto de usuario'}
                            />
                            <div>
                                <h4 className='text-[#3E2F1C]'>{w.name}</h4>
                                <p className='text-[#6F5841]'>Sobre {w.bookTitle}</p>
                            </div>
                        </div>

                        <div className='py-2'>
                            <p className='text-[#6C4A09] pb-4 border-b-1 border-[#F3E8DD]'>
                                {w.comment}
                            </p>
                        </div>
                    </article>

                ))

        )
    )
}