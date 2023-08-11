import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <div className='block_div'>
        <div className='h_div'>
          <div className='h1'>  <h1> Todo... List </h1></div>
          <div className='h3'> <h3>" Stay Organized, Stay Ahead with Todo... List "</h3> </div>
          <div className='additems'>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Add a new Todo...' className='input01' />
            <button className='add' onClick={handleAddTodo} > + </button>
            <ol className='ol'>
              {todos.map((todo, index) => (
                <li key={index} className={`li ${todo.completed ? 'completed' : ''}`}>
                  <span onClick={() => handleToggleCompleted(index)} className={`checkmark ${todo.completed ? 'completed' : ''}`}>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  {todo.text}
                  <span className='delete-icon'>
                    <i className="fa-solid fa-trash icon-delete" onClick={() => handleDeleteTodo(index)}>  </i>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
