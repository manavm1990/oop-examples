import { isInRange } from "../utils.js";

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

    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === "number") {
      if (isInRange({ num: input, min: 90, max: 100 })) {
        return "A";
      }

      if (isInRange({ num: input, min: 80, max: 89 })) {
        return "B";
      }

      if (isInRange({ num: input, min: 70, max: 79 })) {
        return "C";
      }

      if (isInRange({ num: input, min: 60, max: 69 })) {
        return "D";
      }

      if (input < 60) {
        return "F";
      }
    }

    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === "string") {
      switch (input) {
        case "A":
          return "90 - 100";
        case "B":
          return "80 - 89";
        case "C":
          return "70 - 79";
        case "D":
          return "60 - 69";
        case "F":
          return "0 - 59";
        default:
          return "0";
      }
    }
  }
}
