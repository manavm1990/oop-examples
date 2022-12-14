import { expect, it } from "vitest";

// With a default export, no curly braces are needed
import Child from "../models/Child.js";

it("should create an object with a name and age if provided valid arguments", () => {
  // Arrange
  const nameInput = "Sarah";
  const ageInput = 3;

  // Act
  const child = new Child(nameInput, ageInput);

  // Assert
  expect(child.name).toEqual(nameInput);
  expect(child.age).toEqual(ageInput);
});

it("should throw the correct error message if provided an empty name", () => {
  // Arrange
  const expectedError = new Error(
    "Expected parameter 'name' to be a non-empty string"
  );

  // Act - To test throws, need to use a callback function
  const actual = () => new Child();

  // Assert
  expect(actual).toThrow(expectedError);
});

it("should throw the correct error message if provided an invalid number", () => {
  // Arrange
  const expectedError = new Error(
    "Expected parameter 'age' to be a non-negative number"
  );

  // Act - To test throws, need to use a callback function
  const actual = () => new Child("some name", "some age");

  // Assert
  expect(actual).toThrow(expectedError);
});

it("should throw the correct error message if provided a negative number", () => {
  // Arrange
  const expectedError = new Error(
    "Expected parameter 'age' to be a non-negative number"
  );

  // Act - To test throws, need to use a callback function
  const actual = () => new Child("some name", -1);

  // Assert
  expect(actual).toThrow(expectedError);
});
