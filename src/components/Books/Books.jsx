import { useEffect, useState } from "react"
import Book from "../Book/Book";

export default function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="mt-4">
            <h2 className="text-5xl text-center font-bold">Books</h2>
            <p>{books.length}</p>
            <div>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    )
}
