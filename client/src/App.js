
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (event) => {
    event.preventDefault();
    const newItem = event.target.elements.item.value.trim();
    if (newItem !== "") {
        setItems([...items, newItem]);
        event.target.elements.item.value = "";
    }
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={addItem}>
        <input type="text" name="item" placeholder="Add item..." />
        <button>Add</button>
      </form>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
