"use client";
import React, { useState } from 'react';
import { searchBook, searchDemo } from '../constants'; // Adjust the path if needed

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<searchBook[]>([]);

  const handleSearch = () => {
    // Set demo books data from searchDemo
    setBooks(searchDemo);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="border p-2 w-full"
      />
      <button onClick={handleSearch} className="mt-2 p-2 bg-blue-500 text-white">
        Search
      </button>
      <div className="mt-4">
        {books.map((book, index) => (
          <div key={index} className="border p-2 mb-2 flex">
            <img src={book.src} alt={book.alt} className="w-24 h-32 object-cover mr-4" />
            <div>
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="italic">{book.author}</p>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
