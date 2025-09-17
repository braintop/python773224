import { createContext, useContext, useState, useEffect } from 'react';

//phase 1 - create context 
const BookContext = createContext();

//phase 2 - useContext
export const useBooks = () => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error('useBooks must be used within a UserProvider');
    }
    return context;
 };
 

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('books');
    if (saved) setBooks(JSON.parse(saved));
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books, isInitialized]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const value = { books, addBook };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
};