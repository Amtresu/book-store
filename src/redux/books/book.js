import axios from 'axios';

// API UID 56IrfFVkJdbMmaDysAVk
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/56IrfFVkJdbMmaDysAVk/books/'

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';

const intialState = [];

export const addBook = (id, title, author) => (dispatch) => {
    axios.post(API, {
      item_id: id,
      title,
      author,
      category: 'Fiction',
    }).then(() => {
      dispatch({
        type: ADD_BOOK,
        book: {
          id,
          title,
          author,
        },
      });
    });
  };

  export const removeBook = (id) => (dispatch) => {
    const deleteUrl = `${API}${id}`
    axios.delete(deleteUrl, {
      item_id: id,
    }).then(() => {
      dispatch({
        type: REMOVE_BOOK,
        id,
      });
    });
  }

export const fetchBooks = () => (dispatch) => {
    axios.get(API).then((response) => {
      const books = Object.keys(response.data).map((key) => {
        const book = response.data[key][0];
        return {
          id: key,
          ...book,
        };
      });
      dispatch({ type: GET_BOOK, payload: books });
    });
  };

 export default function bookReducer(state = intialState, action ){
    switch(action.type){
        case ADD_BOOK: 
            return [
              ...state,
              {
                id: action.book.id,
                title: action.book.title,
                author: action.book.author,
              },
            ];
            
        case REMOVE_BOOK: 
            return state.filter((book) => book.id !== action.id);
        case GET_BOOK:
            return [...action.payload];
        default:
            return state
            
    }
}




