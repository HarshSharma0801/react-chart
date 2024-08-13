import React, { useState } from 'react';
import useStore from './store/useStore'; 
import Category from './components/Category';
import AddWidget from './components/AddWidget';
import Search from './components/Search';

function Home() {
  const categories = useStore((state) => state.categories);
  const removeWidget = useStore((state) => state.removeWidget);
  const searchWidgets = useStore((state) => state.searchWidgets);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    searchWidgets(term);
  };

  return (
    <div className="p-8">
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      {categories.map((category) => (
        <div key={category.id}>
          <Category category={category} onRemoveWidget={removeWidget} />
          <AddWidget categoryId={category.id} />
        </div>
      ))}
    </div>
  );
}

export default Home;
