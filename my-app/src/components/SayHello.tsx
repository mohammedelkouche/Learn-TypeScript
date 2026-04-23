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
type Props = {
    firstName : string;
    lastName : string;
    // age : number;
    // loggedIn : boolean;
}

// methode 1 : function SayHello(props : Props) {
// methode 2 (desitructer) function SayHello({name, age , loggedIn}: Props) {
// methode 3 function SayHello({objdata}: Props) {
function SayHello({firstName, lastName}: Props) {
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

        {/* methoe 3*/}
        <h1>hello {firstName} {lastName}</h1>

    </div>
  )
}

export default SayHello