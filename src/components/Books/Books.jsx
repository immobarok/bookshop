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
        <div className="my-10 ">
            <h2 className="text-5xl text-center font-bold">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    )
}
