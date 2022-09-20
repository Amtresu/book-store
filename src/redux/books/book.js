export function addBook(book){
    return{
        type: "ADD_BOOK",
        payload: book
    }
}

export function removeBook(book){
    return{
        type: "REMOVE_BOOK",
        payload: book
    }
}

const intialState = {
    count: 0,
    books: []
}

 export default function bookReducer(state = intialState, action ){
    switch(action.type){
        case "ADD_BOOK": 
            return {
                ...state,
                count: state.count + 1,
                books: [...state.books, action.payload]
            }
        case "REMOVE_BOOK": 
            const updatedArr = state.books.filter(book => book !== action.payload)
            return {
                ...state,
                count: state.count - 1,
                books: updatedArr
            }
        default:
            return state
            
    }
}




