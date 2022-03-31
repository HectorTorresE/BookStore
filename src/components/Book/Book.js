import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from '../../redux/books/books';
import './Book.css';

const Book = (props) => {
  const {
    id, author, title,
  } = props;
  const dispatch = useDispatch();
  const RemoveBook = (event) => {
    const bookid = event.target.dataset.id;
    dispatch(remove({ id: bookid }));
  };

  return (
    <div className="book">
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
      <ul>
        <li><button type="button">Comments </button></li>
        <li><button type="button" data-id={id} onClick={RemoveBook}>Remove </button></li>
        <li><button type="button">Edit </button></li>
      </ul>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
