import { TodoItem, TodoForm, Filter } from './ui'
import { useTodos } from './store/todo-provider.jsx';
import { TodoListWrapper } from './todo-list.styles.jsx';

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <div>
      <TodoForm />
      <Filter />

      {!!todos.length && (
        <TodoListWrapper>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </TodoListWrapper>
      )}
    </div>
  );
};
