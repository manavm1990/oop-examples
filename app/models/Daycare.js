import Child from "./Child.js";

export default class DayCare {
  #capacity;
  #ageLimit;
  #children = [];

  #validateAdd(child) {
    if (!(child instanceof Child)) {
      throw new Error("Expected parameter 'child' to be an instance of Child");
    }

    if (this.#children.length >= this.#capacity) {
      console.info("This daycare is full");
      return false;
    }

    if (child.age > this.#ageLimit) {
      console.info("This child is too old for this daycare");
      return false;
    }

    return true;
  }

  // Before removing a child, we need to make sure that the child is in the daycare
  #validateRemove(name) {
    if (
      !this.#children.find(
        (child) => child.name.toUpperCase() === name.toUpperCase()
      )
    ) {
      console.info("This child is not in this daycare❗ 😱 🚨");
      return false;
    }

    return true;
  }

  // Default Parameters
  constructor(capacity = 3, ageLimit = 6) {
    this.#capacity = capacity;
    this.#ageLimit = ageLimit;
  }

  addChild(child) {
    if (this.#validateAdd(child)) this.#children.push(child);
  }

  // We pass in the name to be removed
  removeChild(name) {
    if (this.#validateRemove(name)) {
      // Filter out children such that their name is not equal to the name we are removing
      this.#children = this.#children.filter(
        (child) => child.name.toUpperCase() !== name.toUpperCase()
      );
      return name;
    }
  }

  get children() {
    console.info("Getting children");
    return this.#children;
  }
}
