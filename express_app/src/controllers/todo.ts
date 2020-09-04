import { RequestHandler } from 'express';
import { Todo } from '../model/Todo';

const TODOS: Todo[] = [];
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);

  res.status(201).json({ message: 'Todo fue creado...', createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  const index = TODOS.findIndex((todo) => todo.id == todoId);

  if (index < 0) {
    throw new Error('Todo no fue encontrado..');
  }

  TODOS[index] = new Todo(TODOS[index].id, updatedText);
  res.status(201).json({ message: 'Actualizado', updateTodos: TODOS[index] });
};

export const deleteTodos: RequestHandler<{ id: string }> = (req, res, next){
  const todoId = req.params.id;
  const index = TODOS.findIndex((todo) => todo.id == todoId);

  if (index < 0) {
    throw new Error('Todo no fue encontrado');
  }

  TODOS.splice(index, 1);

  res.json({message: 'Eliminado'});
};