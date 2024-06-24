import { useTodos } from '@/modules/todo-list/store/todo-provider.jsx';
import { ItemContainer, TypographyStyled, ResponsiveButton } from './todo-item.styles.jsx';

export const TodoItem = ({ todo }) => {
  const { toggleComplete, deleteTodo } = useTodos();
  return (
    <ItemContainer>
      <TypographyStyled
        variant="body1"
        style={{ textDecoration: todo?.isComplete ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(todo?.id)}>
        {todo?.name}
      </TypographyStyled>
      <ResponsiveButton onClick={() => deleteTodo(todo?.id)}>
        Delete
      </ResponsiveButton>
    </ItemContainer>
  );
};
