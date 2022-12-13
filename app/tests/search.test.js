// TDD - Write a failing test first
// We are using ESM - EcmaScript Modules
import { expect, it } from "vitest";
import { search } from "../search.js";

// Happy Path
it("should return the index of the number in the array", () => {
  // Arrange
  const nums = [82, 22, -4, 21, 1, 8];
  const target = 8;
  const expected = 5;

  // Act
  const actual = search(nums, target);

  // Assert
  expect(actual).toBe(expected);
});

// Sad Path
it("should return -1 if the number is not in the array", () => {
  // Arrange
  const nums = [82, 22, -4, 21, 1, 8];
  const target = 7;
  const expected = -1;

  // Act
  const actual = search(nums, target);

  // Assert
  expect(actual).toBe(expected);
});
