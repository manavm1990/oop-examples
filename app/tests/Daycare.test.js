import { describe, expect, it } from "vitest";
import Child from "../models/Child.js";
import Daycare from "../models/Daycare.js";

describe("Add 🧒🏾", () => {
  it("should add a child to the 'children' array", () => {
    // Arrange
    const child = new Child("Tammy", 1);
    const daycare = new Daycare();

    // Act
    daycare.addChild(child);

    // Assert
    expect(daycare.children.length).toBe(1);
    expect(daycare.children[0]).toBe(child);
  });

  it("should not add a child over the 'ageLimit'", () => {
    // Arrange
    const child = new Child("Tammy", 7);
    const daycare = new Daycare();

    // Act
    daycare.addChild(child);

    // Assert
    expect(daycare.children.length).toBe(0);
  });

  it("should not add a child if already at capacity (defaults to '3')", () => {
    // Arrange
    // Create 4 children dynamically using the Array.from() method and the object argument with a 'length' property
    const children = Array.from(
      { length: 4 },
      (_, i) => new Child(`Tammy ${i}`, 1)
    );
    const daycare = new Daycare();

    // Act
    children.forEach((child) => {
      daycare.addChild(child);
    });

    // Assert
    expect(daycare.children.length).toBe(3);
  });

  it("should throw an error if not provided a Child object as an argument", () => {
    // Arrange
    const daycare = new Daycare();

    // Act
    const act = () => daycare.addChild({});

    // Assert
    expect(act).toThrowError();
  });
});

describe("Remove 🧒🏾", () => {
  it("should remove the first child found with a given name from 'children' and return it", () => {
    // Arrange
    const child = new Child("Tammy", 1);
    const daycare = new Daycare();
    daycare.addChild(child);

    // Act
    const removedChildName = daycare.removeChild("Tammy");
    // Assert
    expect(daycare.children.length).toBe(0);
    expect(removedChildName).toBe("Tammy");
  });

  it("should return undefined and remove no children if child is not in 'children'", () => {
    // Arrange
    const child = new Child("Tammy", 1);
    const daycare = new Daycare();
    daycare.addChild(child);

    // Act
    const removedChild = daycare.removeChild("Tammy 2");

    // Assert
    expect(daycare.children.length).toBe(1);
    expect(removedChild).toBe(undefined);
  });
});
