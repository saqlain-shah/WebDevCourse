import React, { useState } from 'react';

const HotelBookingtSystem = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState('');

  const addBook = () => {
    if (newBook.trim() !== '') {
      setBooks([...books, newBook]);
      setNewBook('');
    }
  };


  const removeBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h2>Hotel Booking System</h2>
      <input
        type="text"
        value={newBook}
        onChange={(e) => setNewBook(e.target.value)}
        placeholder="Enter Book's name"
      />
      <button onClick={addBook}>Add Book</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => removeBook(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelBookingtSystem ;
