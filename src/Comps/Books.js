import React from "react";
import AddBook from "./AddBook";
import Book from "./Book";
import { useSelector } from 'react-redux';



const Books = () =>{
    const booksMap = useSelector((state) => state.books);
    return (
      <div>
        {booksMap.map((book) => (
          <Book
            id={book.id}
            title={book.title}
            author={book.author}
            key={book.id}
          />
        ))}
        <AddBook />
      </div>
    );
  };
  

export default Books