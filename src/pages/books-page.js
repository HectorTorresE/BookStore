import { useSelector } from 'react-redux';
import Books from '../components/Books/Books';
import InputForm from '../components/Input-Form/Input-Form';
import './books.css';

const BooksPage = () => {
  const books = useSelector((state) => (state.books.books));
  return (
    <>
      <Books books={books} />
      <h2>ADD NEW BOOK</h2>
      <InputForm />
    </>
  );
};

export default BooksPage;
