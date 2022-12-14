import { it, expect, describe } from "vitest";
import { TodoList } from "../models/TodoList.js";
import { Todo } from "../models/Todo.js";

it("should create an object with a 'todos' property set to an empty array when called with the 'new' keyword", () => {
  const todoList = new TodoList();
  expect(todoList.todos).toEqual([]);
});

it("should add a new 'Todo' object to its 'todos' array", () => {
  const todoList = new TodoList();
  const newTodo = "Buy milk";

  todoList.addTodo(newTodo);

  expect(todoList.todos.length).toBe(1);
  expect(todoList.todos[0] instanceof Todo).toEqual(true);
  expect(todoList.todos[0].text).toEqual(newTodo);
});

it("should return the 0th todo element in the 'todos' array without removing it", () => {
  const todoList = new TodoList();
  const newTodo1 = "Buy milk";
  const newTodo2 = "Buy eggs";

  todoList.addTodo(newTodo1);
  todoList.addTodo(newTodo2);

  expect(todoList.nextTodo.text).toEqual(newTodo1);
  expect(todoList.todos.length).toBe(2);
});

it("should return and remove the next todo in the list", () => {
  const todoList = new TodoList();
  const newTodo1 = "Buy milk";
  const newTodo2 = "Buy eggs";

  todoList.addTodo(newTodo1);
  todoList.addTodo(newTodo2);

  expect(todoList.completeNextTodo().text).toEqual(newTodo1);
  expect(todoList.todos.length).toBe(1);
  expect(todoList.todos[0].text).toEqual(newTodo2);
});
