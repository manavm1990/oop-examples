import { Todo } from "./models/Todo.js";
import { TodoList } from "./models/TodoList.js";

const todo = new Todo("Learn JavaScript");

const todoList = new TodoList();

todoList.addTodo("Do laundry");
todoList.addTodo("Go to the store");
todoList.addTodo("Clean the house");

const removedTodo = todoList.completeNextTodo();
console.log(removedTodo);
// Since we use the 'get' keyword in the class, we access this as if it were a property
// DESTRUCTURING
const { nextTodo } = todoList;
console.log(nextTodo, "next todo");
