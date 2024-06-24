import { render, screen } from '@testing-library/react';
import { TodoForm } from '../todo-form.jsx';
import userEvent from '@testing-library/user-event';
import { useTodos } from '@/modules/todo-list/store/todo-provider.jsx';

jest.mock('@/modules/todo-list/store/todo-provider.jsx');

test('calls onAddTodo when form is submitted', async() => {
  const mockFetchTodos = jest.fn();
  const user = userEvent.setup();

  useTodos.mockReturnValue({
    addTodo: mockFetchTodos,
  });

  const { getByPlaceholderText } = render(<TodoForm />);

  await user.type(getByPlaceholderText('Add a new todo'),  'New Todo');

  await user.click(screen.getByText('Add'));
  expect(mockFetchTodos).toHaveBeenCalledWith({ name: 'New Todo' });
});
