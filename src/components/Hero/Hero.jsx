import React from 'react'
import bannerImage from '../../assets/images/book image.jpg'

export default function Hero() {
    return (
        <div className="hero bg-base-200 min-h-screen px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0'>
                    <img
                        src={bannerImage}
                        className="max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl"
                        alt="Books"
                    />
                </div>
                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Books to freshen up your bookshelf
                    </h1>
                    <p className="py-4 sm:py-6 text-sm sm:text-base">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-lime-500 font-medium hover:bg-transparent hover:border-lime-400 transition-colors duration-300 text-lime-100">
                        View The List
                    </button>
                </div>
            </div>
        </div>
    )
}