import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Header from './Comps/Header';
import Books from './Comps/Books';
import Category from './Comps/Category';
import './index.css'
import { configureStore } from 'redux'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Books />}></Route>
        <Route path='/Category' element={<Category />}></Route>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);
function addBook(){
  return{
      type: "ADD_BOOK",
      payload: book
  }
}

function removeBook(){
  return{
      type: "REMOVE_BOOK",
      payloard: book
  }
}

const intialState = []

function reducer(state = intialState, action ){
  switch(action.type){
      case ADD_BOOK: 
          return [
              ...state,
              action.payload
          ]
      case REMOVE_BOOK: 
          const updatedArr = state.filter(book => book !== action.payload)
          return [
              ...state, updatedArr
          ]
          
  }
}

store.dispatch(addBook('The Hobbit'))
store.dispatch(addBook('LOTR'))
console.log(store)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();