"use client";
import { useTransition } from "react";
import { completeTodo } from "@/utils/actions";

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();

  const updateTodo = (id) => {
    startTransition(() => completeTodo(id));
  };

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? "line-through text-gray-900" : ""
      }`}
      onClick={() => updateTodo(todo.id)}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
