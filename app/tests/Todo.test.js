import { expect, it } from "vitest";
import { Todo } from "../models/Todo.js";

// Sad Path
it("should throw an error if no text is provided", () => {
  expect(() => new Todo()).toThrow();
});

// Happy Path
it("should create a new todo", () => {
  const todo = new Todo("Learn JavaScript");

  expect(todo.text).toBe("Learn JavaScript");
});
