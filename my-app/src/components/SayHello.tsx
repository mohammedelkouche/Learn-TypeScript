// import type { UserData } from '../types/user'
import type { Employee } from '../types/user'

type EmployeeProps = {
    employee: Employee
}

// type Props = {
//     name : string;
//     age : number;
//     loggedIn : boolean;
// }



// methode 2 (desitructer)
// type Props = {
//     objdata : {

//         firstName : string;
//         lastName : string;
//         age : number;
//         loggedIn : boolean;
//     }
// }

// methode 3
// type Props = {
//     firstName : string;
//     lastName : string;
    // age : number;
    // loggedIn : boolean;
// }



// methode 4
// type Props = UserData




// methode 1 : function SayHello(props : Props) {
// methode 2 (desitructer) function SayHello({name, age , loggedIn}: Props) {
// methode 3 function SayHello({objdata}: Props) {
// function SayHello({firstName, lastName}: Props) {

// methode 4
// function SayHello({firstName, lastName, age, loggedIn}: Props) {

function SayHello({employee}: EmployeeProps) {
    const { arrayData } = employee
    console.log('arrayData ', arrayData)

  return (
    <div>


        {/* methode 1 :
        
            <h1>hello {props.name}</h1>
            <h1>my age is {props.age}</h1>
            <h1>{props.loggedIn ? "logged in" : "logged out"}</h1> */}

        {/* methode 2 :
            <h1>hello {objdata.firstName}</h1>
            <h1>my age is {objdata.age}</h1>
            <h1>{objdata.loggedIn ? "logged in" : "logged out"}</h1> */}

        {/* methoe 3 and 4*/}
        {/* <h1>hello {firstName} {lastName}</h1>
        <h1>my age is {age}</h1>
        <h1>{loggedIn ? "logged in" : "logged out"}</h1> */}
        
        {/* {arrayData.map((employee, index) => (
            console.log(employee),
            <div key={index}>
                <h1>hello {employee.name}</h1>
                <h1>my age is {employee.age}</h1>
            </div>
        ))
        } */}



        {/* <h1>hello {} </h1>
        <h1>my age is {age}</h1>
        <h1>{loggedIn ? "logged in" : "logged out"}</h1> */}

                {arrayData.map((item, index) => (
                    <div key={index}>
                        <h1>hello {item.name}</h1>
                        <h1>my age is {item.age}</h1>
                    </div>
                ))}

    </div>
  )
}

export default SayHello