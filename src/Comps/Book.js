import React from "react";
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';
import Category from "./Category";
import './style/book.css'


const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id, category } = props;

  const removeBooks = () => {
    dispatch(removeBook(id));
  }
  return (
    <div className="book-div">

      <div className="book-info-div">

      <div className="book-category">Category</div>

      <div className="book-title">{title}</div>

      <div className="book-author">{author}</div>

      <ul className="book-actions-list">
        <li>Comments | </li>
        <li><button className="book-remove-button" type="button" onClick={removeBooks}>
          Remove | 
        </button>
        </li>
        <li>Edit</li>
      </ul>

      </div>

      <div className="percentage-div">
        <div className="oval"></div>
        <div className="percentage-text-div">
          <span className="percentage">50%</span>
          <span className="percentage-text">completed</span>
        </div>
      </div>

      <div className="vertical-divider"></div>

      <div className="chapter-div">
        <p className="current-chapter">Current Chapter</p>
        <p className="current-chapter-counter">Chapter 10</p>
        <button className="update-progress-button" type="button">Update Progress</button> 
      </div>
    
    </div>
  )
}


export default Book