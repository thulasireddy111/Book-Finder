import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const fetchBooks = async () => {
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await res.json();
      if (data.docs.length === 0) {
        setError('No books found.');
        setBooks([]);
      } else {
        setBooks(data.docs);
        setError('');
      }
    } catch {
      setError('Failed to fetch books.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book Finder</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchBooks} />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <BookList books={books} />
    </div>
  );
}

export default App;
