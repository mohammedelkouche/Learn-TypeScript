import type { Employee } from '../types/user'

type EmployeeArrayOnlyProps = {
  arrayData: Employee['arrayData']
}



function SayHelloArrayOnly({ arrayData }: EmployeeArrayOnlyProps) {
  return (
    <div>
        <h1>hello from SayHelloArrayOnly component</h1>
       {arrayData.map((item, index) => (
        <div key={index}>
          <h1>hello {item.name}</h1>
          <h1>my age is {item.age}</h1>
        </div>
      ))}
    </div>
  )
}

export default SayHelloArrayOnly

/*
Second clean parent pattern (arrayData only):

import SayHelloArrayOnly from './components/SayHelloArrayOnly'

<SayHelloArrayOnly arrayData={employee.arrayData} />
*/
