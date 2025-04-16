import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textEntered = textInputRef.current!.value;
    onAddTodo(textEntered);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
