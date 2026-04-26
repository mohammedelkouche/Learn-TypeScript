import './App.css'
import SayHello from './components/SayHello'
// import type { UserData } from './types/user'
import type { Employee } from './types/user'
import SayHelloArrayOnly from './components/SayHelloArrayOnly'
import SayHelloMethod1 from './components/SayHelloMethod1'
import SayHelloMethod2 from './components/SayHelloMethod2'
import SayHelloMethod3 from './components/SayHelloMethod3'
import SayHelloMethod4 from './components/SayHelloMethod4'
import type { UserData } from './types/user'



function App() {
  // const [count, setCount] = useState(0)

  // methode 1,2, 3,
  // const objdata = {
  //   firstName : "mohammed",
  //   lastName : "elghazali",
  //   age : 7,
  //   loggedIn : true
  // }

  // methode 4
  // const objdata: UserData = {
  //   firstName : "mohammed",
  //   lastName : "elghazali",
  //   age : 7,
  //   loggedIn : true
  // }

  let employee : Employee = {
    arrayData : [
        {name: "mohammed", age: 7},
        {name: "sara", age: 8},
        {name: "yassine", age: 9}
    ]
  }

  const objdata: UserData = {
    firstName: 'mohammed',
    lastName: 'elghazali',
    age: 7,
    loggedIn: true,
  }



  // [
  //     {name: "mohammed", age: 7},
  //     {name: "sara", age: 8},
  //     {name: "yassine", age: 9}
  // ];


  return (
    <>      
      
      <SayHelloMethod1 name="mohammed" age={7} loggedIn={true} />
      
      {/* methode 2 (desitructer) */}
      <SayHelloMethod2 name="mohammed" age={7} loggedIn={true} />
      
      {/* pass the whole object as a prop :use spread operator to pass all the data in the object as props  */}
      <SayHelloMethod3 objdata={objdata} />
      
      {/* spread operator */}
      <SayHelloMethod4 {...objdata} />

      
      {/* pass the whole object as a prop */}
      <SayHello employee={employee} />
      
      {/* paass only the array of object with name and age */}
      <SayHelloArrayOnly arrayData={employee.arrayData} />

    


    </>
  )
}

export default App
