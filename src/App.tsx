import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./components/Todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    const newTodo = { id: Math.random(), text };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
