import './App.css'
import SayHello from './components/SayHello'

function App() {
  // const [count, setCount] = useState(0)
  const objdata = {
    firstName : "mohammed",
    lastName : "elghazali",
    age : 7,
    loggedIn : true
  }

  return (
    <>
      {/* methode 1 :
      
      <SayHello name ="mohammed" age={5} loggedIn={true} /> */}
      {/* methode 3 <SayHello objdata={objdata} /> */}
      <SayHello firstName={objdata.firstName} lastName={objdata.lastName} />
    </>
  )
}

export default App
