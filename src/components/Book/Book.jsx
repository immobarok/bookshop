import React from 'react'

export default function Book({ book }) {
    const { image } = book;
    console.log(book);
    return (
        <div>
            <img src={image} alt="" />
        </div>
    )
}
