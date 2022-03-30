const ADD = 'book-store/books/ADD ';
const REMOVE = 'book-store/books/REMOVE';

const initialState = {
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

export function add(book) {
  return {
    type: ADD,
    obj: book,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    obj: id,
  };
}

export default function reducer(state = initialState, action) {
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
}
