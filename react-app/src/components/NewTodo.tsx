import React, { useRef } from 'react';
import { Button, Form } from 'semantic-ui-react';

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Field>
        <label htmlFor="todo-text">Tìtulo</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </Form.Field>
      <Button type="submit">Agregar</Button>
    </Form>
  );
};

export default NewTodo;
