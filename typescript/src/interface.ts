// interface : is a way to define the structure of an object in TypeScript. It specifies the properties and their types that an object must have.
// example

interface Person {
    name: string;
    age: number;
}

// const person1: Person = {
//     name: "Ahmed",
//     age: 25
// };




// type alias : is a way to define a custom type in TypeScript. It allows you to create a new name for a type, which can be used to describe the structure of an object or other types.

type PersonType = {
    name: string;
    age: number;
};

const person2: PersonType = {
    name: "Youssef",
    age: 30
};


// difference between interface and type alias:
// 1. Interface can be extended using 'extends', while type alias cannot.
// example of extending an interface
interface Employee extends Person {
    employeeId: number;
}

const employee1: Employee = {
    name: "Sara",
    age: 28,
    employeeId: 1234
};

// 2. Type alias can represent any type, including primitives, unions, and intersections, while interface is mainly for object shapes.
// example of type alias representing a union type
type StringOrNumber = string | number;  

const value1: StringOrNumber = "Hello";
const value2: StringOrNumber = 42;


// 3. Interface can be merged, type alias cannot.
// example of interface merging

// interface Person {
//     name: string;
//     age: number;
//     address: string;
// }

// const person3: Person = {
//     name: "Omar",
//     age: 35,
//     address: "123 Main St"
// };

//I stile don't inderstand example of interface merging
// The interface Person was defined earlier with name and age properties.
// Later, it was defined again with an additional address property.
// TypeScript merges these two definitions into a single interface with all three properties: name, age, and address.

// optionale properties in interface
interface Car {
    make: string;
    model: string;
    year?: number; // optional property
}

const myCar: Car = {
    make: "Toyota",
    model: "Corolla"
};


// enums : is a way to define a set of named constants in TypeScript.
// example complete

enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Green;

favoriteColor = Color.Red;

if (favoriteColor === Color.Red) {
    console.log("Favorite color is red");
}

// classes using TypeScript

class PersonClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const personInstance = new PersonClass("Ahmed", 25);
personInstance.greet();

// using interface with classes
interface IPerson {
    name: string;
    age: number;
    greet(): void;
}

class PersonWithInterface implements IPerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const personInterfaceInstance = new PersonWithInterface("Mohammed", 30);
personInterfaceInstance.greet();
