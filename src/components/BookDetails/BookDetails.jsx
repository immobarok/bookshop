import React from 'react'
import { useParams } from 'react-router'

export default function BookDetails() {
    const {bookId} = useParams();
    
    return (
        <div>
            Book Details{bookId}
        </div>
    )
}
