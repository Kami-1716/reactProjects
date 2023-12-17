import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{
    id: 1,
    todo: "Buy milk",
    isDone: false,
  }],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},

});


export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => useContext(TodoContext);


