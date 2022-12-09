import { Student } from "./Student.js";

const John = new Student({ first: "John", last: "Appleseed", age: "30" });
console.log("John.displayGrade():", John.displayGrade(95));
console.log("John.displayGrade():", John.displayGrade("B"));
