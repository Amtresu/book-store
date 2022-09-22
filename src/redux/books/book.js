const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export function addBook(book){
    return{
        type: ADD_BOOK,
        book,
    }
}

export function removeBook(id){
    return{
        type: REMOVE_BOOK,
        id,
    }
}

const intialState = [
    {
        author: 'J.R.R Tolkein',
        title: 'The Hobbit'
    },
]

 export default function bookReducer(state = intialState, action ){
    switch(action.type){
        case ADD_BOOK: 
            return [...state, action.book]
            
        case REMOVE_BOOK: 
            return state.filter((book) => book.id !== action.id);
        default:
            return state
            
    }
}




