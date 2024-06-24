import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../todo-Item.jsx';

import { useTodos } from '@/modules/todo-list/store/todo-provider.jsx';

jest.mock('@/modules/todo-list/store/todo-provider.jsx');

describe('TodoItem component', () => {
  test('calls toggleComplete when todo text is clicked', () => {
    const todo = { id: 1, name: 'Test Todo', isComplete: false };
    const mockToggleComplete = jest.fn();
    useTodos.mockReturnValue({ toggleComplete: mockToggleComplete });

    render(<TodoItem todo={todo} />);

    fireEvent.click(screen.getByText('Test Todo'));

    expect(mockToggleComplete).toHaveBeenCalledWith(1);
  });

  test('calls deleteTodo when delete button is clicked', () => {
    const todo = { id: 1, name: 'Test Todo', isComplete: false };
    const mockDeleteTodo = jest.fn();
    useTodos.mockReturnValue({ deleteTodo: mockDeleteTodo });

    render(<TodoItem todo={todo} />);

    fireEvent.click(screen.getByText('Delete'));

    expect(mockDeleteTodo).toHaveBeenCalledWith(1);
  });
});
