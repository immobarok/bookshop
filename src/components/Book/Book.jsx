import React from 'react'
import { StarRating } from './../StarRating/StarRating';
import { Link } from 'react-router';

export default function Book({ book }) {
    const { image, bookName, author, review, totalPages, rating, category, tags, badge,bookId } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border border-amber-50/5 flex flex-col h-full">
                <figure className='bg-slate-50/2 m-10 py-4 rounded-md'>
                    <img
                        src={image}
                        className='h-56'
                        alt={bookName}
                    />
                </figure>
                <div className='mx-5 flex flex-col flex-grow'>
                    <div className="card-actions justify-start ml-5">
                        {
                            tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className={`badge mx-1 ${index % 2 === 0 ? 'bg-lime-500 text-white' : 'bg-transparent border border-lime-500 text-lime-500'}`}
                                >
                                    {tag}
                                </div>
                            ))
                        }
                    </div>
                    <div className="card-body flex-grow">
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge bg-lime-100/5 text-sky-500 shadow-md">{badge}</div>
                        </h2>
                        <p className='card-subtitle text-gray-300'>By: <span className='font-medium'>{author}</span></p>
                    </div>

                    {/* Bottom section that will always stay at the bottom */}
                    <div className="mt-auto">
                        <div className="w-full h-px my-4 bg-[length:10px_1px] bg-repeat-x bg-[radial-gradient(circle,_#84cc16_1px,_transparent_1px)]"></div>
                        <div className="flex justify-between items-center text-sm text-gray-600 mb-6 mx-6">
                            <p>{category}</p>
                            <div className="flex items-center gap-2">
                                <StarRating rating={rating} />
                                <span className="text-gray-500 text-sm">({rating})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}