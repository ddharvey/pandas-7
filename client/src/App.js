
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleRemoveTodo = (indexToRemove) => {
    const newTodos = todos.filter((todo, index) => index !== indexToRemove);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
