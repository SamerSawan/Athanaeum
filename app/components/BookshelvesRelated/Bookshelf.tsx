'use client';
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function BookShelf(){
    const [emblaRef,] = useEmblaCarousel({ dragFree: true }, [WheelGesturesPlugin()])

    return (
        <div className="flex flex-col w-1/2 items-center m-8">
            <div className="flex flex-row w-full justify-between mb-2">
                <p className="text-2xl">Currently Reading</p>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="bg-primary-50 w-full justify-between p-6 rounded-md overflow-hidden" ref={emblaRef}>
                <div className='flex flex-row w-full justify-between'>
                <img
                src="https://m.media-amazon.com/images/I/91p594CxSpL._AC_UF1000,1000_QL80_.jpg"
                alt="Les Miserables"
                className="w-1/5 h-auto mr-10 rounded-md"
                />
                <img
                src="https://m.media-amazon.com/images/I/81a9VfTjy9L._AC_UF1000,1000_QL80_.jpg"
                alt="Les Miserables"
                className="w-1/5 h-auto mr-10 rounded-md"
                />
                <img
                src="https://m.media-amazon.com/images/I/71gnJ-dXgxL._AC_UF1000,1000_QL80_.jpg"
                alt="Les Miserables"
                className="w-1/5 h-auto mr-10 rounded-md"
                />
                <img
                src="https://m.media-amazon.com/images/I/81KpDpXOBQL._AC_UF1000,1000_QL80_.jpg"
                alt="Les Miserables"
                className="w-1/5 h-auto mr-10 rounded-md"
                />
                <img
                src="https://m.media-amazon.com/images/I/71aG0m9XRcL._AC_UF1000,1000_QL80_.jpg"
                alt="Les Miserables"
                className="w-1/5 h-auto mr-10 rounded-md"
                />
                <img
                src="https://m.media-amazon.com/images/I/61Nxq9EvcKL._AC_UF1000,1000_QL80_.jpg"
                alt="Les Miserables"
                className="w-1/5 h-auto mr-10 rounded-md"
                />
                </div>
            </div>
        </div>
    )
}