import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './models/Todo';
import 'semantic-ui-css/semantic.min.css';
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const AddTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDelete = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={AddTodo} />
      <TodoList items={todos} onDelete={todoDelete} />
    </div>
  );
};

export default App;
