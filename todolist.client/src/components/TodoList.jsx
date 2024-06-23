import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Filter from './Filter';
import api from '../services/api';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        api.getTodos().then(setTodos);
    }, [todos]);

    const addTodo = (todo) => {
        api.addTodo(todo).then((newTodo) => {
            setTodos((prevTodos) => [...prevTodos, newTodo]);
        });
    };

    const toggleComplete = (id) => {
        const todo = todos.find((t) => t.id === id);
        api.markComplete(id).then(() => {
            setTodos((prevTodos) =>
                prevTodos.map((t) => (t.id === id ? { ...t, isComplete: !t.isComplete } : t))
            );
        });
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === '') return true;
        return todo.isComplete === (filter === 'true');
    });

    return (
        <div>
            <Filter onFilterChange={setFilter} />
            <TodoForm onAddTodo={addTodo} />
            <div className="todo-list">
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleComplete={toggleComplete}
                        //onDelete={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
