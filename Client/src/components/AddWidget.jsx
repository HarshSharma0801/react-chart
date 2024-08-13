import React, { useState } from 'react';
import useStore from '../store/useStore';

const AddWidget = ({ categoryId }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const addWidget = useStore((state) => state.addWidget);

  const handleAddWidget = () => {
    if (widgetName && widgetText) {
      addWidget(categoryId, { name: widgetName, text: widgetText });
      setWidgetName('');
      setWidgetText('');
    }
  };

  return (
    <div className="mb-4">
      <input 
        type="text" 
        placeholder="Widget Name" 
        value={widgetName} 
        onChange={(e) => setWidgetName(e.target.value)} 
        className="p-2 border rounded mr-2"
      />
      <input 
        type="text" 
        placeholder="Widget Text" 
        value={widgetText} 
        onChange={(e) => setWidgetText(e.target.value)} 
        className="p-2 border rounded mr-2"
      />
      <button onClick={handleAddWidget} className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Widget</button>
    </div>
  );
};

export default AddWidget;
