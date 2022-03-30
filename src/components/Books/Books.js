import Book from '../Book/Book';
import './Books.css';

const Books = () => (
  <div className="books-container">
    <Book title="Cracking the Coding Interview" author="Gayle Laakmann McDowell" />
    <Book title="The 48 Laws of Power" author="Robert Greene" />
  </div>
);

export default Books;
