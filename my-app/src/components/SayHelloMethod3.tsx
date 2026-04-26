import type { UserData } from '../types/user'

type Props = {
  objdata: UserData
}

function SayHelloMethod3({ objdata }: Props) {
  return (
    <div>
      <h2>Method 3</h2>
      <h1>hello {objdata.firstName} {objdata.lastName}</h1>
      <h1>my age is {objdata.age}</h1>
      <h1>{objdata.loggedIn ? 'logged in' : 'logged out'}</h1>
    </div>
  )
}

export default SayHelloMethod3
