import type { UserData } from '../types/user'

function SayHelloMethod4({ firstName, lastName, age, loggedIn }: UserData) {
  return (
    <div>
      <h2>Method 4</h2>
      <h1>hello {firstName} {lastName}</h1>
      <h1>my age is {age}</h1>
      <h1>{loggedIn ? 'logged in' : 'logged out'}</h1>
    </div>
  )
}

export default SayHelloMethod4
