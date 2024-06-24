import { useState } from 'react';
import { FormContainer, TextFieldStyled, ResponsiveButton } from './todo-form.styles.jsx';
import { useTodos } from '@/modules/todo-list/store/todo-provider.jsx';

export const TodoForm = () => {
  const { addTodo } = useTodos();
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      addTodo({ name });
      setName('');
    }
  };

  return (
    <FormContainer
      component="form"
      onSubmit={handleSubmit}>
      <TextFieldStyled
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        variant="outlined"
        placeholder="Add a new todo"
      />
      <ResponsiveButton type="submit">
        Add
      </ResponsiveButton>
    </FormContainer>
  );
};
