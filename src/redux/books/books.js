const ADD = 'book-store/books/ADD ';
const REMOVE = 'book-store/books/REMOVE';

const INITIAL_STATE = {
  books: [
    {
      id: '1',
      author: 'Gayle Laakmann McDowell',
      title: 'Cracking the Coding Interview',
    },
    {
      id: '2',
      author: 'Robert Greene',
      title: 'The 48 Laws of Power',
    },
  ],
};

export const add = (book) => ({
  type: ADD,
  obj: book,
});

export const remove = (id) => ({
  type: REMOVE,
  obj: id,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
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
    case REMOVE:
      return {
        books: state.books.filter((book) => (book.id !== action.obj.id)),
      };
    default: return state;
  }
};

export default reducer;
