import React from 'react'
import { Link } from 'react-router'

function Error() {
    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-4'>
            <h1 className='text-5xl font-bold'>Page not Found 🥲</h1>
            <p className='text-gray-300'>Status 404</p>
            <Link to="/" className='text-sky-700 underline'>Go to Home</Link>
        </div>
    )
}

export default Error