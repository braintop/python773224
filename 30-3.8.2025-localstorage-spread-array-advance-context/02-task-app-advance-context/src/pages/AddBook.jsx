import { useState } from 'react';
import { useBooks } from '../Contexts/BookContext';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const [input, setInput] = useState('');
  const { addBook } = useBooks();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addBook(input.trim());
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new book"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
