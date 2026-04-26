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