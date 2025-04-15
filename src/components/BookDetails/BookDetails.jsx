import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoredReadList } from '../utility/addToDb';

export default function BookDetails() {
    const { bookId } = useParams();
    const data = useLoaderData();
    const bookArray = Array.isArray(data) ? data : data.books;
    const book = bookArray.find(book => book.bookId === Number(bookId));

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    return (
        <div className='container mx-auto px-4 py-10'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
                {/* Book Image - Larger Version */}
                <div className='w-full lg:w-2/5 xl:w-1/3 flex justify-center'>
                    <figure className='bg-blue-100/2 p-4 md:p-8 rounded-lg shadow-lg w-full md:w-full max-w-md'>
                        <img
                            className='w-full h-auto object-cover rounded-md'
                            src={book.image}
                            alt={book.bookName}
                            style={{ minHeight: '400px' }}
                        />
                    </figure>
                </div>

                {/* Book Details */}
                <section className='w-full lg:w-3/5 xl:w-2/3'>
                    <div className='space-y-4 md:space-y-4'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>
                            {book.bookName}
                        </h1>
                        <p className='text-base text-gray-400'>
                            By <i>{book.author}</i>
                        </p>
                        <hr className='border-t-1 border-gray-300' />
                        {
                            book.category &&
                            <p className='font-medium text-gray-800'>{book.category}</p>
                        }
                        <hr className='border-t-1 border-gray-300' />

                        {/* Additional book details */}
                        <div className='space-y-4 text-md sm:text-lg'>
                            {book.review && (
                                <p className='text-gray-500'><strong className='text-gray-700'>Review:</strong> {book.review}</p>
                            )}
                            {book.tags && (
                                <div className="mt-4">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-gray-700">Tags:</span>
                                        {book.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="text-lime-500 font-normal rounded-full text-base px-4 py-1 bg-lime-200/40"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <hr className='border-t-1 border-gray-300' />
                            {book.totalPages && (
                                <div className='flex space-x-2'>
                                    <p className='text-base text-gray-600'>Number of pages:</p>
                                    <p className='text-base font-bold'>{book.totalPages}</p>
                                </div>
                            )}
                            {book.publisher && (
                                <div className='flex space-x-2'>
                                    <p className='text-base text-gray-600'>Publisher</p>
                                    <p className='text-base font-bold'>{book.publisher}</p>
                                </div>
                            )}
                            {book.yearOfPublishing && (
                                <div className='flex space-x-2'>
                                    <p className='text-base text-gray-600'>Year of Publishing:</p>
                                    <p className='text-base font-bold'>{book.yearOfPublishing}</p>
                                </div>
                            )}
                            {book.rating && (
                                <div className='flex space-x-2'>
                                    <p className='text-base text-gray-600'>Rating:</p>
                                    <p className='text-base font-bold'>{book.rating}</p>
                                </div>
                            )}
                        </div>
                        <div className='flex gap-4 mt-5'>
                            <button className="btn btn-outline btn-accent" onClick={() => handleMarkAsRead(bookId)}>Mark as Read</button>
                            <button className='btn btn-accent'>Add to Wishlist</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}