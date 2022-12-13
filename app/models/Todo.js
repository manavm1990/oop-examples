export class Todo {
  // This is run whenever we use the 'new' keyword to create a new instance of this class
  constructor(text) {
    if (typeof text !== "string" || !text.trim().length) {
      throw new Error("Expected parameter 'text' to be a non empty string");
    }

    this.text = text;
  }
}
