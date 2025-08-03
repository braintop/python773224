import { useBooks } from '../Contexts/BookContext';

export default function Books() {
  const { books } = useBooks();

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}


