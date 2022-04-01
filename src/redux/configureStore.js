import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import book from './books/books';
import categories from './categories/categories';

const reducer = combineReducers({
  book,
  categories,
});

const myLogger = () => (next) => (action) => {
  next(action);
};
const store = createStore(reducer, {}, applyMiddleware(thunk, myLogger));
export default store;
