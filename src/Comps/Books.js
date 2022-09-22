import { React, useEffect } from 'react';
import AddBook from "./AddBook";
import Book from "./Book";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/book';



const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      {books.map(({ id, title, author }) => (
        <Book key={id} id={id} title={title} author={author} />
      ))}
      <AddBook />
    </>
  );
};
export default Books