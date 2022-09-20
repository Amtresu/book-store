import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/Books';
import categoryReducer from './categories/Category';

const store = configureStore({
  book: bookReducer,
  categories: categoryReducer,
});

export default store;