import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Filter } from '../Filter.jsx';
import { useTodos } from '@/modules/todo-list/store/todo-provider.jsx';

jest.mock('@/modules/todo-list/store/todo-provider.jsx');

describe('Filter component', () => {
  test('should call fetchTodos with correct arguments when filter changes', async () => {
    const mockFetchTodos = jest.fn();
    const user = userEvent.setup();

    useTodos.mockReturnValue({
      fetchTodos: mockFetchTodos,
    });

    const { getByText } = render(<Filter />);
    const selectElement = getByText('Filter');
    await user.click(selectElement);

    expect(getByText('All')).toBeInTheDocument();
  });
});
