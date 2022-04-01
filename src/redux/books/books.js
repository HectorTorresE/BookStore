const ADD_BEGIN = 'bookstore/books/ADDBEGIN';
const ADD_SUCCESS = 'bookstore/books/ADDSUCCESS';
const ADD_FAIL = 'bookstore/books/ADDFAILURE';

const REMOVE_START = 'bookstore/books/REMOVEBEGIN';
const REMOVE_SUCCESS = 'bookstore/books/REMOVESUCCESS';
const REMOVE_FAIL = 'bookstore/books/REMOVEFAILURE';

const GETBOOKLIST_START = 'bookstore/books/GETLISTBEGIN';
const GETBOOKLIST_SUCCESS = 'bookstore/books/GETLISTSUCCESS';
const GETBOOKLIST_FAIL = 'bookstore/books/GETLISTFAILURE';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const APP_KEY = 'VXPwgBrAURLlarqbP9lw';
const INITIAL_STATE = {
  books: [
  ],
};

export const getBooksListStart = () => ({
  type: GETBOOKLIST_START,
});

export const getBooksListSuccess = (books) => ({
  type: GETBOOKLIST_SUCCESS,
  payload: books,
});

export const getBooksListFail = () => ({
  type: GETBOOKLIST_FAIL,
});

export const removeStart = () => ({
  type: REMOVE_START,
});

export const removeFail = () => ({
  type: REMOVE_FAIL,
});

export const removeSuccess = () => ({
  type: REMOVE_SUCCESS,
});

export const addBegin = () => ({
  type: ADD_BEGIN,
});

export const addSuccess = () => ({
  type: ADD_SUCCESS,
});

export const addFail = () => ({
  type: ADD_FAIL,
});

export function getBooksList() {
  return (dispatch) => {
    const url = `${BASE_URL}${APP_KEY}/books`;
    dispatch(getBooksListStart());
    fetch(url).then((response) => (
      response.json().then((json) => {
        const books = Object.entries(json).map(([key, value]) => ({
          id: key,
          title: value[0].title,
          author: value[0].author,
          genre: value[0].category,
        }));
        dispatch(getBooksListSuccess(books));
      }))).catch(() => dispatch(getBooksListFail()));
  };
}

export function remove(id) {
  return (dispatch) => {
    const url = `${BASE_URL}${APP_KEY}/books`;
    dispatch(removeStart());
    fetch(`${url}/${id.id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      dispatch(removeSuccess());
      dispatch(getBooksList());
    }).catch(() => dispatch(removeFail()));
  };
}

export function add(book) {
  return (dispatch) => {
    const url = `${BASE_URL}${APP_KEY}/books`;
    dispatch(addBegin());
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.genre,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      dispatch(addSuccess());
      dispatch(getBooksList());
    }).catch(() => dispatch(addFail()));
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GETBOOKLIST_SUCCESS:
      return {
        books: action.payload,
      };
    case GETBOOKLIST_START:
      return state;
    default: return state;
  }
}
