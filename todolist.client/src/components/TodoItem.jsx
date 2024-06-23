import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
    return (
        <div className="todo-item">
            <span
                style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}
                onClick={() => onToggleComplete(todo.id)}
            >
                {todo.name}
            </span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;
