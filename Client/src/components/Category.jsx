import React from 'react';
import Widget from './Widget';

const Category = ({ category, onRemoveWidget }) => {
  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-lg font-bold mb-2">{category.name}</h2>
      {category.widgets.map((widget) => (
        <Widget key={widget.id} widget={widget} onRemove={() => onRemoveWidget(category.id, widget.id)} />
      ))}
    </div>
  );
};

export default Category;
