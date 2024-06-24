const API_URL = '/api/todo';

const getTodos = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const addTodo = async (todo) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  return response.json();
};

const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Failed to mark complete');
  }
};

const markComplete = async (id) => {
  const response = await fetch(`${API_URL}/${id}/complete`, {
    method: 'POST'
  });
  if (!response.ok) {
    throw new Error('Failed to mark complete');
  }
};

const getFilteredTodos = async (isComplete) => {
  const query = isComplete !== null ? `?isComplete=${isComplete}` : '';
  const response = await fetch(`${API_URL}/filter${query}`);
  return response.json();
};

export default {
  getTodos,
  addTodo,
  deleteTodo,
  markComplete,
  getFilteredTodos
};
