import { createContext, useState, useContext, useEffect } from 'react';
import api from '../../../services/api.js';

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.getTodos().then(setTodos);
  }, []);

  const addTodo = async (todo) => {
    const newTodo = await api.addTodo(todo);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = async (id) => {
    await api.markComplete(id);
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === id ? { ...t, isComplete: !t.isComplete } : t))
    );
  };

  const deleteTodo = async (id) => {
    await api.deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  const fetchTodos = async (isComplete = null) => {
    const filteredTodos = await api.getFilteredTodos(isComplete);
    setTodos(filteredTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleComplete, deleteTodo, fetchTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
