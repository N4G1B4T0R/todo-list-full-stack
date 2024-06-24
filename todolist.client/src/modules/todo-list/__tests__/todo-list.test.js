import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import { TodoList } from '../todo-list.jsx';
import { TodoProvider } from '@/modules/todo-list/store/todo-provider.jsx';
import userEvent from '@testing-library/user-event';

jest.mock('@/services/api.js', () => ({
  getTodos: jest.fn().mockResolvedValue([
    { id: 1, name: 'Mock Todo 1', isComplete: false },
    { id: 2, name: 'Mock Todo 2', isComplete: true },
  ]),
  getFilteredTodos: jest.fn().mockImplementation(isComplete => {
    if (isComplete === null) {
      return [
        { id: 1, name: 'Mock Todo 1', isComplete: false },
        { id: 2, name: 'Mock Todo 2', isComplete: true },
      ];
    } else {
      return [
        { id: 2, name: 'Mock Todo 2', isComplete: true },
      ];
    }
  }),
}));

describe('TodoList component', () => {
  test('filters todos by status', async () => {
    let component;
    const user = userEvent.setup();

    await act(async () => {
      component = render(
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      );
    });

    const { getByText, queryByText } = component

    expect(getByText('Mock Todo 1')).toBeInTheDocument();
    expect(getByText('Mock Todo 2')).toBeInTheDocument();

    await user.click(getByText('Filter'));
    await user.click(getByText('Completed'));

    await waitFor(() => {
      expect(getByText('Mock Todo 2')).toBeInTheDocument();
      expect( queryByText('Mock Todo 1')).not.toBeInTheDocument();
    });
  });
});
