"use strict";
// interface : is a way to define the structure of an object in TypeScript. It specifies the properties and their types that an object must have.
// example
const person2 = {
    name: "Youssef",
    age: 30
};
const employee1 = {
    name: "Sara",
    age: 28,
    employeeId: 1234
};
const value1 = "Hello";
const value2 = 42;
const myCar = {
    make: "Toyota",
    model: "Corolla"
};
// enums : is a way to define a set of named constants in TypeScript.
// example complete
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
favoriteColor = Color.Red;
if (favoriteColor === Color.Red) {
    console.log("Favorite color is red");
}
// classes using TypeScript
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const personInstance = new PersonClass("Ahmed", 25);
personInstance.greet();
class PersonWithInterface {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const personInterfaceInstance = new PersonWithInterface("Mohammed", 30);
personInterfaceInstance.greet();
//# sourceMappingURL=interface.js.map