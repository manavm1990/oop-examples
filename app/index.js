import DayCare from "./models/Daycare.js";
import Child from "./models/Child.js";

const child1 = new Child("Tammer", 3);
const child2 = new Child("Alec", 1);
const child3 = new Child("Lisa", 2);

const dayCare = new DayCare();

dayCare.addChild(child1);
dayCare.addChild(child2);
dayCare.addChild(child3);

console.log(dayCare.children);

const child4 = new Child("Rosie", 1);
dayCare.addChild(child4);

// Capacity reached, child not added
console.log(dayCare.children);

dayCare.removeChild("Tammer");

// Tammer is no longer at daycare
console.log(dayCare.children);

// Able to add Rosie now
dayCare.addChild(child4);
console.log(dayCare.children);

dayCare.removeChild("Alec");

// Jan not added, he's above the age limit
const child5 = new Child("Jan", 20);
dayCare.addChild(child5);
console.log(dayCare.children);
