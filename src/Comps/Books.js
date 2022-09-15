import React from "react";
import AddBook from "./AddBook";
import BookData from "./BooksData";
import Book from "./Book";



const Books = () =>{
    const bookElements = BookData.map(book =>{
        return <Book title={book.title} author={book.author} key={book.id}/>
    })
    
    return(
        <div>
            {bookElements}
            <AddBook />
        </div>
    )

}

export default Books