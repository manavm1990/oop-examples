import { Todo } from "./Todo.js";

export class TodoList {
  // Private property
  #todos;

  constructor() {
    this.#todos = [];
  }

  addTodo(text) {
    // We want to actually create a new Todo object
    // We don't want to just add a string to the array
    const todo = new Todo(text);
    this.#todos.push(todo);
  }

  completeNextTodo() {
    return this.#todos.shift();
  }

  get nextTodo() {
    return this.#todos[0];
  }

  get todos() {
    return this.#todos;
  }
}
