import React from "react";
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';


const Book = (props) =>{
    const dispatch = useDispatch();
    const { title, author, id } = props;
  
    const removeBooks = () => {
      dispatch(removeBook(id));}
    return(
    <div>
        <p>{title}</p>
        <p>{author}</p>
        <button type="button" onClick={removeBooks}>
        Remove
        </button> 
    </div>
    )
}


export default Book