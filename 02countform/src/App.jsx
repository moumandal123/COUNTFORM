import React, { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const countAlphanumeric = (str) => {
    return str.replace(/[^a-z0-9]/gi, '').length;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Title: ${title}, Description: ${description}`);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title" 
          />
          <div className="character-count">
            Total Characters: {title.length}, Alphanumeric Characters: {countAlphanumeric(title)}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Enter description"

          />
          <div className="character-count">
            Total Characters: {description.length}, Alphanumeric Characters: {countAlphanumeric(description)}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
