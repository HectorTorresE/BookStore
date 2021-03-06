import PropTypes from 'prop-types';
import Book from '../Book/Book';
import './Books.css';

const Books = ({ books }) => (
  <div className="container">
    {
      books.map((book) => (
        <Book
          title={book.title}
          key={book.id}
          author={book.author}
          id={book.id}
          genre={book.genre}
        />
      ))
    }
  </div>
);

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
};
export default Books;
