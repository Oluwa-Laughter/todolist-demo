import React from "react";
import "./TodoList.css";

interface TodoListProp {
  todos: { id: number; text: string }[];
  onDeleteTodo: (id: number) => void;
}
const TodoList: React.FC<TodoListProp> = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={onDeleteTodo.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
