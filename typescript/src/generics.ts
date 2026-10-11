//========================
// generics : allow you to create reusable components that work with a variety of types.
//========================

// How to RUN `generics.ts`:
// 1 )
// <script src="index.js"></script>
// Change it to:
// <script src="generics.js"></script>
// run  =>  npx tsc

// If you want to keep both, do:

// ```html
// <script src="index.js"></script>
// <script src="generics.js"></script>
// ```

// > Careful: both are global scripts (`moduleDetection: legacy`), so don't declare same function/variable names in both files.

// 2 )
// __Option B — In Node.js (easier for `console.log`):__
// node dist/generics.js
// ### 3. Shortcut without compiling:
// Install once:
// npm install -D tsx
// 

function returnNumber (val : number ): number
{
    return val;
}

function returnString (val : string ): string
{
    return val;
}

function returnBoolean (val : boolean ): boolean
{
    return val;
}

console.log(returnNumber(5));
console.log(returnString("Hello"));
console.log(returnBoolean(true));

//=================================

// Using generics to create a reusable function
function returnValue<T>(val: T): T {
    return val;
}

console.log(returnValue<number>(5));
console.log(returnValue<string>("Hello"));
console.log(returnValue<boolean>(true));
console.log(returnValue<number[]>([1, 2, 3]));
console.log(returnValue<Array<string>>(["a", "b", "c"]));

// arrow function 

const returnValueArrow = <T>(val: T): T => val;

console.log(returnValueArrow<number>(5));



// in this example i always return string
function testType<T>(val : T): string {
    // return the value is {val}
    return `the the value is ${val} and Type is ${typeof val}`
}

console.log(testType<string>("hello"));




// multiple types

function multipleTypes<T, S>(valueOne : T, valueToo : S): string {
    // return the value is {val}
    return `the the value is ${valueOne} and Type is ${typeof valueToo}`
}

console.log(multipleTypes<string, number>("how are you",200));


// Generics classes

// <T = string> : means that if no type is provided, it will default to string.
class  User <T = string>{
    constructor(public value: T){}

    show(msg: T ): void {
        console.log(`${this.value} says: ${msg}`);
    }

}

let userOne = new User<string>("hamza");
console.log(userOne.value);
userOne.show("Hello!");

let usertwo = new User<number | string >(100);
console.log(usertwo.value);
usertwo.show(200);
// | string : allows the value to be either a number or a string.
usertwo.show("Message");