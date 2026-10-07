interface Person {
    name: string;
    age: number;
}
type PersonType = {
    name: string;
    age: number;
};
declare const person2: PersonType;
interface Employee extends Person {
    employeeId: number;
}
declare const employee1: Employee;
type StringOrNumber = string | number;
declare const value1: StringOrNumber;
declare const value2: StringOrNumber;
interface Car {
    make: string;
    model: string;
    year?: number;
}
declare const myCar: Car;
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare let favoriteColor: Color;
declare class PersonClass {
    name: string;
    age: number;
    constructor(name: string, age: number);
    greet(): void;
}
declare const personInstance: PersonClass;
interface IPerson {
    name: string;
    age: number;
    greet(): void;
}
declare class PersonWithInterface implements IPerson {
    name: string;
    age: number;
    constructor(name: string, age: number);
    greet(): void;
}
declare const personInterfaceInstance: PersonWithInterface;
//# sourceMappingURL=interface.d.ts.map