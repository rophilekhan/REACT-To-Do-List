import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { text: newTodo, isCompleted: false }]);
    setNewTodo('');
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="button" onClick={addTodo}>Add Todo</button>
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;