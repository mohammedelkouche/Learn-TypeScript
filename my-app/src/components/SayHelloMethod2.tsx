type Props = {
  name: string
  age: number
  loggedIn: boolean
}

// methode 2 (desitructer)
function SayHelloMethod2({ name, age, loggedIn }: Props) {
  return (
    <div>
      <h2>Method 2</h2>
      <h1>hello {name}</h1>
      <h1>my age is {age}</h1>
      <h1>{loggedIn ? 'logged in' : 'logged out'}</h1>
    </div>
  )
}

export default SayHelloMethod2
