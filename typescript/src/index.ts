
// what typescript fix and javascript allows
// TypeScript will throw an error if you try to assign a value of a different type to a variable with a specified type.
// JavaScript allows changing the type of a variable at any time.
// Example in TypeScript
// const y: string = "hello";
// y = 42; // This will cause an error in TypeScript

// Example in JavaScript
// let z = "hello";
// z = 42; // This is allowed in JavaScript

// const x: string = "text";
let x: string = "hello world";
// Cannot redeclare block-scoped variable 'x'.ts(2451)
// how to fi that

let num : number = 30


// x = "dewf";
// console.log(x);

// types
let arr : number[] = [1,2,3,4,5];
let strArr : string [] = ["ahmed", "mohammed", "youssef"];
let arr2 : (number | string | boolean)[] = [12, "hello", true, 13];
arr2.push("test");

let arr3 : any [] = [12, "hello", true];

// any : is a special type that opts out of type-checking, allowing a variable to hold any value and bypassing all compile-time type safety.

let v : any = 10;
v = "hello";

// alert(x);
// alert(strArr);
// alert(v);
// alert(arr2);

// function types

const w = () => {
    console.log("Function w called");
    return 10;
};

// arrow function in typescript
const funstring : () => string = () => {
    return "Function fun called";
}
const fun : (x: number, y: number) => number = (x, y) => {
    return x+y;
}


const r = (x: number, y: number)=> {
    return ["hello", true]
}

const z = (x: string , y: number)=> {
    return ["hello", true]
}

// alert(fun(5,4));

