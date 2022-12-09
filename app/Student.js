import { isInRange } from "./utils.js";

export class Student {
  constructor({ first, last, age }) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  // Polymorphism because we can use the same method name with different types of arguments
  displayGrade(grade) {
    const input = grade;
    if (!input) {
      throw new Error("no grade provided");
    }

    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === "number") {
      if (isInRange({ num: input, min: 90, max: 100 })) {
        response = "A";
      }

      if (isInRange({ num: input, min: 80, max: 89 })) {
        response = "B";
      }

      if (isInRange({ num: input, min: 70, max: 79 })) {
        response = "C";
      }

      if (isInRange({ num: input, min: 60, max: 69 })) {
        response = "D";
      }

      if (input < 60) {
        response = "F";
      }

      return response;
    }

    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === "string") {
      switch (input) {
        case "A":
          response = "90 - 100";
          break;
        case "B":
          response = "80 - 89";
          break;
        case "C":
          response = "70 - 79";
          break;
        case "D":
          response = "60 - 69";
          break;
        case "F":
          response = "0 - 59";
          break;
        default:
          response = "0";
          break;
      }

      return response;
    }
  }
}
