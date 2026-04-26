type Props = {
  name: string
  age: number
  loggedIn: boolean
}


// methode 2 (desitructer)
function SayHelloMethod1(props: Props) {
  return (
    <div>
      <h2>Method 1</h2>
      <h1>hello {props.name}</h1>
      <h1>my age is {props.age}</h1>
      <h1>{props.loggedIn ? 'logged in' : 'logged out'}</h1>
    </div>
  )
}

export default SayHelloMethod1
