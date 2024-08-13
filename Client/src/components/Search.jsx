import React from 'react';

const Search = ({ searchTerm, onSearch }) => {
  return (
    <input 
      type="text" 
      placeholder="Search Widgets..." 
      value={searchTerm} 
      onChange={(e) => onSearch(e.target.value)} 
      className="p-2 border rounded mb-4 w-full"
    />
  );
};

export default Search;
