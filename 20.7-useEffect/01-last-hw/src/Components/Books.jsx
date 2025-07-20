import { Book } from "./Book"

export function Books({ books }) {

    let mapBooks = books.map((book, index) => {
        return (
            <div>
                <Book key={index} title={book.title} author={book.author} />
            </div>
        )
    })

    return (
        <>
            <h1>Books</h1>
            {mapBooks}
        </>
    )
}