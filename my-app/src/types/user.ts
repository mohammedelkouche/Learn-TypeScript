// methode4

export type UserData = {
  firstName: string
  lastName: string
  age: number
  loggedIn: boolean
}

// what we can descripte this data
// array of array of string and number
// let employee: [string, number ] []= 
// [
//     ["mohammed", 7],
//     ["sara", 8],
//     ["yassine", 9]
// ]

// array of object with name and age
export type Employee = {
    arrayData : {
        name: string,
        age: number
    } [];
};

// Employee array of object with name and age
// example
// let employee: Employee = {
//     arrayData: [
//         {name: "mohammed", age: 7},
//         {name: "sara", age: 8},
//         {name: "yassine", age: 9}
//     ]
// }