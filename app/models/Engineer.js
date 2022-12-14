import Employee from "./Employee.js";

export default class Engineer extends Employee {
  #github;

  constructor({ name, id, email, github }) {
    // Call the parent constructor
    super({ name, id, email });
    this.#github = github;
  }

  // Override the parent method
  getRole() {
    return "Engineer";
  }

  get github() {
    return this.#github;
  }
}
