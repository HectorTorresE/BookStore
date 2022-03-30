const ADD = 'book-store/books/ADD ';
const REMOVE = 'book-store/books/REMOVE';
const INITIAL_STATE = [];


export const add = (book) => ({
  type: ADD,
  obj: book,
});

export const remove = (id) => ({
  type: REMOVE,
  obj: id,
});

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD) {
    return {
      books: [
        ...state.books,
        {
          id: action.obj.id,
          title: action.obj.title,
          author: action.obj.author,
        },
      ],
    };
  }
  if (action.type === REMOVE) {
    return state.filter((item) => item.id !== action.obj);
  }
  return state;
};

export default reducer;
